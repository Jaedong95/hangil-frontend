import React from 'react';
import './PageHeader.css';

export default function PageHeader({ title, subtitle }) {
  return (
    <div className="page-header">
      <div className="container page-header-inner">
        <h1 className="page-header-title">{title}</h1>
        {subtitle && <p className="page-header-sub">{subtitle}</p>}
      </div>
    </div>
  );
}
