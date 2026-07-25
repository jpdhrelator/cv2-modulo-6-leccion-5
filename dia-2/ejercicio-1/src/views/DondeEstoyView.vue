<script setup>
import { useRoute } from 'vue-router';

const route= useRoute();


</script>
<template>
    <div class="info">
        <p> Esta en: {{ route.path }} </p>
        <p>Nombre de la Ruta: {{ route.name }}</p>
        <p>Query Params {{ route.query }}</p>
        <p>Parametros {{ route.params }}</p>
    </div>
</template>

<style scoped>
.info {
  background: #f1f5f9;
  border-left: 4px solid #38bdf8;
  padding: .8rem 1rem;
  border-radius: 0 8px 8px 0;
}
.info b {
  color: #35495e;
}
</style>

