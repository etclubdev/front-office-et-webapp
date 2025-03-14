import './ETNewsPage.css';
// import { NavbarV2 } from '../../components/NavbarV2';
// import { Footer } from '../../components/Footer';
import { HorizontalNews } from '../../components/HorizontalNews';
import { VerticalNews } from '../../components/VerticalNews';
import { ETNewsSlider } from '../../components/ETNewsSlider';

import { getAllNews } from '../../api/etNews.service';
import { useEffect, useState } from 'react';

export const ETNewsPage = () => {
    const [news, setNews] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const data = await getAllNews();
            setNews(data);
        }
        fetchData();
    }, [])
    

    return (
        <div className="etnews-page">
            {/* <NavbarV2 /> */}
            <div className="et-news-section">
                <div className="et-news-highlight">
                    <div className="highlight-title">Nổi bật</div>
                    <div className="highlight-news">
                        <div id="highlight-news-1">
                            <VerticalNews news={news?.latestNews?.[0]} />
                        </div>
                        <div id="highlight-news-2">
                            {
                                news?.latestNews?.map((item, index) => {
                                    if (index !== 0)
                                        return (
                                            <HorizontalNews key={'highlight-news-' + index} news={item} />
                                        )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="et-news-categories">
                    {
                        Object.entries(news?.groupedNews || {}).map(([category, newsList], index) => {
                            if (newsList?.length > 0){
                                return (
                                    <ETNewsSlider 
                                        key={`news-list` + index}
                                        newsList={newsList}
                                        title={category}
                                        categoryid={`news-list` + index}
                                    />
                                )
                            }
                            
                        })
                    }
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    )
}