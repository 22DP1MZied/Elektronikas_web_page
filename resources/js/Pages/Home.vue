<script>
import NavBar from "../Components/NavBar.vue";
import Slideshow from "@/Components/Slideshow.vue";
import Footer from "../Components/Footer.vue";
export default {
    name: 'Home',
    components: {
        NavBar,
        Slideshow,
        Footer,
    },

};
</script>
<template>
    <NavBar/>
    <Slideshow/>
    <Footer/>


</template>

<style>

</style>
