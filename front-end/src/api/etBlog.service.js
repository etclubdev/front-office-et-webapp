import { api } from "./index";

const getAllBlogs = async () => {
    try {
        const response = await api.get('/et-blog');
        return response.data;
    } catch (error) {
        console.error("API Error:", error);
        return [];
    }
}

export { getAllBlogs }