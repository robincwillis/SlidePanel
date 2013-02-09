/************************************************************************
*************************************************************************
@Name :       SlidePanel - jQuery Plugin
@Revison :    0.0.1
@Date :       11/10/2011
@Author:      Robin Willis
@License :    Open Source - MIT License : http://www.opensource.org/licenses/mit-license.php
**************************************************************************
*************************************************************************/
(function( $ ){

  var methods = {
    
    init : function( options ) { 
     
     return this.each(function() {
     
     	 $(this).data('settings',{
      	element : $(this),
      	handle : ".panel_tab",
      	content : ".panel_content",
      	opened : false,
      	hidden : false,
      	direction : "both",
      	openedSize : 250,
      	offset : 35,
      	closedSize : 0,
      	pos : $(this).position(),
      	animTime : 500,
      	startDelta : 0, 
      	openEvent : 'mouseenter',
      	closeEvent : 'mouseleave',
      	toggleEvent : '',
      	openSelector : '',
      	closeSelector : '',
      	toggleSelector : '',
      	
      });
      
        var el = $(this);		
     	$.extend($(this).data('settings'), options);

     	
		$(el.data('settings').openSelector).live(el.data('settings').openEvent,function(e){
			methods.open(el)
		});
		
		$(el.data('settings').closeSelector).live(el.data('settings').closeEvent,function(e){
			methods.close(el, e);	
		});
	
		$(el.data('settings').toggleSelector).live(el.data('settings').toggleEvent,function(e){
			methods.toggle(el);	
		});
		
		if(el.data('settings').opened == true && el.data('settings').hidden == false){
			methods.open(el);
		}else if(el.data('settings').hidden == false){
			methods.forceClose(el);
		}else if(el.data('settings').hidden == true){
		
			methods.hide(el);
		}
		
	});
	
    }, 
    open : function(el){
 		
 		el.animate({width: el.data('settings').openedSize+"px"}, {duration:el.data('settings').animTime, queue:false});     
		$(el.data('settings').content).animate({width: el.data('settings').openedSize+"px"}, {duration:el.data('settings').animTime, queue:false}); 
        $(el.data('settings').handle).animate({width: "0px"}, {duration:el.data('settings').animTime, queue:false});
		//el.find('.panel_tab').find('.vertical').fadeOut('fast');
      	el.data('settings').opened = true;
    },
    
    close : function(el, e){
    
 		//TODO check for direction
 		exitMouseX=e.pageX;

 	
 		if(el.data('settings').direction == "both"
 		||
 		el.data('settings').direction == "right" && exitMouseX - 5 < $(el.data('settings').closeSelector).offset().left
 		||
 		el.data('settings').direction == "left" && exitMouseX + 5 > $(el.data('settings').closeSelector).offset().left + $(el.data('settings').closeSelector).width()){
 	
 		

 	
 		el.animate({width: el.data('settings').offset+"px"}, {duration:el.data('settings').animTime, queue:false});
 		$(el.data('settings').content).animate({width: "0"}, {duration:el.data('settings').animTime, queue:false});
 		$(el.data('settings').handle).animate({width: el.data('settings').offset+"px"}, {duration:el.data('settings').animTime, queue:false});
 		el.data('settings').opened = false;
 		el.data('settings').hidden = false;
 		}
    },
    forceClose : function(el){
    	el.animate({width: el.data('settings').offset+"px"}, {duration:el.data('settings').animTime, queue:false});
 		$(el.data('settings').content).animate({width: "0"}, {duration:el.data('settings').animTime, queue:false});
 		$(el.data('settings').handle).animate({width: el.data('settings').offset+"px"}, {duration:el.data('settings').animTime, queue:false});
 		el.data('settings').opened = false;
 		el.data('settings').hidden = false;
    },
    toggle : function(el){
    	if(el.data('settings').opened == true){
    		    	el.animate({width: el.data('settings').offset+"px"}, {duration:el.data('settings').animTime, queue:false});
 					$(el.data('settings').content).animate({width: "0"}, {duration:el.data('settings').animTime, queue:false});
 					$(el.data('settings').handle).animate({width: el.data('settings').offset+"px"}, {duration:el.data('settings').animTime, queue:false});
 					
    		el.data('settings').opened = false;
    		el.data('settings').hidden = false;
    	}else{
	    	el.animate({width: el.data('settings').openedSize+"px"}, {duration:el.data('settings').animTime, queue:false});     
			$(el.data('settings').content).animate({width: el.data('settings').openedSize+"px"}, {duration:el.data('settings').animTime, queue:false}); 
	        $(el.data('settings').handle).animate({width: "0px"}, {duration:el.data('settings').animTime, queue:false});
			//el.find('.panel_tab').find('.vertical').fadeOut('fast');
	   
    		el.data('settings').opened = true;
    		el.data('settings').hidden = false;
    	}
    	
    },
    hide : function(el){
    	
    	 el.animate({width: 0}, {duration:el.data('settings').animTime, queue:false});
 		$(el.data('settings').content).animate({width: "0"}, {duration:el.data('settings').animTime, queue:false});
 		$(el.data('settings').handle).animate({width: 0}, {duration:el.data('settings').animTime, queue:false});
 		el.data('settings').opened = false;
 		el.data('settings').hidden = true;
    },
    destroy : function(el){
    	//TODO
    	//unbind all events
    	//remove from the dom
    }
    
};

  $.fn.panel = function( method ) {
    
    // Method calling logic
    if ( methods[method] ) {
      return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof method === 'object' || ! method ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error( 'Method ' +  method + ' does not exist on jQuery.tooltip' );
    }    
  
  };

})( jQuery );