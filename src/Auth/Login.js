import LoginForm from './LoginForm';
import { useState } from 'react';

const Login = () => {

    const [login, setLogin] = useState(() => ({
        username: '',
        password: ''
    }))

    const fieldChanged = (e) => {
        const tempLogin = {
            ...login,
            [e.target.id]: e.target.value.trim()
        };
        setLogin(tempLogin);
    }

    return (
        <LoginForm
            onChange={fieldChanged}
        />
    )
}

export default Login;
