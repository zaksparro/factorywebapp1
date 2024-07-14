import React from 'react';
import './ProductCard.css';

const ProductCard = ({ image, title, description, price }) => {
  return (
    <div className="product-card">
      <div className="product-info">
        <img src={image} alt={title} className="product-image" />
        <div className="product-details">
          <h3 className="product-title">{title}</h3>
          <p className="product-description">{description}</p>
        </div>
      </div>
      <div className="product-price">
        <p>à partir de</p>
        <p className="price">{price}€</p>
        <p>l'unité</p>
      </div>
    </div>
  );
};

export default ProductCard;
