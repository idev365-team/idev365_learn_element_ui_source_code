

<script>
export default {
    name: "CRow",
    componentName: "CRow",
    props: {
        tag: {
            type: String,
            default: 'div',
        },
        gutter: {
            type: Number,
            default: 0,
        },
        type: {
            type: String,
            default: "",
            validator: function (value) {
                return ['flex', ''].indexOf(value) !== -1
            }
        },
        justify: {
            type: String,
            default: "",
        }
    },
    computed: {
        getTypeClass(){
            if(this.type==="flex"){
                return 'c-row--'+this.type
            }
        },
        getJustifyStyle(){
            if(this.justify!=""){
                let justifyStyle = "";
                switch(this.justify){
                    case 'start':
                        justifyStyle = {
                            justifyContent:'flex-start',
                        }
                        break;
                    case 'end':
                        justifyStyle = {
                            justifyContent:'flex-end',
                        }
                        break;
                    case 'center':
                        justifyStyle = {
                            justifyContent:'center',
                        }
                        break;
                    case 'space-around':
                        justifyStyle = {
                            justifyContent:'space-around',
                        }
                        break;
                    case 'space-between':
                        justifyStyle = {
                            justifyContent:'space-between',
                        }
                        break;
                    case 'space-evenly':
                        justifyStyle = {
                            justifyContent:'space-evenly',
                        }
                        break;
                    default:
                        justifyStyle = {
                            justifyContent:this.justify,
                        }
                        break;
                }
                return justifyStyle
            }
        },
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
    },
    render(createElement){
        return createElement(this.tag,{
            props:{
            },
            style:[this.getRowGutterStyle,this.getJustifyStyle],
            class:[
                "c-row",
                this.getTypeClass,
            ]
        },this.$slots.default)
    }
}
</script>

<style lang="scss">
.c-row:after {
        display: block;
        content: "";
        clear: both;
    }
.c-row--flex{
    display: flex;
}
</style>


