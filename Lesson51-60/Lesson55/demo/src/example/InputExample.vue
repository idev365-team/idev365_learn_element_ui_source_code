<template>
  <div id="app">
    <div class="demo-input">
      <h1>{{input}}</h1>

      <c-row>
        <c-input 
            v-model="input" 
            placeholder="请输入内容"
            type="textarea"
            :rows="2"
          />
      </c-row>

      <c-row>
        <c-input 
            v-model="input" 
            placeholder="请输入内容"
            type="textarea"
          />
      </c-row>

      <c-row>
        <c-input 
            v-model="input" 
            placeholder="请输入内容"
            prefix-icon="c-icon-search"
          />
      </c-row>


      <c-row>
        <c-input 
            v-model="input" 
            placeholder="请输入日期"
            suffix-icon="c-icon-date"
          />
      </c-row>

      <c-row>
        <c-input 
            v-model="input" 
            placeholder="请输入内容"
            clearable
            prefix-icon="c-icon-date"
        >
           <i slot="prefix" class="c-input__icon c-icon-search"></i>
        </c-input>
      </c-row>


      <c-row>
        <c-input 
            v-model="input" 
            placeholder="请输入日期"
            suffix-icon="c-icon-search"
            clearable
        >
        <i slot="suffix" class="c-input__icon c-icon-date"></i>
        </c-input>
      </c-row>
      <c-row>
        <c-input 
            v-model="input" 
            placeholder="请输入内容"
            clearable
          />
      </c-row>
      <c-row>
        <c-input v-model="input" placeholder="请输入内容" @input="handleChangeInput"/>
      </c-row>
      <c-row>
        <c-input disabled v-model="input" placeholder="请输入内容"/>
      </c-row>
    </div>
  </div>
</template>

<script>
import CInput from './../components/CInput.vue'
import CRow from './../components/CRow.vue'

export default {
  name: 'InputExample',
  data:function(){
    return {
      input:"",
    }
  },
  components: {
    CInput,
    CRow,
  },
  methods:{
    handleChangeInput:function(val){
      console.log("handleChangeInput-->",val)
    }
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
.demo-input{
  .c-row{
    margin-bottom: 20px;
  }
  .c-input,.c-textarea{
    width:300px;
  }
}
</style>
