// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { post } from '../services/ApiEndpoint'
import toast from 'react-hot-toast'

const Register = () => {
  const [name,setUsername] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const handleSubmit=async(e)=>{
    e.preventDefault()
    try {
       const request = await post('/api/auth/register',{name,email,password})
       const response = request.data
       console.log(response)
       if(request.status==200){
        toast.success(response.message)
       }
    } catch (error) {
      console.log(error)
      
    }

  }
  return (
    <>
       <div className="register-container">
        <h2>
           Register
        </h2>
        <form action="" onSubmit={handleSubmit} >
        <div className='input-group'>
          <label htmlFor="Username">Username</label>
          <input type="text" name="" id="Username"
          onChange={(e)=>{setUsername(e.target.value)}} />
        </div>
        <div className='input-group'>
          <label htmlFor="Email">Email</label>
          <input type="email" name="" id="email"
          onChange={(e)=>{setEmail(e.target.value)}} />
        </div>
        <div className='input-group'>
          <label htmlFor="password">Password</label>
          <input type="password" name="" id="password" 
          onChange={(e)=>{setPassword(e.target.value)}}/>
        </div>
        <button type='submit'>Register</button>
        <p className='register-link'>Already have account? <Link to={'/login'}>Login here</Link> </p>
      </form>
       </div>
    </>
  )
}

export default Register
