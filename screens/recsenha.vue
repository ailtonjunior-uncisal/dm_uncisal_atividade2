
<template>
  <view class="container">
    <text class="recsenha">RECUPERAR SENHA</text>
    <text class="mail">E-MAIL:</text>
    <text-input class="input" v-model="usuario.email"/>
    <view class="userbtn1"> 
      <button class="recuperar" title="RECUPERAR SENHA" color="green"></button>
    </view>
    <view class="userbtn2">
      <button class="back" title="voltar" @press='goTologin' color="blue"> </button>
    </view>
</template>


<script>
export default {

  props: {
    navigation: {
      type: Object
    }
  },

  data() {
    return {
      usuario: {
        nome: "Rony",
        celular: "8298807555",
        email: "userdemo@demo.com.br",
        senha: "123456",
               }
    };
  },

 methods :{
   goTologin(){
       this.navigation.navigate("login");
    }
  }
  };
</script>


<style>

.userbtn1 {
  display: flex;
   margin: 10px;
          }

.userbtn2 {
  display: flex;
   margin: 10px;
          }

.container {
   
  background-color: white;
  align-items: center;
           }

.recuperar {
  align-self: flex-start;
  margin: 15px 10px;
       }

.mail {
  align-self: flex-start;
  padding: 10px;
  margin: 15px;
  font-size: 20px;
  font-weight: bold;
  font-style: italic;
  color:black;
      }
      
.recsenha {
  align-self: flex-start;
  margin: 10%;
  font-size: 35px;
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