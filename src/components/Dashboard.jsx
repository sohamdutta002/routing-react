import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Dashboard = ({fakeAuth}) => {
    const navigate=useNavigate()
    const handleClick=()=>{
        fakeAuth.logout(()=>navigate("/login"));
    }
    return (
    <div className="">
        <div className='text-3xl'>Dashboard(Private Route)</div>
        <button onClick={handleClick}>Logout</button>
    </div>
  )
}
