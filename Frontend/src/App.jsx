import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Courses from './Pages/Courses/Courses'
import DefaultLayout from './Layout/DefaultLayout'
const App = () => {
  return (
    <>

      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/courses' element={<Courses />} />
        </Route>
      </Routes>

    </>
  )
}

export default App
