//Science of Allergic Rhinitis page

var mobileBreakPoint = 768;

$(document).ready(function(){
    changeImageSrc();
    changeDivsOrder();
    validateCarouselArrows();
});

function changeImageSrc()
{
     var contentwidth = $(window).width();
     
     if ((contentwidth) < mobileBreakPoint)
     {
         $(".graph img").each(function(){
             var newPath = $(this).attr("src").replace("desktop", "mobile");
             $(this).attr("src", newPath);
         });
         
         newPath = $(".graphic-container img").attr("src").replace("desktop", "mobile");
         $(".graphic-container img").attr("src", newPath);
     }else
     {
        $(".graph img").each(function(){
             var newPath = $(this).attr("src").replace("mobile", "desktop");
             $(this).attr("src", newPath);
         });  
         
         newPath = $(".graphic-container img").attr("src").replace("mobile", "desktop");
         $(".graphic-container img").attr("src", newPath);
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
    validateCarouselArrows();
});
