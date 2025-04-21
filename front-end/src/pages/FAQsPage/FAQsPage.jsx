import './FAQsPage.css';
import { useEffect, useState } from 'react';
import { TopicQuestion } from '../../components/TopicQuestion';
import { PageTitle } from '../../components/PageTitle';
import { getAllFAQs } from '../../api/faq.service';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';

export const FAQsPage = () => {
    const [faqs, setFAQs] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const {data} = await getAllFAQs();
            setFAQs(data);
        }
        fetchData();
    }, [])

    return (
        <div className="faqs-page">
            <Navbar />
            <PageTitle>CÂU HỎI THƯỜNG GẶP</PageTitle>
            {
                Object.keys(faqs).map((key) => {
                    return (
                        <TopicQuestion 
                            key={key}
                            topicQuestion={faqs?.[key]}
                            title={`Câu hỏi về ${key}`}
                        />
                    )
                })
            }
            <Footer />
        </div>
    )
}