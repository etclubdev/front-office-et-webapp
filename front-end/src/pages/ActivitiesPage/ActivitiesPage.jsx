import './ActivitiesPage.css';
import { activitiesData } from '../../mocks/data';
import { Activity } from '../../components/Activity';
import { ActivitiesSlider } from '../../components/ActivitiesSlider';
import { filterActivitites } from '../../utils/filterActivities';
import { useEffect, useState } from 'react';
import { getAllActivities } from '../../api/activity.service';
import { generateRandomCircles } from '../../utils/generateRandomCirclesUtil';

// const filterType = (type) => {
//     return activitiesData.filter(item => item.type.includes(type));
// }

// const filterStatus= (status) => {
//     return activitiesData.filter(item => item.status.includes(status));
// }
// console.log(filterActivitites(activitiesData));


// const types = ["Talkshow/Workshop", "Hoạt động truyền thông", "Game", "Cuộc thi", "Hoạt động nội bộ"]

// const filteredActivities = types.map((type, index) => {
//     let activityType = type;
//     return {
//         id: `type-${index}`,
//         type: activityType,
//         items: filterType(type)
//     }
// })

// const ongoingActivities = filterStatus("Đang diễn ra");

export const ActivitiesPage = () => {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getAllActivities();
            setActivities(data);
        }
        fetchData();
    }, []);

    return (
        <div className="activities-page">

            {
                activities?.ongoing?.length > 0 ? (
                    <div className="ongoing-activities-container">
                        <p className="activities-title">CHƯƠNG TRÌNH ĐANG DIỄN RA</p>
                        <div className="ongoing-activities">
                            {
                                activities?.ongoing?.map((item, index) => {
                                    return (
                                        <Activity key={item.activity_id} index={index} activity={item} ongoing />
                                    )
                                })
                            }
                        </div>
                        <hr className="activities-page-division-bar" />
                    </div>
                ) : <></>
            }


            <div className="completed-activities-container">
                <p className="activities-title">CHƯƠNG TRÌNH ĐÃ DIỄN RA</p>
                <div className="completed-activities">
                    {
                        Object.entries(activities?.completed || {}).map(([category, activities], index) => {
                            return (
                                <ActivitiesSlider 
                                    key={`activities-list-${index}`}
                                    activities={activities}
                                    category={category}
                                    categoryId={`activities-list-${index}`}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}