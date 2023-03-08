import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: "login",
            path: "/login",
            component: () => import("../views/index/LoginPage.vue")
        },
        {
            name: "admin",
            path: "/",
            component: () => import("../views/index/RootPage.vue"),
            children:[
                {
                    name: "test1",
                    path: "/test1",
                    component: () => import("../views/index/TestPage1.vue")
                },
                {
                    name: "test",
                    path: "/test",
                    component: () => import("../views/index/TestPage.vue")
                }
            ]
        },
    ]
})
export default router