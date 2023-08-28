import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import Contact from "./pages/Contact/Contact"
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart"
import About from './pages/About/About'
import TodoApp from './pages/TodoApp/TodoApp'
import Navbar from './components/Navbar';
import PhotosAPI from "./pages/PhotosAPI/PhotosAPI"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <div>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/about' element={<About/>} />
          <Route exact path='/contact' element={<Contact/>} />
          <Route exact path='/todo-app' element={<TodoApp/>} />
          <Route exact path='/shopping-cart' element={<ShoppingCart/>} />
          <Route exact path='/photos-api' element={<PhotosAPI/>} />
        </Routes>
        <Footer/>
      </div>
    </>
  )
}

export default App
