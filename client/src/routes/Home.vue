<template>
  <file-header />
  <file-list />
</template>

<script lang="ts">
import FileHeader from '@/components/tagComponents/FileHeader.vue';
import FileList from '@/components/tagComponents/FileList.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { FileList, FileHeader },
  name: 'Home'
});
</script>

<style lang="scss" scoped></style>
