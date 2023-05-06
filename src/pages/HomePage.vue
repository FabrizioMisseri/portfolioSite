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

    <!-- body wrapper -->
    <section class="wrapper py-5">

        <!-- SKILLS -->
        <div class="container">
            <div class="row">
                <SingleSkill class="col-3" v-for="(skill, index) in store.logosArray" :key="index" :skill="skill">
                </SingleSkill>
            </div>
        </div>
        <!-- /SKILLS -->

    </section>
    <!-- / body wrapper -->
</template>

<style lang="scss">
.container {
    width: 80%;
}
</style>