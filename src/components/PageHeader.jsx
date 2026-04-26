import React from 'react';
import './PageHeader.css';

export default function PageHeader({ title, subtitle, bgImage }) {
  return (
    <div
      className={`page-header${bgImage ? ' page-header--image' : ''}`}
      style={bgImage ? { '--bg-image': `url(${bgImage})` } : undefined}
    >
      {bgImage && <div className="page-header-overlay" />}
      <div className="container page-header-inner">
        <h1 className="page-header-title">{title}</h1>
        {subtitle && <p className="page-header-sub">{subtitle}</p>}
      </div>
    </div>
  );
}
