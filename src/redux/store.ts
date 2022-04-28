import { configureStore } from '@reduxjs/toolkit'
import reducer from './reducer'

const store = configureStore({
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
      thunk: true,
    }),
  reducer,
})

export const getStore = () => {
  return store
}
