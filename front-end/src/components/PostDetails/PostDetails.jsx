import React from 'react';
import './PostDetails.css';
import DOMPurify from "dompurify";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons'

export const PostDetails = ({ details, thumbnailShowed = false }) => {
    const createdOn = new Date(details.created_on).toLocaleDateString("vi-VN");
    
    return (
        <div className="details-post">
            <div className="details-container">
                <h1 className="details-title">{details.title}</h1>
                <div className="details-info">
                    <div className="details-info-item">
                        {details.blog_author ?
                            <>
                                <FontAwesomeIcon icon={faUserTie} />
                                {details.blog_author}
                            </>
                            : <></>}
                    </div>
                    <div className="details-info-item" id="details-time">
                        <FontAwesomeIcon icon={faClock} />
                        {createdOn}
                    </div>
                </div>

                {thumbnailShowed && <img src={require(`../../mocks${details.thumbnail_image_url}`)} alt="" />}
                <div className="details-content" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(details?.content) }}></div>
                {details.source && <p className="details-references"><strong>Nguồn: </strong>{details.source}</p>}
            </div>
        </div>
    )
}
