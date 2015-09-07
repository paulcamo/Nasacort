var desktop_mininum_width = 769;
var headerCollapsed=0;
var currentPage = "";
var breakpoint_mobile = '320px';
var breakpoint_mobile_max = '768px';
var media_query = "screen and (min-width: " + breakpoint_mobile + ") and (max-width: " + breakpoint_mobile_max + ")";
var sticky_height=0;
var isMobile;

$(document).ready(function() {
    isMobile = window.matchMedia && window.matchMedia(media_query).matches;

    desktopStickyHeader($(this).scrollTop());
    
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
    //console.log(headerCollapsed);


    if ($(window).width() >= desktop_mininum_width ) {
        sticky_height =200;
    } else {
        sticky_height =10;
    }


        if (y > sticky_height) {
            $('#header').animate({top: "-38px"}, 300);
            $('.first-container').animate({paddingTop: "0"}, 300);
            headerCollapsed = 1;
        } else {
            $('#header').animate({top: "-9px"}, 300);
            $('.first-container').animate({paddingTop: "120px"}, 300);
        }

    //}



}

$(window).scroll(function() {
    $.doTimeout( 'scroll', 50, function(){
        // do something computationally expensive
        desktopStickyHeader($(this).scrollTop());
    });
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
        var parentHeight=$(this).data("parent");
        var hh = $(parentHeight).outerHeight();
        var topCta = $(this).position().top;
        $(this).attr("state", "open");
        $(this).toggleClass("animation");  
        $(this).find('.rfrs').css("display","block");
        if(isMobile)
        {
            $(this).css("top", topCta);
            $(parentHeight).css("height",hh);
        }
        e.preventDefault();
    }
    
});

$('.footnote .close-btn').on('click', function(e) {
    e.stopPropagation();
    //$(".animation").removeClass("animation");
    var parentHeight=$(this).parent().data("parent");

    $(this).parent().removeClass("animation"); 
    $(this).find('.rfrs').css("display","none");
    $(this).parent().attr("state", "closed");
    if(isMobile)
    {
        $(this).parent().css("top", "");
        $(parentHeight).css("height","");

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
        $(this).parent().removeClass("red-highlighted");
    });
    
    $("#share").on('hidden.bs.modal', function (e) {
      //if (!data) return e.preventDefault() // stops modal from being shown other event: show.bs.modal
      resetForm();
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
    hideSuccessfulMessage();
    removeRedHighlightedClassForMobile();
    $(".triangle, .error-globe").hide();
}

/* Miscelaneous functions*/

function validateEmail(email) 
{
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  
  if(regex.test( email) && email != yourDefaultEmail && email != recipientDefaultEmail) 
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
        
        if(yourName.length >= 2 && validateEmail(yourEmail) && recipientName.length >= 2 && validateEmail(recipientEmail))
        {
            //Post these
            alert("your name " + yourName + " your email " + yourEmail + " recipient name " + recipientName + " recipient email " + recipientEmail);
            showSuccessfulMessage();
            removeRedHighlightedClassForMobile();
        }else
        {
            if(yourName.length < 2)
            {
               $("#share .your-name .triangle, #share .your-name .error-globe").show();
               $("#share .your-name").addClass("red-highlighted"); 
            }else
            {
                $("#share .your-name .triangle, #share .your-name .error-globe").hide(); 
                $("#share .your-name").removeClass("red-highlighted");
            }
            //-------------------------------------------------------------
            if(!validateEmail(yourEmail))
            {
                $("#share .your-email .triangle, #share .your-email .error-globe").show();
                $("#share .your-email").addClass("red-highlighted");
            }else
            {
                $("#share .your-email .triangle, #share .your-email .error-globe").hide();
                $("#share .your-email").removeClass("red-highlighted");
            }
            //-------------------------------------------------------------
            if(recipientName.length < 2)
            {
                $("#share .recipient-name .triangle, #share .recipient-name .error-globe").show();
                $("#share .recipient-name").addClass("red-highlighted");
            }else
            {
                $("#share .recipient-name .triangle, #share .recipient-name .error-globe").hide();
                $("#share .recipient-name").removeClass("red-highlighted");
            }
            //-------------------------------------------------------------
            if(!validateEmail(recipientEmail))
            {
               $("#share .recipient-email .triangle, #share .recipient-email .error-globe").show(); 
               $("#share .recipient-email").addClass("red-highlighted");
            }else
            {
               $("#share .recipient-email .triangle, #share .recipient-email .error-globe").hide(); 
               $("#share .recipient-email").removeClass("red-highlighted"); 
            }
            //-------------------------------------------------------------
            if(yourName.length < 2 && !validateEmail(yourEmail) && recipientName.length < 2 &&  !validateEmail(recipientEmail))
            {
                $("#share .your-name .triangle, #share .your-name .error-globe").show();
                $("#share .your-name").addClass("red-highlighted");
                $("#share .your-email .triangle, #share .your-email .error-globe").show();
                $("#share .recipient-name .triangle, #share .recipient-name .error-globe").show();
                $("#share .recipient-email .triangle, #share .recipient-email .error-globe").show();
                addRedHighlightedClassForMobile();
            }
            return;
        }     
    });
}

function showSuccessfulMessage()
{
    $("#share #share-form .button-send").addClass("check-mark");
    $("#share :text").prop("disabled", true);   
    $("#share #share-form .button-send").val("Sent");
}

function hideSuccessfulMessage()
{
    $("#share #share-form .button-send").removeClass("check-mark");
    $("#share :text").removeProp("disabled");
    $("#share #share-form .button-send").val("Send");
}

function addRedHighlightedClassForMobile()
{
    //Adding red highlighted class for label and border in input just for mobile
    $("#share .your-name").addClass("red-highlighted");
    $("#share .your-email").addClass("red-highlighted");
    $("#share .recipient-name").addClass("red-highlighted");
    $("#share .recipient-email").addClass("red-highlighted");
}

function removeRedHighlightedClassForMobile()
{
    //Removing red highlighted class for label and border in input just for mobile
    $("#share .your-name").removeClass("red-highlighted");
    $("#share .your-email").removeClass("red-highlighted");
    $("#share .recipient-name").removeClass("red-highlighted");
    $("#share .recipient-email").removeClass("red-highlighted");
}


// --script for targeting device-specific styles --------------------------------

var md = new MobileDetect(window.navigator.userAgent);

if (md.os()=='AndroidOS') {
    $(".footer sup").addClass("android-footer");
}

// --------------------------------------------------------------------------------



