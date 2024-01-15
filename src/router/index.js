import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue'
import SearchLetter from '../views/SearchLetter.vue'
import SearchIngredient from '../views/SearchIngredient.vue'
import SearchName from '../views/SearchName.vue'
import DefaultLayout from '../components/DefaultLayout.vue'
import MealDetail from '../views/MealDetail.vue'
import Ingredients from '../views/Ingredients.vue'

const routes = [
  {
    path:'',
    component: DefaultLayout,
    children: [
      {
        path: "/",
        name: "home",
        component: Home,
      },
      {
        path: "/byName/:name?",
        name: "byName",
        component: SearchName,
      },
      {
        path: "/ingredient",
        name: "ingredient",
        component: Ingredients,
      },
      {
        path: "/byIngredients/:ingredient?",
        name: "byIngredient",
        component: SearchIngredient,
      },
      {
        path: "/byLetter/:letter?",
        name: "byLetter",
        component: SearchLetter,
      },
      {
        path: '/meal/:id',
        name: 'mealDetail',
        component: MealDetail
      }
    ]
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
