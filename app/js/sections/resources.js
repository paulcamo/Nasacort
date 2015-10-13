//JavaScript Document

var minDesktopScreen = 1400;
var minTabletScreen = 1024;

$(document).ready(function(){   
    keepAllContainersSameHeight();
    addRollOverEffect();
});

$(window).bind("resize", function(){
    clearTimeout($.data(this, 'resizeTimer'));
    $.data(this, 'resizeTimer', setTimeout(function() {
        //do something
        //alert("Haven't resized in 200ms!");
        keepAllContainersSameHeight();
    }, 500));
});

function keepAllContainersSameHeight()
{
    var biggerHeightPatients = 0;
    var biggerHeightPractice = 0;
    var contentwidth = $(window).width();
    
    $(".for-your-patients .resource-container").each(function(index){
        $(this).css("height", "auto");
    });
    $(".for-your-practice .resource-container").each(function(index){
        $(this).css("height", "auto");
    });

    if(isMobile)
    {
        biggerHeightPatients = "auto";
        biggerHeightPractice = "auto";
    }else
    {
        if(contentwidth < minDesktopScreen)
        {
            
            $(".for-your-patients .resource-container").each(function(index){
                if($(this).innerHeight() > 198)
                {
                    if($(this).innerHeight() >= biggerHeightPatients)
                    {
                       biggerHeightPatients = $(this).innerHeight(); 
                    }
                }
            });
            $(".for-your-practice .resource-container").each(function(index){
                if($(this).innerHeight() > 294)
                {
                    if($(this).innerHeight() >= biggerHeightPractice)
                    {
                       biggerHeightPractice = $(this).innerHeight(); 
                       if(contentwidth < minTabletScreen)
                        {
                             biggerHeightPractice = "auto";
                        }
                    }
                }
            });
        }
        else
        {
            biggerHeightPatients = "auto";
            biggerHeightPractice = "294px";
        } 
    }
    $(".for-your-patients .resource-container").each(function(index){
        $(this).css("min-height", biggerHeightPatients);
        $(this).css("height", biggerHeightPatients);
    });
    $(".for-your-practice .resource-container").each(function(index){
        $(this).css("min-height", biggerHeightPractice);
    });
}

function addRollOverEffect()
{
    $(".resource-container").each(function(index){
        $(this).mouseover(function() {
            $(this).addClass("highlighted");
        });
        $(this).mouseout(function() {
            $(this).removeClass("highlighted");
        });
    });
}

