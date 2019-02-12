<template>
    <button :autofocus="autofocus" :type="nativeType" class="c-button" :class="['c-button--'+type,buttonSizeClass,{
        'is-plain':plain,
        'is-round':round,
        'is-circle':circle,
        'is-disabled':disable,
        'is-loading':loading,
    }]"
        @click="handleClick"
    >
        <i v-if="loading" class="c-icon-loading"></i>
        
        <i v-if="!loading && icon" :class="icon"></i>
        <span v-if="$slots.default">
            <slot></slot>
        </span>
    </button>
</template>

<script>
export default {
    props:{
        type:{
            default:"default",
            type:String,
        },
        nativeType:{
            default:"button",
            type:String,
            validator: function (value) {
                return ['button', 'reset', 'submit'].indexOf(value) !== -1
            }
        },
        autofocus:{
            type:Boolean,
        },
        plain:{
            type:Boolean,
        },
        round:{
            type:Boolean, 
        },
        circle:{
            type:Boolean, 
        },
        disable:{
            type:Boolean, 
        },
        loading:{
            type:Boolean, 
        },
        icon:{
            type:String,
        },
        size:{
            type:String,
            validator: function (value) {
                return ['medium', 'small', 'mini','tiny'].indexOf(value) !== -1
            }
        }

    },
    computed:{
        buttonSizeClass:function(){
            if(this.size){
                return 'c-button--'+this.size
            }
            return null
        }
    },
    methods:{
        handleClick:function(event){
            if(this.$props.disable){
                return;
            }
            this.$emit('click',event)
        }
    }
}
</script>

<style lang="scss" >
@import "./../theme/components/CButton.scss";
</style>
