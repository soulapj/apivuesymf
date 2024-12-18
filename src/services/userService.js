import axios from 'axios';

const url = "http://localhost:8000/auth";
export default{
    async register(userdata){
        return await axios.post(`${url}/register`, userdata, {
            headers: {'Content-Type': 'application/json'}
        })
    },
    async login(userdata){
        return await axios.post(`${url}/login`, userdata, {
            headers: {'Content-Type': 'application/json'}
        })
    },
}