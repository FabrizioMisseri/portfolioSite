
import { reactive } from "vue";

export const store = reactive({

    basePathString: "/assets/img/",

    photos: [
        "boolking/2.png",
        "boolking/1.png",
        "fotoalbum/1.png",
        "fotoalbum/2.png",
        "fotoalbum/3.png",
    ],

    // -----------------------------------------------------

    objectsArray: [
        {
            title: 'BoolKing',
            photos: [
                "/assets/img/boolking/2.png",
                "/assets/img/boolking/1.png",
            ],
            video: '/assets/video/boolking/',
            description: 'lorem ipsum ...',
        },
        {
            title: 'FotoAlbum',
            photos: [
                "/assets/img/fotoalbum/1.png",
                "/assets/img/fotoalbum/2.png",
                "/assets/img/fotoalbum/3.png",
            ],
            video: '/assets/video/fotoalbum/',
            description: 'lorem ipsum ...',
        },
    ],
});
