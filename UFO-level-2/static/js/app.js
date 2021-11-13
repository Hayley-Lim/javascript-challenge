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

// Getting a reference to the button(Filter Table) on the page with the id property set to `filter-btn`
var button = d3.select("#filter-btn");
// Getting a reference to the user input field("Enter a Date") on the page with the id property set to `datetime`
var inputdate = d3.select("#datetime");
// Getting a reference to the user input field("Enter a City") on the page with the id property set to `city`
var inputcity = d3.select("#city");
// Getting a reference to the user input field("Enter a State") on the page with the id property set to `state`
var inputstate = d3.select("#state");
// Getting a reference to the user input field("Enter a Country") on the page with the id property set to `country`
var inputcountry = d3.select("#country");
// Getting a reference to the user input field("Enter a Shape") on the page with the id property set to `shape`
var inputshape = d3.select("#shape");

// Create an eventlistener to filter the table.
function runEnter() {

    //print "filter button clicked" on the console when "Filter Table" button is clicked
    console.log("filter button clicked");

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Read the values from user input fields
    var date = inputdate.property('value');
    var city = inputcity.property('value');
    var state = inputstate.property('value');
    var country = inputcountry.property('value');
    var shape = inputshape.property('value');

    //console.log(date);

    var inputarray = [date, city, state, country, shape]
    var idarray = ["datetime", "city", "state", "country", "shape"]

    //iterates through each values user has input
    for (var i=0; i<5; i++) {

      console.log(inputarray[i])
      
      //date field
      if (i == 0) {
        //when user has input the value at date field, return all data that matches with the date value
        if (!(inputarray[i].length == 0)) {
          console.log("${idarray[i]} is not empty")
          var filteredInput = tableData.filter(item => item[idarray[i]] == inputarray[i]);
        }
        //if the date field is left blank, return all data from dataset
        else {
          console.log("${idarray[i]} is empty")
          var filteredInput = tableData;
        }
        console.log(filteredInput)
      }
      
      //other fields except date field 
      else {
          //if the user has input a value, return the data that matches with the all the input values
        if (!(inputarray[i].length == 0)) {
          console.log("${idarray[i]} is not empty")
          var filteredInput = filteredInput.filter(item => item[idarray[i]] == inputarray[i]);
        }
        //if other fields are left blank, return the data filtered as above
        else {
          console.log("${idarray[i]} is empty")
          var filteredInput = filteredInput;
        }
        console.log(filteredInput)
      }
    } 

    //Clear out existing table
    tbody.html("");

    //Display Data
    filteredInput.forEach(item => {
        var row = tbody.append("tr");
        Object.entries(item).forEach(function([key, value]) {
            var cell = row.append("td");
            cell.text(value);
        })
    })
};

// Create event handlers for clicking the "Filter Table" button
button.on("click", runEnter);