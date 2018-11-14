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
    login:(data) =>{
        return axios.post('/api/user/login', data)
    }


}