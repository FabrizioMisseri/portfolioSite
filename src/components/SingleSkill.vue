<script>

export default {
    name: 'SingleSkill',

    props: {
        skill: Object,
    },

    methods: {
        getImage(path) {
            return new URL(path, import.meta.url).href;
        }
    },
}
</script>

<template>
    <div>
        <!-- debug -->
        {{ skill.title }}
    </div>
</template>

<style lang="scss" scoped></style>