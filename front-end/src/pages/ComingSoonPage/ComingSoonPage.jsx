import React from 'react';
import "./ComingSoonPage.css";
import { Navbar } from '../../components/Navbar';
import { timeManagementImg } from '../../assets/images/coming-soon';
import { PageTitle } from '../../components/PageTitle';
import { DynamicBlur } from '../../components/DynamicBlur';

export const ComingSoonPage = () => {
  return (
    <div className="coming-soon-page">
      <Navbar />
      <DynamicBlur parentClassName="root-container" />
      <div className="coming-soon-section">
        <img src={timeManagementImg} alt="" />
        <PageTitle>COMING SOON!</PageTitle>
      </div>
    </div>
  )
}
