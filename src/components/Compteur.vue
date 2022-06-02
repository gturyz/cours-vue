<script setup>
import { ref } from "vue";

const compteur = ref(0);
const handleReset = () => {
  compteur.value = 0;
};
</script>

<template>
  <input type="number" name="compteur" v-model="compteur" />
  <p>Mon compteur : {{ compteur }}</p>
  <button @click="handleReset">Reset</button>
</template>

<style scoped></style>
