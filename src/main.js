import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import CodeBlock from './components/CodeBlock.vue';
// if (process.env.NODE_ENV === 'development') {
//   // eslint-disable-next-line
//   const { worker } = require('../mocks/browser');
//   worker.start();
// }

const app = createApp(App);
console.log('Application Instance', app);

app.use(store);
app.use(router);

app.component('CodeBlock', CodeBlock);

const rootComponetInstance = app.mount('#app');
console.log('rootComponetInstance', rootComponetInstance);
