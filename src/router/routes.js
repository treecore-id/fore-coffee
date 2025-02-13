import AboutPage from "../pages/AboutPage.vue";
import CareerPage from "../pages/CareerPage.vue";
import ContactPage from "../pages/ContactPage.vue";
import HomePage from "../pages/HomePage.vue";
import MenuPage from "../pages/MenuPage.vue";
import NotFoundPage from "../pages/errors/NotFoundPage.vue";
import StorePage from "../pages/StorePage.vue";

const routes = [
    {
        path: '/',
        component: HomePage,
        name: 'home'
    },
    {
        path: '/about',
        component: AboutPage,
        name: 'about'
    },
    {
        path: '/career',
        component: CareerPage,
        name: 'career'
    },
    {
        path: '/contact',
        component: ContactPage,
        name: 'contact'
    },
    {
        path: '/menu',
        component: MenuPage,
        name: 'menu'
    },
    {
        path: '/store',
        component: StorePage,
        name: 'store'
    },
    {
        path: '/:notFound(.*)',
        component: NotFoundPage,
        name: 'error.404'
    }
];

export default routes;