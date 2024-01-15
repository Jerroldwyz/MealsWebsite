<template>
  <div class="flex flex-col p-8 ">
    <div class="flex justify-center gap-2 mt-2">
      <router-link :to="{name:'byLetter', params:{letter}}" v-for="letter of letters" :key="letter">
        {{ letter }}
      </router-link>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-3 p-6">
    <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal"></MealItem>
    </div>
  </div>
</template>

<script setup>
import { computed } from '@vue/reactivity';
import { onMounted, watch } from '@vue/runtime-core';
import { useRoute } from 'vue-router';
import store from '../store'
import MealItem from '../components/MealItem.vue';

const route = useRoute()
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const meals = computed(() => store.state.letterMeals)

watch(route, () => {
  store.dispatch('letterMeals', route.params.letter)
})
onMounted(() => {
  store.dispatch('letterMeals', route.params.letter)
})

</script>
