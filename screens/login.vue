
<template>
  <view class="container">
    <text class="logininfo">LOGIN</text>
    <text class="info">E-mail</text>
    <text-input class="input" v-model="usuario.email" />
    <text class="info">Senha</text>
    <text-input class="input" v-model="usuario.senha" />
    <view class="userbtn2">
      <button class="forgot" title="Esqueci minha senha" @press='goTorecsenha' color="red"></button>
    </view>  
      <view class="userbtn3">
      <button class="newuser" title="cadastro" @press='goTocadastro' color="blue">
      </button>
      <view class="btnlogin">
      <button class="btnlogin" title="Login" color="green" @press="goTologin">
      </button>
    </view>  
  </view>
</template>


<script>
import LoginService from "../services/Login.service";
export default {
    data() {
        return {
            usuario: {
                email: null,
                senha: null,
            }
        }
    },
    props: {
        navigation: { type: Object }
    },
    methods: {
        goTorecsenha() {
            this.navigation.navigate('recsenha');
        },
        goTocadastro() {
            this.navigation.navigate('cadastro');
        },
        goPainel() {
            this.navigation.navigate('painel');
        },
        async goTologin() {
            let resp = await LoginService.postLogin(this.usuario);
            this.verificarLogin(resp);
        },
        verificarLogin(resp) {
            if(resp == true) {
                this.goPainel();
            }else if(resp == false){
                alert("Usuário ou senha inválidos");
            }
        }
    }, 
}
</script>


<style>

.userbtn2 {
  display: flex;
   margin: 10px;
          }

.userbtn3 {
  display: flex;
   margin: 10px;
          }

.btnlogin {
  display: flex;
   margin: 10px;
          }                      

.container {
  background-color: white;
  align-items: center;
           }

.login {
  align-self: flex-start;
  margin: 15px 10px;
       }

.info {
  align-self: flex-start;
  padding: 10px;
  margin: 5px;
  font-size: 20px;
  font-weight: bold;
  font-style: italic;
  color:black;
      }
      
.logininfo {
  margin: 10%;
  font-size: 50px;
  color: black;
  font-style: italic;
  font-weight: bold;
          }

.input {
  width: 90%;
  margin: 10px 10px;
  border-radius: 50px;
  padding: 10px;
  border-width: 4;
         }
</style>