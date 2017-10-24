
//view button onclick toggler
$(document).ready(function(){
  $(".viewButton").click(function(){
    $(this).siblings(".challenge").slideToggle();
    if($(this).text() == "View"){
      $(this).text("Hide");
    }else {
      $(this).text("View");
    }
  });
})




function challenge1(){
  var userString = $("#challenge1InputTarget").val(); // take user input
  var matches = true; // instantiate matches to true so loop will run

  while (matches){ // while matches is true
    matches = false; // incase if statement doesnt run, break out of loop
    for (i=0; i < userString.length; i++){ //loop through user inputted string
      if (userString[i] == userString[i+1]){ // compare 1st character with 2nd
        matches = true; // continue loop
        userArray = userString.split(""); // string -> array
        userArray.splice(i, 2); // remove 2 characters from array starting at i
        userString = userArray.join(""); // array -> string
      }
    }
  }

  if (userString == ""){ // check if string is empty
    // console.log("Empty String");
    $("#challenge1OutputTarget").text("Empty String");
  }else{
    // console.log(`Shortened string: ${userString}`);
    $("#challenge1OutputTarget").text(`Shortened string: ${userString}`);
  }
}

// challenge1();

function challenge2(){
  var initArray = $("#challenge2InputTarget").val();
  initArray.trim(" "); //remove spaces
  initArray = initArray.split(","); //seperate by comma

  var posArray = [];
  var negArray = [];
  var zerArray = [];

  for (var i = 0; i < initArray.length; i++){
    if(initArray[i] > 0){ //if positive
      posArray.push(initArray[i]);
    }else if(initArray[i] < 0){ //if negative
      negArray.push(initArray[i]);
    }else { //if zero
      zerArray.push(initArray[i]);
    }
  }
  //fractions
  $("#challenge2OutputTarget").text((posArray.length / initArray.length) + " positive. "
  + (negArray.length / initArray.length) + " negative. "
  + (zerArray.length / initArray.length) + " zero.");
}

// challenge2();

function challenge3(){
  var today = new Date();
  //toLocaleDateString formats date
  $("#challenge3OutputTarget").text(today.toLocaleDateString());
}

function changeDay(change){
  //create date object from text of output, parse into unix
  var date = new Date(Date.parse($("#challenge3OutputTarget").text()));
  //modify day
  date.setDate(date.getDate() + change);
  //toLocaleDateString formats date
  $("#challenge3OutputTarget").text(date.toLocaleDateString());
}

// challenge3();

function challenge4(){
  var a = parseInt($("#challenge4InputTarget1").val());
  var b = parseInt($("#challenge4InputTarget2").val());
  var c = parseInt($("#challenge4InputTarget3").val());

  //create array to check for invalid answers
  var checkArray = [a, b, c];
  //put smallest numbers first
  checkArray.sort();

  //if the sum of the 2 shorter sides is less than or equal to the longest side, invalid
  if((checkArray[0] + checkArray[1]) <= checkArray[2]){
    $("#challenge4OutputTarget").text("Invalid Triangle.");
  }else {
    var p = (a + b + c) / 2;
    res = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    $("#challenge4OutputTarget").text(Math.round(res));
  }


}

// challenge4();

function challenge6(){
  var a = $("#challenge6InputTarget1").val();
  var b = $("#challenge6InputTarget2").val();

  var aResult = (a > 0) ? a + " is positive" : (a < 0) ? a + " is negative." : a + " is zero";
  // line above is the same as code below
  // if(a > 0){
  //   console.log(a + " is positive.");
  // }else if(a < 0){
  //   console.log(a + " is negative.");
  // }else{
  //   console.log(a + " is zero.");
  // }

  var bResult = (b > 0) ? b + " is positive" : (b < 0) ? b + " is negative." : b + " is zero";

  $("#challenge6OutputTarget1").text(aResult);
  $("#challenge6OutputTarget2").text(bResult);
}

// challenge6();

function challenge7(){
  var initString = $("#challenge7InputTarget1").val();
  var removeIndex = $("#challenge7InputTarget2").val();

  var stringArray = initString.split("");
  stringArray.splice(removeIndex, 1);
  var newString = stringArray.join("");

  $("#challenge7OutputTarget").text(newString);
}

// challenge7();

function challenge8(){
  //50 - 99 inclusive
  var int1 = $("#challenge8InputTarget1").val();
  var int2 = $("#challenge8InputTarget2").val();
  var int3 = $("#challenge8InputTarget3").val();

  if(int1 >= 50 && int1 <= 99){
    // console.log(int1 + " is true.");
    $("#challenge8OutputTarget1").text(int1 + " is true.")
  }else {
    // console.log(int1 + " is false.");
    $("#challenge8OutputTarget1").text(int1 + " is false.")
  }

  if(int2 >= 50 && int2 <= 99){
    // console.log(int2 + " is true.");
    $("#challenge8OutputTarget2").text(int2 + " is true.")
  }else {
    // console.log(int2 + " is false.");
    $("#challenge8OutputTarget2").text(int2 + " is false.")
  }

  if(int3 >= 50 && int3 <= 99){
    // console.log(int3 + " is true.");
    $("#challenge8OutputTarget3").text(int3 + " is true.")
  }else {
    // console.log(int3 + " is false.");
    $("#challenge8OutputTarget3").text(int3 + " is false.")
  }
}

