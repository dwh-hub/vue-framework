import axios from 'axios'
import qs from 'qs'
// import store from '@/store'
import { ElMessage } from 'element-plus'

const baseURL = import.meta.env.VITE_BASE_API

const request = axios.create({
  baseURL: baseURL,
  timeout: 60000,
  headers: {
    'Cache-Control': 'no-cache'
  }
})

const pending = new Map() // 正在请求map 键 请求标识 值 取消函数
const whiteList = [] // 无需防止重复请求的白名单
const CancelToken = axios.CancelToken

// 添加正在请求地址
function addPending(config) {
  const url = [config.url, qs.stringify(config.params), qs.stringify(config.data)].join('&')
  config.cancelToken = new CancelToken(cancel => {
    // 请求队列中不存在该请求，加入队列
    if (!pending.has(url)) {
      pending.set(url, cancel)
    }
  })
}

// 移除请求
function removePending(config) {
  const url = [config.url, qs.stringify(config.params), qs.stringify(config.data)].join('&')
  if (pending.has(url)) {
    // 请求队列中有该请求，取消当前请求，并移除队列
    pending.get(url)(url)
    pending.delete()
  }
}

// 取消所有队列中的请求，并清空队列
// function clearAllPending() {
//   for (const [url, cancel] of pending) {
//     cancel(url)
//   }
//   pending.clear()
// }

// 请求前拦截器
request.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.token = token
  }
  if (!whiteList.includes(config.url)) {
    removePending(config) // 请求前校验并执行取消操作
    addPending(config) // 加入请求队列
  }
  return config
})

// 请求后拦截器
request.interceptors.response.use(
  response => {
    removePending(response)
    // 过滤第一层http响应数据
    const res = response.data
    if (res.code === 403) {
      // TODO 处理登录过期
      return
    }
    // request错误提示
    if (res.code !== 200) {
      showErrorMessage(res.message)
      return Promise.reject(res)
    }
    return res
  },
  error => {
    showErrorMessage(error.message || error)
    return Promise.reject(error)
  }
)

// 异常错误提示
function showErrorMessage(message) {
  ElMessage({
    message,
    type: 'error',
    duration: 2000
  })
}

export default request
