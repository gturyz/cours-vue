<script setup>
import { ref } from "vue";

const user = ref(null);

const handleLogin = () => {
  user.value = {
    name: "John Doe",
    email: "john.doe@gmail.com",
    password: "password",
  };
};
const handleLogoff = () => {
  user.value = null;
};
</script>

<template>
  <h1 v-if="user">Hello {{ user.name }}!</h1>
  <h1 v-else>Hello Anonyme!</h1>
  <br />
  <button @click="handleLogin">Se connecter</button>
  <button @click="handleLogoff">Se déconnecter</button>
</template>

<style scoped></style>
