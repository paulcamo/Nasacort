var desktop_mininum_width = 769;
var desktop_maximum_width = 1400;
var hashCalled ="";
var headerCollapsed=0;
var currentPage = "";
var breakpoint_mobile = '320px';
var breakpoint_mobile_max = '768px';
var media_query = "screen and (min-width: " + breakpoint_mobile + ") and (max-width: " + breakpoint_mobile_max + ")";
var sticky_height=0;
var vtop=0;
var isMobile;

$(document).ready(function() {
    isMobile = window.matchMedia && window.matchMedia(media_query).matches;

    desktopStickyHeader($(this).scrollTop());

    hashCalling();
    
	setInterstitialPopup();
	
	setSharePopup();
    
    currentPage = document.body.className;
    
    activateFooterAndNavBarValidation();
    
    validateFootnote();
    
    addFancyVideo();



   // ojo: los botones del slider reaccioan a esto.....
    //$('a[href^="#"]').on('click',function (e) {
    //    e.preventDefault();
    //
    //    var target = this.hash;
    //    var $target = $(target);
    //    console.log ("jghjghjghjghj");
    //
    //    $(window).scrollTop( $("div[id='" + target + "']").offset().top  - 80 );
    //    window.location.hash = target;
    //});



});

$(window).bind("resize", function(){
    
    isMobile = window.matchMedia && window.matchMedia(media_query).matches;

    resetHeaderPadding();
    
    clearTimeout($.data(this, 'resizeTimer'));
    $.data(this, 'resizeTimer', setTimeout(function() {
        //do something
        //alert("Haven't resized in 200ms!");
        validateFootnote();
    }, 500));
});


// ***********************************************************************************************************
// ***********************************************************************************************************


function desktopStickyHeader(y){

    if ($(window).width() >= desktop_mininum_width ) {
        sticky_height =200;


        if ($(window).width() >= desktop_maximum_width){
            vtop="120px";
        }else {
            vtop="148px";
        }



    } else {
        sticky_height =10;
        vtop="127px";
    }

        if (y > sticky_height) {
            $('#header').animate({top: "-38px"}, 300);
            $('.first-container').animate({paddingTop: "0"}, 300);
            $('.clucker-container').animate({marginTop: "0"}, 300);
            headerCollapsed = 1;
        } else {
            $('#header').animate({top: "-9px"}, 300);
            $('.first-container').animate({paddingTop: vtop}, 300);
            $('.clucker-container').animate({marginTop: vtop}, 300);
        }

}


function hashCalling(){
    hashCalled = window.location.hash.substring(1) || "";

    if (hashCalled !=="") {
        console.log("hashCalled ---->" + hashCalled);
        $(window).scrollTop( $("div[id='" + hashCalled + "']").offset().top  - 80 );
    }
}

function resetHeaderPadding() {



    $('.first-container').attr("style","");

    if ($(window).width() >= desktop_maximum_width){
        vtop="120px";
    }else {
        vtop="148px";
    }


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

$(".js-reference").on("click",function(e){
    e.preventDefault();
    var target=  $(this).attr("href");

    $('html, body').animate({
        scrollTop: ($(target).offset().top - $("#header").outerHeight() + 28 )
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
        var parentHeight = $(this).data("parent");
        var hh = $(parentHeight).outerHeight();
        var buttonHeight = $(this).height();
        var currentMarginTop = $(this).css("margin-top");
        $(this).attr("state", "open");
        var animation = $(this).find(".animation");
        if(isMobile)
        {
            $(parentHeight).css("height",hh);
            $(this).css("width","100%");
            animation.css("width","100%");
        }else
        {
            animation.css("width","492px");
            $(this).attr("currentMarginTop", currentMarginTop);
        }
        animation.show();
        //console.log(Math.abs(parseInt(currentMarginTop)) + " >> " + animation.outerHeight() + " >> " + buttonHeight + " >> " +  animation.innerHeight() + " >>> " + animation.height());
        expandTop = animation.outerHeight() - buttonHeight;
        animation.css("margin-top", -expandTop); 
       
        e.preventDefault();
    }
    
});

$('.footnote .close-btn').on('click', function(e) {
    e.stopPropagation();
    var parentHeight = $(this).parent().parent().data("parent");
    $(this).parent().hide(); 
    $(this).parent().parent().attr("state", "closed");
    $(this).parent().parent().css("margin-top", $(this).parent().parent().attr("currentMarginTop")); 
    if(isMobile)
    {
        $(this).parent().parent().css("width","13.75%");
        $(parentHeight).css("height","auto");
        $(this).parent().parent().css("margin-top", ""); 
    }else
    {
       $(this).parent().parent().css("width","width: 11.5%"); 
    }
    e.preventDefault(); 
});

function validateFootnote()
{
    $(".animation").hide();
    $('.footnote').attr("state", "closed");
    var parentHeight = $('.footnote').data("parent");
    $(parentHeight).css("height","auto");
    $('.footnote').css("margin-top", $('.footnote').attr("currentMarginTop"));
    if(isMobile)
    {
        $('.footnote').css("margin-top", "");
        $(".footnote").each(function(index){
            var parentHeight = $(this).data("parent");
            var negativeMargin = $("" + parentHeight).offset().left;
            $(this).css("margin-left", "-" + negativeMargin + "px");
            if(parseInt(negativeMargin) === 0)
            {
               negativeMargin = $(this).offset().left; 
            }
            
            console.log("Footnote " + index + " position " + negativeMargin);
            $(this).css("margin-left", "-" + negativeMargin + "px");
        });
    }else{
        $(".animation").css("position", "relative");
        $(".footnote").each(function(index){
            $(this).css("margin-left", "0");
        });
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
    removeRedHighlightedClass();
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
            removeRedHighlightedClass();
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
                addRedHighlightedClass();
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

function addRedHighlightedClass()
{
    //Adding red highlighted class for label and border in input just for mobile
    $("#share .your-name").addClass("red-highlighted");
    $("#share .your-email").addClass("red-highlighted");
    $("#share .recipient-name").addClass("red-highlighted");
    $("#share .recipient-email").addClass("red-highlighted");
}

function removeRedHighlightedClass()
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
function addFancyVideo()
{
    $('.fancybox').fancybox();
    
    if(isMobile)
    {
        $('.fancybox')
        .attr('rel', 'media-gallery')
        .fancybox({
            openEffect : 'none',
            closeEffect : 'none',
            prevEffect : 'none',
            nextEffect : 'none',
            autoSize: 'false',
            
            autoHeight : 'true',
            maxWidth:640,
            maxHeight: 360,
            minHeight:180,

            arrows : false,
            helpers : {
                media : {},
                buttons : {}
            }
        });
    }else
    {
        $('.fancybox')
        .attr('rel', 'media-gallery')
        .fancybox({
            openEffect : 'none',
            closeEffect : 'none',
            prevEffect : 'none',
            nextEffect : 'none',

            arrows : false,
            helpers : {
                media : {},
                buttons : {}
            }
        });
    }
}



