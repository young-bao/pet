<template>
    <el-backtop :bottom="50" class="backtop">
        <div class="divUp">
            UP
        </div>
    </el-backtop>
</template>    

<script>
    export default {
        name: "BackTop",
        methods: {}
    }
</script>

<style scoped lang="less">
    .divUp {
        height: 100%;
        width: 100%;
        background-color: #f2f5f6;
        box-shadow: 0 0 6px rgba(0,0,0, .82);
        text-align: center;
        line-height: 40px;
        color: #1989fa;
        border-radius: 50%;
        &:hover {
            color: red;
        }
    }
</style>