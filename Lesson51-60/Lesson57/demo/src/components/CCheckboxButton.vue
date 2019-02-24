<template>
    <label class="c-checkbox-button" :class="[
        getSizeClass,{
            'is-checked': isChecked,
            'is-disabled': disabled,
            'is-bordered': border,
        }]">
        <input 
                class="c-checkbox-button__original"
                type="checkbox"
                :disabled="disabled"
                v-model="model"
                :value="label"
                v-bind:checked="isChecked"
                v-on:change="handleChange"
            />
        <span v-if="$slots.default" class="c-checkbox-button__inner"
            :class="[{
                'is-checked':isChecked,
                'is-disabled':disabled,
            }]"
        >
            <slot></slot>            
        </span>
        <span v-if="!$slots.default" class="c-checkbox-button__inner"
            :class="[{
                    'is-checked':isChecked,
                    'is-disabled':disabled,
                }]"
        >
            {{this.label}}
        </span>
    </label>
</template>

<script>
import Emitter from './../mixins/emitter'

export default {
    name: 'CCheckboxButton',
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
            let checkboxButtonGroup=null
            let parent = this.$parent
            while(parent){
                const parentComponentName = parent.$options.componentName
                const isCheckboxButtonGroup = "CCheckboxGroup"===parentComponentName
                if(isCheckboxButtonGroup){
                    checkboxButtonGroup = parent
                    break
                }else{
                    parent = parent.$parent
                }
            }
            return checkboxButtonGroup
        },
        isGroup(){
            let parent = this.$parent
            while(parent){
                const parentComponentName = parent.$options.componentName
                const isCheckboxButtonGroup = "CCheckboxGroup"===parentComponentName
                if(isCheckboxButtonGroup){
                    return true
                }else{
                    parent = parent.$parent
                }
            }
            return false
        },
        getValue(){
            let result;
            if(this.isGroup){
                const parentValue = this._checkboxGroup.$props.value
                result = parentValue
            }else{
                result = this.value
            }
            return result
        },
        model:{
            get(){
                console.log("checkbox-button->",this.value)
                let result;
                if(this.isGroup){
                    console.log("_checkboxGroup->",this._checkboxGroup)
                    const parentValue = this._checkboxGroup.$props.value
                    console.log(parentValue)
                    result = parentValue.indexOf(this.label) != -1
                }else{
                    result = this.value
                }
                return result
            },
            set(val){
                console.log("set val->",val)
                if(this.isGroup){
                    const parentValue = this._checkboxGroup.$props.value
                    let result = [...parentValue]
                    if(val){
                        if(result.indexOf(this.label)==-1){
                            if(this._checkboxGroup.$props.max && result.length>=this._checkboxGroup.$props.max){
                                return
                            }
                            result.push(this.label)
                        }
                    }else{
                        const findIndex = result.indexOf(this.label)
                        if(findIndex!=-1){
                            if(this._checkboxGroup.$props.min && result.length<=this._checkboxGroup.$props.min){
                                return
                            }
                            result.splice(findIndex,1)
                        }
                    }
                    this.dispatch('CCheckboxGroup', 'input', [result]);
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
                    return "c-checkbox-button--"+this._checkboxGroup.$props.size
                }else{
                    if(this.size){
                        return "c-checkbox-button--"+this.size
                    }
                }
            }else{
                if(this.size){
                    return "c-checkbox-button--"+this.size
                }
            }
            return null
        }
    },
    methods:{
        handleChange(event){
            const checked = event.target.checked
            if(this.isGroup){
                if(checked&&this.getValue.length>=this._checkboxGroup.$props.max){
                     event.target.checked = false;
                    return
                }
                if(!checked&&this.getValue.length<=this._checkboxGroup.$props.min){
                     event.target.checked = true;
                    return
                }
                
            }
            this.$emit('change',checked)
        }
    }
}
</script>

<style lang="scss">
@import "./../theme/src/components/CCheckboxButton.scss";
</style>