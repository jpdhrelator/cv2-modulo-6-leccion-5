<script setup>
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const route  = useRoute();
const router = useRouter();

const frutas = ['manzana', 'pera', 'plátano', 'piña', 'uva'];
const texto = ref(route.query.q || '');

function buscar () {
  router.push({ name: 'buscador', query: { q: texto.value } })
}
const resultados = computed(() => {
  const q = (route.query.q || '').toLowerCase()
  return frutas.filter(f => f.includes(q))
})
</script>


<template>
  <div class="buscador">
    <div class="barra">
      <input v-model="texto" @keyup.enter="buscar" placeholder="Buscar fruta..." />
      <button @click="buscar">Buscar</button>
    </div>

    <p>Resultados de: <b>{{ route.query.q || 'todo' }}</b></p>
    <ul>
      <li v-for="f in resultados" :key="f">{{ f }}</li>
    </ul>
  </div>
</template>
<style scoped>
.barra {
  display: flex;
  gap: .5rem;
  margin-bottom: .8rem;
}
.barra input {
  flex: 1;
  padding: .5rem .7rem;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
}
.barra button {
  background: #42b883;
  color: #0f172a;
  border: none;
  padding: .5rem 1rem;
  border-radius: 8px;
  font-weight: 700;
  cursor: pointer;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  padding: .4rem .6rem;
  border-bottom: 1px solid #e2e8f0;
}
</style>