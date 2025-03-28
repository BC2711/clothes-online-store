export interface Product {
    id: string;
    name: string;
    price: number;
    originalPrice?: number;
    image: string;
    rating: number;
    reviewCount: number;
    colors: string[];
    inStock: boolean;
    category: string;
    brand: string;
    isNew?: boolean;
    isFeatured?: boolean;
    isOnSale?: boolean;
  }
  
  export interface FilterOptions {
    category: string[];
    brand: string[];
    priceRange: [number, number];
    inStock: boolean;
    onSale: boolean;
  }
  
  export type SortOption = 
    | 'featured'
    | 'newest'
    | 'price-low-high'
    | 'price-high-low'
    | 'rating';