import { createRouter, createWebHistory } from 'vue-router';
import ProductosView from '../views/ProductosView.vue';
import InicioView from '../views/InicioView.vue';
import ProductoDetalleView from '../views/ProductoDetalleView.vue';


const routes=[
  
     {
        path:'/',
        name:'inicio',
        component: InicioView
     },
  
     {
        path:'/productos',
        name:'productos',
        component: ProductosView
     },
     {
        path:'/productos/:id/detalle',
        name:'productoDetalle',
        component: ProductoDetalleView,
        props:true
     },
     

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