<template>
  <the-modal
    class="create"
    :show="show"
    @closeModal="closeModal"
    title="Новая папка"
  >
    <the-input
      class="create__input"
      v-model="folderName"
      placeholder="Введите название папки..."
    />
    <div class="create__btns">
      <the-button class="create__cancel" @click="closeModal">Отмена</the-button>
      <the-button class="create__success" @click="createDirectory">
        Создать
      </the-button>
    </div>
  </the-modal>
</template>

<script lang="ts">
import { CommonMutationsTypes } from '@/store/commonModule/mutations';
import { FileActions } from '@/store/fileModule/actions';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CreateDirectory',
  data() {
    return {
      folderName: ''
    };
  },
  computed: {
    show(): boolean {
      return this.$store.getters.getShowCreateFolder;
    }
  },
  methods: {
    closeModal() {
      this.$store.commit(CommonMutationsTypes.SET_CREATE_FOLDER, false);
    },
    createDirectory() {
      if (this.folderName !== '') {
        this.$store.dispatch(FileActions.CREATE_DIRECTORY, this.folderName);
        this.$store.commit(CommonMutationsTypes.SET_CREATE_FOLDER, false);
      }
    }
  }
});
</script>

<style lang="scss" scoped>
.create {
  &__input {
    margin-top: 1rem;
    width: 100%;
    border: 0.1rem solid var(--white-03) !important;
    border-radius: 0.3em;
    &:active,
    &:focus {
      border-color: var(--warning) !important;
    }
  }
  &__btns {
    margin-top: 1rem;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 1rem;
  }
  &__cancel {
    background-color: var(--failure) !important;
  }
  &__success {
    background-color: var(--success) !important;
  }
}
</style>
