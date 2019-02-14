<template>
  <div id="app">
    <div class="demo-container">
      <c-container>
        <c-header>Header</c-header>
        <c-main>Main</c-main>
      </c-container>

      <c-container>
        <c-header>Header</c-header>
        <c-main>Main</c-main>
        <c-footer>Footer</c-footer>
      </c-container>

    </div>
  </div>
</template>

<script>
import CContainer from './components/CContainer.vue';
import CHeader from './components/CHeader.vue';
import CMain from './components/CMain.vue';
import CFooter from './components/CFooter.vue';
import CAside from './components/CAside.vue';

export default {
  name: 'app',
  components:{
    CContainer,
    CHeader,
    CMain,
    CFooter,
    CAside,
  }
}
</script>

<style lang="scss">
html{
  // background-color: gray;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.demo-container{
  .c-container {
    margin-bottom: 40px;
  }

  .c-header, .c-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .c-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .c-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;

  }
  
}
</style>
