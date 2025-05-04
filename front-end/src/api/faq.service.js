import { api } from "./index";

const getAllFAQs = async () => {
    try {
        const response = await api.get('/faqs');
        return response.data;
    } catch (error) {
        console.error("API Error:", error);
        return [];
    }
}

export { getAllFAQs }