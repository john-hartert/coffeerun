function storeOne(){
     var inputCoffee= document.getElementById("coffeeOrder");
     localStorage.setItem("coffeeOrder", inputCoffee.value);
    }

function storeTwo(){
     var inputEmail= document.getElementById("emailInput");
     localStorage.setItem("emailInput", inputEmail.value);
    }


// function storeThree(){
//      var inputShort= document.getElementById("short");
//      localStorage.setItem("short", inputShort.value);
//     }


// function storeFour(){
//      var inputTall= document.getElementById("tall");
//      localStorage.setItem("tall", inputTall.value);
//     }


// function storeFive(){
//      var inputGrande= document.getElementById("grande");
//      localStorage.setItem("grande", inputGrande.value);
//     }


// function storeSix(){
//      var inputflavorShot= document.getElementById("flavorShot");
//      localStorage.setItem("flavorShot", inputflavorShot.value);
//     }



























// var names = [];
// coffeeOrder = ('#coffeeorder');
// localStorage.setItem("coffeeOrder", JSON.stringify(names));
// var storedNames = JSON.parse(localStorage.getItem("names"));

// var names = [
//     coffeeOrder: '',
//     emailInput: '',
//     short: '',
//     tall: '',
//     grande: '',
//     flavorShot: '',
// ];

// saveitem: function () {
// var inputs = 
//     thing.coffeeOrder = inputs[0].value;
//     thing.emailInput = input[1].value;
//     thing.short = input[2].value;
//     thing.tall = input[3].value;
//     thing.grande = input[4].value;
//     thing.flavorShot = input[5].value;



// var names = [];
// names[0] = prompt("New member name?");
// localStorage.setItem("names", JSON.stringify(names));

// //...
// var storedNames = JSON.parse(localStorage.getItem("names"));


// var thing = {
//     coffeeOrder: '',
//     emailInput: '',
//     short: '',
//     tall: '',
//     grande: '',
//     flavorShot: '',
// }

// saveitem: function () {
// var lsCount = localStorage.length;
// var inputs = document.getElementById('submit');
//     thing.coffeeOrder = inputs[0].value;
//     thing.emailInput = input[1].value;
//     thing.short = input[2].value;
//     thing.tall = input[3].value;
//     thing.grande = input[4].value;
//     thing.flavorShot = input[5].value;
//     localStorage.setItem('data', +  JSON.stringify(thing));
//     var myData = JSON.parse(localStorage.getItem('data'));
//     typeof myData;

// When the user submits, get the data from the from.
// Save the data to localStorage
// When the user refreshes the browser, repopulate the form with the data.
// Note: you will likely need to find a different way to set the dropdown and the 
//slider...
///////////////////////////////////////////////////////////////////////////////////
// Some stretch goals:
// Keep a list of all orders submitted in localStorage
// Draw a list of all orders on the screen.
// Update the list of orders on the screen and in localStorage each time the user 
//submits the form.
// Advice:

// Do use data attributes
// Do break your code up into functions.
// Do try to move "hard-coded" values into variables/constants. (For example, 
//if you keep typing the same selector string over and over, that's a good sign 
//that you should create a global variable.)