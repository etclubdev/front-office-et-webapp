import './HorizontalNews.css';
import getRelativeTime from '../../utils/getRelativeTimeUtil';
import getFirstSentence from '../../utils/getFirstSentenceUtil';
import clockIcon from '../../mocks/images/etnews/clock-icon.svg';

export const HorizontalNews = ({ news }) => {

    return (
        <div className="horizontal-news">
             <div className="vertical-news-img-container">
                <img className="horizontal-news-img" src={require(`../../mocks${news.thumbnailImage}`)} alt={news.title} />
                <div className="et-news-tag">
                    <div className="tag-square" id="tag-square-1"></div>
                    <div className="tag-name"><p>ET NEWS</p></div>
                    <div className="tag-square" id="tag-square-2"></div>
                </div>
            </div>
            <div className="horizontal-news-container">
                <p className="horizontal-news-title">{news.title}</p>
                <p className="horizontal-news-content">{getFirstSentence(news.content)}</p>
                <div className="horizontal-news-time">
                    <img src={clockIcon} alt="clock icon" className="clock-icon" />
                    <p className="relative-time">{getRelativeTime(news.createdDate)}</p>
                </div>
            </div>
        </div>
    )
}