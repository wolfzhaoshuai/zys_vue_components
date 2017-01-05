import Example from './components/example.vue'
import Trans from './components/transition.vue'
import ZysButton from './components/button.vue'
import Message from './components/message'

const install = function (Vue) {
  // 待办
  /* Example.install(Vue)
  Trans.install(Vue)
  ZysButton.install(Vue)
  Message.install(Vue) */

  // 注册到原型事件后可以按this.$message方式使用
  Vue.prototype.$message = Message

  // 模块重命名
  Vue.component('example', Example)
  Vue.component('zysButton', ZysButton)
}

module.exports = {
  install,
  ZysButton,
  Trans,
  Example,
  Message
}
