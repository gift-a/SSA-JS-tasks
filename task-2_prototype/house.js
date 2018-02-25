function House(inhabitant) {
  this._inhabitant = inhabitant;
  this.doorType = "door";
  this._doorIsOpened = "closed";
}
House.prototype.openDoor = function() {
  this._doorIsOpened = "opened to the left";
};
House.prototype.closeDoor = function() {
  this._doorIsOpened = "closed to the right";
};
House.prototype.getInfo = function() {
  return (
    this._inhabitant +
    ' lives in the house with door type "' +
    this.doorType +
    '". Door opened:' +
    this._doorIsOpened
  );
};

function HorseHouse(inhabitant, horseName) {
  House.call(this, inhabitant);
  this._horsesIn = horseName ? [horseName] : [];
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
LambaHouse.prototype.openDoor = function() {
  this._doorIsOpened = 'opened up';
};
LambaHouse.prototype.closeDoor = function() {
  this._doorIsClosed = 'closed down';
};
  

var myHomeWithHorse = new HorseHouse("Kseniia", "Strelka");
myHomeWithHorse.setHorse("Belka");
console.log(myHomeWithHorse.getInfo());

var yourLambaHouse = new LambaHouse("Maks");
yourLambaHouse.openDoor();
console.log(yourLambaHouse.getInfo());
console.dir(myHomeWithHorse);
