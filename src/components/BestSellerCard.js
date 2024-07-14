import React from 'react';
import './BestSellerCard.css';

const BestSellerCard = ({ image, title, description, rating }) => {
  return (
    <div className="best-seller-card">
      <img src={image} alt={title} className="best-seller-image" />
      <div className="best-seller-details">
        <h3 className="best-seller-title">Meilleur vente</h3>
        <p className="best-seller-product">{title}</p>
        <p className="best-seller-description">{description}</p>
        <p className="best-seller-rating">Rating: {rating}</p>
      </div>
    </div>
  );
};

export default BestSellerCard;
