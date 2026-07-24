import { createRouter, createWebHistory } from 'vue-router'
import VistaInicio from '../views/VistaInicio.vue';
import VistaContacto from '../views/VistaContacto.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),

    routes:[
        {
            path:'/', name:'inicio' ,component: VistaInicio
        },
        {
            path:'/contacto', name:'contacto' ,component: VistaContacto
        }
    ]
});





export default router;