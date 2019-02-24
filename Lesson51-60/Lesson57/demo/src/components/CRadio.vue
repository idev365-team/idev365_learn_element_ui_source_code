<template>
    <label class="c-radio" :class="[
        getSizeClass,{
            'is-checked':isChecked,
            'is-disabled':disabled,
            'is-bordered':border,
        }]">
        <span 
            class="c-radio__input" 
            :class="{
                'is-checked':isChecked,
                'is-disabled':disabled,
            }"
        >
            <span class="c-radio__inner"></span>
            <input 
                class="c-radio__original"
                type="radio"
                :disabled="disabled"
                v-model="model"
                :value="label"
                v-bind:checked="isChecked"
                v-on:change="$emit('change',label)"
            />
        </span>
        
        <span class="c-radio__label">
            <slot></slot>
        </span>
    </label>
</template>

<script>
import Emitter from './../mixins/emitter'

export default {
    name: 'CRadio',
    mixins:[Emitter],
    props:{
        value:{},
        checkValue: [String,Number,Boolean],
        label: [String,Number,Boolean],
        disabled: Boolean,
        border: Boolean,
        size:{
            type: String,
            validator: function (value) {
                return ['medium', 'small', 'mini','tiny'].indexOf(value) !== -1
            }
        }
    },
    computed:{
        _radioGroup(){
            let radioGroup=null
            let parent = this.$parent
            while(parent){
                const parentComponentName = parent.$options.componentName
                const isRadioGroup = "CRadioGroup"===parentComponentName
                if(isRadioGroup){
                    radioGroup = parent
                    break
                }else{
                    parent = parent.$parent
                }
            }
            return radioGroup
        },
        isGroup(){
            let parent = this.$parent
            while(parent){
                const parentComponentName = parent.$options.componentName
                const isRadioGroup = "CRadioGroup"===parentComponentName
                if(isRadioGroup){
                    return true
                }else{
                    parent = parent.$parent
                }
            }
            return false
        },
        model:{
            get(){
                let result;
                if(this.isGroup){
                    result = this._radioGroup.$props.value
                }else{
                    result = this.value
                }
                return result
            },
            set(val){
                if(this.isGroup){
                    this.dispatch('CRadioGroup', 'input', [val]);
                }else{
                    this.$emit('input', val);
                }
            }
        },
        isChecked(){
            return this.model==this.label
        },
        getSizeClass(){
            if(this.isGroup){
                if(this._radioGroup.$props.size){
                    return "c-radio--"+this._radioGroup.$props.size
                }else{
                    if(this.size){
                        return "c-radio--"+this.size
                    }
                }
            }else{
                if(this.size){
                    return "c-radio--"+this.size
                }
            }
            return null
        }
    }
}
</script>

<style lang="scss">
@import "./../theme/src/components/CRadio.scss";
</style>


