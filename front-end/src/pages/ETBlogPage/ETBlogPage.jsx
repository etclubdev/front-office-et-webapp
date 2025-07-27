import './ETBlogPage.css';
import { Navbar } from '../../components/Navbar';
import { HorizontalNews } from '../../components/HorizontalNews';
import { VerticalNews } from '../../components/VerticalNews';
import { PostSlider } from '../../components/PostSlider';
import { getAllBlogs } from '../../api/etBlog.service';
import { CustomBreadcrumbs } from '../../components/CustomBreadcrumbs'
import { CircularLoading } from '../../components/CircularLoading';
import { DynamicBlur } from '../../components/DynamicBlur';
import { useEffect, useState } from 'react';

export const ETBlogPage = () => {
    const [news, setNews] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const { data } = await getAllBlogs();
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
            title: "Bờ lốc ET"
        }
    ]


    return (
        <div className="etblog-page">
            <Navbar />
                        <DynamicBlur parentClassName="root-container" />
            <CustomBreadcrumbs data={breadcrumbsData} style={{ width: "70%" }}></CustomBreadcrumbs>
            <div className="et-blog-section">
                <div className="et-blog-highlight">
                    <div className="highlight-title">ET BLOG</div>
                    <div className="highlight-news">
                        <div id="highlight-blog-1">
                            <VerticalNews news={news?.highlighted?.[0]} />
                        </div>
                        <div id="highlight-blog-2">
                            {
                                news?.highlighted
                                    ?.filter((_, index) => index !== 0)
                                    .map((item, index) => (
                                        <HorizontalNews key={`highlight-blog-${index}`} news={item} />
                                    ))
                            }

                        </div>
                    </div>
                </div>
                <div className="et-blog-categories">
                    <PostSlider
                        newsList={news?.all}
                        title="Tin mới nhất"
                        categoryid={`blog-list`}
                        isETNews={false}
                    />
                </div>
            </div>
        </div>
    )
}