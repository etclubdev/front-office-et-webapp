import { api } from "./index";

const getActivityById = async (id) => {
    try {
        const response = await api.get(`/activities/${id}`);
        return response.data;
    } catch (error) {
        console.error("API Error:", error);
        return {};
    }
}

const getAllActivities = async () => {
    try {
        const response = await api.get('/activities');
        return response.data;
    } catch (error) {
        console.error("API Error:", error);
        return [];
    }
}

export { getActivityById, getAllActivities }
