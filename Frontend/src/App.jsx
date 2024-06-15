import React from 'react'
import Navbar from "./Components/Navbar/Navbar"
import Footer from "./Components/Footer/Footer"
import Banner from './Components/Banner/Banner'
import FreeBook from './Components/FreeBook/FreeBook'
const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Banner />
      <FreeBook />
      <Footer />

    </React.Fragment>
  )
}

export default App
