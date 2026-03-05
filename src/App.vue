<script setup>
import { ref } from 'vue'
import JsonEditorVue from 'json-editor-vue'

const value = ref({})
</script>

<template>
  <JsonEditorVue
    v-model="value"
    mode="text"
    :main-menu-bar="true"
    :status-bar="true"
  />
</template>

<style scoped>
.jse-main {
  height: 100%;
}
</style>
