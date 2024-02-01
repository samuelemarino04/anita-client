import axios from 'axios'

class CreationsService {
    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_API_URL}/creations`
        })


    }
}

export default CreationsService