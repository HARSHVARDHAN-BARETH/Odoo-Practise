import React from 'react'
import { Link } from 'react-router-dom'

function Welcome() {
  return (
    <div className='bg-white w-screen h-screen flex justify-center items-center flex-col'>

    <h1>      Welcome to Re-Weare
</h1>

<div className='w-64 h-6/12 bg-gray-50 flex flex-col items-center justify-center'>
        <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>

</div>
    </div>
  )
}

export default Welcome
