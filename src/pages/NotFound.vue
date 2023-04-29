<script>
import Navbar from '../components/Navbar.vue';
export default {
    name: 'NotFound',
    components: {
        Navbar,
    }
}
</script>

<template>
    <Navbar></Navbar>
    <div class="wrapper d-flex align-items-center justify-content-center">
        <h2>
            404 PAGE NOT FOUND
        </h2>
    </div>
</template>

<style lang="scss" scoped>
.wrapper {
    width: 100%;
    height: 100vh;

    h2 {
        font-size: 4rem;
    }
}
</style>

