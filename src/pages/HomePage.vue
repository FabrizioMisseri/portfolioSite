<script>
import { store } from '../store';
import Navbar from '../components/Navbar.vue';
import SingleSkill from '../components/SingleSkill.vue';

export default {
    name: 'HomePage',
    components: {
        Navbar,
        SingleSkill
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
    <section class="wrapper py-5">

        <!-- SKILLS -->
        <SingleSkill v-for="(skill, index) in store.logosArray" :key="index" :skill="skill"></SingleSkill>
        <!-- /SKILLS -->

    </section>
    <!-- / body wrapper -->
</template>

<style lang="scss"></style>