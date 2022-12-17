import { configureStore } from '@reduxjs/toolkit'
import recommendReducer from '@/views/discover/c-views/recommend/store/recommend'

const store = configureStore({
  reducer: {
    recommend: recommendReducer
  }
})
export type RootState = ReturnType<typeof store.getState>
export type DispatchType = typeof store.dispatch
export default store
