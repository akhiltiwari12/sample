import React from 'react'
import { useParams } from 'react-router'

function User() {
    const{id}=useParams()
  return (
    <div className='bg-gray-700 text-white text-3xl p-5 text-center'>User:{id}</div>
  )
}

export default User