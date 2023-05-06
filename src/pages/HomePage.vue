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
            <div class="row">
                <SingleSkill class="col-3" v-for="(skill, index) in store.logosArray" :key="index" :skill="skill">
                </SingleSkill>
            </div>
            <HrBlock></HrBlock>
            <!-- /SKILLS -->

        </div>

    </section>
    <!-- / body wrapper -->
</template>

<style lang="scss">
.container {
    width: 80%;
    margin: 0 auto;
}
</style>