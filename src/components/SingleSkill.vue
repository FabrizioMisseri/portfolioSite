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
    <div class="item p-5">
        <figure class="mb-2">
            <img :src="getImage(skill.logoPath)" alt="">
        </figure>
        <div class="title fs-4 text-center">
            {{ skill.title }}
        </div>
        <!-- fake div -->
        <div class="fake-title fs-4">
            debug
        </div>
    </div>
</template>

<style lang="scss" scoped>
.item {

    figure,
    .title {
        margin: 0 auto;
        min-width: 100px;
    }

    .title {
        display: none;
    }

    .fake-title {
        color: white;
    }

    &:hover .title {
        display: block;
    }

    &:hover .fake-title {
        display: none;
    }
}
</style>