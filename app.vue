<template>
  <div class="app-container">
    <ClientOnly>
      <JsonEditor v-model="value" />
    </ClientOnly>
  </div>
</template>

<script setup>
const value = ref({})
</script>
