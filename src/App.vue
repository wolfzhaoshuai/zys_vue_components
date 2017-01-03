<template>
  <div id="app">
    <example :msg="msg" @showMsg="showInfo" @hideMsg="hideInfo">
      <template slot="title">Hello Vue2.x</template>
    </example>
    <p :style="{ display: show }">This is a msg in father but emited by child</p>
    <div>
      <span @click="updateMsg">{{ msg }}</span>
    </div>
    <zys-button type="warn" value="zys"></zys-button>
    <hr>

  </div>
</template>

<script>
import example from './components/example.vue'
// import trans from './components/transition.vue'
import zysButton from './components/button.vue'

export default {
  name: 'app',
  data () {
    return {
      msg: 'My first component',
      show: 'none'
    }
  },
  components: {
    example,
    zysButton
  },
  methods: {
    showInfo () {
      this.show = 'block'
    },
    hideInfo () {
      this.show = 'none'
    },
    updateMsg () {
      this.msg = 'updated'
      console.log(this.$el.textContent)
      this.$nextTick(function () {
        console.log(this.$el.textContent)
      })
    }
  }
}
</script>
