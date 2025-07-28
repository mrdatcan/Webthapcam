import React, { useEffect, useState } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/data/products.json')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error('Lỗi đọc dữ liệu:', err));
  }, []);

  return (
    <div className="product-list">
      {products.map(prod => (
        <div key={prod.id} className="product-card">
          <img src={prod.image} alt={prod.name} width={200} />
          <h3>{prod.name}</h3>
          <p>{prod.price.toLocaleString()} VND</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
