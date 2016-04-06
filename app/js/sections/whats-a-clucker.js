//JavaScript Document
var mobileBreakPoint = 768;
var isMobile;

$(document).ready(function() {   
    isMobile = window.matchMedia && window.matchMedia(media_query).matches;
    setGlassHeadsPopup();
    addAudioPlayer();
    toggleTooltip();
    clickGoSection();

    var contentwidth = $(window).width();
    if ((contentwidth) >= mobileBreakPoint){
        hoverInNav();
        clickInNav();
    }
});

$(window).bind("resize", function(){
    isMobile = window.matchMedia && window.matchMedia(media_query).matches;
    var contentwidth = $(window).width();
    if (contentwidth < mobileBreakPoint){
        hoverInNav();
        clickInNav();
        $('.img-container>ul>li').off("click");
        $('.img-container>ul>li').off("hover");
        $('.info-text>ul>li').off("click");
        $('.info-text>ul>li').off("hover");
        $('.img-container>ul>li .hover_img').hide();
        $('.img-container>ul>li .normal_img').show();
        $('.img-container>ul>li').css({'z-index':'0','opacity':'1' });
        $('.img-container>ul>li.li_maria').css({'z-index':'1'});
        
        $('.click_state').removeClass('click_state');
        $(".box").hide();
    }else{
        hoverInNav();
        clickInNav();
    }
});

var mariasHotSpots = [{x:"17.1%",y:"36.30%",id:"itchy",dataTracking:""},{x:"40.78%",y:"10.98%",id:"nasal"},{x:"37.74%",y:"32.84%",id:"congestion"}];
var marksHotSpots = [{x:"37.64%",y:"29.84%",id:"nasal"},{x:"25.49%",y:"47.30%",id:"histamine"}];
var karasHotSpots = [{x:"27.94%",y:"28.30%",id:"congestion"},{x:"40.19%",y:"20%",id:"inflamation"}];
var liamsHotSpots = [{x:"17.1%",y:"28.30%",id:"itchy"},{x:"40.78%",y:"10.98%",id:"nasal"},{x:"37.74%",y:"32.84%",id:"congestion"}];

var currentCharacter = "";
var currentGlassHead = "";

