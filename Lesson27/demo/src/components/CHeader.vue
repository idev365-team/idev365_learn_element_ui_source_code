<template>
    <header class="c-header" :style="getStyle">
        <slot></slot>
    </header>
</template>

<script>
export default {
    name: 'CHeader',
    componentName:'CHeader',
    props:{
        height:{
            type:Number,
            default:60,
        }
    },
    computed:{
        getStyle:function(){
            let style = {}
            style.height = this.height+"px"
            return style
        }
    }
}
</script>

<style lang="scss">
.c-header {
    padding: 0 20px;
    box-sizing: border-box;
    flex-shrink: 0;
}
.c-header{
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
}
</style>

