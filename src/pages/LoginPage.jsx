import React, { useEffect, useRef, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

function LoginPage() {
  let password_input = useRef()
  let email_input = useRef()
  let navigate = useNavigate()
  let [allUsers, setAllUsers] = useState(null)
  let [xabar, setXabar] = useState(false)
  useEffect(()=>{
    getUsers()
  },[])
  async function getUsers(){
    let fetchUsers = await fetch("https://landing-page-backend-1.onrender.com/users")
    let json = await fetchUsers.json()
    setAllUsers(json.data)
  }
  function handleSubmit(e){
    e.preventDefault()
    let user = allUsers.find((item)=>item.email === email_input.current.value)
    console.log(user);
    if(user?.password === password_input.current.value){
      navigate(`/admin/${user._id}`)
    }else{
      navigate("/login")
      setXabar(true)
    }
  }
  return (
    <div>
            <NavLink to="/">go home</NavLink>
            <form onSubmit={(e)=>handleSubmit(e)}>
              {xabar && <h2>login yoki parol hato</h2>}
              <input ref={email_input} type="text" placeholder='email' />
              <input ref={password_input} type="text" placeholder='password' />
              <button type="submit">login</button>
            </form>
    </div>
  )
}

export default LoginPage
