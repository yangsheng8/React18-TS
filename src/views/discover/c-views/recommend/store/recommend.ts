import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getAnything } from '../service/recommend'

export const fetchAnythingDataAction = createAsyncThunk(
  'anything',
  async (payload: string, { getState }) => {
    const res = await getAnything()
    console.log('payload:', payload)

    return res
  }
)

interface IRecommendState {
  slideshow: any
}
const initialState: IRecommendState = {
  slideshow: null
}

const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAnythingDataAction.pending.type](state, action) {
      console.log('pending:----', state, action)
    },
    [fetchAnythingDataAction.fulfilled.type](state, action) {
      state.slideshow = action.payload.data.slideshow
    },
    [fetchAnythingDataAction.rejected.type](state, action) {
      console.log('rejected:-------', state, action)
    }
  }
})

export default recommendSlice.reducer
