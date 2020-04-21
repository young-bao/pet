<template>
    <div>
        <div v-if="isMounted">
            <Loading></Loading>
        </div>
        <div v-else>
            <navBar choosed-index="2"></navBar>
            <blog-swiper></blog-swiper>
            <text-box></text-box>
        </div>
    </div>
</template>

<script>
    import navBar from '../../components/Nav_bar'
    import Loading from "../../components/Loading";
    import BlogSwiper from "../../components/BlogItem/BlogSwiper";
    import TextBox from "../../components/BlogItem/TextBox";

    export default {
        name: "index",
        components: {
            navBar,
            Loading,
            BlogSwiper,
            TextBox
        },
        data() {
            return {
                isMounted: true
            }
        },
        mounted() {
            let that = this
            setTimeout(function () {
                that.isMounted = false
            },2000)
        }
    }
</script>

<style scoped>

</style>