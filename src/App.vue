<template>
  <div id="app">
    <example :msg="msg" @showMsg="showInfo" @hideMsg="hideInfo">
      <template slot="title">Hello Vue2.x</template>
    </example>
    <p :style="{ display: show }">This is a msg in father but emited by child</p>
  </div>
</template>

<script>
import example from './components/example.vue'

export default {
  name: 'app',
  data () {
    return {
      msg: 'My first component',
      show: 'none'
    }
  },
  components: {
    example
  },
  methods: {
    showInfo () {
      this.show = 'block'
    },
    hideInfo () {
      this.show = 'none'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
