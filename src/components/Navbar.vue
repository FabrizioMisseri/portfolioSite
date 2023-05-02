<script>
export default {
    name: 'Navbar',
}
</script>

<template>
    <div id="fakeMarginTop"></div>

    <nav class="navbar navbar-expand-lg mb-3 px-4">
        <div class="container-fluid d-flex align-items-start">
            <RouterLink class="navbar-brand" :to="{ name: 'home' }">
                <img src="../assets/img/logoFM.png" alt="" id="logo">
            </RouterLink>

            <div>
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <RouterLink class="nav-link" :to="{ name: 'home' }"
                            :class="(this.$route.name == 'home') ? 'active' : 'not-active'">
                            Home</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" :to="{ name: 'contacts' }"
                            :class="(this.$route.name == 'contacts') ? 'active' : 'not-active'">
                            Contacts</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" :to="{ name: 'projects' }"
                            :class="(this.$route.name == 'projects') ? 'active' : 'not-active'">
                            Projects</RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
#fakeMarginTop {
    padding: 45px;
}

nav {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 999;
    width: 100%;
    background-color: white;

    ul {
        font-size: 1.5rem;
    }

    #logo {
        width: 120px;
    }
}
</style>
