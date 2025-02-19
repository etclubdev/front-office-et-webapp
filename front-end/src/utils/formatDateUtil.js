const formatDate = (isoString) => {
    const date = new Date(isoString);
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const hour = date.getHours();
    return `${hour}h ngày ${day} tháng ${month} năm ${year}`
}

export { formatDate }