class Car{
  constructor(theMake, mod, wheels='front', lvl =100, theColor = 'silver'){
    this.windowsOpen = false;
    this.currentlyRunning = false;
    this.make = theMake;
    this.model = mod; 
    this.driveWheels = wheels;
    this.fueltTankLevel = lvl;
    this.color = theColor;
    this.damage = 0;
  }


  stop(){
    this.currentlyRunning = false;
  }

  openWindos(){
    this.windowsOpen = true;
  }

  closeWindows(){
    this.windowsOpen = false
  }

  fillUpTheTank(amount){
    if(this.fueltTankLevel + amount <=100){
    this.fueltTankLevel += amount
    } else{
      this.fueltTankLevel = 100;
    }
  }

  crashInto(whichCar){
    this.damage += 35;
    whichCar.damage +=60;
  }
}


 Car.prototype.start = function(){
    this.currentlyRunning = true;
  }




let nicksCar = new Car('honda', 'civic');
let nizarsCar = new Car('honda', 'fit', 'front', 88, 'blue');

console.log(nicksCar);
console.log(nizarsCar);
nicksCar.crashInto(nizarsCar);

console.log(nicksCar)

console.log(nizarsCar);








// let nicksCar = {
//   make: 'honda',
//   model: 'civic',
//   color: 'black', 
//   year:2006,
//   driveWheels: 'front',
//   windowsOpen: false,
//   currentlyRunning: false,
//   fueltTankLevel: 60,


// }


// let nizarsCar = {
//   make: 'honda',
//   model: 'fit',
//   color: 'blue', 
//   year:2016,
//   driveWheels: 'front',
//   windowsOpen: false,
//   currentlyRunning: false,
//   fueltTankLevel: 85,

//     start: function(){
//     this.currentlyRunning = true;
//   },
//   stop: function(){
//     this.currentlyRunning = false;
//   },
//   openWindos: function(){
//     this.windowsOpen = true;
//   },
//   closeWindows: function(){
//     this.windowsOpen = false
//   },
//   fillUpTheTank: function(amount){
//     if(this.fueltTankLevel + amount <=100){
//     this.fueltTankLevel += amount
//     } else{
//       this.fueltTankLevel = 100;
//     }
//   }

// }







class Airplane{
  constructor(color, speed){
    this.currentlyRunning = false;
    this.wings = 4;
    fuelLevel: 50;
    this.color = color;
    this.speed = speed;
  }

  start(){
    this.currentlyRunning = true;
  }
  fillUpTank(){
    this.fuelLevel = 100;
  }

}


class Jet extends Airplane{}

let kawhiLeonardsNewJet = new Jet('blue', 'super fast');
kawhiLeonardsNewJet.start()

// console.log(kawhiLeonardsNewJet);

class OldSchoolPropellarPlane extends Airplane{
  constructor(speed, color, driveTrainMaterial){
    super(color, speed);

    this.drvTrn = driveTrainMaterial;

  }


  prankStart(){
    super.start();
    console.log("haha! you thought Id turn on the plane but no");
  }
}


let alaskaPlane = new OldSchoolPropellarPlane('slow', 'white', 'carbon-fiber');


console.log(alaskaPlane);

alaskaPlane.start();

console.log(alaskaPlane);