<template>
  <view class="container">
    <text class="meusdados">MEUS DADOS</text>
    <text class="datauser">NOME:</text>
    <text-input class="input" v-model="usuario.nome"/>
    <text class="datauser">E-MAIL:</text>
    <text-input class="input" v-model="usuario.email"/>
    <text class="datauser">CELULAR:</text>
    <text-input class="input" v-model="usuario.celular"/>
    <text class="datauser">SEXO:</text>
    <text-input class="input" v-model="usuario.sexo"/>
    <text class="datauser">IDADE:</text>
    <text-input class="input" v-model="usuario.idade"/>
    <view class="databtn1"> 
      <button class="back" title="voltar" color="blue" @press='goTopainel'></button>
    </view>
  </view>
</template>


<script>
import GetUser from "../services/User.service";
export default {
  async mounted() {
    const {usuario} = await GetUser.getDados();
    this.usuario = usuario;
    console.log(this.usuario);

  },
  data() {
    return {
      usuario: {
        nome: null,
        email: null,
        celular: null,
        senha: null,
        idade: null,
        sexo: null,
      },
    };
  },
  props: {
    navigation: { type: Object },
  },
  methods: {
    changeRoute() {
      this.navigation.navigate("Home");
    },

    goTopainel(){
       this.navigation.navigate("painel");
    }
  },
};
</script>


<style>

.databtn1 {
  display: flex;
   margin: 20px;
          }

.container {
  background-color: white;
  align-items: center;
           }

.atualizar {
  align-self: flex-start;
  margin: 15px 10px;
       }

.datauser {
  align-self: flex-start;
  padding: 10px;
  margin: 1px;
  font-size: 15px;
  font-weight: bold;
  font-style: italic;
  color:black;
      }
      
.meusdados {
  margin: 10%;
  font-size: 40px;
  color: black;
  font-style: italic;
  font-weight: bold;
          }

.input {
  width: 90%;
  margin: 1px 10px;
  border-radius: 10px;
  padding: 5px;
  border-width: 4;
       }
</style>