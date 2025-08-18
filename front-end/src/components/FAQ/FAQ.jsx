import React, { useState } from 'react';
import './FAQ.css';
import { FAQ_TITLE } from '../../constants.js';
import { CSSTransition } from 'react-transition-group';
import plusIcon from '../../mocks/images/FAQs/plus.png';
import minusIcon from '../../mocks/images/FAQs/minus.png';
import { PageTitle } from '../PageTitle/PageTitle.jsx';
import Skeleton from '@mui/material/Skeleton';
import { Heading } from '../Typography/Typography.jsx';
import { TopicQuestion } from '../TopicQuestion/TopicQuestion.jsx';

export const FAQ = ({ questions }) => {

    const [activeQuestion, setActiveQuestion] = useState([]);

    const toggleAnswer = (id) => {
        setActiveQuestion(prev => prev.includes(id) ? prev.filter(q => q !== id) : [...prev, id]);
    };

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
            {/* <div className="FAQ-items">
                {questions.map(question => (
                    <div key={question.faq_id} className="FAQ-item">
                        <div
                            className={`FAQ-question ${activeQuestion.includes(question.faq_id) ? 'active' : ''}`}
                            onClick={() => toggleAnswer(question.faq_id)}
                        >
                            <p className="question-content">{question.question}</p>
                            <img
                                className="question-button"
                                src={activeQuestion.includes(question.faq_id) ? minusIcon : plusIcon}
                                alt={activeQuestion.includes(question.faq_id) ? "Collapse" : "Expand"}
                            />
                        </div>

                        <CSSTransition
                            in={activeQuestion.includes(question.faq_id)}
                            timeout={400}
                            classNames="answer"
                            unmountOnExit
                        >
                            <div className="FAQ-answer">
                                {typeof question.answer === 'object' ? (
                                    <>
                                        <p className="answer-content">{question.answer[0]}</p>
                                        <ul className="answer-list">
                                            {question.answer.slice(1).map((content, index) => (
                                                <li key={index} className="answer-list-item">
                                                    {content}
                                                </li>
                                            ))}
                                        </ul>
                                    </>
                                ) : (
                                    <p className="answer-content">{question.answer}</p>
                                )}
                            </div>
                        </CSSTransition>
                    </div>
                ))}
            </div> */}
            <div className="more-info-container">
                <a href="/faqs" className="more-info-link">
                    Tìm hiểu thêm
                </a>
            </div>
        </div>
    );
};