import React, { useState, useEffect } from 'react'
import { Outlet, useSearchParams, useNavigate } from 'react-router-dom'

function Home() {
  let navigate = useNavigate()
  let [items, setItems] = useState([])
  let [searchPar, setSearchPar] = useSearchParams()

  let btnClicked = (e) => {
    setSearchPar({ catgeory: `${e.target.className}` })
  }
  let viewItem = (e)=> {
      navigate(`/item/${e.target.getAttribute('itemid')}`)
  }
  let api = null
  if (searchPar.get('catgeory')) {
    if (searchPar.get('catgeory') == 'categories') {
      api = `https://fakestoreapi.com/products`
    }
    else {
      api = `https://fakestoreapi.com/products/category/${searchPar.get('catgeory')}`
    }
  } else {
    api = 'https://fakestoreapi.com/products'
  }

  useEffect(() => {
    fetch(api).
      then(res => res.json()).
      then((data) => {
        setItems(data)
      })
  }, [searchPar, api])

  return (
    <>

      <div className='links'>
        <button onClick={btnClicked} className='categories'>All</button>
        <button onClick={btnClicked} className='jewelery'>Jewelery</button>
        <button onClick={btnClicked} className='electronics'>Electronics</button>
        <button onClick={btnClicked} className="men's clothing">Men</button>
        <button onClick={btnClicked} className="women's clothing">Women</button>
      </div>

      <div className='cards'>
        <Outlet />
        {
          items && items.map((item) => {
            return (
              <div key={item.id} className='itemCard'>
                <img src={item.image} alt="" />
                {item.title}
                <button onClick={viewItem} itemID={item.id}>View</button> 
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Home