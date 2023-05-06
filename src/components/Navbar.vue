<script>
export default {
    name: 'Navbar',
}
</script>

<template>
    <div id="fakeMarginTop" class="py-5"></div>

    <nav class="mb-3 px-4 py-2">
        <div class="container-fluid d-flex align-items-start justify-content-between">
            <RouterLink :to="{ name: 'home' }">
                <img src="/assets/img/logoFM.png" alt="" id="logo">
            </RouterLink>

            <div>
                <ul class="ms-auto d-flex fs-4">
                    <li>
                        <RouterLink :to="{ name: 'home' }"
                            :class="(this.$route.name == 'home') ? 'my_active' : 'my_not-active'">
                            Home</RouterLink>
                    </li>
                    <li>
                        <RouterLink :to="{ name: 'contacts' }"
                            :class="(this.$route.name == 'contacts') ? 'my_active' : 'my_not-active'">
                            Contacts</RouterLink>
                    </li>
                    <li>
                        <RouterLink :to="{ name: 'projects' }"
                            :class="(this.$route.name == 'projects') ? 'my_active' : 'my_not-active'">
                            Projects</RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
@import "../styles/partials/variables";

nav {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 999;
    width: 100%;
    background-color: white;

    ul {
        // font-size: 1.5rem;
        list-style: none;

        a {
            color: inherit;
            text-decoration: none;
        }

        li {
            padding: 0 1rem;

            .my_active {
                color: black
            }

            .my_not-active {
                color: $ironColor;
            }
        }
    }

    #logo {
        width: 120px;
    }
}
</style>
