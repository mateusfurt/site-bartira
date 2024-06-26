<template>
    <div class="formacao-container">
      <h2>Formação Acadêmica e Áreas de Interesse</h2>
      
      <div class="formacao-interesse">
        <!-- Lista de Formações Acadêmicas -->
        <div class="formacao-list">
          <h3>Formação Acadêmica</h3>
          <ul>
            <li>
              <h4>Doutorado em Sistemas e Computação</h4>
              <p><strong>Universidade Federal do Rio Grande do Norte, UFRN, Brasil</strong></p>
              <p><em>Título:</em> Um Modelo Semântico de Dados para Cidades Inteligentes</p>
              <p><em>Ano de obtenção:</em> 2020</p>
              <p><em>Orientador:</em> Thais Vasconcelos Batista</p>
            </li>
            <li>
              <h4>Mestrado em Sistemas e Computação</h4>
              <p><strong>Universidade Federal do Rio Grande do Norte, UFRN, Brasil</strong></p>
              <p><em>Título:</em> A Linguagem de Descrição de Arquiteturas ZCLcsp</p>
              <p><em>Ano de obtenção:</em> 2000</p>
              <p><em>Orientador:</em> David Boris Paul Déharbe</p>
            </li>
            <li>
              <h4>Graduação em Ciências da Computação</h4>
              <p><strong>Universidade Federal do Rio Grande do Norte, UFRN, Brasil</strong></p>
              <p><em>Período:</em> 1993 - 1998</p>
            </li>
          </ul>
        </div>
        
        <!-- Lista de Áreas de Interesse -->
        <div class="interesse-list">
          <h3>Áreas de Interesse</h3>
          <ul>
            <li>Engenharia de Software</li>
            <li>Análise de Sistemas</li>
            <li>Sistemas Embarcados</li>
            <li>Métodos Formais</li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Formacao'
  }
  </script>
  
  <style scoped>
  .formacao-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
    line-height: 1.6;
  }
  
  h2 {
    text-align: center;
    color: #333;
    margin-bottom: 20px;
  }
  
  .formacao-interesse {
    display: flex;
    justify-content: space-between;
    gap: 50px;
  }
  
  .formacao-list, .interesse-list {
    flex: 1;
  }
  
  .formacao-list h3, .interesse-list h3 {
    color: #007bff;
    margin-top: 0;
  }
  
  .formacao-list ul, .interesse-list ul {
    list-style-type: none;
    padding: 0;
  }
  
  .formacao-list li, .interesse-list li {
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 15px;
    margin-bottom: 15px;
  }
  
  .formacao-list li h4 {
    margin-top: 0;
  }
  
  .interesse-list li {
    margin-bottom: 10px;
  }
  
  </style>
  