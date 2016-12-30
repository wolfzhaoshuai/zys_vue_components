<template>
  <button
    :class="[
      'zys-button-base',
      size? 'zys-button-' + size : '',
      type? 'zys-button-' + type : ''
    ]"
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
      type: {
        type: String,
        required: false,
        default: 'success'
      },
      size: {
        type: String,
        required: false,
        default: 'default'
      }
    }
  }
</script>
