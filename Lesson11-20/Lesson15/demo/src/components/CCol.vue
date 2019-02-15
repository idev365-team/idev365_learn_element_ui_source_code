<template>
    <div class="c-col" :class="'c-col-'+span">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "CCol",
    props:{
        span:{
            type:Number,
            default:24,
        }
        
    }
}
</script>

<style lang="scss">
.c-col{
    display: inline-block;
    box-sizing: border-box;
}
// 生成 c-col-1 到 c-col-24 
@for $i from 1 through 24 {
    .c-col-#{$i} { 
      width: 100%/24*$i; 
    }
}

</style>


