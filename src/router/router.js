import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import main from "../components/Main.vue"
import HelloWorld from "@/components/HelloWorld.vue"
import home from "../components/Home.vue"

const router = new Router({
  routes: [
    { path: '/', component: main },
    { path: '/main', component: main },
    { path: '/home', component: home },
    { path: '/helloworld', component: HelloWorld },
  ]
});

export default router;