import { combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit'
//import thunkMiddleware from 'redux-thunk'
import cartSlice from './slices/cartSlice'
import filterSlice from './slices/filterSlice'
import pizzasSlice from './slices/pizzasSlice'

export const rootReducer = combineReducers({
	filter: filterSlice,
	cart: cartSlice,
	pizzas: pizzasSlice
})

export const store = configureStore({
	reducer: rootReducer,
	//middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware)
})

// types
export type RootStateType = ReturnType<typeof store.getState>

//export type RootReducerType = ReturnType<typeof rootReducer>
//export type AppActionsType = Parameters<typeof rootReducer>[1]
//export type ThunkType<ReturnType = void> = ThunkAction<ReturnType, RootStateType, unknown, AppActionsType>
// export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never
