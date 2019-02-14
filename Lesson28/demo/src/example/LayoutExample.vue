<template>
  <div id="app">
    <div class="demo-layout">


      <c-row tag="h1" :gutter="20" class="bg-purple-dark">
        <c-col tag="a" :span="6" :push="2"><div class="item bg-purple-light"></div></c-col>
        <c-col :span="6" :offset="0"><div class="item bg-purple"></div></c-col>
      </c-row>

      <c-row :gutter="20" class="bg-purple-dark">
        <c-col :span="6"><div class="item bg-purple-light"></div></c-col>
        <c-col :span="6" :pull="2" :offset="0"><div class="item bg-purple"></div></c-col>
      </c-row>

      <c-row :gutter="20" class="bg-purple-dark">
        <c-col :xs="{span:3,offset:12}" :sm="{span:6,offset:6}" :md="{span:3,offset:0}" :lg="{span:12,offset:0}"  :xl="{span:20,offset:0}"   :span="6"><div class="item bg-purple-light"></div></c-col>
        <c-col :xs="{span:3,offset:0}" :sm="{span:6,offset:6}" :md="{span:9,offset:0}" :lg="{span:12,offset:0}" :xl="{span:4,offset:0}"  :span="6" :offset="0"><div class="item bg-purple"></div></c-col>
      </c-row>


      <c-row :gutter="20" class="bg-purple-dark">
        <c-col :xs="3" :sm="9" :md="12" :lg="1"  :xl="20"   :span="6"><div class="item bg-purple-light"></div></c-col>
        <c-col :xs="9" :sm="3" :md="12" :lg="11" :xl="4"  :span="6" :offset="0"><div class="item bg-purple"></div></c-col>
      </c-row>

      <c-row :gutter="20" type="flex" justify="stretch" class="bg-purple-dark">
        <c-col :span="6"><div class="item bg-purple-light"></div></c-col>
        <c-col :span="6" :offset="0"><div class="item bg-purple"></div></c-col>
      </c-row>
      <c-row :gutter="20" type="flex" justify="center" class="bg-purple-dark">
        <c-col :span="6"><div class="item bg-purple-light"></div></c-col>
        <c-col :span="6" :offset="0"><div class="item bg-purple"></div></c-col>
      </c-row>
      <c-row :gutter="20" type="flex" justify="end" class="bg-purple-dark">
        <c-col :span="6"><div class="item bg-purple-light"></div></c-col>
        <c-col :span="6" :offset="0"><div class="item bg-purple"></div></c-col>
      </c-row>
      <c-row :gutter="20" type="flex" justify="space-between" class="bg-purple-dark">
        <c-col :span="6"><div class="item bg-purple-light"></div></c-col>
        <c-col :span="6" :offset="0"><div class="item bg-purple"></div></c-col>
      </c-row>
      <c-row :gutter="20" type="flex" justify="space-around" class="bg-purple-dark">
        <c-col :span="6"><div class="item bg-purple-light"></div></c-col>
        <c-col :span="6" :offset="0"><div class="item bg-purple"></div></c-col>
      </c-row>
      <c-row :gutter="20" type="flex" justify="space-evenly" class="bg-purple-dark">
        <c-col :span="6"><div class="item bg-purple-light"></div></c-col>
        <c-col :span="6" :offset="0"><div class="item bg-purple"></div></c-col>
      </c-row>


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
.demo-layout{
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
.demo-layout .c-row{
  margin-bottom: 10px;
  padding: 10px 0;
}
.demo-layout .c-col {
  .item{
    height:40px;
    border-radius: 4px;
    color:white;
  }
  
}


</style>
