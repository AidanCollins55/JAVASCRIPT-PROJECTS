function displayType(team) {
    var teamType= team.getAttribute("data-team-state");
    alert(teamType + " is in " + team.innerHTML + " USA!");
}