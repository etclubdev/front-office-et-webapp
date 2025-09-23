import { useEffect } from 'react';
import './PostDetails.css';
import DOMPurify from "dompurify";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { Heading } from '../Typography/Typography';
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-light.css";

export const PostDetails = ({ details, thumbnailShowed = false }) => {
    const createdOn = new Date(details.created_on).toLocaleDateString("vi-VN");

    useEffect(() => {
        document.querySelectorAll("pre code").forEach(block => {
            block.innerHTML = block.innerHTML.replace(/<br\s*\/?>/gi, "\n")
            hljs.highlightElement(block);
        });
    }, [details.content]);

    return (
        <div className="details-post">
            <div className="details-container">
                <div className="details-content-header">
                    <Heading level={1} className="details-title">{details.title}</Heading>
                    <div className="details-info">
                        <div className="details-info-item" id="details-time">
                            <FontAwesomeIcon icon={faClock} />
                            {createdOn}
                        </div>
                        <div className="details-info-item">
                            {details.blog_author ?
                                <>
                                    <FontAwesomeIcon icon={faUserTie} />
                                    {details.blog_author}
                                </>
                                : <></>}
                        </div>
                    </div>
                </div>
                <div className="img-container" style={{ display: "flex", justifyContent: "center" }}>
                    {thumbnailShowed && <img src={details.thumbnail_image_url} alt="" />}
                </div>
                <div className="detail-content-container" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <div className="details-content prose max-w-none" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(details?.content) }}></div>
                    {details.source &&
                        <p className="details-references">
                            <strong>Nguồn: </strong>
                            {details.source.includes("http") ?
                                <a href={details.source}>{details.source}</a> :
                                details.source}
                        </p>}
                </div>
            </div>
        </div>
    )
}
