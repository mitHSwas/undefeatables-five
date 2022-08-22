function selectedBestFive(playerNameId) {
    const selectedPlayers = document.getElementById("selected-players");
    const playerName = document.getElementById(playerNameId).innerText;
    const li = document.createElement("li");
    li.innerText = playerName;
    const totalPlayer = document.getElementsByTagName("li").length;
    if (totalPlayer < 5) {
        selectedPlayers.appendChild(li);
    }
    else {
        alert("You can not select more than five players.")
        return;
    }

}

function clickSelectedBtn(btnId, nameId) {
    document.getElementById(btnId).addEventListener("click", function () {
        document.getElementById(btnId).classList.add("disabled");
        document.getElementById(btnId).innerText = "SELECTED";
        selectedBestFive(nameId);
    })
}
clickSelectedBtn("btn-messi", "player-messi");
clickSelectedBtn("btn-correa", "player-correa");
clickSelectedBtn("btn-mbappe", "player-mbappe");
clickSelectedBtn("btn-mauro", "player-mauro");
clickSelectedBtn("btn-marseille", "player-marseille");
clickSelectedBtn("btn-hakimi", "player-hakimi");
clickSelectedBtn("btn-danilo", "player-danilo");
clickSelectedBtn("btn-leandro", "player-leandro");
clickSelectedBtn("btn-bernat", "player-bernat");
clickSelectedBtn("btn-herrera", "player-herrera");
clickSelectedBtn("btn-navas", "player-navas");
clickSelectedBtn("btn-sergio", "player-sergio");