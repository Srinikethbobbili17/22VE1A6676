import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { saveUrl } from '../utils/storage';

function Home() {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
  const id = saveUrl(url);
  setShortUrl(`${window.location.origin}/${id}`);
};


  return (
    <div className="container">
      <h2>Simple URL Shortener</h2>
      <input
        type="text"
        placeholder="Enter long URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button onClick={handleSubmit}>Shorten</button>

      {shortUrl && (
        <div className="link-item">
          Short URL: <a href={shortUrl} target="_blank" rel="noreferrer">{shortUrl}</a>
        </div>
      )}

      <button onClick={() => navigate('/links')}>View All Links</button>
    </div>
  );
}

export default Home;
