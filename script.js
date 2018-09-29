$(document).ready(initializeApp);

function initializeApp(){
    $('.balance').text(bankAccount);
}

var num1 = null;
var num2 = null;
var num3 = null;
var bankAccount = 1000;
var numbersArray = [];

function getResults(){
    num1 = Math.floor(Math.random() * 10);
    num2 = Math.floor(Math.random() * 10);
    num3 = Math.floor(Math.random() * 10);
    numbersArray.push(num1, num2, num3);
    renderResultsOnDom(numbersArray);
    console.log(numbersArray);
    if(num1 === 7 && num2 === 7 && num3 === 7){
        bankAccount += 100;
        console.log('user spun a tripple 7');
        alert('Congratulations! You have hit the Jackpot');
    } else {
        bankAccount -= 10;
        // alert("Unlucky! Try Again?");
    }
    numbersArray.length = 0;
    $('.balance').text(bankAccount);

}

function renderResultsOnDom(numbersArray){
$('.num1').text(numbersArray[0]);
$('.num2').text(numbersArray[1]);
$('.num3').text(numbersArray[2]);
}


//add a start amount for user and add to and subtract from total with spins, success, failure