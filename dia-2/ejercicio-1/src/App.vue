<script setup>
import { ref } from 'vue';
import LayoutComponent from './components/LayoutComponent.vue';
import LayoutLogin from './components/LayoutLogin.vue';

const logueado=ref(true);
</script>

<template>
  
  <LayoutComponent v-if="logueado"/>

  <LayoutLogin v-else/>
</template>
