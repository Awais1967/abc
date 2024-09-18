import React,{useEffect} from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useSelector  } from 'react-redux'
const UserLayout = () => {
    const user = useSelector((state)=> state.Auth.user)
    console.log("user=>",user)
    const navigate = useNavigate()
    useEffect(() => {
        if (!user) {
          navigate('/login');
        }
      }, [navigate, user]);
  return (
    <div>
      <Outlet/>
    </div>
  )
}

export default UserLayout
