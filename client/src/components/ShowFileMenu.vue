<template>
  <section
    class="menu"
    :class="{
      'menu-active': showMenu
    }"
  >
    <div class="menu__item" @click="createFolderHandler">
      <create-folder-icon class="menu__icon" />
      <div class="menu__subtitle">Создать папку</div>
    </div>
    <div class="menu__item">
      <upload-folder-icon class="menu__icon" />
      <div class="menu__subtitle">Загрузить папку</div>
    </div>
    <label htmlFor="fileUpload" class="menu__item">
      <upload-file-icon class="menu__icon" />
      <div class="menu__subtitle">Загрузить файл</div>
      <input
        multiple
        type="file"
        id="fileUpload"
        class="menu__fileUpload"
        @change="selectFile"
      />
    </label>
  </section>
</template>

<script lang="ts">
import CreateFolderIcon from '@/components/icons/CreateFolderIcon.vue';
import UploadFileIcon from '@/components/icons/UploadFileIcon.vue';
import UploadFolderIcon from '@/components/icons/UploadFolderIcon.vue';
import { CommonMutationsTypes } from '@/store/commonModule/mutations';
import { FileActions } from '@/store/fileModule/actions';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { CreateFolderIcon, UploadFolderIcon, UploadFileIcon },
  name: 'ShowFileMenu',
  computed: {
    showMenu(): boolean {
      return this.$store.getters.getShowFileMenu;
    }
  },
  methods: {
    createFolderHandler() {
      this.$store.commit(CommonMutationsTypes.SET_SHOW_FILE_MENU, false);
      this.$store.commit(CommonMutationsTypes.SET_CREATE_FOLDER, true);
    },
    selectFile(e: Event) {
      const event = e.target as HTMLInputElement;
      const files = event.files;

      if (files) {
        const iterateFiles = [...files];

        iterateFiles.forEach((file) =>
          this.$store.dispatch(FileActions.UPLOAD_FILE, file)
        );
      }
    }
  }
});
</script>

<style lang="scss" scoped>
.menu {
  opacity: 0;
  visibility: hidden;
  transition: opacity 250ms linear, visibility 250ms linear;

  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  position: absolute;
  width: max-content;
  background-color: var(--classic);
  border-radius: 0.3em;
  border: 0.1rem solid var(--black-03);
  box-shadow: 0 0 0.3rem var(--black-03);
  background-color: var(--primary-07);
  z-index: var(--menu-zindex);
  overflow: hidden;
  padding: 0.7rem 0;
  &__fileUpload {
    display: none;
  }
  &__item {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 1.5rem;
    width: 100%;
    padding: 0.3rem 5rem 0.3rem 1rem;
    &:hover {
      background-color: var(--primary);
    }
  }
  &__icon {
    width: 1.9rem;
    height: 1.9rem;
  }
  &-active {
    opacity: 1;
    visibility: visible;
  }
}
</style>
