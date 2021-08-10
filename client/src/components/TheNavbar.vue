<template>
  <section class="navbar">
    <div class="navbar__content container__content">
      <div class="navbar__routes">
        <router-link class="navbar__route" to="/">
          Главная
        </router-link>
        <router-link class="navbar__route" to="/info">
          Информация
        </router-link>
        <router-link class="navbar__route" to="/setting">
          Настройки
        </router-link>
      </div>
      <div class="navbar__links" v-if="!$store.getters.getIsAuth">
        <router-link class="navbar__link" to="/login">
          Авторизироваться
        </router-link>
        <router-link class="navbar__link" to="/register">
          Регистрация
        </router-link>
      </div>
      <div class="navbar__account" v-else>
        {{ $store.getters.getUser?.email[0].toUpperCase() ?? 'T' }}
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TheNavbar'
});
</script>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: var(--secondary);
  border-bottom: 0.1rem solid var(--black-03);
  box-shadow: 1rem 0 1rem var(--black-03);
  z-index: var(--navbar-zindex);
  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
  }
  &__links,
  &__routes {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  &__links {
    justify-self: flex-end;
    width: max-content;
  }
  &__route,
  &__link {
    padding: 0.7rem;
    text-decoration: none;
    transition: opacity 250ms linear;
    &:hover {
      opacity: 0.7;
    }
    &:active {
      opacity: 0.8;
    }
  }
  &__link {
    border-radius: 0.3em;
    border: 0.1rem solid var(--success);
    background-color: var(--success);
    width: max-content;
    box-shadow: 0 0 1rem var(--black-07);
  }
  &__route {
    font-size: 1.8rem;
  }
  &__account {
    cursor: pointer;
    height: 100%;
    width: 4.5rem;
    height: 4.5rem;
    background-color: var(--classic);
    border-radius: 100%;
    border: 0.1rem solid var(--black-07);
    box-shadow: 0 0 1rem var(--black-07);
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
