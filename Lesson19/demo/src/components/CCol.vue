<template>
    <div class="c-col" :class="[
            'c-col-'+span,
            getColOffsetClass,
            getAllBootstrapClasses,
            ]" :style="getColGutterStyle">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "CCol",
    props: {
        span: {
            type: Number,
            default: 24,
        },
        offset: {
            type: Number,
            default: 0,
        },
        xs:{
            type:Number | Object,
            default:0,
        },
        sm:{
            type:Number | Object,
            default:0,
        },
        md:{
            type:Number | Object,
            default:0,
        },
        lg:{
            type:Number | Object,
            default:0,
        },
        xl:{
            type:Number | Object,
            default:0,
        },
    },
    methods:{
        getBootstrapClass(className){
            let bootstrapClass = [];
            console.log("getBootstrapClass",className)
            if(className){
                const classNameValue = this[className]
                console.log("get"+className.toUpperCase()+"Class->",classNameValue,typeof(classNameValue))
                if(typeof(classNameValue)=="number" && classNameValue!=0){
                    bootstrapClass.push("c-col-"+className+"-"+classNameValue)
                }else if(typeof(classNameValue)=="object"){
                    const span = classNameValue.span
                    const offset = classNameValue.offset
                    if(classNameValue.hasOwnProperty("span")){
                        bootstrapClass.push("c-col-"+className+"-"+span)
                    }
                    if(classNameValue.hasOwnProperty("offset")){
                        bootstrapClass.push("c-col-"+className+"-offset-"+offset)
                    }
                    
                }
            }
            
            return bootstrapClass
        },
    },
    computed: {
        getAllBootstrapClasses(){
            let allBootstrapClasses = []
            console.log("getAllBootstrapClasses")
            allBootstrapClasses.push(this.getBootstrapClass('xs'))
            allBootstrapClasses.push(this.getBootstrapClass('sm'))
            allBootstrapClasses.push(this.getBootstrapClass('md'))
            allBootstrapClasses.push(this.getBootstrapClass('lg'))
            allBootstrapClasses.push(this.getBootstrapClass('xl'))
            return allBootstrapClasses
        },
       
        getColOffsetClass(){
            if(this.offset!=0){
                return 'c-col-offset-'+this.offset
            }
        },
        getColGutterStyle(){
            if(this.$parent.gutter!=0){
                const value = this.$parent.gutter/2+"px"
                return {
                    paddingLeft: value,
                    paddingRight: value,
                }
            }
            
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
@for $i from 0 through 24 {
    .c-col-#{$i} { 
      width: 100%/24*$i; 
    }
    .c-col-offset-#{$i} { 
      margin-left: 100%/24*$i; 
    }
}

@media only screen and (max-width: 767px){
    @for $i from 0 through 24 {
        .c-col-xs-#{$i} {
            width: 100%/24*$i; 
        }
        .c-col-xs-offset-#{$i} { 
            margin-left: 100%/24*$i; 
        }
    }
}

@media only screen and (min-width: 768px){
    @for $i from 0 through 24 {
        .c-col-sm-#{$i} {
            width: 100%/24*$i; 
        }
        .c-col-sm-offset-#{$i} { 
            margin-left: 100%/24*$i; 
        }
    }
}

@media only screen and (min-width: 992px){
    @for $i from 0 through 24 {
        .c-col-md-#{$i} {
            width: 100%/24*$i; 
        }
        .c-col-md-offset-#{$i} { 
            margin-left: 100%/24*$i; 
        }
    }
}


@media only screen and (min-width: 1200px){
    @for $i from 0 through 24 {
        .c-col-lg-#{$i} {
            width: 100%/24*$i; 
        }
        .c-col-lg-offset-#{$i} { 
            margin-left: 100%/24*$i; 
        }
    }
}


@media only screen and (min-width: 1920px){
    @for $i from 0 through 24 {
        .c-col-xl-#{$i} {
            width: 100%/24*$i; 
        }
        .c-col-xl-offset-#{$i} { 
            margin-left: 100%/24*$i; 
        }
    }
}



</style>


