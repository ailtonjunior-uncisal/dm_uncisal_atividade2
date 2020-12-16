const axios = require('axios');
export default class DataService {
    static async postCadastro(usuario){
            const {status} = await axios.post('https://us-central1-uncisal.cloudfunctions.net/users-create', {
            usuario: {
                nome: usuario.nome,
                celular: usuario.celular,
                email: usuario.email,
                senha: usuario.senha,
            }
        })

        if(status == 200) {
             return true;
        }else if(status != 200) {
             return false;
        }
    }
}