<template>
  <section
    class="menu"
    :class="{
      'menu-active': showMenu
    }"
  >
    <div class="menu__item">
      <img
        src="@/assets/createFolder.svg"
        alt="createFolder"
        class="menu__icon"
      />
      <div class="menu__subtitle">Создать папку</div>
    </div>
    <div class="menu__item">
      <img
        src="@/assets/uploadFolder.svg"
        alt="uploadFolder"
        class="menu__icon"
      />
      <div class="menu__subtitle">Загрузить папку</div>
    </div>
    <div class="menu__item">
      <img src="@/assets/uploadFile.svg" alt="uploadFile" class="menu__icon" />
      <div class="menu__subtitle">Загрузить файл</div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'ShowFileMenu',
  props: {
    showMenu: {
      type: Boolean as PropType<boolean>,
      default: false
    }
  }
});
</script>

<style lang="scss" scoped>
.menu {
  opacity: 0;
  // height: 0;
  transition: opacity 250ms linear;

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
  }
}
</style>
