import './App.css'
import About from './pages/About'
import Home from './pages/Home'
import Search from './pages/Search'
import Navbar from './components/Navbar'
import NotFound from './pages/NotFound'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div>
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/search" element={<Search />} /> 
                <Route path="*" element={<NotFound />}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
