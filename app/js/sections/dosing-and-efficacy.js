//Dossing and Efficacy Page

var mobileBreakPoint = 768;

$(document).ready(function(){
    changeImageSrc();
});

$(window).bind("resize", function(){
    //Adjusts image when browser resized
    changeImageSrc();
});

function changeImageSrc()
{
     var contentwidth = $(window).width();
     
     if ((contentwidth) <= mobileBreakPoint)
     {
         $(".img-chart img").each(function(){
            var newPath = $(this).attr("src").replace("desktop", "mobile");
            $(this).attr("src", newPath);
         });
         
         newPath = $(".chart-1 img").attr("src").replace("desktop", "mobile");
         $(".chart-1 img").attr("src", newPath);
         
         newPath = $(".chart-2 img").attr("src").replace("desktop", "mobile");
         $(".chart-2 img").attr("src", newPath);
         
         newPath = $(".chart-3 img").attr("src").replace("desktop", "mobile");
         $(".chart-3 img").attr("src", newPath);
         
         //newPath = $(".img-womn").attr("src").replace("desktop", "mobile");
         //$(".img-womn").attr("src", newPath);
         
     }else
     {
         $(".img-chart img").each(function(){
             var newPath = $(this).attr("src").replace("mobile", "desktop");
             $(this).attr("src", newPath);
        });  
         
         newPath = $(".chart-1 img").attr("src").replace("mobile", "desktop");
         $(".chart-1 img").attr("src", newPath);
         
         newPath = $(".chart-2 img").attr("src").replace("mobile", "desktop");
         $(".chart-2 img").attr("src", newPath);
         
         newPath = $(".chart-3 img").attr("src").replace("mobile", "desktop");
         $(".chart-3 img").attr("src", newPath);
         
         //newPath = $(".img-womn").attr("src").replace("mobile", "desktop");
         //$(".img-womn").attr("src", newPath);
     }
}