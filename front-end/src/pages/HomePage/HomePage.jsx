import { useEffect, useState } from 'react';
import './HomePage.css';
import { Navbar } from '../../components/Navbar';
import { AboutUsSection } from '../../components/AboutUsSection';
import { Statistics } from '../../components/Statistics';
import { Characteristics } from '../../components/Characteristics';
import { Partners } from '../../components/Partners';
import { Introduction } from '../../components/Introduction';
import { FAQ } from '../../components/FAQ';
import { getBanners } from '../../api/banners.service';
import { getPartners } from '../../api/partners.service';
import { getFAQs } from '../../api/faqs.service';
import { getAchievement } from '../../api/achievement.service';
import { DynamicBlur } from '../../components/DynamicBlur';

export const HomePage = () => {
  const [banners, setBanners] = useState([]);
  const [expertPartners, setExpertPartners] = useState([]);
  const [businessPartners, setBusinessPartners] = useState([]);
  const [faqData, setFaqData] = useState([]);
  const [statisticsData, setStatisticsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const bannersResponse = await getBanners();
        const bannersData = bannersResponse.data || [];

        const partnersResponse = await getPartners();
        const partnersData = partnersResponse.data || {};
        const experts = partnersData["Đối tác chuyên gia"] || [];
        const businesses = partnersData["Đối tác doanh nghiệp"] || [];

        const faqsResponse = await getFAQs();
        const faqsData = faqsResponse.data || {};
        const allFaqs = faqsData["ET Club"] || [];
        const selectedFaqs = allFaqs.filter(faq => faq.visible);

        const achievementResponse = await getAchievement();
        const achievementData = achievementResponse.data || [];
        const visibleAchievements = achievementData.filter(item => item.visible);

        setBanners(bannersData);
        setExpertPartners(experts);
        setBusinessPartners(businesses);
        setFaqData(selectedFaqs);
        setStatisticsData(visibleAchievements);

        console.log("Banners data:", bannersData);
        console.log("Partners data:", partnersData);
        console.log("Expert Partners:", experts);
        console.log("Business Partners:", businesses);
        console.log("Selected FAQs:", selectedFaqs);
        console.log("Statistics data:", visibleAchievements);
      } catch (err) {
        console.error("Lỗi khi gọi API:", err);
      }
    };

    fetchData();
  }, []);

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
        <Statistics statistics={statisticsData} />

        <Partners partners={expertPartners} companions={businessPartners} />

        <div className="division-bar-container">
          <div className="division-bar"></div>
        </div>
        <FAQ questions={faqData} />
      </div>
    </div>
  );
};