function setGlassHeadsPopup()
{
    hideAllAnatomies();
    
    $("body a").not($(".listen")).on("click",function() { 
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
        if(currentGlassHead === "" && !isMobile)
        { 
            if(currentCharacter !== "")
            {
                $("#glass-head #" + currentCharacter + " .default").show(); 
            }  
        }
        if(currentGlassHead === "" && isMobile)
        { 
             showAllAnatomies();
             $("#glass-head .default").hide();
        }
        
    });
    
    /*$('#glass-head').on('shown.bs.modal', function (event) {
        console.log(event.relatedTarget);
    });*/
    
    $("#glass-head #close").on("click",function(){
        $('#glass-head').modal('hide');
        trackGlassHeadClose(currentCharacter);
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
        addHotSpots("maria", mariasHotSpots);
        addHotSpots("mark", marksHotSpots);
        addHotSpots("kara", karasHotSpots);
        addHotSpots("liam", liamsHotSpots);
    }
}

function addHotSpots(character, positions)
{
    for(var i = 0; i < positions.length; i++)
    {
         $("#glass-head #" + character + " .hotspots-container").append("<div class='hotspot' id='"+ positions[i].id +"'></div>");
         $("#glass-head #" + character + " .hotspots-container").find("#"+ positions[i].id).css("left", positions[i].x).css("top", positions[i].y);
    }
    $("#glass-head #" + character + " .hotspots-container .hotspot").each(function(index) {
        $(this).on("click", function(){
            resetHotSpots();
            $(this).addClass("active");
            hideAnatomy(character);
            var id = $(this).attr("id");
            currentGlassHead = id;
            $("#glass-head #" + character).find("." + id).show();
            trackGlassHeadHotSpot(character, id);
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

function hideAnatomy(id)
{
    $("#glass-head #" + id + " .anatomy").hide();
}

function showAllAnatomies()
{
    if(currentCharacter !== "")
    {
        $("#glass-head #" + currentCharacter + " .anatomy").show();
    }
}

function showCurrentAnatomy()
{
    if(currentCharacter !==  "")
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
    hideAnatomy("maria");
    hideAnatomy("mark");
    hideAnatomy("kara");
    hideAnatomy("liam");
    $("#glass-head .default").show();
}

$(window).bind("resize", function(){

    if(!isMobile)
    {
        if($('#glass-head #maria .hotspots-container').is(':empty')) 
        {
            addHotSpots("maria", mariasHotSpots);
            resetAnatomies();
        }
        
        if($('#glass-head #mark .hotspots-container').is(':empty')) 
        {  
            addHotSpots("mark", marksHotSpots);
            resetAnatomies();
        }
        if($('#glass-head #kara .hotspots-container').is(':empty')) 
        {
            addHotSpots("kara", karasHotSpots);
            resetAnatomies();
        }
        if($('#glass-head #liam .hotspots-container').is(':empty')) 
        {
            addHotSpots("liam", liamsHotSpots);
            resetAnatomies();
        }
        if(currentGlassHead !== "" && currentCharacter !== "")
        { 
            if(currentCharacter !== "")
            {
                if(currentCharacter !== "")
                {
                    $("#glass-head #" + currentCharacter + " .anatomy").hide();  
                }    
            }
             showCurrentAnatomy();   
        }
        if(currentGlassHead === "")
        {
            resetAnatomies();
        }
        
        $("#glass-head .hotspot").show();
        if(currentGlassHead !== "")
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

function addAudioPlayer()
{   
    var isReady = false;
    
    $('#glass-head .listen').click(function() {
        
        var audioPath = $(this).attr("path");
        //console.log("Audio Playing: " + audioPath + " is playing : " + $('#glass-head #media-container').attr("playing"));
        
        $(this).addClass("active");
        
        $("#glass-head #media-container").jPlayer( "destroy" );
        
        if($('#glass-head #media-container').attr("playing") === "false")
        {
            $('#glass-head #media-container').jPlayer({
                supplied : 'mp3, oga, wav',
                ready: function() {
                    jQuery(this).jPlayer("setMedia", {
                        mp3: audioPath
                    }).jPlayer("play");
                    //console.log("audio ready");
                },
                ended:function() {
                    //console.log("audio ended");
                    $('#glass-head .listen').removeClass("active");
                    $('#glass-head #media-container').attr("playing", "false");
                },
                play:function() {
                    $('#glass-head #media-container').attr("playing", "true");
                    //console.log("audio playing");
                }
            });
        }else
        {
            $('#glass-head #media-container').jPlayer("stop");
            $('#glass-head .listen').removeClass("active");
            isPlaying = false;
            $('#glass-head #media-container').attr("playing", "false");
            //console.log("audio stopped");
        }
    });
}

function hoverInNav(){

    var contentwidth = $(window).width();
    if ((contentwidth) >= mobileBreakPoint){
        var currentPerson, name, name_nav;
        $('.info-text>ul>li').hover(function(){
            $(this).addClass('hover');
            $(this).find('.arrow-upMenu').addClass('hover');
            currentPerson = $(this).find('a').attr('href');
            name = ".li_" + currentPerson.slice(5);
            $(name + " .normal_img").hide();
            $(name + " .hover_img").show();



            switch(name) {
                case ".li_maria":
                    $('#patient_title').text ("What’s a Clucker?");
                    break;
                case ".li_mark":
                    $('#patient_title').text ("What’s a Dripper?");
                    break;

                case ".li_kara":
                    $('#patient_title').text ("What’s a Mouthbreather?");
                    break;
                case ".li_liam":
                    $('#patient_title').text ("What’s a Sniffler?");
                    break;
            }


        },function(){
            if ( $(this).hasClass('click_state') === false ) {
                $(this).removeClass('hover');
                $(this).find('.arrow-upMenu').removeClass('hover');
                $('.img-container>ul>li .normal_img').show();
                $('.img-container>ul>li .hover_img').hide();
            }
        });

        $('.img-container>ul>li').hover(function(){
            currentPerson = $(this).find('a').attr('href');
            name = ".li_" + currentPerson.slice(5);
            name_nav = ".li_nav_" + currentPerson.slice(5);
            $(name_nav).addClass('hover');
            $(name_nav).find('.arrow-upMenu').addClass('hover');
            $(name + " .normal_img").hide();
            $(name + " .hover_img").show();




            switch(name) {
                case ".li_maria":
                    $('#patient_title').text ("What’s a Clucker?");
                    break;
                case ".li_mark":
                    $('#patient_title').text ("What’s a Dripper?");
                    break;

                case ".li_kara":
                    $('#patient_title').text ("What’s Mouthbreather?");
                    break;
                case ".li_liam":
                    $('#patient_title').text ("What’s Sniffler?");
                    break;
            }




        },function(){
            if ( $(this).hasClass('click_state') === false ) {
                $(name + " .normal_img").show();
                $(name + " .hover_img").hide();
                $(".info-text>ul>li" + name_nav).removeClass('hover');
                $(".info-text>ul>li" + name_nav).find('.arrow-upMenu').removeClass('hover');
            }
        });        
    } else{
        $(".img-container>ul>li").off();
    }

    

}

function clickInNav() {

    var contentwidth = $(window).width();
    if ((contentwidth) >= mobileBreakPoint){
        var currentPerson, name;
        $('.img-container>ul>li').click(function(e){
            e.preventDefault();

            $(this).addClass('click_state');
            // $(this).addClass('.active');
            $('.img-container>ul>li').css('opacity','0.2');
            $(this).css({'z-index':'2','opacity':'1'});
            // hover state
            $(this).find('img.normal_img').hide();
            $(this).find('img.hover_img').show();
            //Box
            currentPerson = $(this).find('a').attr('href');
            name = ".li_nav_" + currentPerson.slice(5);
            $(name).addClass('click_state');
            $(currentPerson).show('fast');
        });
        $('.info-text>ul>li').click(function(e){
            e.preventDefault();
            $(this).addClass('click_state');
            $('.img-container>ul>li').css('opacity','0.2');
            currentPerson = $(this).find('a').attr('href');
            name = ".li_" + currentPerson.slice(5);
            $(name).css({'z-index':'2','opacity':'1'});
            $(name).addClass('click_state');
            $(name + " .normal_img").hide();
            $(name + " .hover_img").show();
            $(currentPerson).show('fast');
        });

        // on click out of modal
        var container = $(".box");
        $(document).mouseup(function (e){
            if (!container.is(e.target)&& container.has(e.target).length === 0){
                $('.img-container>ul>li .normal_img').show();
                $('.img-container>ul>li .hover_img').hide();
                container.hide('fast');
                $('.img-container>ul>li').css({'z-index':'0','opacity':'1' });
                $('.img-container>ul>li.li_maria').css({'z-index':'0'});
                $('.click_state').removeClass('hover');
                $('.click_state').find('.arrow-upMenu').removeClass('hover');
                $('.click_state').removeClass('click_state');
            }
        });

        // on click close box
        $('.close').click(function(e){
            $('.img-container>ul>li .normal_img').show();
            $('.img-container>ul>li .hover_img').hide();
            container.hide('fast');
            $('.img-container>ul>li').css({'z-index':'0','opacity':'1' });
            $('.img-container>ul>li.li_maria').css({'z-index':'0'});
            $('.click_state').removeClass('hover');
            $('.click_state').find('.arrow-upMenu').removeClass('hover');
            $('.click_state').removeClass('click_state');
        });
    }else{
        $(".img-container>ul>li").off();
    }

}

function toggleTooltip(){
    $('.wac-question').click(function(event) {
        event.preventDefault();
        var currentTootip = $(this).attr('href');
        $(".tooltip." + currentTootip).toggle('fast');
    });

    $('.x-btn').click(function(event) {
        event.preventDefault();
        var currentTootip = $(this).attr('href');
        $(".tooltip." + currentTootip).hide('fast');
    });
}

function clickGoSection(){
    $('.white_content').click(function(event){
        $('.img-container>ul>li .normal_img').show();
        $('.img-container>ul>li .hover_img').hide();
        $('.box').hide('fast');
        $('.img-container>ul>li').css({'z-index':'0','opacity':'1' });
        $('.img-container>ul>li.li_maria').css({'z-index':'1'});
        $('.click_state').removeClass('hover');
        $('.click_state').find('.arrow-upMenu').removeClass('hover');
        $('.click_state').removeClass('click_state');

    });
}











