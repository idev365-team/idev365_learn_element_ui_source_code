<template>
  <div id="app">
    <div class="demo-checkbox">
        <c-row>
          <c-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleAllCheck">全选</c-checkbox>
        </c-row>
        <c-checkbox-group v-model="checkList" @change="handleCheckList">
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

const checkListOptions = ['A','B','C']

export default {
  name: 'app',
  data(){
    return {
      isIndeterminate:true,
      checkAll:true,
      checked: false,
      checkList: ['A','C']
    }
  },
  methods:{
    handleAllCheck(val){
      console.log("handleAllCheck->",val)
      this.isIndeterminate = false;
      this.checkList = val?[...checkListOptions]:[]
    },
    handleCheckList(val){
      console.log("handleCheckList",val)
      this.checkAll=val.length===checkListOptions.length
      this.isIndeterminate =val.length<checkListOptions.length && val.length>0
    }
  },
  components:{
    CCheckbox,
    CCheckboxGroup,
    CRadioButton,
    CRow,
  },

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
  .c-row{
    margin-bottom: 20px;
  }
  .c-checkbox-group{
    display: block;
    margin-bottom: 20px;
  }  
}
</style>
