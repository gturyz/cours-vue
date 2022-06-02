import { createRouter, createWebHistory } from "vue-router";
import FormJWTVue from "./components/FormJWT.vue";
import HelloWorldVue from "./components/HelloWorld.vue";
import ListVue from "./components/List.vue";
import UserVue from "./components/User.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "HelloWorld", component: HelloWorldVue },
    { path: "/fromjwt", name: "FormJWT", component: FormJWTVue },
    { path: "/user", name: "User", component: UserVue },
    { path: "/list", name: "List", component: ListVue },
  ],
});

export default router;
