import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className=" bg-transparent">
    <nav className="flex justify-between items-center h-12  text-gray-800 relative  font-mono">
      <Link to="/" className="p-4  text-4xl font-bold">
        Z2M BIKES
      </Link>
    </nav>
  </div>
  )
}

export default NavBar