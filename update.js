var page = {
  init: function(){
    page.eventsInit();
  },
  eventsInit: function(){
    $('div').on('click', '.displayInv', function(e){
      page.displayInv();
    });
  },
  stylesInit: function(){},
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
