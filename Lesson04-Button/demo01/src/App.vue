<template>
    <div>
        <el-row>
            <el-button>Button</el-button>
            <el-button type="primary">Button</el-button>
            <el-button type="success">Button</el-button>
            <el-button type="info">Button</el-button>
            <el-button type="warning">Button</el-button>
            <el-button type="danger">Button</el-button>
        </el-row>
        <el-row>
            <el-button plain>Button</el-button>
            <el-button plain type="primary">Button</el-button>
            <el-button plain type="success">Button</el-button>
            <el-button plain type="info">Button</el-button>
            <el-button plain type="warning">Button</el-button>
            <el-button plain type="danger">Button</el-button>
        </el-row>
        <el-row>
            <el-button round>Button</el-button>
            <el-button round type="primary">Button</el-button>
            <el-button round type="success">Button</el-button>
            <el-button round type="info">Button</el-button>
            <el-button round type="warning">Button</el-button>
            <el-button round type="danger">Button</el-button>
        </el-row>
        <el-row>
            <el-button circle icon="el-icon-search"></el-button>
            <el-button circle icon="el-icon-edit" type="primary"></el-button>
            <el-button circle icon="el-icon-check" type="success"></el-button>
            <el-button circle icon="el-icon-message" type="info"></el-button>
            <el-button circle icon="el-icon-star-off" type="warning"></el-button>
            <el-button circle icon="el-icon-delete" type="danger"></el-button>
        </el-row>


        <el-row>
            <el-button disabled>Button</el-button>
            <el-button disabled type="primary">Button</el-button>
            <el-button disabled type="success">Button</el-button>
            <el-button disabled type="info">Button</el-button>
            <el-button disabled type="warning">Button</el-button>
            <el-button disabled type="danger">Button</el-button>
        </el-row>
        <el-row>
            <el-button disabled plain>Button</el-button>
            <el-button disabled plain type="primary">Button</el-button>
            <el-button disabled plain type="success">Button</el-button>
            <el-button disabled plain type="info">Button</el-button>
            <el-button disabled plain type="warning">Button</el-button>
            <el-button disabled plain type="danger">Button</el-button>
        </el-row>
        <el-row>
            <el-button disabled round>Button</el-button>
            <el-button disabled round type="primary">Button</el-button>
            <el-button disabled round type="success">Button</el-button>
            <el-button disabled round type="info">Button</el-button>
            <el-button disabled round type="warning">Button</el-button>
            <el-button disabled round type="danger">Button</el-button>
        </el-row>
        <el-row>
            <el-button disabled circle icon="el-icon-search"></el-button>
            <el-button disabled circle icon="el-icon-edit" type="primary"></el-button>
            <el-button disabled circle icon="el-icon-check" type="success"></el-button>
            <el-button disabled circle icon="el-icon-message" type="info"></el-button>
            <el-button disabled circle icon="el-icon-star-off" type="warning"></el-button>
            <el-button disabled circle icon="el-icon-delete" type="danger"></el-button>
        </el-row>

        <el-row>
            <el-button type="text">文字按钮</el-button>
            <el-button type="text" disabled>文字按钮</el-button>
        </el-row>

        <el-row>
            <el-button type="primary" icon="el-icon-edit"></el-button>
            <el-button type="primary" icon="el-icon-share"></el-button>
            <el-button type="primary" icon="el-icon-delete"></el-button>
            <el-button type="primary" icon="el-icon-search">搜索</el-button>
            <el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
        </el-row>


        <el-row>
            <el-button-group>
                <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
                <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
            </el-button-group>
            <el-button-group>
                <el-button type="primary" icon="el-icon-edit"></el-button>
                <el-button type="primary" icon="el-icon-share"></el-button>
                <el-button type="primary" icon="el-icon-delete"></el-button>
            </el-button-group>
        </el-row>
        <el-row>
            <el-button type="primary" :loading="true">加载中</el-button>
        </el-row>

        <el-row>
            <el-button>默认按钮</el-button>
            <el-button size="medium">中等按钮</el-button>
            <el-button size="small">小型按钮</el-button>
            <el-button size="mini">超小按钮</el-button>
        </el-row>
        <el-row>
            <el-button round>默认按钮</el-button>
            <el-button size="medium" round>中等按钮</el-button>
            <el-button size="small" round>小型按钮</el-button>
            <el-button size="mini" round>超小按钮</el-button>
        </el-row>

    </div>
</template>

<script>
import Vue from 'vue';
import { ButtonGroup,Button,Row } from 'element-ui';

export default {
    data(){
        return {
            visible:false,
        }
    },
    components:{
        "el-button-group":ButtonGroup,
        "el-button":Button,
        "el-row":Row,
    }
}
</script>
