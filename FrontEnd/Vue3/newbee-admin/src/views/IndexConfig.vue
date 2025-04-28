<template>
  <el-card class="index-container">
    <template #header>
      <div class="header">
        <el-button type="primary" size="small" icon="el-icon-plus" @click="handleAdd">增加</el-button>
        <el-popconfirm
          title="确定删除吗？"
          confirmButtonText='确定'
          cancelButtonText='取消'
          @confirm="handleDelete"
        >
          <template #reference>
            <el-button type="danger" size="small" icon="el-icon-delete">批量删除</el-button>
          </template>
        </el-popconfirm>
      </div>
    </template>
    <el-table
      :load="state.loading"
      :data="state.tableData"
      tooltip-effect="dark"
      style="width: 100%;"
      @selection-change="handleSelectionChange"
    >
      <el-table-column
        type="selection"
        width="55"
      >
      </el-table-column>
      <el-table-column
        prop="configName"
        label="商品名称"
      >
      </el-table-column>
      <el-table-column
        label="跳转链接"
      >
        <template #default="scope">
          <a target="_blank" :href="scope.row.redirectUrl">
            {{ scope.row.redirectUrl }}
          </a>
        </template>
      </el-table-column>
      <el-table-column
        prop="configRank"
        label="排序值"
        width="120"
      >
      </el-table-column>
      <el-table-column
        prop="goodsId"
        label="商品编号"
        width="200"
      >
      </el-table-column>
      <el-table-column
        prop="createTime"
        label="添加时间"
        width="200"
      >
      </el-table-column>
      <el-table-column
        label="操作"
        width="100"
      >
        <template #default="scope">
          <a 
            style="cursor: pointer;margin-right: 10px;"
            @click="handleEdit(scope.row.configId)"
          >
            修改
          </a>
          <el-popconfirm
            title="确定删除吗？"
            confirmButtonText="确定"
            cancelButtonText="取消"
            @confirm="handleDeleteOne(scope.row.configId)"
          >
            <template #reference>
              <a style="cursor: pointer;">删除</a>
            </template>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      background
      layout="prev, pager, next"
      :total="state.total"
      :page-size="state.pageSize"
      :current-page="state.currentPage"
      @current-change="changePage"
    >

    </el-pagination>
  </el-card>
  <DialogAddGood
    ref="addGood"
    :type="state.type"
    :configType="state.configType"
    @reload="getIndexConfig"
  />
</template>

<script setup>
import { onMounted, onUnmounted, reactive, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import axios from '@/utils/axios'
import DialogAddGood from '@/components/DialogAddGood.vue'

const configTypeMap = {
  hot: 3,
  new: 4,
  recommend: 5
}

const router = useRouter()
const route = useRoute()
const state = reactive(({
  loading: false,
  tableData: [],
  total: 0,
  currentPage: 1,
  pageSize: 10,
  type: 'add',
  configType: 3,
  multipleSelection: []
}))

onMounted(() => {
  state.configType = configTypeMap[route.name]
  getIndexConfig()
})

const getIndexConfig = () => {
  state.loading = true
  axios.get('/indexConfigs', {
    params: {
      pageNumber: state.currentPage,
      pageSize: state.pageSize,
      configType: state.configType
    }
  }).then(res => {
    state.tableData = res.list
    state.total = res.totalCount
    state.currentPage = res.currPage
    state.loading = false
  })
}

const changePage = (val) => {
  state.currentPage = val
  getIndexConfig()
}

const addGood = ref(null)

const handleAdd = () => {
  state.type = 'add'
  console.log('addGood', addGood)
  addGood.value.open()
}
const handleSelectionChange = (val) => {
  state.multipleSelection = val
}

const handleEdit = (configId) => {
  state.type = 'edit'
  addGood.value.open(configId)
}

const handleDelete = () => {
  if (!state.multipleSelection.length) {
    ElMessage.error('请选择项！')
    return
  }
  axios.delete('/indexConfigs/delete', {
    data: {
      ids: state.multipleSelection.map(i => i.configId)
    }
  }).then(() => {
    ElMessage.success('删除成功！')
    getIndexConfig()
  })
}

const handleDeleteOne = (configId) => {
  axios.post('/indexConfigs/delete', {
    data: {
      ids: [configId]
    }
  }).then(() => {
    ElMessage.success('删除成功！')
    getIndexConfig()
  })
}

router.beforeEach((to) => {
  console.log('to', to.name)
  if (['hot', 'new', 'recommend']?.includes(to.name)) {
    state.configType = configTypeMap[to.name]
    state.currentPage = 1
    getIndexConfig()
  }
})

// onUnmounted(() => {
//   unWatch()
// })
</script>

<style lang="scss" scoped>

</style>