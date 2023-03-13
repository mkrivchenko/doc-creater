import { createApp } from 'vue'
import componentsUI from './components/UI/out'
import App from './App.vue'
import { createPinia } from 'pinia';

// Vuetify

import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import 'vuetify/styles';
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'

const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi,
        },
    },
});

// Инициализация плагинов
const pinia = createPinia();

// Создание экземпляра приложения
const app = createApp(App);

// Использование инициализированных плагинов
app.use(pinia);
app.use(vuetify);

// Регистрация глобально UI-компонентов
componentsUI.forEach(component => {
    app.component(component.name, component);
});

// Монтирование приложения
app.mount('#app'); 
