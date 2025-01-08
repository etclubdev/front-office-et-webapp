import './Activity.css';

export const Activity = ({activity, active}) => {
    return (
        <div className="activity-container">
            <img className="activity-image" src={require(`../../mocks${activity.image}`)} alt={activity.name} />
            <p className="activity-name">{activity.name}</p>
            {active ? <p className='activities-desc'>{activity.desc}</p> : <></>}
        </div>
    )
}