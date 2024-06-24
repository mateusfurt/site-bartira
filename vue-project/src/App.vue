<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <main>

    <header class="flex">
    
      <div class="cartao">
        <h1>Bartira Rocha</h1>
        <p>Professora da UERN-NATAL</p>
      </div>   
      <div class="foto">
        <img src="@/assets/fotobartira.gif" alt="logo">
      </div>
    </header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  
    <RouterView />
    
  </main>
  
</template>

<style scoped>
main{
  margin: 5%;
}
.foto{
  width: 400px; /* Largura do contêiner */
  height: 525px; /* Altura do contêiner */
  overflow: hidden; /* Esconde partes da imagem que excedem o contêiner */
  position: relative;

}
.foto img{
  width: 500px;
  height: 525px;
  position: absolute; /* Ajusta a posição vertical da imagem */
  left: -50px; /* Ajusta a posição horizontal da imagem */
}
.cartao{
  font-family: 'Times New Roman', Times, serif;
  text-align: center;
  background-color: rgb(255, 255, 255);
  width: 60%;
  height: 360px;
  position: absolute;
  top: 155px;  /* Ajuste conforme necessário */
  left: 32%; /* Ajuste conforme necessário */
  z-index: 10; /* Garante que este componente esteja sobreposto */
}
.flex{
  display: flex;
}
</style>
