import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './pages/Home';
import MapsPage from './pages/maps/MapPage';
import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
  return (
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/maps' element={<MapsPage />} />
        </Routes>
      <Footer/>
      </BrowserRouter>
  );
}