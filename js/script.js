// Grab the form element and output, and reset button from the page
    const form = document.getElementById("smoothieForm");
    const output = document.getElementById("orderOutput");
    const resetBtn = document.getElementById("resetBtn");

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
}
    // Using an event listener to listen for form submission
    form.addEventListener("submit", function(event){
        // prevent the page from reloading when customer submits form
        event.preventDefault();


        // read the customer's selection
        const customerName = document.getElementById("customerName").value;

        // Inputting Validation with conditionals eg. ensure customer name is not empty
        if (customerName.length < 2) {
            alert ("Please enter your real name");
            return;
        }

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

        // Validate the smoothie base selection
        if (!base) {
            alert("Please select a base for your smoothie");
            return;
        };

        // collect any of the fruits selected
        const fruits = [];
        const fruitInputs = document.getElementsByName("fruit");
        for (let i = 0; i < fruitInputs.length; i++) {
            if (fruitInputs[i].checked) {
                // adding that to the end of the fruits array
                fruits[fruits.length] = fruitInputs[i].value;
            };
        }
        
        // Select a max of 3 fruits
        if (fruits.length !== 3) {
            alert ("Please pick up to 3 fruits!");
            return;
        }
                
        // store the checked extras
        const extras = [];
        const extraInputs = document.getElementsByName("extras");
        for (let i = 0; i < extraInputs.length; i++) {
            if (extraInputs[i].checked) {
                extras[extras.length] = extraInputs[i].value;
            };
        };

        // Confirm to client with a prompt if they don't select an extra option
        if (extras.length === 0) {
            // prompt, client can still proceed without adding any extra
            const ok = confirm(`No extras were chosen- do you want to proceed without?`);
            if (!ok) return;
        }

        // Instantiate the order
        const smoothieOrder = new Smoothie({customerName, size, base, fruits, extras});
        
        //render unto page
        output.textContent = smoothieOrder.describe();
    });
