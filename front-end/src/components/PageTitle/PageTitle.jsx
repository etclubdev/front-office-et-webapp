import React from 'react';
import './PageTitle.css';

export const PageTitle = ({ children, fontSize }) => (
  <p className="page-title" style={{ fontSize }}>{children}</p>
);
