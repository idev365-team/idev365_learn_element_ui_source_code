<template>
  <div id="app">
    <div class="demo-button">
      <div class="c-row">
        <c-button >默认按钮</c-button>
        <c-button type="primary">主要按钮</c-button>
        <c-button type="success">成功按钮</c-button>
        <c-button type="info">信息按钮</c-button>
        <c-button type="warning">警告按钮</c-button>
        <c-button type="danger">危险按钮</c-button>
      </div>
      <div class="c-row">
        <c-button plain>朴素按钮</c-button>
        <c-button type="primary" plain>主要按钮</c-button>
        <c-button type="success" plain>成功按钮</c-button>
        <c-button type="info" plain>信息按钮</c-button>
        <c-button type="warning" plain>警告按钮</c-button>
        <c-button type="danger" plain>危险按钮</c-button>
      </div>
      <div class="c-row">
        <c-button round>圆角按钮</c-button>
        <c-button type="primary" round>主要按钮</c-button>
        <c-button type="success" round>成功按钮</c-button>
        <c-button type="info" round>信息按钮</c-button>
        <c-button type="warning" round>警告按钮</c-button>
        <c-button type="danger" round>危险按钮</c-button>
      </div>
      <div class="c-row">
        <c-button circle></c-button>
        <c-button type="primary" circle></c-button>
        <c-button type="success" circle></c-button>
        <c-button type="info" circle></c-button>
        <c-button type="warning" circle></c-button>
        <c-button type="danger" circle></c-button>
      </div>
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
  // text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.demo-button .c-row{
  margin-bottom: 20px;
}
.demo-button .c-button + .c-button{
  margin-left: 10px;
}
</style>
