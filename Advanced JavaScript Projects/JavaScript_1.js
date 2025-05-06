//Switch Statement
function Team_Function() {
    var Team_Output;
    var Teams = document.getElementById("Baseball_Team").value;
    var Team_String = " is a great team!";
    switch(Teams) {
        case "Yankees":
        Team_Output = "Yankees" + Team_String;
        break;
        case "Red Sox":
        Team_Output = "Red Sox" + Team_String;
        break;
        case "Braves":
            Team_Output = "Braves" + Team_String;
            break;
            Team_Output = "Please enter a team exactly as written on the above list";
             
    }
    document.getElementById("Team").innerHTML = Team_Output
}

function Text_Change() {
    var A = document.getElementsByClassName("Change");
    A[0].innerHTML = "The text has changed!";
}

//learning the canvas graphics
function graphics() {
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95,50,40,0,2*Math.PI);
ctx.stroke();
}

//Create linear gradient
function gradient(){
const c = document.getElementById("Linear_Gradient");
const ctx = c.getContext("2d");

const grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");

ctx.fillStyle = grd;
ctx.fillRect(20, 20, 150, 100);
}
