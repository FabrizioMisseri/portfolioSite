<script>
// import slider
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

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
            modules: [Pagination, Navigation],
        };
    },
    // -------------

    name: 'SingleProject',

    components: {
        Swiper,
        SwiperSlide,
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
        <swiper class="m-4" :modules="modules" :slides-per-view="1" :space-between="0" navigation
            :pagination="{ clickable: true }" @swiper="onSwiper" @slideChange="onSlideChange" loop="true">
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

<style lang="scss">
@use "../styles/partials/variables" as *;

section {
    max-width: 90%;
    margin: 0 auto;

    .swiper-pagination-bullet-active {
        background-color: $ironColor;
    }

    .swiper-button-next::after,
    .swiper-button-prev::after {
        font-size: 1.5rem;
        color: $ironColor;
        font-weight: 600;

        // background-color: $ironColor;
        // display: inline-block;
        // width: 50px;
        // height: 25px;
        // line-height: 25px;
        // text-align: center;
        // border-radius: 50%;

        // @media screen and (max-width: 360px) {
        //     display: none;
        // }
    }
}
</style>