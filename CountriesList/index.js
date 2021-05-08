let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"];

const countriesList = document.getElementById("countries-list");
/* Use a for loop to log the following to the console:

The 5 largest countries in the world:
- China
- India
- United States
- Indinesia
- Pakistan
*/

let makeList = (arr, list) => {
  for (let i = 0; i < arr.length; i++) {
    var x = document.createElement("li"); // Create a <li> node
    var t = document.createTextNode(arr[i]); // Create a text node
    x.appendChild(t); // Append the text to <li>
    document.body.appendChild(x);
  }
};
makeList(largeCountries, countriesList);
