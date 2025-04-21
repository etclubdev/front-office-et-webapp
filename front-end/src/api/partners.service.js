import { api } from "./index";

const getPartners = async () => {
    try {
        const response = await api.get('/partners');
        return response.data;
    } catch (error) {
        console.error("API Error:", error);
        return [];
    }
}

export { getPartners }