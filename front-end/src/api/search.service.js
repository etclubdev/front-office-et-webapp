import { api } from "./index";

const searchAcrossTables = async (keyword) => {
    try {
        const response = await api.get('/search', {
            params: { keyword }
        });
        return response.data;
    } catch (error) {
        console.error("API Error:", error);
        return [];
    }
}

export { searchAcrossTables }