import axios from 'axios';
const url = "http://localhost:8000/posts";

export default {

    async list(){
        let token = localStorage.getItem('token');
        if (!token) {
            throw new Error('aucun token')
        }
        return await axios.get(`${url}/`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
    },
    async show(id){
        let token = localStorage.getItem('token');
        if (!token) {
            throw new Error('aucun token')
        }
        return await axios.get(`${url}/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
    },
    async create(data){
        let token = localStorage.getItem('token');
        if (!token) {
            throw new Error('aucun token')
        }
        return await axios.post(`${url}/create`, data, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
    },
    async update(id, data){
        let token = localStorage.getItem('token');
        if (!token) {
            throw new Error('aucun token')
        }
        return await axios.put(`${url}/update/${id}`, data, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
    },
    async delete(id){
        let token = localStorage.getItem('token');
        if (!token) {
            throw new Error('aucun token')
        }
        return await axios.delete(`${url}/delete/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
    },
}