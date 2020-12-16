<template>
  <view class="container">
    <text class="cadastro">CADASTRO</text>
    <text class="caduser">NOME:</text>
    <text-input class="input" v-model="usuario.nome"/>
    <text class="caduser">E-MAIL:</text>
    <text-input class="input" v-model="usuario.email"/>
    <text class="caduser">SENHA:</text>
    <text-input class="input" v-model="usuario.senha"/>
    <text class="caduser">CELULAR:</text>
    <text-input class="input" v-model="usuario.celular"/>
    <view class="cadbtn1"> 
      <button class="cadastrar" title="cadastrar" @press='goTocadUser' color="green"></button>
    </view>
    <view class="cadbtn2">
      <button class="back" title="voltar" @press='goTologin' color="blue"> </button>
    </view>
  </view>
</template>


<script>
import DataService from "../services/Data.service";

export default {
    data() {
        return {
        usuario: {
            nome: null,
            email: null,
            senha: null,
            celular: null,
        },
        }
    },
    props: {
        navigation: { type: Object }
    },
    methods: {

      goTologin() {
            this.navigation.navigate('login');
        },        
        
        async goTocadUser() {
            const resp = await DataService.postCadastro(this.usuario);
            console.log(resp);

            if(resp == true) {
                alert("Usuário cadastrado com sucesso!");
            }else if(resp != true){
                alert("Todos os campos precisam ser preenchidos!");
                
                }
            }
        },

                 
        
    }    

</script>


<style>

.cadbtn1 {
  display: flex;
   margin: 20px;
          }

.cadbtn2 {
  display: flex;
   margin: 8px;
          }

.container {
  background-color: white;
  align-items: center;
           }

.cadastrar {
  align-self: flex-start;
  margin: 10px;
       }

.caduser {
  align-self: flex-start;
  padding: 5px;
  margin: 2px;
  font-size: 20px;
  font-weight: bold;
  font-style: italic;
  color:black;
      }
      
.cadastro {
  margin: 10%;
  font-size: 40px;
  color: black;
  font-style: italic;
  font-weight: bold;
          }

.input {
  width: 90%;
  margin: 6px 10px;
  border-radius: 10px;
  padding: 5px;
  border-width: 4;
       }
</style>