import './Banner.css';  
import { bannerData } from "../../mocks/data";

const banners = bannerData.banners;

export const Banner = () => {  

    return (  
        <div className="banner-section">  
            <div className="banner-list">  
                <div className="banner-list-previous"></div>
                {  
                    banners.map((banner, index) =>   
                        <img key={index} id={`banner-${index}`} className={`banner`} src={require(`../../mocks${banner.image}`)} alt={banner.title} />  
                    )  
                }  
                <div className="banner-list-next"></div>
            </div>  
        </div>
    );  
}  

