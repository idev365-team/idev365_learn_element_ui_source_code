<template>
    <div>
        <h1>Hello ABC</h1>
        <el-button @click="visible=true">Button</el-button>
        <el-dialog :visible.sync="visible" title="Hello World">
            <p>Try Element</p>
        </el-dialog>
    </div>
</template>

<script>
import Vue from 'vue';
import { Button,Dialog } from 'element-ui';

export default {
    data(){
        return {
            visible:false,
        }
    },
    components:{
        "el-button":Button,
        "el-dialog":Dialog
    }
}
</script>
