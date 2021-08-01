<template>
  <router-link to="/login">Авторизироваться</router-link>
  <router-link to="/register">Регистрация</router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home'
});
</script>

<style lang="scss" scoped></style>
