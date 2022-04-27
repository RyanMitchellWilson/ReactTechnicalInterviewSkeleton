import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { updateExampleCount } from '../../redux/actions'
import { useExampleCount } from '../../redux/selectors'
import './Home.css'

const Home = () => {
  const dispatch = useDispatch()
  const exampleCount = useExampleCount()

  const addExampleCount = useCallback(() => {
    dispatch(updateExampleCount(exampleCount + 1))
  }, [dispatch, exampleCount])

  const minusExampleCount = useCallback(() => {
    dispatch(updateExampleCount(exampleCount - 1))
  }, [dispatch, exampleCount])

  return (
    <div>
      <h1 className='Title'>Home</h1>
      <div>
        <div className='CountText'>{exampleCount}</div>
        <div className='ButtonContainer'>
          <div className='Button ButtonMinus' onClick={minusExampleCount}>-</div>
          <div className='Button ButtonPlus' onClick={addExampleCount}>+</div>
        </div>
      </div>
    </div>
  )
}

export default Home
