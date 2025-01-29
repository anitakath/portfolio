import { configureStore } from "@reduxjs/toolkit";
import changeLanguageReducer from './languageSlice'
import dataReducer from './dataSlice'

const store = configureStore({
    reducer: {
        language:  changeLanguageReducer,
        data: dataReducer,

    }
})

export default store;