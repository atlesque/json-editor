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

<style>
.app-container {
  width: 100%;
  height: 100dvh;
}
</style>
