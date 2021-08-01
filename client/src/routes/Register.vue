<template>
  <section class="register">
    <h2 class="register__title">Регистрация</h2>
    <auth-form
      formButtonText="Зарегестрироваться"
      class="register__form"
    />
    <div class="link register__link" @click="$router.push('/login')">
      У вас уже есть аккаунт?
    </div>
  </section>
</template>

<script lang="ts">
import AuthForm from '@/components/tagComponents/AuthForm.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { AuthForm },
  name: 'Register'
});
</script>

<style lang="scss" scoped>
.register {
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
