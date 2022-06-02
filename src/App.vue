<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import Compteur from "./components/Compteur.vue";
import FormJWT from "./components/FormJWT.vue";
import List from "./components/List.vue";
import User from "./components/User.vue";
</script>

<template>
  <div>
    <router-link
      class="btn btn-primary"
      role="button"
      :to="{ name: 'HelloWorld' }"
      >HelloWorld</router-link
    >
    <router-link class="btn btn-primary" role="button" :to="{ name: 'FormJWT' }"
      >FormJWT</router-link
    >
    <router-link class="btn btn-primary" role="button" :to="{ name: 'User' }"
      >User</router-link
    >
    <router-link class="btn btn-primary" role="button" :to="{ name: 'List' }"
      >List</router-link
    >
  </div>
  <router-view></router-view>
</template>

<style>
@import "./assets/base.css";
</style>
