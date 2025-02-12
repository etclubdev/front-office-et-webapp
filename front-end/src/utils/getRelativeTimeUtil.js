export default function getRelativeTime(date){
    const now = new Date();
    const targetDate =
        typeof date === "string"
            ? new Date(date)
            : typeof date === "number"
            ? new Date(date * 1000) // Convert timestamp to milliseconds
            : date;

    const diffInMs = targetDate.getTime() - now.getTime();
    const diffInDays = Math.round(diffInMs / (1000 * 60 * 60 * 24));
    const diffInMonths = Math.round(diffInDays / 30); // Approximate months
    const diffInYears = Math.round(diffInDays / 365); // Approximate years

    if (diffInDays === 0) {
        return "today";
    } else if (Math.abs(diffInDays) < 30) {
        return diffInDays > 0 
            ? diffInDays === 1 
                ? "in 1 day" 
                : `in ${diffInDays} days`
            : Math.abs(diffInDays) === 1 
                ? "1 day ago" 
                : `${Math.abs(diffInDays)} days ago`;
    } else if (Math.abs(diffInMonths) < 12) {
        return diffInMonths > 0 
            ? diffInMonths === 1 
                ? "in 1 month" 
                : `in ${diffInMonths} months`
            : Math.abs(diffInMonths) === 1 
                ? "1 month ago" 
                : `${Math.abs(diffInMonths)} months ago`;
    } else {
        return diffInYears > 0 
            ? diffInYears === 1 
                ? "in 1 year" 
                : `in ${diffInYears} years`
            : Math.abs(diffInYears) === 1 
                ? "1 year ago" 
                : `${Math.abs(diffInYears)} years ago`;
    }
}
