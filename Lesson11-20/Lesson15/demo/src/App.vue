<template>
  <div id="app">
    <div class="demo-layout">
      <c-row>
        <c-col :span="24">A</c-col>
      </c-row>
      <c-row>
        <c-col :span="12">A</c-col>
        <c-col :span="12">B</c-col>
      </c-row>
      <c-row>
        <c-col :span="8">A</c-col>
        <c-col :span="8">A</c-col>
        <c-col :span="8">A</c-col>
      </c-row>
      <c-row>
        <c-col :span="6">A</c-col>
        <c-col :span="6">A</c-col>
        <c-col :span="6">A</c-col>
        <c-col :span="6">A</c-col>
      </c-row>
      <c-row>
        <c-col :span="4">A</c-col>
        <c-col :span="4">A</c-col>
        <c-col :span="4">A</c-col>
        <c-col :span="4">A</c-col>
        <c-col :span="4">A</c-col>
        <c-col :span="4">A</c-col>
      </c-row>
      <c-row>
        <c-col :span="18">A</c-col>
      </c-row>
      <c-row>
        <c-col :span="17">A</c-col>
      </c-row>
      <c-row>
        <c-col :span="16">A</c-col>
      </c-row>
      <c-row>
        <c-col :span="15">A</c-col>
      </c-row>
      <c-row>
        <c-col :span="14">A</c-col>
      </c-row>
      <c-row>
        <c-col :span="13">A</c-col>
      </c-row>
      <c-row>
        <c-col :span="12">A</c-col>
      </c-row>
    </div>
  </div>
</template>

<script>
import CRow from './components/CRow.vue';
import CCol from './components/CCol.vue';

export default {
  name: 'app',
  components:{
    CRow,
    CCol,
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
.demo-layout .c-row{
  margin-bottom: 10px;
}
.demo-layout .c-col {
  height:30px;
  background-color: gray;
  border:solid 1px rgb(38, 22, 143);
  border-radius: 2px;
  color:white;
}

</style>
