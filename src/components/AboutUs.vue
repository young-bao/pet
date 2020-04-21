<template>
    <div>
        <about-c></about-c>
        <about-f></about-f>
    </div>
</template>

<script>
    import aboutC from "./About/AboutCont"
    import aboutF from "./About/AboutFoot"

    export default {
        name: "AboutUs",
        components: {
            aboutC,
            aboutF
        }
    }
</script>

<style scoped>

</style>