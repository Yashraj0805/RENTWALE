// Array of product data (you can add as many products as needed)
const products = [
    { image: 'images/1.jpg', name: "Chaniya Choli", price: "₹1200/day", link: "product-details.html" },
    { image: 'images/2.jpg', name: "Kediyu and Dhoti", price: "₹1000/day", link: "product-details.html" },

    // Add 65+ products here
    { image: 'images/3.jpg', name: "Product 3", price: "₹1500/day", link: "product-details.html" },
    { image: 'images/4.jpg', name: "Product 4", price: "₹1800/day", link: "product-details.html" },
    { image: 'images/6.jpg', name: "Kediyu and Dhoti", price: "₹1000/day", link: "product-details.html" },
    { image: 'images/7.jpg', name: "Kediyu and Dhoti", price: "₹1000/day", link: "product-details.html" },
    { image: 'images/8.jpg', name: "Kediyu and Dhoti", price: "₹1000/day", link: "product-details.html" },
    { image: 'images/9.jpg', name: "Kediyu and Dhoti", price: "₹1000/day", link: "product-details.html" },
    { image: 'images/10.jpg', name: "Kediyu and Dhoti", price: "₹1000/day", link: "product-details.html" },
    { image: 'images/11.jpg', name: "Kediyu and Dhoti", price: "₹1000/day", link: "product-details.html" },
    { image: 'images/12.jpg', name: "Kediyu and Dhoti", price: "₹1000/day", link: "product-details.html" },
    { image: 'images/13.jpg', name: "Kediyu and Dhoti", price: "₹1000/day", link: "product-details.html" },
    { image: 'images/14.jpg', name: "Kediyu and Dhoti", price: "₹1000/day", link: "product-details.html" },
    { image: 'images/15.jpg', name: "Kediyu and Dhoti", price: "₹1000/day", link: "product-details.html" },
    { image: 'images/16.jpg', name: "Kediyu and Dhoti", price: "₹1000/day", link: "product-details.html" },
    { image: 'images/17.jpg', name: "Kediyu and Dhoti", price: "₹1000/day", link: "product-details.html" },
    { image: 'images/18.jpg', name: "Kediyu and Dhoti", price: "₹1000/day", link: "product-details.html" },
    { image: 'images/19.jpg', name: "Kediyu and Dhoti", price: "₹1000/day", link: "product-details.html" },
    { image: 'images/2.jpg', name: "Kediyu and Dhoti", price: "₹1000/day", link: "product-details.html" },
    { image: 'images/20.jpg', name: "Kediyu and Dhoti", price: "₹1000/day", link: "product-details.html" },
    { image: 'images/21.jpg', name: "Kediyu and Dhoti", price: "₹1000/day", link: "product-details.html" },

    // Repeat for the rest of your products
];

// Function to generate product HTML and insert into the page
function loadProducts() {
    const productGrid = document.getElementById('product-grid');
    products.forEach(product => {
        const productHTML = `
            <div class="product">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>Price: ${product.price}</p>
                <a href="${product.link}" class="btn">View Details</a>
            </div>
        `;
        productGrid.innerHTML += productHTML;
    });
}

// Call the function to load the products
loadProducts();

// new 

