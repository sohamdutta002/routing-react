import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Login = ({fakeAuth}) => {
  const navigate=useNavigate()
  const handleLogin=()=>{
    fakeAuth.login(()=>navigate("/dashboard"))
  }
  
  return (
    <div>
        <div className='text-2xl'>Login</div>
        <button onClick={handleLogin}>Log in</button>
    </div>
  )
}
