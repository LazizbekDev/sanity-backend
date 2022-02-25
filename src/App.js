import React from 'react'
import { Route, Routes} from 'react-router-dom'
import './App.scss'

import { About, Footer, Header, Skills, Testimonials, Work } from './container'
import { Navbar } from './components'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/skills' component={Skills}/>
      </Routes>
      <Header />
      <About />
      <Skills />
      <Testimonials />
      <Work />
      <Footer />
    </div>
  )
}

export default App