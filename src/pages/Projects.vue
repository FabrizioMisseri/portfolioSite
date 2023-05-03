<script>
// import slider
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import { Pagination, Scrollbar } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// -------------
import { store } from '../store';
import Navbar from '../components/Navbar.vue';

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
        modules: [Pagination, Scrollbar],
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
        <swiper :modules="modules" :slides-per-view="1" :space-between="0" :pagination="true"
            :scrollbar="{ draggable: true }" @swiper="onSwiper" @slideChange="onSlideChange" :loop="true">

            <!-- boolking -->
            <swiper-slide>
                <img src="../assets/img/boolking/2.png" alt="">
            </swiper-slide>
            <swiper-slide>
                <img src="../assets/img/boolking/1.png" alt="">
            </swiper-slide>
            <!-- fotoalbum -->
            <swiper-slide>
                <img src="../assets/img/fotoalbum/1.png" alt="">
            </swiper-slide>
            <swiper-slide>
                <img src="../assets/img/fotoalbum/2.png" alt="">
            </swiper-slide>
            <swiper-slide>
                <img src="../assets/img/fotoalbum/3.png" alt="">
            </swiper-slide>

        </swiper>
        <!-- / SLIDER -->

    </section>
    <!-- / body wrapper -->
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

.swiper .swiper-wrapper {

    .swiper-button-next::after,
    .swiper-button-prev::after {
        color: $ironColor;
        cursor: none;
    }
}
</style>