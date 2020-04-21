<template>
    <div class="main_div">
<!--        <div class="a"></div>-->
        <swiper class="swiper" :options="swiperOption">
            <swiper-slide>
                <div class="swiper-slide1"></div>
            </swiper-slide>
            <swiper-slide>
                <div class="swiper-slide2"></div>
            </swiper-slide>
            <swiper-slide>
                <div class="swiper-slide3"></div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
    import 'swiper/css/swiper.css'

    export default {
        name: 'swiper-example-space-between',
        title: 'Space between slides',
        components: {
            Swiper,
            SwiperSlide
        },
        data() {
            return {
                swiperOption: {
                    spaceBetween: 30,
                    autoplay: true,
                    speed: 5000,
                    loop: false,
                    effect : 'fade',
                    fadeEffect: {
                        crossFade: true,
                    }
                }
            }
        }
    }
</script>

<style scoped lang="less">
    .main_div {
        width: 100%;
        height: 100%;
        background-color: transparent;
        .swiper {
            position: absolute;
            width: 100%;
            height: 100%;
            .swiper-slide1 {
                width: 100%;
                height: 100%;
                background-image: url("../../images/banner4.jpg");
                background-repeat: no-repeat;
                background-size: 100% 100%;
                animation: slideAnimals 15s;
                -webkit-animation: slideAnimals 15s;
                animation-iteration-count: infinite;
                -webkit-animation-iteration-count: infinite;
            }
            .swiper-slide2 {
                width: 100%;
                height: 100%;
                background-image: url("../../images/banner1.jpg");
                background-repeat: no-repeat;
                background-size: 100% 100%;
                animation: slideAnimals 15s;
                -webkit-animation: slideAnimals 15s;
                animation-iteration-count: infinite;
                -webkit-animation-iteration-count: infinite;
            }
            .swiper-slide3 {
                width: 100%;
                height: 100%;
                background-image: url("../../images/bgci.jpg");
                background-repeat: no-repeat;
                background-size: 100% 100%;
                animation: slideAnimals 15s;
                -webkit-animation: slideAnimals 15s;
                animation-iteration-count: infinite;
                -webkit-animation-iteration-count: infinite;
            }
        }
    }

    @keyframes slideAnimals {
    0%  {
        -webkit-transform: scale(1, 1);
        transform: scale(1, 1);
    }
        50% {
            -webkit-transform: scale(1.05, 1.05);
            transform: scale(1.05, 1.05);
        }
        100% {
            -webkit-transform: scale(1, 1);
            transform: scale(1, 1);
        }
    }
    @-webkit-keyframes slideAnimals {
        0%  {
            -webkit-transform: scale(1, 1);
            transform: scale(1, 1);
        }
        50% {
            -webkit-transform: scale(1.05, 1.05);
            transform: scale(1.05, 1.05);
        }
        100% {
            -webkit-transform: scale(1, 1);
            transform: scale(1, 1);
           }
    }
</style>