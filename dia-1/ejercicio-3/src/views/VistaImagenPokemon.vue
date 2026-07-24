<script setup>
import { computed } from 'vue';
import { pokemons } from '../pokemon-data.js'

 const props=defineProps({
    id:{type: String, required:true }
});

const pokemon = computed(()=> pokemons.find(p => p.id == props.id))

</script>

<template>
    <div>
        <router-link to="/pokemon">Volver</router-link>
        <img :src="pokemon.sprite" :alt="pokemon.nombre">
    </div>
</template>


