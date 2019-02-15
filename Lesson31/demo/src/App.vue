<template>
  <div id="app">
    <div class="demo-radio">
       <div>
        <h1>单选按钮组：{{radioGroup}}</h1>
        <c-radio-group v-model="radioGroup">
          <c-row>
            <c-radio label="1">备选项</c-radio>
            <c-radio label="2">备选项</c-radio>
          </c-row>
        </c-radio-group>
      </div>
      <div>
        <h1>单选一：{{radio}}</h1>
        <c-radio disabled v-model="radio" label="1">备选项</c-radio>
        <c-radio disabled v-model="radio" label="2">备选项</c-radio>
      </div>
      <div>
        <h1>单选一：{{radio}}</h1>
        <c-radio v-model="radio" label="1">备选项</c-radio>
        <c-radio v-model="radio" label="2">备选项</c-radio>
      </div>
      <div>
        <h1>单选二：{{radio2}}</h1>
        <c-radio v-model="radio2" label="1">备选项</c-radio>
        <c-radio v-model="radio2" label="2">备选项</c-radio>
      </div>
    </div>
  </div>
</template>

<script>
import CRadio from './components/CRadio.vue'
import CRadioGroup from './components/CRadioGroup.vue'
import CRow from './components/CRow.vue'

export default {
  name: 'app',
  data(){
    return {
      radio:'1',
      radio2:'1',
      radioGroup:"1",
    }
  },
  components:{
    CRadio,
    CRadioGroup,
    CRow,
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

.demo-radio{
  
}
</style>
