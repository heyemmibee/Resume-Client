import { useState, useEffect, useRef } from 'react';

const useLocalStorage = (key, defaultValue = '', {
    serialize = JSON.stringify,
    deseralize = JSON.parse
} = {}) => {
    const [state, setState] = useState(() => {
        const value = window.localStorage.getItem(key);
        if (value) {
            try {
                return deseralize(value);
            } catch (error) {
                window.localStorage.removeItem(key);
            }
        }
        return typeof defaultValue === 'function' ? defaultValue() : defaultValue;
    })

    const prevKeyRef = useRef(key);

    useEffect(() => {
        const prevKey = prevKeyRef.current
        if (prevKey !== key) {
            window.localStorage.removeItem(prevKey)
        }

        prevKeyRef.current = key
        window.localStorage.setItem(key, serialize(state))
    }, [key, state, serialize]);

    return [state, setState];
}

export default useLocalStorage;
