import './Banner.css';  
import { useState } from 'react';    
import { banner112022, banner042023, banner112023 , banner102024 } from '../../assets/banners';

const banners = [banner102024, banner112023, banner042023, banner112022];  

export const Banner = () => {  

    return (  
        <div className="banner-section">  
            <div className="banner-list">  
                <div className="banner-list__previous"></div>
                {  
                    banners.map((banner, index) =>   
                        <img key={index} id={`banner-${index}`} className={`banner`} src={banner} alt="" />  
                    )  
                }  
                <div className="banner-list__next"></div>
            </div>  
        </div>
    );  
}  

