<template>
  <section class="files">
    <h3 class="files__subtitle">Папки</h3>
    <div class="files__folders">
      <file-item
        v-for="file in $store.getters.getFiles"
        :key="file.id"
        :file="file"
      />
    </div>
    <h3 class="files__subtitle">Файлы</h3>
    <div class="files__files">
      <file-info />
      <file-info />
      <file-info />
      <file-info />
      <file-info />
      <file-info />
      <file-info />
      <file-info />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FileInfo from './FileInfo.vue';
import FileItem from './FileItem.vue';
import { FileActions } from '@/store/fileModule/actions';

export default defineComponent({
  components: { FileItem, FileInfo },
  name: 'FileList',
  created() {
    this.$store.dispatch(FileActions.GET_FILES);
  }
});
</script>

<style lang="scss" scoped>
.files {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  height: 100%;
  &__subtitle {
    font-size: 1.8rem;
    font-weight: 700;
    margin-left: 1rem;
  }
  &__folders,
  &__files {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 1.5rem;
  }
}
</style>
