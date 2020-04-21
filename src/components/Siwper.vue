<template>
    <div class="content">
        <div class="content_item">
            <swiper class="swiper" :options="swiperOption">
                <swiper-slide class="swiper-slide" v-for="(item,index) in imgArr" :key="index">
                    <img v-lazy="item.imgLink" class="imgStyle">
                </swiper-slide>
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
            </swiper>
            <div class="banner">
                <div class="banner_item">
                    They Need Your
                    <span style="color: orangered">Love</span> and <span style="color: aquamarine">Care</span>
                    <p style="font-size: .5rem;color: darkgrey">It is so easy to make them happy</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
    import 'swiper/css/swiper.css'

    export default {
        name: 'swiper-example-navigation',
        title: 'Navigation',
        components: {
            Swiper,
            SwiperSlide
        },
        data() {
            return {
                imgArr: [{
                    imgLink: require("../images/slide.jpg")
                },{
                    imgLink: require("../images/slide1.jpg")
                },{
                    imgLink: require("../images/slide2.jpg")
                },{
                    imgLink: require("../images/slide3.jpg")
                }],
                swiperOption: {
                    loop: false,
                    autoplay: true,
                    speed: 2000,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    },
                    lazy: {
                        loadPrevNext: true,
                    },
                    pagination: {
                        el: '.swiper-pagination',
                    },
                }
            }
        }
    }
</script>

<style scoped lang="less">
    .content {
        position: relative;
        width: 100%;
        height: 12rem;
        border-bottom: 0.01rem solid #F2F6FC;
        .content_item {
            width: 22rem;
            height: 11rem;
            position: absolute;
            box-shadow: 0rem .5rem .6rem #888888;
            left: 1rem;
            display: flex;
            .swiper {
                left: 1rem;
                width: 16rem;
                height: 12rem;
                margin-left: -1rem;
                .swiper-slide {
                    width: 16rem;
                    height: 12rem;
                    .imgStyle {
                        width: 22rem;
                        height: 11rem;
                    }
                }
            }
            .banner {
                background-color: black;
                float: right;
                width: 6rem;
                height: 11rem;
                font-size: .8rem;
                color: white;
                text-align: center;
                display: flex;
                align-items: center;
                .banner_item {
                }
            }
        }
    }


</style>