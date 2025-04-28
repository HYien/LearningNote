<template>
  <div class="add">
    <el-card class="add-container">
      <el-form :model="state.goodForm" :rules="state.rules" ref="goodRef" label-width="100px" class="goodForm">
        <el-form-item label="商品分类">
          <el-cascader :placeholder="state.defaultCate" style="width: 300px" :props="state.category" @change="handleChangeCate"></el-cascader>
        </el-form-item>
        <el-form-item label="商品名称" prop="goodsName">
          <el-input style="width: 300px" v-model="state.goodForm.goodsName" placeholder="请输入商品名称"></el-input>
        </el-form-item>
        <el-form-item label="商品简介" prop="goodsIntro">
          <el-input style="width: 300px" type="textarea" v-model="state.goodForm.goodsIntro" placeholder="请输入商品简介(100字)"></el-input>
        </el-form-item>
        <el-form-item label="商品价格" prop="originalPrice">
          <el-input type="number" min="0" style="width: 300px" v-model="state.goodForm.originalPrice" placeholder="请输入商品价格"></el-input>
        </el-form-item>
        <el-form-item label="商品售卖价" prop="sellingPrice">
          <el-input type="number" min="0" style="width: 300px" v-model="state.goodForm.sellingPrice" placeholder="请输入商品售价"></el-input>
        </el-form-item>
        <el-form-item label="商品库存" prop="stockNum">
          <el-input type="number" min="0" style="width: 300px" v-model="state.goodForm.stockNum" placeholder="请输入商品库存"></el-input>
        </el-form-item>
        <el-form-item label="商品标签" prop="tag">
          <el-input style="width: 300px" v-model="state.goodForm.tag" placeholder="请输入商品小标签"></el-input>
        </el-form-item>
        <el-form-item label="上架状态" prop="goodsSellStatus">
          <el-radio-group v-model="state.goodForm.goodsSellStatus">
            <el-radio label="0">上架</el-radio>
            <el-radio label="1">下架</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item required label="商品主图" prop="goodsCoverImg">
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
            <img style="width: 100px; height: 100px; border: 1px solid #e9e9e9;" v-if="state.goodForm.goodsCoverImg" :src="state.goodForm.goodsCoverImg" class="avatar">
            <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
          </el-upload>
        </el-form-item>
        <el-form-item label="详情内容">
          <div ref='editor'></div>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitAdd()">{{ state.id ? '立即修改' : '立即创建' }}</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, getCurrentInstance, reactive, ref, toRefs } from 'vue'
import WangEditor from 'wangeditor'
import { ElMessage } from 'element-plus'
import axios from '@/utils/axios'
import { useRoute, useRouter } from 'vue-router'
import { localGet, uploadImgServer, uploadImgsServer} from '@/utils'

const { proxy } = getCurrentInstance()
const editor = ref(null)
const goodRef = ref(null)
const route = useRoute()
const router = useRouter()
const { id } = route.query
const state = reactive({
  uploadImgServer, // 上传图片的接口地址，单图上传
  token: localGet('token') || '', // 存在本地的 token
  id: id,
  defaultCate: '', // 默认分类值
  goodForm: { // 商品表单内容
    goodsName: '',
    goodsIntro: '',
    originalPrice: '',
    sellingPrice: '',
    stockNum: '',
    goodsSellStatus: '0',
    goodsCoverImg: '',
    tag: ''
  },
  rules: { // 规则
    goodsName: [
      { required: 'true', message: '请填写商品名称', trigger: ['change'] }
    ],
    originalPrice: [
      { required: 'true', message: '请填写商品价格', trigger: ['change'] }
    ],
    sellingPrice: [
      { required: 'true', message: '请填写商品售价', trigger: ['change'] }
    ],
    stockNum: [
      { required: 'true', message: '请填写商品库存', trigger: ['change'] }
    ],
  },
  categoryId: '', // 分类 id
  category: { // 联动组件 props 属性
    lazy: true,
    lazyLoad(node, resolve) { // 懒加载分类方法
      const { level = 0, value } = node
      axios.get('/categories', {
        params: {
          pageNumber: 1,
          pageSize: 1000,
          categoryLevel: level + 1,
          parentId: value || 0
        }
      }).then(res => {
        const list = res.list
        const nodes = list.map(item => ({
          value: item.categoryId,
          label: item.categoryName,
          leaf: level > 1
        }))
        resolve(nodes)
      })
    }
  }
})

