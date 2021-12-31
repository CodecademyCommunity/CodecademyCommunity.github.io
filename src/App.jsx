import { Home } from './Views/Home.jsx'
import { GettingHelp } from './Views/GettingHelp.jsx';
import { Header } from './Components/Header.jsx'
import { Footer } from './Components/Footer.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './assets/sass/app.scss';

function App() {
  return (
   <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/getting-help' element={<GettingHelp />} />
      </Routes>
      <Footer />
    </BrowserRouter>
   </>
  );
}

export default App;
