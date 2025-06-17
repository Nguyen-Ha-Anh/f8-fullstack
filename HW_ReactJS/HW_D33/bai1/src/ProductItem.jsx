function ProductItem({product}) {
    return (
        <div style={{border: '1px solid #ccc', margin: '10px', padding: '10px'}}>
            <h3>{product.name}</h3>
            <p>Price: {product.price}</p>
        </div>
    )
}

export default ProductItem