//Science of Allergic Rhinitis page

var mobileBreakPoint = 768;

$(document).ready(function(){
    changeImageSrc();
    changeDivsOrder();
    $( '.cycle-slideshow' ).on( 'cycle-initialized', function( event, opts ) {
        validateCarouselNumberOfLines();
        validateCarouselArrows();
        cycle2Events();
    });
    animateGraph();
});

function animateGraph(){
    var contentwidth = $(window).width();
    var isInview = true;
    if ((contentwidth) > mobileBreakPoint){
        $('#affects-patients-quality-of-life').waypoint(function(){
            if (isInview) {
                $('#panel_1 .num').animateNumber({ number: 66 }, 1500);
                $('#panel_3 .num').animateNumber({ number: 35 }, 1500);
                resetPanelchart();
                animetePanelOne();
                animetePanelTwo();
                animetePanelTree();
                isInview = false;
            }else{
                setTimeout(function(){
                    isInview = true;
                },1000);
            }
        });
        
    }
}

function resetPanelchart(){
    $('.panel .line').css({
        left: "-100%",
    });
}

function animetePanelOne(){
    $('#panel_1 .line1').animate({
        left: "0%",
    },750);
    setTimeout(
        function(){ 
            $('#panel_1 .line2').animate({
                left: "-65%",
            },750);
    }, 750);
}

function animetePanelTwo(){
    $('#panel_2 .line1').animate({
        left: "-35%",
    },1500);
}

function animetePanelTree(){
    $('#panel_3 .line1').animate({
        left: "0%",
    },750);
    setTimeout(
        function(){ 
            $('#panel_3 .line2').animate({
                left: "-90%",
            },750);
    }, 750);
}

function changeImageSrc()
{
     var contentwidth = $(window).width();
     
     if ((contentwidth) < mobileBreakPoint)
     {
         newPath = $(".graphic-container .graphic").attr("src").replace("desktop", "mobile");
         $(".graphic-container .graphic").attr("src", newPath);
     }else
     {
         newPath = $(".graphic-container .graphic").attr("src").replace("mobile", "desktop");
         $(".graphic-container .graphic").attr("src", newPath);
     }
}

function changeDivsOrder()
{
    var contentwidth = $(window).width();
    
    if ((contentwidth) < mobileBreakPoint)
    {
        $('.aditional-information img').insertAfter('.aditional-information .copy h2'); 
     }else
     {
       $('.aditional-information img').insertAfter('.aditional-information .copy');  
     }
}

function validateCarouselArrows()
{
    //console.log("height " + $('.carousel .cycle-slideshow .item img').height());
    //console.log("top " + $('.carousel .cycle-slideshow .item').position().top);
    //console.log("top img" + $('.carousel .cycle-slideshow .item img').position().top);
    var imageHeight = $('.carousel .cycle-slideshow .item img').height();
    var topPosition = $('.carousel .cycle-slideshow .item img').position().top - $('.carousel .cycle-slideshow .item').position().top;
    $('.carousel .arrow-left').css('height', imageHeight);
    $('.carousel .arrow-left').css('margin-top', topPosition);
    $('.carousel .arrow-right').css('height', imageHeight);
    $('.carousel .arrow-right').css('margin-top', topPosition);
}

$(window).bind("resize", function(){
    //Adjusts image when browser resized
    changeImageSrc();
    changeDivsOrder();
    validateCarouselNumberOfLines();
    validateCarouselArrows();
    //animateGraph();
});

function validateCarouselNumberOfLines()
{
    var biggestLine = 0;
     $(".cycle-slideshow .item p").each(function(){
        $(this).css("height", "");
        $(this).css("height", null);
        if($(this).height() > biggestLine)
        {
            biggestLine = $(this).height(); 
        }
     });
     //console.log("Biggest >>>>> " + biggestLine);
     $(".cycle-slideshow .item p").each(function(){
        $(this).css("height", "");
        $(this).css("height", null);
        $(this).css("height", biggestLine);
     });
}

function cycle2Events()
{
    var currentSlide = $(".cycle-slide-active").attr("id");
    
    trackCurrentSlide(currentSlide);   
   
   $(".cycle-slideshow").on("cycle-next", function( event, opts ) {
        currentSlide = $(".cycle-slide-active").attr("id");
        trackForwardSlide(currentSlide);
    });
     
   $(".cycle-slideshow").on("cycle-prev", function( event, opts ) {
        currentSlide = $(".cycle-slide-active").attr("id");
        trackBackSlide(currentSlide)
    });
    
    /*$(".cycle-slideshow").on("cycle-before", function( event, opts ) {
        currentSlide = $(".cycle-slide-active").attr("id");
        //console.log("< " + currentSlide);
    });
    $(".cycle-slideshow").on("cycle-after", function( event, opts ) {
        currentSlide = $(".cycle-slide-active").attr("id");
        //console.log("> " + currentSlide);
    });*/
}
