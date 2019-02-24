<template>
    <div class="c-checkbox-group">
        <slot></slot>
    </div>
</template>
<script>
import Emitter from './../mixins/emitter'

export default {
    name: 'CCheckboxGroup',
    componentName: 'CCheckboxGroup',
    mixins:[Emitter],
    props: {
        value:{},
        disabled:{
            type:Boolean,
        },
        size:{
            type: String,
            validator: function (value) {
                return ['medium', 'small', 'mini','tiny'].indexOf(value) !== -1
            }
        },
        min:Number,
        max:Number,
    },
    watch:{
        value(nextVal,prevVal){
            this.$emit('change',nextVal)
        }
    }
}
</script>
<style lang="scss">
@import "./../theme/src/components/CCheckboxGroup.scss";
</style>


