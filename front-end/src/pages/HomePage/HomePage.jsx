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
      <Statistics statistics={achievements} />

      <div className="homepage-section">
        <Partners partners={partners?.experts} companions={partners?.businesses} />
        <FAQ questions={faqs} />
      </div>
      
    </div>
  );
};