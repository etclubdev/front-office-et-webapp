import React, { useEffect, useState } from "react";
import "./PostDetailPage.css"
import { useParams, useLocation } from "react-router-dom";
import { getActivityById } from "../../api/activity.service";
import { getEtBlogById } from "../../api/etBlog.service";
import { getEtNewsById } from "../../api/etNews.service";
import { PostDetails } from "../../components/PostDetails";
import { Navbar } from "../../components/Navbar";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { CustomBreadcrumbs } from '../../components/CustomBreadcrumbs'

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
            <div className="alt-img">
                <Navbar />
                <Box>
                    <CircularProgress size="6rem" />
                </Box>
            </div>
        )
    }

    const breadcrumbsData = [
        {
            href: "/",
            title: "Trang chủ"
        },
        {
            href: "/activities",
            title: "Hoạt động"
        },
        {
            href: "#",
            title: "Bài viết"
        }
    ]

    return (
        <div className="details-page">
            <Navbar />
            <CustomBreadcrumbs data={breadcrumbsData} style={{ width: "70%" }}></CustomBreadcrumbs>
            <PostDetails details={details} thumbnailShowed={!pathname.includes('et-blog')} />
        </div>
    );
};
