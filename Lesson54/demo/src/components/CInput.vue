<template>
    <div class="c-input"
        :class="{
            'is-disabled':disabled,
            'is-clearable':getClearable,
            'c-input--suffix':$slots.prefix ||suffixIcon || clearable,
            'c-input--prefix':$slots.prefix || prefixIcon,
        }"
        @mouseenter="hovering = true"
        @mouseleave="hovering = false"
    >

        <span v-if="prefixIcon" 
             class="c-input__prefix"
             v-on:click="handleClean"
        >
            <i class="c-input__icon"
                :class="prefixIcon"
            ></i>
        </span>
        <span v-if="!prefixIcon && $slots.prefix" class="c-input__prefix">
            <slot name="prefix"></slot>
        </span>
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

        <span v-if="!getClearable && suffixIcon" class="c-input__suffix" >
            <i class="c-input__icon"
                :class="suffixIcon"
            ></i>
        </span>
        <span v-if="!getClearable && !suffixIcon && $slots.suffix" class="c-input__suffix">
            <slot name="suffix"></slot>
        </span>

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
        prefixIcon:String,
        suffixIcon:String,
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

