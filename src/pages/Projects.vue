<script>
import { store } from '../store';
import Navbar from '../components/Navbar.vue';
// import slider
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import { Pagination } from 'swiper';
import 'swiper/css/pagination';
// -------------

export default {
    // setup slider
    setup() {
        const onSwiper = (swiper) => {
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log('slide change');
        };
        return {
            onSwiper,
            onSlideChange,
        };
    },
    // -------------

    name: 'Projects',
    components: {
        Navbar,
        Swiper,
        SwiperSlide,
        modules: [Pagination],
    },

    data() {
        return {
            store,

        }
    },

    created() {

    },

    methods: {
    }
}
</script>

<template>
    <Navbar></Navbar>

    <!-- debug -->
    <h2 class="py-5">WORK IN PROGRESS ...</h2>
    <!-- / debug -->

    <!-- body wrapper -->
    <section class="container">
        <!-- SLIDER -->
        <swiper :modules="modules" :slides-per-view="1" :space-between="0" :pagination="true" @swiper="onSwiper"
            @slideChange="onSlideChange" :loop="true">

            <!-- all photos debug -->
            <swiper-slide v-for="(photo, index) in store.photos" :key="index">
                <img :src="`../assets/img/${photo}`" alt="">
            </swiper-slide>
            <!-- / all photos debug -->

        </swiper>
        <!-- / SLIDER -->

    </section>
    <!-- / body wrapper -->
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
</style>