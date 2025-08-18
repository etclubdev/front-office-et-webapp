import './ETBlogPage.css';
import { Navbar } from '../../components/Navbar';
import { HorizontalNews } from '../../components/HorizontalNews';
import { VerticalNews } from '../../components/VerticalNews';
import { PostSlider } from '../../components/PostSlider';
import { getAllBlogs } from '../../api/etBlog.service';
import { CustomBreadcrumbs } from '../../components/CustomBreadcrumbs'
import { CircularLoading } from '../../components/CircularLoading';
import { DynamicBlur } from '../../components/DynamicBlur';
import { useSimpleData } from '../../utils/useSimpleData';
import { Heading } from '../../components/Typography/Typography';

export const ETBlogPage = () => {
    const { data: news, isFetching, isLoading, isError } = useSimpleData(['etBlog'], getAllBlogs);
    // console.log('ET Blog:', news, 'Is fetching:', isFetching);

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

    const visibleHighlightedNews = news?.highlighted?.filter(item => item.visible) || [];
    const visibleAllNews = news?.all?.filter(item => item.visible) || [];

    return (
        <div className="etblog-page">
            <Navbar />
            <DynamicBlur parentClassName="root-container" />
            <CustomBreadcrumbs data={breadcrumbsData} style={{ width: "70%" }}></CustomBreadcrumbs>
            <div className="et-blog-section">
                <div className="et-blog-highlight">
                    <Heading level={1} className="highlight-title">ET BLOG</Heading>
                    <div className="highlight-news">
                        <div id="highlight-blog-1">
                            <VerticalNews news={visibleHighlightedNews?.[0]} />
                        </div>
                        {
                            visibleHighlightedNews?.length > 1 && (
                                <div id="highlight-blog-2">
                                    {
                                        visibleHighlightedNews
                                            ?.filter((_, index) => index !== 0)
                                            .map((item, index) => (
                                                <HorizontalNews key={`highlight-blog-${index}`} news={item} />
                                            ))
                                    }

                                </div>
                            )
                        }
                    </div>
                </div>
                <div className="et-blog-categories">
                    <PostSlider
                        newsList={visibleAllNews}
                        title="Tin mới nhất"
                        categoryid={`blog-list`}
                        isETNews={false}
                    />
                </div>
            </div>
        </div>
    )
}