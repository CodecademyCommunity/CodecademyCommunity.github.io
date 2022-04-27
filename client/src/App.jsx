import { Home } from './Views/Home.jsx';
import { Contact } from './Views/Contact.jsx';
import { SharingCode } from './Views/SharingCode.jsx';
import { GettingHelp } from './Views/GettingHelp.jsx';
import { Staff } from './Views/Staff.jsx';
import { FAQ } from './Views/FAQ.jsx';
import { Countdown } from './Views/Countdown.jsx';
import { Header } from './Components/Header.jsx';
import { Footer } from './Components/Footer.jsx';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { io } from "socket.io-client";
import { useEffect, useState, useRef } from 'react';

function App() {
  const [memberCount, setMemberCount] = useState(null);
  const socket = useRef();

  useEffect(() => {
    socket.current = io();
    socket.current.on('discord data', (message) => {
      setMemberCount(message.memberCount);
    });
    return () => { socket.current?.disconnect(); };
  }, []);

  return (
    <>
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sharing-code" element={<SharingCode />} />
          <Route path="/getting-help" element={<GettingHelp />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/discord" element={<Countdown memberCount={memberCount} />} />
        </Routes>
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
