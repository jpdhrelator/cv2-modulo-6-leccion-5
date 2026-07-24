<script setup>
const pokemons = [
     {id:1, nombre: 'Bulbasaur', tipo: 'Planta',    emoji: '🌱', desc: 'Lleva una semilla en el lomo desde que nace.' },
     {id:4, nombre: 'Charmander', tipo: 'Fuego',    emoji: '🔥', desc: 'La llama de su cola indica su estado de ánimo.' },
     {id:7, nombre: 'Squirtle',  tipo: 'Agua',      emoji: '💧', desc: 'Su caparazón le sirve de refugio y de arma.' },
     {id:24, nombre: 'Pikachu',   tipo: 'Eléctrico', emoji: '⚡', desc: 'Almacena electricidad en sus mejillas.' }
]
</script>
<template>
    <h1>📕 Pokédex</h1>
      <ul>
        <li v-for="p in pokemons" :key="p.id">
          <router-link :to="'/pokemon/' + p.id">
            {{ p.emoji }} #{{ p.id }} {{ p.nombre }}
          </router-link>
        </li>
      </ul>
</template>



