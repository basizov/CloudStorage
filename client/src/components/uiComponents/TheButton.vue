<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TheButton'
});
</script>

<style lang="scss" scoped>
.button {
  cursor: pointer;
  padding: 0.5em 1.5em;
  min-width: 15ch;
  background-color: var(--classic);
  border-radius: 0.7em;
  border: 0.1rem solid var(--secondary);
  box-shadow: 0 0 0.7em var(--black-03);
  transition: opacity 250ms linear;
  &:hover {
    opacity: 0.7;
  }
  &:active {
    opacity: 0.8;
  }
}
</style>
