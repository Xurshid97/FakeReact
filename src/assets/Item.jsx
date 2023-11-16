import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Item() {
    let [item, setItem] = useState()
    let param = useParams()
    let navigate = useNavigate()
    useEffect(()=> {
        fetch(`https://fakestoreapi.com/products/${param.id}`)
            .then(res=>res.json())
            .then(json=>setItem(json))
    }, [])

    let returnHome = ()=> {
        navigate('/')
    }
  return (
    <>
        <div className='singleItem'>
            <img src={item && item.image} alt="" />
            { item && item.title}
        </div>
        <br />
        <button onClick={returnHome}>Home page</button>
    </>
  )
}

export default Item