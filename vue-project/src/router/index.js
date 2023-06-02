import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutComponent from '../views/AboutComponent.vue'
import PortfolioComponent from '../views/PortfolioComponent.vue'
import BlogComponent from '../views/BlogComponent.vue'
import BookingComponent from '../views/BookingComponent.vue'
import ShopComponent from '../views/ShopComponent.vue'
import ClientsComponent from '../views/ClientsComponent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutComponent
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: PortfolioComponent
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogComponent
    },
    {
      path: '/booking',
      name: 'booking',
      component: BookingComponent
    },
    {
      path: '/shop',
      name: 'shop',
      component: ShopComponent
    },
    {
      path: '/clients',
      name: 'clients',
      component: ClientsComponent
    },
   
  ]
})

export default router
