import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Login.vue'
import NewsView from '../views/NewsView.vue'
import Register from "../views/Register.vue";
import {useAuthStore} from "../stores/auth";
import AddPost from "../views/AddPost.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/register',
            name: 'Register',
            component: Register,
            meta: {
                auth: false,
            }
        },
        {
            path: '/login',
            name: 'Login',
            component: Login,
            meta: {
                auth: false,
            }
        },
        {
            path: '/news',
            name: 'News',
            component: NewsView,
            meta: {
                auth: true
            }
        },
        {
            path: '/addpost',
            name: 'AddPost',
            component: AddPost,
            meta: {
                auth: true
            }
        }
    ]
})

router.beforeEach((to, from, next) => {
    const authStore = useAuthStore();

    if (to.meta.auth && !authStore.userInfo.token) {
        next('/login')
    } else if (!to.meta.auth && authStore.userInfo.token) {
        next('/news')
    } else {
        next();
    }
})


export default router
