import { useSelector } from 'react-redux'
import { IState } from './state'

export const useExampleCount = () => useSelector<IState, number>((state) => {
  return state.exampleCount
})

export const useReduxState = () => useSelector((state: IState) => state)