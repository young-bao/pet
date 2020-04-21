<template>
    <div class="nav_bar">
        <div class="content">
            <img src="../images/logo.png">
            <ul>
                <li v-for="(item,index) in items" @click="goTo(item,index)">
                    <p :class="{active_li:choosedIndex == index}" v-if="index != 1">{{item}}</p>
                    <el-dropdown  v-else>
                        <p :class="{active_li:choosedIndex == index}" style="font-size: .4rem">{{item}}</p>
                    <el-dropdown-menu>
                        <el-dropdown-item divided>Testimonials</el-dropdown-item>
                        <el-dropdown-item divided>Archive</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Nav_bar",
        data() {
            return {
                items: ["Home","About","Contact"],
                isShow: false
            }
        },
        props: ["choosedIndex"],
        methods: {
            goTo(page,index) {
                this.$router.replace("/"+page)
            },
            drop(index) {
                if(index == 1) {
                    this.isShow = true
                    console.log(1);
                }
            },
            closedMuse(index) {
                if(index == 1) {
                    this.isShow = false
                    console.log(2);
                }
            }
        },
        mounted() {

        }
    }
</script>

<style scoped lang="less">
    .nav_bar {
        background-image: url("../images/sub_bg.png");
        width: 100%;
        height: 2rem;
        background-repeat: no-repeat;
        background-color: #000000;
        .content {
            img {
                margin-left: 3rem;
                margin-top: .5rem;
                width: 2rem;
                height: 1rem;
            }
            ul {
                display: flex;
                flex-direction: row;
                font-size: .4rem;
                font-family: 'Noto Sans', sans-serif;
                color: #606266;
                float: right;
                margin-top: .4rem;
                margin-right: 3rem;
                li {
                    list-style: none;
                    flex: 1;
                    text-align: center;
                    padding-left: .6rem;
                    cursor: pointer;
                }
            }
        }
    }
    .active_li {
        color: white;
    }
</style>