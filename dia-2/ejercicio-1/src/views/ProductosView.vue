
<script setup>
import { useRouter } from 'vue-router';

const router= useRouter();

function volver(){
    router.back();
}

</script>
<template>
    <div>
        <h1>Productos</h1>
    </div>

    <button type="button" @click="volver"> <----- volver</button>
</template>

