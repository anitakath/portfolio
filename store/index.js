import { configureStore } from "@reduxjs/toolkit";
import changeLanguageReducer from './languageSlice'

const store = configureStore({
    reducer: {
        language:  changeLanguageReducer,

    }
})

export default store;