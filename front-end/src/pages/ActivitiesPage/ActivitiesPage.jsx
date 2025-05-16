import './ActivitiesPage.css';
import { Activity } from '../../components/Activity';
import { ActivitiesSlider } from '../../components/ActivitiesSlider';
import { useEffect, useState } from 'react';
import { getAllActivities } from '../../api/activity.service';
import { Navbar } from '../../components/Navbar';
import { PageTitle } from '../../components/PageTitle';
import { CustomBreadcrumbs } from '../../components/CustomBreadcrumbs'
import { CircularLoading } from '../../components/CircularLoading';
import { DynamicBlur } from '../../components/DynamicBlur';


export const ActivitiesPage = () => {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await getAllActivities();
            setActivities(data);
        }
        fetchData();
    }, []);

    if (!activities || activities.length === 0) {
        return (
            <div className="loading...">
                <Navbar />
                <CircularLoading />
            </div>

        );
    };

    const breadcrumbsData = [
        {
            href: "/",
            title: "Trang chủ"
        },
        {
            href: "#",
            title: "Hoạt động"
        }
    ]

    return (
        <div className="activities-page">
            <Navbar />
            <DynamicBlur parentClassName="root-container" />
            <CustomBreadcrumbs data={breadcrumbsData} style={{ width: "70%" }}></CustomBreadcrumbs>
            {
                activities?.ongoing?.length > 0 ? (
                    <div className="ongoing-activities-container">
                        <PageTitle padding="2vw 0 4vw 0">CHƯƠNG TRÌNH ĐANG DIỄN RA</PageTitle>
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


            <PageTitle padding="0 0 4vw 0">CHƯƠNG TRÌNH ĐÃ DIỄN RA</PageTitle>
            <div className="completed-activities-container">
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