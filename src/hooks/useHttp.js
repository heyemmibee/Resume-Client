import { useState, useEffect } from 'react';

const useHttp = (fn, initialData) => {
    const [data, setData] = useState(initialData);

    useEffect(() => {
        const getData = async () => {

            const { statusCode, data } = await fn();

            if (statusCode !== 200) {
                return;
            }

            setData(data);
        }

        getData();
    }, [fn]);

    return data;
};

export default useHttp;
