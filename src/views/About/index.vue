<template>
    <div>
        <div v-show="isMounted">
            <Loading></Loading>
        </div>
        <div v-show="!isMounted">
            <navBar choosed-index="1"></navBar>
            <about-us></about-us>
            <BackTop></BackTop>
        </div>
    </div>

</template>

<script>
    import navBar from '../../components/Nav_bar'
    import AboutUs from "../../components/AboutUs";
    import BackTop from "../../components/BackTop";
    import Loading from  "../../components/Loading"

    export default {
        name: "index",
        components: {
            navBar,
            AboutUs,
            BackTop,
            Loading
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