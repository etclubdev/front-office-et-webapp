import './FAQsPage.css';

import { FAQsQuestion } from '../../mocks/data';
import Question from '../../components/Question';
console.log(FAQsQuestion);

const aboutETFAQs = FAQsQuestion['about-et'];


export const FAQsPage = () => {
    return (
        <div className="faqs-page">
            {
                aboutETFAQs.map(item => <Question item={item}/>)
            }
        </div>
    )
}