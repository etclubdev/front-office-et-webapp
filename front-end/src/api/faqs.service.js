import { api } from "./index";

const getFAQs = async () => {
    try {
        const response = await api.get('/FAQ');
        return response.data;
    } catch (error) {
        console.error("API Error:", error);
        return [];
    }
}

export { getFAQs }