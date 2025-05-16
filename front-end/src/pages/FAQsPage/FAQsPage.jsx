import './FAQsPage.css';
import { useEffect, useState } from 'react';
import { TopicQuestion } from '../../components/TopicQuestion';
import { PageTitle } from '../../components/PageTitle';
import { getAllFAQs } from '../../api/faq.service';
import { Navbar } from '../../components/Navbar';
import { CustomBreadcrumbs } from '../../components/CustomBreadcrumbs'
import { DynamicBlur } from '../../components/DynamicBlur';

export const FAQsPage = () => {
    const [faqs, setFAQs] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const { data } = await getAllFAQs();
            setFAQs(data);
        }
        fetchData();
    }, [])

    const breadcrumbsData = [
        {
            href: "/",
            title: "Trang chủ"
        },
        {
            href: "#",
            title: "FAQs"
        }
    ]

    return (
        <div className="faqs-page">
            <Navbar />
            <DynamicBlur parentClassName="root-container" />
            <CustomBreadcrumbs data={breadcrumbsData} style={{ width: "70%", paddingBottom: "2vw" }}></CustomBreadcrumbs>
            <PageTitle>CÂU HỎI THƯỜNG GẶP</PageTitle>
            <div className="topic-questions">
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
            </div>
        </div>
    )
}