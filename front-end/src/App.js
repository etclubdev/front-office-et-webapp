import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { HomePage } from './pages/HomePage';
import  TetCountDownTimerPage  from './pages/EventPages/TetCountDownTimerPage/TetCountDownTimerPage';
import SearchPage from './pages/SearchPage';
import { PostDetailsPage } from './pages/PostDetailsPage';
import { ETNewsPage } from './pages/ETNewsPage';
import { ETBlogPage } from './pages/ETBlogPage';
import { ActivitiesPage } from './pages/ActivitiesPage';
import { FAQsPage } from './pages/FAQsPage';
import { IntroductionPage } from './pages/IntroductionPage';
import { HRStructurePage } from './pages/HRStructurePage/HRStructurePage';

import { DynamicBlur } from './components/DynamicBlur';
import { DynamicStars } from './components/DynamicStars';

import { useLocation, matchPath } from 'react-router-dom';

import './App.css';

function App() {
  const location = useLocation();

  const isDetailPost =
    matchPath("/et-blog/:id", location.pathname) ||
    matchPath("/et-news/:id", location.pathname) ||
    matchPath("/activities/:id", location.pathname);

  const isNotDetailPosts = !isDetailPost;

  return (
    <div className="root-container">
      {
        isNotDetailPosts && <>
          <DynamicStars parentClassName="root-container" />
          <DynamicBlur parentClassName="root-container" />
        </>
      }
      <Routes>
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
      </Routes>
    </div>
  );
}

export default App;