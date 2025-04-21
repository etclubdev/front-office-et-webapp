import './HorizontalNews.css';
import getRelativeTime from '../../utils/getRelativeTimeUtil';
import getFirstSentence from '../../utils/getFirstSentenceUtil';
import clockIcon from '../../mocks/images/etnews/clock-icon.svg';

export const HorizontalNews = ({ news, isETNews }) => {
    const handleClick = () => {
        console.log(news.etnews_id);
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
                    <div className="tag-name"><p>ET NEWS</p></div>
                    <div className="tag-square" id="tag-square-2"></div>
                </div>
            </div>
            <div className="horizontal-news-container">
                <p className="horizontal-news-title">{news?.title}</p>
                <p className="horizontal-news-content">{getFirstSentence(news?.meta_description)}</p>
                <div className="horizontal-news-time">
                    <img src={clockIcon} alt="clock icon" className="clock-icon" />
                    <p className="relative-time">{getRelativeTime(news?.created_on)}</p>
                </div>
            </div>
        </div>
    )
}