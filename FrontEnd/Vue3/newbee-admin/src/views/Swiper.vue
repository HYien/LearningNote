<template>
  <el-card class="swiper-container">
    <template #header>
      <el-card class="swiper-container">
        <div class="header">
          <el-button type="primary" size="small" icon="el-icon-plus" @click="handleAdd">增加</el-button>
          <el-popconfirm
            title="确定删除吗？"
            confirmButtonText="确定"
            cancelButtonText="取消"
          >
            <template #reference>
              <el-button type="danger" size="small" icon="el-icon-delete" @click="handleDelete">批量删除</el-button>
            </template>
          </el-popconfirm>
        </div>
      </el-card>
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
        label="轮播图"
        width="200"
      >
        <template #default="scope">
          <img style="width: 150px;height:150px" :src="scope.row.carouseUrl" alt="轮播图" />
        </template>
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
        prop="carouselRank"
        label="排序值"
        width="120"
      >
      </el-table-column>
      <el-table-column
        prop="createTime"
        label="添加时间"
        width="200"
      >
      </el-table-column>
    </el-table>
    <el-pagination
      backgroud
      layout="prev, pager, next"
      :total="state.total"
      :page-size="state.pageSize"
      :current-page="state.currentPage"
      @current-change="changePage"
    >
    </el-pagination>
  </el-card>
  <DialogAddSwiper ref="addSwiper" :reload="getCarousels" :type="state.type" />
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue'
import axios from '@/utils/axios'
import DialogAddSwiper from '@/components/DialogAddSwiper.vue'
import { ElMessage } from 'element-plus'

const state = reactive({
  loading: false,
  tableData: [],
  currentPage: 1,
  pageSize: 10,
  total: 0,
  type: 'add',
  multipleSelection: []
})

const addSwiper = ref(null)

const handleSelectionChange = (val) => {
  state.multipleSelection = val
}

const handleDelete = () => {
  if (!state.multipleSelection.length) {
    ElMessage.error('请选择项！')
    return
  }
  axios.delete('/carousels', {
    data: {
      ids: state.multipleSelection.map(i => i.carouselId)
    }
  }).then(() => {
    ElMessage.success('删除成功！')
    getCarousels()
  })
}

onMounted(() => {
  getCarousels()
})

const handleAdd = () => {
  state.type = 'add'
  addSwiper.value.open()
}

const handleEdit = (id) => {
  state.type = 'edit'
  addSwiper.value.open(id)
}

const getCarousels = () => {
  state.loading = true
  axios.get('/carousels', {
    params: {
      pageNumber: state.currentPage,
      pageSize: state.pageSize
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
  getCarousels()
}
</script>

<style lang="scss" scoped>

</style>