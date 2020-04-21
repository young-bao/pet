<template>
    <swiper class="swiper" :options="swiperOption">
        <swiper-slide class="swiper-slide"  v-for="(item,index) in animalArr" :key="index">
            <div class="swiper_box">
                <img v-lazy="item.imgSrc" alt="">
                <a href="#" style="text-decoration: none;display: block;margin-bottom: .1rem">{{item.link}}</a>
                <span>{{item.text}}</span>
            </div>

        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
<!--        <div class="swiper-button-prev" slot="button-prev"></div>-->
<!--        <div class="swiper-button-next" slot="button-next"></div>-->
    </swiper>
</template>

<script>
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
    import 'swiper/css/swiper.css'

    export default {
        name: 'swiper-example-responsive-breakpoints',
        title: 'Responsive breakpoints',
        components: {
            Swiper,
            SwiperSlide
        },
        data() {
            return {
                swiperOption: {
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    },
                    loop: true,
                    autoplay: true,
                    speed:2000,
                    lazy: {
                        loadPrevNext: true,
                    },
                    slidesPerView: 5,
                    spaceBetween: 50,
                    breakpoints: {
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 40
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 30
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        },
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 10
                        }
                    }
                },
                animalArr: [
                    {
                        imgSrc: require("../images/carousel1_img1.jpg"),
                        link: "Aeraesent quis hoj rcieget diam iverral.",
                        text: "Loaesent quis orci diam viverralopr con equat. Lusce sagittis quam ihui hyhy opir pulvinarhjk velit."
                    },
                    {
                        imgSrc: require("../images/carousel1_img2.jpg"),
                        link: "Tyeraesent quis hojo rcieget iam iverralji.",
                        text: "Eroaesent quis orci ediam viverralopr con jikjulo poiu retyulo hyk equat. Usce sagittis ki quam ihui hyhy opirp."
                    },
                    {
                        imgSrc: require("../images/carousel1_img3.jpg"),
                        link: "Aeraesent quis hoj rcieget diam iverral",
                        text: "Loaesent quis orci diam viverralopr con equat. Lusce sagittis quam ihui hyhy opir pulvinarhjk velit."
                    },
                    {
                        imgSrc: require("../images/carousel1_img4.jpg"),
                        link: "Aeraesent quis hoj rcieget diam iverral.",
                        text: "Loaesent quis orci diam viverralopr con equat. Lusce sagittis quam ihui hyhy opir pulvinarhjk velit."
                    },{
                        imgSrc: require("../images/carousel1_img5.jpg"),
                        link: "Aeraesent quis hoj rcieget diam iverral.",
                        text: "Loaesent quis orci diam viverralopr con equat. Lusce sagittis quam ihui hyhy opir pulvinarhjk velit."
                    },
                    {
                        imgSrc: require("../images/carousel1_img6.jpg"),
                        link: "Praesent quis orcidiam viverralopr.",
                        text: "Loaesent quis orci diam viverralopr con equat. Lusce sagittis quam ihui hyhy opir pulvinarhjk velit."
                    }
                ]
            }
        }
    }
</script>


<style scoped lang="less">
    .swiper {
        width: 20rem;
        height: 3rem;
        .swiper-slide {
            font-size: .2rem;
            img {
                float: left;
                margin: .1rem;
                width: 2rem;
                height: 2rem;
            }
            a{
                margin-left: .2rem;
            }
            span {
                margin-left: .2rem;
            }
        }
    }
</style>