<template>
    <div>
        <div v-if="isMounted">
            <Loading></Loading>
        </div>
        <div v-else>
            <navBar choosed-index="0"></navBar>
            <swiper></swiper>
            <welcome></welcome>
            <adoption></adoption>
            <back-top></back-top>
            <home-foot></home-foot>
        </div>
    </div>
</template>

<script>
    import navBar from "../../components/Nav_bar"
    import swiper from "../../components/Siwper"
    import welcome from "../../components/Welcome"
    import adoption from "../../components/Adoption"
    import backTop from "../../components/BackTop"
    import homeFoot from  "../../components/HomeFoot"
    import Loading from "../../components/Loading";

    export default {
        name: "index",
        data() {
            return {
                isMounted: true
            }
        },
        components: {
            navBar,
            swiper,
            welcome,
            adoption,
            backTop,
            homeFoot,
            Loading
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