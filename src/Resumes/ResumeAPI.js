import { http } from '../services';

export const index = async (accessToken) => {
    return await http.get('/resumes', accessToken);
};