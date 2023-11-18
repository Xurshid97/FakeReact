import {Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './assets/Home'
import Item from './assets/Item'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />}>
      </Route>
      <Route path='item/:id' element={<Item />}></Route>
    </Routes>
    </>
  )
}

export default App
