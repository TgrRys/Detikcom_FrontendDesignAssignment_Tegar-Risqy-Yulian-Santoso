import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import './App.css'
import { Route, Routes } from "react-router-dom";
import { Home } from './pages/Home';
import { Registration } from './pages/Registration';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
    <Footer />
    </>
  )
}

export default App
