import { createApp } from 'vue'
import App from './layout/App.vue'
import router from './layout/router';
import uiComponents from '@/components/uiComponents';

const application = createApp(App);

uiComponents.forEach((component) => {
  application.component(component.name, component);
});

application
  .use(router)
  .mount('#app');
