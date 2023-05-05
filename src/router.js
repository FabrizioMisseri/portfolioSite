import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import Contacts from "./pages/Contacts.vue";
import Projects from "./pages/Projects.vue";
import NotFound from "./pages/NotFound.vue";

const router = createRouter({
    history: createWebHistory(),

    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage,
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: Contacts,
        },
        {
            path: '/projects',
            name: 'projects',
            component: Projects,
        },
        {
            path: "/:pathMatch(.*)*",
            name: 'home',
            component: HomePage,
        },
    ],
});

export { router };