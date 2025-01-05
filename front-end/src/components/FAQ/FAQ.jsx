import './FAQ.css';
import { FAQ_TITLE } from '../../constants.js';
import { FAQs } from "../../mocks/data";  

const questions = FAQs.questions;

export const FAQ = () => {
    return (
        <div className="FAQ-section">
            <div className='division-bar'></div>
            <div className="FAQ-title">{FAQ_TITLE}</div>
            {questions.map(questions => (
                      <div key={questions.id} className="FAQ-question">{questions.question}</div>
                  ))}
        </div>
    )

}