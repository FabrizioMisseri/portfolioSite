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

    <!-- debug -->
    <h2 class="py-5">WORK IN PROGRESS ...</h2>
    <!-- / debug -->

    <!-- body wrapper -->
    <section class="container">


    </section>
    <!-- / body wrapper -->
</template>

<style lang="scss" scoped></style>