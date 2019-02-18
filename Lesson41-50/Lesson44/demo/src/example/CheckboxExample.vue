<template>
  <div id="app">
    <div class="demo-checkbox">
        <c-checkbox v-model="checked" >备选项</c-checkbox>
    </div>
  </div>
</template>

<script>
import CCheckbox from './../components/CCheckbox.vue'
import CRadioGroup from './../components/CRadioGroup.vue'
import CRadioButton from './../components/CRadioButton.vue'
import CRow from './../components/CRow.vue'

export default {
  name: 'app',
  data(){
    return {
      checked: false,
    }
  },
  components:{
    CCheckbox,
    CRadioGroup,
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
    margin-bottom: 20px;
  }  
}
</style>
