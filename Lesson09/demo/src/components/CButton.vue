<template>
    <button type="button" class="c-button" :class="['c-button--'+type,{
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
    @font-face {
        font-family: 'element-icons';
        src: url(./../assets/element-icons.woff) format("woff"), url(./../assets/element-icons.ttf) format("truetype");
        /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
        font-weight: normal;
        font-style: normal; 
    }

    [class^="c-icon-"], [class*=" c-icon-"] {
        /* use !important to prevent issues with browser extensions that change fonts */
        font-family: 'element-icons' !important;
        speak: none;
        font-style: normal;
        font-weight: normal;
        font-variant: normal;
        text-transform: none;
        line-height: 1;
        vertical-align: baseline;
        display: inline-block;
        /* Better Font Rendering =========== */
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale; 
    }

    .c-icon-info:before {
    content: "\E61A"; }

    .c-icon-error:before {
    content: "\E62C"; }

    .c-icon-success:before {
    content: "\E62D"; }

    .c-icon-warning:before {
    content: "\E62E"; }

    .c-icon-question:before {
    content: "\E634"; }

    .c-icon-back:before {
    content: "\E606"; }

    .c-icon-arrow-left:before {
    content: "\E600"; }

    .c-icon-arrow-down:before {
    content: "\E603"; }

    .c-icon-arrow-right:before {
    content: "\E604"; }

    .c-icon-arrow-up:before {
    content: "\E605"; }

    .c-icon-caret-left:before {
    content: "\E60A"; }

    .c-icon-caret-bottom:before {
    content: "\E60B"; }

    .c-icon-caret-top:before {
    content: "\E60C"; }

    .c-icon-caret-right:before {
    content: "\E60E"; }

    .c-icon-d-arrow-left:before {
    content: "\E610"; }

    .c-icon-d-arrow-right:before {
    content: "\E613"; }

    .c-icon-minus:before {
    content: "\E621"; }

    .c-icon-plus:before {
    content: "\E62B"; }

    .c-icon-remove:before {
    content: "\E635"; }

    .c-icon-circle-plus:before {
    content: "\E601"; }

    .c-icon-remove-outline:before {
    content: "\E63C"; }

    .c-icon-circle-plus-outline:before {
    content: "\E602"; }

    .c-icon-close:before {
    content: "\E60F"; }

    .c-icon-check:before {
    content: "\E611"; }

    .c-icon-circle-close:before {
    content: "\E607"; }

    .c-icon-circle-check:before {
    content: "\E639"; }

    .c-icon-circle-close-outline:before {
    content: "\E609"; }

    .c-icon-circle-check-outline:before {
    content: "\E63E"; }

    .c-icon-zoom-out:before {
    content: "\E645"; }

    .c-icon-zoom-in:before {
    content: "\E641"; }

    .c-icon-d-caret:before {
    content: "\E615"; }

    .c-icon-sort:before {
    content: "\E640"; }

    .c-icon-sort-down:before {
    content: "\E630"; }

    .c-icon-sort-up:before {
    content: "\E631"; }

    .c-icon-tickets:before {
    content: "\E63F"; }

    .c-icon-document:before {
    content: "\E614"; }

    .c-icon-goods:before {
    content: "\E618"; }

    .c-icon-sold-out:before {
    content: "\E63B"; }

    .c-icon-news:before {
    content: "\E625"; }

    .c-icon-message:before {
    content: "\E61B"; }

    .c-icon-date:before {
    content: "\E608"; }

    .c-icon-printer:before {
    content: "\E62F"; }

    .c-icon-time:before {
    content: "\E642"; }

    .c-icon-bell:before {
    content: "\E622"; }

    .c-icon-mobile-phone:before {
    content: "\E624"; }

    .c-icon-service:before {
    content: "\E63A"; }

    .c-icon-view:before {
    content: "\E643"; }

    .c-icon-menu:before {
    content: "\E620"; }

    .c-icon-more:before {
    content: "\E646"; }

    .c-icon-more-outline:before {
    content: "\E626"; }

    .c-icon-star-on:before {
    content: "\E637"; }

    .c-icon-star-off:before {
    content: "\E63D"; }

    .c-icon-location:before {
    content: "\E61D"; }

    .c-icon-location-outline:before {
    content: "\E61F"; }

    .c-icon-phone:before {
    content: "\E627"; }

    .c-icon-phone-outline:before {
    content: "\E628"; }

    .c-icon-picture:before {
    content: "\E629"; }

    .c-icon-picture-outline:before {
    content: "\E62A"; }

    .c-icon-delete:before {
    content: "\E612"; }

    .c-icon-search:before {
    content: "\E619"; }

    .c-icon-edit:before {
    content: "\E61C"; }

    .c-icon-edit-outline:before {
    content: "\E616"; }

    .c-icon-rank:before {
    content: "\E632"; }

    .c-icon-refresh:before {
    content: "\E633"; }

    .c-icon-share:before {
    content: "\E636"; }

    .c-icon-setting:before {
    content: "\E638"; }

    .c-icon-upload:before {
    content: "\E60D"; }

    .c-icon-upload2:before {
    content: "\E644"; }

    .c-icon-download:before {
    content: "\E617"; }

    .c-icon-loading:before {
    content: "\E61E"; }

    .c-icon-loading {
    animation: rotating 2s linear infinite; }

    .c-icon--right {
    margin-left: 5px; }

    .c-icon--left {
    margin-right: 5px; }

    @keyframes rotating {
    0% {
        transform: rotateZ(0deg); }
    100% {
        transform: rotateZ(360deg); } }





    .c-button{
        display: inline-block;
        line-height: 1;
        white-space: nowrap;
        cursor: pointer;
        background: #fff;
        border: 1px solid #dcdfe6;
        border-color: #dcdfe6;
        color: #606266;
        -webkit-appearance: none;
        text-align: center;
        box-sizing: border-box;
        outline: none;
        margin: 0;
        transition: .1s;
        font-weight: 500;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        padding: 12px 20px;
        font-size: 14px;
        border-radius: 4px; 
        & [class*="c-icon-"] + span {
            margin-left: 5px;
        }

        &:hover, &:focus {
            color: #409EFF;
            border-color: #c6e2ff;
            background-color: #ecf5ff; }
        &:active {
            color: #3a8ee6;
            border-color: #3a8ee6;
            outline: none; 
        }
        &.is-plain:hover, &.is-plain:focus {
            background: #fff;
            border-color: #409EFF;
            color: #409EFF; 
        }
        &.is-plain:active {
            background: #fff;
            border-color: #3a8ee6;
            color: #3a8ee6;
            outline: none; 
        }
        &.is-active {
            color: #3a8ee6;
            border-color: #3a8ee6; 
        }
        &.is-round {
            border-radius: 20px;
            padding: 12px 23px; 
        }
        &.is-circle {
            border-radius: 50%;
            padding: 12px; 
        }
        &.is-disabled, &.is-disabled:hover, &.is-disabled:focus {
            color: #c0c4cc;
            cursor: not-allowed;
            background-image: none;
            background-color: #fff;
            border-color: #ebeef5;
        }
        &.is-loading {
            position: relative;
            pointer-events: none; 
        }
        &.is-loading:before {
            pointer-events: none;
            content: '';
            position: absolute;
            left: -1px;
            top: -1px;
            right: -1px;
            bottom: -1px;
            border-radius: inherit;
            background-color: rgba(255, 255, 255, 0.35); }
        }

    .c-button--default{
        
    }

    .c-button--primary {
        color: #fff;
        background-color: #409EFF;
        border-color: #409EFF; 

        &:hover, &:focus {
            background: #66b1ff;
            border-color: #66b1ff;
            color: #fff; 
        }
        &:active {
            background: #3a8ee6;
            border-color: #3a8ee6;
            color: #fff;
            outline: none; 
        }
        &.is-plain {
            color: #409EFF;
            background: #ecf5ff;
            border-color: #b3d8ff; 
        }
        &.is-plain:hover, &.is-plain:focus {
            background: #409EFF;
            border-color: #409EFF;
            color: #fff; 
        }
        &.is-disabled, &.is-disabled:hover, &.is-disabled:focus, &.is-disabled:active {
            color: #fff;
            background-color: #a0cfff;
            border-color: #a0cfff; 
        }
    }

    .c-button--success {
        color: #fff;
        background-color: #67c23a;
        border-color: #67c23a; 
        &:hover, &:focus {
            background: #85ce61;
            border-color: #85ce61;
            color: #fff; 
        }
        &:active {
            background: #5daf34;
            border-color: #5daf34;
            color: #fff;
            outline: none; 
        }
        &.is-plain {
            color: #67c23a;
            background: #f0f9eb;
            border-color: #c2e7b0; 
        }
        &.is-plain:hover, &.is-plain:focus {
            background: #67c23a;
            border-color: #67c23a;
            color: #fff; 
        }
        &.is-plain:active {
            background: #5daf34;
            border-color: #5daf34;
            color: #fff;
            outline: none; 
        }
        &.is-disabled, &.is-disabled:hover, &.is-disabled:focus, &.is-disabled:active {
            color: #fff;
            background-color: #b3e19d;
            border-color: #b3e19d; 
        }
    }

 


    .c-button--info {
        color: #fff;
        background-color: #909399;
        border-color: #909399; 

           

        &:hover, &:focus {
            background: #a6a9ad;
            border-color: #a6a9ad;
            color: #fff; 
        }
        &:active {
            background: #82848a;
            border-color: #82848a;
            color: #fff;
            outline: none; 
        }
        &.is-plain {
            color: #909399;
            background: #f4f4f5;
            border-color: #d3d4d6; 
        }
        &.is-plain:hover, &.is-plain:focus {
            background: #909399;
            border-color: #909399;
            color: #fff; 
        }
        &.is-plain:active {
            background: #82848a;
            border-color: #82848a;
            color: #fff;
            outline: none; 
        }
        &.is-disabled, &.is-disabled:hover, &.is-disabled:focus, &.is-disabled:active {
            color: #fff;
            background-color: #c8c9cc;
            border-color: #c8c9cc; 
        }
    }

    .c-button--warning {
        color: #fff;
        background-color: #e6a23c;
        border-color: #e6a23c; 
        &:hover, &:focus {
            background: #ebb563;
            border-color: #ebb563;
            color: #fff; 
        }
        &:active {
            background: #cf9236;
            border-color: #cf9236;
            color: #fff;
            outline: none; 
        }
        &.is-plain {
            color: #e6a23c;
            background: #fdf6ec;
            border-color: #f5dab1; 
        }
        &.is-plain:hover, &.is-plain:focus {
            background: #e6a23c;
            border-color: #e6a23c;
            color: #fff; 
        }
        &.is-plain:active {
            background: #cf9236;
            border-color: #cf9236;
            color: #fff;
            outline: none; 
        }
        &.is-disabled, &.is-disabled:hover, &.is-disabled:focus, &.is-disabled:active {
            color: #fff;
            background-color: #f3d19e;
            border-color: #f3d19e;
        }
    }
    
    .c-button--danger {
        color: #fff;
        background-color: #f56c6c;
        border-color: #f56c6c; 

        &:hover, &:focus {
            background: #f78989;
            border-color: #f78989;
            color: #fff; 
        }
        &:active {
            background: #dd6161;
            border-color: #dd6161;
            color: #fff;
            outline: none; 
        }
        &.is-plain {
            color: #f56c6c;
            background: #fef0f0;
            border-color: #fbc4c4; }
        &.is-plain:hover, &.is-plain:focus {
            background: #f56c6c;
            border-color: #f56c6c;
            color: #fff; 
        }
        &.is-plain:active {
            background: #dd6161;
            border-color: #dd6161;
            color: #fff;
            outline: none; 
        }
        &.is-disabled, &.is-disabled:hover, &.is-disabled:focus, &.is-disabled:active {
            color: #fff;
            background-color: #fab6b6;
            border-color: #fab6b6; 
        }
    }

    .c-button--text {
        border-color: transparent;
        color: #409EFF;
        background: transparent;
        padding-left: 0;
        padding-right: 0; 
        &:hover, &:focus {
            color: #66b1ff;
            border-color: transparent;
            background-color: transparent; 
        }
        &:active {
            color: #3a8ee6;
            border-color: transparent;
            background-color: transparent; 
        }
        &.is-disabled, &.is-disabled:hover, &.is-disabled:focus {
            border-color: transparent;
        }
    }
    
    
</style>


