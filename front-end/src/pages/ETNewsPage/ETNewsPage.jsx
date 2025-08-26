import './ETNewsPage.css';
import { Navbar } from '../../components/Navbar';
import { HorizontalNews } from '../../components/HorizontalNews';
import { VerticalNews } from '../../components/VerticalNews';
import { PostSlider } from '../../components/PostSlider';
import { getAllNews } from '../../api/etNews.service';
import { CustomBreadcrumbs } from '../../components/CustomBreadcrumbs'
import { CircularLoading } from '../../components/CircularLoading';
import { DynamicBlur } from '../../components/DynamicBlur';
import { useSimpleData } from '../../utils/useSimpleData';
import { Heading } from "../../components/Typography/Typography";

export const ETNewsPage = () => {

    const { data: news, isFetching, isLoading, isError } = useSimpleData(['etNews'], getAllNews);
    console.log('ET News:', news, 'Is fetching:', isFetching);

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

    const visibleGroupedNews = Object.entries(news?.groupedNews || {}).reduce(
        (acc, [category, items]) => ({
            ...acc,
            [category]: items.filter(item => item.visible),
        }),
        {}
    );

    const visibleLastestNews = news?.latestNews?.filter(item => item.visible) || [];

    return (
        <div className="etnews-page">
            <Navbar />
            <DynamicBlur parentClassName="root-container" />
            <CustomBreadcrumbs data={breadcrumbsData} style={{ width: "70%" }}></CustomBreadcrumbs>
            <div className="et-news-section">
                <div className="et-news-highlight">
                    <div className="highlight-title">
                        <Heading level={1}>ET NEWS</Heading>
                    </div>
                    {
                        visibleLastestNews.length > 0 && (
                            <div className="highlight-news">
                                <div id="highlight-news-1">
                                    <VerticalNews isETNews news={visibleLastestNews[0]} />
                                </div>
                                {
                                    visibleLastestNews?.length > 1 && (
                                        <div id="highlight-news-2">
                                            {
                                                visibleLastestNews.filter((_, index) => index !== 0)
                                                    .map((item, index) => (
                                                        <HorizontalNews isETNews key={'highlight-news-' + index} news={item} />
                                                    ))
                                            }
                                        </div>
                                    )
                                }
                            </div>
                        )
                    }
                </div>
                <div className="et-news-categories">
                    {
                        Object.entries(visibleGroupedNews || {})
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