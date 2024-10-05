// Array of jewellery data (you can add as many jewellery items as needed)
const jewellery = [
    { image: 'images/j1.jpg', name: "Jewellery 1", price: "₹500/day", link: "jewellery-details.html" },
    { image: 'images/j2.jpg', name: "Jewellery 2", price: "₹800/day", link: "jewellery-details.html" },
    { image: 'images/j3.jpg', name: "Jewellery 2", price: "₹800/day", link: "jewellery-details.html" },
    { image: 'images/j4.jpg', name: "Jewellery 2", price: "₹800/day", link: "jewellery-details.html" },
    { image: 'images/j5.jpg', name: "Jewellery 2", price: "₹800/day", link: "jewellery-details.html" },
    { image: 'images/j6.jpg', name: "Jewellery 2", price: "₹800/day", link: "jewellery-details.html" },
    { image: 'images/j7.jpg', name: "Jewellery 2", price: "₹800/day", link: "jewellery-details.html" },
    { image: 'images/j8.jpg', name: "Jewellery 2", price: "₹800/day", link: "jewellery-details.html" },
    { image: 'images/j9.jpg', name: "Jewellery 2", price: "₹800/day", link: "jewellery-details.html" },
    { image: 'images/j10.jpg', name: "Jewellery 2", price: "₹800/day", link: "jewellery-details.html" },
    { image: 'images/j11.jpg', name: "Jewellery 2", price: "₹800/day", link: "jewellery-details.html" },
    { image: 'images/j12.jpg', name: "Jewellery 2", price: "₹800/day", link: "jewellery-details.html" },
    { image: 'images/j13.jpg', name: "Jewellery 2", price: "₹800/day", link: "jewellery-details.html" },
    { image: 'images/j14.jpg', name: "Jewellery 2", price: "₹800/day", link: "jewellery-details.html" },
    { image: 'images/j15.jpg', name: "Jewellery 2", price: "₹800/day", link: "jewellery-details.html" },
    { image: 'images/j16.jpg', name: "Jewellery 2", price: "₹800/day", link: "jewellery-details.html" },
    { image: 'images/j17.jpg', name: "Jewellery 2", price: "₹800/day", link: "jewellery-details.html" },
    { image: 'images/j18.jpg', name: "Jewellery 2", price: "₹800/day", link: "jewellery-details.html" },
    { image: 'images/j19.jpg', name: "Jewellery 2", price: "₹800/day", link: "jewellery-details.html" },
    { image: 'images/j20.jpg', name: "Jewellery 2", price: "₹800/day", link: "jewellery-details.html" },
    { image: 'images/j21.jpg', name: "Jewellery 2", price: "₹800/day", link: "jewellery-details.html" },
    { image: 'images/j22.jpg', name: "Jewellery 2", price: "₹800/day", link: "jewellery-details.html" },
    { image: 'images/j23.jpg', name: "Jewellery 2", price: "₹800/day", link: "jewellery-details.html" },
    { image: 'images/j24.jpg', name: "Jewellery 2", price: "₹800/day", link: "jewellery-details.html" },
    { image: 'images/j25.jpg', name: "Jewellery 2", price: "₹800/day", link: "jewellery-details.html" },
    { image: 'images/j26.jpg', name: "Jewellery 2", price: "₹800/day", link: "jewellery-details.html" },
    { image: 'images/j27.jpg', name: "Jewellery 2", price: "₹800/day", link: "jewellery-details.html" },
    { image: 'images/j28.jpg', name: "Jewellery 2", price: "₹800/day", link: "jewellery-details.html" },
    { image: 'images/j29.jpg', name: "Jewellery 2", price: "₹800/day", link: "jewellery-details.html" },
    { image: 'images/j30.jpg', name: "Jewellery 2", price: "₹800/day", link: "jewellery-details.html" },


    // Add more jewellery items here
];

// Function to generate jewellery HTML and insert into the page
function loadJewellery() {
    const jewelleryGrid = document.getElementById('jewellery-grid');
    jewellery.forEach(jewelleryItem => {
        const jewelleryHTML = `
            <div class="product">
                <img src="${jewelleryItem.image}" alt="${jewelleryItem.name}">
                <h3>${jewelleryItem.name}</h3>
                <p>Price: ${jewelleryItem.price}</p>
                <a href="${jewelleryItem.link}" class="btn">View Details</a>
            </div>
        `;
        jewelleryGrid.innerHTML += jewelleryHTML;
    });
}

// Call the function to load the jewellery
loadJewellery();