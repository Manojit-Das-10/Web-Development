import { configureStore } from '@reduxjs/toolkit'
import { CounterSlice } from './slices/counterSlice'

export const store = configureStore({
  reducer: {
    counter:CounterSlice
  },
})