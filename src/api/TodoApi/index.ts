import { api } from '../index';


const getToDoList = async (limit: string, offset: string) => await api.get(`todos?${'_limit=' + limit + '&_start=' + offset}`);
const checkToDo = async (data: object) => await api.post(`todos`, data);

export const TodoApi = {
    getToDoList,
    checkToDo,
}