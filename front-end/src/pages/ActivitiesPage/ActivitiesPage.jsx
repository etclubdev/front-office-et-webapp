import './ActivitiesPage.css';
import { activitiesData } from '../../mocks/data';

import Activity from '../../components/Activity';

import ActivitiesSlider from '../../components/ActivitiesSlider';

const activities = activitiesData.activities;

const filterType = (type) => {
    return activities.filter(item => item.type.includes(type));
}

const filterStatus= (status) => {
    return activities.filter(item => item.status.includes(status));
}

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

    

    return (
        <div className="activities-page">
            <div className="ongoing-activities-container">
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

            <div className="completed-activities-container">
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