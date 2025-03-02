// Этот компонент создает экземпляр axios с базовым URL, который задается через переменную окружения.
// Это позволяет использовать одну и ту же настройку для всех API-запросов, что упрощает код и делает его более управляемым.
import axios from 'axios'

export const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL
});

