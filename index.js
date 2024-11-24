//Creating the eCommerce Store Variables.
// Store Name
const storeName = "Golden-Crust-Bakery";

// Store Type
const storeType = "Bakery";

// Displaying the Store Name and Store Type
console.log(`\nThe store name is ${storeName}.`);

console.log(`\nThe store type is ${storeType}.`);

// Store Location
const storeLocation = "2115 Wonderland Street, Dream Blvd, Phoenix AZ 34576";

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
