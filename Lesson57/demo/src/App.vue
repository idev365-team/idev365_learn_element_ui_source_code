<template>
  <div id="app">
    <input-example />
  </div>
</template>

<script>
import ButtonExample from './example/ButtonExample.vue'
import RadioExample from './example/RadioExample.vue'
import CheckboxExample from './example/CheckboxExample.vue'
import LayoutExample from './example/LayoutExample.vue'
import ContainerExample from './example/ContainerExample.vue'
import InputExample from './example/InputExample.vue'

export default {
  name: 'app',
  data(){
    return {
    }
  },
  components:{
    InputExample,
    ButtonExample,
    RadioExample,
    CheckboxExample,
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
