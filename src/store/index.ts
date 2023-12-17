import { configureStore } from '@reduxjs/toolkit'
import authSlice from './state/authSlice'
import { setupListeners } from '@reduxjs/toolkit/query'
import { authApi } from './api/authApi'
import { userApi } from './api/userApi' // Import your userApi

export const store = configureStore({
  reducer: {
    auth: authSlice,
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer, // Include userApi's reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, userApi.middleware), // Concatenate middlewares
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: { auth: AuthState, userApi: any, [authApi.reducerPath]: any }
export type AppDispatch = typeof store.dispatch

setupListeners(store.dispatch)
