<template>
    <section class="c-container" :class="{
        'is-vertical':direction==='vertical'
    }">
        <slot></slot>
    </section>
</template>

<script>
export default {
    name: 'CContainer',
    props:{
        direction:{
            type:String,
            default:"vertical",
            validator: function (value) {
                return ['vertical', 'horizontal'].indexOf(value) !== -1
            }
        }
    }
}
</script>

<style lang="scss">
.c-container {
    display: flex;
    flex-direction: row;
    flex: 1;
    flex-basis: auto;
    box-sizing: border-box;
    min-width: 0; 
    &.is-vertical {
        flex-direction: column; 
    }
}
</style>

