<script setup lang="ts">
const props = defineProps<{
  text: string;
}>();
</script>

<template>
  <span class="text-2xl">{{ props.text }}</span>
</template>
