<script setup>
import { useRoute, useRouter } from 'vue-router';

const route= useRoute();
const router = useRouter();

function volver() {
    router.push('/');
}
</script>
<template>
    <div class="empty">
        <span class="icon">🚧</span>
        <h1>404 — Página no encontrada</h1>
        <p>No existe la ruta <b>{{ route.path }}</b></p>

        <p style="margin-top:.8rem">
            <button @click="volver">Volver al inicio</button>
        </p>
    </div>
</template>


