import axios from "axios"

const instance = axios.create({
    baseURL: `https://us-central1-cfg-backend.cloudfunctions.net/api/`
});

export default instance;