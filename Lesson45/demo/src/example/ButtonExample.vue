<template>
  <div id="app">
    <div class="demo-button">
      <div class="c-row">
        <c-button>默认按钮</c-button>
        <c-button native-type="submit">提交按钮</c-button>
        <c-button native-type="reset">重置按钮</c-button>
      </div>

      <div class="c-row">
        <c-button round>默认按钮</c-button>
        <c-button round size="medium">中等按钮</c-button>
        <c-button round size="small">小型按钮</c-button>
        <c-button round size="mini">超小按钮</c-button>
        <c-button round size="tiny">超微小按钮</c-button>
      </div>

       <div class="c-row">
        <c-button circle icon="c-icon-question"></c-button>
        <c-button type="primary" size="medium" circle icon="c-icon-back"></c-button>
        <c-button type="success" size="small" circle icon="c-icon-success"></c-button>
        <c-button type="info" size="mini" circle icon="c-icon-info"></c-button>
        <c-button type="info" size="tiny" circle icon="c-icon-info"></c-button>
      </div>


      <div class="c-row">
        <c-button @click="handleClickTest">默认按钮</c-button>
        <c-button type="primary">主要按钮</c-button>
        <c-button type="success">成功按钮</c-button>
        <c-button type="info">信息按钮</c-button>
        <c-button type="warning">警告按钮</c-button>
        <c-button autofocus type="danger">危险按钮</c-button>
      </div>

      <div class="c-row">
        <c-button @click="handleClickTest" :loading="loading">默认按钮</c-button>
        <c-button type="primary" :loading="loading">主要按钮</c-button>
        <c-button type="success" :loading="loading">成功按钮</c-button>
        <c-button type="info" :loading="loading">信息按钮</c-button>
        <c-button type="warning" :loading="loading">警告按钮</c-button>
        <c-button type="danger" :loading="loading">危险按钮</c-button>
      </div>

      <div class="c-row">
        <c-button @click="handleClickTest" :loading="loading" icon="c-icon-edit">默认按钮</c-button>
        <c-button type="primary" :loading="loading" icon="c-icon-edit">主要按钮</c-button>
        <c-button type="success"  :loading="loading" icon="c-icon-success">成功按钮</c-button>
        <c-button type="info" icon="c-icon-info">
          信息按钮
          <i class="c-icon-info c-icon--right"></i>
        </c-button>
        <c-button type="warning" icon="c-icon-warn">警告按钮</c-button>
        <c-button type="danger" icon="c-icon-error">危险按钮</c-button>
        <c-button type="danger" icon="c-icon-edit">Edit</c-button>
      </div>

      <div class="c-row">
        <c-button plain>朴素按钮</c-button>
        <c-button type="primary" plain>主要按钮</c-button>
        <c-button type="success" plain>成功按钮</c-button>
        <c-button type="info" plain>信息按钮</c-button>
        <c-button type="warning" plain>警告按钮</c-button>
        <c-button type="danger" plain>危险按钮</c-button>
      </div>
      <div class="c-row">
        <c-button round>圆角按钮</c-button>
        <c-button type="primary" :loading="loading" round>主要按钮</c-button>
        <c-button type="success" :loading="loading" round>成功按钮</c-button>
        <c-button type="info" round>信息按钮</c-button>
        <c-button type="warning" round>警告按钮</c-button>
        <c-button type="danger" round>危险按钮</c-button>
      </div>
      <div class="c-row">
        <c-button circle icon="c-icon-question"></c-button>
        <c-button type="primary" :loading="loading" circle icon="c-icon-back"></c-button>
        <c-button type="success" :loading="loading" circle icon="c-icon-success"></c-button>
        <c-button type="info" circle icon="c-icon-info"></c-button>
        <c-button type="warning" circle icon="c-icon-warning"></c-button>
        <c-button type="danger" circle icon="c-icon-error"></c-button>
      </div>
      <div class="c-row">
        <c-button @click="handleClickTest" disable>默认按钮</c-button>
        <c-button type="primary" disable>主要按钮</c-button>
        <c-button type="success" disable>成功按钮</c-button>
        <c-button type="info" disable>信息按钮</c-button>
        <c-button type="warning" disable>警告按钮</c-button>
        <c-button type="danger" disable>危险按钮</c-button>
      </div>
      <div class="c-row">
        <c-button type="text">默认按钮</c-button>
        <c-button type="text" disable>默认按钮</c-button>
      </div>

      <div class="c-row">

        <c-button-group>
          <c-button type="primary">首页</c-button>
        </c-button-group>

        <c-button-group>
          <c-button type="primary" :loading="loading">上一页</c-button>
          <c-button type="primary" :loading="loading">下一页</c-button>
        </c-button-group>


        <c-button-group>
          <c-button type="info">上一页</c-button>
          <c-button type="info">info</c-button>
          <c-button type="info">下一页</c-button>
        </c-button-group>


        <c-button-group>
          <c-button type="danger">上一页</c-button>
          <c-button type="danger">danger</c-button>
          <c-button type="danger">下一页</c-button>
        </c-button-group>


        <c-button-group>
          <c-button type="warning">上一页</c-button>
          <c-button type="warning">warning</c-button>
          <c-button type="warning">下一页</c-button>
        </c-button-group>


        <c-button-group>
          <c-button>上一页</c-button>
          <c-button>第2页</c-button>
          <c-button>下一页</c-button>
        </c-button-group>

      <c-button-group>
        <c-button type="danger" plain>上一页</c-button>
        <c-button type="danger" plain>danger</c-button>
        <c-button type="danger" plain>下一页</c-button>
      </c-button-group>


      <c-button-group>
        <c-button type="danger" round>上一页</c-button>
        <c-button type="danger" round>danger</c-button>
        <c-button type="danger" round>下一页</c-button>
      </c-button-group>

      
        <c-button-group>
          <c-button type="danger" circle></c-button>
          <c-button type="danger" circle></c-button>
          <c-button type="danger" circle></c-button>
        </c-button-group>
        <c-button-group>
          <c-button type="success">上一页</c-button>
          <c-button type="success">下一页</c-button>
        </c-button-group>
      </div>
    </div>
  </div>
</template>

<script>
import CButton from './../components/CButton.vue'
import CButtonGroup from './../components/CButtonGroup.vue'

export default {
  name: 'ButtonExample',
  data:function(){
    return {
      loading:false,
    }
  },
  components: {
    CButton,
    CButtonGroup,
  },
  methods:{
    handleClickTest:function(event){
      console.log("handleClickTest",event)
      this.loading = !this.loading
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
.demo-button .c-row{
  margin-bottom: 20px;
}
.demo-button .c-button + .c-button{
  margin-left: 10px;
}

.demo-button .c-button-group {
  margin-bottom: 20px;
}

.demo-button .c-button-group + .c-button-group{
  margin-left: 10px;
}
.demo-button .c-button-group .c-button + .c-button {
    margin-left: 0;
}
</style>
