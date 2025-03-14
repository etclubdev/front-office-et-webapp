import './FAQsPage.css';
import { useEffect, useState } from 'react';
import { TopicQuestion } from '../../components/TopicQuestion';
import { PageTitle } from '../../components/PageTitle';
import { getAllFAQs } from '../../api/faq.service';

export const FAQsPage = () => {
    const [faqs, setFAQs] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const data = await getAllFAQs();
            setFAQs(data);
        }
        fetchData();
    }, [])
    
    return (
        <div className="faqs-page">
            <PageTitle>CÂU HỎI THƯỜNG GẶP</PageTitle>
            <TopicQuestion 
                topicQuestion={faqs.aboutETClub}
                title="Câu hỏi về ET Club"
            />
            <TopicQuestion 
                topicQuestion={faqs.aboutActivities}
                title="Câu hỏi về hoạt động và sự kiện"
            />
            <TopicQuestion 
                topicQuestion={faqs.aboutMembership}
                title="Câu hỏi về quy trình tham gia"
            />
            <TopicQuestion 
                topicQuestion={faqs.others}
                title="Câu hỏi khác"
            />
        </div>
    )
}