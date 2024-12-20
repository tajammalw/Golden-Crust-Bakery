//Creating the eCommerce Store Variables:
// Store Name:
const storeName = "Golden-Crust-Bakery";

// Store Type:
const storeType = "Bakery";

//Reusable logging function:
const logMessage = (message) => {
    console.log(`${message}`);
};

// Function to display store information:
const displayStoreInfo = (name, type) => {
    logMessage(`\nWelcome to ${name}! We are the best ${type} in town.`);
};

// Store Location:
const storeLocation = "2115 Wonderland Street, Dream Blvd, Phoenix AZ 34576";

// Function to display store location:
const displayLocation = (storeLocation) => {
    logMessage(`\nWe are located at: ${storeLocation}`);
};

// Store Hours:
const storeHours = "Monday - Friday: 9 AM - 6 PM, Saturday: 10 AM - 4 PM, Sunday: Closed";

// Product list as individual objects in a flat array:
// Product we offer:
const products = [
    {
        category: "Breads",
        items: [
            { name: "Artisan Loaves", price: "$5.00", description: "Freshly baked loaves with a crispy crust and soft interior." },
            { name: "Baguettes", price: "$3.00", description: "Classic French bread with a golden crust and airy crumb." },
            { name: "Ciabatta", price: "$4.00", description: "Italian white bread known for its rustic texture and flavor." },
            { name: "Focaccia", price: "$4.50", description: "Flat Italian bread seasoned with olive oil, herbs, and sea salt." },
            { name: "Bagels", price: "$1.50", description: "Chewy, dense bread rings available in various flavors." },
        ],
    },
    {
        category: "Pastries",
        items: [
            { name: "Croissants", price: "$3.00", description: "Flaky and buttery French pastry, perfect for breakfast." },
            { name: "Danishes", price: "$3.50", description: "Sweet pastries filled with fruit, custard, or cream cheese." },
            { name: "Scones", price: "$2.75", description: "Buttery and crumbly treats, often paired with jam or cream." },
            { name: "Cinnamon Rolls", price: "$3.25", description: "Soft rolls swirled with cinnamon and topped with icing." },
            { name: "Turnovers", price: "$3.00", description: "Puff pastry pockets filled with sweet or savory fillings." },
        ],
    },
    {
        category: "Cakes & Cupcakes",
        items: [
            { name: "Classic Cakes", price: "$25.00", description: "Traditional cakes in a variety of flavors and designs." },
            { name: "Cupcakes", price: "$2.50", description: "Mini cakes topped with delicious frosting." },
            { name: "Cheesecakes", price: "$30.00", description: "Rich and creamy cakes with a graham cracker crust." },
        ],
    },
    {
        category: "Cookies",
        items: [
            { name: "Chocolate Chip Cookies", price: "$1.50", description: "Classic cookies loaded with chocolate chips." },
            { name: "Oatmeal Raisin Cookies", price: "$1.50", description: "Chewy cookies with oats and sweet raisins." },
            { name: "Sugar Cookies", price: "$1.50", description: "Soft, buttery cookies with a sugary glaze." },
            { name: "Macarons", price: "$1.50", description: "Delicate French cookies with a variety of fillings." },
            { name: "Shortbread", price: "$2.00", description: "Rich and crumbly cookies made with butter." },
        ],
    },
    {
        category: "Savory Items",
        items: [
            { name: "Quiches", price: "$4.00", description: "Savory pies with a creamy filling of eggs, cheese, and veggies." },
            { name: "Savory Scones", price: "$2.75", description: "Scones infused with herbs and cheese for a savory twist." },
            { name: "Puff Pastry Bites", price: "$3.50", description: "Bite-sized puff pastry snacks with savory fillings." },
            { name: "Sandwiches", price: "$7.00", description: "Freshly made sandwiches with a variety of fillings." },
        ],
    },
    {
        category: "Pies & Tarts",
        items: [
            { name: "Fruit Pies", price: "$15.00", description: "Pies filled with fresh, seasonal fruits." },
            { name: "Cream Pies", price: "$16.00", description: "Rich pies with a creamy custard filling." },
            { name: "Tarts", price: "$14.00", description: "Elegant pastries with a buttery crust and rich filling." },
        ],
    },
    {
        category: "Speciality Items",
        items: [
            { name: "Eclairs", price: "$3.00", description: "Choux pastry filled with cream and topped with chocolate." },
            { name: "Muffins", price: "$2.75", description: "Moist, fluffy muffins available in various flavors." },
            { name: "Brioche", price: "$3.25", description: "Rich and soft bread with a hint of sweetness." },
            { name: "Gluten-Free or Vegan Options", price: "$5.00", description: "Delicious baked goods for dietary preferences." },
        ],
    },
    {
        category: "Beverages",
        items: [
            { name: "Coffee & Espresso", price: "$3.00", description: "Freshly brewed coffee and rich espresso drinks." },
            { name: "Tea", price: "$2.50", description: "Selection of herbal, green, and black teas." },
            { name: "Hot Chocolate", price: "$3.00", description: "Rich and creamy chocolate drink." },
        ],
    },
];
// Function to display Products Categories, Items, and Prices:
const displayAllProducts = (products) => {
    logMessage(`\nHere are the products we currently offer:`);
    products.forEach(category => {
        logMessage(`\n${category.category}:`); // Log the category name
        category.items.forEach(item => {
            logMessage(`${item.name} - ${item.price}: ${item.description}`); // Log each item's details
        });
    });
};
// Function to add new items to a category:
const addNewProduct = (category, name, price, description) => {
    const newProduct = { name, price, description };
    const categoryIndex = products.findIndex(item => item.category === category);
    products[categoryIndex].items.push(newProduct);
    logMessage(`\nNew product added to ${category}: ${name} - ${price}`);
};

