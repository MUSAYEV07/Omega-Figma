import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Cta from './components/Cta/Cta'
import Features from './components/Features/Features'
import Content from './components/Content/Content'
import Blog from './components/Blog/Blog'
import Pricing from './components/Pricing/Pricing'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Header/>
      <Hero/>
      <About/>
      <Cta/>
      <Features/>
      <Content/>
      <Blog/>
      <Pricing/>
      <Footer/>
    </>
  )
}

export default App