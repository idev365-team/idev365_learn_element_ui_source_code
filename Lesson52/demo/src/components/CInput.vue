<template>
    <div class="c-input"
        :class="{
            'is-disabled':disabled,
        }"
    >
        <input 
            class="c-input__inner"
            :value="value"
            :disabled="disabled"
            :placeholder="placeholder" 
            @change="$emit('input',$event.target.value)"
        />
    </div>
</template>


<script>
export default {
    name: 'CInput',
    componentName: 'CInput',
    props:{
        placeholder:String,
        value:{},
        disabled:Boolean,
    }
}
</script>

<style lang="scss">
@import "./../theme/src/components/CInput.scss";
</style>

