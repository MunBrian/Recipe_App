import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import Cuisine from './Cuisine'

const Pages = () => {
  return (
    <Routes>
      <Route path='/' exact element={<Home />} />
      <Route path='/cuisine/:type' element={<Cuisine />} />
    </Routes>
  )
}


export default Pages