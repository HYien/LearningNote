import axios from 'axios'
import router from '@/router'
import config from '~/config'
import { ElMessage } from 'element-plus'
import { localGet } from './index'

const ENV = import.meta.env.MODE

axios.defaults.baseURL = config[ENV].baseUrl
axios.defaults.withCredentials = true // 允许携带cookie

axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest' // 设置请求头
axios.defaults.headers['token'] = localGet('token') || '' // 设置请求头

axios.defaults.headers.post['Content-Type'] = 'application/json' // 设置请求头


axios.interceptors.response.use(res => {
  console.log('axios response', res)
  if (typeof res.status === 500) {
    ElMessage.error('服务端异常！')
    return Promise.reject(res)
  }

  if (res.data.resultCode != 200) {
    if (res.data.message) ElMessage.error(res.data.message)
    if (res.data.resultCode == 419) {
      router.push({ path: '/login' })
    }
    return Promise.reject(res.data)
  }
  return res.data?.data || res.data
})

export default axios