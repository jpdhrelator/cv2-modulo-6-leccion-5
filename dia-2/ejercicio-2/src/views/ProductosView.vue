
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const productos = ref([
  { id: 1, nombre: 'Audífonos Pro', emoji: '🎧' },
  { id: 2, nombre: 'Teclado Mecánico', emoji: '⌨️' },
  { id: 3, nombre: 'Mouse Gamer', emoji: '🖱️' }
])

function verDetalle(id) {
    router.push({name:'productoDetalle', params:{id}});
}

</script>
<template>
   <div class="lista">
    <div class="item" v-for="p in productos" :key="p.id">
      <span>{{ p.emoji }} {{ p.nombre }}</span>
      <button @click="verDetalle(p.id)">Ver</button>
    </div>
  </div>
</template>

<style scoped>
.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .6rem .8rem;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  margin-bottom: .4rem;
}
.item button {
  background: #42b883;
  color: #0f172a;
  border: none;
  padding: .3rem .8rem;
  border-radius: 6px;
  font-weight: 700;
  cursor: pointer;
}
</style>
