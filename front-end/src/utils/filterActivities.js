const filterType = (activitiesData) => {
    let filteredActivity = {
        mediaActivity: [],
        event: [],
        game: [],
        competition: [],
        internal: []
    };

    activitiesData.forEach((activity, index) => {
        let i = 0;
        let typeCount = typeof(activity.type) === 'object' ? activity.type.length : 1;
        console.log(typeCount);
        
        while (i < typeCount){
            let type;
            if (typeof(activity.type) === 'object'){
                type = activity.type[i];
            }
            else{
                type = activity.type;
            }
            console.log(i, type);
            
            switch (type) {
                
                case 'Hoạt động truyền thông': {
                    filteredActivity.mediaActivity.push(activity);
                    break;
                }
                case 'Talkshow/Workshop': {
                    filteredActivity.event.push(activity);
                    break;

                }
                case 'Game': {
                    filteredActivity.game.push(activity);
                    break;

                }
                case 'Cuộc thi': {
                    filteredActivity.competition.push(activity);
                    break;

                }
                case 'Hoạt động nội bộ': {
                    filteredActivity.internal.push(activity);
                    break;
                }
                default: {
                    console.log(index + "The type of activity is invalid!");
                }
            }
            ++i;
        }
    })

    return filteredActivity;
}

const filterStatus = (activitiesData, status) => {
    let filteredActivity = {
        onGoing: [],
        completed: []
    };

    activitiesData.forEach(activity => {
        switch (activity.status) {
            case 'Đang diễn ra': {
                filteredActivity.onGoing.push(activity);
            }
            case 'Đã diễn ra': {
                filteredActivity.completed.push(activity);
            }
        }
    })


    return filteredActivity;
}

export const filterActivitites = (activitiesData) => {
    let types = [];
    let status = [];
    activitiesData.forEach(item => {
        if (!types.includes(item.type)) {
            if (typeof (item.type) === 'string') {
                types.push(item.type);
            } else {
                item.type.forEach(i => {
                    if (!types.includes(i)) {
                        types.push(i);
                    }
                })
            }

        }

        if (!status.includes(item.status)) {
            status.push(item.status);
        }
    });
    let filteredActivities = filterStatus(activitiesData, status);
    let onGoingActivities = filteredActivities.onGoing;
    let completedActivities = filterType(filteredActivities.completed);

    return {
        onGoing: onGoingActivities,
        completed: completedActivities
    }

}