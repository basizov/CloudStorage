<template>
  <section class="file">
    <div class="file__info">
      <img
        src="https://thumbs-prod.si-cdn.com/P4Smi9MthEBXH7pdW8Y-bvwR6ts=/1072x720/filters:no_upscale()/https://public-media.si-cdn.com/filer/04/8e/048ed839-a581-48af-a0ae-fac6fec00948/gettyimages-168346757_web.jpg"
        alt="nature"
        class="file__img"
      />
      <div class="file__utils">
        <div class="file__size">30Gb</div>
        <div class="file__created">30.12.2001</div>
      </div>
    </div>
    <div class="file__title">Test.txt</div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FileInfo'
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
  &__created {
    font-size: 2rem;
  }
  &__info {
    position: relative;
    max-height: 12rem;
  }
  &__utils {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    position: absolute;
    top: 0;
    left: 100%;
    visibility: hidden;
    background-color: var(--black-07);
    transition: all 250ms linear;
  }
  &:hover {
    border-color: var(--classic);
    transform: scale(1.01);
    .file {
      &__img {
        width: 0;
        transform: scale(0);
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
