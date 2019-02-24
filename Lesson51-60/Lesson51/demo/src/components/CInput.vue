<template>
    <div class="c-input">
        <input 
            class="c-input__inner"
            :value="value" 
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
    }
}
</script>

<style lang="scss">
@import "./../theme/src/components/CInput.scss";
</style>

