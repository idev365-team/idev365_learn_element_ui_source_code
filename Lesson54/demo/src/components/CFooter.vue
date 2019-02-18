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
@import "./../theme/src/components/CFooter.scss";
</style>

