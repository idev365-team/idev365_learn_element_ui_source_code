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
mixins:[Emitter],
    props:{
        value:{},
        checkValue:String|Number|Boolean,
        label:String|Number|Boolean,
        disabled:Boolean,
    },
    computed:{
        isGroup(){
            let parent = this.$parent
            while(parent){
                const parentComponentName = parent.$options.componentName
                const isRadioGroup = "CRadioGroup"===parentComponentName
                if(isRadioGroup){
                    this._radioGroup = parent
                    return true
                }else{
                    parent = parent.$parent
                }
            }
            return false
        },
        isDisabled(){
            if(this.isGroup){
                console.log("isDisabled",this._radioGroup)
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
                console.log("this.isGroup-->",this.isGroup)
                let result;
                if(this.isGroup){
                    console.log(this._radioGroup)
                    result = this._radioGroup.$props.value
                }else{
                    result = this.value
                }
                console.log("c-radio->model->get",result)
                return result
            },
            set(val){
                // console.log("c-radio->model->set",val)
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
        }
    }
}
</script>

<style lang="scss">
@import "./../theme/common/vars.scss";

.c-radio-button{
    position: relative;
    display: inline-block;
    outline: none;
    .c-radio-button__original:disabled + .c-radio-button__inner {
      color: #c0c4cc;
      cursor: not-allowed;
      background-image: none;
      background-color: #fff;
      border-color: #ebeef5;
      box-shadow: none; 
    }
    .c-radio-button__original:disabled:checked + .c-radio-button__inner {
            background-color: #f2f6fc;
    }
    &.c-radio-button--medium .c-radio-button__inner{
        padding: 10px 20px;
        font-size: 14px;
        border-radius: 0;
    }
    &.c-radio-button--small .c-radio-button__inner{
        padding: 9px 15px;
        font-size: 12px;
        border-radius: 0;
    }
     &.c-radio-button--mini .c-radio-button__inner{
        padding: 7px 15px;
        font-size: 12px;
        border-radius: 0;
    }

    &:first-child .c-radio-button__inner{
        border-left-width: 1px;
        border-left-style: solid;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
        border-color:#dcdfe6;
    }
    &:last-child .c-radio-button__inner{

        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
        border-color:#dcdfe6;
    }
    .c-radio-button__original{
        opacity: 0;
        outline: none;
        position: absolute;
        z-index: -1;
    }
    .c-radio-button__inner{
        display: inline-block;
        line-height: 1;
        white-space: nowrap;
        vertical-align: middle;
        background: #fff;
        border: 1px solid #dcdfe6;
        font-weight: 500;
        border-left: 0;
        color: #606266;
        -webkit-appearance: none;
        text-align: center;
        box-sizing: border-box;
        outline: none;
        margin: 0;
        position: relative;
        cursor: pointer;
        transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
        padding: 12px 20px;
        font-size: 14px;
        border-radius: 0;

        &.is-active{
            background: $primary-color;
            color:white;
            border-color: $primary-color;
        }
    }
}
</style>


