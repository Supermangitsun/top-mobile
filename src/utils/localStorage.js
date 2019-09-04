// 设置
export const setItem = (key, item) => {
//   if (item instanceof Object) {
//     item = JSON.stringify(item)
//   }
  window.localStorage.setItem(key, item)
}
// 获取
export const getItem = (key) => {
  return JSON.parse(window.localStorage.getItem(key))
}
// 移出
export const removeItem = (key) => {
  window.localStorage.removeItem(key)
}
