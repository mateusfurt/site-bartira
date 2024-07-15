<template>
    <div class="aulas-container">
      <h2>Disciplinas Ministradas</h2>
      <ul class="disciplinas-list">
        <li>Análise e Projeto de Sistemas</li>
        <li>Banco de Dados</li>
        <li>Computadores e Sociedade</li>
        <li>Construção de Algoritmos</li>
        <li>Dispositivos Semicondutores e Teoria dos Circuitos</li>
        <li>Lógica Matemática Aplicada a Computação</li>
        <li>Metodologia do Trabalho Científico</li>
        <li>Modelos Avançados de Banco de Dados</li>
        <li>Programação Estruturada</li>
        <li>Transmissão de Dados</li>
        <li>Métodos Formais</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Aulas'
  }
  </script>
  
  <style scoped>
  .aulas-container {
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
  
  .disciplinas-list {
    list-style-type: none;
    padding: 0;
  }
  
  .disciplinas-list li {
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 1px;
    transition: background-color 0.3s ease;
  }
  
  .disciplinas-list li:hover {
    background-color: #e6f7ff;
  }
  
  </style>
  