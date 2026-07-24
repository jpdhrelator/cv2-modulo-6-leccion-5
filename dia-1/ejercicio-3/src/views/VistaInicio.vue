<script setup>
import { pokemons } from '../pokemon-data.js'


</script>
<template>
    <div>
        <h1>Lista de Pokemones</h1>

        <div v-for="poke in pokemons" :key="poke.id">
            <h5>{{ poke.nombre }}</h5>
            <ul>
                <li><router-link :to="`pokemon/${poke.id}/data`">Ver Data</router-link></li>
                <li><router-link :to="`pokemon/${poke.id}/imagen`">Ver Imagen</router-link></li>
            </ul>

        </div>
    </div>
</template>
