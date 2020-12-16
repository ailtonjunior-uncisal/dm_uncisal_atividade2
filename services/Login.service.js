const axios = require('axios');
export default class LoginService {
    static async postLogin(usuario){
        const {status} = await axios.post('https://us-central1-uncisal.cloudfunctions.net/users-login', {
            usuario: {
                email: usuario.email,
                senha: usuario.senha,
            }
        })

        if(status === 200) {
            return true;
        } else {
             return false;
        }

    }
}