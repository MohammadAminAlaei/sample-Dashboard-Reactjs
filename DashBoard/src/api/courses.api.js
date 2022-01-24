import axios from 'axios';

axios.defaults.baseURL = 'https://6182355884c2020017d89d14.mockapi.io/api/v1/';

export async function getCourses() {
    try {
        const response = await axios.get(`/courses?page=1&limit=10`);
        return response.data;
    } catch (e) {
        return e;
    }

}export async function getAllCourses() {
    try {
        const response = await axios.get(`/courses`);
        return response.data;
    } catch (e) {
        return e;
    }
}
