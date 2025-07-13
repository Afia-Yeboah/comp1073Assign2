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
        let smoothieOrder = `Hey ${this.customerName}!, you selected a ${this.size} smoothie with ${this.base}`;
        if(this.fruits.length) {
            smoothieOrder +=` and ${this.fruits.join(', ')}`;
        } 
        if(this.extras.length) {
            smoothieOrder +=` plus ${this.extras.join(', ')}`;
        } 
        return smoothieOrder + '.';
    };
};

    // Grab the form element and output the paragraph from the page
    const form = document.getElementById("smoothieForm");
    const output = document.getElementById("orderOutput");

    // Using an event listener to listen for form submission
    form.addEventListener("submit", function(event){
        // prevent the page from reloading when customer submits form
        event.preventDefault();

        // Inputting Validation eg. ensure customer name is not empty

        // read the customer's selection
        const customerName = document.getElementById("customerName").value;

        // read the size that is selected by customer
        const sizeInputs = document.getElementsByName("size");
        let size = '';
        for (let i = 0; i < sizeInputs.length; i++) {
            if (sizeInputs[i].checked) {
                size = sizeInputs[i].value;
                break;
            };
        };

        // reading the smoothie base choice selected
        const base = document.getElementById("base").value;

        // collect any of the fruits selected
        const fruits = [];
        const fruitInputs = document.getElementsByName("fruit");
        for (let i = 0; i <fruitInputs.length; i++) {
            if (fruitInputs[i].checked) {
                // adding that to the end of the fruits array
                fruits[fruits.length] = fruitInputs[i].value;
            };
        };

        // store the checked extras
        const extras = [];
        const extraInputs = document.getElementsByName("extras");
        for (let i = 0; i < extraInputs.length; i++) {
            if (extraInputs[i].checked) {
                extras[extras.length] = extraInputs[i].value;
            };
        };

        // Instantiate the order
        const smoothieOrder = new Smoothie({customerName, size, base, fruits, extras});
        
        //render unto page
        output.textContent = smoothieOrder.describe();
    });
