import React from 'react';
import ProductCard from './ProductCard';
import BestSellerCard from './BestSellerCard';
import './ProductList.css';

const products = [
  {
    type: 'ProductCard',
    image: '/path/to/image1.png',
    title: 'Produit 1',
    description: 'Description 1',
    price: 10,
  },
  {
    type: 'BestSellerCard',
    image: '/path/to/bestseller.png',
    title: 'Produit 2',
    description: 'Description 2',
    rating: '4.6 ★★★★☆',
  },
  {
    type: 'ProductCard',
    image: '/path/to/image3.png',
    title: 'Produit 3',
    description: 'Description 3',
    price: 10,
  },
  {
    type: 'ProductCard',
    image: '/path/to/image4.png',
    title: 'Produit 4',
    description: 'Description 4',
    price: 10,
  },
  {
    type: 'BestSellerCard',
    image: '/path/to/bestseller2.png',
    title: 'Produit 5',
    description: 'Description 5',
    rating: '4.8 ★★★★☆',
  },
];

const ProductList = () => {
  return (
    <div className="product-list">
      {products.map((product, index) => (
        product.type === 'BestSellerCard' ? (
          <BestSellerCard key={index} {...product} />
        ) : (
          <ProductCard key={index} {...product} />
        )
      ))}
    </div>
  );
};

export default ProductList;
