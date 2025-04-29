//Concatenate method
function full_Sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

//Slice Method
function slice_Method(){
    var Sentence = "All work and now play makes for a sad panda."
    var Section = Sentence.slice (38, 45);
    document.getElementById("Slice").innerHTML = Section;
}

//toUpperCase Method
function toUpperCase(){
let text = "Hello World!";
let result = text.toUpperCase();
document.getElementById("upper_Case").innerHTML = result;
}

//Search Method
function Search(){
    let text = "Red has a red corvette"
    let position = text.search("Red");
    document.getElementById("search_method").innerHTML = position;
}

//toString() Method
function string_Method() {
    var X =100;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

//toPrecision() Method
function precision_Method() {
    var X = 686838.98034098120352089;
    document.getElementById("Precision").innerHTML = X.toPrecision(10); //this makes the number much more precise and only pull (10) digits rather than all of them.
}

//toFixed() Method
function to_Fixed() {
    let num = 4.32156;
    let n = num.toFixed();
    document.getElementById("fixed").innerHTML = n; //returns the number 4
}

//valueOf() Method
function value_Of() {
    let text = "This is the valueOf method";
    let result = text.valueOf();
    document.getElementById("value").innerHTML = result;
}
