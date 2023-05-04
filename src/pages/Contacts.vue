<script>
import { store } from '../store';
import Navbar from '../components/Navbar.vue';

export default {
    name: 'SecondPage',

    components: {
        Navbar,
    },

    data() {
        return {
            store,
        }
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
    <!-- @click => window.open('mailto:test@gmail.com') -->
</template>

<style lang="scss" scoped></style>