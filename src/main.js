import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// if (process.env.NODE_ENV === 'development') {
//   // eslint-disable-next-line
//   const { worker } = require('../mocks/browser');
//   worker.start();
// }

const app = createApp(App);
console.log('Application Instance', app);

app.use(store);
app.use(router);

const rootComponetInstance = app.mount('#app');
console.log('rootComponetInstance', rootComponetInstance);
