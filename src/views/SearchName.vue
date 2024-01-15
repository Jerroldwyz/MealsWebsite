<template>
  <div class="p-6 pb-0">
    <input
      type="text"
      class="rounded border-2 border-gray 200 w-full"
      placeholder="Search for Meals" 
      v-model="searchKey"
      @change="searchMeals"
    />
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-3 p-6">
    <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal"></MealItem>
  </div>
</template>

<script setup>
import { computed } from '@vue/reactivity'
import { onMounted, ref } from 'vue'
import store from '../store'
import {useRoute} from "vue-router"
import MealItem from '../components/MealItem.vue'

const route = useRoute()
const searchKey = ref('')
const meals = computed(()=> store.state.searchedMeals)

function searchMeals(){
  store.dispatch('searchMeals', searchKey.value)
}

onMounted(()=> {
  searchKey.value = route.params.name
  if(searchKey.value){
    searchMeals()
  }
})
</script>
