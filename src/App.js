import React from 'react'
import { Route, Routes} from 'react-router-dom'
import './App.scss'

import {About, Footer, Header, Messages, Skills, Testimonials, Work} from './container'
import { Navbar } from './components'

const Elements = () => {
    return (
        <div className='app'>
            <Navbar />
            <Header />
            <About />
            <Work />
            <Skills />
            <Testimonials />
            <Footer />
        </div>
    )
}

const App = () => {
  return (
      <Routes>
          <Route exact path={'/'} element={<Elements />}/>
          <Route exact path='/messages' element={<Messages />} />
          <Route path={'*'} element={'No route look like this'} />
      </Routes>
  )
}

export default App