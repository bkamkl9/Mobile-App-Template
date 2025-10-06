<script setup lang="ts">
const props = defineProps<{
  text: string;
}>();
</script>

<template>
  <span class="text-2xl text-lavender-600">{{ props.text }} 0---</span>
</template>
