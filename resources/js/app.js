import { createApp } from 'vue';
import App from './components/NavBar.vue';
import Register from './Pages/Register.vue';

// Create a Vue application and mount it to an element with the ID of 'app'
const app = createApp(App);

// You can register any global components here if needed
// Example: app.component('example-component', ExampleComponent);

app.mount('#app');
