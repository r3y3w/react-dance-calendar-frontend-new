import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Learn2Dance from './pages/Learn2dance.js'
import AdminPage from './pages/AdminPage'
import About from './pages/About'


function App() {
  return (
    <BrowserRouter >
    <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/learn2dance' element={<Learn2Dance />} />
          <Route path='/footer' element={<Footer />} />
          <Route path='/header' element={<Header />} />
          <Route path='/admin-page' element={<AdminPage />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<h2>Page Not Found</h2>} />
        </Routes>
    <Footer />
    </BrowserRouter >
  );
}

export default App;
