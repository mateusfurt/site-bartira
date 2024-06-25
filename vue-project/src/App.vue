<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <main>

    <header class="flex">
    
      <div class="cartao">
        <h1 class="nomecartao">Bartira Rocha</h1>
        <h3 class="profissao">Professora de Ciência da Computação</h3>
        <div class="basecartao flex">
          <div>
            <h3>Contato:</h3>
            <a href="mailto:bartirarocha@uern.br" target="_blank" class="linkcartao">bartirarocha@uern.br</a>
            <a href=""></a>
          </div>
          <div>
            <h3>Instituição:</h3>
            <a href="https://www.uern.br"target="_blank" class="linkcartao">UERN-NATAL</a>
  
          </div>
        </div>
        
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
  margin: 60px;
}
h3{
  font-size: 23px;
}
.basecartao{
  gap: 480px;
}
.linkcartao{
  text-decoration: none;
  font-size: 18px;
}
.profissao{
  text-shadow: 7px 7px 5px rgba(0, 0, 0, 0.1);
  font-size: 30px;
  font-weight: lighter;

  color: rgb(0, 0, 49);
}
.nomecartao{
  font-family:  'Times New Roman', Times, serif;
  font-size: 3em;
  font-weight: lighter;
  text-transform: uppercase;
  color: rgb(0, 0, 0);
  text-shadow: 7px 7px 5px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}
.foto{
  margin-left: 30px;
  width: 400px; /* Largura do contêiner */
  height: 525px; /* Altura do contêiner */
  overflow: hidden; /* Esconde partes da imagem que excedem o contêiner */
  position: relative;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);

}
.foto img{
  width: 500px;
  height: 525px;
  position: absolute; /* Ajusta a posição vertical da imagem */
  left: -50px; /* Ajusta a posição horizontal da imagem */
}
.cartao{
  font-family: 'Times New Roman', Times, serif;
  text-align: left;
  padding-left: 40px;
  background-color: rgb(255, 255, 255);
  width: 800px;
  height: 340px;
  position: absolute;
  top: 170px;  /* Ajuste conforme necessário */
  left: 440px; /* Ajuste conforme necessário */
  z-index: 10; /* Garante que este componente esteja sobreposto */
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
}
.flex{
  display: flex;
}
</style>
