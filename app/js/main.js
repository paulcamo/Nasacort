var desktop_mininum_width = 1024;
var headerCollapsed=0;
var currentPage = "";
var breakpoint_mobile = '320px';
var breakpoint_mobile_max = '768px';
var media_query = "screen and (min-width: " + breakpoint_mobile + ") and (max-width: " + breakpoint_mobile_max + ")";

var isMobile;

$(document).ready(function() {
    isMobile = window.matchMedia && window.matchMedia(media_query).matches;
    
	setInterstitialPopup();
	
	setSharePopup();
    
    currentPage = document.body.className;
    
    activateFooterAndNavBarValidation();
    
    validateFootnote();
});

$(window).bind("resize", function(){
    
    isMobile = window.matchMedia && window.matchMedia(media_query).matches;
    
    validateFootnote();

});


// ***********************************************************************************************************
// ***********************************************************************************************************


function desktopStickyHeader(y){

    console.log(y);
    console.log(headerCollapsed);


    if ($(window).width() >= desktop_mininum_width ) { // shows or hides the sticky top nav on desktop mode

        if (y > 300) {
            $('#header').animate({top: "-29px"}, 500);
            headerCollapsed = 1;
        } else {
            $('#header').animate({top: "0"}, 200);
        }

    }



}

$(window).scroll(function() {
    //$.doTimeout( 'scroll', 50, function(){
    //    // do something computationally expensive
    //    desktopStickyHeader($(this).scrollTop());
    //});
});


// --------------------------------------------------------------------------------------------------------------

//function new_footer_height(){
//    var newHeight=( window.innerHeight -  $(".container").outerHeight() -30 );
//    if (newHeight>180) {
//        $(".js-footer-fluidHeight").css("height", newHeight );
//        $(".footer").addClass("footer-absolute");
//    } else {
//        $(".footer").removeClass("footer-absolute");
//    }
//}

// --------------------------------------------------------------------------------------------------------------

function setInterstitialPopup() {
	$("body a").on("click",function(e) {

       // e.preventDefault();

		if($(this).attr("data-target") === "#interstitial")
		{
			$("#interstitial").find("#go").attr("href", $(this).attr("href"));
		}	

		if($(this).attr("data-type") === "terms-use")
            {
                $(".js-terms").show();
                $(".js-policy").hide();

            } else {
                $(".js-terms").hide();
                $(".js-policy").show();
    		}

	});
	
	$("#interstitial #go").on("click",function(){
		$('#interstitial').modal('hide');
	});
}


// --------------------------------------------------------------------------------------------------------------

$("sup").on("click",function(){
  $('html, body').animate({
    scrollTop: $("#references").offset().top
  }, 1000);
});

// --------------------------------------------------------------------------------------------------------------

$(".head-faq").click(function(){
    $(this).toggleClass("collp-icon expanded-icon").next("div.text-faq").slideToggle(300, function(){

$(this).parent().toggleClass("border-sect-faq");

    });
});

// --------------------------------------------------------------------------------------------------------------

$('.footnote').on('click', function(e) {
    if($(this).attr("state") != "open"){
        var topCta = $(this).position().top;
        $(this).attr("state", "open");
        $(this).toggleClass("animation");  
        $(this).find('.rfrs').css("display","block");
        if(isMobile)
        {
            $(this).css("top", topCta);       
        }
        e.preventDefault();
    }
    
});

$('.footnote .close-btn').on('click', function(e) {
    e.stopPropagation();
    //$(".animation").removeClass("animation");   
    $(this).parent().removeClass("animation"); 
    $(this).find('.rfrs').css("display","none");
    $(this).parent().attr("state", "closed");
    if(isMobile)
    {
        $(this).parent().css("top", "");     
    }   
    e.preventDefault(); 
});

function validateFootnote()
{
    $(".animation").removeClass("animation");
    $('.footnote').attr("state", "closed");
    if(isMobile)
    {
        $('.footnote').css("top", "");
        $('.animation').css("top", "");    
        $('.footnote').find('.rfrs').css("display","none"); 
    }else{
        $(".animation").css("position", "relative");    
    }
}

// --------------------------------------------------------------------------------------------------------------

function activateFooterAndNavBarValidation()
{
    switch(currentPage)
    {
        case "home-section":
            $(".nassacort-logo .little-house").addClass("active-house");
        break;
        
        case "nasacort-difference-section":
            $("ul.main-nav li").eq(0).find("a.item").addClass("active-item");
        break;
        
        case "dosing-and-efficacy-section":
            $("ul.main-nav li").eq(1).find("a.item").addClass("active-item");
        break;
        
        case "whats-a-clucker-section":
            $("ul.main-nav li").eq(2).find("a.item").addClass("active-item");
        break;
            
        case "science-of-allergic-rhinitis-section":
            $("ul.main-nav li").eq(3).find("a.item").addClass("active-item");
        break;
        
        case "resources-section":
            $("ul.utility-nav li").eq(0).find("a").addClass("active-item");
        break;
        
        case "faq-section":
            $("ul.utility-nav li").eq(1).find("a").addClass("active-item");
        break;
        
        case "drug-fact-label-section":
            $("ul.utility-nav li").eq(2).find("a").addClass("active-item");
        break;
        
        default:
        break;
        
    }
}

/**/
function setSharePopup() {
    $("#share #close").on("click",function(){
        $('#share').modal('hide');
    });
}




