<template>
    <div class="content">
        <div class="con_left">
            <div class="con_topic">
                Pet Care Tips
                <img v-lazy="icon1" alt="">
            </div>
            <div class="con_foo">{{text}}</div>
        </div>
        <div class="con_right">
            <div class="con_tittle">
                Any Question?
                <img src="../images/icon1.png" alt="">
            </div>
            <div class="con_text">
                <img v-lazy="image4" alt="">
                <span class="text_call">
                    Call Us Free:
                    <p>11111111111</p>
                </span>
                <div class="text_item">{{introduce}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from "vuex"

    export default {
        name: "HomeFoot",
        data() {
            return {
                icon1: require("../images/icon2.png"),
                image4: require("../images/page1_img4.jpg")
            }
        },
        computed: {
            ...mapState([
                'text',
                'introduce'
            ])
        },
        mounted() {
        }
    }
</script>

<style scoped lang="less">
    .content {
        width: 100%;
        height: 7rem;
        background-color: black;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .con_left {
            width: 8rem;
            height: 6rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .con_topic {
                width: 7rem;
                height: 1rem;
                font-size: .6rem;
                color: #F2F6FC;
                img {
                    width: .6rem;
                    height: .6rem;
                }
            }
            .con_foo {
                width: 7rem;
                height: 4rem;
                font-size: .1rem;
                color: darkgrey;
            }
        }
        .con_right {
            width: 8rem;
            height: 6rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .con_tittle {
                width: 7rem;
                height: 1rem;
                font-size: .6rem;
                color: #F2F6FC;
                img {
                    width: .6rem;
                    height: .6rem;
                }
            }
            .con_text {
                width: 7rem;
                height: 4rem;
                font-size: .5rem;
                display: flex;
                flex-wrap: wrap;
                img {
                    width: 1.6rem;
                    height: 1.6rem;
                    margin-right: .5rem;
                }
                span {
                    display: block;
                    width: 3rem;
                    height:2rem;
                    color: white;
                    /*margin-top: .3rem;*/
                    p {
                        color: orange;
                    }
                }
                .text_item {
                    font-size: .2rem;
                    color: darkgrey;
                    width: 7rem;
                    height: 2rem;
                }
            }
        }
    }
</style>