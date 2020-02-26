const SHOP_DATA = [
  {
    id: 1,
    title: 'Summer',
    routeName: 'summer',
    items: [
      {
        id: 1,
        name: 'Basic White Tee',
        imageUrl: 'https://i.ibb.co/WfJbffr/basic-tee.jpg',
        price: 15,
        tags: ['summer', 'mens']
      },
      {
        id: 2,
        name: 'Pale Vans',
        imageUrl: 'https://i.ibb.co/PW1rsB0/beige-shoes.jpg',
        price: 18,
        tags: ['summer', 'footwear', 'mens', 'womens']
      },
      {
        id: 3,
        name: 'Blue Sandals',
        imageUrl: 'https://i.ibb.co/D8X5xKN/blue-sandals-high.jpg',
        price: 12,
        tags: ['summer', 'footwear', 'womens']
      },
      {
        id: 4,
        name: 'Floral Dress',
        imageUrl: 'https://i.ibb.co/2kKtB3h/floral.jpg',
        price: 25,
        tags: ['summer', 'womens']
      },
      {
        id: 5,
        name: 'Bow Straw Hat',
        imageUrl: 'https://i.ibb.co/mC2FgxC/straw-hat.jpg',
        price: 18,
        tags: ['summer', 'womens', 'headwear']
      },
      {
        id: 6,
        name: 'Basic Red Tee',
        imageUrl: 'https://i.ibb.co/mGgMFLF/red-top.jpg',
        price: 14,
        tags: ['summer', 'womens']
      },
      {
        id: 7,
        name: 'Island Fedora',
        imageUrl: 'https://i.ibb.co/RzpGVDC/tropical-hat.jpg',
        price: 14,
        tags: ['summer', 'headwear', 'womens', 'mens']
      },
      {
        id: 8,
        name: 'Blue Flip Flops',
        imageUrl: 'https://i.ibb.co/G9KdBQN/blue-flips.jpg',
        price: 9,
        tags: ['summer', 'footwear']
      },
      {
        id: 9,
        name: 'Flower Hat',
        imageUrl: 'https://i.ibb.co/F3ngR5S/pink-floral-hat.jpg',
        price: 19,
        tags: ['summer', 'headwear', 'womens']
      }
    ]
  },
  {
    id: 2,
    title: 'Autumn',
    routeName: 'autumn',
    items: [
      {
        id: 10,
        name: 'Faux Leather Sandals',
        imageUrl: 'https://i.ibb.co/mXkQ0HW/brown-leather-sandals-high.jpg',
        price: 24,
        tags: ['autumn', 'footwear', 'mens']
      },
      {
        id: 11,
        name: 'Warm Maroon Tee',
        imageUrl: 'https://i.ibb.co/ZNhF1nN/maroon-tee.jpg',
        price: 18,
        tags: ['autumn', 'mens']
      },
      {
        id: 12,
        name: 'Faux Felt Hat',
        imageUrl: 'https://i.ibb.co/mTjKZsz/brown-hat.jpg',
        price: 21,
        tags: ['autumn', 'headwear', 'womens']
      },
      {
        id: 13,
        name: 'Nike Mid-high Pale Blue',
        imageUrl: 'https://i.ibb.co/jLpWs4S/grey-shoes-high.jpg',
        price: 29,
        tags: ['autumn', 'footwear', 'mens', 'womens']
      },
      {
        id: 14,
        name: 'Faux Leather Brown Jacket',
        imageUrl: 'https://i.ibb.co/5jcMbKF/brown-leather-jacket.jpg',
        price: 32,
        tags: ['autumn', 'mens']
      },
      {
        id: 15,
        name: 'Nike Brown High Tops',
        imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
        price: 16,
        tags: ['autumn']
      },
      {
        id: 16,
        name: 'Warm Denim Jacket',
        imageUrl: 'https://i.ibb.co/BV95Q5b/denim2-jacket.jpg',
        price: 24,
        tags: ['autumn', 'womens']
      },
      {
        id: 17,
        name: 'Warm Grey Hat',
        imageUrl: 'https://i.ibb.co/CVLvYvp/greyer-hat-high.jpg',
        price: 18,
        tags: ['autumn', 'headwear', 'mens']
      },
      {
        id: 18,
        name: 'Light Faux Leather Black Jacket',
        imageUrl: 'https://i.ibb.co/HYHstzF/black-jacket-high.jpg',
        price: 24,
        tags: ['autumn', 'mens']
      }
    ]
  },
  {
    id: 3,
    title: 'Winter',
    routeName: 'winter',
    items: [
      {
        id: 19,
        name: 'Heavy Faux Fur Jacket',
        imageUrl: 'https://i.ibb.co/xJMRM2P/black-fur-jacket.jpg',
        price: 58,
        tags: ['winter', 'womens']
      },
      {
        id: 20,
        name: 'High-top Faux Leather Boots',
        imageUrl: 'https://i.ibb.co/RSWQdk0/maroon-boots.jpg',
        price: 45,
        tags: ['winter', 'footwear', 'mens']
      },
      {
        id: 21,
        name: 'Beige Coat',
        imageUrl: 'https://i.ibb.co/mCZ8Rzg/beige-jacket.jpg',
        price: 40,
        tags: ['winter', 'mens']
      },
      {
        id: 22,
        name: 'Pale Blue Turtleneck',
        imageUrl: 'https://i.ibb.co/1L92tK2/bluer-cardi.jpg',
        price: 32,
        tags: ['winter', 'womens']
      },
      {
        id: 23,
        name: 'Grey Puffer Jacket',
        imageUrl: 'https://i.ibb.co/NNFbtrc/grey-puffer.jpg',
        price: 42,
        tags: ['winter', 'mens']
      },
      {
        id: 24,
        name: 'Indestructable Boots',
        imageUrl: 'https://i.ibb.co/FzN1xQK/brow-boots.jpg',
        price: 46,
        tags: ['winter', 'mens', 'footwear']
      },
      {
        id: 25,
        name: 'Blue Puffer Jacket',
        imageUrl: 'https://i.ibb.co/hgzPbkX/blue-puffer.jpg',
        price: 39,
        tags: ['winter', 'womens']
      },
      {
        id: 26,
        name: 'Warm Black Coat',
        imageUrl: 'https://i.ibb.co/N99zk68/black-jacket.jpg',
        price: 45,
        tags: ['winter', 'womens']
      }
    ]
  },
  {
    id: 4,
    title: 'Spring',
    routeName: 'spring',
    items: [
      {
        id: 27,
        name: 'Blue Dress',
        imageUrl: 'https://i.ibb.co/svGFtvN/sun-dress.jpg',
        price: 25,
        tags: ['spring', 'womens']
      },
      {
        id: 28,
        name: 'Striped Shirt',
        imageUrl: 'https://i.ibb.co/FbmTVJW/stripe-shirt-high.jpg',
        price: 20,
        tags: ['spring', 'mens']
      },
      {
        id: 29,
        name: 'Red Dress',
        imageUrl: 'https://i.ibb.co/ZVGZL90/red-dress.jpg',
        price: 22,
        tags: ['spring', 'womens']
      },
      {
        id: 30,
        name: 'Peace Tee',
        imageUrl: 'https://i.ibb.co/3WwfhXW/skeletal-tee.jpg',
        price: 13,
        tags: ['spring', 'womens']
      },
      {
        id: 31,
        name: 'Womens Light Denim Jacket',
        imageUrl: 'https://i.ibb.co/GWSD4v0/denim-vest.jpg',
        price: 28,
        tags: ['spring', 'womens']
      },
      {
        id: 32,
        name: 'Mens Light Denim Jacket',
        imageUrl: 'https://i.ibb.co/tB6KBYb/blue-jacket-high.jpg',
        price: 28,
        tags: ['spring', 'mens']
      },
      {
        id: 33,
        name: 'White Tee',
        imageUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
        price: 14,
        tags: ['spring', 'womens']
      }
    ]
  },
  // {
  //   id: 5,
  //   title: 'Mens',
  //   routeName: 'mens',
  //   items: [
  //     {
  //       id: 30,
  //       name: 'Camo Down Vest',
  //       imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
  //       price: 32,
  //       tags: []5
  //     },
  //     {
  //       id: 31,
  //       name: 'Floral T-shirt',
  //       imageUrl: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
  //       price: 20,
  //       tags: []
  //     },
  //     {
  //       id: 32,
  //       name: 'Black & White Longsleeve',
  //       imageUrl: 'https://i.ibb.co/55z32tw/long-sleeve.png',
  //       price: 25,
  //       tags: []
  //     },
  //     {
  //       id: 33,
  //       name: 'Pink T-shirt',
  //       imageUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
  //       price: 25,
  //       tags: []
  //     },
  //     {
  //       id: 34,
  //       name: 'Jean Long Sleeve',
  //       imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
  //       price: 40,
  //       tags: []
  //     },
  //     {
  //       id: 35,
  //       name: 'Burgundy T-shirt',
  //       imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
  //       price: 25,
  //       tags: []
  //     }
  //   ]
  // },
  // {
  //   id: 6,
  //   title: 'Womens',
  //   routeName: 'womens',
  //   items: [
  //     {
  //       id: 37,
  //       name: 'Blue Tanktop',
  //       imageUrl: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
  //       price: 25,
  //       tags: []
  //     },
  //     {
  //       id: 38,
  //       name: 'Floral Blouse',
  //       imageUrl: 'https://i.ibb.co/4W2DGKm/floral-blouse.png',
  //       price: 20,
  //       tags: []
  //     },
  //     {
  //       id: 39,
  //       name: 'Floral Dress',
  //       imageUrl: 'https://i.ibb.co/KV18Ysr/floral-skirt.png',
  //       price: 80,
  //       tags: []
  //     },
  //     {
  //       id: 46,
  //       name: 'Red Dots Dress',
  //       imageUrl: 'https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png',
  //       price: 80,
  //       tags: []
  //     },
  //     {
  //       id: 41,
  //       name: 'Striped Sweater',
  //       imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
  //       price: 45,
  //       tags: []
  //     },
  //     {
  //       id: 42,
  //       name: 'Yellow Track Suit',
  //       imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
  //       price: 13,
  //       tags: []5
  //     },
  //     {
  //       id: 43,
  //       name: 'White Blouse',
  //       imageUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
  //       price: 20,
  //       tags: []
  //     }
  //   ]
  // },
];

export default SHOP_DATA;
