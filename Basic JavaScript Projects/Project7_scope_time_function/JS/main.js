//Global Variable
var X = 20;
function Add_numbers_1() {
    document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 100 + "<br>");
}
//Returns the values 120 and 30
Add_numbers_1();
Add_numbers_2();

//Local Variable
function Add_numbers_3() {
    var Y = 10;
    document.write(20 + Y + "<br>");
}
//Returns the value 30
Add_numbers_3();

//If Statement that uses the ".getHours" method
function get_Date(){
    if (new Date().getHours() < 24) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

//Another If Statement example
function test_If(){
    if (1<2) document.write("The left number is smaller than the right number")
        document.getElementById("Test").innerHTML = "True!"
}

//Else statement
function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = "You are old enought to vote!";
    }
    else {
        Vote = "You are not old enought to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}

//Else If statement
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if(Time < 12 == Time > 0) {
        Reply = "It is Morning.";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is Afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}