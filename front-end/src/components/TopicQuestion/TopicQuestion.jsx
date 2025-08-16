import './TopicQuestion.css';
import Question from '../Question';

export const TopicQuestion = ({ topicQuestion, title }) => {
    return (
        <div className="topic-question">
            <div className="topic-title-container">
                <div className="topic-title-division"></div>
                <p className="topic-title">{title}</p>
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
