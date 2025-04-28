<template>
  <el-dialog
    :title="state.type === 'add' ? '添加分类' : '修改分类'"
    v-model="state.visible"
    width="400px"
  >
    <el-form
      ref="formRef"
      :model="state.ruleForm"
      :rules="state.rules"
      label-width="100px"
      class="good-form"
    >
      <el-form-item label="商品名称" prop="name">
        <el-input v-model="state.ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="排序值" prop="rank">
        <el-input v-model="state.ruleForm.rank"></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="colse">取 消</el-button>
        <el-button type="primary" @click="submitForm">确 定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useRoute } from 'vue-router'
import axios from '@/utils/axios'
import { ElMessage } from 'element-plus'

const props = defineProps({
  type: String,
  reload: Function
})
const formRef = ref(null)
const route = useRoute()
const state = reactive({
  visible: false,
  categoryLevel: 1,
  parentId: 0,
  ruleForm: {
    name: '',
    rank: ''
  },
  rules: {
    name: [
      {
        required: true,
        message: '名称不能为空',
        trigger: ['change']
      }
    ],
    rank: [
      {
        required: true,
        message: '编号不能为空',
        trigger: ['change']
      }
    ]
  },
  id: ''
})
const getDetail = (id) => {
  axios.get(`/categories/${id}`).then(res => {
    console.log(res, '=====res===')
    state.ruleForm = {
      name: res.categoryName,
      rank: res.categoryRank
    }
    state.parentId = res.parentId
    state.categoryLevel = res.categoryLevel
  })
}

const open = (id) => {
  state.visible = true
  if (id) {
    state.id = id
    getDetail(id)
  } else {
    const { level, parent_id } = route.query
    state.ruleForm = {
      name: '',
      rank: ''
    }
    state.parentId = 0
    state.categoryLevel = 1
  }
}

const colse = () => {
  state.visible = false
}

const submitForm = () => {
  formRef.value.validate((valid) => {
    if (valid) {
      const { name, rank } = state.ruleForm
      const params = {
        categoryName: name,
        categoryRank: rank,
        parentId: state.parentId,
        categoryLevel: state.categoryLevel
      }
      if (props.type === 'add') {
        axios.post('/categories', params).then(res => {
          ElMessage.success('添加成功')
          state.visible = false
          if (props.reload) props.reload()
        })
      } else {
        params.categoryId = state.id
        axios.put(`/categories`, params).then(res => {
          ElMessage.success('修改成功')
          state.visible = false
          if (props.reload) props.reload()
        })
      }
      
    } else {
      console.log('error submit!!')
      return false
    }
  })
}
defineExpose({ open, close })
</script>

<style lang="scss" scoped>

</style>