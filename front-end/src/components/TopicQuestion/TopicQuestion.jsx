import './TopicQuestion.css';
import Question from '../Question';

export const TopicQuestion = ({ topicQuestion }) => {
    
    return (
        <div className="topic-question">
            <div className="topic-title-container">
                <div className="topic-title-division"></div>
                <p className="topic-title">{topicQuestion[0].topic}</p>
                <div className="topic-title-division"></div>
            </div>
            <>
                {
                    topicQuestion.map(item => <Question item={item} />)
                }
            </>
        </div>
    )
};
