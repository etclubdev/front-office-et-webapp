import './ETNewsPage.css';
import { Navbar } from '../../components/Navbar';
import { HorizontalNews } from '../../components/HorizontalNews';
import { VerticalNews } from '../../components/VerticalNews';
import { PostSlider } from '../../components/PostSlider';
import { getAllNews } from '../../api/etNews.service';
import { useEffect, useState } from 'react';
import { CustomBreadcrumbs } from '../../components/CustomBreadcrumbs'
import { CircularLoading } from '../../components/CircularLoading';
import { DynamicBlur } from '../../components/DynamicBlur';

export const ETNewsPage = () => {
    const [news, setNews] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const { data } = await getAllNews();
            setNews(data);
        }
        fetchData();
    }, [])

    if (!news || news.length === 0) {
        return (
            <div className="loading...">
                <Navbar />
                <CircularLoading />
            </div>

        );
    }

    const breadcrumbsData = [
        {
            href: "/",
            title: "Trang chủ"
        },
        {
            href: "#",
            title: "Bản tin ET"
        }
    ]

    return (
        <div className="etnews-page">
            <Navbar />
            <DynamicBlur parentClassName="root-container" />
            <CustomBreadcrumbs data={breadcrumbsData} style={{ width: "70%" }}></CustomBreadcrumbs>
            <div className="et-news-section">
                <div className="et-news-highlight">
                    <div className="highlight-title">ET NEWS</div>
                    <div className="highlight-news">
                        <div id="highlight-news-1">
                            <VerticalNews isETNews news={news?.latestNews?.[0]} />
                        </div>
                        <div id="highlight-news-2">
                            {
                                news?.latestNews
                                    ?.filter((_, index) => index !== 0)
                                    .map((item, index) => (
                                        <HorizontalNews isETNews key={'highlight-news-' + index} news={item} />
                                    ))
                            }
                        </div>
                    </div>
                </div>
                <div className="et-news-categories">
                    {
                        Object.entries(news?.groupedNews || {})
                            .filter(([_, newsList]) => newsList?.length > 0)
                            .map(([category, newsList], index) => (
                                <PostSlider
                                    key={`news-list-${index}`}
                                    newsList={newsList}
                                    title={category}
                                    categoryid={`news-list-${index}`}
                                    isETNews
                                />
                            ))
                    }

                </div>
            </div>
        </div>
    )
}