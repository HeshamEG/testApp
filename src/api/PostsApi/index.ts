import { api } from '../index';
const getPostsList = async (limit: string, offset: string) => await api.get(`posts?${'_limit=' + limit + '&_start=' + offset}`);
const submitPost = async (data: object) => await api.post(`posts`, data);
const getAllPostsList = async () => await api.get(`posts`);

export const PostsApi = {
    getPostsList,
    getAllPostsList,
    submitPost
}