import axios from 'axios'
// 避免只作用一个服务器
const instance = axios.create({
  baseURL: '',
  timeout: 1000
})
export default instance
