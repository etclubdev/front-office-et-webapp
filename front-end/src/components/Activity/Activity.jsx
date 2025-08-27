/* eslint-disable react-hooks/exhaustive-deps */
import { lazy, useEffect } from 'react';
import './Activity.css';
import { useNavigate } from 'react-router-dom';
import { Heading } from '../Typography/Typography';
import { trimText } from '../../utils/trimTextUtil';

export const Activity = ({ index, activity, ongoing }) => {
    const navigate = useNavigate();

    useEffect(() => {
        const highlightItem = document.getElementById(activity.activity_id);

        if (ongoing) {
            if (index === 0) {
                highlightItem?.classList.add('highlight-1');
            }
            else {
                highlightItem?.classList.add('highlight-2');
            }
        }

    }, [])


    const handleClick = () => {
        navigate(`/activities/${activity.activity_id}`);
    }

    return (
        <div id={activity.activity_id} className="activity-container" onClick={handleClick}>
            <div className="actv-img-container" style={{display:"flex", justifyContent: "center", alignItems:"center"}}>
                <img className="activity-image" src={activity.thumbnail_image_url || require(`../../mocks${activity.thumbnail_image_url}`)} alt={activity.name} loading="lazy"/>
            </div>
            <Heading level={3} className="activity-name">{trimText(activity?.title, 50)}</Heading>
            {ongoing ? <p className="activity-desc">{trimText(activity?.meta_description, 150)} </p> : <></>}
        </div>
    )
}