import axios from 'axios'
import JSONbig from 'json-bigint'
// 避免只作用一个服务器
const instance = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn/app/',
  timeout: 1000
})
// 处理大数字问题
// transformResponse 在拦截器响应之前获取数据进行处理
instance.defaults.transformResponse = [function (data) {
  try {
    // data 数据可能不是标准的 JSON 格式字符串，否则会导致 JSONbig.parse(data) 转换失败报错
    return JSONbig.parse(data)
  } catch (err) {
    // 无法转换的数据直接原样返回
    return data
  }
}]
// 拦截器
instance.interceptors.request.use(function (config) {
  // 发送之前做的
  return config
}, function (error) {
  // 处理请求错误
  return Promise.reject(error)
})

// 添加一个相应拦截器
instance.interceptors.response.use(function (response) {
  // 处理响应数据,接口返回的数据都有data，统一返回接口返回的data，如果此时返回的没有data那么就返回axios响应对象的data
  return response.data.data || response.data
}, function (error) {
  // 处理响应错误
  return Promise.reject(error)
})

export default instance// 导出服务器
