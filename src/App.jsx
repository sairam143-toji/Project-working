import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import HomeCarousel from './Components/pages/Home'
import ImageWithText from './Components/pages/ImageWithText'
import HeroBanner from './Components/pages/HeroBanner'
import AboutSection from './Components/pages/HeroBanner'
import Footer from './Components/pages/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      <HomeCarousel/>
      <ImageWithText/>
      <AboutSection/>
      <Footer/>
    </div>
  )
}

export default App
