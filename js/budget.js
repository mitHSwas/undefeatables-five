document.getElementById("player-cost").addEventListener("click", function () {
    const perPlayerBudget = document.getElementById("per-player-budget").value;
    const perPlayerBudgetAmount = parseInt(perPlayerBudget);

    const selectedPlayers = document.getElementsByTagName("li").length;

    const totalPlayerCost = perPlayerBudgetAmount * selectedPlayers;

    const playerCost = document.getElementById("player-total-cost");
    playerCost.innerText = totalPlayerCost;
})

document.getElementById("btn-total-cost").addEventListener("click", function () {
    const totalPlayerCostElement = document.getElementById("player-total-cost").innerText;
    const totalPlayerCostAmount = parseInt(totalPlayerCostElement);

    const managerCostElement = document.getElementById("manager-cost").value;
    console.log(typeof managerCostElement);
    const managerCostAmount = parseInt(managerCostElement);

    const coachCostElement = document.getElementById("coach-cost").value;
    const coachCostAmount = parseInt(coachCostElement);
    console.log("love", coachCostAmount);
    const totalCostAmount = totalPlayerCostAmount + managerCostAmount + coachCostAmount;
    document.getElementById("total-cost").innerText = totalCostAmount;
})



