import './FAQsPage.css';
import { TopicQuestion } from '../../components/TopicQuestion';
import { PageTitle } from '../../components/PageTitle';
import { getAllFAQs } from '../../api/faq.service';
import { Navbar } from '../../components/Navbar';
import { CustomBreadcrumbs } from '../../components/CustomBreadcrumbs'
import { DynamicBlur } from '../../components/DynamicBlur';
import { CircularLoading } from '../../components/CircularLoading';
import { useSimpleData } from '../../utils/useSimpleData'; 

export const FAQsPage = () => {
    const { data: faqs, isFetching, isLoading, isError } = useSimpleData(['faqs'], getAllFAQs);
    // console.log('FAQs:', faqs, 'Is fetching:', isFetching);

    if (!faqs || faqs.length === 0) {
        return (
            <div className="loading...">
                <Navbar />
                <CircularLoading />;
            </div>
        )
    }

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