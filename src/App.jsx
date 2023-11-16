import {Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './assets/Home'
import Category from './assets/Category'
import Item from './assets/Item'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />}>
        <Route path='category/:name' element={<Category />}></Route>
        <Route index element={<Category />}></Route>
      </Route>
      <Route path='item/:id' element={<Item />}></Route>
    </Routes>
    </>
  )
}

export default App
