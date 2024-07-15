<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <main>

    <header class="flex">
    
      <div class="cartao">
        <h1 class="nomecartao">Dra. Bartira Rocha</h1>
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
      <RouterLink to="/formacao">Formação/Áreas de Interesse</RouterLink>
      <RouterLink to="/aulas">Aulas</RouterLink>
      <RouterLink to="/projetos">Projetos</RouterLink>
      <RouterLink to="/atividades-admin">Atividades Administrativas</RouterLink>
    </nav>
  
    <RouterView />
    
  </main>
  
</template>

<style scoped>
main{

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  
}
header{
  margin: 0px;
  padding: 0px;
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

  color: rgb(0, 0, 0);
  text-shadow: 7px 7px 5px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

.foto img{
  width: 500px;
  height: 525px;
  position: relative; /* Ajusta a posição vertical da imagem */
  left: -50px; /* Ajusta a posição horizontal da imagem */
}
.foto{
  width: 400px; /* Largura do contêiner */
  height: 525px; /* Altura do contêiner */
  overflow: hidden; /* Esconde partes da imagem que excedem o contêiner */
  position: relative;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
  left: -840px;
}
.cartao{
  font-family: 'Times New Roman', Times, serif;
  text-align: left;
  padding-left: 40px;
  background-color: rgb(255, 255, 255);
  width: 830px;
  height: 340px;
  position: relative;
  top: 130px;  /* Ajuste conforme necessário */
  left: 400px; /* Ajuste conforme necessário */
  z-index: 10; /* Garante que este componente esteja sobreposto */
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
}
nav {
  background-color: #007bff; /* Azul suave */
  border-radius: 5px;
  font-size: 14px; /* Aumentei um pouco o tamanho da fonte para melhor legibilidade */
  text-align: center;
  margin-top: 2rem;
  display: flex;
  gap: 20px;


}

nav a {
  display: inline-block;
  padding: 10px 20px;
  border-radius: 5px;
  color: white;
  background-color: #007bff; /* Azul suave */
  text-decoration: none;
  transition: background-color 0.3s ease;
}

nav a:hover {
  background-color: #0056b3; /* Tom mais escuro de azul no hover */
}

nav a.router-link-exact-active {
  background-color: #0056b3; /* Tom mais escuro de azul para o link ativo */
}

nav a.router-link-exact-active:hover {
  background-color: #007bff; /* Mantém o azul suave no hover quando ativo */
}
.flex{
  display: flex;
}
</style>
