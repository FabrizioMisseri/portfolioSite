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
    <section class="py-5 my-5 mx-auto">
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

    </section>
</template>

<style lang="scss">
@use "../styles/partials/variables" as *;

section {
    max-width: 90%;
    border-bottom: 2px solid $bg-c;

    .swiper-pagination-bullet-active {
        background-color: $ironColor;
    }

    .swiper-button-next::after,
    .swiper-button-prev::after {
        font-size: 1.5rem;
        color: $ironColor;
        font-weight: 600;
    }
}
</style>