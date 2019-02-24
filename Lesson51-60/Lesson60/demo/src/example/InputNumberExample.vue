<template>
  <div id="app">
    <div class="demo-input">
      <h1>{{count}}</h1>

      <c-row>
        <c-input-number v-model="count" :min="1" :max="10" label="描述文字"></c-input-number>
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
