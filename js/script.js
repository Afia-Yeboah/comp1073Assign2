// Grab the form element and output, and reset button from the page
    const form = document.getElementById("smoothieForm");
    const output = document.getElementById("orderOutput");
    const resetBtn = document.getElementById("resetBtn");

// Adding prices and smoothie costs
const basePrice = {
    "Almond Milk": 0.50,
    "Rice Milk": 0.50,
    "Yoghurt": 0.75,
    "Orange Juice": 0.25,
};

const fruitPrices = {
    Banana: 0.30,
    Strawberry: 0.40,
    Mango: 0.50,
    Blueberry: 0.45,
    Peach: 0.35,
    Raspberry: 0.40,
};

const extraPrices = {
    "Protein Powder": 1.00,
    "Honey": 0.25,
    "Chia Seeds": 0.30,
    "Avocado": 0.75,
    "Peanut Butter": 0.50,
};


/* Defining the Smoothie class for the order and creating the following
constructor that takes the details of the customer Order */
class Smoothie {
    constructor({customerName, size, base, fruits, extras}) {
        this.customerName = customerName;
        this.size = size;
        this.base = base;
        this.fruits = fruits;
        this.extras = extras;
    };

    // Using the describe function to describe what the order is
    describe() {
        let smoothieOrder = `Hey ${this.customerName}!, your ${this.size} smoothie with ${this.base}`;
        if(this.fruits.length > 0) smoothieOrder +=` and ${this.fruits.join(', ')}`;
        if(this.extras.length > 0) smoothieOrder +=` plus ${this.extras.join(', ')}`;
        return smoothieOrder + '.';
    };
};

// set reset function 
function reset() {
    output.textContent = "";
    output.style.color = "";
    document.getElementById("customerName").style.border = "";
    document.getElementById("base").style.border = "";
    document.getElementById("fruitsBox").style.border = "";
};

// Using an event listener to listen for form submission
form.addEventListener("submit", function(event) {
// prevent the page from reloading when customer submits form
    event.preventDefault();
    reset();

// read the customer's selection
const nameInfo = document.getElementById("customerName");
const customerName = nameInfo.value;
// Inputting Validation with conditionals - customer field not left empty
if (customerName.length < 2) {
    nameInfo.style.border = "2px solid red";
    output.textContent = "Please enter your name";
    output.style.color = "red";
    return;
}

// reading the smoothie base choice selected
const baseSelected = document.getElementById("base");
const base = baseSelected.value;

// Validate the smoothie base selection
if (!base) {
    baseSelected.style.border = "2px solid red";
    output.textContent = "Please choose a base for your smoothie";
    output.style.color = "red";
    return;
};

// Select 3 fruits
const fruits = [];
const fruitSelected = document.getElementsByName("fruit");
for (let i = 0; i < fruitSelected.length; i++) {
    if (fruitSelected[i].checked) {
        // adding that to the end of the fruits array
        fruits[fruits.length] = fruitSelected[i].value;
    };
};
if (fruits.length !== 3) {
    document.getElementById("fruitsBox").style.border = "2px solid red";
    output.textContent = "Please select only 3 fruits.";
    output.style.color = "red";
    return;
};

// read the size that is selected by customer
let size = "";
const sizeOrdered = document.getElementsByName("size");
for (let i = 0; i < sizeOrdered.length; i++) {
    if (sizeOrdered[i].checked) {
        size = sizeOrdered[i].value;
        break;
    };
};
        
// store the checked extras
const extras = [];
const extraInfo = document.getElementsByName("extras");
for (let i = 0; i < extraInfo.length; i++) {
    if (extraInfo[i].checked) {
        extras[extras.length] = extraInfo[i].value;
    };
};

// initialize the total
let total = 0;
total+= basePrices["base"] || 0;
for (let i = 0; i < fruits.length; i++) {
    total += fruitsPrices[fruits[i]] || 0;
};

// add extra cost
for (let i = 0; i < extras.length; i++) {
    total += extraPrices[extras[i]] || 0;
};

// Instantiate the order
const smoothieOrder = new Smoothie({customerName, size, base, fruits, extras});
//render unto page
output.textContent = smoothieOrder.describe();
output.style.color = "";
});

// function to handle the reset button
resetBtn.addEventListener("click", function() {
    reset(); 
    form.reset(); // reset all form fields
});

