import { configureStore } from '@reduxjs/toolkit'
import articlesReducer from "../features/articleSlice"
import cartSliceReducer from "../features/cartSlice"
import scategoriesReducer from "../features/scategorieSlice"
import categorieReducer from "../features/categorieSlice"
import authReducer from "../features/AuthSlice"
const store = configureStore({
reducer: {
categories:categorieReducer,
storecart:cartSliceReducer,
storearticles:articlesReducer,
storescategories: scategoriesReducer,
auth:authReducer

}
})
export default store
