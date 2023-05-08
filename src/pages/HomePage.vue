<script>
import { store } from '../store';
import Navbar from '../components/Navbar.vue';
import SingleSkill from '../components/SingleSkill.vue';
//
import HrBlock from '../components/HrBlock.vue';

export default {
    name: 'HomePage',
    components: {
        Navbar,
        SingleSkill,
        HrBlock,
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

    <!-- body wrapper -->
    <section class="wrapper py-5">

        <div class="container">

            <!-- SKILLS -->
            <h2 class="text-center title">Skills:</h2>
            <div class="row">
                <SingleSkill id="skill" class="col-12 col-md-6 col-lg-4" v-for="(skill, index) in store.logosArray"
                    :key="index" :skill="skill">
                </SingleSkill>
            </div>
            <!-- /SKILLS -->

        </div>

    </section>
    <!-- / body wrapper -->
</template>

<style lang="scss"></style>