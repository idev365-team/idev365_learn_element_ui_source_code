<template>
  <div id="app">
    <container-example/>
    <layout-example/>
    <button-example/>
  </div>
</template>

<script>
import ButtonExample from './example/ButtonExample.vue'
import RadioExample from './example/RadioExample.vue'
import LayoutExample from './example/LayoutExample.vue'
import ContainerExample from './example/ContainerExample.vue'

export default {
  name: 'app',
  data(){
    return {
    }
  },
  components:{
    ButtonExample,
    RadioExample,
    LayoutExample,
    ContainerExample,
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
  .c-radio-group{
    margin-bottom: 20px;
  }  
}
</style>
