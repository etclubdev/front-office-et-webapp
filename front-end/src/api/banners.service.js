import { api } from "./index";

const getBanners = async () => {
    try {
        const response = await api.get('/banners');
        return response.data;
    } catch (error) {
        console.error("API Error:", error);
        return [];
    }
}

export { getBanners }