let instance = null
onMounted(() => {
  instance = new WangEditor(editor.value)
  instance.config.showLinkImg = false
  instance.config.showLinkImgAlt = false
  instance.config.showLinkImgHref = false
  instance.uploadImgMaxSize = 2 * 1024 * 1024
  instance.config.uploadFileName = 'file'
  instance.config.uploadImgHeaders = {
    token: state.token
  }

  instance.config.uploadImgHooks = {
    customInsert: function(insertImgFn, result) {
      if (result.data && result.data.length) {
        result.data.forEach(item => {
          insertImgFn(item)
        })
      }
    }
  }

  instance.config.uploadImgServer = uploadImgsServer
  Object.assign(instance.config, {
    onchange: function () {
      
    }
  })
  instance.create()
  if (id) {
    axios.get(`/goods/${id}`).then(res => {
      const { goods, firstCategory, secondCategory, thirdCategory } = res
      state.goodForm = {
        goodsName: goods.goodsName,
        goodsIntro: goods.goodsIntro,
        originalPrice: goods.originalPrice,
        sellingPrice: goods.sellingPrice,
        stockNum: goods.stockNum,
        goodsSellStatus: String(goods.goodsSellStatus),
        goodsCoverImg: proxy.$filters.prefix(goods.goodsCoverImg),
        tag: goods.tag
      }
      state.categoryId = goods.goodsCategoryId
      state.defaultCate = `${firstCategory.categoryName}/${secondCategory.categoryName}/${thirdCategory.categoryName}`
      if (instance) {
        instance.txt.html(goods.goodsDetailContent)
      }
    })
  }
})

onBeforeUnmount(() => {
  if (instance) {
    instance.destroy()
    instance = null
  }
})

const submitAdd = () => {
  goodRef.value.validate((vaild) => {
    if (vaild) {
      // 默认新增用 post 方法
      let httpOption = axios.post
      let params = {
        goodsCategoryId: state.categoryId,
        goodsCoverImg: state.goodForm.goodsCoverImg,
        goodsDetailContent: instance.txt.html(),
        goodsIntro: state.goodForm.goodsIntro,
        goodsName: state.goodForm.goodsName,
        goodsSellStatus: state.goodForm.goodsSellStatus,
        originalPrice: state.goodForm.originalPrice,
        sellingPrice: state.goodForm.sellingPrice,
        stockNum: state.goodForm.stockNum,
        tag: state.goodForm.tag
      }
      console.log('params', params)
      if (id) {
        params.goodsId = id
        // 修改商品使用 put 方法
        httpOption = axios.put
      }
      httpOption('/goods', params).then(() => {
        ElMessage.success(id ? '修改成功' : '添加成功')
        router.push({ path: '/good' })
      })
    }
  })
}

// 上传之前，判断一下文件格式
const handleBeforeUpload = (file) => {
  const sufix = file.name.split('.')[1] || ''
  if (!['jpg', 'jpeg', 'png'].includes(sufix)) {
    ElMessage.error('请上传 jpg、jpeg、png 格式的图片')
    return false
  }
}
// 图片上传成功后的回调
const handleUrlSuccess = (val) => {
  state.goodForm.goodsCoverImg = val.data || ''
}
// 联动变化后的回调
const handleChangeCate = (val) => {
  state.categoryId = val[2] || 0
}
</script>

<style lang="scss" scoped>
.add {
  display: flex;
}
.add-container {
  flex: 1;
  height: 100%;
}
.avatar-uploader {
  width: 100px;
  height: 100px;
  color: #ddd;
  font-size: 30px;
}
.avatar-uploader-icon {
  display: block;
  width: 100%;
  height: 100%;
  border: 1px solid #e9e9e9;
  padding: 32px 17px;
}
</style>