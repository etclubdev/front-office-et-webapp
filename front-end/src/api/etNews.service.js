import { api } from "./index";

const getEtNewsById = async (id) => {
    try {
        const response = await api.get(`/et-news/${id}`);
        return response.data;
    } catch (error) {
        console.error("API Error:", error);
        return {};
    }
}

export { getEtNewsById }
