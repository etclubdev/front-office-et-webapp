import { useEffect } from 'react';
import './HomePage.css';
import { Navbar } from '../../components/Navbar';
import { AboutUsSection } from '../../components/AboutUsSection';
import { Statistics } from '../../components/Statistics';
import { Departments } from '../../components/Departments';
import { GetInvolvedBanner } from '../../components/GetInvolvedBanner';
import { Characteristics } from '../../components/Characteristics';
import { Partners } from '../../components/Partners';
import { Footer } from '../../components/Footer';
import { Introduction } from '../../components/Introduction';
import { FAQ } from '../../components/FAQ';

// Hai dòng phía dưới dù không sử dụng nhưng nếu xóa đi thì phần Partner không render được...
// import { Departments } from '../../components/Departments';
// import { GetInvolvedBanner } from '../../components/GetInvolvedBanner';

export const HomePage = () => {
  return (
    <div className="homepage">
      <Navbar />
      <Introduction />
      <div className="homepage-section">
        <AboutUsSection />
      </div>
      <Characteristics />
      <div className="homepage-section">
        <Statistics />
        <Partners />
        <FAQ />
      </div>
      <Footer />
    </div>
  );
};  