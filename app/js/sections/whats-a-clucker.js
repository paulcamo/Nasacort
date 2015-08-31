//JavaScript Document

$(document).ready(function() {
    
    setGlassHeadsPopup();
    
});

var mariasHotSpots = [{x:"17.1%",y:"28.30%",id:"itchy"},{x:"40.78%",y:"10.98%",id:"nasal"},{x:"37.74%",y:"32.84%",id:"congestion"}];

function setGlassHeadsPopup()
{
    $("body a").on("click",function() { 
        if($(this).attr("data-type") === "maria")
        {
            
        }
    });
    
    addMariasHotSpots();
}

function addMariasHotSpots()
{
    for(var i = 0; i < mariasHotSpots.length; i++)
    {
         $("#glass-head #maria .hotspots-container").append("<div class='hotspot' id='"+ mariasHotSpots[i].id +"'></div>");
         $("#glass-head #maria .hotspots-container").find("#"+ mariasHotSpots[i].id).css("left", mariasHotSpots[i].x).css("top", mariasHotSpots[i].y);
    }
    $("#glass-head #maria .hotspots-container .hotspot").each(function(index) {
        $(this).on("click", function(){
            resetHotSpots();
            $(this).addClass("active");
            hideMariasAnatomy();
            var id = $(this).attr("id");
            $("#glass-head #maria").find("." + id).show();
        });
    });
}

function hideMariasAnatomy()
{
    $("#glass-head #maria .anatomy").hide();
}

function resetHotSpots()
{
    $("#glass-head .hotspot").removeClass("active");
}
