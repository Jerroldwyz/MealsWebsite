import axiosClient from '../axiosClient'

export function searchMeals({ commit }, searchKey) {
    axiosClient.get(`search.php?s=${searchKey}`)
    .then(({ data }) => {
        commit('setSearchMeals', data.meals)
    })
}
export function letterMeals({ commit }, letterKey) {
    axiosClient.get(`search.php?f=${letterKey}`)
    .then(({ data }) => {
        commit('setLetterMeals', data.meals)
    })
}
export function ingredientMeals({ commit }, ingredientKey) {
    axiosClient.get(`filter.php?i=${ingredientKey}`)
    .then(({ data }) => {
        commit('setIngredientMeals', data.meals)
    })
}