// Function to remove the last item from a category:
const removedLastItem = (products) => {
    // Find the "Pies & Tarts" category:
    const piesAndTartsCategory = products.find(category => category.category === "Pies & Tarts");
    const removedItem = piesAndTartsCategory.items.pop();
    logMessage(`\nUnfortunately, ${removedItem.name} is out of stock.`);
};

// Function to display featured products from a specific category sorted alphabetically:
const displayFeaturedProducts = (products, categoryName, numberOfItems) => {
    // Find the category matching the provided name
    const category = products.find(cat => cat.category === categoryName);
    // Extract and sort product names from the selected category
    const sortedProducts = category.items
        .map(item => item.name)
        .sort();
    // Display the top N featured products:
    logMessage(`\nThis week's featured products (${categoryName}):`);
    sortedProducts.slice(0, numberOfItems).forEach(item => logMessage(item));
};
// Function to sort products by price (low to high) for a specific category:
const sortProductsByPrice = (products, category) => {
    // Find the category in the products list
    const categoryData = products.find((cat) => cat.category === category);

    // Sort items in the category by numeric price:
    const sortedProducts = [...categoryData.items].sort((a, b) => {
        const priceA = parseFloat(a.price.replace("$", ""));
        const priceB = parseFloat(b.price.replace("$", ""));
        return priceA - priceB;
    });
    // Log sorted products
    logMessage(`\nProducts in category "${category}" sorted by price (low to high):`);
    sortedProducts.forEach((product) => {
        logMessage(`${product.name}: ${product.price} - ${product.description}`);
    });
};

// Calling the functions:
// Display store information
displayStoreInfo(storeName, storeType);

// Display store location
displayLocation(storeLocation);

// Display Products Categories, Items, and Prices:
displayAllProducts(products);

// Display the new items added to a category:
addNewProduct("Breads", "Garlic Herb Bread", "$5.75", "Freshly baked bread with a savory garlic and herb flavor.");

addNewProduct("Pastries", "Palmiers", "$2.00", "Crispy, caramelized puff pastry cookies.");

// Display the last item removed from a category:
removedLastItem(products);

// Display featured products (Top 3) in a category sorted alphabetically:
displayFeaturedProducts(products, "Speciality Items", 3);

// Display items sorted by price (low to high) in a category:
sortProductsByPrice(products, "Pastries");

//Use logMessage() to print a closing message thanking visitors and displaying the store hours.
logMessage(`\nThanks for visiting ${storeName}`);
logMessage(`\nHere are our store hours for reference: ${storeHours}`);





