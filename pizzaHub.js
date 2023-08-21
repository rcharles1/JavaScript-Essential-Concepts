// Robin, a small boy, wished to have pizza in his breakfast this morning. 
// Listening to his wish, Robin's mother orders a slice of pizza using the PizzaHub app. The PizzaHub app is an aggregator of many pizza shops.
// First, it finds out the pizza shop nearest to Robin's house. Then, check if the selected pizza is available in the shop. Once that is confirmed, 
// it finds a complimentary beverage(cola in this case). Then, it creates the order and finally delivers it to Robin.
// If the selected pizza is unavailable or has a payment failure, PizzaHub should reject the order. 
// Also, note that PizzaHub should inform Robin and his mother of successful order placement or a rejection.

//APIs
// /api/pizzahub/shop => Fetch the nearby pizza shop
// /api/pizzahub/pizza => Fetch available pizzas in the shop
// /api/pizzahub/beverages => Fetch the complimentary beverage with the selected pizza
// /api/pizzahub/order => Create the order

// Locate nearby Pizza shop
const fetchNearByShop = ({longi, lat}) => {
console.log(`🧭 Locating the nearby shop at (${longi} ${lat})`);
return new Promise((resolve, reject) => {
    setTimeout(function () {
        //  resolve the shop id.
        const response = {
        shopId: "s-123",
        };
        resolve(response.shopId);
    }, 1000);
    });
}

// Fetch pizzas in the shop
const fetchAvailablePizzas = ({shopId}) => {
console.log(`Getting Pizza List from the shop ${shopId}...`);
return new Promise((resolve, reject) => {
    setTimeout(function () {
        const response = {
        // The list of pizzas 
        // available at the shop
        pizzas: [
            {
            type: "veg",
            name: "margarita",
            id: "pv-123",
            },
            {
            type: "nonveg",
            name: "pepperoni slice",
            id: "pnv-124",
            },
        ],
        };
        resolve(response);
    }, 1000);
    });
}

// Check the Availability of selected pizza
let getMyPizza = (result, type, name) => {
let pizzas = result.pizzas;
console.log("Got the Pizza List", pizzas);
let myPizza = pizzas.find((pizza) => {
    return (pizza.type === type && pizza.name === name);
});
return new Promise((resolve, reject) => {
    if (myPizza) {
    console.log(`✔️ Found the Customer Pizza ${myPizza.name}!`);
    resolve(myPizza);
    } else {
    reject(
        new Error(
        `❌ Sorry, we don't have ${type} ${name} pizza. Do you want anything else?`
        )
    );
    }
});
};

// Fetching complimentary beverage
const fetchBeverages = ({pizzaId}) => {
console.log(`🧃 Getting Beverages for the pizza ${pizzaId}...`);
return new Promise((resolve, reject) => {
    setTimeout(function () {
        const response = {
        id: "b-10",
        name: "cola",
        };
        resolve(response);
    }, 1000);
    });
}

// Creating entire order
let create = (endpoint, payload) => {
if (endpoint.includes(`/api/pizzahub/order`)) {
    console.log("Placing the pizza order with...", payload);
    const { type, name, beverage } = payload;
    return new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve({
        success: true,
        message: `🍕 The ${type} ${name} pizza order with ${beverage} has been placed successfully.`,
        });
    }, 1000);
    });
}
};

// Combine all fetches
function fetch(endpoint, payload) {
if (endpoint.includes("/api/pizzahub/shop")) {
    return fetchNearByShop(payload);
} else if (endpoint.includes("/api/pizzahub/pizza")) {
    return fetchAvailablePizzas(payload);
} else if (endpoint.includes("/api/pizzahub/beverages")) {
    return fetchBeverages(payload);
}
}

//uses .then handle promises
function orderPizza(type, name) {
// Get the Nearby Pizza Shop
fetch("/api/pizzahub/shop", {'longi': 38.8951 , 'lat': -77.0364})
    // Get all pizzas from the shop  
    .then((shopId) => fetch("/api/pizzahub/pizza", {'shopId': shopId}))
    // Check the availability of the selected pizza
    .then((allPizzas) => getMyPizza(allPizzas, type, name))
    // Check the availability of the selected beverage
    .then((pizza) => fetch("/api/pizzahub/beverages", {'pizzaId': pizza.id}))
    // Create the order
    .then((beverage) =>
    create("/api/pizzahub/order", {
        beverage: beverage.name,
        name: name,
        type: type,
    })
    )
    .then((result) => console.log(result.message))
    .catch(function (error) {
    console.error(`${error.message}`);
    });
}

// Order Pizza
orderPizza("nonveg", "pepperoni");