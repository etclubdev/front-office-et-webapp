import './FAQsPage.css';

import { FAQsQuestion } from '../../mocks/data';
import TopicQuestion from '../../components/TopicQuestion';

const { "about-et": aboutET, "about-activities": aboutActivities, "about-being-a-eter": aboutBeingAEter, others } = FAQsQuestion

export const FAQsPage = () => {
    return (
        <div className="faqs-page">
            <TopicQuestion topicQuestion={aboutET}/>
            <TopicQuestion topicQuestion={aboutActivities}/>
            <TopicQuestion topicQuestion={aboutBeingAEter}/>
            <TopicQuestion topicQuestion={others}/>
        </div>
    )
}