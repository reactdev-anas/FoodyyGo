import React, { lazy, Suspense, } from 'react'
import './App.css'
import Page from './components/landingPage/Page'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import ProtectedRoute from './components/modal/ProtectedRoute'
const Dining = lazy(()=> import('./components/routes/Dining'))
const OrderOnline = lazy(()=> import('./components/routes/OrderOnline'))
const NightClubs = lazy(()=> import('./components/routes/NightClubs'))
const DishDetail = lazy(()=> import('./components/routes/DishDetail'))
const DiningDishDetail = lazy(()=> import('./components/routes/DiningDishDetail'))
const BookMark = lazy(()=>import('./components/routes/BookMark'))
const Cart = lazy(()=> import('./components/routes/Cart'))
const CheckOut = lazy(()=> import('./components/routes/CheckOut'))
const ReservedRestaurant = lazy(()=> import('./components/routes/ReservedRestaurant'))
const NightClubDetail = lazy(()=> import('./components/routes/NightClubDetail'))
const SideBar = lazy(()=> import('./components/navBar/SideBar'))
const MyOrder = lazy(()=> import('./components/routes/MyOrder'))


const App = () => {

  return (
    <>
      
      <Router>
        <Suspense fallback={<div className='w-screen min-h-screen flex justify-center items-center text-2xl font-semibold'>Loading...</div>}>
      <SideBar/>
        <Routes>
          <Route path='/' element={<Page />} />
          <Route path='/dining' element={ <ProtectedRoute><Dining /></ProtectedRoute>} />
          <Route path='/order-online' element={ <ProtectedRoute><OrderOnline/></ProtectedRoute>} />
          <Route path='/night-clubs' element={<ProtectedRoute><NightClubs /></ProtectedRoute>} />
          <Route path='/dishDetail/:id' element={<ProtectedRoute><DishDetail /></ProtectedRoute>} />
          <Route path='/diningDishDetail/:id' element={<ProtectedRoute><DiningDishDetail/></ProtectedRoute>} />
          <Route path='/nightClubDetail/:id' element={<ProtectedRoute><NightClubDetail/></ProtectedRoute>}/>
          <Route path='/bookMark' element={<ProtectedRoute><BookMark/></ProtectedRoute>}/>
          <Route path='/cart' element={<ProtectedRoute><Cart/></ProtectedRoute>}/>
          <Route path='/checkOut' element={<ProtectedRoute><CheckOut/></ProtectedRoute>}/>
          <Route path='/reservedTable' element={<ProtectedRoute><ReservedRestaurant/></ProtectedRoute>}/>
           <Route path='/myOrders' element={<ProtectedRoute><MyOrder/></ProtectedRoute>}/>
        </Routes>
        </Suspense>
      </Router>

    </>
  )
}

export default App