//Science of Allergic Rhinitis page

$(document).ready(function(){
    changeImageSrc();
});

function changeImageSrc()
{
    var contentwidth = $(window).width();
     if ((contentwidth) < "768")
     {
         $(".graph img").each(function(){
             var newPath = $(this).attr("src").replace("desktop", "mobile");
             $(this).attr("src", newPath);
         });
     }else
     {
       $(".graph img").each(function(){
             var newPath = $(this).attr("src").replace("mobile", "desktop");
             $(this).attr("src", newPath);
         });  
     }
}

$(window).bind("resize", function(){
    //Adjusts image when browser resized
    changeImageSrc();
});
