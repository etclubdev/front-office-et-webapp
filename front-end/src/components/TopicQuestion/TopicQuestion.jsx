import './TopicQuestion.css';
import Question from '../Question';
import { Heading } from '../Typography/Typography';

export const TopicQuestion = ({ topicQuestion, title }) => {
    return (
        <div className="topic-question">
            <div className="topic-title-container">
                <div className="topic-title-division"></div>
                <Heading level={2} className="topic-title">{title}</Heading>
                <div className="topic-title-division"></div>
            </div>
            <>
                {
                    topicQuestion?.map(item => (
                        <Question key={item.faq_id} item={item} />
                    ))
                }
            </>
        </div>
    )
};
