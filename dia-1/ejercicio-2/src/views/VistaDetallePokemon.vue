<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const pokemons = [
     {id:1, nombre: 'Bulbasaur', tipo: 'Planta',    emoji: '🌱', desc: 'Lleva una semilla en el lomo desde que nace.' },
     {id:4, nombre: 'Charmander', tipo: 'Fuego',    emoji: '🔥', desc: 'La llama de su cola indica su estado de ánimo.' },
     {id:7, nombre: 'Squirtle',  tipo: 'Agua',      emoji: '💧', desc: 'Su caparazón le sirve de refugio y de arma.' },
     {id:24, nombre: 'Pikachu',   tipo: 'Eléctrico', emoji: '⚡', desc: 'Almacena electricidad en sus mejillas.' }
]

const route= useRoute();
const idPokemon= computed (()=>Number(route.params.id));
console.log(idPokemon.value);


const pokemon= computed(()=> pokemons.find((p) => p.id ===idPokemon.value));
console.log(pokemon.value);

</script>
<template>
    <div>
        <h1>{{ pokemon.emoji }} {{ pokemon.nombre }}</h1>
    </div>
</template>


