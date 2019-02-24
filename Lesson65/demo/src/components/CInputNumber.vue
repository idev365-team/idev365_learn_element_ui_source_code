<template>
    <div class="c-input-number"
        :class="getInputNumberSizeClass"
    >
        <c-input :size="size" :disabled="disabled" :value="value" @input="handleInputValue">
            <c-button :size="size" :disable="isDisableButtonMinus" @click="handleButtonMinus" slot="prepend" icon="c-icon-minus"></c-button>
            <c-button :size="size" :disable="isDisableButtonPlus" @click="handleButtonPlus" slot="append" icon="c-icon-plus"></c-button>
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
            type:Boolean,
            default:false,
        },
        step:{
            type:Number,
            default:1,
        },
        precision:{
            type:Number,
        },
        size: {
            type: String,
            validator: function (value) {
                return ['medium', 'small', 'mini','tiny'].indexOf(value) !== -1
            }
        }
    },
    components:{
        CInput,
        CButton,
    },
    computed:{
        getInputNumberSizeClass(){
            if(this.size!=undefined){
                return 'c-input-number--'+this.size
            }
        },
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
        parseValueToNumber(value){
            return Number((value+"").replace(/(\d*\.\d*).*/,"$1"))
        },
        checkValue(value){
            let val = value
            console.log("handleInputValue-->",typeof(this.precision))
            if(typeof(this.precision)==="number"){
                val = parseFloat(value).toFixed(this.precision)
            }
            return val
        },
        handleInputValue(value){
            this.$emit('input',this.checkValue(value))
        },
        handleButtonMinus(){
            const curVal = this.parseValueToNumber(this.value)-this.step
            this.$emit('input',this.checkValue(curVal))
        },
        handleButtonPlus(){
            const curVal = this.parseValueToNumber(this.value)+this.step
            this.$emit('input',this.checkValue(curVal))
        }
    }
}
</script>

<style lang="scss">
@import "./../theme/src/components/CInputNumber.scss";
</style>


