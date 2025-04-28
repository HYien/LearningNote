<template>
  <el-card class="category-container">
    <template #header>
      <div class="header">
        <el-button type="primary" :icon="Plus" @click="handleAdd">增加</el-button>
        <el-popconfirm
          title="确定删除吗？"
          confirmButtonText='确定'
          cancelButtonText='取消'
          @confirm="handleDelete"
        >
          <template #reference>
            <el-button type="danger" :icon="Delete">批量删除</el-button>
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
        prop="categoryName"
        label="分类名称"
      >
      </el-table-column>
      <el-table-column
        prop="categoryRank"
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
      <el-table-column
        label="操作"
        width="220"
      >
        <template #default="scope">
          <a style="cursor: pointer; margin-right: 10px" @click="handleEdit(scope.row.categoryId)">修改</a>
          <a style="cursor: pointer; margin-right: 10px" @click="handleNext(scope.row)">下级分类</a>
          <el-popconfirm
            title="确定删除吗？"
            @confirm="handleDeleteOne(scope.row.categoryId)"
          >
            <template #reference>
              <a style="cursor: pointer">删除</a>
            </template>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
    <!--总数超过一页，再展示分页器-->
    <el-pagination
      background
      layout="prev, pager, next"
      :total="state.total"
      :page-size="state.pageSize"
      :current-page="state.currentPage"
      @current-change="changePage"
    />
    <DialogAddCategory ref='addCate' :reload="getCategory" :type="state.type" />
  </el-card>
</template>

<script setup>
import { onMounted, onUnmounted, reactive, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import axios from '@/utils/axios'
import { ElMessage } from 'element-plus'
import { Plus, Delete } from '@element-plus/icons-vue'
import DialogAddCategory from '@/components/DialogAddCategory.vue'

const router = useRouter()
const route = useRoute()
const state = reactive({
  loading: false,
  tableData: [],
  total: 0,
  currentPage: 1,
  pageSize: 10,
  type: 'add',
  level: 1,
  parent_id: 0,
  multipleSelection: []
})

onMounted(() => {
  getCategory()
})
const getCategory = () => {
  state.loading = true
  const { level, parent_id = 0 } = route.query
  axios.get('/categories', {
    params: {
      pageNumber: state.currentPage,
      pageSize: state.pageSize,
      categoryLevel: level || 1,
      parentId: state.parent_id
    }
  }).then(res => {
    state.tableData = res.list
    state.total = res.totalCount
    state.currentPage = res.currPage
    state.loading = false
    state.level = level
    state.parentId = parent_id
  })
}

const changePage = (val) => {
  state.currentPage = val
  getCategory()
}

const handleNext = (item) => {
  const levelNumber = item.categoryLevel + 1
  if (levelNumber === 4) {
    ElMessage.error('没有下一级')
    return
  }
  router.push({
    name: `level${levelNumber}`,
    query: {
      level: levelNumber,
      parent_id: item.categoryId
    }
  })
}
const addCate = ref(null)
const handleAdd = () => {
  state.type = 'add'
  addCate.value.open()
}

const handleEdit = (id) => {
  state.type = 'edit'
  addCate.value.open(id)
}

const handleSelectionChange = (val) => {
  state.multipleSelection = val
}

const handleDelete = () => {
  if (!state.multipleSelection.length) {
    ElMessage.error('请选择项！')
    return
  }
  axios.delete('/categories', {
    data: {
      ids: state.multipleSelection.map(i => i.categoryId)
    }
  }).then(() => {
    ElMessage.success('删除成功！')
    getCategory()
  })
}

const handleDeleteOne = (id) => {
  axios.delete('/categories', {
    data: {
      ids: [id]
    }
  }).then(() => {
    ElMessage.success('删除成功！')
    getCategory()
  })
}

const unwatch = router.afterEach((to, from) => {
  // 每次路由变化的时候，都会触发监听时间，重新获取列表数据
  if (['category', 'level2', 'level3'].includes(to.name)) {
    getCategory()
  }
})

onUnmounted(() => {
  unwatch()
})
</script>

<style lang="scss" scoped>

</style>