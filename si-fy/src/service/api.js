import axios from 'axios'

//client_id = d935470596ca42b780f901044ec5d075
//client_secret = 1709329b6f374b308fb32bb3e27bfde4
class Api {
    constructor() {
        const apiToken = axios.create({
            baseURL: 'https://accounts.spotify.com/api',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ZDkzNTQ3MDU5NmNhNDJiNzgwZjkwMTA0NGVjNWQwNzU6MTcwOTMyOWI2ZjM3NGIzMDhmYjMyYmIzZTI3YmZkZTQ='
            }
        });
        this.login = function (token) {
            const params = `grant_type=authorization_code&code=${token}&redirect_uri=http://localhost:8080/callback`;
            return apiToken.post('/token', params);
        };
        this.getToken = function (token) {
            const params = `grant_type=refresh_token&refresh_token=${token}&redirect_uri=http://localhost:8080/callback`;
            return apiToken.post('/token', params);
        };
        this.search = function (token) {
            return axios.create({
                baseURL: 'https://api.spotify.com/v1',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
        };
    }
}

export default Api;