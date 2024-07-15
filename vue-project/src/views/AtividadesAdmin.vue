<template>
  <div class="adm-container">
    <div class="adm">
      <div class="adm-list">
        <ul>
          <li>
            <h4>Lorem ipsum</h4>
            <p><strong>Universidade do Estado do Rio Grande do Norte, UERN, Brasil</strong></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            <p><em>Ano de atuação:</em> 2022</p>
          </li>
          <li>
            <h4>Lorem ipsum</h4>
            <p><strong>Universidade do Estado do Rio Grande do Norte, UERN, Brasil</strong></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            <p><em>Ano de atuação:</em> 2020</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AtividadesAdmin'
}
</script>
<style scoped>
.adm-container {
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

.adm {
  display: flex;
  justify-content: space-between;
  gap: 50px;
}

.adm-list,
.interesse-list {
  flex: 1;
}

.adm-list h3,
.interesse-list h3 {
  color: #007bff;
  margin-top: 0;
}

.adm-list ul,
.interesse-list ul {
  list-style-type: none;
  padding: 0;
}

.adm-list li,
.interesse-list li {
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 15px;
  margin-bottom: 10px;
}

.adm-list li h4 {
  margin-top: 0;
}

.interesse-list li {
  margin-bottom: 1px;
}
</style>