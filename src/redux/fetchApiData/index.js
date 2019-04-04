import axios from 'axios';
const api = 'http://localhost:8081/api'

export default function fetchApiData (procedure, payload = {}) {
    console.log(procedure, payload)
    return new Promise ((res, rej) => {
        axios.post(api, {payload, procedure})
        .then(resp => {
            console.log(resp);
            if( !resp.data || resp.data.error || !resp.data.apiData ) {
                rej(resp.data.error ? resp.data.error : 'no data from api') 
            } else {
                res(resp.data.apiData);
            }
        })
        .catch(e => rej(e))
    })
}