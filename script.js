// random number generator math.ran
// place to store that number
// conditional if that storeed number from random number = #7 alert "great!" 


// creating a function that returns a random number 
// call that funtion 3 times in its own variable 
$(document).ready(initializeApp);

function initializeApp() {
  $('.spinButton').on('click', randomNum);
  $('.doubleDown').on('click', doubleDown);
  $('.bankAccount').text(bankAccountBalance);
  $('.scoreBoard').text(scoreBoard);
};


var num1 = null;
var num2 = null;
var num3 = null;
var newArray = [];
var newArray2 = [];
// var playerScore = 1500;
var bankAccountBalance = 8000;
var scoreBoard = 0;

function randomNum() {

  num1 = Math.floor(Math.random() * 8);
  num2 = Math.floor(Math.random() * 8);
  num3 = Math.floor(Math.random() * 8);
  newArray.push(num1, num2, num3);
  console.log(newArray);

  displayNumbers(newArray);

  if (num1 === 7 && num2 === 7 && num3 === 7) {
    console.log('user was successful');
    alert('congrats!');
    bankAccountBalance += 5000;
    scoreboard += 100;
    
  } else if (num1 !== 7 && num2 !== 7 && num3 !== 7) {
    console.log('user failed');
    // alert('sorry try again');
    bankAccountBalance -= 50;
    scoreBoard -= 1;
    
  }


  $('.bankAccount').text(bankAccountBalance);
  $('.scoreBoard').text(scoreBoard);
  newArray.length = 0;

};

function displayNumbers(newArray, newArray2) {
  $(".output1").text(num1);
  $(".output2").text(num2);
  $(".output3").text(num3);

}


function doubleDown (){
  num1 = Math.floor(Math.random() * 16);
  num2 = Math.floor(Math.random() * 16);
  num3 = Math.floor(Math.random() * 16);
  newArray2.push(num1, num2, num3);
  console.log(newArray2)

  displayNumbers(newArray2);



  if (num1 === 7 && num2 === 7 && num3 === 7) {
    console.log('user was successful');
    alert('congrats!');
    bankAccountBalance += 10000;
    scoreboard += 100;
  } else if (num1 !== 7 && num2 !== 7 && num3 !== 7) {
    console.log('user failed');
    // alert('sorry try again');
    bankAccountBalance -= 100;
    scoreBoard -= 1;

    $('.bankAccount').text(bankAccountBalance);
    $('.scoreBoard').text(scoreBoard);
    newArray.length = 0;


  }




}







