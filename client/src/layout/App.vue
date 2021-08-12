<template>
  <the-navbar />
  <main
    ref="main"
    class="container container__content"
    @click="hideFileMenu"
    @click.right="showFileMenu"
  >
    <router-view />
  </main>
  <show-file-menu
    ref="menu"
    :style="{
      top: `${top}px`,
      left: `${left}px`
    }"
  />

  <create-directory />
</template>

<script lang="ts">
import ShowFileMenu from '@/components/ShowFileMenu.vue';
import CreateDirectory from '@/components/tagComponents/CreateDirectory.vue';
import TheNavbarVue from '@/components/TheNavbar.vue';
import TheNavbar from '@/components/TheNavbar.vue';
import { CommonActions } from '@/store/commonModule/actions';
import { CommonMutationsTypes } from '@/store/commonModule/mutations';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { TheNavbar, ShowFileMenu, CreateDirectory },
  name: 'App',
  data() {
    return {
      top: 0,
      left: 0
    };
  },
  created() {
    this.$store.dispatch(CommonActions.AUTH_USER);
  },
  methods: {
    hideFileMenu() {
      this.$store.commit(CommonMutationsTypes.SET_SHOW_FILE_MENU, false);
    },
    showFileMenu(e: MouseEvent) {
      e.preventDefault();
      this.hideFileMenu();
      setTimeout(() => {
        const clickedElement = e.target as HTMLDivElement;
        const mainSection = this.$refs.main as HTMLDivElement;
        const menuRef = this.$refs.menu as typeof ShowFileMenu;
        const menuElement = menuRef.$el as HTMLDivElement;

        if (
          !clickedElement.classList.contains('file-header__search') &&
          !clickedElement.classList.contains('file-item')
        ) {
          const parentCoordinates = mainSection.getBoundingClientRect();
          const menuCoordinates = menuElement.getBoundingClientRect();

          if (e.clientX + menuCoordinates.width > parentCoordinates.right) {
            this.left = e.clientX - menuCoordinates.width;
          } else {
            this.left = e.clientX;
          }
          if (e.clientY + menuCoordinates.height > parentCoordinates.bottom) {
            this.top = e.clientY - menuCoordinates.height;
          } else {
            this.top = e.clientY;
          }
          this.$store.commit(CommonMutationsTypes.SET_SHOW_FILE_MENU, true);
        }
      }, 200);
    }
  }
});
</script>

<style lang="scss" src="./style.scss"></style>
