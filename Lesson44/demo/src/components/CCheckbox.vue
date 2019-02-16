<template>
    <label class="c-checkbox" :class="[
        getSizeClass,{
            'is-checked':isChecked,
            'is-disabled':disabled,
            'is-bordered':border,
        }]">
        <span 
            class="c-checkbox__input" 
            :class="{
                'is-checked':isChecked,
                'is-disabled':disabled,
            }"
        >
            <span class="c-checkbox__inner"></span>
            <input 
                class="c-checkbox__original"
                type="checkbox"
                :disabled="disabled"
                v-model="model"
                :value="label"
                v-bind:checked="isChecked"
                v-on:change="$emit('change',label)"
            />
        </span>
        
        <span class="c-checkbox__label">
            <slot></slot>
        </span>
    </label>
</template>

<script>
import Emitter from './../mixins/emitter'

export default {
    name: 'CCheckbox',
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
        _checkboxGroup(){
            let checkboxGroup=null
            let parent = this.$parent
            while(parent){
                const parentComponentName = parent.$options.componentName
                const isCheckboxGroup = "CCheckboxGroup"===parentComponentName
                if(isCheckboxGroup){
                    checkboxGroup = parent
                    break
                }else{
                    parent = parent.$parent
                }
            }
            return checkboxGroup
        },
        isGroup(){
            let parent = this.$parent
            while(parent){
                const parentComponentName = parent.$options.componentName
                const isCheckboxGroup = "CCheckboxGroup"===parentComponentName
                if(isCheckboxGroup){
                    return true
                }else{
                    parent = parent.$parent
                }
            }
            return false
        },
        model:{
            get(){
                console.log("checkbox->",this.value)
                let result;
                if(this.isGroup){
                    result = this._checkboxGroup.$props.value
                }else{
                    result = this.value
                }
                return result
            },
            set(val){
                if(this.isGroup){
                    this.dispatch('CCheckboxGroup', 'input', [val]);
                }else{
                    this.$emit('input', val);
                }
            }
        },
        isChecked(){
            return this.model
        },
        getSizeClass(){
            if(this.isGroup){
                if(this._checkboxGroup.$props.size){
                    return "c-checkbox--"+this._checkboxGroup.$props.size
                }else{
                    if(this.size){
                        return "c-checkbox--"+this.size
                    }
                }
            }else{
                if(this.size){
                    return "c-checkbox--"+this.size
                }
            }
            return null
        }
    }
}
</script>

<style lang="scss">
@import "./../theme/src/components/CCheckbox.scss";
</style>