// challenge8();

const inventors = [
{ first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
{ first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
{ first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
{ first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
{ first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
{ first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
{ first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
{ first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
{ first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
{ first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
{ first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
{ first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];
const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel',
'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig',
'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert',
'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony',
'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd',
'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton',
'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi',
'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin',
'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve',
'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk',
'Blair, Robert', 'Blair, Tony', 'Blake, William'];

// 1. Filter the list of inventors for those who were born in the 1500's
function dataChallenge1(){
  var inventors1500 = [];
  var displayText = "";

  for(var i = 0; i < inventors.length; i++){
    if(inventors[i].year >= 1500 && inventors[i].year <= 1599){
      inventors1500.push(inventors[i]);
    }
  }

  for(var i = 0; i < inventors1500.length; i++){
    displayText += (inventors1500[i].first + " " + inventors1500[i].last + " ");
  }

  $("#dataChallenge1OutputTarget").text(displayText);
}

// dataChallenge1();

// 2. Give us an array of the inventors' first and last names
function dataChallenge2(){
  var inventorNames = [];

  for(var i = 0; i < inventors.length; i++){
    inventorNames.push(" " + inventors[i].first + " " + inventors[i].last);
  }
  $("#dataChallenge2OutputTarget").text(inventorNames);
}

// dataChallenge2();

// 3. Sort the inventors by birthdate, oldest to youngest
function sortYearFunction(a, b){
  if(a.year > b.year){
    return 1;
  }else{
    return -1;
  }
}

function dataChallenge3(){
  //sort array using sortFunction method
  inventors.sort(sortYearFunction);
  var displayText = "";

  for(var i = 0; i < inventors.length; i++){
    displayText += (inventors[i].first + " " + inventors[i].last + " " + inventors[i].year + " ");
  }

  $("#dataChallenge3OutputTarget").text(displayText);
}

// dataChallenge3();

// 4. How many years did all the inventors live?
function dataChallenge4(){
  var inventorSum = 0;
  var inventorAges = [];

  for(var i = 0; i < inventors.length; i++){
    inventorAges.push(inventors[i].passed - inventors[i].year);
  }

  for(var i = 0; i < inventorAges.length; i++){
    inventorSum += inventorAges[i];
  }

  $("#dataChallenge4OutputTarget").text(inventorSum + " years combined.");
}

// dataChallenge4();

// 5. Sort the inventors by years lived
function sortAgeFunction(a, b){
  if((a.passed - a.year) > (b.passed - b.year)){
    return 1;
  }else {
    return -1;
  }
}

function dataChallenge5(){
  inventors.sort(sortAgeFunction);
  var displayText = "";

  for(var i = 0; i < inventors.length; i++){
    displayText += (inventors[i].first + " " + inventors[i].last + " lived " + (inventors[i].passed - inventors[i].year) + " years. ");
  }

  // console.log(inventors);
  $("#dataChallenge5OutputTarget").text(displayText);
}

// dataChallenge5();

function sortLastName(a, b){
  a = a.split(",");
  b = b.split(",");
  if(a[0] > b[0]){
    return 1;
  }else{
    return -1;
  }
}

// 6. Sort the people alphabetically by last name
function dataChallenge6(){
  // var sortedPeople = [];

  people.sort(sortLastName);
  var displayText = "";

  for(var i = 0; i < people.length; i++){
    // console.log(people[i]);
    displayText += (people[i] + " ");
  }

  $("#dataChallenge6OutputTarget").text(displayText);
  // console.log(displayText);
}

// dataChallenge6();

// 7. Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk',
'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck',
'pogostick'];

function dataChallenge7(){
  //empty object to populate
  var instances = {};
  //loop through data
  for(var i = 0; i < data.length; i++){
    if(instances[data[i]]){ //if key exists,
      instances[data[i]]++; //increment by 1
    } else { //else, create key and set value to 1
      instances[data[i]] = 1;
    }
  }

  displayText = "";
  displayText += "car: " + instances.car + " ";
  displayText += "truck: " + instances.truck + " ";
  displayText += "bike: " + instances.bike + " ";
  displayText += "walk: " + instances.walk + " ";
  displayText += "van: " + instances.van + " ";
  displayText += "pogostick: " + instances.pogostick + " ";

  $("#dataChallenge7OutputTarget").text(displayText);
  // console.log(instances);

}

// dataChallenge7();
