import Example from './components/example.vue'
import Trans from './components/transition.vue'
import ZysButton from './components/button.vue'
import Message from './components/message'

const install = function (Vue) {
  // 注册到原型事件后可以按this.$message方式使用
  Vue.prototype.$message = Message

  // 注册模块
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
