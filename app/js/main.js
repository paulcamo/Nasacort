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

// --------------------------------------------------------------------------------------------------------------
/*Share form*/

function setSharePopup() {
    resetForm();
    $("#share #close").on("click",function(){
        resetForm();
        $('#share').modal('hide');
    });
    $("input[type='reset']").on("click", function(e) {
        $('#share').modal('hide');
    });
    
    $("#share .error-globe").on("click",function(){
        $(this).hide();
        $(this).parent().find(".triangle").hide();
    });
    
    addSubmitHandler();
    addTextFieldEvents();
}

var yourDefaultEmail = "me@email.com";
var recipientDefaultEmail = "colleague@email.com";

function resetForm()
{
    $("#share :text").val("");
    setFormDefaultValues();
}

/* Miscelaneous functions*/

function validateEmail(email) 
{
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  
  if(regex.test( email)) 
  {
    return true;
  }else 
  {
    return false;
  }
}

function setFormDefaultValues()
{
   $("#share input[name='yourEmail']").val(yourDefaultEmail);
   $("#share input[name='recipientEmail']").val(recipientDefaultEmail);
}

function addTextFieldEvents()
{
    $("input.email").focus(function(){
        var currentValue = $(this).val(); 
        if($(this).attr("name") == "yourEmail")
        {
            if(currentValue === yourDefaultEmail)
            {
                 $(this).val("");
            }
        }else
        {
            if(currentValue == recipientDefaultEmail)
            {
                 $(this).val("");
            }
        }
    });
    $("input.email").blur(function(){
        var currentValue = $(this).val();
        if(currentValue === "")
        {
            if($(this).attr("name") == "yourEmail")
            {
                 $(this).val(yourDefaultEmail);
            }else
            {
                 $(this).val(recipientDefaultEmail);
            }
        }
    });
}

function addSubmitHandler()
{
    $("#share").submit(function( event ) {
        // Stop form from submitting normally
        event.preventDefault();
        // Get some values from elements on the page:
        var $form = $(this);
        var yourName = $form.find("input[name='yourName']").val();
        var yourEmail = $form.find("input[name='yourEmail']").val();
        var recipientName = $form.find("input[name='recipientName']").val();
        var recipientEmail = $form.find("input[name='recipientEmail']").val();
        alert("your name " + yourName + " your email " + yourEmail + " recipient name " + recipientName + " recipient email " + recipientEmail);
    });
}





