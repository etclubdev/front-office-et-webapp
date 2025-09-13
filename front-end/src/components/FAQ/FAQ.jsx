import './FAQ.css';
import { FAQ_TITLE } from '../../constants.js';
import Skeleton from '@mui/material/Skeleton';
import { Heading } from '../Typography/Typography.jsx';
import { TopicQuestion } from '../TopicQuestion/TopicQuestion.jsx';

export const FAQ = ({ questions }) => {

    if (!questions || questions.length === 0) {
        return (
            <div className="skeleton-alt-faqs">
                <Heading level={1} className="faqs-title">{FAQ_TITLE}</Heading>
                <Skeleton variant="rectangular" width="100%" height="21vw" />
                <div className="more-info-container">
                    <a href="/faqs" className="more-info-link">
                        Tìm hiểu thêm
                    </a>
                </div>
            </div>
        )
    }

    return (
        <div className="FAQ-section">
            <Heading level={1} className="faqs-title">{FAQ_TITLE}</Heading>
            <TopicQuestion topicQuestion={questions} />
            <div className="more-info-container">
                <a href="/faqs" className="more-info-link">
                    Tìm hiểu thêm
                </a>
            </div>
        </div>
    );
};