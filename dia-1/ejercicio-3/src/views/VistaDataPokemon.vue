<script setup>
import { computed } from 'vue';
import { pokemons } from '../pokemon-data.js'

 const props=defineProps({
    id:{type: String, required:true }
});

const pokemon = computed(()=> pokemons.find(p => p.id == props.id))
console.log(pokemon.value);


</script>

<template>
    <div>
        <h4> {{ pokemon.nombre }} #{{ props.id }}</h4>
        <span class="tag" v-for="p in pokemon.tipos">
            {{ p }}
        </span>
        <br/>
        <router-link to="/pokemon">Volver</router-link>
    </div>
</template>


