<script>
export default {
    name: "CCol",
    props: {
        tag: {
            type: String,
            default: 'div'
        },
        span: {
            type: Number,
            default: 24,
        },
        offset: {
            type: Number,
            default: 0,
        },
        xs:{
            type: [Number, Object],
            default: 0,
        },
        sm:{
            type: [Number, Object],
            default: 0,
        },
        md:{
            type: [Number, Object],
            default: 0,
        },
        lg:{
            type: [Number, Object],
            default: 0,
        },
        xl:{
            type: [Number, Object],
            default: 0,
        },
        push:{
            type: Number,
            default: 0,
        },
        pull:{
            type: Number,
            default: 0,
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
        getColPullClass(){
            if(this.pull!=0){
                return 'c-col-pull-'+this.pull
            }
            return null
        },
        getColPushClass(){
            if(this.push!=0){
                return 'c-col-push-'+this.push
            }
            return null
        },
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
            return null
        },
        getColGutterStyle(){
            if(this.$parent.gutter!=0){
                const value = this.$parent.gutter/2+"px"
                return {
                    paddingLeft: value,
                    paddingRight: value,
                }
            }
            return null
        }
    },
    render(createElement){
        return createElement(this.tag,{
            class:[
                "c-col",
                'c-col-'+this.span,
                this.getColOffsetClass,
                this.getAllBootstrapClasses,
                this.getColPushClass,
                this.getColPullClass,
            ],
            style:this.getColGutterStyle
        },this.$slots.default)
    }
}
</script>

<style lang="scss">
@import "./../theme/src/components/CCol.scss";
</style>


