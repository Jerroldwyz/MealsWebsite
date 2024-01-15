<template>
  <div>
    <img src="public/recipe.jpg" alt="recipe-bg" class="w-full"/>
  </div>
</template>

<script setup>
import store from "../store";
import { computed, onMounted, ref} from "vue";
import axiosClient from "../axiosClient";

const ingredients = ref([])

onMounted(async ()=> {
  const response = await axiosClient.get('list.php?i=list')
  console.log(response.data)
  ingredients.value = response.data
})
</script>
