<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-3 p-6">
    <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal"></MealItem>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import MealItem from "../components/MealItem.vue";
import store from "../store";

const route = useRoute()
const meals = computed(() => store.state.ingredientMeals)

onMounted(()=>{
  store.dispatch('ingredientMeals', route.params.ingredient)
})
</script>
