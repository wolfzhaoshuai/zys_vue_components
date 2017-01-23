<template lang="pug">
  div
    p.example-p
      <slot name="title"><slot>
    p.example-p(@click="emitParent")
      | {{ msg }}
    p.example-p(@click="emitHide")
      | Hide Msg
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
