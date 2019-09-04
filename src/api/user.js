// 引用公共的request处理函数
import request from '@/utils/request'
// 导出一个登录的函数
/**
 *
 * @param {*} 登录提交服务器的数据，mobile,code
 */
export const login = ({
  mobile,
  code
}) => {
  return request.post('v1_0/authorizations', {
    mobile,
    code
  })
}
