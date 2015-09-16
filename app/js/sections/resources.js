//JavaScript Document

var minDesktopScreen = 1400;
var minTabletScreen = 1024;

$(document).ready(function(){   
    keepAllContainersSameHeight();
    addFancyVideo();
});

$(window).bind("resize", function(){
    keepAllContainersSameHeight();
});

function keepAllContainersSameHeight()
{
    var biggerHeightPatients = 0;
    var biggerHeightPractice = 0;
    var contentwidth = $(window).width();

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
    });
    $(".for-your-practice .resource-container").each(function(index){
        $(this).css("min-height", biggerHeightPractice);
    });
}

function addFancyVideo()
{
    $('.fancybox').fancybox();

    $('.fancybox')
        .attr('rel', 'media-gallery')
        .fancybox({
            openEffect : 'none',
            closeEffect : 'none',
            prevEffect : 'none',
            nextEffect : 'none',

            arrows : false,
            helpers : {
                media : {},
                buttons : {}
            }
        });
}

