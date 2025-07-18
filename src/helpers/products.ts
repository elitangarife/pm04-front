import { IProduct } from "@/utils";

const products: IProduct[]= [

  // 📱 iPhones - categoryId: 1
  {
    id: 1,
    name: "iPhone 16 Pro",
    price: 1403,
    description: "Rendimiento de nueva generación con el A18 Bionic y un avanzado sistema de triple cámara.",
    image: "https://www.apple.com/co/buy/images/products/iphone/iphone_16pro__erw9alves2qa_large.png",
    categoryId: 1,
    stock: 10,
  },
  {
    id: 2,
    name: "iPhone 15",
    price: 999,
    description: "Batería para todo el día, Isla Dinámica y cámara principal de 48 MP.",
    image: "https://www.clevercel.co/cdn/shop/files/5_98c5870d-6ece-4b20-bd2e-c9608fe359ec.jpg?v=1744750758",
    categoryId: 1,
    stock: 12,
  },
  {
    id: 3,
    name: "iPhone SE (2022)",
    price: 429,
    description: "Compacto y potente con chip A15 Bionic y Touch ID.",
    image: "https://www.notebookcheck.org/uploads/tx_nbc2/4_zu_3_iphone_se_2022.jpg",
    categoryId: 1,
    stock: 20,
  },
  {
    id: 4,
    name: "iPhone 14 Plus",
    price: 1099,
    description: "Pantalla grande y gran batería, perfecto para multimedia y productividad.",
    image: "https://macstore.com.pa/cdn/shop/files/iPhone_14_Plus_Blue_PDP_Image_Position-1A_COES_34cd37e9-2e9f-4880-b433-241dc2118d58.jpg?v=1700294068&width=823",
    categoryId: 1,
    stock: 8,
  },
  {
    id: 5,
    name: "iPhone 13 mini",
    price: 699,
    description: "Tamaño pequeño. Gran rendimiento. A15 Bionic y sistema de doble cámara.",
    image: "https://exitocol.vtexassets.com/arquivos/ids/24311164/iphone-13-mini-128gb-negro-reacondicionado.jpg?v=638604855107370000",
    categoryId: 1,
    stock: 18,
  },

  // 💻 Laptops - categoryId: 2
  {
    id: 6,
    name: "MacBook Pro 14” M3",
    price: 1999,
    description: "Rendimiento profesional potente con chip M3 y pantalla ProMotion de 120 Hz.",
    image: "https://mac-center.com/cdn/shop/files/IMG-11197295.jpg?v=1723750899",
    categoryId: 2,
    stock: 14,
  },
  {
    id: 7,
    name: "MacBook Air 13” M2",
    price: 1099,
    description: "Delgada, liviana y supercargada por el chip M2. Batería para todo el día.",
    image: "https://co.tiendasishop.com/cdn/shop/files/IMG-5577502_6c5a3480-299f-47c4-ba00-7addc5025bea_grande.jpg?v=1740442917",
    categoryId: 2,
    stock: 25,
  },
  {
    id: 8,
    name: "MacBook Pro 16” M3 Max",
    price: 3299,
    description: "Diseñada para flujos de trabajo de video y código de alto nivel. Rendimiento definitivo.",
    image: "https://co.tiendasishop.com/cdn/shop/files/IMG-11197333_87b91f40-8aae-4224-b8c5-52c45461e7a0.jpg?v=1723511179&width=823",
    categoryId: 2,
    stock: 6,
  },
  {
    id: 9,
    name: "MacBook Air 15” M2",
    price: 1299,
    description: "Air de gran pantalla con todo el poder del M2 y visuales impresionantes.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQorzx5rfSUSktNibaNctkX8Ae5H1VZHWIHTQ&s",
    categoryId: 2,
    stock: 13,
  },
  {
    id: 10,
    name: "MacBook Pro 13” M2",
    price: 1299,
    description: "Potente y compacta con chip M2 y Touch Bar para creadores en movimiento.",
    image: "https://mac-center.com/cdn/shop/files/MacBook_Pro_13_in_Space_Gray_PDP_Image_Position-1_MXLA_5395ce92-3d36-4483-a995-b6bb011179c0.jpg?v=1700304877",
    categoryId: 2,
    stock: 9,
  },

  // 📱 Tablets - categoryId: 3
  {
    id: 11,
    name: "iPad Pro 12.9” M4",
    price: 1199,
    description: "Poder de siguiente nivel y calidad de pantalla con M4 y tecnología XDR de Apple.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQTg2Rj4nZbky2Rlqq4lhTChhW6IQr-qUHWA&s",
    categoryId: 3,
    stock: 8,
  },
  {
    id: 12,
    name: "iPad Air M2",
    price: 699,
    description: "El equilibrio perfecto entre potencia y portabilidad con chip M2.",
    image: "https://co.tiendasishop.com/cdn/shop/files/IMG-13190752_15b88c64-703a-4ee5-8cb1-d7341e0a1b2f.jpg?v=1740450661&width=1000",
    categoryId: 3,
    stock: 14,
  },
  {
    id: 13,
    name: "iPad 10th Gen",
    price: 449,
    description: "Rediseño colorido con USB-C, chip A14 y más pantalla.",
    image: "https://www.macrocell.co/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-21-at-4.13.37-PM.jpeg",
    categoryId: 3,
    stock: 17,
  },
  {
    id: 14,
    name: "iPad Mini 6",
    price: 499,
    description: "Compacto, potente y divertido. Chip A15, USB-C y soporte para 5G.",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-mini-select-wifi-purple-202109?wid=470&hei=556&fmt=png-alpha&.v=1629919806000",
    categoryId: 3,
    stock: 10,
  },
  {
    id: 15,
    name: "iPad Pro 11” M4",
    price: 899,
    description: "Rendimiento M4 de Apple en un diseño iPad Pro más compacto.",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-11-select-cell-spacegray-202210?wid=470&hei=556&fmt=png-alpha&.v=1664370731414",
    categoryId: 3,
    stock: 11,
  },

  // 🎧 Headphones - categoryId: 4
  {
    id: 16,
    name: "AirPods Max",
    price: 549,
    description: "Auriculares circumaurales con cancelación de ruido, audio espacial y diseño premium.",
    image: "https://co.tiendasishop.com/cdn/shop/files/IMG-14858608.jpg?v=1726245856&width=823",
    categoryId: 4,
    stock: 15,
  },
  {
    id: 17,
    name: "AirPods Pro (2nd Gen)",
    price: 249,
    description: "Cancelación activa de ruido, transparencia adaptable y audio espacial.",
    image: "https://co.tiendasishop.com/cdn/shop/files/IMG-14912675.jpg?v=1726874179&width=1000",
    categoryId: 4,
    stock: 25,
  },
  {
    id: 18,
    name: "AirPods (3rd Gen)",
    price: 179,
    description: "Resistentes al sudor con ecualización adaptativa y audio espacial.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoCyXWCHHA7pNkrgUhP8G3-JX9SnFKmefQlo_z0fs5LxCfFk0yMR8l7ML5VS-vL-BPC80&usqp=CAU",
    categoryId: 4,
    stock: 19,
  },
  {
    id: 19,
    name: "Beats Fit Pro",
    price: 199,
    description: "Impulsados por el chip Apple H1, con cancelación de ruido, ideales para entrenamientos.",
    image: "https://co.tiendasishop.com/cdn/shop/files/MK2J3_d7f7771d-1994-40e0-a111-2b373b8a347e.png?v=1740427018",
    categoryId: 4,
    stock: 16,
  },
  {
    id: 20,
    name: "Beats Studio Pro",
    price: 349,
    description: "Auriculares premium con cancelación de ruido y audio por USB-C.",
    image: "https://co.tiendasishop.com/cdn/shop/files/MQTQ3BE_A-1.webp?v=1741616031",
    categoryId: 4,
    stock: 10,
  },

  // 📷 Cameras - categoryId: 5
  {
    id: 21,
    name: "Apple Vision Pro",
    price: 3499,
    description: "Visor de computación espacial con cámara 3D y seguimiento ocular.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpo_Tew6DNrEo5wcdI_kJNc04EYZ2a9SzrGDyyYzmmfIi816RqHzn18B8eW1sgVP6Xl4M&usqp=CAU",
    categoryId: 5,
    stock: 5,
  },
  {
    id: 22,
    name: "iPhone 15 Pro Camera System",
    price: 1499,
    description: "El sueño de los fotógrafos: zoom 5x, ProRAW y video cinematográfico.",
    image: "https://alephksa.com/cdn/shop/files/iPhone_15_Pro_Max_White_Titanium_PDP_Image_Position-4__en-ME_345e1b72-b5d8-4529-93fe-5a5f0624a6ea.jpg?v=1694760899&width=823",
    categoryId: 5,
    stock: 7,
  },
  {
    id: 23,
    name: "Continuity Camera Mount",
    price: 29,
    description: "Convierte tu iPhone en una webcam para Mac con este clip inteligente.",
    image: "https://m.media-amazon.com/images/I/61n08Ia7ilL.jpg",
    categoryId: 5,
    stock: 25,
  },
  {
    id: 24,
    name: "Studio Display Camera",
    price: 1599,
    description: "Pantalla 5K de Apple con cámara ultra gran angular de 12 MP y Center Stage.",
    image: "https://co.tiendasishop.com/cdn/shop/files/IMG-6206220_3ad9c314-f414-4308-9f37-24d4dd65be27.jpg?v=1740439879&width=176",
    categoryId: 5,
    stock: 4,
  },
  {
    id: 25,
    name: "iPad Camera Kit",
    price: 39,
    description: "Usa tarjetas SD y cámaras USB con tu iPad vía Lightning.",
    image: "https://mac-center.com/cdn/shop/products/unnamed_ade6a6d7-6d58-48bf-9e3c-b00baac85714.jpg?v=1660180748",
    categoryId: 5,
    stock: 20,
  },

  // 🖨️ Printers - categoryId: 6
  {
    id: 26,
    name: "AirPrint Pro X",
    price: 399,
    description: "Impresora de alta resolución con integración perfecta con dispositivos Apple.",
    image: "https://mediaserver.goepson.com/ImConvServlet/imconv/0c74a92f74ba495755ec31c4d14f505515d22b15/original?use=productpictures&hybrisId=B2C&assetDescr=AM-C5000_headon_690x460",
    categoryId: 6,
    stock: 10,
  },
  {
    id: 27,
    name: "AirPrint Studio 4K",
    price: 599,
    description: "Diseñada para diseñadores. Imprime páginas vibrantes en gran formato.",
    image: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/c4/b8/90/c4b89037-649f-4f75-9558-3538163b9956/AppIcon-0-0-85-220-0-0-5-0-2x.png/1200x630bb.png",
    categoryId: 6,
    stock: 6,
  },
  {
    id: 28,
    name: "AirPrint Mini Home",
    price: 199,
    description: "Impresora inalámbrica compacta, ideal para estudiantes y espacios pequeños.",
    image: "https://s.alicdn.com/@sc04/kf/H9acaf503a4dd460788e1250d6778e3980.jpg_720x720q50.jpg",
    categoryId: 6,
    stock: 15,
  },
  {
    id: 29,
    name: "AirPrint Pro Color",
    price: 499,
    description: "Impresión profesional a color fácil desde todos los dispositivos Apple.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYW1QRUJnOibWuKJcb3EZxfAEHbLiypYqfoQ&s",
    categoryId: 6,
    stock: 8,
  },
  {
    id: 30,
    name: "AirPrint Eco",
    price: 299,
    description: "Bajo consumo energético, resultados de impresión de alta calidad.",
    image: "https://qvc.scene7.com/is/image/QVC/u2/7/50/735350.001?$aempdlarge80$",
    categoryId: 6,
    stock: 18,
  },

  // 🎒 Accessories - categoryId: 7
  {
    id: 31,
    name: "MagSafe Duo Charger",
    price: 129,
    description: "Carga tu iPhone y Apple Watch al mismo tiempo. Plegable y portátil.",
    image: "https://www.celudmovil.com.co/cdn/shop/files/MAGSAFEDUO_1024x1024.png?v=1697827277",
    categoryId: 7,
    stock: 20,
  },
  {
    id: 32,
    name: "Apple Pencil (2nd Gen)",
    price: 129,
    description: "Precisión perfecta para iPad Pro y Air. Ideal para creativos.",
    image: "https://m.media-amazon.com/images/I/51CKqmcniIL.jpg",
    categoryId: 7,
    stock: 22,
  },
  {
    id: 33,
    name: "Magic Mouse",
    price: 79,
    description: "Mouse multitáctil elegante que funciona a la perfección con macOS.",
    image: "https://exitocol.vtexassets.com/arquivos/ids/25418065/apple-magic-mouse-2-plateado-raton-recargable-bluetooth.jpg?v=638657316458600000",
    categoryId: 7,
    stock: 15,
  },
  {
    id: 34,
    name: "Apple Watch Band (Sport Loop)",
    price: 49,
    description: "Correa cómoda y transpirable. Disponible en muchos colores.",
    image: "https://mac-center.com/cdn/shop/files/IMG-14867059.jpg?v=1726874117",
    categoryId: 7,
    stock: 18,
  },
  {
    id: 35,
    name: "Magic Keyboard for iPad Pro",
    price: 299,
    description: "Teclas retroiluminadas, trackpad y diseño flotante para iPad.",
    image: "https://co.tiendasishop.com/cdn/shop/files/IMG-13087522_b0e4660a-972e-4068-99dd-1ab7d15ee51d.jpg?v=1740421130&width=1000",
    categoryId: 7,
    stock: 10,
  }
];

export default products