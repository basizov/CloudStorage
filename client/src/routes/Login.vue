<template>
  <section class="login">
    <pre>{{ $store.getters.getUser }}</pre>
    <h2 class="login__title">Авторизация</h2>
    <auth-form
      @submitForm="login"
      formButtonText="Войти"
      class="login__form"
    />
    <div class="link login__link" @click="$router.push('/register')">
      У вас еще нет аккаунта?
    </div>
  </section>
</template>

<script lang="ts">
import AuthForm from '@/components/tagComponents/AuthForm.vue';
import { IAuth } from '@/models/IAuth';
import { defineComponent } from 'vue';
import { CommonActions } from '@/store/commonModule/actions';

export default defineComponent({
  components: { AuthForm },
  name: 'Login',
  methods: {
    login(loginParams: IAuth) {
      this.$store.dispatch(CommonActions.LOGIN_USER, loginParams);
      this.$router.push('/');
    }
  }
});
</script>

<style lang="scss" scoped>
.login {
  position: relative;
  margin: 0 auto;
  padding: 1rem;
  background-color: var(--primary);
  border: 0.1em solid var(--secondary);
  border-radius: 0.3em;
  box-shadow: 0 0 1em var(--primary-07);
  max-width: 45%;
  margin: 0 auto;
  &__title {
    width: max-content;
    font-size: 4rem;
    margin: 0 auto;
    border-bottom: 0.15rem solid var(--classic);
    margin-bottom: 1rem;
  }
  &__link {
    position: absolute;
    left: 1.5rem;
    bottom: 1.5rem;
  }
}
</style>
