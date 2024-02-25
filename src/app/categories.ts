import { Product } from "./products";

export interface Category {
  id: number;
  likes: 10;
  name: string;
  description: string;
  products: Product[];
}

export const categories: Category[] = [
  {
    id: 1,
    likes: 10,
    name: "Apple",
    description: "The Apple production",
    products: [
      {
        id: 1,
        likes: 10,
        name: "Смартфон Apple iPhone 13 128Gb Midnight черный",
        images: [
          "https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium",
          "https://resources.cdn-kaspi.kz/img/m/p/h35/h8f/84378448232478.jpg?format=gallery-medium",
          "https://resources.cdn-kaspi.kz/img/m/p/h3d/h8e/64208874405918.jpg?format=gallery-medium",
        ],
        price: 291973,
        description: `технология NFC: Да
        цвет: черный
        тип экрана: OLED, Super Retina XDR
        диагональ: 6.1 дюйм
        размер оперативной памяти: 4 ГБ
        процессор: 6-ядерный Apple A15 Bionic
        объем встроенной памяти: 128.0 ГБ
        емкость аккумулятора: 3095.0 мАч`,
        rating: 5,
        link: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-midnight-chernyi-102298404/?c=750000000",
      },
      {
        id: 2,
        likes: 10,
        name: "Зарядное устройство Apple 20W USB-C Power Adapter белый",
        images: [
          "https://resources.cdn-kaspi.kz/img/m/p/h95/h0e/63961934823454.jpg?format=gallery-medium",
          "https://resources.cdn-kaspi.kz/img/m/p/haa/h98/63961936723998.jpg?format=gallery-medium",
          "https://resources.cdn-kaspi.kz/img/m/p/h81/h1a/63961938624542.jpg?format=gallery-medium",
        ],
        price: 3348,
        description: `тип: сетевая зарядка
        количество подключаемых устройств: 1
        быстрая зарядка: Да
        разъем подключения: USB Type-C`,
        rating: 4.5,
        link: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-midnight-chernyi-102298404/?c=750000000",
      },
      {
        id: 3,
        likes: 10,
        name: "Наушники Apple AirPods Pro 2nd generation with Wireless MagSafe Charging Case белый",
        images: [
          "https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium",
          "https://resources.cdn-kaspi.kz/img/m/p/h03/h0e/84108189696030.jpg?format=gallery-medium",
          "https://resources.cdn-kaspi.kz/img/m/p/h14/h8a/84108189761566.jpg?format=gallery-medium",
        ],
        price: 108000,
        description: `тип: наушники
        вид: внутриканальные
        подключение: беспроводное
        тип акустического оформления: закрытые
        тип крепления: без крепления
        система активного шумоподавления: Да
        микрофон: Да`,
        rating: 5,
        link: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-midnight-chernyi-102298404/?c=750000000",
      },
      {
        id: 4,
        likes: 10,
        name: "Смартфон Apple iPhone 15 Pro Max 256Gb серый",
        images: [
          "https://resources.cdn-kaspi.kz/img/m/p/hc1/h65/83559848181790.png?format=gallery-medium",
          "https://resources.cdn-kaspi.kz/img/m/p/hfb/hf5/83559848214558.png?format=gallery-medium",
          "https://resources.cdn-kaspi.kz/img/m/p/hfb/hf5/83559848214558.png?format=gallery-medium",
        ],
        price: 611943,
        description: `технология NFC: Да
        цвет: серый
        тип экрана: OLED, Super Retina XDR display
        диагональ: 6.7 дюйм
        размер оперативной памяти: 8 ГБ
        процессор: 6-ядерный Apple A17 Pro
        объем встроенной памяти: 256.0 ГБ
        емкость аккумулятора: 4422.0 мАч`,
        rating: 5,
        link: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-midnight-chernyi-102298404/?c=750000000",
      },
      {
        id: 5,
        likes: 10,
        name: "Смартфон Apple iPhone 14 128Gb черный",
        images: [
          "https://resources.cdn-kaspi.kz/img/m/p/hc2/hfe/64400502915102.jpg?format=gallery-medium",
          "https://resources.cdn-kaspi.kz/img/m/p/hc8/h0b/64400500097054.jpg?format=gallery-medium",
          "https://resources.cdn-kaspi.kz/img/m/p/h98/h2b/64400497737758.jpg?format=gallery-medium",
        ],
        price: 323247,
        description: `технология NFC: Да
        цвет: черный
        тип экрана: OLED, Super Retina XDR display
        диагональ: 6.1 дюйм
        размер оперативной памяти: 6 ГБ
        процессор: 6-ядерный Apple A15 Bionic
        объем встроенной памяти: 128.0 ГБ
        емкость аккумулятора: 3279.0 мАч`,
        rating: 5,
        link: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-midnight-chernyi-102298404/?c=750000000",
      },
    ],
  },
  {
    id: 2,
    likes: 10,
    name: "Samsung",
    description: "The Samsung production",
    products: [
      {
        id: 9,
        likes: 10,
        name: "Пылесос Samsung VCC4520S3R/XEV красный",
        images: [
          "https://resources.cdn-kaspi.kz/img/m/p/heb/h01/63769265045534.jpg?format=gallery-medium",
          "https://resources.cdn-kaspi.kz/img/m/p/h86/h14/63769265766430.jpg?format=gallery-medium",
          "https://resources.cdn-kaspi.kz/img/m/p/h29/h78/63769266094110.jpg?format=gallery-medium",
        ],
        price: 30295,
        description: `тип: традиционный
            уборка: сухая
            тип пылесборника: циклонный фильтр
            потребляемая мощность: 1600.0 Вт
            источник питания: сеть
            цвет: красный`,
        rating: 4.5,
        link: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-midnight-chernyi-102298404/?c=750000000",
      },
      {
        id: 10,
        likes: 10,
        name: "Пылесос Samsung VCC4520S36/XEV синий",
        images: [
          "https://resources.cdn-kaspi.kz/img/m/p/h00/h25/63761734795294.jpg?format=gallery-medium",
          "https://resources.cdn-kaspi.kz/img/m/p/hc0/h18/63761735221278.jpg?format=gallery-medium",
          "https://resources.cdn-kaspi.kz/img/m/p/h68/h88/63761735974942.jpg?format=gallery-medium",
        ],
        price: 31050,
        description: `тип: традиционный
            уборка: сухая
            тип пылесборника: контейнер
            потребляемая мощность: 1600.0 Вт
            источник питания: сеть
            цвет: синий`,
        rating: 4.5,
        link: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-midnight-chernyi-102298404/?c=750000000",
      },
      {
        id: 11,
        likes: 10,
        name: "Пылесос Samsung VCC4520S36/XEV синий",
        images: [
          "https://resources.cdn-kaspi.kz/img/m/p/h00/h25/63761734795294.jpg?format=gallery-medium",
          "https://resources.cdn-kaspi.kz/img/m/p/hc0/h18/63761735221278.jpg?format=gallery-medium",
          "https://resources.cdn-kaspi.kz/img/m/p/h68/h88/63761735974942.jpg?format=gallery-medium",
        ],
        price: 31050,
        description: `тип: традиционный
            уборка: сухая
            тип пылесборника: контейнер
            потребляемая мощность: 1600.0 Вт
            источник питания: сеть
            цвет: синий`,
        rating: 4.5,
        link: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-midnight-chernyi-102298404/?c=750000000",
      },
      {
        id: 12,
        likes: 10,
        name: "Пылесос Samsung VCC4520S36/XEV синий",
        images: [
          "https://resources.cdn-kaspi.kz/img/m/p/h00/h25/63761734795294.jpg?format=gallery-medium",
          "https://resources.cdn-kaspi.kz/img/m/p/hc0/h18/63761735221278.jpg?format=gallery-medium",
          "https://resources.cdn-kaspi.kz/img/m/p/h68/h88/63761735974942.jpg?format=gallery-medium",
        ],
        price: 31050,
        description: `тип: традиционный
            уборка: сухая
            тип пылесборника: контейнер
            потребляемая мощность: 1600.0 Вт
            источник питания: сеть
            цвет: синий`,
        rating: 4.5,
        link: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-midnight-chernyi-102298404/?c=750000000",
      },
      {
        id: 13,
        likes: 10,
        name: "Пылесос Samsung VCC4520S36/XEV синий",
        images: [
          "https://resources.cdn-kaspi.kz/img/m/p/h00/h25/63761734795294.jpg?format=gallery-medium",
          "https://resources.cdn-kaspi.kz/img/m/p/hc0/h18/63761735221278.jpg?format=gallery-medium",
          "https://resources.cdn-kaspi.kz/img/m/p/h68/h88/63761735974942.jpg?format=gallery-medium",
        ],
        price: 31050,
        description: `тип: традиционный
            уборка: сухая
            тип пылесборника: контейнер
            потребляемая мощность: 1600.0 Вт
            источник питания: сеть
            цвет: синий`,
        rating: 4.5,
        link: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-midnight-chernyi-102298404/?c=750000000",
      },
    ],
  },
  {
    id: 1,
    likes: 10,
    name: "Apple",
    description: "The Apple production",
    products: [
      {
        id: 1,
        likes: 10,
        name: "Смартфон Apple iPhone 13 128Gb Midnight черный",
        images: [
          "https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium",
          "https://resources.cdn-kaspi.kz/img/m/p/h35/h8f/84378448232478.jpg?format=gallery-medium",
          "https://resources.cdn-kaspi.kz/img/m/p/h3d/h8e/64208874405918.jpg?format=gallery-medium",
        ],
        price: 291973,
        description: `технология NFC: Да
        цвет: черный
        тип экрана: OLED, Super Retina XDR
        диагональ: 6.1 дюйм
        размер оперативной памяти: 4 ГБ
        процессор: 6-ядерный Apple A15 Bionic
        объем встроенной памяти: 128.0 ГБ
        емкость аккумулятора: 3095.0 мАч`,
        rating: 5,
        link: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-midnight-chernyi-102298404/?c=750000000",
      },
      {
        id: 2,
        likes: 10,
        name: "Зарядное устройство Apple 20W USB-C Power Adapter белый",
        images: [
          "https://resources.cdn-kaspi.kz/img/m/p/h95/h0e/63961934823454.jpg?format=gallery-medium",
          "https://resources.cdn-kaspi.kz/img/m/p/haa/h98/63961936723998.jpg?format=gallery-medium",
          "https://resources.cdn-kaspi.kz/img/m/p/h81/h1a/63961938624542.jpg?format=gallery-medium",
        ],
        price: 3348,
        description: `тип: сетевая зарядка
        количество подключаемых устройств: 1
        быстрая зарядка: Да
        разъем подключения: USB Type-C`,
        rating: 4.5,
        link: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-midnight-chernyi-102298404/?c=750000000",
      },
      {
        id: 3,
        likes: 10,
        name: "Наушники Apple AirPods Pro 2nd generation with Wireless MagSafe Charging Case белый",
        images: [
          "https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium",
          "https://resources.cdn-kaspi.kz/img/m/p/h03/h0e/84108189696030.jpg?format=gallery-medium",
          "https://resources.cdn-kaspi.kz/img/m/p/h14/h8a/84108189761566.jpg?format=gallery-medium",
        ],
        price: 108000,
        description: `тип: наушники
        вид: внутриканальные
        подключение: беспроводное
        тип акустического оформления: закрытые
        тип крепления: без крепления
        система активного шумоподавления: Да
        микрофон: Да`,
        rating: 5,
        link: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-midnight-chernyi-102298404/?c=750000000",
      },
      {
        id: 4,
        likes: 10,
        name: "Смартфон Apple iPhone 15 Pro Max 256Gb серый",
        images: [
          "https://resources.cdn-kaspi.kz/img/m/p/hc1/h65/83559848181790.png?format=gallery-medium",
          "https://resources.cdn-kaspi.kz/img/m/p/hfb/hf5/83559848214558.png?format=gallery-medium",
          "https://resources.cdn-kaspi.kz/img/m/p/hfb/hf5/83559848214558.png?format=gallery-medium",
        ],
        price: 611943,
        description: `технология NFC: Да
        цвет: серый
        тип экрана: OLED, Super Retina XDR display
        диагональ: 6.7 дюйм
        размер оперативной памяти: 8 ГБ
        процессор: 6-ядерный Apple A17 Pro
        объем встроенной памяти: 256.0 ГБ
        емкость аккумулятора: 4422.0 мАч`,
        rating: 5,
        link: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-midnight-chernyi-102298404/?c=750000000",
      },
      {
        id: 5,
        likes: 10,
        name: "Смартфон Apple iPhone 14 128Gb черный",
        images: [
          "https://resources.cdn-kaspi.kz/img/m/p/hc2/hfe/64400502915102.jpg?format=gallery-medium",
          "https://resources.cdn-kaspi.kz/img/m/p/hc8/h0b/64400500097054.jpg?format=gallery-medium",
          "https://resources.cdn-kaspi.kz/img/m/p/h98/h2b/64400497737758.jpg?format=gallery-medium",
        ],
        price: 323247,
        description: `технология NFC: Да
        цвет: черный
        тип экрана: OLED, Super Retina XDR display
        диагональ: 6.1 дюйм
        размер оперативной памяти: 6 ГБ
        процессор: 6-ядерный Apple A15 Bionic
        объем встроенной памяти: 128.0 ГБ
        емкость аккумулятора: 3279.0 мАч`,
        rating: 5,
        link: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-midnight-chernyi-102298404/?c=750000000",
      },
    ],
  },
  {
    id: 4,
    likes: 10,
    name: "Samsung",
    description: "The Samsung production",
    products: [
      {
        id: 9,
        likes: 10,
        name: "Пылесос Samsung VCC4520S3R/XEV красный",
        images: [
          "https://resources.cdn-kaspi.kz/img/m/p/heb/h01/63769265045534.jpg?format=gallery-medium",
          "https://resources.cdn-kaspi.kz/img/m/p/h86/h14/63769265766430.jpg?format=gallery-medium",
          "https://resources.cdn-kaspi.kz/img/m/p/h29/h78/63769266094110.jpg?format=gallery-medium",
        ],
        price: 30295,
        description: `тип: традиционный
            уборка: сухая
            тип пылесборника: циклонный фильтр
            потребляемая мощность: 1600.0 Вт
            источник питания: сеть
            цвет: красный`,
        rating: 4.5,
        link: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-midnight-chernyi-102298404/?c=750000000",
      },
      {
        id: 10,
        likes: 10,
        name: "Пылесос Samsung VCC4520S36/XEV синий",
        images: [
          "https://resources.cdn-kaspi.kz/img/m/p/h00/h25/63761734795294.jpg?format=gallery-medium",
          "https://resources.cdn-kaspi.kz/img/m/p/hc0/h18/63761735221278.jpg?format=gallery-medium",
          "https://resources.cdn-kaspi.kz/img/m/p/h68/h88/63761735974942.jpg?format=gallery-medium",
        ],
        price: 31050,
        description: `тип: традиционный
            уборка: сухая
            тип пылесборника: контейнер
            потребляемая мощность: 1600.0 Вт
            источник питания: сеть
            цвет: синий`,
        rating: 4.5,
        link: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-midnight-chernyi-102298404/?c=750000000",
      },
      {
        id: 11,
        likes: 10,
        name: "Пылесос Samsung VCC4520S36/XEV синий",
        images: [
          "https://resources.cdn-kaspi.kz/img/m/p/h00/h25/63761734795294.jpg?format=gallery-medium",
          "https://resources.cdn-kaspi.kz/img/m/p/hc0/h18/63761735221278.jpg?format=gallery-medium",
          "https://resources.cdn-kaspi.kz/img/m/p/h68/h88/63761735974942.jpg?format=gallery-medium",
        ],
        price: 31050,
        description: `тип: традиционный
            уборка: сухая
            тип пылесборника: контейнер
            потребляемая мощность: 1600.0 Вт
            источник питания: сеть
            цвет: синий`,
        rating: 4.5,
        link: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-midnight-chernyi-102298404/?c=750000000",
      },
      {
        id: 12,
        likes: 10,
        name: "Пылесос Samsung VCC4520S36/XEV синий",
        images: [
          "https://resources.cdn-kaspi.kz/img/m/p/h00/h25/63761734795294.jpg?format=gallery-medium",
          "https://resources.cdn-kaspi.kz/img/m/p/hc0/h18/63761735221278.jpg?format=gallery-medium",
          "https://resources.cdn-kaspi.kz/img/m/p/h68/h88/63761735974942.jpg?format=gallery-medium",
        ],
        price: 31050,
        description: `тип: традиционный
            уборка: сухая
            тип пылесборника: контейнер
            потребляемая мощность: 1600.0 Вт
            источник питания: сеть
            цвет: синий`,
        rating: 4.5,
        link: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-midnight-chernyi-102298404/?c=750000000",
      },
      {
        id: 13,
        likes: 10,
        name: "Пылесос Samsung VCC4520S36/XEV синий",
        images: [
          "https://resources.cdn-kaspi.kz/img/m/p/h00/h25/63761734795294.jpg?format=gallery-medium",
          "https://resources.cdn-kaspi.kz/img/m/p/hc0/h18/63761735221278.jpg?format=gallery-medium",
          "https://resources.cdn-kaspi.kz/img/m/p/h68/h88/63761735974942.jpg?format=gallery-medium",
        ],
        price: 31050,
        description: `тип: традиционный
            уборка: сухая
            тип пылесборника: контейнер
            потребляемая мощность: 1600.0 Вт
            источник питания: сеть
            цвет: синий`,
        rating: 4.5,
        link: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-midnight-chernyi-102298404/?c=750000000",
      },
    ],
  },
];
