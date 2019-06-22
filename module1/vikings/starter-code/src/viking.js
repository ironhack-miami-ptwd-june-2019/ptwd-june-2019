// Soldier
class Soldier {
constructor(theHealth, theStrength){
    this.health = theHealth;
    this.strength = theStrength
}



}
Soldier.prototype.attack = function(){
    return this.strength;
}

Soldier.prototype.receiveDamage = function(amtOfDmg){
    this.health -= amtOfDmg;
}

// Viking
class Viking extends Soldier {
    constructor(nm, hlth, strngth){
        super(hlth, strngth);
        this.name = nm;
    }

    receiveDamage(dmgAmount){
        super.receiveDamage(dmgAmount);

        if(this.health > 0){
            return `${this.name} has received ${dmgAmount} points of damage`
        } else {
           return `${this.name} has died in act of combat`
        }
    }

    battleCry(){
        return "Odin Owns You All!";
    }

}

// Saxon
class Saxon extends Soldier {
    constructor(firstArg, secondArg){
        super(firstArg, secondArg);
    }
    // you would never do this in real life because youre just wasting keystrokes
    // if you simply dont define this method, you will inherit perfectly from the parents class
    // but since we redefine it, we must call super in order to inherit from the parents consturctor function


    receiveDamage(number){
        super.receiveDamage(number);
        if(this.health > 0){
            return `A Saxon has received ${number} points of damage`
        } else {
           return `A Saxon has died in combat`
        }
    }

}

// War
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(aVikingObject){
        this.vikingArmy.push(aVikingObject);
    }

    addSaxon(aSaxonObject){
        this.saxonArmy.push(aSaxonObject);
    }


    vikingAttack(){
        let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        let randomSaxon = this.saxonArmy[randomSaxonIndex];
        let randomViking = this.vikingArmy[randomVikingIndex];

        let theAmount = randomViking.attack()

       let result = randomSaxon.receiveDamage(theAmount);

        if(randomSaxon.health <= 0){
            this.saxonArmy.splice(randomSaxonIndex, 1);
        }
        return result;
    }

    saxonAttack(){
        let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        let randomSaxon = this.saxonArmy[randomSaxonIndex];
        let randomViking = this.vikingArmy[randomVikingIndex];

        let theAmount = randomSaxon.attack()

       let result = randomViking.receiveDamage(theAmount);

        if(randomViking.health <= 0){
            this.vikingArmy.splice(randomVikingIndex, 1);
        }
        return result;
    }


    showStatus(){
        if(this.saxonArmy.length === 0){
            return "Vikings have won the war of the century!"
        }

        if(this.vikingArmy.length ===0){
            return "Saxons have fought for their lives and survive another day..."
        }

        return "Vikings and Saxons are still in the thick of battle."
    }

}
