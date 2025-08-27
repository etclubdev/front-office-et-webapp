import './HorizontalNews.css';
import getRelativeTime from '../../utils/getRelativeTimeUtil';
import { trimText } from '../../utils/trimTextUtil';
import clockIcon from '../../mocks/images/etnews/clock-icon.svg';
import { useNavigate } from 'react-router-dom';

export const HorizontalNews = ({ news, isETNews }) => {
    const isTablet = window.innerWidth >= 481 && window.innerWidth <= 1024;
    const navigate = useNavigate();

    if (news && !news.visible) return;

    const handleClick = () => {
        const id = isETNews ? news.etnews_id : news.blog_id;
        navigate(`/${isETNews ? 'et-news' : 'et-blog'}/${id}/`);
    }
    return (
        <div className="horizontal-news" onClick={handleClick}>
            <div className="horizontal-news-img-container">
                <img
                    className="horizontal-news-img"
                    src={news?.thumbnail_image_url}
                    alt={news?.title || "news image"}
                />
                <div className="et-news-tag">
                    <div className="tag-square" id="tag-square-1"></div>
                    <div className="tag-name"><p>{isETNews ? 'ET NEWS' : "ET BLOG"}</p></div>
                    <div className="tag-square" id="tag-square-2"></div>
                </div>
            </div>
            <div className="horizontal-news-container">
                <p className="horizontal-news-title">{isTablet ? trimText(news?.title, 25) : trimText(news?.title, 65)}</p>
                <p className="horizontal-news-content">{isTablet ? trimText(news?.meta_description, 40) : trimText(news?.meta_description, 70)}</p>
                <div className="horizontal-news-time">
                    <img src={clockIcon} alt="clock icon" className="clock-icon" />
                    <p className="relative-time">{getRelativeTime(news?.created_on)}</p>
                </div>
            </div>
        </div>
    )
}