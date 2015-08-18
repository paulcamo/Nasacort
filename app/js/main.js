
var currentPage = "";

$(document).ready(function() {
	setInterstitialPopup();
    
    currentPage = document.body.className;
    
    activateFooterAndNavBarValidation();
});

// ***********************************************************************************************************
// ***********************************************************************************************************





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
	$("body a").on("click",function() {
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

$(".head-faq").click(function () {

    $header = $(this);
    //getting the next element
    $content = $header.next();
    $header.find(".collp-icon").toggleClass("expanded-icon");
    $header.find(".no-border-sect-faq").toggleClass("border-sect-faq");
    //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
    $content.slideToggle(500, function () {
        //execute this after slideToggle is done
        //change text of header based on visibility of content div
    });
});

// --------------------------------------------------------------------------------------------------------------

$('.open').on('click', function(e) {
    $('.footnote').toggleClass("animation");
    e.preventDefault();
});

$('.close').on('click', function(e) {
    $('.footnote').removeClass("animation");
    e.preventDefault();
});

// --------------------------------------------------------------------------------------------------------------

function activateFooterAndNavBarValidation()
{
    switch(currentPage)
    {
        case "home-section":
            $(".nassacort-logo .little-house").addClass("active-house");
        break;
        
        case "nasacort-difference-section":
            $("ul.main-nav li").eq(0).find("a.item .label").addClass("active-item");
        break;
        
        case "dosing-and-efficacy-section":
            $("ul.main-nav li").eq(1).find("a.item .label").addClass("active-item");
        break;
        
        case "whats-a-clucker-section":
            $("ul.main-nav li").eq(2).find("a.item .label").addClass("active-item");
        break;
            
        case "science-of-allergic-rhinitis-section":
            $("ul.main-nav li").eq(3).find("a.item .label").addClass("active-item");
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



