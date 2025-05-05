import React from 'react';
import "./ComingSoonPage.css";
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { timeManagementImg } from '../../assets/images/coming-soon';
import { PageTitle } from '../../components/PageTitle';

export const ComingSoonPage = () => {
  return (
    <div className="coming-soon-page">
        <Navbar />
        <div className="coming-soon-section">
            <img src={timeManagementImg} alt="" />
            <PageTitle>COMING SOON!</PageTitle>
        </div>
        <Footer />
    </div>
  )
}
