<template>
  <div id="app">
    <div class="demo-button">
      <c-button >默认按钮</c-button>
      <c-button type="primary">主要按钮</c-button>
      <c-button type="success">成功按钮</c-button>
      <c-button type="info">信息按钮</c-button>
      <c-button type="warning">警告按钮</c-button>
      <c-button type="danger">危险按钮</c-button>
    </div>
  </div>
</template>

<script>
import CButton from './components/CButton.vue'

export default {
  name: 'app',
  components: {
    CButton
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.demo-button .c-button + .c-button{
  margin-left: 10px;
}
</style>
