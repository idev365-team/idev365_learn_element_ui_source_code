<template>
    <aside class="c-aside" :style="getStyle">
        <slot></slot>
    </aside>
</template>

<script>
export default {
    name: 'CAside',
    props:{
        width:{
            type:Number,
            default:300,
        }
    },
    computed:{
        getStyle(){
            return {
                width:this.width+"px"
            }
        }
    }
}
</script>

<style lang="scss">
    @import "./../theme/src/components/CAside.scss";
</style>

