<script>
import Navbar from '../components/Navbar.vue';

export default {
    name: 'Contacts',

    components: {
        Navbar,
    },

    data() {
        return {
        }
    },

    methods: {
        sendMail() {
            window.open('mailto:misserifabrizio@gmail.com');
        }
    },
}
</script>

<template>
    <Navbar></Navbar>

    <!-- @click => window.open('mailto:test@gmail.com') -->

    <!-- WRAPPER -->
    <div class="wrapper py-5 fs-5 d-flex justify-content-center">

        <!-- LINKS -->
        <div class="py-5">
            <ul>
                <li>
                    <a href="https://github.com/FabrizioMisseri">
                        <span class="me-3 fs-2">
                            <i class="fa-brands fa-square-github"></i>
                        </span>
                        <span>https://github.com/FabrizioMisseri</span>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/fabrizio-misseri/">
                        <span class="me-3 fs-2">
                            <i class="fa-brands fa-linkedin"></i>
                        </span>
                        <span>www.linkedin.com/in/fabrizio-misseri</span>
                    </a>
                </li>
                <li>
                    <div id="mailer" @click="sendMail">
                        <span class="me-3 fs-2">
                            <i class="fa-solid fa-envelope"></i>
                        </span>
                        <span>misserifabrizio@gmail.com</span>
                    </div>
                </li>
            </ul>
        </div>
        <!-- / LINKS -->

    </div>
    <!-- / WRAPPER -->
</template>

<style lang="scss">
@use "../styles/partials/variables" as *;

.wrapper {

    // .fa-solid,
    // .fa-brands {
    //     color: black;

    //     &:hover {
    //         color: $bg-c;
    //     }
    // }

    a,
    #mailer,
    .fa-solid,
    .fa-brands {
        display: inline-block;
        color: black;
        cursor: pointer;
    }

    li:hover {

        a,
        #mailer,
        .fa-solid,
        .fa-brands {
            color: $bg-c;
        }
    }

}
</style>