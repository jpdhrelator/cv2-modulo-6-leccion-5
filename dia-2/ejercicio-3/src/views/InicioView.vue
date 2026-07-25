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
            <router-link to="/buscador?q=piñ" > Ir a buscar frutas con piñ</router-link>
        </li>
      
    </ul>
</template>


<style scoped>

</style>