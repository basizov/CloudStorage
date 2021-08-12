<template>
  <section class="files">
    <template v-if="getDirs.length > 0">
      <h3 class="files__subtitle">Папки</h3>
      <div class="files__folders">
        <file-item v-for="file in getDirs" :key="file.id" :file="file" />
      </div>
    </template>
    <template v-if="getFiles.length > 0">
      <h3 class="files__subtitle">Файлы</h3>
      <div class="files__files">
        <file-info v-for="file in getFiles" :key="file.id" :file="file" />
      </div>
    </template>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FileInfo from './FileInfo.vue';
import FileItem from './FileItem.vue';
import { FileActions } from '@/store/fileModule/actions';
import { IFile } from '@/models/IFile';

export default defineComponent({
  components: { FileItem, FileInfo },
  name: 'FileList',
  created() {
    this.loadFiles();
  },
  computed: {
    getCurrentDir(): string | null {
      return this.$store.getters.getCurrentDir;
    },
    getDirs(): IFile[] {
      return this.$store.getters.getFiles.filter((f) => f.type === 'dir');
    },
    getFiles(): IFile[] {
      return this.$store.getters.getFiles.filter((f) => f.type !== 'dir');
    }
  },
  methods: {
    loadFiles() {
      this.$store.dispatch(FileActions.GET_FILES);
    }
  },
  watch: {
    getCurrentDir() {
      this.loadFiles();
    }
  }
});
</script>

<style lang="scss" scoped>
.files {
  margin-top: 1rem;
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
