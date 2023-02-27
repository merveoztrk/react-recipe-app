import axios from "axios";

// export const fetchRecipeSearch = async (searchterm) => {
//     const data = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchterm}`)
//     return data
// }
export const fetchByIngrediant = async (term) => {
    const data = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${term}`)
    return data
}

export const fetchRandomRecipe = async () => {
    const data = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
    return data
}

export const fetchRecipeCategories = async () => {
    const data = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
    return data

}

export const fetchRecipeCategoriesFilter = async (searchterm) => {
    const data = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?${searchterm}`)
    return data
}
// export const fetchDetail = async (id) => {
//     const data = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
//     return data
// }

export const fetchRegion = async () => {
    const data = await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
    return data
}

//www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata --name ile search
//www.themealdb.com/api/json/v1/1/lookup.php?i=52772 --id ile search
//www.themealdb.com/api/json/v1/1/search.php?f=a --harf ile
// --random yemek
//www.themealdb.com/api/json/v1/1/categories.php --kategorileri getiriyor
//www.themealdb.com/api/json/v1/1/filter.php?c=Seafood --kategoriyi filter'lıyor
//www.themealdb.com/api/json/v1/1/filter.php?a=Canadian --burada id bilgisi ile yer alıyor yemekler
