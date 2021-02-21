import { http } from '../services';

export const registerUser = async (data) => {
    const { statusCode } = await http.post('/users/', data);
    if (statusCode === 200) {
        return await login(data.email, data.password);
    }

    return statusCode;
}

export const getByUsername = async (username) => {
    return await http.get(`/users/${username}`);
}

export const getByEmail = async (email) => {
    const url = ``;
    return await http.get(url);
}

export const isUsernameAvailable = async (username) => {
    return await http.post('/users/isavailable', { username });
}

export const isEmailAvailable = async (email) => {
    return await http.post('/users/isavailable', { email });
}

export const login = async (email, password) => {
    const data = {
        email,
        password
    };
    return await http.post('/auth/login', data);
}