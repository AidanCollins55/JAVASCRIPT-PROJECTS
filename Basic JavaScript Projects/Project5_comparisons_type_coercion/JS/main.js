document.write("10" + 5);

function my_Function() {
    document.getElementById("Test").innerHTML =0/0;
    document.getElementById("Test").innerHTML = isNAN('This is a string');
}

document.write(-3E310); //writes negative infinity
document.write(2E310); //writes infinity
document.write(10>2); //writes true because 10 is greater than 2
document.write(10<2); //writes false because 10 is not less than 2

console.log(2+2); //shows 4 in the console

console.log(10<2); //shows false in the console

document.write(10 == 10);

document.write(3 == 11);

X = 10;
Y = 10;
document.write(X === Y); //returns true because x is equal to y

X = 30;
Y = "10";
document.write(X === Y) //returns false because it is a different data type and value type

X = 30;
Y = 20;
document.write(X === Y); //returns false because the values are different

X = 30;
Y = "30";
document.write(X === Y); //returns false because the data type is different

document.write(7 > 2 && 20 > 4) //returns true because seven is greater than 2 and 20 is greater than 4

document.write(5 > 20 || 20 > 4) //returns true because 5 is not greater than 20 but 20 is greater than 4

function not_Function() {
    document.getElementById("Not").innerHTML = !(20>10);
    document.getElementById("Not1").innerHTML = !(5>10);
}