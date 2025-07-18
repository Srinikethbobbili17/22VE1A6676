import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import Home from './pages/Home';
import AllLinks from './pages/AllLinks';
import { getOriginalUrl } from './utils/storage';

const Redirector = () => {
  const { id } = useParams();
  const originalUrl = getOriginalUrl(id);

  React.useEffect(() => {
    if (originalUrl) window.location.href = originalUrl;
  }, [originalUrl]);

  return <div className="container">Redirecting...</div>;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/links" element={<AllLinks />} />
        <Route path="/:id" element={<Redirector />} />
      </Routes>
    </Router>
  );
}

export default App;
