<template>
    <div class="c-input-number"
        :class="[getInputNumberSizeClass,{
            'is-controls-right':controlsPosition==='right',
        }]"
    >
        <c-input 
            @keydown.up.native.prevent="handleButtonPlus"
            @keydown.down.native.prevent="handleButtonMinus" 
            :size="size" 
            :disabled="disabled" 
            :value="value" 
            @input="handleInputValue">
            <c-button class="button-minus" :size="size" :disable="isDisableButtonMinus" @click="handleButtonMinus" slot="prepend" :icon="controlsPosition==='right'?'c-icon-arrow-up':'c-icon-minus'"></c-button>
            <c-button class="button-plus" :size="size" :disable="isDisableButtonPlus" @click="handleButtonPlus" slot="append" :icon="controlsPosition==='right'?'c-icon-arrow-down':'c-icon-plus'"></c-button>
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
        },
        controlsPosition:{
            type:String,
            validator: function (value) {
                return ['', 'right'].indexOf(value) !== -1
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
        emitValueBySafeCheck(curVal){
            if(this.min!=undefined && curVal<this.min){
                return
            }
            if(this.max!=undefined && curVal > this.max){
                return
            }
            this.$emit('input',this.checkValue(curVal))
        },
        handleButtonMinus(){
            const curVal = this.parseValueToNumber(this.value)-this.step
            this.emitValueBySafeCheck(curVal)
        },
        handleButtonPlus(){
            const curVal = this.parseValueToNumber(this.value)+this.step
            this.emitValueBySafeCheck(curVal)
        }
    }
}
</script>

<style lang="scss">
@import "./../theme/src/components/CInputNumber.scss";
</style>


