<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();







</script>

<template>
    <div>
        <h1>Inicio</h1>
    </div>
    <ul>
        <li>
            <router-link to="/productos?tipo=lacteos" > Ir a Lacteos</router-link>
        </li>
      
    </ul>
</template>


<style scoped>

</style>