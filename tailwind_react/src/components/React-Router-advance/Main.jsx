import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Navbar2 from './Navbar2';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import Product from './pages/Product';
import Men from './pages/Men';
import Women from './pages/Women';
import Kids from './pages/Kids';
import Footer from './Footer';


const Main = () => {
  return (
    <div>
      <Navbar />
      <Navbar2 />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetail />} />
        <Route path="/product" element={<Product />} > 
          <Route path="men" element={<Men />} />  {/* Nested Route */}
          <Route path="women" element={<Women />} />  {/* Nested Route */}
          <Route path="kids" element={<Kids />} />  {/* Nested Route */}
        </Route>
        
      </Routes>
      <Footer />
    </div>
  )
}

export default Main
