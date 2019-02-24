<template>
    <section class="c-container" :class="{
        'is-vertical':getDirection==='vertical'
    }">
        <slot></slot>
    </section>
</template>

<script>
export default {
    name: 'CContainer',
    props:{
        direction:{
            type:String,
            validator: function (value) {
                return ['vertical', 'horizontal'].indexOf(value) !== -1
            }
        }
    },
    computed:{
        getDirection(){
            let direction = "horizontal"
            if(this.direction){
                direction = this.direction
            }else{
                //自动判断
                console.log("getDirection->this.$slots.default",this.$slots.default)
                const slotsDefault = this.$slots.default
                for(let i=0;i<slotsDefault.length;i++){
                    const curVNode = slotsDefault[i]
                    const curTag = curVNode.componentOptions.tag
                    console.log("curTag",curTag)
                    if(['c-header','c-footer'].indexOf(curTag)!=-1){
                        direction = "vertical"
                        break;
                    }
                }
            }
            console.log("getDirection",direction)
            return direction
        }
    }
}
</script>

<style lang="scss">
@import "./../theme/src/components/CContainer.scss";
</style>

