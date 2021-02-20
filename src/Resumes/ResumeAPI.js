import { http } from '../services';

export const index = async (accessToken) => {
    return await http.get('/resumes', accessToken);
};

export const create = async (accessToken, resume) => {
    return await http.post('/resumes', resume, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': accessToken
        }
    });
}