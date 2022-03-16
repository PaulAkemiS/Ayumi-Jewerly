const productos = [
  {
    categoria: "collares",
    id: 1,
    nombre: "Set cubic susanito",
    precio: 3000,
    stock: 5,
    imagen:
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/183/960/products/img-20201114-wa00051-247639da61aa4a2db816062401493957-1024-1024.jpg",
    descripcion:
      "Cadena con dije cubic pasante (40, 45 o 50cm) + Aros cubic. 6mm • Material: Plata 925 • Excelente calidad del producto! INCLUYE GARANTÍA",
  },

  {
    categoria: "collares",
    id: 2,
    nombre: "Collar Venecia",
    precio: 2670,
    stock: 10,
    imagen:
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/183/960/products/screenshot_20210419-025409_instagram1-e3886187bc13fbed8d16188122238092-1024-1024.jpg",
    descripcion:
      "Cadena veneciana con bolitas. • Material: Plata 925 • Excelente calidad del producto! INCLUYE GARANTÍA",
  },

  {
    categoria: "collares",
    id: 3,
    nombre: "Collar Spirit",
    precio: 2810,
    stock: 6,
    imagen:
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/183/960/products/1d366fe78eeaa6881e55e3c38a97222911-cd148a6be71912ead816224151199088-1024-1024.jpg",
    descripcion: "no",
  },

  {
    categoria: "collares",
    id: 4,
    nombre: "Collar Medalla Inicial",
    precio: 2870,
    stock: 15,
    imagen:
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/183/960/products/screenshot_20211113-015911_mercado-libre-1e224f4c8db4f1e6a216368721524268-1024-1024.jpg",
    descripcion:
      "Collar con dije medalla grabada. Cadena turbillon. Medalla de 1cm de diámetro. • Material: Plata 925 • Excelente calidad del producto! INCLUYE GARANTÍA",
  },

  {
    categoria: "collares",
    id: 5,
    nombre: "Collar Electro",
    precio: 3470,
    stock: 4,
    imagen:
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/183/960/products/screenshot_20210111-005710_instagram1-321a612de8f34e74b716103375383269-1024-1024.jpg",
    descripcion:
      "Collar Plata 925 con dije electro. Pasante. Excelente calidad del producto! INCLUYE GARANTÍA",
  },

  {
    categoria: "collares",
    id: 6,
    nombre: "Collar Star",
    precio: 3210,
    stock: 8,
    imagen:
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/183/960/products/collar-con-estrella-pasante1-0bb3587d83ed0bb91715934746450385-1024-1024.png",
    descripcion:
      "Collar Plata 925 con dije estrella. Pasante. Excelente calidad del producto! INCLUYE GARANTÍA",
  },

  {
    categoria: "collares",
    id: 7,
    nombre: "Collar Shine",
    precio: 2720,
    stock: 6,
    imagen:
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/183/960/products/img-20200910-wa00541-7169d17dd36aa986f016006595643658-1024-1024.jpg",
    descripcion:
      "Collar Plata 925 con piedra cubic redonda. De 40, 45 y 50cm • Material: Plata 925 • Excelente calidad del producto! INCLUYE GARANTÍA",
  },

  {
    categoria: "collares",
    id: 8,
    nombre: "Collar Moon",
    precio: 3210,
    stock: 4,
    imagen:
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/183/960/products/img-20200802-wa00121-6bb527fd264038791b15964125210036-1024-1024.jpg",
    descripcion:
      "Collar Plata 925 con dije  de Luna . La cadena la hacemos a tu medida.",
  },

  {
    categoria: "aros",
    id: 9,
    nombre: "Aros Shine",
    precio: 2160,
    stock: 4,
    imagen:
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/183/960/products/20200730_1839571-a9d8d7393885cafec415962342140744-640-01-539c01c179426ccb1416073801024639-1024-1024.jpg",
    descripcion:
      "Aros argollitas con dije cubic redondo. • Material: Plata 925 • Excelente calidad del producto! INCLUYE GARANTÍA",
  },

  {
    categoria: "aros",
    id: 10,
    nombre: "Aros Circle",
    precio: 850,
    stock: 8,
    imagen:
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/183/960/products/tezza_2020_12_05_1753019201-1e0bff4640f29d19be16072016262135-640-01-b3ca9d7f0353d493c216073795729549-1024-1024.jpg",
    descripcion:
      "Aros círculos pegados a la oreja pasantes. • Material: Plata 925 • Excelente calidad del producto! INCLUYE GARANTÍA",
  },

  {
    categoria: "aros",
    id: 11,
    nombre: "Aros Argollas Point",
    precio: 5850,
    stock: 3,
    imagen:
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/183/960/products/screenshot_20191112-224356_facebook1-f3477ccca757e71e0616073808560715-1024-1024.jpg",
    descripcion:
      "Aros Argollas infladas, con detalles de puntos. • Material: Plata 925 • Excelente calidad del producto! INCLUYE GARANTÍA",
  },

  {
    categoria: "aros",
    id: 12,
    nombre: "Aros Flor",
    precio: 1730,
    stock: 5,
    imagen:
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/183/960/products/20201226_2117211-d140a5c6446364d7fd16090283866129-1024-1024.jpg",
    descripcion:
      "Aros pasantes con piedras cubic. • Material: Plata 925 • Excelente calidad del producto! INCLUYE GARANTÍA",
  },

  {
    categoria: "anillos",
    id: 13,
    nombre: "Anillo Love Point",
    precio: 2320,
    stock: 6,
    imagen:
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/183/960/products/20201219_2214211-c37a4f93cd900a54cd16084371208388-1024-1024.jpg",
    descripcion:
      "Anillo corazón con puntos. Lo hacemos en todas las medidas. • Material: Plata 925 • Excelente calidad del producto! INCLUYE GARANTÍA",
  },

  {
    categoria: "anillos",
    id: 14,
    nombre: "Anillo Solitario",
    precio: 4120,
    stock: 10,
    imagen:
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/183/960/products/screenshot_20200723-100412_instagram1-65026e609337e714f515955438329539-1024-1024.jpg",
    descripcion:
      "Anillo Plata 925 con piedra cubc engarzada. Lo hacemos a tu medida.",
  },

  {
    categoria: "anillos",
    id: 15,
    nombre: "Anillo Line",
    precio: 2310,
    stock: 12,
    imagen:
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/183/960/products/img-20200829-wa00161-fdb5f7068f1b01d16415989039653128-1024-1024.jpg",
    descripcion:
      "Anillo Plata 925 LINE. La hacemos a tu medida • Material: Plata 925 • Excelente calidad del producto! INCLUYE GARANTÍA",
  },

  {
    categoria: "anillos",
    id: 16,
    nombre: "Anillo ArrowHead",
    precio: 2070,
    stock: 8,
    imagen:
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/183/960/products/screenshot_20200922-004743_instagram1-c116f8d9497068bdd916007500924178-1024-1024.jpg",
    descripcion:
      "Anillo Plata 925 con triángulo. • Material: Plata 925 • Excelente calidad del producto! INCLUYE GARANTÍA",
  },

  {
    categoria: "pulseras",
    id: 17,
    nombre: "Pulsera Cristal",
    precio: 2380,
    stock: 15,
    imagen:
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/183/960/products/pulsera-cristal1-f7153b9b1e52719b2d16277641894439-1024-1024.jpg",
    descripcion:
      "Pulsera de cartas y bolitas de plata. Cierre de resorte. 18cm de largo. Semi rígida. • Material: Plata 925 • Excelente calidad del producto! INCLUYE GARANTÍA",
  },

  {
    categoria: "pulseras",
    id: 18,
    nombre: "Pulsera Shine",
    precio: 2090,
    stock: 8,
    imagen:
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/183/960/products/pulsera-shine1-ec9c10a79ede09371b16277646309860-1024-1024.jpg",
    descripcion:
      "Pulsera de eslabones con dije cubic redondo. • Material: Plata 925 • Excelente calidad del producto! INCLUYE GARANTÍA",
  },

  {
    categoria: "pulseras",
    id: 19,
    nombre: "Pulsera Corazon",
    precio: 2250,
    stock: 4,
    imagen:
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/183/960/products/pulsera-corazon1-dd4f2b26674009738016277648482899-1024-1024.png",
    descripcion: "Pulsera Plata 925 con Corazon . La hacemos a tu medida.",
  },

  {
    categoria: "pulseras",
    id: 20,
    nombre: "Pulsera Medalla",
    precio: 2580,
    stock: 6,
    imagen:
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/183/960/products/pulsera-corazon1-dd4f2b26674009738016277648482899-1024-1024.png",
    descripcion:
      "Pulsera medalla grabada plata 925. • Material: Plata 925 • Excelente calidad del producto! INCLUYE GARANTÍA.",
  },

  {
    categoria: "relojesH",
    id: 21,
    nombre: "Reloj Tommy Hilfiger 1791716",
    precio: 20595,
    stock: 3,
    imagen:
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/183/960/products/screenshot_20210803-233247_mercado-libre1-23b0e2675e6ce504e116280444928066-1024-1024.jpg",
    descripcion:
      "Reloj Tommy Hilfiger con malla de caucho. Caja de acero inoxidable. Resistente al agua. Garantía oficial Tommy Hilfiger.",
  },

  {
    categoria: "relojesH",
    id: 22,
    nombre: "Tommy Hilfiger 1791556",
    precio: 18590,
    stock: 2,
    imagen:
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/183/960/products/518bldfoxnl-_ac_uy1000_1-c8474a8688e057f77416281830623856-1024-1024.jpg",
    descripcion:
      "Reloj Tommy Hilfiger malla de caucho siliconado. Caja de acrílico. Resistente al agua. Garantía oficial Tommy Hilfiger.",
  },

  {
    categoria: "relojesH",
    id: 23,
    nombre: "Reloj Tommy Hilfiger 1791842",
    precio: 25995,
    stock: 4,
    imagen:
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/183/960/products/screenshot_20210818-004413_mercado-libre1-5f228b38badb56b64e16292583687404-1024-1024.jpg",
    descripcion:
      "Reloj Tommy Hilfiger con malla tejida, caja de acero inoxidable. Resistente al agua. Garantía oficial Tommy Hilfiger.",
  },

  {
    categoria: "relojesM",
    id: 24,
    nombre: "Tommy Hilfiger 1782163",
    precio: 22550,
    stock: 3,
    imagen:
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/183/960/products/screenshot_20211031-181225_gallery1-8b00cea9fc107be42e16357148004182-1024-1024.jpg",
    descripcion:
      "Reloj Tommy Hilfiger con malla y caja de acero inoxidable. Malla de acero tejida. Regulable. Garantí oficial Tommy Hilfiger.",
  },

  {
    categoria: "relojesM",
    id: 25,
    nombre: "Tommy Hilfiger 1782366",
    precio: 30295,
    stock: 2,
    imagen:
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/183/960/products/screenshot_20211127-165107_mercado-libre1-48a8d9f9de77be009816380428159551-1024-1024.jpg",
    descripcion:
      "Reloj Tommy Hilfiger malla y caja de acero inoxidable ionizado dorado. Resistente al agua. Garantía oficial Tommy Hilfiger",
  },

  {
    categoria: "relojesM",
    id: 26,
    nombre: "Tommy Hilfiger 1782401",
    precio: 23970,
    stock: 4,
    imagen:
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/183/960/products/screenshot_20211127-165442_mercado-libre1-546fea57dced557c4f16380429954861-1024-1024.jpg",
    descripcion:
      "Reloj Tommy Hilfiger malla y caja de acero inoxidable. Resistente al agua. Garantía oficial Tommy Hilfiger",
  },
];

const traerProductos = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(productos);
  }, 3000);
});

export { traerProductos };
export { productos };
