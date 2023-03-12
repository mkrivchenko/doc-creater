import { createApp } from 'vue'
import componentsUI from './components/UI/out'
import App from './App.vue'
import { createPinia } from 'pinia';

// Инициализация плагинов
const pinia = createPinia();

// Создание экземпляра приложения
const app = createApp(App);

// Использование инициализированных плагинов
app.use(pinia);

// Регистрация глобально UI-компонентов
componentsUI.forEach(component => {
    app.component(component.name, component);
});

// Монтирование приложения
app.mount('#app'); 
