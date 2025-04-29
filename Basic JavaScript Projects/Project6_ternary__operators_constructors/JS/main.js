//creates the "Ride_Function" which when a number is inputed it will let you know if you are or aren't tall enought for the ride
function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are to short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}
//Creates a function "Vehicle" with the make model year and color for the classes
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red"); //Assigns the different vehicle identifiers to Jack/Emily/Erik
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year; //Shows that Erik drives a 1971 mustard Pinto vehicle when clicked
}

function Bike(Year, Color, Top_Speed) {
    this.Bike_Year = Year;
    this.Bike_Color = Color;
    this.Bike_Top_Speed = Top_Speed;
}
var Aidan = new Bike("2020", "Black", "120");
var Taylor = new Bike("2021", "Green", "135");
function myBike() {
    document.getElementById("New_and_This").innerHTML =
    "Taylor drives a " + Taylor.Bike_Color + "-colored ";
}
//This has a nested function with a result of 11 when clicked the "Plus_One" is the nested function
function count_Function() {
    document.getElementById("Nested_Function").innerHTML = Count()
    function Count() {
        var Starting_point = 10;
        function Plus_one() {Starting_Point += 1;}
        Plus_one();
        return Starting_point;
    }
}
