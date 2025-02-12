import './ETNewsPage.css';
// import { NavbarV2 } from '../../components/NavbarV2';
// import { Footer } from '../../components/Footer';

import { HorizontalNews } from '../../components/HorizontalNews';
import { VerticalNews } from '../../components/VerticalNews';
import { ETNewsSlider } from '../../components/ETNewsSlider';

import getEarliestItems from '../../utils/getEarliestItems';
import filterEtNews from '../../utils/filterEtNews';

import { etNews } from '../../mocks/data';

const hightlightNews = getEarliestItems(etNews, 4);
const filteredNews = filterEtNews(etNews);

export const ETNewsPage = () => {
    return (
        <div className="etnews-page">
            {/* <NavbarV2 /> */}
            <div className="et-news-section">
                <div className="et-news-highlight">
                    <div className="highlight-title">Nổi bật</div>
                    <div className="highlight-news">
                        <div id="highlight-news-1">
                            <VerticalNews news={hightlightNews[0]} />
                        </div>
                        <div id="highlight-news-2">
                            {
                                hightlightNews.map((item, index) => {
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
                        filteredNews.map((item, index) => {
                            return (
                                <ETNewsSlider key={'et-news-slider-' + index} newsList={item} categoryid={item.id} />
                            )
                        })
                    }
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    )
}