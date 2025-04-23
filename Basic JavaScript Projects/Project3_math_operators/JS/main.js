function power_operator() { //Does the math operation "to the power of"//
    var power = 20, 2;
    document.getElementById("Power").innerHTML = Math.pow(20,2);
}

function modulus_Operator() { 
    var simple_Math = 25 % 6;
    document.getElementById("Math").innerHTML + simple_Math;
}

function multiplication() { //A function for multiplication
    var multiplication = 6 * 8;
    document.getElementById("Multiply").innerHTML = "6 x 8 = " + multiplication;
}

function division () { //A function for division
    var division = 48 / 6;
    document.getElementById("Divide").innerHTML = "48 / 6 = " + division;
}

function subtraction_function() { //A function for subtraction
    var subtraction = 5 - 2;
    document.getElementById("Subtract").innerHTML = "5 - 2 = " + subtraction;
}

window.alert(Math.random() * 100);