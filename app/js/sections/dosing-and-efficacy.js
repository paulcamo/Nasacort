//Dossing and Efficacy Page

var mobileBreakPoint = 768;
var tabletBreakPoint = 1024;
var contentwidth = 0;

$(document).ready(function(){
    contentwidth = $(window).width();
    changeImageSrc();
    moveSuperScriptGraphic();
    resetFirstGraphic();
    if(isMobile)
    {
        setFirstGraphicAsMobile();
    }else
    {
        initWayPoint();
    } 
});

$(window).bind("resize", function(){
    //Adjusts image when browser resized
    contentwidth = $(window).width();
    changeImageSrc();
    moveSuperScriptGraphic();
    
    if(isMobile)
    {
        setFirstGraphicAsMobile();
    }else
    {
        setFirstGraphicAsDesktop();
        initWayPoint();
    } 
});

function changeImageSrc()
{    
     if ((contentwidth) <= mobileBreakPoint)
     {
         $(".img-chart img").each(function(){
            var newPath = $(this).attr("src").replace("desktop", "mobile");
            $(this).attr("src", newPath);
         });
         
         //newPath = $(".chart-1 img").attr("src").replace("desktop", "mobile");
         //$(".chart-1 img").attr("src", newPath);
         
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
         
         //newPath = $(".chart-1 img").attr("src").replace("mobile", "desktop");
         //$(".chart-1 img").attr("src", newPath);
         
         newPath = $(".chart-2 img").attr("src").replace("mobile", "desktop");
         $(".chart-2 img").attr("src", newPath);
         
         newPath = $(".chart-3 img").attr("src").replace("mobile", "desktop");
         $(".chart-3 img").attr("src", newPath);
         
         //newPath = $(".img-womn").attr("src").replace("mobile", "desktop");
         //$(".img-womn").attr("src", newPath);
     }
}

function moveSuperScriptGraphic()
{
    var graphicHeight = 0;
    if(isMobile)
    {
        graphicHeight = ($(".img-chart").outerHeight() * 37.22 / 100) + 7;
    }else
    {
        graphicHeight = ($(".img-chart").outerHeight() * 39.62 / 100) + 7;
    }
    $(".img-chart .graphic-superscript").css("top", graphicHeight + "px");
    
    //Second
    
    /*if(isMobile)
    {
        graphicHeight = ($("#chart-1 img").outerHeight() * 20.97 / 100) + 10;
    }else
    {
        graphicHeight = ($("#chart-1 img").outerHeight() * 54.59 / 100) + 9;
    }
    $("#chart-1 .graphic-superscript").css("top", graphicHeight + "px");
    
    if(isMobile)
    {
        graphicHeight = ($("#chart-1 img").outerHeight() * 39.5 / 100) + 9;
        $("#chart-1 .superscript-2").css("top", graphicHeight + "px");
    }else
    {
        $("#chart-1 .superscript-2").css("top", "18px");
    }*/
}

function initWayPoint()
{
    var isInview = true;
    if (isInview) 
    {
       $('#chart-1').waypoint(function(){
           resetFirstGraphic();
           animateFirstGraphic();
           isInview = false;
       },{offset:'25%',}); 
    }else
    {
        setTimeout(function(){
            isInview = true;
        },1000);
    }
}

function resetFirstGraphic()
{
    TweenLite.killTweensOf("#chart-animation-1");
    TweenLite.killTweensOf("#chart-animation-2");
    TweenLite.killTweensOf("#chart-animation-3");
    TweenLite.killTweensOf("#chart-animation-4");
    
    $("#chart-animation-1").css("height","0px");
    $("#chart-animation-1").css("top","0px");
    $("#chart-animation-2").css("height","0px");
    $("#chart-animation-2").css("top","0px");
    $("#chart-animation-3").css("height","0px");
    $("#chart-animation-3").css("top","0px");
    $("#chart-animation-4").css("height","0px");
    $("#chart-animation-4").css("top","0px");
    $(".indicator-1").css("opacity", "0");
    $(".indicator-2").css("opacity", "0");
    $(".level-graph").css("opacity", "0");
    if(contentwidth > tabletBreakPoint)
    {
        $(".quote").css("opacity", "0");
    }
}

function animateFirstGraphic()
{
    TweenLite.to($(".indicator-1"), 0.2, { css: { opacity: 1}, delay:0.2 } );
    TweenLite.to($(".indicator-2"), 0.2, { css: { opacity: 1}, delay:0.2 } );
    
    TweenLite.to($("#chart-animation-1"), 1.5, { css: { height: '108px', top: '-108px' },ease:Power1.easeOut } );
    TweenLite.to($("#chart-animation-2"), 1.5, { css: { height: '43px', top: '-43px' },ease:Power1.easeOut } );
    TweenLite.to($("#chart-animation-3"), 1.5, { css: { height: '226px', top: '-226px' },ease:Power1.easeOut } );
    TweenLite.to($("#chart-animation-4"), 1.5, { css: { height: '126px', top: '-126px' },ease:Power1.easeOut, onComplete:showLevelAndQuote } );
}

function showLevelAndQuote()
{
    TweenLite.to($(".level-graph"), 0.2, { css: { opacity: 1} } );
    
    if(contentwidth > tabletBreakPoint)
    {
        TweenLite.to($(".quote"), 0.2, { css: { opacity: 1} } );
    }
}

function setFirstGraphicAsMobile()
{
    $(".animation-1").children().hide(); 
}

function setFirstGraphicAsDesktop()
{
    $(".animation-1").children().show(); 
}
