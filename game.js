function Player(options){
  options = options || {};
  this.health = options.health || 100;
  this.weapon = {name:"fists", damage: 6};
  this.equip = function(weapon){
    this.weapon = weapon || new Weapon({name:"fists", damage: 6});
  };
  this.attack = function(){
    console.log(this.weapon.damage);
    var damage = Math.floor(Math.random()*this.weapon.damage);
    return damage;
  };
}
function Enemy(options){
  options = options || {};
  this.name = options.name;
  this.health = options.health;
  this.damage = options.damage;
  this.attack = function(){
    var damage = Math.floor(Math.random()*this.damage);
    console.log(damage);
    return damage;
  };
}
function Weapon(options){
  this.name = options || "fists";
  this.damage = options || 5;
}
var enemies = [
  {
    name:'Goblin',
    health:25,
    damage:3
  },
  {
    name:'Orc',
    health:50,
    damage:10
  }
];
var battle = [];
var possibleItems = [
  {
    name:'Copper Sword',
    damage: 15,
    dropped: false,
    purchased: false,
  },
  {
    name:'Iron Sword',
    damage: 25,
    dropped: false,
    purchased: false,
  },
  {
    name:'Steel Sword',
    damage: 40,
    dropped: false,
    purchased: false,
  },
  {
    name:'test item',
    damage: 999999,
    dropped: true,
    purchased: true,
  }
];
var ownedItems = [];
function DisplayItems(inv){
  inv = inv || {};
  this.items = inv.slice();
}
function AddItem(inv, item){
  for(var i = 0; i < item.length; i++){
    if(item[i].purchased === true){
      inv.push(item[i]);
    }
  }
}
function DropItem(item){
  for(var i = item.length -1; i>=0; i--) {
    if(item[i].dropped === true) {
      item.splice(i, 1);
    }
  }
}
function GenEnemies(enemiesList){
  for(var i = 0; i < 10; i++){
     battle.push(  enemiesList[Math.floor(Math.random()*enemiesList.length)] );
  }
}
var foes = new GenEnemies(enemies);
var player = new Player();
var enemy = new Enemy(battle[0]);
var inventory = new DisplayItems(possibleItems);
var addItem = new AddItem(ownedItems, possibleItems);
var dropItem = new DropItem(possibleItems);
