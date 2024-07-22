import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
import Detail from "./pages/Detail.vue";
import { createWebHistory, createRouter } from 'vue-router';

const routes = [
    {
        path: '/',
        name: "Home",
        component: Home
    },
    {
        path: '/about',
        name: "About",
        component: About
    },
    {
        path: '/detail/:id',
        name: "Detail",
        component: Detail,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router