import { api } from "./index";

const getAllNews = async () => {
    try {
        const response = await api.get('/et-news');
        return response.data;
    } catch (error) {
        console.error("API Error:", error);
        return [];
    }
}

export { getAllNews }