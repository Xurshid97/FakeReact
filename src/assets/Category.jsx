import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, useNavigate, Outlet } from 'react-router-dom'

function Category() {
    let navigate = useNavigate()
    let [items, setItems] = useState([])
    let param = useParams()
    let api = null
    param.name ? api = `https://fakestoreapi.com/products/category/${param.name}` : api = 'https://fakestoreapi.com/products'

    useEffect(() => {
        fetch(api).
            then(res => res.json()).
            then((data) => {
                setItems(data)
            })
    }, [param, api])

    let viewItem = (e)=> {
        navigate(`/item/${e.target.getAttribute('itemid')}`)
    }

    return (
        <div className='cards'>
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
    )
}

export default Category