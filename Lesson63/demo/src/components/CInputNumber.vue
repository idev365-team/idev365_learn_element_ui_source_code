<template>
    <div class="c-input-number">
        <c-input :disabled="disabled" :value="value" @input="handleInputValue">
            <c-button :disable="isDisableButtonMinus" @click="handleButtonMinus" slot="prepend" icon="c-icon-minus"></c-button>
            <c-button :disable="isDisableButtonPlus" @click="handleButtonPlus" slot="append" icon="c-icon-plus"></c-button>
        </c-input>
    </div>
</template>

<script>
import CInput from './CInput.vue'
import CButton from './CButton.vue'

export default {
    name: 'CInputNumber',
    componentName: 'CInputNumber',
    props:{
        value:{},
        min:Number,
        max:Number,
        disabled:{
            type:Number,
            default:false,
        },
        step:{
            type:Number,
            default:1,
        }
    },
    components:{
        CInput,
        CButton,
    },
    computed:{
        isDisableButtonMinus(){
            if(this.disabled){
                return this.disabled
            }
            if(typeof(this.min)==="number"){
                return this.value-this.step<this.min
            }else{
                return false
            }
        },
        isDisableButtonPlus(){
            if(this.disabled){
                return this.disabled
            }
            if(typeof(this.max)==="number"){
                return this.value>this.max-this.step
            }else{
                return false
            }
        },
    },
    methods:{
        handleInputValue(value){
            console.log("handleInputValue",value)
            this.$emit('input',value)
        },
        handleButtonMinus(){
            const curVal = this.value-this.step
            this.$emit('input',curVal)
        },
        handleButtonPlus(){
            const curVal = this.value+this.step
            this.$emit('input',curVal)
        }
    }
}
</script>

<style lang="scss">
@import "./../theme/src/components/CInputNumber.scss";
</style>


