import { useEffect } from 'react';
import './Activity.css';

export const Activity = ({index, activity, active}) => {

    useEffect(() => {
        const highlightItem = document.querySelector(`#${activity.id}`);

        if (active && highlightItem){
            if (index === 0){
                highlightItem.classList.add('highlight-1');
            }
            else{
                highlightItem.classList.add('highlight-2');
            }
        }
        
    }, [])

    return (
        <div id={activity.id} className="activity-container">
            <img className="activity-image" src={require(`../../mocks${activity.image}`)} alt={activity.name} />
            <p className="activity-name">{activity.name}</p>
            {active ? <p className='activities-desc'>{activity.desc}</p> : <></>}
        </div>
    )
}