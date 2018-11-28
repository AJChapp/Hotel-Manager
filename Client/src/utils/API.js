import axios from 'axios'


export default {
    checkLogin: ()=>{
        return axios.get('/api/user');
    },
    getRooms: function () {
        return axios.get("/search/api/roomsearch");
    },
    findOpening: (data) => {
        // must be array
        return axios.post('/room/api/findopening', data)
    },
    addBooking: (data) => {
        // must be array
        return axios.post('/booking/api', data)
    },
    addUserBooking: (data)=>{
        return axios.post('/api/user/booking',data)
    },
    login:(data) =>{
        return axios.post('/api/user/login', data)
    },
    signup: (data)=>{
        return axios.post('/api/newuser', data)
    },
    checkEmail: (data)=>{
        return axios.post('/api/user/email', data)
    },
    logOut:()=>{
        return axios.get('/api/user/logout')
    },
    userBooking:()=>{
        return axios.get('/api/user/data')
    }



}