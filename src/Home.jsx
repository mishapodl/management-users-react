import React from 'react'
import { hello } from './redux/actions/actions'
import { useDispatch } from 'react-redux';

export const Home = () => {
  const dispatch = useDispatch()

  return (
    <div>
      <button onClick={() => dispatch(hello())}>Hello</button>
    </div>
  )
}
