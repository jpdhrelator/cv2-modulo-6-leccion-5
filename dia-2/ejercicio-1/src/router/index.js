import { createRouter, createWebHistory } from 'vue-router';
import InicioView from '../views/InicioView.vue';
import ProductosView from '../views/ProductosView.vue';
import LoginView from '../views/LoginView.vue';
import DondeEstoyView from '../views/DondeEstoyView.vue';
import ConsultadorView from '../views/ConsultadorView.vue';


const routes=[
    {
        path:'/',
        name:'inicio',
        component: InicioView
    },
    {
        path:'/login',
        name:'login',
        component: LoginView
    },
     {
        path:'/productos',
        name:'productos',
        component: ProductosView
     },
     {
        path:'/productos/:id',
        name:'productosNro',
        component: ProductosView
     },
     {
        path:'/donde-estoy',
        name:'dondeEstoy',
        component: DondeEstoyView
     },
     {
        path:'/donde-estoy/:text',
        name:'dondeEstoyDinamico',
        component: DondeEstoyView
     },
     {
        path:'/donde-estoy/:text/:text2',
        name:'dondeEstoyDinamico2',
        component: DondeEstoyView
     },
     {
        path:'/consultador',
        name:'consultador',
        component: ConsultadorView
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