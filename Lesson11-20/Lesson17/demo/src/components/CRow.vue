<template>
    <div class="c-row" :style="getRowGutterStyle">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "CRow",
    props:{
        gutter:{
            type:Number,
            default:0,
        }
    },
    computed:{
        getRowGutterStyle(){
            if(this.gutter==0){
                return ""
            }
            const value = -(this.gutter/2)+"px";
            return {
                marginLeft:value,
                marginRight:value,
            }
        }
    }
}
</script>

<style lang="scss">
.c-row{
    
}
</style>


