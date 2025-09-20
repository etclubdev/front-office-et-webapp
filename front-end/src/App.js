import './App.css';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useEffect } from 'react'
import { HomePage } from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import { PostDetailsPage } from './pages/PostDetailsPage';
import { ETNewsPage } from './pages/ETNewsPage';
import { ETBlogPage } from './pages/ETBlogPage';
import { ActivitiesPage } from './pages/ActivitiesPage';
import { FAQsPage } from './pages/FAQsPage';
import { IntroductionPage } from './pages/IntroductionPage';
import { HRStructurePage } from './pages/HRStructurePage/HRStructurePage';
import { ComingSoonPage } from './pages/ComingSoonPage';
import { useLocation } from 'react-router-dom';
// import { useLocation, matchPath } from 'react-router-dom';
import { Footer } from './components/Footer';
// import  TetCountDownTimerPage  from './pages/EventPages/TetCountDownTimerPage/TetCountDownTimerPage';

function App() {
  const location = useLocation();

  // const isDetailPost =
  //   matchPath("/et-blog/:id", location.pathname) ||
  //   matchPath("/et-news/:id", location.pathname) ||
  //   matchPath("/activities/:id", location.pathname);

  // const isNotDetailPosts = !isDetailPost;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="root-container">
      {/* {
        isNotDetailPosts && <>
          <DynamicBlur parentClassName="root-container" />
        </>
      } */}
      <Routes>
        <Route path="*" element={<Navigate to="/" replace />} />

        <Route path="/search" element={<SearchPage />} /> 
        <Route path="/activities/:id" element={<PostDetailsPage />} />
        <Route path="/et-news/:id" element={<PostDetailsPage />} />
        <Route path="/et-blog/:id" element={<PostDetailsPage />} />
        <Route path="/et-news" element={<ETNewsPage />} />
        <Route path="/et-blog" element={<ETBlogPage />} />
        <Route path="/activities" element={<ActivitiesPage />} />
        <Route path="/faqs" element={<FAQsPage />} />
        <Route path="/introduction" element={<IntroductionPage />} />
        <Route path="/hr-structure" element={<HRStructurePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/collaborator-seeking" element={<ComingSoonPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;