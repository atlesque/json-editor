<template>
  <div class="editor-wrapper">
    <JsonEditorVue
      v-model="modelValue"
      mode="text"
      :main-menu-bar="true"
      :status-bar="true"
    />
  </div>
</template>

<script setup>
import JsonEditorVue from 'json-editor-vue'

const modelValue = defineModel({ type: Object, default: () => ({}) })
</script>

<style scoped>
.editor-wrapper {
  height: 100dvh;
}

/* Make the intermediate wrapper div from JsonEditorVue fill height */
.editor-wrapper > :deep(div) {
  height: 100%;
}

.editor-wrapper :deep(.jse-main) {
  height: 100%;
}

.editor-wrapper :deep(.jse-text-mode),
.editor-wrapper :deep(.jse-tree-mode),
.editor-wrapper :deep(.jse-table-mode) {
  height: 100%;
  flex: 1;
}

.editor-wrapper :deep(.jse-contents) {
  flex: 1;
  min-height: 0;
}
</style>
