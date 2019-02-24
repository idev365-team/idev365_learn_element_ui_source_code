<template>
    <div v-if="type==='textarea'"
        class="c-textarea"
        :class="{
            'is-disabled':disabled,
            'is-clearable':getClearable,
            'c-textarea--suffix':$slots.prefix ||suffixIcon || clearable,
            'c-textarea--prefix':$slots.prefix || prefixIcon,
        }"
        
        @mouseenter="hovering = true"
        @mouseleave="hovering = false"
    >
        <textarea
            :style="[getInnerTextAreaStyle]"
            class="c-textarea__inner"
            ref="textarea"
            :value="value"
            :rows="rows"
            v-bind="$attrs"
            :disabled="disabled"
            :placeholder="placeholder" 
            v-on:keyup="handleTextAreaKeyDown"
            @input="handleTextAreaInput"
            @focus="focus=true"
            @blur="focus=false"
        />
    </div>
    <div v-else class="c-input"
        :class="{
            'is-disabled':disabled,
            'is-clearable':getClearable,
            'c-input--suffix':$slots.prefix ||suffixIcon || clearable,
            'c-input--prefix':$slots.prefix || prefixIcon,
            'c-input--prepend':$slots.prepend,
            'c-input--append':$slots.append,
            'c-input-group':$slots.append || $slots.prepend,
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
        <div v-if="!prefixIcon && !$slots.prefix && $slots.prepend" class="c-input-group__prepend">
            <slot name="prepend"></slot>
        </div>
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
        <div v-if="!getClearable && !suffixIcon && !$slots.suffix$ && $slots.append" class="c-input-group__append">
            <slot name="append"></slot>
        </div>

        <span v-show="getClearable" 
             class="c-input__suffix"
             v-on:click="handleClean"
        >
            <i   v-on:click="handleClean" class="c-input__icon c-icon-circle-close"></i>
        </span>
    </div>
</template>


<script>
const HIDDEN_STYLE = `
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important
  `
const CONTEXT_STYLE = [
  'letter-spacing',
  'line-height',
  'padding-top',
  'padding-bottom',
  'font-family',
  'font-weight',
  'font-size',
  'text-rendering',
  'text-transform',
  'width',
  'text-indent',
  'padding-left',
  'padding-right',
  'border-width',
  'box-sizing'
];

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
        type:{
            type:String,
            default:"text",
            validate(val){
                return ["text","textarea"].indexOf(val)!==-1
            }
        },
        rows:{
            type:Number,
            default:1,  
        },
        autosize:{
            type:Boolean,
            default:false,
        },
        
    },
    computed:{
        getInnerTextAreaStyle(){
            return {
                minHeight:"33px",
            }
        },
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
        },
        nativeInputValue() {
            return this.value === null || this.value === undefined ? '' : this.value;
        },
        
    },
    methods:{
        handleClean(){
            console.log("handleClean")
            this.$emit('input',"")
            this.$emit('change',"")
        },
        calcNodeStyle(targetElement){
            const style = window.getComputedStyle(targetElement);

            const boxSizing = style.getPropertyValue('box-sizing');

            const paddingSize = (
                parseFloat(style.getPropertyValue('padding-bottom')) +
                parseFloat(style.getPropertyValue('padding-top'))
            );

            const borderSize = (
                parseFloat(style.getPropertyValue('border-bottom-width')) +
                parseFloat(style.getPropertyValue('border-top-width'))
            );

            const contextStyle = CONTEXT_STYLE.map(name=>`${name}:${style.getPropertyValue(name)}`).join(";")
            return { contextStyle, paddingSize, borderSize, boxSizing };
        },
        calcTextAreaAutoHeight(target){
            if(!this.autosize){
                return
            }
            if(!this.tempTextArea){
                this.tempTextArea =document.createElement("textarea")
                document.body.appendChild(this.tempTextArea)
            }
            const { contextStyle,paddingSize,borderSize,boxSize } = this.calcNodeStyle(target)
            
            this.tempTextArea.value = target.value
            this.tempTextArea.setAttribute("style",`${contextStyle};${HIDDEN_STYLE}`)
            const height = this.tempTextArea.scrollHeight+(this.tempTextArea.offsetHeight-this.tempTextArea.clientHeight)
            target.style.height = height+"px"
            console.log("calc height:",height)
            
        },
        handleTextAreaInput(event){
            this.$emit('input',event.target.value)
            this.calcTextAreaAutoHeight(event.target)
        },
        handleTextAreaKeyDown(event){
            this.$emit('input',event.target.value)
        }
    },
    watch:{
        value(val){
            console.log("value--->in c-input:",val)
            this.$emit('input',val)
            this.$emit('change',val)
        }
    }
}
</script>

<style lang="scss">
@import "./../theme/src/components/CInput.scss";
</style>

