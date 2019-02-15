<template>
    <footer class="c-footer" :style="getStyle">
        <slot></slot>
    </footer>
</template>

<script>
export default {
    name: 'CFooter',
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
.c-footer {
    padding: 0 20px;
    box-sizing: border-box;
    flex-shrink: 0;
}
.c-footer{
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
}
</style>

