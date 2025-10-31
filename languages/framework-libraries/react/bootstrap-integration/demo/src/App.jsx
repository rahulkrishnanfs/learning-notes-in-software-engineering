import ButtonApp from "./components/ButtonApp1"
import HomeCarousel from "./components/HomeCarousel"
import UseStateUsage from "./components/Hooks/UseStateUsage"
import Header from "./components/Header"
import Home from "./pages/Home"
import Aboutus from "./pages/Aboutus"
import Blog from "./pages/Blog"
import Contactus from "./pages/Contactus"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      {/* <p>1. Button Usage</p><ButtonApp/> */}
      {/* <p>2. Usage of useState</p> <UseStateUsage/> */}
      {/* <p>3.Importing Nav BAr</p>  */}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contactus" element={<Contactus />} />
        </Routes>
      </BrowserRouter>
      {/* <HomeCarousel/> */}

    </>
  )
}

export default App
