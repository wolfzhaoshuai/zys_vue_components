<template>
  <button
    :class="[
      'zys-button-base',
      size? 'zys-button-' + size : '',
      buttonType? 'zys-button-' + buttonType : ''
    ]"
    @click="triggerOpen"
    type="button">{{ value }}</button>
</template>

<script>
  export default {
    props: {
      value: {
        value: String,
        required: true,
        default: 'button'
      },
      buttonType: {
        type: String,
        required: false,
        default: 'success'
      },
      size: {
        type: String,
        required: false,
        default: 'default'
      }
    },
    methods: {
      triggerOpen () {
        this.$emit('open')
      }
    }
  }
</script>
