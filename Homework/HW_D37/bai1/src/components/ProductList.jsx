import { memo } from 'react';
import ProductItem from './ProductItem';

function ProductList ({products}) {
    return (
        <div>
           {products.map((product) => (
            <ProductItem key={product.id} {...product} />
           ))}
        </div>
    )
}

export default memo(ProductList);