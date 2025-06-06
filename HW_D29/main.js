const products = [
    {
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: '$109.95',
        description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category: "men's clothing",
        rating: { rate: 3.9, count: 120 },
        image: "https://imagedelivery.net/ZeGtsGSjuQe1P3UP_zk3fQ/374feebc-6f21-4fab-3a62-2b735a4fd700/storedata"
    },
    
    {
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: '$109.95',
        description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category: "men's clothing",
        rating: { rate: 3.9, count: 120 },
        image: "https://imagedelivery.net/ZeGtsGSjuQe1P3UP_zk3fQ/374feebc-6f21-4fab-3a62-2b735a4fd700/storedata"
    },

    {
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: '$109.95',
        description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category: "men's clothing",
        rating: { rate: 3.9, count: 120 },
        image: "https://imagedelivery.net/ZeGtsGSjuQe1P3UP_zk3fQ/374feebc-6f21-4fab-3a62-2b735a4fd700/storedata"
    },

    {
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: '$109.95',
        description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category: "men's clothing",
        rating: { rate: 3.9, count: 120 },
        image: "https://imagedelivery.net/ZeGtsGSjuQe1P3UP_zk3fQ/374feebc-6f21-4fab-3a62-2b735a4fd700/storedata"
    }
]

const container = document.querySelector('.container')

function renderProducts(products) {
    products.forEach(product => {
        const productItem = document.createElement('div')
        productItem.className = 'product-item'

        const img = document.createElement('img')
        img.src = product.image
        img.className = 'product-img'

        const title = document.createElement('h3')
        title.className = 'product-title'
        title.textContent = product.title

        const price = document.createElement('p')
        price.className = 'product-price'
        price.textContent = `${product.price}`

        const description = document.createElement('p')
        description.className = 'description'
        description.textContent = product.description

        const category = document.createElement('p')
        category.className = 'category'
        category.innerHTML = `<i>Category: ${product.category}</i>`

        const rating = document.createElement('p')
        rating.className = 'rating'
        rating.innerHTML = `Rating: ${product.rating.rate} (${product.rating.count} review)`

        productItem.append(img, title, price, description,category, rating)

        container.appendChild(productItem)
    })

}

const getProduct = async () => {
        const response = await fetch('https://fakestoreapi.com/products')
        return await response.json()
}
// renderProducts(products)
getProduct().then(data => {
    renderProducts(data)
})
