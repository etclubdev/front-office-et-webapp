import './ETBlogPage.css';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { HorizontalNews } from '../../components/HorizontalNews';
import { VerticalNews } from '../../components/VerticalNews';
import { PostSlider } from '../../components/PostSlider';

import { getAllBlogs } from '../../api/etBlog.service';
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


    return (
        <div className="etblog-page">
            <Navbar />
            <div className="et-blog-section">
                <div className="et-blog-highlight">
                    <div className="highlight-title">ET BLOG</div>
                    <div className="highlight-news">
                        <div id="highlight-blog-1">
                            <VerticalNews news={news?.highlighted?.[0]} />
                        </div>
                        <div id="highlight-blog-2">
                            {
                                news?.highlighted?.map((item, index) => {
                                    if (index !== 0)
                                        return (
                                            <HorizontalNews key={'highlight-blog-' + index} news={item} />
                                        )
                                })
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