<template>
  <section class="file-header">
    <the-input
      placeholder="Найти файл / папку..."
      class="file-header__search"
      v-model="searchFile"
    />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FileHeader',
  data() {
    return {
      searchFile: ''
    };
  }
});
</script>

<style lang="scss" scoped>
.file-header {
  width: 100%;
  &__search {
    font-size: 1.6rem;
    width: 100%;
  }
}
</style>
