import React, { lazy,Suspense} from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Loader from './components/Loader.tsx'





const Home = lazy(()=>import ("./pages/Home.tsx" ))
const Search = lazy (()=>import ( "./pages/Search.tsx"))
const Cart = lazy (()=>import ("./pages/Cart.tsx"))
const Dashboard = lazy(()=>import ('./pages/admin/Dashboard.tsx'))



const App = () => {
  return (
    <Router>
      <Suspense fallback={ <Loader/>}>
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<Search />} path='/search' />
          <Route element={<Cart />} path='/cart' />
              <Route path="/admin/dashboard" element={<Dashboard/>} />
        </Routes>
        </Suspense>
   </Router>
  )
}

export default App
