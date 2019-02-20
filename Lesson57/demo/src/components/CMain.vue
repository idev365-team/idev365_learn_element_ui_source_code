<template>
    <main class="c-main" :style="getStyle">
        <slot></slot>
    </main>
</template>

<script>
export default {
    name: 'CMain',
    props:{
    },
    computed:{
        getStyle:function(){
            let style = {}
            return style
        }
    }
}
</script>

<style lang="scss">
@import "./../theme/src/components/CMain.scss";
</style>

