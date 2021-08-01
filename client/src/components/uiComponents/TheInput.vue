<template>
  <input
    type="text"
    class="input"
    :value="modelValue"
    @input="changeValue"
  />
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'TheInput',
  props: {
    modelValue: {
      type: String as PropType<string>,
      required: true
    }
  },
  methods: {
    changeValue(e: InputEvent) {
      const inputElement = e.target as HTMLInputElement;

      this.$emit('update:modelValue', inputElement.value);
    }
  }
});
</script>

<style lang="scss" scoped>
.input {
  outline: none;
  background-color: transparent;
  border: none;
  border-bottom: 0.1rem solid var(--secondary);
  padding: 0.7em;
  transition: border-color 250ms linear;
  &:active,
  &:focus {
    border-color: var(--warning);
  }
}
</style>
