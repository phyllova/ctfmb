// http://www.josscrowcroft.com/2011/code/format-unformat-money-currency-javascript/
// Extend the default Number object with a formatMoney() method:
// usage: someVar.formatMoney(decimalPlaces, symbol, thousandsSeparator, decimalSeparator)
// defaults: (2, "$", ",", ".")
Number.prototype.formatMoney = function(places, symbol, thousand, decimal) {
	//places = !isNaN(places = Math.abs(places)) ? places : 2;
	places = !isNaN(places = Math.abs(places)) ? places : 0;
	symbol = symbol !== undefined ? symbol : "$";
	thousand = thousand || ",";
	decimal = decimal || ".";
	var number = this, 
	    negative = number < 0 ? "-" : "",
	    i = parseInt(number = Math.abs(+number || 0).toFixed(places), 10) + "",
	    j = (j = i.length) > 3 ? j % 3 : 0;
	return symbol + negative + (j ? i.substr(0, j) + thousand : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousand) + (places ? decimal + Math.abs(number - i).toFixed(places).slice(2) : "");
};


/* 
the logo is not changing size here, so perhaps lets just hard-code 
the height of the .row_msg_winner, and the disclaimer always seems
to be on 4 lines, so lets hard code the height of that too - makes
the table static too. ??

Im using 2 different JS utilities to dynamically size type, because
each was working best in certain cases, but I agree we should settle 
on one or the other - Im leaning toward textfill because its clearer
how to control it
*/


/* 
declaration of function that will look at the size of various 
static parts of the widget and, ultimately, resize the height 
of the product table (.row_products) to fit in the remaining
space 
*/
function resizeProdsRow() {
	
	// cache the selector - just trying to use jQuery best practices here, but this seems to cause issues on occasion
	var $msg_winner = $('.msg-winner');
	
    // using FitText to resize the "Certified to...xxx"
	//$('.GRA-slogan').fitText(1.5);
	
	
	var $widgetHeight = $('.dt_widget').outerHeight(); // not used again
	var $row_updated_dateHeight = $('.row_updated_date').outerHeight();
	var $row_msg_winnerHeight = $('.row_msg_winner').outerHeight(); // this value can change when the text is resized - perhaps nix it
	var $row_geoloc_formHeight = $('.row_geoloc_form').outerHeight();
	var $gra_seal_height = $('.GRA-seal').outerHeight();
	var $row_products = $('.row_products');
	var $row_geo_form = $('.geo_form_row');

	if ( $('body').hasClass('stacked') ) {
		
		if ( 
			$('.dt_widget').attr('data-layout-type') == 'one-page-top-cta' || 
			$('body').hasClass('CSK_gra_1390auto17543percentage14') || // WEstconsin 14
			$('.dt_widget').attr('data-geo-input-location') == 'above-products' // BB option 6/12 -- have to use the data attr here because the class hasnt been set yet
		) { 
			$row_products.height( $('.dt_widget').outerHeight() - $('.row_updated_date').outerHeight(true) - $('.row_msg_winner').outerHeight(true) - $('.geo_form_row').outerHeight(true) - $('.row_geoloc_form').outerHeight(true) );
//			console.log('outer: ' + $('.dt_widget').outerHeight() );
//			console.log('outer: ' + $('.row_updated_date').outerHeight(true) );
//			console.log('outer: ' + $('.row_msg_winner').outerHeight(true) );
//			console.log('outer: ' + $('.geo_form_row').outerHeight(true) );
//			console.log('outer: ' + $('.row_geoloc_form').outerHeight(true) );

		} else if ( $('body').hasClass('CSK_gra_1127auto16933percentage2') ) { // USPS FCU - horiz bars - has stacked but we dont want the calculation
			
		} else {
			$row_products.height( $('.dt_widget').outerHeight() - $('.row_updated_date').outerHeight(true) - $('.row_msg_winner').outerHeight(true) - $('.row_geoloc_form').outerHeight(true) );
		}
		
		
		
		
		//console.log('overall height: ' + $('.dt_widget').outerHeight()); 
		//console.log('.row_msg_winner height: ' + $('.row_msg_winner').outerHeight(true) ); 
		//console.log('.row_geoloc_form height: ' + $('.row_geoloc_form').outerHeight(true) + "\n -----------------------" ); 
		$height_goal = parseFloat( $('.dt_widget').outerHeight() ) - parseFloat( $('.row_updated_date').outerHeight(true) ) - parseFloat( $('.row_msg_winner').outerHeight(true) ) - parseFloat( $('.row_geoloc_form').outerHeight(true) );
		//console.log('RESULT: ' + $height_goal); 
		
	} else {
//		$('.row_msg_winner').height( $gra_seal_height );
//		// TRY TO GIVE THE HEADLINE APPROPRIATE PADDING TO CENTER IT VERTICALLY
//		$row_products.height( $('.dt_widget').outerHeight() - $('.row_msg_winner').outerHeight() - $('.row_geoloc_form').outerHeight() ); 
	}
	
	$('.msg-winner').textfill({
			//minFontPixels: 20,
			maxFontPixels: 120,	
			innerTag: 'div',
			//debug: true,
			success: function() {
			},
			fail: function() {
			},
			complete: function() {
			}			
		});	
	
	
}




/* -- dont need this yet till we have a responsive widget
$( window ).resize(function() {

  resizeProdsRow();
  
});
*/




function buildBarChart() {
	
	// CARL, I know theres a better way to do this, but I wanted to leave us the flexibility of not having the chart at some point
	// FOR NON-STACKED - has the prod name in the chart
	//var barMarkUp = '<div class="bar_chart_cont"><div class="prod_name text-center"/><div class="bar bar_left"><div class="fi_name bar_label text-center"/><div class="bar_rate_val text-center"/></div><div class="bar bar_right"><div class="mkt_name bar_label text-center"/><div class="bar_rate_val text-center"/></div><div class="bars_rate_val text-center"/></div>';
	var barMarkUp = '<div class="bar_chart_cont"><div class="bar bar_left"><div class="fi_name bar_label text-center"/><div class="bar_teaser_rate_val text-center"/><div class="bar_rate_val text-center"/></div><div class="bar bar_right"><div class="mkt_name bar_label text-center"/><div class="bar_rate_val text-center"/></div><div class="bars_rate_val text-center"/></div>';

	if ( $('body').hasClass('stacked') ) {
		//insert the bar chart after the first product
		$('.prod_list li').eq(0).after( barMarkUp );
		$('.bar_chart_cont').slidUSp(0, function(){
			//console.log('bar chart initially built, inserted, and hidden via slidUSp');
		});
		// new 8/17 for single-prod stacked marquees to auto-height the bar chart cont
		if( $('body').hasClass('stacked') && $('.prod_li').length==1 ) {
			$prod_list_height = $('.prod_list').outerHeight();
			$prod_list_item_height = $('.prod_list li').outerHeight();
			$target_bar_chart_cont_height = $prod_list_height-$prod_list_item_height;
			//$('.bar_chart_cont').height( $('.prod_list').outerHeight() - $('.prod_list li').outerHeight() );
			$('.bar_chart_cont').css('height', $target_bar_chart_cont_height+'px' );
		}
		
	} else {
		// dont do anything for horiz version because the chart is already in the template's markup
	}
	
	if ( $('body').hasClass('CSK_gra_1127auto16933percentage2') ) { // USPS FCU - horiz bars 
		// insert the prod name container in the bar chart
		$('.bar_chart_cont').prepend('<h4 class="prod_name text-center"/>');
	}
	
}

