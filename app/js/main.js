var desktop_mininum_width = 768;
var desktop_maximum_width = 1400;
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

    setSuperscripts();


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
        height2hide = "-38px";


    } else {
        sticky_height =10;
        vtop="127px";

        height2hide = "-29px";
    }

        if (y > sticky_height) {
            $('#header').animate({top: height2hide }, 300);
            //$('.first-container').animate({paddingTop: "0"}, 300);
            //$('.clucker-container').animate({marginTop: "0"}, 300);
            headerCollapsed = 1;
        } else {
            $('#header').animate({top: "-9px"}, 300);
            //$('.first-container').animate({paddingTop: vtop}, 300);
            //$('.clucker-container').animate({marginTop: vtop}, 300);
        }

}


function hashCalling(newPath){
    // if newPath exists will use that as the new target if don't will use the hash from path 
    var hashCalled = newPath || (window.location.hash.substring(1) || ""),
        overflow = getOverflowPerPage(newPath);
    var spot;

    if(newPath){
        if ($('#' + hashCalled).length > 0) {
            spot = $('#' + hashCalled).offset().top - (overflow || 60);
            getPlace(spot);
        }
    } else {
        $(window).load(function() {
            if ($('#' + hashCalled).length > 0) {
                spot = $('#' + hashCalled).offset().top - (overflow || 60);
                getPlace(spot);
            }
        });
    }
    
}

function getPlace(spot){
    $(function(){
        $('html, body').stop(true, true).delay(100).animate({
            scrollTop: spot
        }, 100);
    });
}

// adding new event to all a to get hast anchors if any
$('a').on('click tap', function(){
    // indicates the new target in the current page
    var linkPath = $(this).attr('href').split('#')[1] || null;
    if (linkPath){
        // scrolls to the new position 
        hashCalling(linkPath);
    }
    
});

function getOverflowPerPage(current){
    if(window.location.pathname.search('dosing-efficacy') >= 0){
        return 120;
    } else if (current && current === 'comparing-opts'){
        return 140;
    } else if (!current && window.location.href.search('comparing-opts') >= 0){
        return 140;
    } else {
        return false;
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
       $('.modal-dialog').stop(true, true).delay(100).animate({
            scrollTop: 0
        }, 100);

		if($(this).attr("data-target") === "#interstitial"){
			$("#interstitial").find("#go").attr("href", $(this).attr("href"));
		}	

		if($(this).attr("data-type") === "terms-use"){
                $(".js-terms").show();
                $(".js-policy").hide();

            } else {
                $(".js-terms").hide();
                $(".js-policy").show();
    		}
	});

    $("#interstitial #go").on("click",function(){
        console.log('CLICK ON COLOSE');
        $('#interstitial').modal('hide');
    });

}


// --------------------------------------------------------------------------------------------------------------

function setSuperscripts()
{
    var vtop = 0;
    if(isMobile)
    {
        vtop = 400;
    }else
    {
        vtop = 500;
    }
    $("sup").each(function(){
        if(parseInt($(this).text()) >= 0 || $(this).text().match(/[a-z]/i)) //if is numeric or alphabetical character
        {
            $(this).css("cursor","pointer");
            var footnote = $(this).closest(".content").find(".footnote");
            if(!footnote.length)
            {
               footnote = $(this).closest(".ncontainer").find(".footnote"); 
            }
            $(this).on("click",function(){
                $('html, body').animate({
                    scrollTop: footnote.offset().top - vtop
                  }, 1000);
                  footnote.click();
            });
        }
    });
    
    $(".graphic-superscript .button").each(function(){
            var footnote = $(this).closest(".content").find(".footnote");
            if(!footnote.length)
            {
               footnote = $(this).closest(".ncontainer").find(".footnote"); 
            }
            $(this).on("click",function(){
                $('html, body').animate({
                    scrollTop: footnote.offset().top - vtop
                  }, 1000);
                  footnote.click();
            });
    });
}


// --------------------------------------------------------------------------------------------------------------

