import ButtonApp from "./components/ButtonApp1"
import HomeCarousel from "./components/HomeCarousel"
import UseStateUsage from "./components/Hooks/UseStateUsage"
import Header from "./components/Header"
import Home from "./pages/Home"
import Aboutus from "./pages/Aboutus"
import Blog from "./pages/Blog"
import Contactus from "./pages/Contactus"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductDetails from "./pages/ProductDetails"

function App() {

  const products = [
    {
      id:1,
      productName:"Product 1",
      productPrice:100,
      productDescription:"This is the description of the product 1",
      productImage:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/7/l/0/z10x-5g-i2404-iqoo-original-imahbngzhft7qyux.jpeg?q=70",
      productCategory:"Category 1",
      productStock:100,
      productRating:4.5,
      productReviews:100,
      productSold:100,
    }, 
    { 
      id:2,
      productName:"Product 2",
      productPrice:200,
      productDescription:"This is the description of the product 2",
      productImage:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/l/x/b/z10r-5g-i2410-iqoo-original-imahehzhggkg3p5j.jpeg?q=70",
      productCategory:"Category 2",
      productStock:200,
      productRating:4.5,
      productReviews:200,
      productSold:200,
    },
    {
      id:3,
      productName:"Product 3",
      productPrice:300,
      productDescription:"This is the description of the product 3",
      productImage:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/s/u/8/z10x-5g-i2404-iqoo-original-imahbngms6vtzc9d.jpeg?q=70",
      productCategory:"Category 3",
      productStock:300,
      productRating:4.5,
      productReviews:300,
      productSold:300,
    },
    {
      id:4,
      productName:"Product 4",
      productPrice:400,
      productDescription:"This is the description of the product 4",
      productImage:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/v/m/x/-original-imah7jspd8dcxfut.jpeg?q=70",
      productCategory:"Category 4",
      productStock:400,
      productRating:4.5,
      productReviews:400,
      productSold:400,
    },
    {
      id:5,
      productName:"Product 5",
      productPrice:500,
      productDescription:"This is the description of the product 5",
      productImage:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/x/k/r/z10r-5g-i2410-iqoo-original-imahehzhhxvc9xgw.jpeg?q=70",
      productCategory:"Category 5",
      productStock:500,
      productRating:4.5,
      productReviews:500,
      productSold:500,
    }
  ]

  return (
    <>
      {/* <p>1. Button Usage</p><ButtonApp/> */}
      {/* <p>2. Usage of useState</p> <UseStateUsage/> */}
      {/* <p>3.Importing Nav BAr</p>  */}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home products = {products} y = {""}/>} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contactus" element={<Contactus />} /> 
          <Route path="/product/:id" element={<ProductDetails products={products} />} />
        </Routes>
      </BrowserRouter>
      {/* <HomeCarousel/> */}

    </>
  )
}

export default App
