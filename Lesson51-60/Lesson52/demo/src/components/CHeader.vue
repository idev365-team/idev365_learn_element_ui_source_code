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
@import "./../theme/src/components/CHeader.scss";
</style>

