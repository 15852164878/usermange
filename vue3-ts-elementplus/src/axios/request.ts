import axios from "axios";
const httpRequest = axios.create({
    baseURL: 'http://localhost:8081/JSP-Servlet',
    timeout:3000
})

export default httpRequest

