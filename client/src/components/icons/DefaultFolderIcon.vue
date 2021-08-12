<template>
  <svg
    aria-hidden="true"
    focusable="false"
    data-prefix="fas"
    data-icon="folder"
    class="svg-inline--fa fa-folder fa-w-16"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
  >
    <path
      class="path-color"
      d="M464 128H272l-64-64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48z"
    ></path>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DefaultFolderIcon'
});
</script>
