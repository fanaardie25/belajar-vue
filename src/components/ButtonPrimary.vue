<template>
  <button type="submit" class="btn btn-primary w-100">
    <span v-if="isLoading" class="spinner-border spinner-border-sm"></span>
    <span v-else><slot/></span>
  </button>
</template>
<script setup>
defineProps({
  isLoading: {
    type: Boolean,
    default: false
  }
})
</script>

