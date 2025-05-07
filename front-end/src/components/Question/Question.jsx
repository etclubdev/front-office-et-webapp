import React, { useState, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import './Question.css';
import plusIcon from '../../mocks/images/FAQs/plus.png';
import minusIcon from '../../mocks/images/FAQs/minus.png';


export const Question = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);
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
                    <p className="answer-content">{item.answer}</p>
                </div>
            </CSSTransition>
        </div>
    );
};
