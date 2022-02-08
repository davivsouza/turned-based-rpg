

let gameManager = {
  setGame: function (element) {
    this.setClass(element);
  },
  setClass: function (element) {
    let heroClass = element.dataset.class;
    switch (heroClass) {
      case "warrior":
        player = new Player(200, 90, 0, 60);
        this.setInterface(heroClass, player);

        break;
      case "mage":
        player = new Player(180, 50, 100, 35);
        this.setInterface(heroClass, player);

        break;
      default:
        break;
    }
  },
  setInterface: function (heroClass, player) {
    let getContainer = document.querySelector("#container");
    let getTask = document.querySelector("#task");
    getTask.textContent = "Find an enemy to initiate a battle!"
    getContainer.innerHTML = `
    <div id="battle-container">
      <div class="hero">
        <img src="../assets/${heroClass}.jpg" alt="mage">
        <h2>${String(heroClass).toLocaleUpperCase()}</h2>
        <div class="hero-details">
          <p>Health: ${player.health}</p>
          <p>Strength: ${player.strength}</p>
          <p>Mana: ${player.mana}</p>
          <p>Agility: ${player.agility}</p>
        </div>
        <button class="findEnemy" onclick="gameManager.setBattle()">battle with monsters</button>

      </div>
    </div>
    
    `;
  },
  findBattle: function () {},
};
