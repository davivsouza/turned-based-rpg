let enemy;

function Enemy(name,health, strength, mana, agility) {
  this.name = name
  this.health = health;
  this.strength = strength;
  this.mana = mana;
  this.agility = agility;
  this.calcAttack = function() {
    let baseDamage;

    baseDamage =
      this.mana > 0
        ? (this.strength * this.mana) / 1000
        : (this.strength * this.agility) / 1000;

    let offsetDamage = Math.floor(Math.random() * Math.floor(10));
    let outputDamage = baseDamage + offsetDamage;

    let numberOfHits =
      Math.floor((Math.random() * Math.floor(this.agility / 10)) / 2) + 1;
    let totalDamage = [outputDamage, numberOfHits];
    return totalDamage;
  };
}
