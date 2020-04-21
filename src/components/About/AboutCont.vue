<template>
    <div class="content">
        <div class="con_left">
            <div class="con_item">
                <div class="con_wel">
                    We Recommend
                    <img src="../../images/icon1.png" alt="">
                </div>
                <div class="con_img" v-for="(item,index) in weCommend" :key="index">
                    <img :src=item.imgSr alt="">
                    <p class="con_p">
                        <a href="#" style="text-decoration:none;">{{item.linkText}}</a> <br>
                        <br>
                        <span class="con_sp">
                            {{item.commend}}
                    </span>
                    </p>
                    <el-button type="primary" round class="el-button" size="mini">more</el-button>
                </div>
            </div>
        </div>
        <div class="con_right">
            <div class="con_serve">
                Main Services
                <img src="../../images/icon1.png" alt="">
            </div>
            <div class="right_item" v-for="(item,index) in MainServe" :key="index">
                <div class="right_num"
                     :style="{backgroundColor:index%2 === 0?'lightgreen':'orange'}">{{index+1}}</div>
                <div class="right_text">
                    <a href="">{{item.linkSer}}</a>
                    <p>{{item.aboutText}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from "vuex"
    export default {
        name: "AboutCont",
        computed: {
            ...mapState([
                "weCommend","MainServe"
            ])
        }
    }
</script>

<style scoped lang="less">
    .content {
        position: absolute;
        width: 100%;
        height: 21rem;
        top: 2rem;
        display: flex;
        justify-content: center;
        border-bottom: .01rem solid #1989fa;
        box-shadow: .1rem .1rem .1rem #1989fa;
        background-color: #E4E7ED;
        .con_left {
             width: 13rem;
             height: 21rem;
            .con_item {
                width: 13rem;
                height: 8rem;
                margin-top: 0rem;
                padding: 1rem;
                .con_wel {
                    font-size: .6rem;
                    width: 8rem;
                    height: 1rem;
                    color: chartreuse;
                    img {
                        width: .5rem;
                        height: .5rem;
                    }
                }
                .con_img {
                    width: 8rem;
                    height: 10rem;
                    img {
                        float: left;
                        margin: .2rem;
                        width: 4rem;
                        height: 2rem;
                    }
                    .con_p {
                        font-size: .3rem;
                        a {
                            font-size: .2rem;
                            &:hover {
                                color: orangered;
                            }
                        }
                        .con_sp {
                            font-size: .1rem;
                            color: #888888;
                        }
                    }
                }
                .el-button {
                    margin-bottom: 1rem;
                }
            }
         }
        .con_right {
            width: 7rem;
            height: 21rem;
            .con_serve {
                font-size: .6rem;
                width: 8rem;
                height: 1rem;
                color: chartreuse;
                margin-top: .9rem;
                margin-bottom: .5rem;
                img {
                    width: .5rem;
                    height: .5rem;
                }
            }
            .right_item {
                width: 7rem;
                height: 3rem;
                display: flex;
                justify-content: space-between;
                font-size: .1rem;
                .right_num {
                    width: 1rem;
                    height: 1rem;
                    background-color: orange;
                    font-size: .5rem;
                    font-weight: bold;
                    text-align: center;
                    color: white;
                    line-height: 1rem;
                }
                .right_text {
                    width: 5rem;
                    height: 2rem;
                    p {
                        display: inline-block;
                        margin-top: .5rem;
                    }
                    a {
                        text-decoration: none;
                        &:hover {
                            color: orangered;
                        }
                    }
                }
            }
        }
    }
</style>