<template>
    <div class="contain">
        <div class="tittle">
            Pets for Adoption
            <img src="../images/icon1.png" alt="">
        </div>
        <div class="course">
            <swip>

            </swip>
        </div>
    </div>
</template>

<script>
    import swip from "./Swip";

    export default {
        name: "Adoption",
        components: {
            swip
        }
    }
</script>

<style scoped lang="less">
    .contain {
        position: relative;
        width: 100%;
        height: 5rem;
        .tittle {
            width: 8rem;
            height: 1rem;
            position: absolute;
            top: 1rem;
            left: 2rem;
            font-size: .6rem;
            color: chartreuse;
            img {
                width: .5rem;
                height: .5rem;
            }
        }
        .course {
            width: 20rem;
            height: 3rem;
            position: absolute;
            top: 2rem;
            left: 2rem;
        }
    }
</style>