<script>
import { store } from '../store';
import Navbar from '../components/Navbar.vue';

export default {
    name: 'HomePage',
    components: {
        Navbar,
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
</template>

<style lang="scss" scoped></style>