<template>
    <div class="c-input"
        :class="{
            'is-disabled':disabled,
            'is-clearable':getClearable,
            'c-input--suffix':clearable,
        }"

            @mouseenter="hovering = true"
            @mouseleave="hovering = false"
    >
        <input 
            class="c-input__inner"
            :value="value"
            :disabled="disabled"
            :placeholder="placeholder" 
            v-on:keyup="$emit('input',$event.target.value)"
            @input="$emit('input',$event.target.value)"
            @focus="focus=true"
            @blur="focus=false"
        />

        <span v-show="getClearable" 
             class="c-input__suffix"
             v-on:click="handleClean"
        >
            <i   v-on:click="handleClean" class="c-input__icon c-icon-circle-close"></i>
        </span>
    </div>
</template>


<script>
export default {
    name: 'CInput',
    componentName: 'CInput',
    data(){
        return {
            focus:false,
            hovering:false,
        }
    },
    props:{
        placeholder:String,
        value:{},
        disabled:Boolean,
        clearable:Boolean,
    },
    computed:{
        getClearable(){
            console.log(this.value)
            if( this.clearable && 
                (this.focus || this.hovering )&& 
                this.value!=undefined &&
                this.value!=null && 
                (""+this.value).length>0
            ){
                return true
            }else{
                return false
            }
        }
    },
    methods:{
        handleClean(){
            console.log("handleClean")
            this.$emit('input',"")
            this.$emit('change',"")
        }
    }
}
</script>

<style lang="scss">
@import "./../theme/src/components/CInput.scss";
</style>

