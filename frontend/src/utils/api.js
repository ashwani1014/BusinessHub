export const fetchApi = async (url, options = {}) => {
    const token = localStorage.getItem('token');

    const headers = {
        'Content-Type': 'application/json',
        ...options.headers,
    };

    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }

    const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

    const response = await fetch(`${API_BASE_URL}${url}`, {
        ...options,
        headers,
    });

    return response;
};
