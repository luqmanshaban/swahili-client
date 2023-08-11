import React, { useContext } from 'react'
import { AdminContext } from '../../../stores/Admin'

const Home = () => {
    const { details } = useContext(AdminContext)
  return (
    <div>
        <h1>Welcome back {details.firstname}</h1>
    </div>
  )
}

export default Home