function setupScrolling() {
	// this seems to be working well
	$('.prod_list').mCustomScrollbar({ 
		theme:"minimal-dark", 
		scrollInertia: 200, // 0 to disable, 950 seems default
		scrollButtons:{ enable: false } 
	});
	
	//console.log('ran setupScrolling');
}

	

jQuery(document).ready(function($) {
	console.log('04.26.19 - 0.3');
	
	// XXX - change to some BB-option for this
	// NEW - grab data-attr for layout-type (will be one-page-dots-nav for AZ central)
	// if (  $('.dt_widget').attr('data-layout-type') == 'one-page-top-cta'  ) {

	
	// 06.26.17 - leverage new MBG pkg option
	//if ( $('.dt_widget').attr('data-mbg-pkg') == '1' ) {
	if ( $('.dt_widget').attr('data-mbg-pkg') == 'True' ) {
		
			
		$mbg_savings 		= parseInt( decodUSRIComponent( $('.dt_widget').attr('data-agg-savings') ) );
		$mbg_savings_mils	= Math.floor( $mbg_savings / 1000000 ); 
		
		console.log(typeof $mbg_savings +' svgs: '+ $mbg_savings +', mils: '+ $mbg_savings_mils);

		// edit 05/11/18 for 3 variations on MBG savings statement
		$mbg_savings_message = "thousands of dollars";
		
		if ( $mbg_savings>=1000000 ) {
			$mbg_savings_message = "over a million dollars";
		}
		if ( $mbg_savings>=2000000 ) {
			$mbg_savings_message = "millions of dollars";
		}
		
		if ( $mbg_savings>100000 ) {
			
			$mbg_headline		= decodUSRIComponent( $('.dt_widget').attr('data-fi-name-abbr') ) + " saved members <span class='value-highlight'>" + $mbg_savings.formatMoney() + "</span> last year!<sup><a href='#footnote'>1</a></sup>";
			//$mbg_cta_label		= 'Check My Savings';
			$charter_number		= $('.dt_widget').attr('data-charter-num');
			$mbg_report_url		= 'https://www.datatrac.net/assets/reports/MBR'+ $charter_number +'.pdf';
			$mbg_disclaimer		= '<span class="mbg_disclaimer"><sup>1</sup>Based upon research conducted by the Credit Union National Association. <a href="'+$mbg_report_url+'" target="_blank">Click here for details</a> <a href="#headline" class="screen-reader-only">return to headline</a></span>';
			$mbg_chart_headline	= 'Award Winning Rates!';
			
			//$mbg_chart_text		= '<a href="'+$mbg_report_url+'" target="_blank">Click here</a> to see how ' + decodUSRIComponent( $('.dt_widget').attr('data-fi-name-abbr') )  + ' members saved <span class="value-highlight">over $'+ $mbg_savings_mils +' million last year!</span>';
			//$mbg_chart_text		= decodUSRIComponent( $('.dt_widget').attr('data-fi-name-abbr') )  + ' saved members <span class="value-highlight">over $'+ $mbg_savings_mils +' million last year!</span>' + ' <a href="'+$mbg_report_url+'" target="_blank" class="mbg_report_link">Click to see how</a>';
			
			// ed 05/11/18
			$mbg_chart_text		= decodUSRIComponent( $('.dt_widget').attr('data-fi-name-abbr') )  + ' saved members <span class="value-highlight">'+ $mbg_savings_message +' last year!</span>' + ' <a href="'+$mbg_report_url+'" target="_blank" class="mbg_report_link">Click to see how</a>';


			// - set the header to the MBG headline, add the MBG disclaimer to the footer
			$('.disclaimer').html('<div class="mbg_disclaimer"><sup>1</sup>Based upon research conducted by Datatrac and the Credit Union National Association. <a href="'+$mbg_report_url+'" target="_blank">Click here for details</a>. <a href="#headline" class="screen-reader-only">return to headline</a></div>');

			$('.prod_list li.first').removeClass('first');
			$('.prod_list').prepend('<li class="prod_li member_savings">Total Member Savings</li>');

			$('.member_savings').addClass('first')
					.attr('data-headline', encodUSRI($mbg_headline) )
					.attr('data-disclaimer', encodUSRI($mbg_disclaimer) )
					.attr('data-bars-rate-text', encodUSRI($mbg_chart_headline) )
					.attr('data-product-note', encodUSRI($mbg_chart_text) );
					//.attr('data-geo-button-text', encodUSRI($mbg_cta_label) );
			
		} // end if AggregateSavings > 1mil

	}
	// END leverage new MBG pkg option

	
	
	
	resizeProdsRow();
	
	setupScrolling();
	
	
	
	// maybe move the condition to here for stacked?
	buildBarChart();
	
	if ( $('.dt_widget').attr('data-auto-advance') == 'true' ) {
		$('.dt_widget').addClass('auto-advance');
		
		// ----- 03.21.19 ----
		$('.dt_widget').addClass('playing');
		
		// ----- 05.15.19 - leverage new BB option to show or hide this ----
		if ( $('.dt_widget').attr('data-show-play-pause')=='true' ) {
			$('#play_pause').removeClass('hide');
		}
		// --- 
		// the play/pause click setup is down in the start_slideshow 
		// and pause_slideshow functions to handle the changing
		// function of the button
		
		$('#play_pause').on('keydown', function(e){
			  // 04.26.19 - ADDING KEYDOWN EVENT FOR KEYBOARD USAGE
			  var code = e.which;
			  console.log('keydown on PAUSE. Code: ' + code );
			  // 13 = Return, 32 = Space
			  if ((code === 13) || (code === 32)) {
				  console.log('triggering mousedown');
				  $(this).trigger( "mousedown" );
			  }
		});
		
	} // end if auto advance true
	

	
	/*  -- NEW. FOR CERT BG FLOP --- */
	if ( $('.dt_widget').attr('data-certified') !== 'true' ) {
		$('.dt_widget').addClass('show-uncert-bg');
	}
	



	if ( $('.dt_widget').attr('data-layout-type') == 'one-page-top-cta' ) {
		$('.dt_widget').addClass('layout-one-page-top-cta');
	}
	
	if ( $('.dt_widget').attr('data-layout-type') == 'one-page-dots-nav' ) {
		$('.dt_widget').addClass('layout-one-page-dots-nav');
		// remove the dots nav if there's only one prod
		if ( $('.prod_list li').length==1 ) {
			$('.prod_list').hide();
		}
	}
	
	// 'stamp' layout type (just headlines and dots if > 1 prod)
	if ( $('.dt_widget').attr('data-layout-type') == 'headlines-dots' ) {
		$('.dt_widget').addClass('layout-headlines-dots');
		// remove the dots nav if there's only one prod
		if ( $('.prod_list li').length==1 ) {
			$('.prod_list').hide();
		}
	}
	
	// added 6/10 to make layout with JUST dots, no other mods
	if ( $('.dt_widget').attr('data-layout-type') == 'dots-nav' ) {
		$('.dt_widget').addClass('layout-dots-nav');
		// remove the dots nav if there's only one prod
		if ( $('.prod_list li').length==1 ) {
			$('.prod_list').hide();
		}
	}
	
	// NEW BB OPTIONS 5/27
	if ( $('.dt_widget').attr('data-geo-input-location') == 'above-products' ) {
		$('.dt_widget').addClass('geo-input-above-products');
	}
	if ( $('.dt_widget').attr('data-remove-geo-input') == 'True' ) {
		$('.dt_widget').addClass('remove-geo-input');
	}
	if ( $('.dt_widget').attr('data-watermark-bg') == 'True' ) {
		$('.dt_widget').addClass('watermark-bg');
	}
	if ( $('.dt_widget').attr('data-dots-prod-nav') == 'True' ) {
		$('.dt_widget').addClass('dots-prod-nav');
	}
	// END NEW BB OPTIONS 5/27
	
	// NEW 5/29
	if ( $('.dt_widget').attr('data-show-mortgage-rates') == 'True' ) {
		$('.dt_widget').addClass('show-mortgage-rates');
	}
	
	// NEW 6/5
	if ( $('.dt_widget').attr('data-horizontal-rate-bars') == 'True' ) {
		$('.dt_widget').addClass('horizontal-rate-bars');
	}
	
	// NEW 6/15
	if ( $('.dt_widget').attr('data-modal-disclaimer') == 'True' ) {
		$('.dt_widget').addClass('disclaimer-in-modal');
	}
	
	// NEW 8/11
	if ( $('.dt_widget').attr('data-hide-chart-headline') == 'True' ) {
		$('.dt_widget').addClass('hide-chart-headline');
	}
	if ( $('.dt_widget').attr('data-extlink-warning-show-short') == 'True' ) {
		$('body').addClass('extlink-warning-show-short');
	}
	
	


	// external link warning edited 7/24/15
	if ( $('.dt_widget').attr('data-extlink-warning-enable')=='True' ) {
	
		if ( $('.dt_widget').attr('data-extlink-warning-text') ) {
			var $extlink_warning_txt = decodUSRIComponent( '<span class="long">' + $('.dt_widget').attr('data-extlink-warning-text') + '</span>' );
		}
		if ( $('.dt_widget').attr('data-extlink-warning-text-short') ) {
			var $extlink_warning_txt_short = decodUSRIComponent( '<span class="short">' + $('.dt_widget').attr('data-extlink-warning-text-short') + '</span>' );
		}
		if ( $('.dt_widget').attr('data-color-primary-start') ) {
			var $color_primary_start = '#' + $('.dt_widget').attr('data-color-primary-start');
		}
		
		var $extlink_safe_domains = $('.dt_widget').attr('data-extlink-warning-domains');

		if ($extlink_safe_domains) {
			// create an array of SAFE urls that DONT need the warning popup
			var $arr_extlink_safe_domains = $extlink_safe_domains.split(",");
			//console.log( $extlink_safe_domains);
			$.each( $arr_extlink_safe_domains, function(i, val)  {
				var domain;
				if (val.indexOf("://") > -1) {
					domain = val.split('/')[2];
				}
				else {
					domain = val.split('/')[0];
				}
				domain = domain.split(':')[0];
				//console.log("URL #" + i + ": " + domain);
			});
			
		}

		//$('.dt_widget, .reveal-modal').on('click', 'a', function(e){
		$('body').on('click', 'a', function(e){
			
			var $link_href = $(this).attr('href');
			if ( $link_href==="#" || $link_href==="#footnote" || $link_href==="#headline" || typeof $link_href === 'undefined') { // eject if this is a js trigger like #stamp_modal_trigger, one of the superscript ADA links to the disclaimer/details, the ADA 'return to headline' link, or if it has no href at all
				return;			
			}
			if ($link_href.indexOf("://") > -1) {
				$link_href_root = $link_href.split('/')[2];
			}
			else {
				$link_href_root = $link_href.split('/')[0];
			}
			$link_href_root = $link_href_root.split(':')[0];
				
			//console.log( 'href of clicked link: ' + $link_href );
			//console.log( 'root domain of clicked link: ' + $link_href_root );
			
			if ( $.inArray( $link_href_root, $arr_extlink_safe_domains )>-1 ) {
				// safe url - let it thru
				//console.log('clicked url IS in the list of safe domains');
			} else {
				// clicked link's href is NOT in the array of safe URLs - trigger the warning
				//console.log('NOT in the safe list!');
				e.preventDefault();
				swal({
					title: "External link",
					//text: "You will not be able to recover this imaginary file!",
					text: $extlink_warning_txt + $extlink_warning_txt_short,
					type: "warning",
					html: true,
					showCancelButton: true,
					confirmButtonColor: $color_primary_start,
					confirmButtonText: "Continue",
					closeOnConfirm: true,
					imageSize: "40x40",
					cancelButtonText: "Cancel"
				}, 
				function(isConfirm){
					if (isConfirm) {
						//console.log('confirm clicked');
						window.open( $link_href, '_blank');
						//swal("Deleted!", "Your imaginary file has been deleted.", "success");
					} else {
						//console.log('cancel clicked');
						//swal("Cancelled", "Your imaginary file is safe :)", "error");
					}
				});	
			}
			
		});
		
		
	} // end check for data-extlink-warning-enable=='True'





	// HANDLING OF OPTIONS FOR BACKGROUND COLORS, IMAGES
	var $background_color_hex  = $('.dt_widget').attr('data-background-color-hex');
	var $background_color_rgba = $('.dt_widget').attr('data-background-color-rgba');
	var $content_uri           = $('.dt_widget').attr('data-content-uri');
	// data-content-uri="https://delivery-test.datatrac.net/content/"
	
	//console.log( $background_color_hex );
	//console.log( $background_color_rgba );
	//console.log( $content_uri );

	if ( $background_color_hex ) { // HEX BG col is specified (set )
		//console.log('hex yep');
		$('.dt_widget').css('background', '#'+ $background_color_hex );
		
		if ( $background_color_rgba && $('html').hasClass('rgba') ) { // RGBA BG col is specified AND rgba is supported (per Modernizr) 
			//console.log('rgba yep, modernizr rgba support');
			$('.dt_widget').css('background', $background_color_rgba );
		}
		
		if ( $background_color_rgba && $('html').hasClass('no-rgba') ) { // RGBA specified but no support (IE8)
			$('.dt_widget').css({ 'background': '#dadbdc' });
		}
		
	} else { // HEX BG col is NOT SET, show the certificate image BG
		//console.log('BG hex color ELSE cond');
		//$('.dt_widget').css( 'background', '#dadbdc' );
		$('.dt_widget').css( 'background', 'url(' + $content_uri + 'bg_corn_T_L.png) left top no-repeat, url(' + $content_uri + 'bg_corn_T_R.png) right top no-repeat, url(' + $content_uri + 'bg_corn_B_R.png) right bottom no-repeat, url(' + $content_uri + 'bg_corn_B_L.png) left bottom no-repeat, url(' + $content_uri + 'bg_side_T.png) left top repeat-x, url(' + $content_uri + 'bg_side_R.png) right top repeat-y, url(' + $content_uri + 'bg_side_B.png) left bottom  repeat-x, url(' + $content_uri + 'bg_side_L.png) left top repeat-y, url(' + $content_uri + 'bg_main_L.png) left top repeat-y, url(' + $content_uri + 'bg_main_R.png) right top repeat-y, #dadbdc' );
		
	} // END COLOR OPTIONS
	
	
	
	
	
	
	// NEW 8/10 apply BB CTA colors
	var $cta_bg_color  = $('.dt_widget').attr('data-cta-bg-color');
	if ($cta_bg_color) {
		$('.CTA').css( "background-color", "#" + $cta_bg_color );
	}
	var $cta_text_color  = $('.dt_widget').attr('data-cta-text-color');
	if ($cta_text_color) {
		$('.CTA').css( "color", "#" + $cta_text_color );
	}
	

	// CSK_gra_1393auto17547percentage1 = Fresno
	// CSK_gra_1972auto17330percentage1 = RedRocks
	// CSK_gra_1671auto20640percentage1 = Member's
	// CSK_gra_1671auto20640percentage5 = Member's Auto 
	if ( 
		$('.dt_widget').hasClass('layout-one-page-top-cta') || 
		$('body').hasClass('CSK_gra_1390auto17543percentage14') || // WestConsin 14
		$('.dt_widget').hasClass('geo-input-above-products') // BB option 6/12
	) { 
		// move the geo form up underneath the headline
		$('.geo_form_row').insertAfter( $('.row_msg_winner') );
	}
	
	// find, add identifying class to default prod if exists
	$('.prod_li').each( function(){
		
		// 04.05.19 - for CPM ADA work
		$(this).attr('aria-pressed','false');
		
		//$(this).attr('title', $(this).text() );
		if( $(this).attr('data-default') == 'true' ) {
			$(this).addClass('default');	
		}

		if ( 
			$('.dt_widget').hasClass('dots-prod-nav') || // new BB option 5/27
			$('.dt_widget').hasClass('layout-headlines-dots') || // add hover prod name for stamp layout dots
			$('.dt_widget').hasClass('layout-dots-nav') || // new dots layout
			$('.dt_widget').hasClass('layout-one-page-dots-nav') || // old dots layout
			$('body').hasClass('CSK_gra_1381auto21911percentage2') // Premier Am tiny
			) {  
				$(this).addClass('has-tip tip-top').attr('title', $(this).text() ).attr('data-tooltip','').attr('aria-haspopup',true);
		}
	
	}).filter(":odd").addClass('even');
	
	// 05/14/18 - for tabbable nav thru prods, make main CTA span clickable 
	$('.prod_li, .CTA').attr({ tabindex: 0, role: "button" }).on('keydown', function(e){
		var keyCode = e.which;
		// 13 = Return, 32 = Space
		console.log('keydown: ' + keyCode );
		if ((keyCode === 13) || (keyCode === 32)) {
			console.log('cond true');
			$(this).click();
		}
	});

	
	// start the onclick for active product
	$('.prod_li').on('click', function(){
		var $this = $(this);
		var $pct_value = $this.find('.rate_val').text();
		var $prod_name = $this.text();
		
		//need to grab the per-product or per-class info from the data-atributes of each LI
		var $rate_fi = $this.attr('data-rate-fi');
        if ($rate_fi != null) $rate_fi = $rate_fi.replace("<sup>1</sup>", "<sup><a href='#footnote'>1</a></sup>");
		
		var $rate_mkt = $this.attr('data-rate-mkt');
        if ($rate_mkt != null) $rate_mkt = $rate_mkt.replace("<sup>1</sup>", "<sup><a href='#footnote'>1</a></sup>");

        var $rate_teaser = $this.attr('data-teaser-rate');
        var $headline = $this.attr('data-headline');
        if ($headline != null) $headline = decodUSRIComponent($headline).replace("<sup>1</sup>", "<sup><a href='#footnote'>1</a></sup>");

		var $bars_rate_text = decodUSRIComponent( $this.attr('data-bars-rate-text') );
		var $disclaimer     = decodUSRIComponent( $this.attr('data-disclaimer') );
		
		var $fi_name        = decodUSRIComponent( $this.attr('data-fi-name') );
		var $fi_name_abbr   = decodUSRIComponent( $('.dt_widget').attr('data-fi-name-abbr') );
		var $mkt_name       = decodUSRIComponent( $this.attr('data-mkt-name') );
		
		// 07.17.19 - for KY Telco FCU / Transcend CU - change market name
		if ( $this.attr('data-fi-name')=="Transcend%20CU" ) {
			$mkt_name       = $mkt_name.replace(/Louisville Metro/g, 'Louisville Competitors');
			$disclaimer     = $disclaimer.replace(/Louisville Metro/g, 'Louisville Competitors');
		}
		var $msg_product    = decodUSRIComponent( $this.attr('data-disclosure-product') );
		var $msg_class      = decodUSRIComponent( $this.attr('data-disclosure-class') );
		var $msg_client     = decodUSRIComponent( $this.attr('data-disclosure-client') );
		var $prod_type      = $this.attr('data-prod-type');
		var $prod_class     = $this.attr('data-product-class');
		var $prod_id        = $this.attr('data-product-id');
		var $prod_amount    = $this.attr('data-amount');
		var $prod_note      = decodUSRIComponent( $this.attr('data-product-note') );

		var $data_disclaimer_link_text = $this.attr('data-disclaimer-link-text');
		if ($data_disclaimer_link_text == null) $data_disclaimer_link_text = ""; else $data_disclaimer_link_text = $.trim(decodUSRIComponent($data_disclaimer_link_text));
		var $data_disclaimer_link_url = $this.attr('data-disclaimer-link-url');
		if ($data_disclaimer_link_url == null) $data_disclaimer_link_url = ""; else $data_disclaimer_link_url = $.trim(decodUSRIComponent($data_disclaimer_link_url));
		var $data_disclaimer_link_target = $this.attr('data-disclaimer-link-target');
		if ($data_disclaimer_link_target == null) $data_disclaimer_link_target = ""; else $data_disclaimer_link_target = $.trim(decodUSRIComponent($data_disclaimer_link_target));
		var $data_geo_button_text = $this.attr('data-geo-button-text');
		
		// MBG option
		if ( $this.hasClass('member_savings') ) {
			$('.CTA').css('visibility','hidden');
			$('.bar_chart_cont').removeClass('type_loan type_deposit').addClass('mbg_widget');
			$('body').addClass('mbg_content_active');
		} else {
			$('.CTA').css('visibility','visible');
			$('.bar_chart_cont').removeClass('mbg_widget');
			$('body').removeClass('mbg_content_active');
		}
		
		if ($data_geo_button_text == null) $data_geo_button_text = ""; else $data_geo_button_text = $.trim(decodUSRIComponent($data_geo_button_text));
		if ($data_geo_button_text != "") {
		    $("#CTAButton").html($data_geo_button_text);
		} else {
		    $("#CTAButton").html($('.dt_widget').attr('data-geo-button-text'));
		}
		

		var $data_disclaimer_long = $this.attr('data-disclaimer-long');
		if ($data_disclaimer_long == null) $data_disclaimer_long = ""; else $data_disclaimer_long = $.trim(decodUSRIComponent($data_disclaimer_long));

		RateNet.selectedProductType = $prod_class;
		RateNet.selectedProductID = $prod_id;
		RateNet.selectedAmount = $prod_amount;



		/* ------------- CONTENT -------------- */
		
		// populate the headline with the new content, re-assess the size
		$('.msg-winner').html( $headline ).textfill({
			//minFontPixels: 20,
			maxFontPixels: 120,	
			innerTag: 'div',
			//debug: true	,
			success: function() {
				//console.log(".msg-winner text resize success")
			},
			fail: function() {
				//console.log(".msg-winner text resize fail")
			},
			complete: function() {
				// "Called when all elements are done" ALL?
				// now do the padding-top calculation?? maybe better to use some display table-cell stuff or something - progressive
				//$('.msg-winner').css('padding-top', ( $('.row_msg_winner').outerHeight() - $('.msg-winner').innerHeight() ) / 2.3 );
			}			
		});	
		
		
		// 1/15/16 -- apply valuetext color BB option
		// .value-highlight text color set in the CSS chunk in template,
		// override it here if option for valuetext color is set in BB
		var $valuetext_color  = $('.dt_widget').attr('data-valuetext-color');

		if ( $valuetext_color ) {
			$('.msg-winner .value-highlight').css('color', '#'+ $valuetext_color);
		}
		
		
					  // widget-wide options XXX - move these elsewhere so they're not loaded every new prod??
		              //console.log($data_disclaimer_link_text);
		              var $disclaimer_link_txt = $data_disclaimer_link_text != "" ? $data_disclaimer_link_text : decodUSRIComponent($('.dt_widget').attr('data-disclaimer-link-text'));
					  //console.log($disclaimer_link_txt);
					  if ($disclaimer_link_txt == null || $disclaimer_link_txt == "") { // !$('.dt_widget').attr('data-disclaimer-link-text') ) {
						  $disclaimer_link_txt = 'details';
					  }
					  //console.log($disclaimer_link_txt);
					  var $disclaimer_link_url = $data_disclaimer_link_url != "" ? $data_disclaimer_link_url : decodUSRIComponent($('.dt_widget').attr('data-disclaimer-link-url'));
					  //console.log($disclaimer_link_url);
					  if ($disclaimer_link_url == null || $disclaimer_link_url == "") { // !$('.dt_widget').attr('data-disclaimer-link-url') ) {
						  $disclaimer_link_url = '#';
					  }

					  // change the content in the bottom disclaimer
					  $('.disclaimer').html( $disclaimer + '. <a href="' + $disclaimer_link_url + '" class="modal_trigger" data-reveal-id="modal_details">' + $disclaimer_link_txt + '</a>' + ' <a href="#headline" class="screen-reader-only">return to headline</a>');	
					  
					  if ( $disclaimer_link_url=="#" ) {
						  console.log($disclaimer_link_url);
						  
						  // wire-up the modal trigger to the modal - seems to need this
						  $('.disclaimer').on('click', 'a.modal_trigger', function(){
							  $('#modal_details').foundation('reveal', 'open');
						  });
					  } else {
						  //console.log('else cond - line 637');
						  // remove the data-reveal-id??
						  $('a.modal_trigger').attr('target', '_blank');
						  $('#stamp_modal_trigger').after(' <a class="external-disclosure-link" target="_blank" href="'+$disclaimer_link_url+'">'+$disclaimer_link_txt+'</a>');
						  $('.dt_widget').addClass('custom_disclosure_url');
					  }
					  
					  
					  $('.disclosure-product').html( $msg_product );
					  $('.disclosure-class').html( $msg_class );
					  $('.disclosure-client').html( $msg_client );	



		/* ------------- VISUAL FX -------------- */
	  
		/*
		
		1. make clicked item active
		   a. remove active from active sibling
		   b. slidUSp chart **
	  
		2. move chart below clicked item
		   a. do tall/short labels on bars
		   b. slideDown chart **
		   
		3. add 'active' to chart - will animate the bars **no timing - use delay for next events
		
		4. populate, fadeIn .bars_rate_val **
		5. populate, fadeIn .fi_name , .mkt_name **
		6. populate, fadeIn .bar_left .bar_rate_val, .bar_right .bar_rate_val **
		7. scrollTo the list to active one
		   
		   
		*/
		
		
		// move the active class for coloring, etc
		//$('.prod_li.active').removeClass('active');
		$this.addClass('active').attr('aria-pressed','true');
			  
			  
		if ( $('body').hasClass('stacked') ) {
	  
				// remove the scroller
				//$('.prod_list').mCustomScrollbar("destroy");
	  
				/*$('.bars_rate_val, .fi_name, .mkt_name, .bar_rate_val').fadeOut(200, function(){
					console.log('rate bar text fadeOut complete');
				});*/
				
				
				$('.bars_rate_val, .fi_name, .mkt_name, .bar_rate_val, .bar_teaser_rate_val').fadeOut(200, function(){
					//console.log('rate bar text fadeOut complete');
				}).promise().done( function(){
					//console.log('rate bar text fadeOut complete');
				});
				
				if ( 
					  $('body').hasClass('CSK_gra_1127auto16933percentage2') || // USPS FCU - horiz bars
					  $('.dt_widget').hasClass('horizontal-rate-bars')
					) { 
					// populate the prod_name label with the prod name
					$('.prod_name').fadeOut(200, function(){ });
				}
				
				$('.prod_list').mCustomScrollbar("disable");
				
				
				//move the bars assembly after the clicked LI, use delay to wait for the active class toggle to complete CSS anim.
				$('.bar_chart_cont').delay(300).slidUSp( 300, "easeOutSine", function() {
					
						//console.log('barchart slidUSp complete');
						
						$this.siblings('.prod_li.active').removeClass('active').attr('aria-pressed','false');
		  
						// $this below referring to the clicked LI
						// move the barchart after the clicked LI, remove active to make rate bars 0 height (CSS), remove has_prod_note
						$this.after( $('.bar_chart_cont').removeClass('active has_prod_note') );
						
						$('.dt_widget .prod_note').remove();
						if ( $prod_note != "" ) { // add has_prod_note if present
							$('.bar_chart_cont').addClass('has_prod_note');
							$('.dt_widget .bars_rate_val').after('<div class="prod_note">' + $prod_note + '</div>');
						}
						
						
						// do tall/short on bars
						if ( $prod_type=='deposit' ) {
						  $('.products').removeClass('type_loan').addClass('type_deposit');
						  
						  $('.bar_left').addClass('tall');
						  $('.bar_right').addClass('short');
						}
						if ( $prod_type=='loan' ) {
						  $('.products').removeClass('type_deposit').addClass('type_loan');
						  
						  $('.bar_left').removeClass('tall');
						  $('.bar_right').removeClass('short');
						}
	  
						// slideDown the barchart
						$('.bar_chart_cont').slideDown( 700, function(){
							
									//console.log('barchart slideDown complete');
									
									$('.prod_list').mCustomScrollbar("update");
									
									//$('.prod_list').mCustomScrollbar("scrollTo", $('.prod_li.active'), { scrollEasing:"easeOut", scrollInertia: 800 });
									$('.prod_list').mCustomScrollbar("scrollTo", $('.prod_li.active'), { scrollEasing:"easeOut", scrollInertia: 800 });

									
									
									// add active class to barchart - will trigger CSS anim of the rate bars
									$('.bar_chart_cont').addClass('active');						  
									
									
									// need a delay to wait for bars to animate in CSS (.5s)
									setTimeout( 
										function(){ 
																					  
											  // the large value message in the bar chart	
											  $('.bars_rate_val').html( $bars_rate_text ).fadeIn( 700, function(){
												  
														  //console.log('.bars_rate_val fadeIn complete');

														  if ( 
														        $('body').hasClass('CSK_gra_1127auto16933percentage2') || // USPS FCU - horiz bars
																$('.dt_widget').hasClass('horizontal-rate-bars')
															  ) { 
															  
														  	  // populate the prod_name label with the prod name
															  $('.prod_name').text( $prod_name ).attr('aria-label', $prod_name+' rates').delay(200).fadeIn(400);
														  }
														  
														  // append and populate the bar labels with the FI name and market name
														  $('.fi_name').html($fi_name_abbr).delay(200).fadeIn(400);
														  $('.mkt_name').html($mkt_name).delay(200).fadeIn(400);
														  
														  // the rate labels on the ind bars in the bar chart
														  if ( $prod_class && $prod_class != "mortgage" || $('.dt_widget').attr('data-show-mortgage-rates') == 'True' ) { // not mortgage prod, put * after rate
														
															$('.bar_left .bar_rate_val').html($rate_fi).delay(200).fadeIn(400);
															$('.bar_left .bar_teaser_rate_val').html($rate_teaser).delay(200).fadeIn(400);
															$('.bar_right .bar_rate_val').html($rate_mkt).delay(200).fadeIn(400, function(){
																//console.log('NOT mortgage prod - .bar_rate_val fadeIn complete');
															});
														  
														  } else { // for mortgage, no rates, just bar labels
														
															// needs to leverage new BB option
															$('.bar_left .bar_rate_val').text("").delay(200).fadeIn(400);
															$('.bar_left .bar_teaser_rate_val').text("").delay(200).fadeIn(400);
															$('.bar_right .bar_rate_val').text("").delay(200).fadeIn(400, function(){
																//console.log('IS mortgage prod - .bar_rate_val fadeIn complete');
															});
														  
														  } // end ind bars text, FX
												  
												  		  $('.bar_chart_cont').attr('role','alert');
												  
											  });
											
											
											  
	  
										}, 500 
									);
									
									
						});
									
				});
				
		} // end if stacked cond







		if ( $('body').hasClass('horiz') ) {
					
				  $this.siblings('.prod_li.active').removeClass('active').attr('aria-pressed','false');
					
				  // add classes to the bars if the prod type is savings - make the left bar taller, right shorter
				  if ( $prod_type=='deposit' ) {
					$('.bar_left').addClass('tall');
					$('.bar_right').addClass('short');
					
					$('.bar_chart_cont').removeClass('type_loan').addClass('type_deposit');
				  }
				  if ( $prod_type=='loan' ) {
					$('.bar_left').removeClass('tall');
					$('.bar_right').removeClass('short');
					
					$('.bar_chart_cont').removeClass('type_deposit').addClass('type_loan');
				  }

				  // populate the div .prod_name inside the chart with the selected prod name
				  $('.prod_name').text( $prod_name ).attr('aria-label', $prod_name+' rates');
  
				  // dont need to move chart or re-set scrolling, just scroll the active prod to top
				  //$scrollTarget = $('.prod_li.active').index() * $('.prod_li.active').outerHeight()+'px';
				  //$('.prod_list').slimScroll({ scrollTo: $scrollTarget, animate: true });
				  //try jquery custom scroll
				  $('.prod_list').mCustomScrollbar("scrollTo", $('.prod_li.active'), { scrollEasing:"easeOut" });
				
				
				  // ACTUALLY MOVE THE BAR CHART
				  // I usually use a setTimeout as a hack to fix some timing issue - not sure why I did it below
				  // toggling 'active' class on the barchart animates the bars inside
				  var $bar_chart_cont = $('.bar_chart_cont');
				  
				  // ADAM 01/12/16 
				  $bar_chart_cont.removeClass('has_prod_note');
				  $('.dt_widget .prod_note').remove(); // remove the prod note element
				  if ( $prod_note != "" ) { // add has_prod_note if present
					  $('.bar_chart_cont').addClass('has_prod_note');
					  $('.dt_widget .bars_rate_val').after('<div class="prod_note">' + $prod_note + '</div>');
				  }


				  if ( $bar_chart_cont.hasClass('active') ) {
					  $bar_chart_cont.removeClass('active');
					  setTimeout( 
						  function(){ 
							  $bar_chart_cont.addClass('active'); 
						  }, 800 
					  );
				  } else {
					  $('.bar_chart_cont').addClass('active');
				  }

				  if ( $('.dt_widget').hasClass('layout-dots-nav') ) {
					  $('.bars_rate_val')
						  .fadeTo( 100, 0.0, function(){
							  $(this).html( $bars_rate_text ).delay(1300).fadeTo(300, 1.0);
						  });
				  } else {
					  // the large value message in the bar chart	
					  $('.bars_rate_val')
						  .fadeOut( 200, function(){
							  $(this).html( $bars_rate_text ).delay(800).fadeIn(600);
						  });
				  }
				
				  if ( $('.dt_widget').hasClass('layout-one-page-dots-nav') || $('.dt_widget').hasClass('layout-dots-nav') ) { // quicker timing
						  // append and populate the bar labels with the FI name and market name
						  $('.fi_name')
							  .fadeTo(10, 0.0, function(){
								  $(this).html($fi_name_abbr).delay(1200).fadeTo(300, 1.0);
							  });
						  $('.mkt_name')
							  .fadeTo(10, 0.0, function(){
								  $(this).html($mkt_name).delay(1200).fadeTo(300, 1.0);
							  });
				  } else {
						  // append and populate the bar labels with the FI name and market name
						  $('.fi_name')
							  .fadeOut(200, function(){
								  $(this).html($fi_name_abbr).delay(900).fadeIn(400);
							  });
						  $('.mkt_name')
							  .fadeOut(200, function(){
								  $(this).html($mkt_name).delay(900).fadeIn(400);
							  });
				  }
				  
						
				
				  // the rate labels on the ind bars in the bar chart
				  if ( $prod_class && $prod_class != "mortgage" ) { // not mortgage prod, put * after rate
				
					if ( $('.dt_widget').hasClass('layout-one-page-dots-nav') || $('.dt_widget').hasClass('layout-dots-nav') ) {
						$('.bar_left .bar_rate_val')
							.fadeTo(200, 0.0, function(){
								$(this).html($rate_fi).delay(1000).fadeTo(300, 1.0);
							});
						$('.bar_left .bar_teaser_rate_val')
							.fadeTo(200, 0.0, function(){
								$(this).html($rate_teaser).delay(1000).fadeTo(300, 1.0);
							});
						$('.bar_right .bar_rate_val')
							.fadeTo(200, 0.0, function(){
								$(this).html($rate_mkt).delay(1000).fadeTo(300, 1.0);
							});
					} else {
						$('.bar_left .bar_rate_val')
							.fadeOut(200, function(){
								$(this).html($rate_fi).delay(900).fadeIn(400);
							});
						$('.bar_left .bar_teaser_rate_val')
							.fadeOut(200, function(){
								$(this).html($rate_teaser).delay(900).fadeIn(400);
							});
						$('.bar_right .bar_rate_val')
							.fadeOut(200, function(){
								$(this).html($rate_mkt).delay(900).fadeIn(400);
							});
					}
				  
				  } else { // for mortgage, no rates, just bar labels
				
					// needs to leverage new BB option
					$('.bar_left .bar_rate_val')
						.fadeOut(200, function(){
							if ( $('.dt_widget').hasClass('show-mortgage-rates') ) {
								$(this).html($rate_fi).delay(900).fadeIn(400);
							} else {
								$(this).text("").delay(900).fadeIn(400);
							}
							
						});
					$('.bar_left .bar_teaser_rate_val')
						.fadeOut(200, function(){
							if ( $('.dt_widget').hasClass('show-mortgage-rates') ) {
								$(this).html($rate_teaser).delay(900).fadeIn(400);
							} else {
								$(this).text("").delay(900).fadeIn(400);
							}
							
						});
					$('.bar_right .bar_rate_val')
						.fadeOut(200, function(){
							if ( $('.dt_widget').hasClass('show-mortgage-rates') ) {
								$(this).html($rate_mkt).delay(900).fadeIn(400);
							} else {
								$(this).text("").delay(900).fadeIn(400);
							}
						});
				  
				  } // end ind bars text, FX
				  
				  
		} // end if horiz cond
		
		
		// For the 'stamp' type layout - headlines and dots if > 1 prod
		// truncate the dislcaimer under geo form into just ©Datatrac YYYY. *details
		// and move the disclaimer into a modal
		if ( 
			$('.dt_widget').attr('data-layout-type') == 'headlines-dots' ||  // for stamp type layout 5/27
			$('.dt_widget').hasClass('layout-dots-nav') || // needed for Primeway, so leverage layout - switch to BB option 'dislcaimer in modal'
			$('.dt_widget').attr('data-modal-disclaimer') == 'True' || // new BB option
			$('body').hasClass('CSK_gra_1241auto17504percentage1') || // AZ Fed 6/12
			//$('body').hasClass('CSK_gra_1241auto17504percentage2') || // AZ Fed MODIFIED 6/15
			$('body').hasClass('CSK_gra_1837auto17714percentage1') || // Hughes Homepage Marquee 6/8
			$('body').hasClass('CSK_gra_1837auto17714percentage3') || // Hughes Homepage Marquee ALT COLOR - 6/11
			$('body').hasClass('CSK_gra_1381auto21911percentage2') // Premier Am tiny
		) {  
			  
			  //console.log('line 987');
			
			  $('#stamp_copyright_link').remove();

		      // wire-up the modal trigger to the modal - seems to need this
			  if ($disclaimer_link_url == "#") {
			      $('.disclaimer').on('click', 'a.modal_trigger', function () {
			          $('#modal_details').foundation('reveal', 'open');
			      });
			  }
			  
			  $('.modal_inner .disclaimer_headlines_dots').remove();
			  
			  $('.geo_form_submit').after('<div id="stamp_copyright_link">&copy;<a href="https://datatrac.net" target="_blank" class="link_dt_website">Datatrac</a> ' + new Date().getFullYear() + '. <a href="#" id="stamp_modal_trigger" class="link_details" data-reveal-id="modal_details"><sup>1</sup>details</a></div>');

			  //$('.geo_form_submit').after('<div id="stamp_copyright_link">&copy;<a href="https://datatrac.net" target="_blank" class="link_dt_website">Datatrac</a> ' + new Date().getFullYear() + '. <a href="#" id="stamp_modal_trigger" class="link_details" data-reveal-id="modal_details"><sup><a href="#footnote">1</a></sup>details</a></div>');
			  
			  //$('.footer_right_side').on('click', '#stamp_modal_trigger', function(){
			  $('.dt_widget').on('click', '#stamp_modal_trigger', function(){
					$('#modal_details').foundation('reveal', 'open');
					
					pause_slideshow();
					
					$('#modal_details .close-reveal-modal, #modal_details .trigger-close-reveal-modal').on('click',function(){
						start_slideshow();
					});
					return false;
			  });		
			  
			  
			  if ( $disclaimer_link_url=="#" ) {
				  // do the normal - the 3 default disclaimers in the modal
			      $('.modal_inner hr, .disclaimer_long').remove();
			      $('.disclosure-product').before('<div class="disclaimer_headlines_dots">' + $disclaimer + ($data_disclaimer_long == '' ? '' : '<hr><div class="disclaimer_long">' + $data_disclaimer_long + '</div>') + '<hr><h3>Disclosures:</h3></div>');
			  } else {
				  // put the link to the external disclosures in the modal, no 3 default disclaimers
				  $('.modal_inner h3').after( '<div class="disclaimer_headlines_dots">' + $disclaimer + '</div>' );
				  $('.modal_inner .disclosure-product, .modal_inner .disclosure-class, .modal_inner .disclosure-client').remove();
				  $('.modal_inner hr, .external-disclosure-link, .disclaimer_long').remove();
				  $('.modal_inner .disclaimer_headlines_dots').after(($data_disclaimer_long == '' ? '' : '<hr><div class="disclaimer_long">' + $data_disclaimer_long + '</div>') + '<hr><a class="external-disclosure-link" target="_blank" href="' + $disclaimer_link_url + '">' + $disclaimer_link_txt + '</a><hr>');
				  //console.log('line 1026');
				  $('#stamp_modal_trigger').after(' <a class="external-disclosure-link" target="_blank" href="'+$disclaimer_link_url+'">'+$disclaimer_link_txt+'</a>');
				  $('.dt_widget').addClass('custom_disclosure_url');
			  }
		} // end if the stamp, etc
		
		
		
		
		// 03.21.19 - for RBFCU 
		// XXXX - ADVISING THAT WE NOT DO THIS 
		// PROBLEMATIC AND WHAT IF USER DOESNT WANT IT TO START AGAIN??
		/*
		// on touchscreens, tapping a dot triggers hover on dt_widget
		// which prevents it from ever starting again
		console.log('XX line ~1038 - v2 -------------- ');
		
		window.addEventListener('touchstart', function onFirstTouch() {
		  console.log('XX tap happened');
		  $('.dt_widget').addClass('was_touched');
			
		  // we only need to know once that a human touched the screen, so we can stop listening now
  		  window.removeEventListener('touchstart', onFirstTouch, false);
		}, false);
						
		if ( $('html').hasClass('touch') && $('.dt_widget').hasClass('auto-advance') ) {
			console.log('XX we\'re on a touch device, auto advance is ON');
			
			// put the delay function in a var so that we can clear it
			var touchPlayDelay;
			function touchPlayDelayFunction() {
			  touchPlayDelay = setTimeout(function(){ 
			    console.log('XX timeout ended - now remove the hover to get it playing again');
			    if ( !$('#modal_details').hasClass('open') ) { // modal is not open
					console.log('XX modal NOT open, starting slideshow');
					start_slideshow();
				} // end modal NOT open
			  }, 6000);
			}

			function clearTouchPlayDelay() {
			  console.log('XX clear interval triggered');
			  clearTimeout(touchPlayDelay);
			}
			
			// clear any timeouts from recent clicks
			clearTouchPlayDelay();
			// restart the delay until start again
			touchPlayDelayFunction();
			
		} // end if touch
		*/
		
		
		
	}); // end onclick func

















	// HACKY WAY OF ACTIVATING THE FIRST PRODUCT. PROB A BETTER WAY 
	// OF DOING THIS. ALSO, THE TIMEOUT IS A HACK THERE TO 'WAIT' UNTIL 
	// EVERYTHING HAS RENDERED

	
	
	setTimeout( 
		function(){ 
			// click default prod if exists
			if ( $('.prod_li.default').length ) {
				//console.log('line 966');
				$('.prod_li.default').click();
			} else {
				//console.log('line 969');
				$('.prod_li.first').click(); 
			}
		}, 1000
	);
	
	
	
	
	
	
	if ( $('.prod_li').length>1 ) { // only if there are mult prods
	
				
			  // 09.11.17 - set up func to 'cycle X times'
		
			  // FUNCTION TO SET UP AUTO-ADVANCE AND PAUSE/START OF AUTO-ADVANCE
			  function next_prod() {
				  console.log('NEXT_PROD ran');
				  
				  // advance to the next product - click the one after 'active' one??
				  if ( $('body').hasClass('stacked') ) {
					  if ( $('.prod_li.active').next().is(':last-child') ) {
							  
							  //click the first one
							  $('.prod_li').first().click();
							  //console.log('next_prod - if cond');
						  
					  } else {
						  //next
						  $('.prod_li.active').next().next().click();
						  //console.log('next_prod - else cond');
					  }
					  
				  } else {
					  if ( $('.prod_li.active').is(':last-child') ) {
						  //click the first one
						  $('.prod_li').first().click();
					  } else {
						  //next
						  $('.prod_li.active').next().click();
					  }
				  }
			  } // end func next_prod()
		
		
			  function start_slideshow() {
				  
				  console.log('----- start_slideshow called -----');
				  
				  // change the play/pause button immediately, no delay
				  if ( $('.dt_widget').hasClass('auto-advance') ) {
					  if ( !$('#modal_details').hasClass('open') ) { 
						  $('.dt_widget').addClass('playing');
						  $('#play_pause').text('pause rate updates').attr('title','click to pause rate updates').off('mousedown').on('mousedown', function(){
							  console.log('PAUSE clicked');
							  $('.dt_widget').addClass('button_paused');
							  $('.dt_widget').removeClass('button_playing');
							  pause_slideshow();
						  });
					  }
				  }
				  
				  
				  
				  // UGLY BUT BETTER - get into the jQ quUSe
				  $('.products').fadeTo( 6000, 1.0, 
				  		function(){
					      if ( !$('#modal_details').hasClass('open') ) { // modal is not open
						  	  console.log('modal not open - doing next_prod');
							  next_prod();
						  }
						  // slideshow?
						  if ( $('.dt_widget').hasClass('auto-advance') ) {
							  //if ( !$('html').is(":hover") ) { // mouse is not in widget
							  // 03.21.19 
							  console.log('widget has class auto-advance');
							  if ( !$('#modal_details').hasClass('open') ) { // modal is not open
								  console.log('modal not open --- triggering start_slideshow');
								  start_slideshow();
							  }
							  //} else {
							  	  //console.log('line 1217 - else cond - dt_widget must have class PLAYING');
							  //}
						  }
					    });// end of the function to run after the 'delay'
				  
			  } // end start_slideshow func
		
		
			  function pause_slideshow() {
				  console.log('----- pause_slideshow called -----');
				  $('.products').stop(true, false);
				  $('.dt_widget').removeClass('playing');
				  $('#play_pause').text('play rate updates').attr('title','click to play rate updates').off('mousedown').on('mousedown', function(){
					  console.log('PLAY clicked - running next_prod() and start_slideshow()');
					  $('.dt_widget').removeClass('button_paused');
					  $('.dt_widget').addClass('button_playing');
					  next_prod();
					  start_slideshow();
				  });
			  }
			  
			  
				  
			  if ( $('.dt_widget').hasClass('auto-advance') ) {

				  $('.dt_widget').on({
						mouseenter: function() {
						  console.log('widget mouseenter');
						  // stop the prod slideshow
						  pause_slideshow();
						  //$('.dt_widget').removeClass('playing');
						}, 
						mouseleave: function() {
						  // 03.21.19 - uncommented console log below
						  console.log('widget mouseleave');
						  // start prod slideshow
						  //start_slideshow();
						  if ( $('.dt_widget').hasClass('auto-advance') ) {
							  if ( !$('#modal_details').hasClass('open') ) { // modal is not open
							     
								  console.log('line 1243 - widget set to auto-advance, modal not open');
								  if ( !$('.dt_widget').hasClass('playing') ) {
									  console.log('widget doesnt have class PLAYING');
									  if ( $('.dt_widget').hasClass('button_paused') ) {
										  console.log('widget has class BUTTON_PAUSED - keeping it paused');
									  }
									  if ( !$('.dt_widget').hasClass('button_paused') ) {
										  console.log('widget doesnt have class BUTTON_PAUSED - running start_slidshow');
										  start_slideshow();
									  }
									  //start_slideshow();
									  //$('.dt_widget').addClass('playing');
								  }
//								  if ( $('.dt_widget').hasClass('playing') ) {
//									  console.log('widget HAS class PLAYING');
//							      } else {
//									  console.log('widget doesnt have class PLAYING');
//								  }
							  }
						  }
						}
				  });
				  
				  start_slideshow();
				  
			  }
				
	} else {
		
		$('body').addClass('single-prod');
	
	} // end check for more than one prod
	
	
	
	
	// END FUNCTION TO SET UP AUTO-ADVANCE AND PAUSE/START OF AUTO-ADVANCE
		
	$(document).on('opened.fndtn.reveal', '[data-reveal]', function () {
		
		  $('.trigger-close-reveal-modal').on('click', function(){
			//$('#modal_details').foundation('reveal', 'close');
			  $('.close-reveal-modal').click();
			  console.log('bottom close link clicked');
		  });
		  
		  var modal = $(this);
		  
		  //pause_slideshow();

		  $('.modal_inner').mCustomScrollbar({ 
			 theme:"minimal-dark", 
			 scrollInertia: 200, // 0 to disable, 950 seems default
			 //theme:"light", 
			 alwaysShowScrollbar: 2,
			 scrollButtons:{ enable: false } 
		  });
		  
	});


		
	if ( 
		$('.dt_widget').hasClass('watermark-bg') || // new BB option 5/27
		$('body').hasClass('CSK_gra_1381auto21911percentage2') || // Premier Am tiny
		$('body').hasClass('CSK_gra_1452auto16850percentage1') || // AZ central
		$('body').hasClass('CSK_gra_1241auto17504percentage1') || // AZ Fed Autos
		$('body').hasClass('CSK_gra_1127auto16933percentage2') || // USPS FCU 
		$('body').hasClass('CSK_gra_1127auto16933percentage4') || // USPCU small
		$('body').hasClass('CSK_gra_1390auto17543percentage14') || // WestConsin
		$('body').hasClass('CSK_gra_1390auto17543percentage15') || // WestConsin
		$('body').hasClass('CSK_gra_1390auto17543percentage16')    // WestConsin
	) { // AZ Central and AZ Fed, postal service
		//console.log('gotcha');
		// grab the GRA seal and insert it before .certification-bg, add a class so that we can position it, etc
		$('.GRA-seal img').insertBefore('.certification-bg').addClass('watermark-GRA');
		$('.GRA-slogan').hide();	
	}
	
	// 8/21 for CEFCU to have the watermark over the chart BG instead of text
	if ( $('body').hasClass('CSK_gra_1365auto16982percentage4') ) { 
		$('.watermark-GRA').prependTo('.bar_chart_cont');
	}
	
	// remove scrolling
	if ( $('body').hasClass('CSK_gra_1127auto16933percentage2') ) { // USPS FCU - horiz bars
		$('.prod_list').mCustomScrollbar('destroy');
	}
	
	// make the bar chart insert before the prods not after
	if ( $('body').hasClass('CSK_gra_1127auto16933percentage2') ) { // USPS FCU - horiz bars
		$('.bar_chart_cont').insertBefore('.products');
	}
	
	// WORK ON AZ CENTRAL DOTS-NAV VERSION
	if ( 
		$('.dt_widget').hasClass('dots-prod-nav') || 
		$('.dt_widget').hasClass('layout-one-page-dots-nav') || // 6/8 - not going to optionize the dots-nav, just use a layout type (one-page-dots-nav)
		$('.dt_widget').hasClass('layout-dots-nav') || // 6/10 - new dots nav layout w/o the extras on the above
		$('body').hasClass('CSK_gra_1381auto21911percentage2') || // Premier Am tiny
		$('body').hasClass('CSK_gra_1452auto16850percentage1') || // AZ Central
		$('body').hasClass('CSK_gra_1127auto16933percentage4') || // USPCU small
		$('body').hasClass('CSK_gra_1390auto17543percentage14') || // WestConsin
		$('body').hasClass('CSK_gra_1390auto17543percentage15') || // WestConsin
		$('body').hasClass('CSK_gra_1390auto17543percentage16')    // WestConsin
	) {  // AZ Central
		// make the bar chart insert before the prods not after
		$('.bar_chart_cont').insertBefore('.products');
		$('.prod_list').mCustomScrollbar('destroy');
		
	}	
		

}); // end on docready


$(window).load(function() {
  $('.loading-overlay').fadeOut(1000, function(){
    $('.loading-overlay').css('height', 0);
  });
});