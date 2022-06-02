<script setup>
import * as jose from "jose";
import { ref } from "vue";

const jwt = ref("");
const decodedJWT = ref("");

const handleSave = () => {
  localStorage.setItem("JWT", jwt.value);
};

const handleDecode = () => {
  decodedJWT.value = jose.decodeJwt(jwt.value);
};

const localJWT = localStorage.getItem("JWT");

if (localJWT) {
  jwt.value = localJWT;
  handleDecode();
}
</script>

<template>
  <input type="text" v-model="jwt" />
  <button @click="handleDecode">Décoder</button>
  <button @click="handleSave">Sauvegarder</button>
  <h3>Contenu de mon jwt</h3>
  <p>{{ decodedJWT }}</p>
</template>

<style scoped></style>
