import React, { useEffect, useState } from "react";
import "./PostDetailPage.css"
import { useParams, useLocation } from "react-router-dom";
import { getActivityById } from "../../api/activity.service";
import { getEtBlogById } from "../../api/etBlog.service";
import { getEtNewsById } from "../../api/etNews.service";
import { PostDetails } from "../../components/PostDetails";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";

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
                const {data} = await serviceFunc(id);
                setDetails(data);
            } catch (error) {
                console.error("Failed to fetch post details:", error);
            }
        };

        fetchData();
    }, [id, pathname]); 

    return (
        <div className="details-page">
            <Navbar />
            {details ? <PostDetails details={details} thumbnailShowed = {!pathname.includes('et-blog')} /> : <p>Loading...</p>}
        </div>
    );
};
