<template>
  <view class="container">
    <text class="painel">SEJA BEM VINDO</text>
    <view class="panbtn1">
        <button class="meusdados" title="meus dados" @press='goTomeusdados' color="green"> </button>
    </view>
    <view class="panbtn2">
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
      
         };
  },

 methods :{
   goTologin(){
       this.navigation.navigate("login");
    },

    goTomeusdados(){
       this.navigation.navigate("meusdados");
    }
  }
  };
</script>


<style>

.panbtn1 {
  display: flex;
   margin: 10px;
        }          

.panbtn2 {
  display: flex;
   margin: 10px;
          }
.back {
  display: flex;
   margin: 10px;
          }          

.container {
   
  background-color: white;
  align-items: center;
           }

.meusdados {
  align-self: flex-start;
  margin: 15px 10px;
       }

     
.painel {
  align-self: flex-start;
  margin: 16%;
  font-size: 35px;
  color: black;
  font-style: italic;
  font-weight: bold;
          }


</style>