<template>
  <the-navbar />
  <main class="container container__content">
    <router-view />
  </main>
</template>

<script lang="ts">
import TheNavbar from '@/components/TheNavbar.vue';
import { CommonActions } from '@/store/commonModule/actions';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { TheNavbar },
  name: 'App',
  created() {
    this.$store.dispatch(CommonActions.AUTH_USER);
  }
});
</script>

<style lang="scss" src="./style.scss"></style>
