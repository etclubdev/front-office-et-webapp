import React, { useState, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import './Question.css';
import plusIcon from '../../mocks/images/FAQs/plus.png';
import minusIcon from '../../mocks/images/FAQs/minus.png';


export const Question = ({ item }) => {
    const [isOpen, setIsOpen] = useState(true);
    const [toggleIcon, setIcon] = useState(minusIcon);

    const questionRef = useRef(null);

    const toggleAnswer = () => {
        setIsOpen(!isOpen); 
        if(!isOpen){
            setIcon(minusIcon);
        }
        else{
            setIcon(plusIcon);
        }
    };

    return (
        <div
            id={item.id}
            className="question-container"
        >
            <div className={`question ${isOpen ? 'active' : ''}`}onClick={toggleAnswer} ref={questionRef}>
                <p className="question-content">{item.question}</p>
                <img className="question-button" src={toggleIcon} alt="plus" />
            </div>
            <CSSTransition
                in={isOpen}
                timeout={400}
                classNames="answer"
                unmountOnExit
            >
                <div className="answer">
                    {typeof item.answer === 'object' ? (
                        <>
                            <p className="answer-content">{item.answer[0]}</p>
                            <ul className="answer-content">
                                {item.answer.slice(1).map((content, index) => (
                                    <li key={index}>{content}</li>
                                ))}
                            </ul>
                        </>
                    ) : (
                        <p className="answer-content">{item.answer}</p>
                    )}
                </div>
            </CSSTransition>
        </div>
    );
};
