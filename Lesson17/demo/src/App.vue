<template>
  <div id="app">
    <div class="demo-layout">
      <c-row :gutter="20">
        <c-col :span="6"><div class="item bg-purple-light"></div></c-col>
        <c-col :span="6" :offset="0"><div class="item bg-purple"></div></c-col>
      </c-row>
      <c-row :gutter="20">
        <c-col :span="6"><div class="item bg-purple-light"></div></c-col>
        <c-col :span="6" :offset="1"><div class="item bg-purple"></div></c-col>
      </c-row>
      <c-row :gutter="20">
        <c-col :span="6"><div class="item bg-purple-light"></div></c-col>
        <c-col :span="6" :offset="2"><div class="item bg-purple"></div></c-col>
      </c-row>
      <c-row :gutter="20">
        <c-col :span="6"><div class="item bg-purple-light"></div></c-col>
        <c-col :span="6" :offset="3"><div class="item bg-purple"></div></c-col>
      </c-row>
      <c-row :gutter="20">
        <c-col :span="6"><div class="item bg-purple-light"></div></c-col>
        <c-col :span="6" :offset="4"><div class="item bg-purple"></div></c-col>
      </c-row>
      <c-row :gutter="20">
        <c-col :span="6"><div class="item bg-purple-light"></div></c-col>
        <c-col :span="6" :offset="5"><div class="item bg-purple"></div></c-col>
      </c-row>
      <c-row :gutter="20">
        <c-col :span="6"><div class="item bg-purple-light"></div></c-col>
        <c-col :span="6" :offset="6"><div class="item bg-purple"></div></c-col>
      </c-row>
      

      <c-row :gutter="100">
        <c-col :span="12">
          <div class="item bg-purple-light"></div>
        </c-col>
        <c-col :span="12">
          <div class="item bg-purple"></div>
        </c-col>
      </c-row>
      <c-row  :gutter="20">
        <c-col :span="8">
          <div class="item bg-purple-light"></div>
        </c-col>
        <c-col :span="8">
          <div class="item bg-purple"></div>
        </c-col>
        <c-col :span="8">
          <div class="item bg-purple-light"></div>
        </c-col>
      </c-row>
      <c-row>
        <c-col :span="24">
          <div class="item bg-purple-light"></div>
        </c-col>
      </c-row>
      <c-row :gutter="20">
        <c-col :span="12">
          <div class="item bg-purple"></div>
        </c-col>
        <c-col :span="12">
          <div class="item bg-purple-light"></div>
        </c-col>
      </c-row>
      <c-row :gutter="20">
        <c-col :span="8">
          <div class="item bg-purple"></div>
        </c-col>
        <c-col :span="8">
          <div class="item bg-purple-light"></div>
        </c-col>
        <c-col :span="8">
          <div class="item bg-purple"></div>
        </c-col>
      </c-row>
      <c-row :gutter="20">
        <c-col :span="6">
          <div class="item bg-purple-light"></div>
        </c-col>
        <c-col :span="6">
          <div class="item bg-purple"></div>
        </c-col>
        <c-col :span="6">
          <div class="item bg-purple-light"></div>
        </c-col>
        <c-col :span="6">
          <div class="item bg-purple"></div>
        </c-col>
      </c-row>
      <c-row :gutter="20">
        <c-col :span="4">
          <div class="item bg-purple"></div>
        </c-col>
        <c-col :span="4">
          <div class="item bg-purple-light"></div>
        </c-col>
        <c-col :span="4">
          <div class="item bg-purple"></div>
        </c-col>
        <c-col :span="4">
          <div class="item bg-purple-light"></div>
        </c-col>
        <c-col :span="4">
          <div class="item bg-purple"></div>
        </c-col>
        <c-col :span="4">
          <div class="item bg-purple-light"></div>
        </c-col>
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
  .item{
    height:40px;
    background-color: gray;
    border-radius: 4px;
    color:white;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
}


</style>
