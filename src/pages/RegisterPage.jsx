import React, { useRef } from 'react'
import { NavLink } from 'react-router-dom'
import "../styles/register.css"
function RegisterPage() {
  let name__input = useRef()
  let phone__input = useRef()
  let email__input = useRef()
  let password__input = useRef()

  function handleSubmit(e){
    e.preventDefault()
    let ready = {
      username: name__input.current.value,
      phone_number:phone__input.current.value,
      email: email__input.current.value,
      password: password__input.current.value,
      imageLink: "https://picsum.photos/100/100",
    }
    fetch("https://landing-page-backend-1.onrender.com/users/",{
      method:"POST",
      headers:{
        "Content-Type":"Application/json"
      },
      body:JSON.stringify(ready)
    })
    console.log(ready);
  }
  return (
    <div className='form__wrapper'>
      <form onSubmit={(e)=>handleSubmit(e)} >
        <input ref={name__input} type="text" placeholder='name' />
        <input ref={phone__input} type="text" placeholder='phone' />
        <input ref={email__input} type="text" placeholder='email' />
        <input ref={password__input} type="text" placeholder='password' />
        <button type="submit">register</button>
      </form>
      <NavLink to="/">go home</NavLink>
    </div>
  )
}

export default RegisterPage
