import { api } from "./index";

const getAllActivities = async () => {
    try {
        const response = await api.get('/activities');
        return response.data;
    } catch (error) {
        console.error("API Error:", error);
        return [];
    }
}

export { getAllActivities }