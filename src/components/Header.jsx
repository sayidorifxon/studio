import React from 'react'
import "../styles/header.css"
import { NavLink } from 'react-router-dom'
function Header() {
  return (
    <header className='header'>
      <div className="container">
        <ul>
          <li>Главная</li>
          <li>Наши проекты</li>
          <li>Услуги</li>
          <li><NavLink to="/login">login</NavLink></li>
          <li><NavLink to="/register">register</NavLink></li>
        </ul>
      </div>
        <hr />
    </header>
  )
}

export default Header
