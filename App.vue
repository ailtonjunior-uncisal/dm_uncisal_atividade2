<template>
  <app-navigator></app-navigator>
</template>

<script>
console.disableYellowBox = true;
import {createAppContainer, createStackNavigator} from "vue-native-router";
import loginScreen from "./screens/login";
import cadastroScreen from "./screens/cadastro";
import meusdadosScreen from "./screens/meusdados";
import recsenhaScreen from "./screens/recsenha";
import painelScreen from "./screens/painel";


const StackNavigator = createStackNavigator(
  {
    login: loginScreen,
    cadastro: cadastroScreen,
    meusdados: meusdadosScreen,
    recsenha: recsenhaScreen,
    painel: painelScreen

  },
  {
    initialRouteName: 'login',
  }
);

const AppNavigator = createAppContainer(StackNavigator);

export default {
  components: { AppNavigator },
}
</script>