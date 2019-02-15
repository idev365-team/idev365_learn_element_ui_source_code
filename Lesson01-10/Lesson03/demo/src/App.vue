<template>
  <div id="app">
    <div class="demo-button">
      <el-row>
        <el-button-group >
          <el-button :loading="loading" size="medium">默认按钮</el-button>
          <el-button type="primary"  :loading="loading" size="medium">主要按钮</el-button>
        </el-button-group>

        <el-button-group>
          <el-button type="success" :loading="loading">成功按钮</el-button>
          <el-button type="info" :loading="loading">信息按钮</el-button>
        </el-button-group>
        <el-button-group>
          <el-button type="warning" :loading="loading">警告按钮</el-button>
          <el-button type="danger" :loading="loading">危险按钮</el-button>

        </el-button-group>
      </el-row>

      <el-row>
        <el-button native-type="button" plain :loading="loading" >朴素按钮</el-button>
        <el-button native-type="reset" type="primary"  plain size="medium">主要按钮</el-button>
        <el-button native-type="submit" type="success" plain size="small">成功按钮</el-button>
        <el-button type="info" plain size="mini">信息按钮</el-button>
        <el-button type="warning" plain>警告按钮</el-button>
        <el-button type="danger" plain>危险按钮</el-button>
      </el-row>

      <el-row>
        <el-button round icon="el-icon-edit" :loading="loading">圆角按钮</el-button>
        <el-button type="primary" round  icon="el-icon-edit" >主要按钮</el-button>
        <el-button type="success" round>成功按钮</el-button>
        <el-button type="info" round>信息按钮</el-button>
        <el-button type="warning" round>警告按钮</el-button>
        <el-button type="danger" round>危险按钮</el-button>
      </el-row>

      <el-row>
        <el-button icon="el-icon-search" circle :loading="loading" ></el-button>
        <el-button type="primary" icon="el-icon-edit" circle size="medium"></el-button>
        <el-button type="success" icon="el-icon-check" circle size="small"></el-button>
        <el-button type="info" icon="el-icon-message" circle size="mini"></el-button>
        <el-button type="warning" icon="el-icon-star-off" circle></el-button>
        <el-button 
          type="danger" 
          icon="el-icon-delete" 
          circle
          @click="toggleLoading"
        ></el-button>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data:function(){
    return {
      loading:false,
    }
  },
  components: {
    
  },
  methods:{
    toggleLoading:function(){
      this.loading = !this.loading;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
.demo-button .el-row{
  margin-bottom: 20px;
}
.demo-button .el-button-group + .el-button-group{
  margin-left: 10px;
}
</style>
