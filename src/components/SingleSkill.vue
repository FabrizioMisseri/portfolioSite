<script>

export default {
    name: 'SingleSkill',

    props: {
        skill: Object,
    },

    data() {
        return {
            titleFlag: false,
        }
    },

    methods: {
        getImage(path) {
            return new URL(path, import.meta.url).href;
        },

    },
}
</script>

<template>
    <div class="item p-5 d-flex justify-content-center">
        <figure>
            <img :src="getImage(skill.logoPath)" alt="">
            <div class="title fs-4">
                {{ skill.title }}
            </div>
        </figure>

    </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

.item {

    figure {
        position: relative;

        img {
            width: 125px;
            filter: grayscale(75%);
        }

        .title {
            display: none;
            position: absolute;
            z-index: 1;
            top: 45%;
            left: 175px;
            color: $ironColor;
        }
    }


    &:hover .title {
        display: block;
    }
}
</style>