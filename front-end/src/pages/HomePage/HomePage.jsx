import './HomePage.css';
import { Navbar } from '../../components/Navbar';
import { AboutUsSection } from '../../components/AboutUsSection';
import { Statistics } from '../../components/Statistics';
import { Characteristics } from '../../components/Characteristics';
import { Partners } from '../../components/Partners';
import { Introduction } from '../../components/Introduction';
import { FAQ } from '../../components/FAQ';
import { DynamicBlur } from '../../components/DynamicBlur';
import { useHomePageData } from '../../utils/useHomePageData';

export const HomePage = () => {
  const {
    banners,
    partners,
    faqs,
    achievements,
    isLoading,
    isError,
  } = useHomePageData();

  return (
    <div className="homepage">
      <Navbar />
      <DynamicBlur parentClassName="root-container" />
      <Introduction banners={banners} />

      <div className="homepage-section">
        <AboutUsSection />
      </div>
      <Characteristics />
      <div className="homepage-section">

        <div className="division-bar-container">
          <div className="division-bar"></div>
        </div>
        <Statistics statistics={achievements} />

        <Partners partners={partners?.experts} companions={partners?.businesses} />

        <div className="division-bar-container">
          <div className="division-bar"></div>
        </div>
        <FAQ questions={faqs} />
      </div>
    </div>
  );
};