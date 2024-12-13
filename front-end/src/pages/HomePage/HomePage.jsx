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



export const HomePage = () => {  

  const createStar = () => {  
    const star = document.createElement('div');  
    const size = Math.random() * 0.4; // Kích thước ngôi sao  
    const left = Math.random() * 100; // Vị trí ngang  
    const top = Math.random() * 600; // Vị trí dọc  
    const duration = Math.random() * 2 + 1; // Thay đổi thời gian chuyển động nhấp nháy  

    star.style.width = `${size}vw`;  
    star.style.height = `${size}vw`;  
    star.style.left = `${left}vw`;  
    star.style.top = `${top}vh`;  
    star.style.animationDuration = `${duration}s`;  
    star.className = 'star';  

    document.querySelector('.homepage-section').appendChild(star);  
};  

  useEffect(() => {  
      for (let i = 0; i < 100; i++) {  
          createStar();  
      }  
  }, []); 

  return (  
    <div className="homepage-section">
      <Navbar/>
      <Introduction/>
      <div className="homepage__container">
        <AboutUsSection/>
        <Characteristics/>
        <Statistics/>
        <Departments/>
      </div>
      <GetInvolvedBanner/>       
      <div className="homepage__container">
        <Partners/>
      </div>
      <Footer/>
    </div>   
  );  
};  
