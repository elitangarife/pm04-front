import { IProduct } from "@/utils";

const products: IProduct[]= [
  {
    id: 1,
    name: "iPhone 16 PRO",
    price: 1403,
    description:
      "Experience power and elegance with the iPhone 11: capture stunning moments with its dual-camera system, enjoy exceptional performance, and immerse yourself in a brilliant Liquid Retina display. Discover a world of possibilities in the palm of your hand!",
    image:
      "https://www.apple.com/co/buy/images/products/iphone/iphone_16pro__erw9alves2qa_large.png",
    categoryId: 1,
    stock: 10,
  },
  {
    id: 2,
    name: "MacBook Air",
    price: 822,
    description:
      "Embrace efficiency and sophistication with the MacBook Air: lightweight design meets powerful performance, stunning Retina display brings your work to life, and all-day battery life keeps you productive wherever you go. Elevate your computing experience with the MacBook Air.",
    image:
      "https://www.apple.com/co/buy/images/products/mac/product_tile_mba_13_15__fx2g3qlubdym_large.png",
    categoryId: 2,
    stock: 10,
  },
  {
    id: 3,
    name: "iPad Pro",
    price: 1403,
    description:
      "Unleash your creativity and productivity with the iPad Pro: powerful performance, stunning Liquid Retina display, and all-day battery life make the iPad Pro the perfect tool for work and play. Transform your ideas into reality with the iPad Pro.",
    image:
      "https://www.apple.com/co/buy/images/products/ipad/pt_ipad_pro__6bgrkek0jnm2_xlarge.png",
    categoryId: 3,
    stock: 10,
  },
  {
    id: 4,
    name: "Apple Watch Series 10",
    price: 452,
    description:
      "Stay connected and healthy with the Apple Watch Series 6: track your workouts, monitor your health, and stay in touch with the people and information you care about most. Experience the future of health and wellness with the Apple Watch Series 6.",
    image:
      "https://www.apple.com/co/buy/images/products/watch/product_s10__deak4mdempoy_xlarge.png",
    categoryId: 4,
    stock: 10,
  },
  {
    id: 5,
    name: "AirPods Pro 2",
    price: 241,
    description:
      "Immerse yourself in sound with the AirPods Pro: active noise cancellation, transparency mode, and customizable fit make the AirPods Pro the perfect companion for music, calls, and everything in between. Elevate your audio experience with the AirPods Pro.",
    image:
      "https://www.apple.com/co/buy/images/products/airpods/compare_airpods_pro_2__c3r137ebxwae_large.png",
    categoryId: 5,
    stock: 10,
  },
  {
    id: 6,
    name: "Apple TV 4K",
    price: 227,
    description:
      "Apple TV 4K is a smart home hub that offers 4K picture quality, streaming apps, and a variety of other features. It works with Apple devices and services, and can also be used with other streaming apps. ",
    image:
      "https://www.apple.com/co/buy/images/products/tv/apple_4k_wifi__fpjm9mmlrzyy_large.jpg",
    categoryId: 6,
    stock: 10,
  },
];

export default products