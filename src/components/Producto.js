const collares=[
    {
        id:1,
        nombre: "Set cubic susanito",
        precio: 3000,
        stock: 5,
        imagen: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/183/960/products/img-20201114-wa00051-247639da61aa4a2db816062401493957-1024-1024.jpg"
    },

    {
        id:2,
        nombre: "Collar Venecia",
        precio: 2670,
        stock: 10,
        imagen: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/183/960/products/screenshot_20210419-025409_instagram1-e3886187bc13fbed8d16188122238092-1024-1024.jpg"
    },

    {
        id:3,
        nombre: "Collar Spirit",
        precio: 2810,
        stock:6,
        imagen: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/183/960/products/1d366fe78eeaa6881e55e3c38a97222911-cd148a6be71912ead816224151199088-1024-1024.jpg"
    },

    {
        id:4,
        nombre: "Collar Medalla Inicial",
        precio: 2870,
        stock:15,
        imagen: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/183/960/products/screenshot_20211113-015911_mercado-libre-1e224f4c8db4f1e6a216368721524268-1024-1024.jpg"
    },

    {
        id:5,
        nombre: "Collar Electro",
        precio: 3470,
        stock:4,
        imagen: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/183/960/products/screenshot_20210111-005710_instagram1-321a612de8f34e74b716103375383269-1024-1024.jpg"
    },

    {
        id:6,
        nombre: "Collar Star",
        precio: 3210,
        stock:8,
        imagen: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/183/960/products/collar-con-estrella-pasante1-0bb3587d83ed0bb91715934746450385-1024-1024.png"
    },

    {
        id:7,
        nombre: "Collar Shine",
        precio: 2720,
        stock:6,
        imagen: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/183/960/products/img-20200910-wa00541-7169d17dd36aa986f016006595643658-1024-1024.jpg"
    },

    {
        id:8,
        nombre: "Collar Moon",
        precio: 3210,
        stock:4,
        imagen: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/183/960/products/img-20200802-wa00121-6bb527fd264038791b15964125210036-1024-1024.jpg"
    }
]

const traerCollares = new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve(collares);
    }, 3000);
});


export {traerCollares};