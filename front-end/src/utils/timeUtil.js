function calculateDateDifferenceVN(date1, date2) {
    const d1 = new Date(date1).getTime();
    const d2 = new Date(date2).getTime();

    if (d2 < d1) {
        return {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        };
    }
    const diffInMilliseconds = d2 - d1;
    const diffInSeconds = diffInMilliseconds / 1000;
    const diffInMinutes = diffInSeconds / 60;
    const diffInHours = diffInMinutes / 60;
    const diffInDays = diffInHours / 24;

    return {
        days: Math.floor(diffInDays),
        hours: Math.floor(diffInHours) % 24,
        minutes: Math.floor(diffInMinutes) % 60,
        seconds: Math.floor(diffInSeconds) % 60,
    };
}

function getCurrentTimeInVietnam() {
    const vietnamTime = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Ho_Chi_Minh" }));

    const year = vietnamTime.getFullYear();
    const month = (vietnamTime.getMonth() + 1).toString().padStart(2, '0');
    const day = vietnamTime.getDate().toString().padStart(2, '0');
    const hours = vietnamTime.getHours().toString().padStart(2, '0');
    const minutes = vietnamTime.getMinutes().toString().padStart(2, '0');
    const seconds = vietnamTime.getSeconds().toString().padStart(2, '0');

    const formattedTime = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}+07:00`;

    return formattedTime;
}

export { calculateDateDifferenceVN, getCurrentTimeInVietnam };
