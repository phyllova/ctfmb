
//******************** I M P O R T A N T *****************
// any changes to this must also be made to REMOTENAV.JS

$(document).bind('ready', function(){
    // event handler for left side mobile menu links
    $('.JQmobile').click(function(e){
        dataid = $(this).attr('data-id');
        // if the subnav is already visible, then just invoke the link
        if($('div[data-id=' + dataid + ']').is(':hidden')){
            $('.nav-sub-mobile').hide();
            if($('div[data-id=' + dataid + ']').length > 0){
                if($('div[data-id=' + dataid + ']').find('a.on').length == 0){
                    if($('div[data-id=' + dataid + ']').is(':hidden')){
                        $('div[data-id=' + dataid + ']').show();
                        $('.JQmobile,.JQmobileSubnav').removeClass('on');
                        $(this).addClass('on');
                        e.preventDefault();
                    }
                }
            }
        } else {
            if($('div[data-id=' + dataid + ']').length > 0){
                e.preventDefault();
            }

        }
    });


    // toggles the mobile menu
    $('#mobilemenu').click(function() {
        // Trigger event on click
        var submenu = $('#submenu');
        if (submenu.is(":visible")) {
    		// Is the submenu visible?
    		submenu.slidUSp();
    		// If so, fade it out.
                    $(this).removeClass('menu-icon-open').addClass('menu-icon-closed');
    	} else {
            // initialize mobile subnav
            $('div.nav-sub-mobile a.on').parents('div.nav-sub-mobile').show();
    		submenu.slideDown();
    		// If not visible, fade it in.
            $(this).removeClass('menu-icon-closed').addClass('menu-icon-open')
    	}
    });

var submenu_active = false;
// Is the cursor inside the sub menu?
 
$('div#submenu').mouseenter(function() {
    // On mouse enter, set the var to true

    submenu_active = true;
 
});

//$('div#submenu').mouseleave(function() {
    // On mouse leave, set it to false
//    submenu_active = false;
 
    // Use the setTimeout function to run
    // a command after a short delay.

    // The code above will pause the code for
    // 400 milliseconds and then checked
    // whether the submenu is active or not
    // If not, it will fade it out
 
//    setTimeout(function() { if (submenu_active === false) $('div#submenu').fadeOut(); }, 400);
//});

});