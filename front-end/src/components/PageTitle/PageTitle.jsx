import React from 'react';
import './PageTitle.css';

export const PageTitle = ({ children, fontSize, padding }) => (
  <p className="page-title" style={{ fontSize, padding }}>{children}</p>
);
