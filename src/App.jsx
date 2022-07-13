import { Home } from './Views/Home.jsx';
import { Contact } from './Views/Contact.jsx';
import { SharingCode } from './Views/SharingCode.jsx';
import { GettingHelp } from './Views/GettingHelp.jsx';
import { Staff } from './Views/Staff.jsx';
import { FAQ } from './Views/FAQ.jsx';
import { Resources } from './Views/Resources.jsx';
import { Header } from './Components/Header.jsx';
import { Footer } from './Components/Footer.jsx';
import { HashRouter, Routes, Route } from 'react-router-dom';

function App(props = {}) {
  return (
    <>
      <HashRouter>
        {props.children}
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sharing-code" element={<SharingCode />} />
          <Route path="/getting-help" element={<GettingHelp />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
