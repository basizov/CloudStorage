<template>
  <section
    class="home"
    @dragover.prevent.stop="dragEnterHandler"
    :class="{
      'home-active': dragEnter
    }"
  >
    <file-header />
    <file-list />
  </section>
  <section
    class="home__drag"
    :class="{
      'home__drag-active': dragEnter
    }"
    @drop.prevent="dropHandler"
    @dragleave.prevent.stop="dragLeaveHandler"
    @dragover.prevent.stop="dragEnterHandler"
  >
    <div class="home__drag=title">Перетащите файлы...</div>
  </section>
</template>

<script lang="ts">
import FileHeader from '@/components/tagComponents/FileHeader.vue';
import FileList from '@/components/tagComponents/FileList.vue';
import { FileActions } from '@/store/fileModule/actions';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { FileList, FileHeader },
  name: 'Home',
  data() {
    return {
      dragEnter: false
    };
  },
  methods: {
    dropHandler(e: DragEvent) {
      const fileTransfer = e.dataTransfer;

      if (fileTransfer) {
        const files = [...fileTransfer.files];

        files.forEach((file) =>
          this.$store.dispatch(FileActions.UPLOAD_FILE, file)
        );
      }
      this.dragEnter = false;
    },
    dragEnterHandler() {
      this.dragEnter = true;
    },
    dragLeaveHandler() {
      this.dragEnter = false;
    }
  }
});
</script>

<style lang="scss" scoped>
.home,
.home__drag {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: opacity 250ms linear, visibility 250ms linear;
}
.home {
  &-active {
    opacity: 0;
    visibility: hidden;
  }
  &__drag {
    opacity: 0;
    visibility: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    &-active {
      opacity: 1;
      visibility: visible;
    }
  }
}
</style>
