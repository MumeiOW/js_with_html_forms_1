// Get the checkbox element
const checkbox = document.getElementById('checkbox');

// Getting the tables section
const tablesSection = document.querySelector('.tablesSection');

// Array for storing inventory items
const inventoryItems = [];

// Function for checking if an item exists already
function checkIfExists(item, inventoryItems) {
    return inventoryItems.includes(item);
}

// Function for adding new item in the inventory
inputForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Getting the item from the input field
    const item = document.getElementById('item').value;

    // Getting the quantity from the input field
    const quantity = document.getElementById('quantity').value;

    // Check if input fields are empty
    if (item.length === 0 || quantity.length === 0) {
        alert("Fill out the form first");
        return; // Exit the function
    }

    // Check if item already exists
    if (checkIfExists(item, inventoryItems)) {
        alert('Item already taken');
        return; // Exit the function
    }

    // Push to the inventoryItems list
    inventoryItems.push(item);

    // Create the table row element for storing items
    const trElement = document.createElement('tr');

    // Create table data for storing item name
    const tdElementForItemName = document.createElement('td');

    // Create table data for storing quantity
    const tdElementForQty = document.createElement('td');

    // Setting the text content of the item name and quantity
    tdElementForItemName.textContent = item;
    tdElementForQty.textContent = quantity;

    // Adding event listener to the quantity cell to enable modification
    tdElementForQty.addEventListener('click', function () {
        const newQuantity = prompt('Enter new quantity:', quantity);
        if (newQuantity !== null) {
            tdElementForQty.textContent = newQuantity;
        }
    });

    // Adding table data elements to the table row
    trElement.appendChild(tdElementForItemName);
    trElement.appendChild(tdElementForQty);

    // Adding table row element to the table
    document.querySelector('table').appendChild(trElement);
});

// Checkbox change event listener
checkbox.addEventListener('change', function (e) {
    e.preventDefault();
    if (checkbox.checked) {
        tablesSection.style.display = "block";
    } else {
        tablesSection.style.display = "none";
    }
});