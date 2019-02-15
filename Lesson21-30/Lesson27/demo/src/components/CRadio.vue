<template>
    <label class="c-radio">
        <input 
            type="radio"
            :value="label"
            v-bind:checked="checkValue==label"
            v-on:change="$emit('change',label)"
        />
        <slot></slot>
    </label>
</template>

<script>
export default {
    name: 'CRadio',
    model:{
        prop:'checkValue',
        event:'change',
    },
    props:{
        checkValue:String|Number|Boolean,
        label:String|Number|Boolean,
    }
}
</script>

<style lang="scss">
.c-radio{

}
</style>


