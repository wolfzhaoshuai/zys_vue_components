<template>
  <div id="app">
    <example :msg="msg" @showMsg="showInfo" @hideMsg="hideInfo">
      <template slot="title">Hello Vue2.x</template>
    </example>
    <p  :style="{ display: show }" class="example-p">This is a msg in father but emited by child</p>
    <hr>
    <div>
      <span @click="updateMsg">UpdateMsg</span>
    </div>
    <hr>
    <zys-button buttonType="info" value="zys" @open="open"></zys-button>
    <hr>
    <zys-card
      stripped
      :card_outer_links="card_outer_links11"
      :card_item_png="card_item_png"
      :card_title_png="card_title_png11"
      :card_flag="11">
      <template slot="card_title">网络诊断</template>
    </zys-card>
    <zys-card
      stripped
      :card_outer_links="card_outer_links11"
      :card_item_png="card_item_png"
      :card_title_png="card_title_png11"
      :card_flag="12">
      <template slot="card_title">网络诊断</template>
    </zys-card>
  </div>
</template>

<script>
import TitleDiagnose from './assets/images/title_diagnose.png'
import CardItem from './assets/images/card_item.png'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Show Parent Msg',
      show: 'none',
      card_title_png11: TitleDiagnose,
      card_item_png: CardItem,
      card_outer_links11: [
        {
          'name': 'https://vuefe.cn/v2/guide/',
          'title': 'Vue2中文'
        },
        {
          'name': 'https://router.vuejs.org/zh-cn/',
          'title': 'Vue-router'
        }
      ]
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
