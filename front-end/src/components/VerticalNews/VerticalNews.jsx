import React from 'react';
import './VerticalNews.css';
import getRelativeTime from '../../utils/getRelativeTimeUtil';
import { trimText } from '../../utils/trimTextUtil';
import clockIcon from '../../mocks/images/etnews/clock-icon.svg';
import { useNavigate } from 'react-router-dom';
import { Heading, Paragraph } from '../Typography/Typography';

export const VerticalNews = ({ news, isETNews }) => {
    const navigate = useNavigate();

    if (news && !news.visible) return;

    const handleClick = () => {
        const id = isETNews ? news.etnews_id : news.blog_id;
        navigate(`/${isETNews ? 'et-news' : 'et-blog'}/${id}/`);
    }
    return (
        <div className="vertical-news" onClick={handleClick}>
            <div className="vertical-news-img-container">
                <img
                    className="vertical-news-img"
                    src={news?.thumbnail_image_url}
                    alt={news?.title || "news image"}
                />
                <div className="et-news-tag">
                    <div className="tag-square" id="tag-square-1"></div>
                    <div className="tag-name"><p>{isETNews ? 'ET NEWS' : "ET BLOG"}</p></div>
                    <div className="tag-square" id="tag-square-2"></div>
                </div>
            </div>
            <div className="vertical-news-container">
                <Heading level={3} className="vertical-news-title">{trimText(news?.title, 50)}</Heading>
                <p className="vertical-news-content">{trimText(news?.meta_description, 90)}</p>
                <div className="vertical-news-time">
                    <img src={clockIcon} alt="clock icon" className="clock-icon" />
                    <p className="relative-time">{getRelativeTime(news?.created_on)}</p>
                </div>
            </div>
        </div>
    )
}