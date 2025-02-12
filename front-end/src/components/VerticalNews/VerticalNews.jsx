import React from 'react';
import './VerticalNews.css';
import getRelativeTime from '../../utils/getRelativeTimeUtil';
import getFirstSentence from '../../utils/getFirstSentenceUtil';
import clockIcon from '../../mocks/images/etnews/clock-icon.svg';


export const VerticalNews = ({news}) => {
    return (
        <div className="vertical-news">
            <div className="vertical-news-img-container">
                <img className="vertical-news-img" src={require(`../../mocks${news.thumbnailImage}`)} alt={news.title} />
                <div className="et-news-tag">
                    <div className="tag-square" id="tag-square-1"></div>
                    <div className="tag-name"><p>ET NEWS</p></div>
                    <div className="tag-square" id="tag-square-2"></div>
                </div>
            </div>
            <div className="vertical-news-container">
                <p className="vertical-news-title">{news.title}</p>
                <p className="vertical-news-content">{getFirstSentence(news.content)}</p>
                <div className="vertical-news-time">
                    <img src={clockIcon}  alt="clock icon" className="clock-icon" />
                    <p className="relative-time">{getRelativeTime(news.createdDate)}</p>
                </div>
            </div>
        </div>
    )
}