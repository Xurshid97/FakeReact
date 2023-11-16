import React, {useState} from 'react'
import { Outlet, Link } from 'react-router-dom'

function Home() {
  return (
    <div className='cards'>
      <Link to={'category/jewelery'}>Jewelery</Link>
      <Link to={'category/electronics'}>Electronics</Link>
      <Link to={"category/men's clothing"}>Men</Link>
      <Link to={"category/women's clothing"}>Women</Link>
      <Outlet />
    </div>
  )
}

export default Home