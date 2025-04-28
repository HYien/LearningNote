<template>
  <el-table
    :data="state.tableData"
    style="width: 100%"
    v-loading="state.loading"
    tooltip-effect="dark"
    @selection-change="handleSelectionChange"
  >
    <slot name="column"></slot>
  </el-table>
  <el-pagination
    background
    layout="prev, pager, next"
    :total="state.total"
    :page-size="state.pageSize"
    :current-page="state.currentPage"
    @current-change="changePage"
  />
</template>

<script setup>
import { onMounted, reactive } from 'vue'
import axios from '@/utils/axios';

const props = defineProps({
  action: String
})

onMounted(() => {
  getList()
})

const state = reactive({
  loading: false,
  tableData: [],
  total: 0,
  currentPage: 1,
  pageSize: 10,
  multipleSelection: []
})

const getList = () => {
  state.loading = true
  axios.get(props.action, {
    params: {
      pageNumber: state.currentPage,
      pageSize: state.pageSize
    }
  }).then(res => {
    state.tableData = res.list
    state.total = res.totalCount
    state.currentPage = res.currPage
  }).finally(() => {
    state.loading = false
  })
}

const handleSelectionChange = (val) => {
  state.multipleSelection = val
}

const changePage = (val) => {
  state.currentPage = val
  getList()
}

defineExpose({
  getList,
  state
})
</script>

<style lang="scss" scoped>

</style>