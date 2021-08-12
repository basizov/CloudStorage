<template>
  <div class="file-item">
    <default-folder-icon class="file-item__icon" />
    <div class="file-item__title">{{ file.name }}</div>
  </div>
</template>

<script lang="ts">
import DefaultFolderIcon from '@/components/icons/DefaultFolderIcon.vue';
import { IFile } from '@/models/IFile';
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  components: { DefaultFolderIcon },
  name: 'FileItem',
  props: {
    file: {
      type: Object as PropType<IFile>,
      required: true
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
  &__icon {
    width: 3rem;
    height: 3rem;
  }
  &__title {
    font-size: 1.6rem;
    letter-spacing: 0.1em;
  }
}
</style>
