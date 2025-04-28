<template>
  <el-dialog
    :title="props.type === 'add' ? '添加商品' : '修改商品'"
    v-model="state.visible"
    width="400px"
  >
    <el-form
      :model="state.ruleForm"
      :rules="state.rules"
      ref="formRef"
      label-width="100px"
      class="good-form"
    >
      <el-form-item label="商品名称" prop="name">
        <el-input type="text" v-model="state.ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="跳转链接" prop="link">
        <el-input type="text" v-model="state.ruleForm.link"></el-input>
      </el-form-item>
      <el-form-item label="商品编号" prop="id">
        <el-input type="number" v-model="state.ruleForm.id"></el-input>
      </el-form-item>
      <el-form-item label="排序值" prop="sort">
        <el-input type="number" v-model="state.ruleForm.sort"></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="close">
          取消
        </el-button>
        <el-button type="primary" @click="submitForm">确定</el-button>

      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { reactive, ref } from 'vue'
import axios from '@/utils/axios'
import { ElMessage } from 'element-plus'

const props = defineProps({
  type: String,
  configType: Number,
  reload: Function
})

const formRef = ref(null)
const state = reactive({
  visible: false,
  ruleForm: {
    name: '',
    link: '',
    id: '',
    sort: ''
  },
  rules: {
    name: [
      {
        required: true,
        message: '名称不能为空',
        trigger: ['change']
      }
    ],
    id: [
      {
        required: true,
        message: '编号不能为空',
        trigger: ['change']
      }
    ],
    sort: [
      {
        required: true,
        message: '排序不能为空',
        trigger: ['change']
      }
    ]
  },
  id: ''
})

const getDetail = (id) => {
  axios.get(`/indexConfigs/${id}`).then(res => {
    console.log(res, 'res')
    state.ruleForm = {
      name: res.configName,
      id: res.goodsId,
      link: res.redirectUrl,
      sort: res.configRank
    }
  })
}

const open = (id) => {
  state.visible = true
  if (id) {
    state.id = id
    getDetail(id)
  } else {
    state.ruleForm = {
      name: '',
      id: '',
      link: '',
      sort: ''
    }
  }
}

const close = () => {
  state.visible = false
}

const submitForm = () => {
  formRef.value.validate((valid) => {
    if (valid) {
      if (state.ruleForm.id < 0) {
        ElMessage.error('商品编号不合法')
        return 
      }

      if (props.type === 'add') {
        axios.post('/indexConfigs', {
          configType: props.configType || 3,
          configName: state.ruleForm.name,
          goodsId: state.ruleForm.id,
          redirectUrl: state.ruleForm.link,
          configRank: state.ruleForm.sort
        }).then(() => {
          ElMessage.success('添加成功')
          close()
          if (props.reload) props.reload()
        })
      } else {
        axios.put(`/indexConfigs`, {
          configId: state.id,
          configType: props.configType || 3,
          configName: state.ruleForm.name,
          goodsId: state.ruleForm.id,
          redirectUrl: state.ruleForm.link,
          configRank: state.ruleForm.sort
        }).then(() => {
          ElMessage.success('修改成功')
          close()
          if (props.reload) props.reload()
        })
      }
    } else {
      console.log('error submit!')
      return false
    }
  })
}

defineExpose({ open, close })
</script>

<style lang="scss" scoped>

</style>