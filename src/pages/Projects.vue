<script>
import { store } from '../store';
import Navbar from '../components/Navbar.vue';
import SingleProject from '../components/SingleProject.vue';


export default {

    name: 'Projects',
    components: {
        Navbar,
        SingleProject,
    },

    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <Navbar></Navbar>

    <!-- body wrapper -->
    <section class="container">

        <SingleProject v-for="(project, index) in store.objectsArray" :project="project"></SingleProject>

    </section>
    <!-- / body wrapper -->
</template>

<style lang="scss"></style>