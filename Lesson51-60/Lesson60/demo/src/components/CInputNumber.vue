<template>
    <div class="c-input-number">
        <c-input :value="value" @input="handleInputValue">
            <c-button @click="handleButtonMinus" slot="prepend" icon="c-icon-minus"></c-button>
            <c-button @click="handleButtonPlus" slot="append" icon="c-icon-plus"></c-button>
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
    },
    components:{
        CInput,
        CButton,
    },
    methods:{
        handleInputValue(value){
            console.log("handleInputValue",value)
            this.$emit('input',value)
        },
        handleButtonMinus(){
            const curVal = this.value-1
            this.$emit('input',curVal)
        },
        handleButtonPlus(){
            const curVal = this.value+1
            this.$emit('input',curVal)
        }
    }
}
</script>

<style lang="scss">
@import "./../theme/src/components/CInputNumber.scss";
</style>


