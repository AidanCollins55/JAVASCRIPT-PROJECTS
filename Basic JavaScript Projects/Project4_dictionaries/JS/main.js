function my_Dictionary() { //Custom dictionary with KVP's
    var Vehicle = {
        Type: "Truck",
        Color: "Red",
        Size: "Crew Cab",
        Top Speed: "70mph",
        Year: "1994",
    };
    delete Vehicle.Year; //deletes Year KVP from the dictionary
    document.getElementById("Dictionary").innerHTML = Vehicle.Color;
}