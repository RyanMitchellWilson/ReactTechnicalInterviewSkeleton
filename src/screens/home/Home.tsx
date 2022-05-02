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
    <div className="homePage">
      <h1>Home</h1>
      <div>{exampleCount}</div>
      <div>
        <button className="btn-minus" onClick={minusExampleCount}>-</button>
        <button className="btn-plus" onClick={addExampleCount}>+</button>
      </div>
    </div>
  )
}

export default Home
