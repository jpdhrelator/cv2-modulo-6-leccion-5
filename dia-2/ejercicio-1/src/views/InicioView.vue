<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();



function irALacteos() {
    /**
     * 
     * 
     * 
     */
    router.push({ name:'productos', query:{'tipo':"lacteos"}});
}
function irProducto1() {
  
    router.push({ name:'productosNro', params:{ id: 1 }});
}
function irADondeEstoy() {
    /**
     * 
     * 
     * 
     */
    router.push({ name:'dondeEstoy', query:{'tipo':"lacteos"}});
}



</script>

<template>
    <div>
        <h1>Inicio</h1>
    </div>
    <ul>
        <li>
            <router-link to="/productos?tipo=lacteos" > Ir a Lacteos</router-link>
        </li>
        <li>
            
            <button @click="irALacteos">Ir a Producto Lacteaos</button>
        </li>
         <li>
            <button @click="irProducto1">Ir a Producto 1</button>
        </li>
         <li>
            <button @click="irADondeEstoy">Ir a dondeEstoy</button>
        </li>
        <li>
            <router-link to="/consultador?texto=carlos+herrera&estado=active&rol=user"><Canvas></Canvas>onsultar</router-link>
        </li>
    </ul>
</template>


<style scoped>

</style>