<script setup>
import { ref } from "vue";
let id = ref(2);
const list = ref([{ id: 1, nom: "Marron", prenom: "Jean" }]);
const nom = ref("");
const prenom = ref("");
const handleAdd = () => {
  list.value.push({
    id: id.value,
    nom: nom.value,
    prenom: prenom.value,
  });
  id.value++;
  prenom.value = "";
  nom.value = "";
};
const handleRemove = (ind) => {
  let indexASupprimer = "NOT FOUND";

  for (const [index, element] of list.value.entries()) {
    if (element.id === ind) {
      indexASupprimer = index;
      break;
    }
  }
  if (indexASupprimer !== "NOT FOUND") {
    list.value.splice(indexASupprimer, 1);
  }
};
</script>

<template>
  <h1>Le formulaire</h1>
  <label for="nom">Nom</label>
  <input type="text" name="nom" v-model="nom" />
  <br />
  <label for="prenom">Prénom</label>
  <input type="text" name="prenom" v-model="prenom" />
  <br />
  <button @click="handleAdd">Ajouter</button>
  <h1>La liste :</h1>
  <ul>
    <li v-for="item in list" :key="item.id">
      {{ item.prenom }} {{ item.nom }}
      <button @click="handleRemove(item.id)">Supprimer</button>
    </li>
  </ul>
</template>

<style scoped></style>
