import { createContext } from 'react';
import { useLocalStorage } from '../hooks';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useLocalStorage('currentUser', {
        email: '',
        accessToken: ''
    });

    const login = (user, fn) => {
        setUser(user);
        return fn();
    }

    return <AuthContext.Provider
        value={{
            user: user,
            login: login
        }}>
        {children}
    </AuthContext.Provider >
}
