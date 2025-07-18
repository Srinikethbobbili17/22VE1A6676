import React from 'react';
import { getAllUrls } from '../utils/storage';

function AllLinks() {
  const links = getAllUrls();

  return (
    <div className="container">
      <h2>All Shortened Links</h2>
      <div className="link-list">
        {Object.entries(links).map(([id, original]) => (
          <div key={id} className="link-item">
            <strong>{original}</strong><br/>
            <a href={window.location.origin + '/' + id} target="_blank" rel="noreferrer">
              {window.location.origin}/{id}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllLinks;
