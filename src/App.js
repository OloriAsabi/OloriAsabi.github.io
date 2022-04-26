
import React from 'react'

import { About, Footer, Header, Skills, Testimonials, Work} from './container'
import { Navbar, ThemeModeToggler } from './components'
import './App.scss'
import { VStack } from "@chakra-ui/react";

 const App = () => {


  return (
    <div>
      <Navbar />
      <Header/>
      <About/>
      <Work/>
      <Skills/>
      <Testimonials/>
      <Footer/>   
    </div>
  )
}
export default App