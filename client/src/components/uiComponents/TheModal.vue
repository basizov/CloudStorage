<template>
  <section
    class="modal"
    :class="{
      'modal-active': show
    }"
    @click="closeModal"
  >
    <div class="modal__content" @click.stop>
      <div class="modal__header">
        <h3 class="modal__title">{{ title }}</h3>
        <div class="modal__close" @click="closeModal"></div>
      </div>
      <slot></slot>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'TheModal',
  props: {
    title: {
      type: String as PropType<string>,
      default: ''
    },
    show: {
      type: Boolean as PropType<boolean>,
      default: false
    }
  },
  methods: {
    closeModal() {
      this.$emit('closeModal');
    }
  }
});
</script>

<style lang="scss" scoped>
.modal {
  opacity: 0;
  visibility: hidden;
  transition: opacity 250ms linear, visibility 250ms linear;

  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: var(--black-07);
  display: flex;
  align-items: center;
  justify-content: center;
  &__content {
    padding: 1.5rem;
    min-width: 35rem;
    min-height: 15rem;
    background-color: var(--secondary);
    border: 0.1rem solid var(--black-03);
    border-radius: 0.3em;
    box-shadow: 0 0 1rem var(--black-03);
  }
  &__header {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 3rem;
  }
  &__title {
    font-size: 1.8rem;
    font-weight: 300;
    letter-spacing: 0.1rem;
  }
  &__title,
  &__close {
    width: 100%;
  }
  &__close {
    cursor: pointer;
    position: relative;
    height: 100%;
    &:after,
    &:before {
      content: '';
      position: absolute;
      top: 50%;
      right: 0;
      width: 1.7rem;
      height: 0.2rem;
      transform: translateY(-50%);
      background-color: var(--white-07);
      transition: background-color 250ms linear;
    }
    &:before {
      transform: rotate(-45deg);
    }
    &:after {
      transform: rotate(45deg);
    }
    &:hover {
      &:after,
      &:before {
        background-color: var(--white);
      }
    }
  }
  &-active {
    opacity: 1;
    visibility: visible;
  }
}
</style>
