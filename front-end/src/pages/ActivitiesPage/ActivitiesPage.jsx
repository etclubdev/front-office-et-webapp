import './ActivitiesPage.css';
import { activitiesData } from '../../mocks/data';

import Activity from '../../components/Activity';

import ActivitiesSlider from '../../components/ActivitiesSlider';

const activities = activitiesData.activities;

const onGoingActivities = activities.filter(item => item.status.includes("Đang diễn ra"))

const talkShowActivities = activities.filter(item => item.type.includes("Talkshow/Workshop"));
const prActivities = activities.filter(item => item.type.includes("Hoạt động truyền thông"));
const gameActivities = activities.filter(item => item.type.includes("Game"));
const competitionActivities = activities.filter(item => item.type.includes("Cuộc thi"));
const internalActivities = activities.filter(item => item.type.includes("Hoạt động nội bộ"))


export const ActivitiesPage = () => {
    return (
        <div className="activities-page">
            <div className="ongoing-activities-container">
                <div className="ongoing-activities">
                    {
                        onGoingActivities.map(item => {
                            return (
                                <Activity activity={item} active={true}/>
                            )
                        })
                    }
                </div>
            </div>
            <ActivitiesSlider activities={talkShowActivities}/>
            <ActivitiesSlider activities={prActivities}/>
            <ActivitiesSlider activities={competitionActivities}/>
            <ActivitiesSlider activities={internalActivities}/>

        </div>
    )
}