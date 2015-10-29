var page = {
  init: function(){
    page.eventsInit();
    page.stylesInit();
  },
  eventsInit: function(){
    $('div').on('click', '.displayInv', function(e){
      page.displayInv();
    });
  },
  stylesInit: function(){
    page.fight();
    if(battle[0].health <= 0){
      page.fight();
    }
  },
  fight: function(){
    var interval;
    var fight = new Fight(player, enemy);
    $('.enemyName').html(enemy.name);
    $('.enemyHealth').html(enemy.health);
      interval = setInterval(function(){
        if(enemy.health > 0){
          fight = new Fight(player, enemy);
          $('.enemyName').html(enemy.name);
          $('.enemyHealth').html(enemy.health);
        }
        else{
          clearInterval(interval);
          var killed = new Killed(enemy, battle);
          return;
        }
      }, 2000);
  },
  displayInv: function(){
    $('.display').html('');
    var inv = new DisplayItems(possibleItems);
    for(var i = 0; i < inv.items.length; i++){
      $('.display').append(inv.items[i].name + "<br />");
    }
  },
};
$(document).ready(function(){
  page.init();
});
