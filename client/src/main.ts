import { createApp } from 'vue'
import App from './layout/App.vue'
import router from './layout/router';

const application = createApp(App);

application
  .use(router)
  .mount('#app');
