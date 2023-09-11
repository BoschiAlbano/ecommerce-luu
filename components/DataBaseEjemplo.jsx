export const Productos = [
    {
        id: 1,
        imagen: 'https://acdn.mitiendanube.com/stores/001/018/213/products/fcvn638911-66790f331acc4045bb16006555347574-640-0.jpg',
        descripcion: 'Imagen de prueba',
        categoria: 2,
        precio: 345,
        destacado: false,
    },
    {
        id: 2,
        imagen: 'https://i.pinimg.com/1200x/71/c1/7d/71c17d742cbb238c04721a0c3f1be07f.jpg',
        descripcion: 'Imagen de prueba',
        categoria: 1,
        precio: 653,
        destacado: true,
    },
    {
        id: 3,
        imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUIZKwdD5p9uwnZblWu9bFweegB-McGZhZTw&usqp=CAU',
        descripcion: 'Imagen de prueba',
        categoria: 4,
        precio: 637,
        destacado: false,
    },
    {
        id: 4,
        imagen: 'https://fotografias.larazon.es/clipping/cmsimages02/2023/03/01/0F9FC835-FA99-4C08-9A0B-EB8C9E9F3C50/planta-forma-huevo_98.jpg?crop=750,422,x0,y166&width=1900&height=1069&optimize=low&format=webply',
        descripcion: 'Imagen de prueba',
        categoria: 5,
        precio: 333,
        destacado: true,
    },
    {
        id: 5,
        imagen: 'https://hips.hearstapps.com/es.h-cdn.co/mcres/images/mi-casa/ideas-decoracion/como-poner-las-plantas-dentro-de-casa/planta-estilizada/116100-1-esl-ES/planta-estilizada.jpg',
        descripcion: 'Imagen de prueba',
        categoria: 1,
        precio: 345.4,
        destacado: false,
    },
    {
        id: 6,
        imagen: 'https://www.elblogdelatabla.com/wp-content/uploads/2021/02/macetas-maceteros-soporte-plantas-interior2Bcox-cox2B1000px.jpg',
        descripcion: 'Imagen de prueba',
        categoria: 2,
        precio: 999,
        destacado: true,
    },
    {
        id: 7,
        imagen: 'https://i.blogs.es/c9ba58/4c9c664eb12a47efa6f9ca4920e52e07-1-/450_1000.jpeg',
        descripcion: 'Imagen de prueba',
        categoria: 1,
        precio: 775.8,
        destacado: true,
    },
    {
        id: 8,
        imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRfpgh7yeHlBItNSGiUJeaByYc1xqsvma58tk2F3F_1dvnm-WljJjg1aMd9fhh1j51FzE&usqp=CAU',
        descripcion: 'Imagen de prueba',
        categoria: 2,
        precio: 34,
        destacado: true,
    },
    {
        id: 9,
        imagen: 'https://i.blogs.es/c9ba58/4c9c664eb12a47efa6f9ca4920e52e07-1-/450_1000.jpeg',
        descripcion: 'Imagen de prueba',
        categoria: 2,
        precio: 54,
        destacado: true,
    },
    {
        id: 10,
        imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRfpgh7yeHlBItNSGiUJeaByYc1xqsvma58tk2F3F_1dvnm-WljJjg1aMd9fhh1j51FzE&usqp=CAU',
        descripcion: 'Imagen de prueba',
        categoria: 2,
        precio: 724,
        destacado: true,
    },
];

// 1 - n
export const Categorias = [
    {
        id: 1,
        descripcion: 'Categoria 1',
    },
    {
        id: 2,
        descripcion: 'Exterior',
    },
    {
        id: 3,
        descripcion: 'Categoria 3',
    },
    {
        id: 4,
        descripcion: 'Categoria 4',
    },
    {
        id: 5,
        descripcion: 'Categoria 5',
    },
    {
        id: 6,
        descripcion: 'Categoria 5',
    },
    {
        id: 7,
        descripcion: 'Categoria 5',
    },
    {
        id: 8,
        descripcion: 'Categoria 5',
    },
];

// n - 1
export const Imagenes = [
    {
        id: 1,
        url: '',
        ProductoId: 1,
    },
];

export const Banners = [
    {
        url: 'https://ensarqmurbpfpgwpynqp.supabase.co/storage/v1/object/public/carrusel/img1.jpg',
    },
    {
        url: 'https://ensarqmurbpfpgwpynqp.supabase.co/storage/v1/object/public/carrusel/img2.jpg',
    },
    {
        url: 'https://ensarqmurbpfpgwpynqp.supabase.co/storage/v1/object/public/carrusel/img3.jpg',
    },

    {
        url: 'https://ensarqmurbpfpgwpynqp.supabase.co/storage/v1/object/public/carrusel/img4.jpg',
    },
    {
        url: 'https://media.tarkett-image.com/medium/IN_41020001_41020002_002.jpg',
    },
];

export const Favoritos = [
    {
        id: 1,
        ProductoId: 3,
    },
    {
        id: 2,
        ProductoId: 5,
    },
    {
        id: 3,
        ProductoId: 4,
    },
    {
        id: 4,
        ProductoId: 6,
    },
    {
        id: 5,
        ProductoId: 8,
    },
];
