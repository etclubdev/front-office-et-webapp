import './ActivitiesPage.css';
import { Activity } from '../../components/Activity';
import { ActivitiesSlider } from '../../components/ActivitiesSlider';
import { useEffect, useState } from 'react';
import { getAllActivities } from '../../api/activity.service';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';

export const ActivitiesPage = () => {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await getAllActivities();
            setActivities(data);
        }
        fetchData();
    }, []);

    return (
        <div className="activities-page">
            <Navbar />
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
            <Footer />
        </div>
    )
}