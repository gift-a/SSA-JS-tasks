function House(inhabitant) {
  this.inhabitant = inhabitant;
  this.doorType = "door";
  this._doorIsOpened = false;
}
House.prototype.openDoor = function() {
  this._doorIsOpened = true;
};
House.prototype.closeDoor = function() {
  this._doorIsOpened = false;
};
House.prototype.getInfo = function() {
  return (
    this.inhabitant +
    ' lives in the house with door type "' +
    this.doorType +
    '". Door opened:' +
    this._doorIsOpened
  );
};

function HorseHouse(owner, horseName) {
  House.call(this, owner);
  this._horsesIn = [horseName];
}
HorseHouse.prototype = Object.create(House.prototype);
HorseHouse.prototype.constructor = HorseHouse;
HorseHouse.prototype.setHorse = function(horseName) {
  this._horsesIn.push(horseName);
};
HorseHouse.prototype.getInfo = function() {
  return (
    House.prototype.getInfo.call(this) +
    ". She has " +
    this._horsesIn.length +
    " horse(s), named: " +
    this._horsesIn.join(", ")
  );
};

function LambaHouse(inhabitant) {
  House.call(this, inhabitant);
  this.doorType = "Lamba-door";
}
LambaHouse.prototype = Object.create(House.prototype);
LambaHouse.prototype.constructor = LambaHouse;

var myHomeWithHorse = new HorseHouse("Kseniia", "Strelka");
myHomeWithHorse.setHorse("Belka");
console.log(myHomeWithHorse.getInfo());

var yourLambaHouse = new LambaHouse("Maks");
yourLambaHouse.openDoor();
console.log(yourLambaHouse.getInfo());
console.dir(myHomeWithHorse);
