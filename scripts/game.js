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
    enemy = new Enemy(2000, 2000, 2000, 2000)
  },
  setInterface: function (heroClass, player) {
    let getContainer = document.querySelector("#container");
    let getTask = document.querySelector("#task");

    getTask.textContent = "Find an enemy to initiate a battle!";
    getContainer.innerHTML = `
    <div id="battle-container">

      <div class="hero">
        <img src="../assets/${heroClass}.jpg" alt="mage">
        <h2>${String(heroClass).toUpperCase()}</h2>
        <div class="hero-details">
          <p>Health: ${player.health}</p>
          <p>Strength: ${player.strength}</p>
          <p>Mana: ${player.mana}</p>
          <p>Agility: ${player.agility}</p>
        </div>
        <button class="findEnemy" onclick="gameManager.findBattle()">Find an enemy</button>

      </div>
      <p class="versus">
        VS
        <button class="startBattle" onclick="gameManager.startBattle()">Start the battle!</button>
        
      </p>
      <div class="enemy"></div>
    </div>
    
    `;
  },
  findBattle: function () {

    let getEnemyElement = document.querySelector(".enemy");
    let getTask = document.querySelector("#task");
    let getButton = (document.querySelector(".findEnemy").style.display =
      "none");
    let appearVS = (document.querySelector(".versus").style.display = "flex");

    getTask.textContent = "Kill the enemy!";
    getEnemyElement.innerHTML = `
    <img src="../assets/dragon.jpg" alt="Red Dragon">
    <h2>Red Dragon</h2>
    
    <div class="enemy-details">
    <p>Health: ${enemy.health}</p>
    <p>Strength: ${enemy.strength}</p>
    <p>Mana: ${enemy.mana}</p>
    <p>Agility: ${enemy.agility}</p>
    </div>
    `;
  },
  startBattle: function(){
    let getEnemyHealth = document.querySelector('.enemy-details p')
    let getPlayerHealth = document.querySelector('.hero-details p')

    if(player.agility >= enemy.agility){
      let playerAttackDamage = player.calcAttack()
      let playerTotalDamage = playerAttackDamage[0] * playerAttackDamage[1]
      enemy.health -= playerTotalDamage
       alert(`You did ${playerAttackDamage[1]} hits of ${playerAttackDamage[0] } damage`)
      if(enemy.health<=0){
        getEnemyHealth.textContent = `0`
        alert('Congratulations! You won.')
        location.reload()

      }else{
        getEnemyHealth.textContent = `Health: ${Number(enemy.health).toFixed(0)}`
        getPlayerHealth.textContent = `Health: ${Number(player.health).toFixed(0)}`
        let enemyAttackDamage = enemy.calcAttack()
        let enemyTotalDamage = enemyAttackDamage[0] * enemyAttackDamage[1]
        player.health -= enemyTotalDamage
        alert(`The enemy did ${enemyAttackDamage[1]} hits of ${enemyAttackDamage[0] } damage in you`)
        
        if(player.health <= 0){
          getPlayerHealth.textContent = `0`
          getEnemyHealth.textContent = `Health: ${Number(enemy.health).toFixed(0)}`
          alert('You died! Good luck in the next time.')
          location.reload()

        }else{
          getPlayerHealth.textContent = `Health: ${Number(player.health).toFixed(0)}`
        }
      }
      
    
    }else{
      let enemyAttackDamage = enemy.calcAttack()
      let enemyTotalDamage = enemyAttackDamage[0] * enemyAttackDamage[1]
      player.health -= enemyTotalDamage
      alert(`The enemy did ${enemyAttackDamage[1]} hits of ${enemyAttackDamage[0] } damage in you`)
      
      if(player.health <= 0){
        getPlayerHealth.textContent = `0`
        getEnemyHealth.textContent = `Health: ${Number(enemy.health).toFixed(0)}`
        alert('You died! Good luck in the next time.')
        location.reload()

      }else{
        let playerAttackDamage = player.calcAttack()
        let playerTotalDamage = playerAttackDamage[0] * playerAttackDamage[1]
        enemy.health -= playerTotalDamage
        alert(`You did ${playerAttackDamage[1]} hits of ${playerAttackDamage[0] } damage`)
        if(enemy.health<=0){
          getEnemyHealth.textContent = `0`
          getPlayerHealth.textContent = `Health: ${Number(player.health).toFixed(0)}`
  
          alert('Congratulations! You won.')
          location.reload()
  
  
        }else{
         getEnemyHealth.textContent = `Health: ${Number(enemy.health).toFixed(0)}`
        }
      }

      
    }
  }
};
