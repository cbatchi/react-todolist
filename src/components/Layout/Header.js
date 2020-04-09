import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

  return (
    <header style={headerStyle}>
      <h1>Todolist</h1>
      <Link style={LinkStyle} to='/'>Home</Link> | <Link style={LinkStyle} to='/about'>About</Link>
    </header>
  )
}

const headerStyle = {
  background: '#333333',
  color: '#ffffff',
  textAlign: 'center',
  padding: '10px',
  margin: '10px'
}

const LinkStyle = {
  color: '#ffffff',
  textDecoration: 'none',
  padding: '20px',
  fontSize: '1em'
}

export default Header