const createPayloadFromOptions = (payload, options) => {
    return {
        ...options,
        body: JSON.stringify(payload)
    }
}

const completeEndPoint = (url) => `${process.env.REACT_APP_BASE_URL}${url}`;

export const get = async (endpoint, accessToken = '') => {
    const url = completeEndPoint(endpoint);
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': accessToken
        }
    }
    const response = await fetch(url, options);
    const responseData = await response.json();
    return {
        statusCode: response.status,
        data: responseData
    }
}

export const post = async (endpoint, data, options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    }
}) => {
    const url = completeEndPoint(endpoint);
    const requestOptions = createPayloadFromOptions(data, options);
    const response = await fetch(url, requestOptions);
    const responseData = await response.json();
    return {
        statusCode: response.status,
        data: responseData
    };
}