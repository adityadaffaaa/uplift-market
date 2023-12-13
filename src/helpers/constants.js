const BASE_URL =
  //  process.env.NEXT_PUBLIC_BACKEND_URL;
  process.env.NODE_ENV === "development"
    ? process.env.NEXT_PUBLIC_BACKEND_URL
    : process.env.NEXT_PUBLIC_BACKEND_PRODUCTION_URL;

const products = [
  {
    category: 1,
    title: " Jasa Foto Produk Makanan dan Minuman 20 Foto",
    cover: "/assets/images/img-cover-product.png",
    price: 100000,
    rate: 4.7,
    review: 223,
    city: "Yogyakarta",
  },
  {
    category: 1,
    title: " Jasa Foto Produk Makanan dan Minuman 20 Foto",
    cover: "/assets/images/img-cover-product.png",
    price: 100000,
    rate: 4.7,
    review: 223,
    city: "Yogyakarta",
  },
  {
    category: 1,
    title: " Jasa Foto Produk Makanan dan Minuman 20 Foto",
    cover: "/assets/images/img-cover-product.png",
    price: 100000,
    rate: 4.7,
    review: 223,
    city: "Jakarta",
  },
  {
    category: 1,
    title: " Jasa Foto Produk Makanan dan Minuman 20 Foto",
    cover: "/assets/images/img-cover-product.png",
    price: 100000,
    rate: 4.7,
    review: 223,
    city: "Yogyakarta",
  },
  {
    category: 1,
    title: " Jasa Foto Produk Makanan dan Minuman 20 Foto",
    cover: "/assets/images/img-cover-product.png",
    price: 100000,
    rate: 4.7,
    review: 223,
    city: "Yogyakarta",
  },
  {
    category: 1,
    title: " Jasa Foto Produk Makanan dan Minuman 20 Foto",
    cover: "/assets/images/img-cover-product.png",
    price: 100000,
    rate: 4.7,
    review: 223,
    city: "Yogyakarta",
  },
  {
    category: 2,
    title: " Jasa Foto Produk Makanan dan Minuman 20 Foto",
    cover: "/assets/images/img-cover-product-2.png",
    price: 100000,
    rate: 4.7,
    review: 223,
    city: "Malang",
  },
  {
    category: 2,
    title: " Jasa Foto Produk Makanan dan Minuman 20 Foto",
    cover: "/assets/images/img-cover-product-2.png",
    price: 100000,
    rate: 4.7,
    review: 223,
    city: "Malang",
  },
  {
    category: 2,
    title: " Jasa Foto Produk Makanan dan Minuman 20 Foto",
    cover: "/assets/images/img-cover-product-2.png",
    price: 100000,
    rate: 4.7,
    review: 223,
    city: "Malang",
  },
  {
    category: 2,
    title: " Jasa Foto Produk Makanan dan Minuman 20 Foto",
    cover: "/assets/images/img-cover-product-2.png",
    price: 100000,
    rate: 4.7,
    review: 223,
    city: "Malang",
  },
  {
    category: 2,
    title: " Jasa Foto Produk Makanan dan Minuman 20 Foto",
    cover: "/assets/images/img-cover-product-2.png",
    price: 100000,
    rate: 4.7,
    review: 223,
    city: "Malang",
  },
];

const portofolioImages = [
  "/assets/images/porto1.png",
  "/assets/images/porto2.png",
  "/assets/images/porto3.png",
  "/assets/images/porto4.png",
  "/assets/images/porto5.png",
  "/assets/images/porto6.png",
  "/assets/images/porto7.png",
  "/assets/images/porto8.png",
  "/assets/images/porto9.png",
];

export { BASE_URL, products, portofolioImages };
