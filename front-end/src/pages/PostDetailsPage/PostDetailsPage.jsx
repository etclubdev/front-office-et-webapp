import React, { useEffect, useState } from "react";
import "./PostDetailPage.css"
import { useParams, useLocation } from "react-router-dom";
import { getActivityById } from "../../api/activity.service";
import { getEtBlogById } from "../../api/etBlog.service";
import { getEtNewsById } from "../../api/etNews.service";
import { PostDetails } from "../../components/PostDetails";
import { Navbar } from "../../components/Navbar";
import { CustomBreadcrumbs } from '../../components/CustomBreadcrumbs'
import { CircularLoading } from "../../components/CircularLoading";

const getBreadcrumbsName = (pathname) => {
    if (pathname.includes('activities')) {
        return { href: '/activities', title: 'Hoạt động' };
    } else if (pathname.includes('et-news')) {
        return { href: '/et-news', title: 'Bản tin ET' };
    } else if (pathname.includes('et-blog')) {
        return { href: '/et-blog', title: 'Bờ lốc ET' };
    }
    return null; // fallback
};


export const PostDetailsPage = () => {
    const { pathname } = useLocation();
    const { id } = useParams();
    const [details, setDetails] = useState(null);

    useEffect(() => {
        const getPostById = () => {
            if (pathname.includes('activities')) return getActivityById;
            if (pathname.includes('et-news')) return getEtNewsById;
            if (pathname.includes('et-blog')) return getEtBlogById;
            return null;
        };

        const fetchData = async () => {
            const serviceFunc = getPostById();
            if (!serviceFunc) return;

            try {
                const { data } = await serviceFunc(id);
                setDetails(data);
            } catch (error) {
                console.error("Failed to fetch post details:", error);
            }
        };

        fetchData();
    }, [id, pathname]);

    if (!details || details.length === 0) {
        return (
            <div className="loading...">
                <Navbar />
                <CircularLoading />
            </div>
        )
    }

    const breadcrumbsData = [
        {
            href: "/",
            title: "Trang chủ"
        },
        getBreadcrumbsName(pathname),
        {
            href: "#",
            title: "Bài viết"
        }
    ]

    return (
        <div className="details-page">
            <Navbar />
            <CustomBreadcrumbs data={breadcrumbsData} style={{ width: "70%" }}></CustomBreadcrumbs>
            <img src={require(`../../mocks/images/detailPost/alt-img-v2.png`)} alt="null" className="post-cover" />
            <PostDetails details={details} thumbnailShowed={!pathname.includes('et-blog')} />
        </div>
    );
};
