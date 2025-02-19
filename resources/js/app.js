import '../css/app.css';
import './bootstrap';

import {createInertiaApp, router} from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createApp, h } from 'vue';
// import DefaultLayout from "@/Layouts/DefaultLayout.vue";
// import { ZiggyVue } from 'ziggy-js';
// import 'font-awesome/css/font-awesome.css';


// const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    // title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.vue`,
            import.meta.glob('./Pages/**/*.vue'),
        ),
    setup({el, App, props, plugin}) {
        return createApp({render: () => h(App, props)})
            .use(plugin)
            // .use(ZiggyVue)
            //.use(router)
            // .use(store)
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
}).then(() => {
    console.log('Inertia.js app is set up with Vue Router.');
});




// import { createApp } from 'vue';
// import App from './components/NavBar.vue';
//
// // Create a Vue application and mount it to an element with the ID of 'app'
// const app = createApp(App);
//
// // You can register any global components here if needed
// // Example: app.component('example-component', ExampleComponent);
//
// app.mount('#app');
