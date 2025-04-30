import React from 'react'

import { CountDownTimer } from '../../../components/CountDownTimer';
import { SocialLinks } from '../../../components/SocialLinks';
import { Attribution } from '../../../components/Attribution';

import './TetCountDownTimerPage.css';
import { Navbar } from '../../../components/Navbar';
import Spacer from '../../../components/Spacer/Spacer';

export default function TetCountDownTimerPage() {
  return (
    <>
      <div className="container">
        <Navbar />
        <Spacer />

        <main>
          <h2>SẮP ĐẾN TẾT RỒI ET ƠI</h2>
          <CountDownTimer />
        </main>
        <SocialLinks />
        <Attribution />
      </div>
    </>
  );
}
