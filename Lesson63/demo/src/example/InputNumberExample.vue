<template>
  <div id="app">
    <div class="demo-input-number">
      <h1>{{count}}</h1>


      <c-row>
        <c-input-number v-model="count" :step="2" :min="1" :max="10" label="描述文字"></c-input-number>
      </c-row>
      
      <c-row>
        <c-input-number v-model="count"  :step="3" :min="1" :max="10" label="描述文字"></c-input-number>
      </c-row>

      <c-row>
        <c-input-number :disabled="true" v-model="count" label="描述文字"></c-input-number>
      </c-row>
    
      <c-row>
        <c-input-number v-model="count" :min="999" :max="-999" label="描述文字"></c-input-number>
      </c-row>

      <c-row>
        <c-input-number v-model="count" :min="1" :max="10" label="描述文字"></c-input-number>
      </c-row>

      <c-row>
        <c-input-number v-model="count" label="描述文字"></c-input-number>
      </c-row>

    </div>
  </div>
</template>

<script>
import CInputNumber from './../components/CInputNumber.vue'
import CRow from './../components/CRow.vue'
import CButton from './../components/CButton.vue'

export default {
  name: 'InputNumberExample',
  data:function(){
    return {
      count:1,
    }
  },
  components: {
    CInputNumber,
    CRow,
    CButton,
  },
  methods:{

  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.demo-input-number{
  .c-row{
    margin-bottom: 20px;
  }
}
</style>
