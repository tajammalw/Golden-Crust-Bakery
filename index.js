//Creating the eCommerce Store Variables.
// Store Name
const storeName = "Golden-Crust-Bakery";

// Store Type
const storeType = "Bakery";

//Reusable logging function
const logMessage = (message) => {
    console.log(`${message}`);
};


// Function to display store information
const displayStoreInfo = (name, type) => {
    logMessage(`\nWelcome to ${name}! We are the best ${type} in town.`);
};

// Store Location
const storeLocation = "2115 Wonderland Street, Dream Blvd, Phoenix AZ 34576";

// Function to display store location
const displayLocation = (storeLocation) => {
    logMessage(`\nWe are located at: ${storeLocation}`);
};

// Store Hours
const storeHours = "Monday - Friday: 9 AM - 6 PM, Saturday: 10 AM - 4 PM, Sunday: Closed";

// Product we offer:
const productCategory1 = "Breads";
const breads = ["Artisan Loaves", "Baguettes", "Ciabatta", "Focaccia", "Bagels"];
const breadsPrices = ["$5.00", "$3.00", "$4.00", "$4.50", "$1.50"];

const productCategory2 = "Pastries";
const pastries = ["Croissants", "Danishes", "Scones", "Cinnamon Rolls", "Turnovers"];
const pastriesPrices = ["$3.00", "$3.50", "$2.75", "$3.25", "$3.00"];

const productCategory3 = "Cakes & Cupcakes";
const cakesCupcakes = ["Classic Cakes", "Cupcakes", "Cheesecakes"];
const cakesCupcakesPrices = ["$25.00", "$2.50", "$30.00"];

const productCategory4 = "Cookies";
const cookies = ["Chocolate Chip Cookies", "Oatmeal Raisin Cookies", "Sugar Cookies", "Macarons", "Shortbread"];
const cookiesPrices = ["$1.50", "$1.50", "$1.50", "$1.50", "$2.00"];

const productCategory5 = "Savory Items";
const savoryItems = ["Quiches", "Savory Scones", "Puff Pastry Bites", "Sandwiches"];
const savoryItemsPrices = ["$4.00", "$2.75", "$3.50", "$7.00"];

const productCategory6 = "Pies & Tarts";
const piesTarts = ["Fruit Pies", "Cream Pies", "Tarts"];
const piesTartsPrices = ["$15.00", "$16.00", "$14.00"];

const productCategory7 = "Speciality Items";
const specialityItems = ["Eclairs", "Muffins", "Brioche", "Gluten-Free or Vegan Options"];
const specialityItemsPrices = ["$3.00", "$2.75", "$3.25", "$5.00"];

const productCategory8 = "Beverages";
const beverages = ["Coffee & Espresso", "Tea", "Hot Chocolate"];
const beveragesPrices = ["$3.00", "$2.50", "$3.00"];

// Function to display productCategory1
const displayBreadsAndPrices = (breads, prices) => {
    
    breads.forEach((bread, index) => {
        logMessage(`${bread}: ${prices[index]}`);
    });
};

// Function to display productCategory2
const displayPastriesAndPrices = (pastries, prices) => {
    pastries.forEach((pastry, index) => {
        logMessage(`${pastry}: ${prices[index]}`);
    });
}

// Function to display productCategory3
const displayCakesCupcakesAndPrices = (cakesCupcakes, prices) => {
    cakesCupcakes.forEach((cake, index) => {
        logMessage(`${cake}: ${prices[index]}`);
    });
}

//Function to display productCategory4
const displayCookiesAndPrices = (cookies, prices) => {
    cookies.forEach((cookie, index) => {
        logMessage(`${cookie}: ${prices[index]}`);
    });
};

//Function to display productCategory5
const displaySavoryItemsAndPrices = (savoryItems, prices) => {
    savoryItems.forEach((item, index) => {
        logMessage(`${item}: ${prices[index]}`);
    });
};

//Function to display productCategory6
const displayPiesTartsAndPrices = (piesTarts, prices) => {
    piesTarts.forEach((pie, index) => {
        logMessage(`${pie}: ${prices[index]}`);
    });
};

//Function to display productCategory7
const displaySpecialityItemsAndPrices = (specialityItems, prices) => {
    specialityItems.forEach((item, index) => {
        logMessage(`${item}: ${prices[index]}`);
    });
};

//Function to display productCategory8
const displayBeveragesAndPrices = (beverages, prices) => {
    beverages.forEach((beverage, index) => {
        logMessage(`${beverage}: ${prices[index]}`);
    });
};

