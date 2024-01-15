<template>
    <div class="bg-white shadow rounded">
      <router-link :to="{name: 'mealDetail', params:{id: meal.idMeal}}">
        <img :src="meal.strMealThumb" alt="meal.strMeal" class="rounded-t w-full h-48 object-cover"/>
      </router-link>
      <div class="p-3">
        <h3 class="font-bold">{{ meal.strMeal }}</h3>
        <p class="mb-4">
          {{ $filters.truncateWords(meal.strInstructions, 20) }}        </p>
        <div class="flex item-center">
          <YoutubeBtn :href="meal.strYoutube">Youtube</YoutubeBtn>
        </div>
      </div>
    </div>
</template>

<script setup>
import YoutubeBtn from '../components/YoutubeBtn.vue'
const {meal} = defineProps({
    meal: {
        required: true,
        type: Object
    }
})
</script>