import { http } from '../services';

export const index = async (accessToken) => {
    return await http.get('/resumes', accessToken);
};

export const get = async (accessToken, id) => {
    return await http.get(`/resumes/${id}`, accessToken);
}

export const create = async (accessToken, resume) => {
    return await http.post('/resumes', resume, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': accessToken
        }
    });
}

export const update = async (accessToken, id, resume) => {
    return await http.post(`/resumes/${id}`, resume, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': accessToken
        }
    });
}
