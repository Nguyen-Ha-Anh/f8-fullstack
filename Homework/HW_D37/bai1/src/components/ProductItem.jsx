import React from 'react';

function formatVND(number) {
  return number.toLocaleString('vi-VN') + ' VND';
}

function ProductItem({ name, price, category, brand }) {
  return (
    <div style={{ marginBottom: '10px' }}>
      {name} - {formatVND(price)} - {category} - {brand}
    </div>
  );
}

export default React.memo(ProductItem);
