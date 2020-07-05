//Formula to calculate a percentage of matches.

var nameOne = prompt("What is your name?");
var nameTwo =  prompt("What is your crush's name?");

    var calculate = Math.random();
    calculate = calculate * 100;
    calculate = Math.floor(calculate) + 1;

    alert("You guys are  " + calculate + " % on each other" );

// Formula to calculate the BMI

function bmiCalculator (weight, height) {
  var bmi = weight / (height * height); 
  if (bmi < 18.5) {
    return("Your BMI is " + bmi + ",so you are underweight");
  } else if (bmi > 18.5 < 24.9) {
    return("Your BMI is " + bmi + ",so you have a normal  weight");
  } else {
    return("Your BMI is " + bmi + ",so you are  overweight");
  }
  
}

bmiCalculator(60, 1.62);

// Formula to calculate a leap year

function isLeap(year) {
  if(year %4 === 0 && year %400 === 0 && year %100 === 0) {
    return("is leap year");
  } else {
    return("is not leap year");
  }
}

isLeap(2400);


