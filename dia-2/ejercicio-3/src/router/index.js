import { createRouter, createWebHistory } from 'vue-router';
import BuscadorView from '../views/BuscadorView.vue';
import InicioView from '../views/InicioView.vue';


const routes=[
  
     {
        path:'/',
        name:'inicio',
        component: InicioView
     },
  
     {
        path:'/buscador',
        name:'buscador',
        component: BuscadorView
     }
     

];

const router= createRouter({
    history: createWebHistory(),
    routes,
    // Reemplaza 'router-link-active'
  linkActiveClass: 'link-activo', 
  // Reemplaza 'router-link-exact-active'
  linkExactActiveClass: 'link-activo-exacto'
});


export default router;