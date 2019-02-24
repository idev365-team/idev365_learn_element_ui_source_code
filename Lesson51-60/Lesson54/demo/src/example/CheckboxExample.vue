<template>
  <div id="app">
    <div class="demo-checkbox">
        <c-row>
        <c-checkbox border v-model="checked" >默认大小</c-checkbox>
        <c-checkbox border v-model="checked" size="medium">中等大小</c-checkbox>
        <c-checkbox border v-model="checked" size="small">小型复选框</c-checkbox>
        <c-checkbox border v-model="checked" size="mini">超小复选框</c-checkbox>
        <c-checkbox border v-model="checked" disabled>备选项</c-checkbox>
        <c-checkbox border v-model="checked" >备选项</c-checkbox>
        </c-row>

        <c-checkbox-group v-model="checkNumbers" :min="1" :max="2">
          <c-checkbox-button label="1"></c-checkbox-button>
          <c-checkbox-button label="2"></c-checkbox-button>
          <c-checkbox-button label="3"></c-checkbox-button>
          <c-checkbox-button label="4"></c-checkbox-button>
        </c-checkbox-group>
        
        <c-checkbox-group v-model="checkNumbers" :min="1" :max="2">
          <c-checkbox label="1"></c-checkbox>
          <c-checkbox label="2"></c-checkbox>
          <c-checkbox label="3"></c-checkbox>
          <c-checkbox label="4"></c-checkbox>
        </c-checkbox-group>

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
import CCheckboxButton from './../components/CCheckboxButton.vue'
import CRow from './../components/CRow.vue'

const checkListOptions = ['A','B','C']

export default {
  name: 'app',
  data(){
    return {
      isIndeterminate:true,
      checkAll:true,
      checked: false,
      checkList: ['A','C'],
      checkNumbers:['1','2'],
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
    CCheckboxButton,
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
