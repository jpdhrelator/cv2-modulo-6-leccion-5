import { createRouter, createWebHistory } from 'vue-router'
import VistaInicio from '../views/VistaInicio.vue';
import VistaDetallePokemon from '../views/VistaDetallePokemon.vue';
import VistaDetallePokemonProps from '../views/VistaDetallePokemonProps.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),

    routes:[
        {
            path:'/', redirect:'/pokemon'
        },
        {
            path:'/pokemon', name:'inicio' ,component: VistaInicio
        },
        {
            path:'/pokemon/:id', component: VistaDetallePokemon
        },
        {
            path:'/pokemon/:idPokemon/detalle', 
            component: VistaDetallePokemonProps,
            props:true
        }
    ]
});





export default router;