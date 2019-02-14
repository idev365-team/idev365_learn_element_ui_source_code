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
.c-main {
    display: block;
    flex: 1;
    flex-basis: auto;
    overflow: auto;
    box-sizing: border-box;
    padding: 20px;
}
</style>

