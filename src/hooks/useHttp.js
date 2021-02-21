import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/authContext';
import {
    useHistory
} from "react-router-dom";

const useHttp = (fn, initialData) => {
    const [data, setData] = useState(initialData);
    const authContext = useContext(AuthContext);
    const history = useHistory();

    useEffect(() => {
        const getData = async () => {

            const { statusCode, data } = await fn();

            if (statusCode === 401) {
                authContext.logout();
            } else if (statusCode !== 200) {
                return;
            }

            setData(data);
        }

        getData();
    }, [fn, authContext, history]);

    return data;
};

export default useHttp;
