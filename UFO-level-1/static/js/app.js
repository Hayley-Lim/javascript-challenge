// from data.js
var tableData = data;

// YOUR CODE HERE!

// Get a reference to the table body
var tbody = d3.select("tbody");

// Loop Through `tableData` and console.log each item
tableData.forEach(function(item) {
    console.log(item);
    //Use d3 to append one table row `tr` for each item
    var row = tbody.append("tr");

    //Use `Object.entries` to console.log each item's key and value
    Object.entries(item).forEach(function([key, value]) {
        console.log(key, value);

            // Append a cell to the row for each value in the object
            //Use d3 to update each cell's text with UFO sightings values (Date,City,State,Country,Shape,Duration,Comments)
             var cell = row.append("td");
             cell.text(value);
    });
});

// Getting a reference to the button('Filter Table') on the page with the id property set to `filter-btn`
var button = d3.select("#filter-btn");
var inputElement = d3.select("#datetime");

// Create an eventlistener to filter the table.
function runEnter() {

    //Clear out existing table
    tbody.html("");

    //print "filter button clicked" on console page when 'Filter Table" button is clicked
    console.log("filter button clicked");

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Read the value from date field input
    var inputValue = inputElement.property('value');

    //print the date value user has input
    console.log(inputValue);

    // Filter out anything not matching the filter
    var filteredInput = tableData.filter(item => item.datetime === inputValue);
    
    //Display Data
    filteredInput.forEach((item) => {
        var row = tbody.append("tr");
        Object.entries(item).forEach(function([key, value]) {
            var cell = row.append("td");
            cell.text(value);
        })
    })
};

// Create event handlers for clicking the 'Filter Table' button
button.on("click", runEnter);