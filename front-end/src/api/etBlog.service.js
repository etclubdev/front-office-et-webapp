import { api } from "./index";

const getEtBlogById = async (id) => {
    try {
        const response = await api.get(`/et-blog/${id}`);
        return response.data;
    } catch (error) {
        console.error("API Error:", error);
        return {};
    }
}

export { getEtBlogById }
