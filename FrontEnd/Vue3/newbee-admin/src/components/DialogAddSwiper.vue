<template>
  <el-dialog
    :title="type === 'add' ? '添加轮番图' : '修改轮番图'"
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
      <el-form-item label="图片" prop="url">
        <el-upload
          class="avatar-uploader"
          :action="state.uploadImgServer"
          accept="jpg,jpeg,png"
          :headers="{
            token: state.token
          }"
          :show-file-list="false"
          :before-upload="handleBeforeUpload"
          :on-success="handleUrlSuccess"
        >
          <img 
            v-if="state.ruleForm.url"
            style="width: 200px;height: 100px;border: 1px solid #e9e9e9;"
            :src="state.ruleForm.url"
            class="avatar"
          />
          <i 
            v-else
            class="el-icon-plus avatar-uploader-icon"
          >
          </i>
        </el-upload>
      </el-form-item>
      <el-form-item label="跳转链接" prop="link">
        <el-input type="text" v-model="state.ruleForm.link"></el-input>
      </el-form-item>
      <el-form-item label="排序值" prop="sort">
        <el-input type="number" v-model="state.ruleForm.sort"></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="state.visible = false">
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
import { localGet, uploadImgServer } from '@/utils'
import { ElMessage } from 'element-plus'

const props = defineProps({
  type: String,
  reload: Function
})

const formRef = ref(null)
const state = reactive({
  uploadImgServer,
  token: localGet('token') || '',
  visible: false,
  ruleForm: {
    url: '',
    link: '',
    sort: ''
  },
  rules: {
    url: [
      { required: true, message: '图片不能为空', trigger: ['change'] }
    ],
    sort: [
      { required: true, message: '排序不能为空', trigger: ['change'] }
    ]
  },
  id: ''
})

const getDetail = (id) => {
  axios.get(`/carousels/${id}`).then(res => {
    state.ruleForm = {
      url: res.carouselUrl,
      link: res.redirectUrl,
      sort: res.carouselRank
    }
  })
}

const handleBeforeUpload = (file) => {
  const sufix = file.name.split('.')[1] || ''
  if (!['jpg', 'jpeg', 'png'].includes(sufix)) {
    ElMessage.error('请上传jpg、jpeg、png格式的图片')
    return false
  }
}

const handleUrlSuccess = (val) => {
  state.ruleForm.url = val.data || ''
}

const open = (id) => {
  state.visible = true
  if (id) {
    state.id = id
    getDetail(id)
  } else {
    state.ruleForm = {
      url: '',
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
      if (props.type === 'add') {
        axios.post('/carousels', {
          carouselUrl: state.ruleForm.url,
          redirectUrl: state.ruleForm.link,
          carouselRank: state.ruleForm.sort
        }).then(() => {
          ElMessage.success('添加成功！')
          state.visible = false
          if (props.reload) props.reload()
        })
      } else {
        axios.put('/carousels', {
          carouselId: state.id,
          carouselUrl: state.ruleForm.url,
          redirectUrl: state.ruleForm.link,
          carouselRank: state.ruleForm.sort
        }).then(() => {
          ElMessage.success('修改成功！')
          state.visible = false
          if (props.reload) props.reload()
        })
      }
    }
  })
}

defineExpose({ open, close })
</script>

<style lang="scss" scoped>
.avatar-uploader {
  width: 100px;
  height: 100px;
  color: #ddd;
  font-size: 30px;

  ::v-deep {
    .el-upload {
      width: 100%;
      text-align: center;
    }
  }

  .avatar-uploader-icon {
    display: block;
    width: 100%;
    height: 100%;
    border: 1px solid #e9e9e9;
    padding: 32px 17px;
  }
}
</style>