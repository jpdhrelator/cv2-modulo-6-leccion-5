import { createRouter, createWebHistory } from 'vue-router'
import VistaInicio from '../views/VistaInicio.vue';
import VistaDataPokemon from '../views/VistaDataPokemon.vue';
import VistaImagenPokemon from '../views/VistaImagenPokemon.vue';
import Vista404 from '../views/Vista404.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),

    routes:[
        {
            path:'/', redirect:'/pokemon'
        },
        {
            path:'/pokemon',
            alias:['/poke','/bicho'],
            component: VistaInicio

        },       
        {
            path:'/pokemon/:id',
            props:true,
            children:[
                
                {
                    path:'data',
                    component: VistaDataPokemon,
                    props:true
                },
                {
                    path:'imagen',
                    component: VistaImagenPokemon,
                    props:true
                }
            ] 
        },
        {
            path: '/:pathMatch(.*)*',
            component: Vista404
        }
        
    ]
});





export default router;