import { createReducer } from '@reduxjs/toolkit'
import { updateExampleCount } from './actions'
import { initialState } from './state'


const reducer = createReducer(initialState, builder => {
  builder
    .addCase(updateExampleCount, (state, { payload }) => {
      return {
        ...state,
        exampleCount: payload
      }
    })
})

export default reducer
