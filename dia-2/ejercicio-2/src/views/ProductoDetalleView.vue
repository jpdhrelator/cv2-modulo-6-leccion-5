<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const route  = useRoute();
const router = useRouter();

const props= defineProps({
    id: String
});

const catalogo = [
  { id: 1, nombre: 'Audífonos Pro', emoji: '🎧', precio: 49990 },
  { id: 2, nombre: 'Teclado Mecánico', emoji: '⌨️', precio: 39990 },
  { id: 3, nombre: 'Mouse Gamer', emoji: '🖱️', precio: 19990 }
]

const producto= computed(()=>{
    return catalogo.find((p)=> p.id === Number(props.id));
});
console.log('query:',route.query);
console.log('params:',route.params);

</script>
<template>
    <div class="ficha">
        <button class="volver" @click="router.back()">← Volver</button>

        <div v-if="producto" class="card">
            <div class="emoji">{{ producto.emoji }}</div>
            <h2>{{ producto.nombre }}</h2>
            <p class="precio">${{ producto.precio }}</p>
        </div>
        <p v-else>Producto no encontrado 😕</p>
    </div>
</template>
<style scoped>
.ficha {
    text-align: center;
}

.volver {
    background: #e2e8f0;
    color: #334155;
    border: none;
    padding: .4rem .9rem;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 700;
}

.card {
    margin: 1rem auto;
    max-width: 240px;
    background: #fff;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    padding: 1.2rem;
}

.emoji {
    font-size: 3rem;
}

.precio {
    font-size: 1.3rem;
    font-weight: 800;
    color: #35495e;
}
</style>
