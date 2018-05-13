$(document).ready(function($) {
    
  var allPanels1 = $('.collapse .hide').hide();
   allPanels1.slideUp();
    

  $('.collapse .title').click(function() {
    
    $(this).next().slideToggle().siblings('.collapse .hide').slideUp();
  
    return false;
     
  });

  // CODE TO ENABLE and Hide overlay
  $('.dropdown').click(function(){
    $('.dropdown_menu1').animate({width: '180px', height: '210px', opacity: 1}, 400);
  });
 $('.uparrow').click(function(){
    $('.dropdown_menu1').animate({width: '180px', height: '210px', opacity: 1}, 400);
  });
  $('*').click(function(e){
    if($('.dropdown_menu1').height() > 100){
      if($(e.target).attr('class') != 'dropdown_menu1' || $(e.target).attr('class') != 'dropdown_item1'){
        $('.dropdown_menu1').animate({width: '0px', height: '0px', opacity: 0}, 400);
      }
    }
  });


  //Code to display Modal
  $('#dispmod').click(function(){
      $('.infobox').css('display','block');
      $('.container').css("opacity","0"); 
       $('#dispmod').css("opacity","0");
       
      
  });

 

    $('.close').click(function(){
      $('.infobox').css('display','none');
      $('.container').css("opacity","1");
       $('#dispmod').css("opacity","1");
    
  });

    $('#ok').click(function(){
      $('.infobox').css('display','none');
      $('.container').css("opacity","1");
       $('#dispmod').css("opacity","1");
    
  });

    $('#wt').click(function(){
      $('.infobox').css('display','none');
      $('.container').css("opacity","1");
       $('#dispmod').css("opacity","1");
    
  });

   

});