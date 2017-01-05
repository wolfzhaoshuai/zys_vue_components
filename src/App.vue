<template>
  <div id="app">
    <example :msg="msg" @showMsg="showInfo" @hideMsg="hideInfo">
      <template slot="title">Hello Vue2.x</template>
    </example>
    <p :style="{ display: show }">This is a msg in father but emited by child</p>
    <hr>
    <div>
      <span @click="updateMsg">UpdateMsg</span>
    </div>
    <hr>
    <zys-button buttonType="info" value="zys" @open="open"></zys-button>
    <hr>

  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Show Parent Msg',
      show: 'none'
    }
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
    },
    open () {
      this.$message({
        message: 'open info',
        type: 'error',
        showClose: true
      })
    }
  }
}
</script>
