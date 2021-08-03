<template>
  <main class="container">
    <router-view />
  </main>
</template>

<script lang="ts">
import { CommonActions } from '@/store/commonModule/actions';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  created() {
    this.$store.dispatch(CommonActions.AUTH_USER);
  }
});
</script>

<style lang="scss" src="./style.scss"></style>
