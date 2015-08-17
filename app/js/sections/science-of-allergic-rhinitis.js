//Science of Allergic Rhinitis page

var mobileBreakPoint = 768;

$(document).ready(function(){
    changeImageSrc();
    changeDivsOrder();
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

$(window).bind("resize", function(){
    //Adjusts image when browser resized
    changeImageSrc();
    changeDivsOrder();
});
