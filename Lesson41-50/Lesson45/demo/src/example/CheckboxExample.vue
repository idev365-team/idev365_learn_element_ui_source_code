<template>
  <div id="app">
    <div class="demo-checkbox">

        <c-checkbox-group v-model="checkList">
          <c-checkbox label="A"></c-checkbox>
          <c-checkbox label="B"></c-checkbox>
          <c-checkbox label="C"></c-checkbox>
        </c-checkbox-group>
        <c-checkbox v-model="checked" >备选项</c-checkbox>
        <c-checkbox v-model="checked" disabled>备选项</c-checkbox>
        <c-checkbox v-model="checked" >备选项</c-checkbox>
    </div>
  </div>
</template>

<script>
import CCheckbox from './../components/CCheckbox.vue'
import CCheckboxGroup from './../components/CCheckboxGroup.vue'
import CRadioButton from './../components/CRadioButton.vue'
import CRow from './../components/CRow.vue'

export default {
  name: 'app',
  data(){
    return {
      checked: false,
      checkList: ['A','C']
    }
  },
  components:{
    CCheckbox,
    CCheckboxGroup,
    CRadioButton,
    CRow,
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

.demo-checkbox{
  .c-checkbox-group{
    display: block;
    margin-bottom: 20px;
  }  
}
</style>
