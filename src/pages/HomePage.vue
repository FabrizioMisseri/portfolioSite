<script>
// import slider
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
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
    name: 'HomePage',
    components: {
        Navbar,
        Swiper,
        SwiperSlide,
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

    <!-- body wrapper -->
    <section class="container">
        <!-- SLIDER -->
        <swiper :slides-per-view="2" :space-between="50" @swiper="onSwiper" @slideChange="onSlideChange">
            <!-- boolking -->
            <swiper-slide>
                <a href="#">
                    <img src="../assets/img/boolking/2.png" alt="">
                </a>
            </swiper-slide>
            <!-- fotoalbum -->
            <swiper-slide>
                <a href="#">
                    <img src="../assets/img/fotoalbum/1.png" alt="">
                </a>
            </swiper-slide>

        </swiper>
        <!-- / SLIDER -->

    </section>
    <!-- / body wrapper -->
</template>

<style lang="scss" scoped></style>