//JavaScript Document

$(document).ready(function() {   
    setGlassHeadsPopup();
});

var mariasHotSpots = [{x:"17.1%",y:"28.30%",id:"itchy"},{x:"40.78%",y:"10.98%",id:"nasal"},{x:"37.74%",y:"32.84%",id:"congestion"}];
var marksHotSpots = [{x:"37.64%",y:"29.84%",id:"nasal"},{x:"25.49%",y:"40.30%",id:"histamine"}];
var karasHotSpots = [{x:"27.94%",y:"28.30%",id:"congestion"},{x:"40.19%",y:"20%",id:"inflamation"}];
var liamsHotSpots = [{x:"17.1%",y:"28.30%",id:"itchy"},{x:"40.78%",y:"10.98%",id:"nasal"},{x:"37.74%",y:"32.84%",id:"congestion"}];

var currentCharacter = "";
var currentGlassHead = "";

function setGlassHeadsPopup()
{
    hideAllAnatomies();
    
    $("body a").on("click",function() { 
        $("#glass-head .modal-header h1").text($(this).attr("title"));
        
        if(!isMobile)
        {
            hideAllAnatomies();
        }
        
        currentCharacter = $(this).attr("data-type");
        
        if($(this).attr("data-type") === "maria")
        {
            $("#glass-head #maria").show();
        }
        if($(this).attr("data-type") === "mark")
        {
            $("#glass-head #mark").show();
        }
        if($(this).attr("data-type") === "kara")
        {
            $("#glass-head #kara").show();
        }
        if($(this).attr("data-type") === "liam")
        {
            $("#glass-head #liam").show();
        }
        if(currentGlassHead == "" && !isMobile)
        { 
             $("#glass-head #" + currentCharacter + " .default").show();   
        }
        if(currentGlassHead == "" && isMobile)
        { 
             showAllAnatomies();
             $("#glass-head .default").hide();
        }
        
    });
    
    $("#glass-head #close").on("click",function(){
        $('#glass-head').modal('hide');
        currentCharacter = "";
        currentGlassHead = "";
        if(!isMobile)
        {
            resetHotSpots();
            resetAnatomies();
        }else
        {
            hideAllAnatomies();
        }
    });
    
    if(!isMobile)
    {
        addMariasHotSpots();
        addMarksHotSpots();
        addKarasHotSpots();
        addLiamsHotSpots();
    }
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
            currentGlassHead = id;
            $("#glass-head #maria").find("." + id).show();
        });
    });
}

function addMarksHotSpots()
{ 
    for(var i = 0; i < marksHotSpots.length; i++)
    {
         $("#glass-head #mark .hotspots-container").append("<div class='hotspot' id='"+ marksHotSpots[i].id +"'></div>");
         $("#glass-head #mark .hotspots-container").find("#"+ marksHotSpots[i].id).css("left", marksHotSpots[i].x).css("top", marksHotSpots[i].y);
    }
    $("#glass-head #mark .hotspots-container .hotspot").each(function(index) {
        $(this).on("click", function(){
            resetHotSpots();
            $(this).addClass("active");
            hideMarksAnatomy();
            var id = $(this).attr("id");
            currentGlassHead = id;
            $("#glass-head #mark").find("." + id).show();
        });
    });
}

function addKarasHotSpots()
{
    for(var i = 0; i < karasHotSpots.length; i++)
    {
         $("#glass-head #kara .hotspots-container").append("<div class='hotspot' id='"+ karasHotSpots[i].id +"'></div>");
         $("#glass-head #kara .hotspots-container").find("#"+ karasHotSpots[i].id).css("left", karasHotSpots[i].x).css("top", karasHotSpots[i].y);
    }
    $("#glass-head #kara .hotspots-container .hotspot").each(function(index) {
        $(this).on("click", function(){
            resetHotSpots();
            $(this).addClass("active");
            hideKarasAnatomy();
            var id = $(this).attr("id");
            currentGlassHead = id;
            $("#glass-head #kara").find("." + id).show();
        });
    });
}

function addLiamsHotSpots()
{ 
    for(var i = 0; i < liamsHotSpots.length; i++)
    {
         $("#glass-head #liam .hotspots-container").append("<div class='hotspot' id='"+ liamsHotSpots[i].id +"'></div>");
         $("#glass-head #liam .hotspots-container").find("#"+ liamsHotSpots[i].id).css("left", liamsHotSpots[i].x).css("top", liamsHotSpots[i].y);
    }
    $("#glass-head #liam .hotspots-container .hotspot").each(function(index) {
        $(this).on("click", function(){
            resetHotSpots();
            $(this).addClass("active");
            hideLiamsAnatomy();
            var id = $(this).attr("id");
            currentGlassHead = id;
            $("#glass-head #liam").find("." + id).show();
        });
    });
}

function hideAllAnatomies()
{
    $("#glass-head #maria").hide();
    $("#glass-head #mark").hide();
    $("#glass-head #kara").hide();
    $("#glass-head #liam").hide();
       
}

function hideMariasAnatomy()
{
    $("#glass-head #maria .anatomy").hide();
}

function hideMarksAnatomy()
{
    $("#glass-head #mark .anatomy").hide();
}

function hideKarasAnatomy()
{
    $("#glass-head #kara .anatomy").hide();
}

function hideLiamsAnatomy()
{
    $("#glass-head #liam .anatomy").hide();
}

function showAllAnatomies()
{
    if(currentCharacter != "")
    {
        $("#glass-head #" + currentCharacter + " .anatomy").show();
    }
}

function showCurrentAnatomy()
{
    if(currentCharacter !=  "")
    {
        $("#glass-head #" + currentCharacter + " ." + currentGlassHead).show();   
    }
}

function resetHotSpots()
{
    $("#glass-head .hotspot").removeClass("active");
}

function hideHotSpots()
{
    $("#glass-head .hotspot").hide();
}

function resetAnatomies()
{
    hideMariasAnatomy();
    hideMarksAnatomy();
    hideKarasAnatomy();
    hideLiamsAnatomy();
    $("#glass-head .default").show();
}

$(window).bind("resize", function(){

    if(!isMobile)
    {
        if($('#glass-head #maria .hotspots-container').is(':empty')) 
        {
            addMariasHotSpots();
            resetAnatomies();
        }
        
        if($('#glass-head #mark .hotspots-container').is(':empty')) 
        {  
            addMarksHotSpots();
            resetAnatomies();
        }
        if($('#glass-head #kara .hotspots-container').is(':empty')) 
        {
            addKarasHotSpots();
            resetAnatomies();
        }
        if($('#glass-head #liam .hotspots-container').is(':empty')) 
        {
            addLiamsHotSpots();
            resetAnatomies();
        }
        if(currentGlassHead != "" && currentCharacter != "")
        { 
            if(currentCharacter != "")
            {
                $("#glass-head #" + currentCharacter + " .anatomy").hide();  
            }
             showCurrentAnatomy();   
        }
        if(currentGlassHead == "")
        {
            resetAnatomies();
        }
        
        $("#glass-head .hotspot").show();
        if(currentGlassHead != "")
        {
            $("#glass-head .hotspots-container #" + currentGlassHead).addClass("active");
        }

    }else
    { 
        resetHotSpots();
        hideHotSpots();
        showAllAnatomies();
        $("#glass-head .default").hide();   
    }
});
