import { http } from '../services';

export const forgotPassword = async (obj) => {
    return await http.post('/users/forgotpassword', obj);
}

export const resetPassword = async (id, token, obj) => {
    return await http.post(`/users/resetpassword/${id}/${token}`, obj);
}
