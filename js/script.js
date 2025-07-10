/* Defining the Smoothie class for the order and creating the following
constructor that takes the details of the customer Order */
class Smoothie {
    constructor({customerName, size, base, fruits, extras}) {
        this.customerName = customerName;
        this.size - size;
        this.base = base;
        this.fruits = fruits;
        this.extras = extras;
    };

    // Using the describe function to describe what the order is
    describe() {
        let smoothieOrder = `${this.customerName}, your selction of ${this.size} smoothie with ${this.base}`;
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

        // read the customer's selection
        const customerName = document.getElementById("customerName").value;

        // check and read the size selected by customer
        const size = form.querySelector(`input[name="size"]:checked`).value;
    });
