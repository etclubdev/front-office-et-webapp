import './ActivitiesPage.css';
import { activitiesData } from '../../mocks/data';
import { Activity } from '../../components/Activity';
import { ActivitiesSlider } from '../../components/ActivitiesSlider';
import { filterActivitites } from '../../utils/filterActivities';
import { useEffect, useState } from 'react';
import { generateRandomCircles } from '../../utils/generateRandomCirclesUtil';

const filterType = (type) => {
    return activitiesData.filter(item => item.type.includes(type));
}

const filterStatus= (status) => {
    return activitiesData.filter(item => item.status.includes(status));
}
console.log(filterActivitites(activitiesData));


const types = ["Talkshow/Workshop", "Hoạt động truyền thông", "Game", "Cuộc thi", "Hoạt động nội bộ"]

const filteredActivities = types.map((type, index) => {
    let activityType = type;
    return {
        id: `type-${index}`,
        type: activityType,
        items: filterType(type)
    }
})

const ongoingActivities = filterStatus("Đang diễn ra");

export const ActivitiesPage = () => {
    const [circles, setCircles] = useState([]);

    useEffect(() => {
      setCircles(generateRandomCircles()); 
    }, []);

    return (
        <div className="activities-page">
            
            {circles.map((circle, index) => (
                <div
                key={index}
                className="blur-circle"
                style={{
                    width: circle.size,
                    height: circle.size,
                    top: circle.top,
                    left: circle.left,
                    opacity: circle.opacity,
                    background: circle.background,
                    filter: `blur(${circle.blur}px)`,
                }}
                />
            ))}
            
            <div className="ongoing-activities-container">
                <p className="activities-title">CHƯƠNG TRÌNH ĐANG DIỄN RA</p>
                <div className="ongoing-activities">
                    {
                        ongoingActivities.map((item, index) => {
                            return (
                                <Activity index={index} activity={item} active={true}/>
                            )
                        })
                    }
                </div>
            </div>

            <hr className="activities-page-division-bar" />

            <div className="completed-activities-container">
                <p className="activities-title">CHƯƠNG TRÌNH ĐÃ DIỄN RA</p>
                <div className="completed-activities">
                    {
                        filteredActivities.map(item => {
                            return (
                                <ActivitiesSlider activities={item}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}