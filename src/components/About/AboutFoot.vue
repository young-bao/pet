<template>
    <div class="main_con">
        <div class="special">
            Special Services
            <img src="../../images/icon2.png" alt="">
        </div>
        <div class="animals">
            <div class="animals_box" v-for="(item,index) in animalsMes">
                <img :src="item.imgS" alt="">
                <div class="article">
                    <a href="">{{item.aLink}}</a>
                    <div class="box_text">{{item.infor}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AboutFoot",
        data() {
            return {
                animalsMes: [{
                    imgS: require("@/images/page3_img3.jpg"),
                    aLink: "Lokitoq",
                    infor: "Laes quis orci eget diam viverralopr con equat. Fusce sagit quam ihui hyhy kolo opirlo pulvinarhjkjo."
                },{
                    imgS: require("@/images/page3_img4.jpg"),
                    aLink: "Gylikot",
                    infor: "Foaesent quis orci diam viverralopr con equat. Lusce sagittis quam ihui hyhy opir pulvinarhjk velit."
                },{
                    imgS: require("@/images/page3_img5.jpg"),
                    aLink: "Sertymon",
                    infor: "Eroaesent quis orci ediam viverralopr con jikjulo poiu retyulo hyk equat. Usce sagittis ki quam ihui hyhy opirp."
                }]
            }
        }
    }
</script>

<style scoped lang="less">
    .main_con {
        position: absolute;
        width: 100%;
        height: 10rem;
        top: 23rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .special {
            width: 20rem;
            height: 1rem;
            font-size: .6rem;
            color: red;
            img {
                width: .6rem;
                height: .6rem;
            }
        }
        .animals {
            width: 20rem;
            height: 5rem;
            display: flex;
            justify-content: space-between;
            .animals_box {
                width: 6rem;
                height: 5rem;
                font-size: .5rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
                img {
                    width: 2.5rem;
                    height: 2.5rem;
                }
                .article {
                    width: 3rem;
                    height: 2.5rem;
                    font-size: .2rem;
                    a {
                        font-size: .3rem;
                        color: orangered;
                        display: block;
                        margin-bottom: .5rem;
                        text-decoration: none;
                        &:hover {
                            color: #17E1E6;
                        }
                    }
                }
            }
        }
    }
</style>