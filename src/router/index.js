import Vue from 'vue'
import VueRouter from 'vue-router'
const home = () => import("../views/Home")
const about = () => import("../views/About")
const Contact = () => import("../views/Contact")


Vue.use(VueRouter)

  const routes = [{
    path: "/",
    component: home
  },
    {
    path: "/Home",
    name: "home",
    component: home
  },
    {
      path: "/About",
      name: "about",
      component: about
    },
    {
      path: "/Contact",
      name: "Contact",
      component: Contact
    },
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