$(".js-reference").on("click",function(e){
    e.preventDefault();
    var target=  $(this).attr("href");

    $('html, body').animate({
        scrollTop: ($(target).offset().top - $("#header").outerHeight() + 28 )
    }, 1000);
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
    trackFootnoteOpen($('.footnote').index($(this)), $("body").attr("class"));
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
    trackFootnoteClose($('.footnote .close-btn').index($(this)), $("body").attr("class"));
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
            
            //console.log("Footnote " + index + " position " + negativeMargin);
            $(this).css("margin-left", "-" + negativeMargin + "px");
            
            if(isMobile){
                //$('.dosing-and-efficacy-section .footnote').css("margin-left", "-23px");
                $('.dosing-and-efficacy-section .chart-1 .footnote').css("margin-left", "0px");
                $('.dosing-and-efficacy-section .chart-2 .footnote').css("margin-left", "0px");
                $('.dosing-and-efficacy-section .chart-3 .footnote').css("margin-left", "0px");
            }
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
        trackCloseShare($("body").attr("class"));
    });
    $("input[type='reset']").on("click", function(e) {
        $('#share').modal('hide');
        trackCancelShare($("body").attr("class"));
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
    $('#share').on('shown.bs.modal', function (event) {
        trackShare($("body").attr("class"), event.relatedTarget);
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
                 $(this).css("color","#363737");
            }
        }else
        {
            if(currentValue == recipientDefaultEmail)
            {
                 $(this).val("");
                 $(this).css("color","#363737");
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
                 $(this).css("color","#afb2b4");
            }else
            {
                 $(this).val(recipientDefaultEmail);
                 $(this).css("color","#afb2b4");
            }
        }
    });
}

function addSubmitHandler()
{
    $("#share").submit(function( event ) {
        // Stop form from submitting normally
        event.preventDefault();
        trackSubmitShare($("body").attr("class"));
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

var currentVideoTracked = "";

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
            afterLoad: function() {
                initVimeoAPI();
            },
            beforeLoad:function() {
                ga('send', 'event', 'video', 'click_start', currentVideoTracked);
            },
            afterClose:function() {
                //removeVimeoAPI();
            },

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
            afterLoad: function() {
                initVimeoAPI();
            },
            beforeLoad:function() {
                ga('send', 'event', 'video', 'click_start', currentVideoTracked);
            },
            afterClose:function() {
                //removeVimeoAPI();
            },
            
            arrows : false,
            helpers : {
                media : {},
                buttons : {}
            }
        });
    }
    
    $('.fancybox').on("click",function(){
       //console.log($(this).attr('data-tracking'));
       currentVideoTracked = $(this).attr('data-tracking');
    });
}

/******************** Video JavaScript API *******************/
/**
 *https://github.com/jrue/Vimeo-jQuery-API*/

function initVimeoAPI()
{
    var script = "js/vendor/vimeo/jquery.vimeo.api.js";
    $("head").append('<script type="text/javascript" src="' + script + '"></script>');
    
    var playBackPorcentage = 0;
    var percent_0_Tracked = false;
    var percent_25_Tracked = false;
    var percent_50_Tracked = false;
    var percent_75_Tracked = false;
    var percent_100_Tracked = false;
    
    $(".fancybox-overlay iframe").on("playProgress", function(event, data){
      //console.log(this);//return the DOM object of the video that called this event
      //console.log("Seconds Progress", data.seconds);
      //console.log("Percent Progress", data.percent);
      //console.log("Duration Progress", data.duration);
      playBackPorcentage = Math.floor(data.percent * 100);
      
      if(playBackPorcentage === 0)
      {
          if(!percent_0_Tracked)
          {
              ga('send', 'event', 'video', 'play_0%', currentVideoTracked);
              percent_0_Tracked = true;
          }
      }
      if(playBackPorcentage >= 25)
      {
          if(!percent_25_Tracked)
          {
            ga('send', 'event', 'video', 'play_25%', currentVideoTracked);  
            percent_25_Tracked =  true;
          }
      }
      if(playBackPorcentage >= 50)
      {
          if(!percent_50_Tracked)
          {
              ga('send', 'event', 'video', 'play_50%', currentVideoTracked);
              percent_50_Tracked = true;
          }
      }
      if(playBackPorcentage >= 75)
      {
          if(!percent_75_Tracked)
          {
              ga('send', 'event', 'video', 'play_75%', currentVideoTracked);
              percent_75_Tracked = true;
          }
      }
      if(playBackPorcentage >= 100)
      {
          if(!percent_100_Tracked)
          {
              ga('send', 'event', 'video', 'play_100%', currentVideoTracked);
              percent_100_Tracked = true;
          }
      }
    })
    .vimeo("getVolume", function(d){
        //console.log("Voume set to:", d);
    })
    .vimeo("getVolume", function(d){
        //console.log("New Volume:", d);
    })
    .on('pause',function () {
        //console.log('paused');
    }); 
}

function removeVimeoAPI()
{
    
}
