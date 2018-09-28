// $(document).ready(initializeApp);

var num1 = null;
var num2 = null;
var num3 = null;

var numbersArray = [];

function getResults(){
    num1 = Math.floor(Math.random() * 10);
    num2 = Math.floor(Math.random() * 10);
    num3 = Math.floor(Math.random() * 10);
    numbersArray.push(num1, num2, num3);
    console.log(numbersArray);
    if(num1 === 7 && num2 === 7 && num3 === 7){
        console.log('user spun a tripple 7');
        alert('Congratulations! You have hit the Jackpot');
    } else {
        alert("Unlucky! Try Again?");
    }
    numbersArray.length = 0;
}