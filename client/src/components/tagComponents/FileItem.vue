<template>
  <div class="file-item" @dblclick="openDirectory" @click="deleteDirectory">
    <default-folder-icon class="file-item__icon" />
    <div class="file-item__title">{{ file.name }}</div>
  </div>
</template>

<script lang="ts">
import DefaultFolderIcon from '@/components/icons/DefaultFolderIcon.vue';
import { IFile } from '@/models/IFile';
import { FileActions } from '@/store/fileModule/actions';
import { FileMutationsTypes } from '@/store/fileModule/mutations';
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  components: { DefaultFolderIcon },
  name: 'FileItem',
  props: {
    file: {
      type: Object as PropType<IFile>,
      required: true
    }
  },
  methods: {
    openDirectory() {
      this.$store.commit(FileMutationsTypes.SET_CURRENT_DIR, this.file.id);
    },
    deleteDirectory() {
      this.$store.dispatch(FileActions.DELETE_FILE, this.file);
    }
  }
});
</script>

<style lang="scss" scoped>
.file-item {
  cursor: pointer;
  display: flex;
  gap: 1rem;
  align-items: center;
  width: 100%;
  min-width: 21rem;
  padding: 0.7rem;
  border: 0.1rem solid var(--secondary-07);
  border-radius: 0.3em;
  background-color: var(--primary);
  box-shadow: 0 0 1rem var(--black-03);
  transition: transform 250ms linear, border-color 250ms linear;
  &__icon {
    width: 3rem;
    height: 3rem;
  }
  &__title {
    font-size: 1.6rem;
    letter-spacing: 0.1em;
  }
  &:hover {
    transform: scale(1.01);
    border-color: var(--classic);
  }
}
</style>
