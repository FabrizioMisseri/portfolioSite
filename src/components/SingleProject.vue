<script>
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

    name: 'SingleProject',

    components: {
        Swiper,
        SwiperSlide,
        modules: [Pagination],
    },

    props: {
        project: Object,
    },

    data() {
        return {

        }
    },

    methods: {
        getImage(path) {
            return new URL(path, import.meta.url).href;
        }
    }
}
</script>

<template>
    <section class="py-5">
        <!-- TITLE -->
        <h2 class="mb-3 text-center"> {{ project.title }} </h2>
        <!-- / TITLE -->

        <!-- SLIDER -->
        <swiper class="m-4" :modules="modules" :slides-per-view="1" :space-between="0" :pagination="true" @swiper="onSwiper"
            @slideChange="onSlideChange" :loop="true">
            <!-- all photos -->
            <swiper-slide class="slider" v-for="(photo, index) in project.photos" :key="index">
                <img :src="getImage(photo)" alt="">
            </swiper-slide>
            <!-- / all photos -->
        </swiper>
        <!-- / SLIDER -->

        <!-- TEXT -->
        <h5>Descrizione progetto:</h5>
        <p>
            {{ project.description }}
        </p>
        <!-- / TEXT -->
    </section>
</template>

<style lang="scss" scoped>
section {
    max-width: 90%;
    margin: 0 auto;

    .slider {
        text-align: center;


    }
}
</style>