
import { reactive } from "vue";

export const store = reactive({

    objectsArray: [
        {
            title: 'BoolKing',
            photos: [
                "/assets/img/boolking/2.png",
                "/assets/img/boolking/1.png",
            ],
            video: '/assets/video/boolking/',
        },
        {
            title: 'FotoAlbum',
            photos: [
                "/assets/img/fotoalbum/1.png",
                "/assets/img/fotoalbum/2.png",
                "/assets/img/fotoalbum/3.png",
            ],
            video: '/assets/video/fotoalbum/',
        },
    ],

    logosArray: [
        {
            title: 'HTML',
            logoPath: '/assets/img/logos/logo-html.png',
        },
        {
            title: 'BootStrap',
            logoPath: '/assets/img/logos/logo-bootstrap.png',
        },
        {
            title: 'JavaScript',
            logoPath: '/assets/img/logos/logo-javascript.png',
        },
        {
            title: 'VueJS',
            logoPath: '/assets/img/logos/logo-vue.png',
        },
        {
            title: 'NPM',
            logoPath: '/assets/img/logos/logo-npm.png',
        },
        {
            title: 'MySQL',
            logoPath: '/assets/img/logos/logo-mysql.png',
        },
        {
            title: 'PHP',
            logoPath: '/assets/img/logos/logo-php.png',
        },
        {
            title: 'Laravel',
            logoPath: '/assets/img/logos/logo-laravel.png',
        },
        {
            title: 'Java',
            logoPath: '/assets/img/logos/logo-java.png',
        },
        {
            title: 'Spring',
            logoPath: '/assets/img/logos/logo-spring.png',
        },
        {
            title: 'CSS',
            logoPath: '/assets/img/logos/logo-css.png',
        },
    ],
});
