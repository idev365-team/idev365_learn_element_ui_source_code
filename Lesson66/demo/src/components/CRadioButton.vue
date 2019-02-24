<template>
    <label class="c-radio-button"
        :class="[getSizeClass,{
            'is-active':isActive,
            'is-disabled':isDisabled,
        }]"
    >
        <input 
                class="c-radio-button__original"
                type="radio"
                :disabled="isDisabled"
                v-model="model"
                :value="label"
                v-bind:checked="isActive"
                v-on:change="$emit('change',label)"
            />
        <span 
            class="c-radio-button__inner"
            :class="[{
                'is-active':isActive,
                'is-disabled':isDisabled,
            }]"
        >
            <slot></slot>
        </span>
    </label>
</template>

<script>
import Emitter from './../mixins/emitter'
export default {
    name: 'CRadioButton',
    componentName: 'CRadioButton',
    mixins: [Emitter],
    props: {
        value: {},
        checkValue: [String,Number,Boolean],
        label: [String,Number,Boolean],
        disabled: Boolean,
    },
    computed: {
        _radioGroup(){
            let radioGroup = null
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
        isDisabled(){
            if(this.isGroup){
                if(this._radioGroup.$props.disabled==true){
                    return this._radioGroup.$props.disabled
                }else{
                  return this.disabled  
                }
                
            }else{
                return this.disabled
            }
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
        isActive(){
            return this.model==this.label
        },
        getSizeClass(){
            let size = ""
            if(this.isGroup){
                size = this._radioGroup.$props.size
            }
            if(size){
                return 'c-radio-button--'+size
            }
            return null
        }
    }
}
</script>

<style lang="scss">
@import "./../theme/src/components/CRadioButton.scss";
</style>


