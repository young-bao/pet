<template>
    <div class="con_all">
        <div class="con_item">
            <div class="con_wel">
                Welcome to Our Site
                <img src="../images/icon1.png" alt="">
            </div>
            <div class="con_img">
                <img src="../images/page1_img5.jpg" alt="">
                <p class="con_p">
                    <a href="#" style="text-decoration:none;">Click here</a> &nbsp;for more info about this free website template created by TemplateMonster.com<br>
                    <br>
                    <span class="con_sp">
                        Hibh ullamcorper accumsan sem lectus ut sapien. Donec venenatis.
                    Praesent quis orci eget diam viverra consequat. Fusce sagittis quam in pulvinar sollicitudin velit velit cursus nibh ullamcorper accumsan sem lectus ut sapien.
                    Donec venenatis posuere velit aty convallis neque ullamcorper quis.
                    Integer posuere ipsum eu risus sollicitudin nec varius eratylo luctus.
                    Fusce fringilla erat ac urna pe llentesque congue. Nunc fringilla diam sit amet adipi scing bibendum turpis velit feugiat urna et pharetra neque nisi ac nunc.
                    Vivamus est quam dapibuslok. ..ullamco rper imperdiet nec euismod ut arcu. Nulla facilisi. Etiam mauris lorem pulvinar vel con sequat ut pretium ac erat.
                    Morbi facilisis elit eu nisl blandit ac blandit enim faucibu. Praesent quis orci eget diam viverra consequat.
                    Fusce sagittis.
                    </span>
                </p>
            </div>
            <el-button type="primary" round class="el-button" size="mini">more</el-button>
        </div>
        <div class="con_text">
            <div class="con_news">
                Latest News
                <img src="../images/icon2.png" alt="">
            </div>
            <ul class="con_ul">
                <li v-for="item in newsTexts">
                    <div>
                        <span class="con_time">
                            <span>{{item.day}}</span>
                            <span>{{item.month}}</span>
                        </span>
                        <div class="news_text">
                            <a href="">{{item.link}}</a>
                            <p>{{item.dateT}}</p>
                            <p>{{item.news}}</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Welcome",
        data() {
            return {
                newsTexts: [
                    {
                        month: "APR",
                        day: "27",
                        link: "Duis posuere consectetur pellentesqe;",
                        dateT: "April 27.03.20",
                        news: "Sed nisi turpis, pellentesque at ultrices in dapibus in magna. Nunc easi diam risus,placerat ut scelerisque suscipit eu ante. Nullam vitae dolor ullcper felises"
                    },
                    {
                        month: "APR",
                        day: "28",
                        link: "Kuuis posuere consectetur pellentes;",
                        dateT: "April 28.03.20",
                        news: "Eed nisi turpis, pellentesque at ultrices in dapibus in magna. Nunc easi diam risulacerat ut scelerisque et suscipit eu ante. Nullam vitae dolor ullcper felises."
                    },
                    {
                        month: "APR",
                        day: "29",
                        link: "Opuis posuere honsectetur pellentesyt;",
                        dateT: "April 29.03.20",
                        news: "Koed nisi turpis, pellentesque at ultrices in dapibus in magna. Nunc easi diam risujo placerat ut scelerisque et suscipit eu ante. Ullam vitae dolor ullcper felises."
                    }
                ]
            }
        }
    }
</script>

<style scoped lang="less">
    .con_all {
        width: 100%;
        height: 15rem;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #F2F6FC;
        border-bottom: 0.01rem solid #F2F6FC;
        .con_item {
            width: 10rem;
            height: 12rem;
            margin-top: .7rem;
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
                    .con_sp {
                        font-size: .3rem;
                        color: #888888;
                    }
                }
            }
            .el-button {
                margin-bottom: 1rem;
            }
        }
        .con_text {
            width: 10rem;
            height: 12rem;
            margin-top: .7rem;
            padding: 1rem;
            .con_news {
                font-size: .6rem;
                width: 8rem;
                height: 1rem;
                color: chartreuse;
                img {
                    width: .5rem;
                    height: .5rem;
                }
            }
            .con_ul {
                font-size: .25rem;
                list-style: none;
                li {
                    .con_time {
                        background-color: orange;
                        width: 1rem;
                        height: 1rem;
                        font-size: .2rem;
                        text-align: center;
                        color: white;
                        font-weight: bold;
                        display: inline-block;
                        span {
                            display: block;
                            margin-top: .1rem;
                        }
                    }
                    .con_text {
                        float: right;
                    }
                }
            }
        }
    }
</style>