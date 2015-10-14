//Dossing and Efficacy Page

var mobileBreakPoint = 768;
var tabletBreakPoint = 1024;
var contentwidth = 0;

var wasFirstAnimationShowed = false;
var wasSecondAnimationShowed = false;

document.body.scrollTop = document.documentElement.scrollTop = 0;

$(document).ready(function(){
    contentwidth = $(window).width();
    changeImageSrc();
    moveSuperScriptGraphic();
    
    if(!wasFirstAnimationShowed)
    {
        resetFirstGraphic();
    }
    if(!wasSecondAnimationShowed)
    {
        resetSecondGraphic();
    }
    
    if(isMobile)
    {
        setFirstGraphicAsMobile();
        setSecondGraphicAsMobile();
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
        setSecondGraphicAsMobile();
    }else
    {
        setFirstGraphicAsDesktop();
        setSecondGraphicAsDesktop();
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
         
         newPath = $(".chart-2 img").attr("src").replace("desktop", "mobile");
         $(".chart-2 img").attr("src", newPath);
         
     }else
     {
         $(".img-chart img").each(function(){
             var newPath = $(this).attr("src").replace("mobile", "desktop");
             $(this).attr("src", newPath);
        });  
        
         newPath = $(".chart-2 img").attr("src").replace("mobile", "desktop");
         $(".chart-2 img").attr("src", newPath);
         
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
    
}

function initWayPoint()
{
    var isInview = true;
    if (isInview) 
    { 
       $('#chart-1').waypoint(function(){
           if(!wasFirstAnimationShowed)
           {
               resetFirstGraphic();
               animateFirstGraphic();
               isInview = false;
           }
       },{offset:'40%',}); 
       
       $('#chart-3').waypoint(function(){
           if(!wasSecondAnimationShowed)
           {
               resetSecondGraphic();
               animateSecondGraphic();
               isInview = false;
           }
       },{offset:'40%',}); 
    }else
    {
        setTimeout(function(){
            isInview = true;
        },1000);
    }
}

/*********************************************** First Chart Animation ***********************************************/

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
    }else{
        $(".quote").css("opacity", "1");  
    }
}

function animateFirstGraphic()
{
    if(!wasFirstAnimationShowed)
    {
        wasFirstAnimationShowed = true;
        
        TweenLite.to($("#chart-animation-1"), 1.5, { css: { height: '108px', top: '-108px' },ease:Power1.easeOut } );
        TweenLite.to($("#chart-animation-2"), 1.5, { css: { height: '43px', top: '-43px' },ease:Power1.easeOut } );
        TweenLite.to($("#chart-animation-3"), 1.5, { css: { height: '226px', top: '-226px' },ease:Power1.easeOut } );
        TweenLite.to($("#chart-animation-4"), 1.5, { css: { height: '126px', top: '-126px' },ease:Power1.easeOut, onComplete:showLevelQuoteAndNumbers } );
    }
}

function showLevelQuoteAndNumbers()
{
    TweenLite.to($(".level-graph"), 0.2, { css: { opacity: 1} } );
    TweenLite.to($(".indicator-1"), 0.2, { css: { opacity: 1}, delay:0.2 } );
    TweenLite.to($(".indicator-2"), 0.2, { css: { opacity: 1}, delay:0.2 } );
    
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

/*********************************************** Second Chart Animation ***********************************************/

function resetSecondGraphic()
{
    TweenLite.killTweensOf("#bar-1");
    TweenLite.killTweensOf("#bar-2");
    TweenLite.killTweensOf("#bar-3");
    TweenLite.killTweensOf("#bar-4");
    TweenLite.killTweensOf("#bar-5");
    TweenLite.killTweensOf("#bar-6");
    TweenLite.killTweensOf("#bar-7");
    TweenLite.killTweensOf("#bar-8");
    TweenLite.killTweensOf("#bar-9");
    TweenLite.killTweensOf("#bar-10");
    TweenLite.killTweensOf("#bar-11");
    TweenLite.killTweensOf("#bar-12");
    
    $("#bar-1").css("height","0px");
    $("#bar-1").css("top","0px");
    $("#bar-2").css("height","0px");
    $("#bar-2").css("top","0px");
    $("#bar-3").css("height","0px");
    $("#bar-3").css("top","0px");
    $("#bar-4").css("height","0px");
    $("#bar-4").css("top","0px");
    $("#bar-5").css("height","0px");
    $("#bar-5").css("top","0px");
    $("#bar-6").css("height","0px");
    $("#bar-6").css("top","0px");
    $("#bar-7").css("height","0px");
    $("#bar-7").css("top","0px");
    $("#bar-8").css("height","0px");
    $("#bar-8").css("top","0px");
    $("#bar-9").css("height","0px");
    $("#bar-9").css("top","0px");
    $("#bar-10").css("height","0px");
    $("#bar-10").css("top","0px");
    $("#bar-11").css("height","0px");
    $("#bar-11").css("top","0px");
    $("#bar-12").css("height","0px");
    $("#bar-12").css("top","0px");
    
   
    $(".legend-graph").css("opacity", "0");
    $(".indicator").css("opacity", "0");
}

function animateSecondGraphic()
{
    if(!wasSecondAnimationShowed)
    {
        wasSecondAnimationShowed = true;
        TweenLite.to($("#bar-1"), 1.5, { css: { height: '296px', top: '-296px' },ease:Power1.easeOut } );
        TweenLite.to($("#bar-2"), 1.5, { css: { height: '276px', top: '-276px' },ease:Power1.easeOut } );
        TweenLite.to($("#bar-3"), 1.5, { css: { height: '192px', top: '-192px' },ease:Power1.easeOut } );
        TweenLite.to($("#bar-4"), 1.5, { css: { height: '96px', top: '-96px' },ease:Power1.easeOut } );
        TweenLite.to($("#bar-5"), 1.5, { css: { height: '85px', top: '-85px' },ease:Power1.easeOut } );
        TweenLite.to($("#bar-6"), 1.5, { css: { height: '65px', top: '-65px' },ease:Power1.easeOut } );
        TweenLite.to($("#bar-7"), 1.5, { css: { height: '104px', top: '-104px' },ease:Power1.easeOut } );
        TweenLite.to($("#bar-8"), 1.5, { css: { height: '95px', top: '-95px' },ease:Power1.easeOut } );
        TweenLite.to($("#bar-9"), 1.5, { css: { height: '67px', top: '-67px' },ease:Power1.easeOut } );
        TweenLite.to($("#bar-10"), 1.5, { css: { height: '95px', top: '-95px' },ease:Power1.easeOut } );
        TweenLite.to($("#bar-11"), 1.5, { css: { height: '88px', top: '-88px' },ease:Power1.easeOut } );    
        TweenLite.to($("#bar-12"), 1.5, { css: { height: '58px', top: '-58px' },ease:Power1.easeOut, onComplete:showLegendAndNumbers } );
    }
}

function showLegendAndNumbers()
{
    TweenLite.to($(".legend-graph"), 0.2, { css: { opacity: 1} } );
    TweenLite.to($(".indicator"), 0.2, { css: { opacity: 1}, } );
}

function setSecondGraphicAsMobile()
{
    $(".animation-2").children().hide(); 
}

function setSecondGraphicAsDesktop()
{
    $(".animation-2").children().show(); 
}