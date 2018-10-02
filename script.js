// random number generator math.ran
// place to store that number
// conditional if that storeed number from random number = #7 alert "great!" 


// creating a function that returns a random number 
// call that funtion 3 times in its own variable 
$(document).ready(initializeApp);

function initializeApp(){
  $('.spinButton').on('click', randomNum);

};



$('<div>').addClass('.bus')
var num1 = null;
var num2 = null;
var num3 = null;
var newArray = [];
var playerScore = 1500;
var bankAccountBalance= 0

function randomNum(){
  
  num1 = Math.floor(Math.random() * 8);
  num2 = Math.floor(Math.random() * 8);
  num3 = Math.floor(Math.random() * 8);
  newArray.push(num1,num2,num3);
  console.log(newArray);
  
  displayNumbers(newArray);

  if(num1===7 && num2===7 && num3===7){
    console.log('user was successful');
    alert('congrats!');
    bankAccountBalance +=5000;
  } else if (num1 !== 7 && num2 !==7 && num3 !==7){
    console.log('user failed');
    alert('sorry try again');
    bankAccountBalance -= 50;
  } 
  
  newArray.length=0;
  $('.balance').text(bankAccount);

};

function displayNumbers(newArray){
  $(".output1").text(num1);
  $(".output2").text(num2);
  $(".output3").text(num3);
  
}





