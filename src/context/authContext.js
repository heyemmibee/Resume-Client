import { createContext } from 'react';
import { useLocalStorage } from '../hooks';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const initialUser = {
        email: '',
        accessToken: '',
        oauth: false
    };
    const [user, setUser] = useLocalStorage('currentUser', initialUser);

    const login = (user, fn) => {
        setUser(user);
        return fn();
    }

    const logout = fn => {
        setUser(initialUser);
        return fn();
    }

    return <AuthContext.Provider
        value={{
            user: user,
            login: login,
            logout: logout
        }}>
        {children}
    </AuthContext.Provider >
}
