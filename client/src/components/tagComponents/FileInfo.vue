<template>
  <section class="file" @dblclick="downloadFile">
    <div class="file__info">
      <img
        src="https://thumbs-prod.si-cdn.com/P4Smi9MthEBXH7pdW8Y-bvwR6ts=/1072x720/filters:no_upscale()/https://public-media.si-cdn.com/filer/04/8e/048ed839-a581-48af-a0ae-fac6fec00948/gettyimages-168346757_web.jpg"
        alt="nature"
        class="file__img"
      />
      <div class="file__utils">
        <div class="file__size">{{ file.size }}</div>
        <div class="file__created">
          {{ file.created.toString().slice(0, 10) }}
        </div>
      </div>
    </div>
    <div class="file__title">{{ file.name }}</div>
  </section>
</template>

<script lang="ts">
import { IFile } from '@/models/IFile';
import { FileActions } from '@/store/fileModule/actions';
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'FileInfo',
  props: {
    file: {
      type: Object as PropType<IFile>,
      required: true
    }
  },
  methods: {
    downloadFile() {
      this.$store.dispatch(FileActions.DOWNLOAD_FILE, this.file);
    }
  }
});
</script>

<style lang="scss" scoped>
.file {
  cursor: pointer;
  border-radius: 0.3em;
  overflow: hidden;
  display: grid;
  grid-template-rows: 3fr 1fr;
  border: 0.1rem solid var(--secondary-07);
  box-shadow: 0 0 1rem var(--black-03);
  width: 100%;
  transition: all 250ms linear;
  &__img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 250ms linear;
  }
  &__title {
    font-size: 1.6rem;
    padding: 1rem;
    font-weight: 500;
    background-color: var(--secondary);
    letter-spacing: 0.1em;
  }
  &__size,
  &__created,
  &__title,
  &__utils,
  &__info {
    pointer-events: none;
  }
  &__size,
  &__created {
    font-size: 2rem;
  }
  &__info {
    position: relative;
    height: 12rem;
  }
  &__utils {
    position: absolute;
    top: 0;
    left: 100%;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    visibility: hidden;
    background-color: var(--black-07);
    transition: all 250ms linear;
  }
  &:hover {
    border-color: var(--classic);
    transform: scale(1.01);
    .file {
      &__img {
        left: -100%;
        visibility: hidden;
      }
      &__utils {
        left: 0;
        visibility: visible;
      }
    }
  }
}
</style>
