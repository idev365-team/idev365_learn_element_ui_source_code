<template>
  <div id="app">
    <div class="demo-input-number">
      <h1>{{count}}</h1>
      <c-row>
        <c-input-number disabled controls-position="right" v-model="count1" :min="0" :max="10" :precision="2" :step="1"></c-input-number>
      </c-row>


      <c-row>
        <c-input-number controls-position="right" v-model="count1" :min="0" :max="10" :precision="2" :step="1"></c-input-number>
      </c-row>

      <c-row>
        <c-input-number controls-position="right" v-model="count1" :precision="2" :step="0.1"></c-input-number>
      </c-row>

      <c-row>
        <c-input-number v-model="count1" :precision="2" :step="0.1"></c-input-number>
        <c-input-number v-model="count1" size="medium" :precision="2" :step="0.1"></c-input-number>
        <c-input-number v-model="count1" size="small" :precision="2" :step="0.1"></c-input-number>
        <c-input-number v-model="count1" size="mini" :precision="2" :step="0.1"></c-input-number>
      </c-row>

      <c-row>
        <c-input-number v-model="count1" :precision="2" :step="0.1"></c-input-number>
      </c-row>

      <c-row>
        <c-input-number v-model="count2" :step="2" :min="1" :max="10" label="描述文字"></c-input-number>
      </c-row>
      
      <c-row>
        <c-input-number v-model="count3"  :step="3" :min="1" :max="10" label="描述文字"></c-input-number>
      </c-row>

      <c-row>
        <c-input-number :disabled="true" v-model="count4" label="描述文字"></c-input-number>
      </c-row>
    
      <c-row>
        <c-input-number v-model="count4" :min="999" :max="-999" label="描述文字"></c-input-number>
      </c-row>

      <c-row>
        <c-input-number v-model="count4" :min="1" :max="10" label="描述文字"></c-input-number>
      </c-row>

      <c-row>
        <c-input-number v-model="count4" label="描述文字"></c-input-number>
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
      count1:1,
      count2:1,
      count3:1,
      count4:1,
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
  .c-input-number{
    margin-right:10px;
  }
}
</style>
