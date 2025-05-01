//Loop function to count to 10
function Call_Loop() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

//String Length Property
function Stringss() {
let text = "How many letters are in this sentence?";
let length = text.length;
document.getElementById("test").innerHTML = length;
}

//For Loops
var cars = ["Dodge", "Ford", "Jeep", "Tesla",];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < cars.length; Y++) {
        Content += cars[Y] + "<br>";
    }
    document.getElementById("List_of_cars").innerHTML = Content;
}

//Array
function dog_breed() {
    var Dog_breed = [];
    Dog_breed[0] = "labrador";
    Dog_breed[1] = "retriever";
    Dog_breed[2] = "pitbull";
    document.getElementById("Dog").innerHTML = "This dog breed is " +
    Dog_breed[0] + ".";
}

//Constant
function constant_function(){
    const Team = {type: "Yankees", town:"New York", record:"42-10"};
    Team.record = "49-20";
    Team.location = "Away";
    document.getElementById("Constant").innerHTML = "The " + Team.type + " are "
    + Team.location;

}

//Let
var X = 70;
document.write(X);
{
    let X = 22;
    document.write("<br>" + X);
}
document.write("<br>" + X);

//Object
let bike = {
    make: "KLR ",
    model: "650 ",
    year: "2005 ",
    color: "green ",
    description : function() {
        return "The bike is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("bike_object").innerHTML = bike.description();

//Break
function breaks() {
let text = "";
for (let i = 0; i < 10; i++) {
    if (i === 3) { break; }
    text += "the number is " + i + "<br>";
    
}
    document.getElementById("break").innerHTML = text;
}

//Loop with a Continue Statement
function loop_continue() {
    let text = "";
    for (let i = 0; i < 10; i++) {
        if (i === 3) { continue; }
        text += "The number is " + i + "<br>";
    }
    document.getElementById("loop").innerHTML = text;
}