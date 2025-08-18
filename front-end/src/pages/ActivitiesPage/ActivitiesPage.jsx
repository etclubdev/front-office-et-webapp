import './ActivitiesPage.css';
import { Activity } from '../../components/Activity';
import { ActivitiesSlider } from '../../components/ActivitiesSlider';
import { getAllActivities } from '../../api/activity.service';
import { Navbar } from '../../components/Navbar';
import { PageTitle } from '../../components/PageTitle';
import { CustomBreadcrumbs } from '../../components/CustomBreadcrumbs'
import { CircularLoading } from '../../components/CircularLoading';
import { DynamicBlur } from '../../components/DynamicBlur';
import { useSimpleData } from '../../utils/useSimpleData';
import { Heading } from '../../components/Typography/Typography';

export const ActivitiesPage = () => {

    const { data: activities, isFetching, isLoading, isError } = useSimpleData(['activities'], getAllActivities);

    if (isLoading || isError) {
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

    const visibleOngoingActivities = activities?.ongoing?.filter(activity => activity.visible) || [];
    const visibleCompletedActivities = Object.entries(activities?.completed || {}).reduce((acc, [category, activities]) => {
        acc[category] = activities.filter(activity => activity.visible);
        return acc;
    }, {});

    return (
        <div className="activities-page">
            <Navbar />
            <DynamicBlur parentClassName="root-container" />
            <CustomBreadcrumbs data={breadcrumbsData} style={{ width: "70%" }}></CustomBreadcrumbs>
            <div className="activities-section">
                {
                    visibleOngoingActivities?.length > 0 ? (
                        <div className="ongoing-activities-container">
                            <Heading className="activities-title" level={1}>CHƯƠNG TRÌNH ĐANG DIỄN RA</Heading>
                            <div className="ongoing-activities">
                                {
                                    visibleOngoingActivities?.map((item, index) => {
                                        if (index > 1) return null;

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


                <Heading className="activities-title" level={1}>CHƯƠNG TRÌNH ĐÃ DIỄN RA</Heading>
                <div className="completed-activities-container">
                    <div className="completed-activities">
                        {
                            Object.entries(visibleCompletedActivities || {}).map(([category, activities], index) => {
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
        </div>
    )
}