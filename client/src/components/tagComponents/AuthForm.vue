<template>
  <form class="form" @submit="submitForm">
    <the-input placeholder="Введите e-mail:" v-model="email" />
    <the-input
      type="password"
      placeholder="Введите пароль:"
      v-model="password"
    />
    <the-button class="form__btn">{{ formButtonText }}</the-button>
  </form>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import TheButton from '../uiComponents/TheButton.vue';
import { IAuth } from '@/models/IAuth';

export default defineComponent({
  components: { TheButton },
  name: 'AuthForm',
  props: {
    formButtonText: {
      type: String as PropType<string>,
      default: 'Кнопка'
    }
  },
  data() {
    return {
      email: '' as string,
      password: '' as string
    };
  },
  methods: {
    submitForm(e: Event) {
      e.preventDefault();
      const params: IAuth = {
        email: this.email,
        password: this.password
      };

      this.$emit('submitForm', params);
      this.email = '';
      this.password = '';
    }
  }
});
</script>

<style lang="scss" scoped>
.form {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.3em;
  &__btn {
    align-self: flex-end;
  }
}
</style>
