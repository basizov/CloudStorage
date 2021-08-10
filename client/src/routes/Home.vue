<template>
  <file-list />
</template>

<script lang="ts">
import FileList from '@/components/tagComponents/FileList.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { FileList },
  name: 'Home'
});
</script>

<style lang="scss" scoped></style>
