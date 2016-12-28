<template>
  <div>
    <slot name="title"></slot>
    <p @click="emitParent">{{ msg }}</p>
    <p @click="emitHide">Hide Msg</p>
  </div>
</template>

<script>
export default {
  name: 'zys',
  props: {
    msg: String,
    required: true,
    default: 'hello'
  },
  methods: {
    emitParent () {
      this.$emit('showMsg')
    },
    emitHide () {
      this.$emit('hideMsg')
    }
  }
}
</script>
