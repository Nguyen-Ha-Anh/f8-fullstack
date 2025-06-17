import ProductItem from './ProductItem'

function ProductList({products}) {
    return (
        <div>
            {products.map(product => (
                <ProductItem key={product.id} product={product}></ProductItem>
            ))}
        </div>
    )
}

export default ProductList