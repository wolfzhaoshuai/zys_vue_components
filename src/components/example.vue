<template>
  <div>
    <p class="example-p">
      <slot name="title"></slot>
    <p>
    <p @click="emitParent" class="example-p">{{ msg }}</p>
    <p @click="emitHide" class="example-p">Hide Msg</p>
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
