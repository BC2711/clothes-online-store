import { Product } from './types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Wireless Bluetooth Headphones',
    price: 99.99,
    originalPrice: 129.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    rating: 4.5,
    reviewCount: 128,
    colors: ['Black', 'Silver', 'Blue'],
    inStock: true,
    category: 'Audio',
    brand: 'SoundMaster',
    isNew: true,
    isFeatured: true,
    isOnSale: true
  },
  {
    id: '2',
    name: 'Smart Watch Series 5',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    rating: 4.2,
    reviewCount: 86,
    colors: ['Black', 'Silver', 'Gold'],
    inStock: true,
    category: 'Wearables',
    brand: 'TechGear',
    isFeatured: true
  },
  // Add more products as needed...
];