<template>
  <JsonEditorVue
    v-model="modelValue"
    mode="text"
    :main-menu-bar="true"
    :status-bar="true"
  />
</template>

<script setup>
import JsonEditorVue from 'json-editor-vue'

const modelValue = defineModel({ type: Object, default: () => ({}) })
</script>

<style scoped>
.jse-main {
  height: 100%;
}
</style>