// Function to add new products
const addProductCategory1 = (breads, prices, newBread, newPrice) => {
    breads.push(newBread);        
    breadsPrices.push(newPrice);  
    logMessage(`We've added a new product! ${newBread} for ${newPrice}`);    
    displayBreadsAndPrices(breads, breadsPrices); 
};

const addProductCategory4 = (cookies, cookiesPrices, newCookie, newPrice) => {
    cookies.push(newCookie);        
    cookiesPrices.push(newPrice);  
    logMessage(`We've added a new product! ${newCookie} for ${newPrice}`);    
    displayCookiesAndPrices(cookies, cookiesPrices); 
}

// Function to remove the last product
const removeProductCategory3 = (cakesCupcakes, prices) => {
    const removedCake = cakesCupcakes.pop();
    const removedPrice = prices.pop();
    logMessage(`Unfortunately, ${removedCake} is out of stock.`);
    displayCakesCupcakesAndPrices(cakesCupcakes, prices);
};

// Display featured products (sorted alphabetically)
const displayFeaturedProducts = (specialityItems, numberOfSpecialityItems) => {
    // Sort alphabetically
    const sortedProducts = specialityItems.sort();
    const featuredProducts = [];

    // Log each item
    sortedProducts.forEach((specialityItem, index) => {
        if (index < numberOfSpecialityItems) {
            featuredProducts.push(specialityItem);
        }
      });
    logMessage(`\nThis week, our featured products are:`);
    featuredProducts.forEach((specialityItem) => logMessage(specialityItem));
};

//Sort products and prices by price (low to high)
const sortInventoryByPrice = (savoryItems, prices) => {
    // Generate an array of [item, price] pairs and sort by numerical price
    const sortedItems = savoryItems
        .map((item, i) => [item, parseFloat(prices[i].replace("$", ""))]) // Convert prices to numbers
        .sort((a, b) => a[1] - b[1]); // Sort by price

    // Log sorted products
    logMessage(`\nProducts sorted by price (low to high):`);
    sortedItems.forEach(([item, price]) => {
        logMessage(`${item}: ${price.toFixed(2)}`); // Display price as a formatted string
    });
};

//Calling the functions:

//Call the displayStoreInfo() function to show the store's name and type.
displayStoreInfo(storeName, storeType);

// Show the current products and their prices in the store.
logMessage(`\nHere are the products we currently offer:`);
logMessage(`\n${productCategory1}:`);
// Display productCategory1(Breads)
displayBreadsAndPrices(breads, breadsPrices);

// Display productCategory2(pastries)
console.log(`\n${productCategory2}:`);
displayPastriesAndPrices(pastries, pastriesPrices);

// Display productCategory3(CakesCupcakes)
console.log(`\n${productCategory3}:`);
displayCakesCupcakesAndPrices(cakesCupcakes, cakesCupcakesPrices);

//Display productCategory4(Cookies)
console.log(`\n${productCategory4}:`);
displayCookiesAndPrices(cookies, cookiesPrices);

//Display productCategory5(SavoryItems)
console.log(`\n${productCategory5}:`);
displaySavoryItemsAndPrices(savoryItems, savoryItemsPrices);

//Display productCategory6(PiesTarts)
console.log(`\n${productCategory6}:`);
displayPiesTartsAndPrices(piesTarts, piesTartsPrices);

//Display productCategory7(SpecialityItems)
console.log(`\n${productCategory7}:`);
displaySpecialityItemsAndPrices(specialityItems, specialityItemsPrices);

//Display productCategory8(Beverages)
console.log(`\n${productCategory8}:`);
displayBeveragesAndPrices(beverages, beveragesPrices);

// Call the addProduct() function to add a new product and display the updated productCategory1(Breads):
console.log(`\nBreads`);
addProductCategory1(breads, breadsPrices, "Garlic Herb Bread", "$5.75");  

// Call the addProduct() function to add a new product and display the updated productCategory4(Cookies):
console.log(`\nCookies`);
addProductCategory4(cookies, cookiesPrices, "Lemon Shortbread", "$2.50");

// Call the removeLastProduct() function to remove the last product and display the updated productCategory3(CakesCupcakes):
console.log(`\nCakes & Cupcakes`);
removeProductCategory3(cakesCupcakes, cakesCupcakesPrices);

//Call the displayFeaturedProducts() function to show a selection of featured products.
displayFeaturedProducts(specialityItems, 2);

//Call the sortInventoryByPrice() function to sort the products and prices in ascending order and display them.
sortInventoryByPrice(savoryItems, savoryItemsPrices);

//Display store location:
displayLocation(`\n${storeLocation}`);

//Use logMessage() to print a closing message thanking visitors and displaying the store hours.
logMessage(`\nThanks for visiting ${storeName}`);
logMessage(`\nHere are our store hours for reference: ${storeHours}`);
