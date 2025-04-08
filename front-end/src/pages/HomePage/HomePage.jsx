import { useEffect, useState } from 'react';
import './HomePage.css';
import { Navbar } from '../../components/Navbar';
import { AboutUsSection } from '../../components/AboutUsSection';
import { Statistics } from '../../components/Statistics';
import { Characteristics } from '../../components/Characteristics';
import { Partners } from '../../components/Partners';
import { Footer } from '../../components/Footer';
import { Introduction } from '../../components/Introduction';
import { FAQ } from '../../components/FAQ';
import { getBanners } from '../../api/banners.service';
import { getPartners } from '../../api/partners.service';
import { getFAQs } from '../../api/faqs.service';
import { getAchievement } from '../../api/achievement.service';

export const HomePage = () => {
  const [banners, setBanners] = useState([]);
  const [expertPartners, setExpertPartners] = useState([]);
  const [businessPartners, setBusinessPartners] = useState([]);
  const [faqData, setFaqData] = useState([]);
  const [statisticsData, setStatisticsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const bannersData = await getBanners();
        const partnersResponse = await getPartners();
        const experts = partnersResponse["Đối tác chuyên gia"] || [];
        const businesses = partnersResponse["Đối tác doanh nghiệp"] || [];
        const faqsResponse = await getFAQs();
        const allFaqs = [
          ...faqsResponse["aboutETClub"],
          ...faqsResponse["aboutActivities"],
          ...faqsResponse["aboutMembership"],
          ...faqsResponse["others"],
        ];
        const selectedFaqs = allFaqs.filter(faq =>
          ["FAQS001", "FAQS002", "FAQS013"].includes(faq.faq_id) && faq.visible
        );
        const achievementResponse = await getAchievement();
        const visibleAchievements = achievementResponse.filter(item => item.visible);

        setBanners(bannersData);
        setExpertPartners(experts);
        setBusinessPartners(businesses);
        setFaqData(selectedFaqs);
        setStatisticsData(visibleAchievements);

        console.log("Banners data:", bannersData);
        console.log("Partners data:", partnersResponse);
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
      <Introduction banners={banners} />


      <div className="homepage-section">
        <AboutUsSection />
      </div>
      <Characteristics />
      <div className="homepage-section">
        <Statistics statistics={statisticsData} />
        <Partners partners={expertPartners} companions={businessPartners} />
        <FAQ questions={faqData} />
      </div>
      <Footer />
    </div>
  );
};