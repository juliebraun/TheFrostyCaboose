  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBsJ3o2m712AKXOgtqkT7hZMP7ArDsyUyk",
    authDomain: "the-frosty-caboose.firebaseapp.com",
    databaseURL: "https://the-frosty-caboose.firebaseio.com",
    projectId: "the-frosty-caboose",
    storageBucket: "",
    messagingSenderId: "1019847729314"
  };
  firebase.initializeApp(config);

var database = firebase.database();
// 2. Button for adding Employees
$("#add-train-btn").on("click", function(event) {
  event.preventDefault();
  // Grabs user input
  var trainName = $("#train-name-input").val().trim();
  var destination = $("#destination-input").val().trim();
  var firstTrainTime =$("#first-train-input").val().trim();
  var frequency = $("#frequency-input").val().trim();
  // Creates local "temporary" object for holding train data
  var newTrain = {
    trainName: trainName,
    destination: destination,
    firstTrainTime: firstTrainTime,
    frequency: frequency
  };
  // Uploads employee data to the database
  database.ref().push(newTrain);
  // Logs everything to console
  // console.log(newTrain.trainName);
  // console.log(newTrain.destination);
  // console.log(newTrain.firstTrainTime);
  // console.log(newTrain.frequency);
  // Alert
  alert("Train successfully added");
  // Clears all of the text-boxes
  $("#train-name-input").val("");
  $("#destination-input").val("");
  $("#first-train-input").val("");
  $("#frequency-input").val("");
});
// 3. Create Firebase event for adding employee to the database and a row in the html when a user adds an entry
database.ref().on("child_added", function(childSnapshot, prevChildKey) {
  // console.log(childSnapshot.val());
  // Store everything into a variable.
  var trainName = childSnapshot.val().trainName;
  var destination = childSnapshot.val().destination;
  var firstTrainTime = childSnapshot.val().firstTrainTime;
  var frequency = childSnapshot.val().frequency;
  // Employee Info
  console.log(trainName);
  console.log(destination);
  console.log(firstTrainTime);
  console.log(frequency);
  // Prettify the employee start
  // var trainStartMilitary = moment(firstTrainTime).format("HH:mm");
  // Calculate the months worked using hardcore math
  // To calculate the months worked
  // var nextArrival (time) = currenttime - frequency
  // var minutesAway (minutes) = currentTime - frequency
  // var minutesAway = moment().subtract(frequency, 'minutes');  

var start = moment();
var end   = moment(frequency);
console.log(end);
// var minutesArray = end.from(start, true); 
// console.log(minutesAway);
// var a = moment();
// var b = moment().add(1, 'seconds');
// a.diff(b) // -1000
// b.diff(a) // 1000
// "5 days"
  // var empMonths = moment().diff(moment.unix(empStart, "X"), "months");
  // console.log(empMonths);
  // Calculate the total billed rate
  // var empBilled = empMonths * empRate;
  // console.log(empBilled);
  // Add each train's data into the table
  $("#train-table > tbody").append("<tr><td>" + trainName + "</td><td>" + destination + "</td><td>" +
  frequency + "</td><td>" + "empMonths/nextArrival" + "</td><td>" + "minutesAway" + "</td></tr>");
});