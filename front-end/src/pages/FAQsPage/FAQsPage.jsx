import './FAQsPage.css';
import { useEffect, useState } from 'react';
import { TopicQuestion } from '../../components/TopicQuestion';
import { PageTitle } from '../../components/PageTitle';
import { getAllFAQs } from '../../api/faq.service';
import { Navbar } from '../../components/Navbar';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';

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
            <div className="breadcrumb-container" style={{ width: "70%", paddingBottom:"2vw" }}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link to='/' className="nav-item">
                        <p className="nav-item-content">Trang chủ</p>
                    </Link>
                    <Link to='#' className="nav-item">
                        <p className="nav-item-content">FAQs</p>
                    </Link>
                </Breadcrumbs>
            </div>
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