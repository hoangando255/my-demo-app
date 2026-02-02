export interface Product {
  id: number,
  name: string,
  price: number,
  thumbnail: string,
  category:string,
}
export const products: Product [] =[
  { id: 1, name: 'iPhone 17', price: 1100, thumbnail: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone_17_256gb-3_2.jpg', category: 'smartphones'},
  { id: 2, name: 'iPhone 17 Pro', price: 1600, thumbnail: 'https://cdn.tgdd.vn/Products/Images/42/342676/iphone-17-pro-xanh-duong-thumb-600x600.jpg', category: 'smartphones'},
  { id: 3, name: 'iPhone 17 Pro Max ', price: 2000, thumbnail:'https://cdn-v3.xtmobile.vn/vnt_upload/product/09_2025/thumbs/600_iPhone_17_Pro_trang_1_2.jpg', category: 'smartphones'},
  { id: 4, name: 'iPhone Air', price: 1200, thumbnail:'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone_air-3_4.jpg', category: 'smartphones'},
  { id: 5, name: 'iPhone 16', price: 800, thumbnail: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-1.png', category: 'smartphones'},
  { id: 6, name: 'iPhone 16 Plus', price: 1000, thumbnail:'https://cdn.tgdd.vn/Products/Images/42/329141/iphone-16-plus-hong.png', category: 'smartphones' },
  { id: 7, name: 'iPad Pro', price: 2000, thumbnail:'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/f/r/frame_100_1_2__2_2.png', category: 'tablets'},
  { id: 8, name: 'iPad Air', price: 1850, thumbnail:'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/ipad-air-6-m2-11-inch_2_1.jpg', category: 'tablets'},
  { id: 9, name: 'iPad', price: 1700, thumbnail: 'https://www.techone.vn/wp-content/uploads/2022/10/ipad-2022-256gb-4g-mau-hong.jpg', category: 'tablets'},
  { id: 10, name: 'iPad Mini', price: 1300, thumbnail: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/t/e/text_ng_n_13_12.png', category: 'tablets'},
  { id: 11, name: 'iPad Air M2', price: 1750, thumbnail:'https://cdn.tgdd.vn/Products/Images/522/325507/ipad-air-13-inch-m2-wifi-kem-1-750x500.jpg', category: 'tablets'},
  { id: 12, name: 'iPad Air M3', price: 1800, thumbnail: 'https://cdn.tgdd.vn/Products/Images/522/335275/ipad-air-m3-13-inch-wifi-purple-thumb-600x600.jpg', category: 'tablets'},
  { id: 13, name: 'AirPods Max - Ánh Sao', price: 1499, thumbnail: 'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/54/329161/airpods-max-cong-usb-c-trang-4-638616661046835106-750x500.jpg', category: 'accessory'},
  { id: 14, name: 'Apple Pencil Pro', price: 1435, thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZwnhQckp1GL5Qy_r6KHx7JQHMziT7NBWsmw&s', category: 'accessory'},
  { id: 15, name: 'Apple Watch Series 11', price: 1199, thumbnail: 'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/7077/344750/apple-watch-series-11-vien-nhom-day-the-thao-hong-1-638931878401695857-750x500.jpg', category: 'accessory'},
];
