<script>
export default {
    name: 'Navbar',

    data() {
        return {
            hiddenMenuFlag: true,
            hiddenLinksFlag: false,
        }
    },

    methods: {
        toggleHiddenFlags() {
            this.hiddenMenuFlag = !this.hiddenMenuFlag;
            this.hiddenLinksFlag = !this.hiddenLinksFlag;
        }
    }
}
</script>

<template>
    <div id="fakeMarginTop" class="py-5"></div>

    <nav class="mb-3 px-4 py-2">
        <div class="container-fluid d-flex align-items-start justify-content-between">
            <RouterLink :to="{ name: 'home' }">
                <img src="/assets/img/logoFM.png" alt="" id="logo">
            </RouterLink>

            <!-- DEFAULT MENU -->
            <div class="links">
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
            <!-- / DEFAULT MENU -->

            <!-- HIDDEN-MENU -->
            <div class="hidden-menu fs-5 " @click="toggleHiddenFlags">
                <span v-if="hiddenMenuFlag" class="fs-1 iron">
                    <i class="fa-solid fa-bars"></i>
                </span>
                <ul class="hidden-links" v-if="hiddenLinksFlag">
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
                    <!-- closer -->
                    <div class="menu-closer">
                        X
                    </div>
                </ul>
            </div>
            <!-- / HIDDEN-MENU -->

        </div>
    </nav>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

.iron {
    color: $ironColor;
}

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
        min-width: 120px;
        max-width: 120px;
    }

    .links {
        @media screen and (max-width: 768px) {
            display: none;
        }
    }

    .hidden-menu {
        cursor: pointer;

        @media screen and (min-width: 768px) {
            display: none;
        }

        .hidden-links {
            position: relative;

            .menu-closer {
                position: absolute;
                top: 0;
                right: 0;
                display: inline-block;
                width: 30px;
                height: 30px;
                line-height: 30px;
                border-radius: 100%;
                text-align: center;
                transform: translate(20px, 0);
                cursor: pointer;

                &:hover {
                    background-color: rgb(233, 229, 205);
                }
            }

        }
    }
}
</style>
