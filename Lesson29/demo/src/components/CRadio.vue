<template>
    <label class="c-radio" :class="{
        'is-checked':isChecked,
        'is-disabled':disabled,
    }">
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
export default {
    name: 'CRadio',
    model:{
        prop:'checkValue',
        event:'change',
    },
    props:{
        checkValue:String|Number|Boolean,
        label:String|Number|Boolean,
        disabled:Boolean,
    },
    computed:{
        isChecked(){
            return this.checkValue==this.label
        }
    }
}
</script>

<style lang="scss">
@import "./../theme/common/vars.scss";
.c-radio{
    color: #606266;
    font-weight: 500;
    line-height: 1;
    position: relative;
    cursor: pointer;
    display: inline-block;
    white-space: nowrap;
    outline: none;
    font-size: 14px;
    margin-right: 30px;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none; 
}
.c-radio__input{
    font-size: 0;
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    &.is-checked .c-radio__inner {
        border-color: $primary-color;
        background: $primary-color;
        &::after{
            transform: translate(-50%, -50%) scale(1);
        }
    }
    &.is-checked + .c-radio__label {
        color: $primary-color;
    }
    &.is-disabled  .c-radio__inner{
        background-color: #f5f7fa;
        border-color: #e4e7ed;
        cursor: not-allowed;
    }
    &.is-disabled + .c-radio__label {
        color: #c0c4cc;
        cursor: not-allowed; 
    }
    &.is-disabled{
        .c-radio__inner{
            &:after{
                background-color: #c0c4cc;
            }
            &:hover{
                border-color: #e4e7ed;
            }
        }
    }
    .c-radio__inner{
        border: 1px solid #dcdfe6;
        border-radius: 100%;
        width: 14px;
        height: 14px;
        background-color: #fff;
        position: relative;
        cursor: pointer;
        display: inline-block;
        box-sizing: border-box;
        &:hover {
            border-color: $primary-color; 
        }
        &::after{
            width: 4px;
            height: 4px;
            border-radius: 100%;
            background-color: #fff;
            content: "";
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%) scale(0);
            transition: transform .15s ease-in; 
        }
    }
    .c-radio__original{
            opacity: 0;
            outline: none;
            position: absolute;
            z-index: -1;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: 0;
    }
}
.c-radio__input.is-disabled + span.c-radio__label {
     }
.c-radio__label{
    font-size: 14px;
    padding-left: 10px;
    vertical-align: middle;
}


</style>


