var desktop_mininum_width = 769;
var desktop_maximum_width = 1400;
var assets_maximum_width = 1800;

var breakpoint_mobile = '320px';
var breakpoint_mobile_max = '768px';
var media_query = "screen and (min-width: " + breakpoint_mobile + ") and (max-width: " + breakpoint_mobile_max + ")";
var media_query_tablet = "screen and (min-width: " + desktop_mininum_width + "px) and (max-width: " + desktop_maximum_width + "px)";


var xx = (window.innerWidth / 35);
var css = document.createElement("style");
css.type = "text/css";
css.innerHTML = "body { font-size: " + xx + "px }";
document.body.appendChild(css);


var finalSlide=1;
var currentSlide=0;
var playedSlides = [9,1,0,0,0,0];
var lastScrollTop=0;
var scrollflag=0;
var timer = null;
var actualSlide=1;


var pixel01=0;

var tl = new TimelineMax({paused:true});



tl  // ----------------------------------------------------------------------------

    .addLabel('cta1')

    // --- slide 02 ---------------------------------------------------------------

    .to('#header', 1,                    {marginTop: '-29px',  ease: Sine. easeIn} , '+=0')
    .to('#slide1-textbox', 3,            {top: '-900px',  ease: Sine. easeIn} , '-=1')
    .to('#slide01', 3,                   {top: '-900px',  ease: Sine. easeIn} , '-=3')
    .to('#background', 3,                {top: '-10.7em',  ease: Sine. easeIn} , '-=3')
    .fromTo('#herolink', 3,           {top: '0px'}, {top: '-900px'} , '-=3')
    .fromTo('.footnote[data-section="home-2"]', 3,      {opacity: 0}, {opacity: 1} , '-=3')
    .fromTo('#slide2useonly', 3,      {opacity: 0}, {opacity: 1} , '-=3')
    .to('#slide02', 2.8,                   {marginTop: '-15em',  ease: Sine.easeIn} , '-=3')
    .to('#bottle', 1.5,                 {marginTop: '16.2em',scale: '2.5',left: '28.1%',ease: Sine.easeOut } , '-=1.5')
    .to('#cap', 1.5,                    {marginTop: '14.4em', scale: '2.5', left: '30.7%', height: '4em', ease: Sine.easeOut} , '-=1.5')
    .to('#cap', 0.7,                  {marginTop: '7.5em', ease: Power1.easeOut} , '+=0')
    .to('#cap', 1,                    {marginTop: '16.7em', left: '92%', rotation: 35, ease: Cubic.easeInOut} , '+=0')
    .to('#no-scent', 0.8,             {height: '8em'} , '+=0')
    .fromTo($('#nasacort-compare'), 1.5, {right: '-35%'}, {right: '20.4%', ease: Power1.easeOut} , '+=0')
    .addLabel('cta2')
    .add(callback_function)

    // --- slide 03 ---------------------------------------------------------------

    .to('#background', 3,    {top: '-33em', ease: Power2.easeOut}, '+=0')
    .to('#slide02', 3,       {marginTop: '-34em', ease: Power1.easeOut}, '-=3')
    .to('#slide03', 3,       {top: '139px'}, '-=3')
    .to('#compare-copy', 1,  {left: '23%'}, '+=0')
    .to('#compare-bg', 1,    {top: '1.4em'}, '+=0')
    .to('#stats', 1,         {height: '30.5%'}, '+=0')
    .addLabel('cta3')
    .add(callback_function)

    // --- slide 04 ---------------------------------------------------------------

    .to('#background', 4,    {top: '-53em', ease: Expo.easeOut}, '+=0')
    .to('#slide03', 2,       {top: '-16em', ease: Power1.easeOut}, '-=4')
    .to('#slide04', 2,       {marginTop: '-2em', ease: Power1.easeOut}, '-=4')
    .to('#patient-box', 3,   {left: '0px', ease: Power0.easeIn}, '-=1')
    .addLabel('cta4')
    .add(callback_function)

    // --- slide 05 ---------------------------------------------------------------

    .to('#background', 3,        {top: '-70.5em', ease: Power1.easeOut}, '+=0')
    .to('#slide04', 3,           {top: '-16em', ease: Power1.easeOut}, '-=3')
    .to('#slide05', 3,           {top: '-13em', ease: Power1.easeOut}, '-=3')
    .to('#yellow-spike', 3,      {top: '-2em', ease: Power1.easeOut}, '-=3')
    .to('#understand-box', 2,    {left: '30%', ease: Power1.easeOut}, '+=0')
    .addLabel('cta5')
    .add(callback_function)

    // --- footer ---------------------------------------------------------------

    .to('#background', 1,       {top:'-78.6em', ease: Power0.easeIn}, '+=0')
    .to('#slide05', 1,          {top:'-22em', ease: Power0.easeIn}, '-=1')
    .to('#dots-container', 1,   {height:'1230px', ease: Power0.easeIn}, '-=1')
    .to('#cyan-box', 0.3,   {height:'200px', ease: Power0.easeIn}, '-=1')
;  // --- end ---------------------------------------------------------------










// --------------------------------------------------------------------


$(document).ready(function() {

    $( 'html, body' ).scrollTop(0); //reset scroll to top ....
    $('body').flowtype( { minimum : 500,  maximum : 1800  }); // set flowtype ...
    $("#dots-container .dotbox .dot:eq(0)").addClass("dot-on");  // set first dot in blue ....
    set_dotbox(); set_footer_width(); // set the dotbox to the right side of the screen ....
    $(".nassacort-logo .little-house").addClass("active-house"); // set the homepage at the main menu
    $(".footer").addClass("footer-for-homepage"); // set the homepage at the main menu
    isMobile = window.matchMedia && window.matchMedia(media_query).matches;
    isTablet =  window.matchMedia(media_query_tablet).matches;
    set_variables();
    scrollflag=0;



// ---loop animation for carousel------------------------------------------------------------------------------------------------------

    var tl1 = new TimelineMax({repeat:-1});
    var tl2 = new TimelineLite();


    var tl_mobile = new TimelineMax({repeat:-1});


    tl1
        .to("#carousel1", 8,    {scale:1.10, ease: Power0.easeNone} , '+=1')
        .to("#carousel2", 1.5,  {opacity:1, ease: Power2.easeOut}   , '-=2')
        .to("#lady01", 1.5,     {opacity:0, ease: Power2.easeOut}   , '-=2')
        .to("#lady02", 1.5,     {opacity:1, ease: Power4.easeOut}   , '-=2')
        .to("#carousel3", 1.5,  {opacity:1, ease: Power2.easeOut}   , '+=8')
        .to("#carousel2", 0,    {opacity:0, ease: Power0.easeNone}  , '+=0')
        .to("#carousel1", 0,    {scale:1 , ease: Power0.easeNone}   , '+=0')
        .to("#lady03", 1.5,     {opacity:1, ease: Power4.easeOut}   , '-=1.5')
        .to("#lady02", 0,       {opacity:0 , ease: Power0.easeNone} , 'cta+=0')
        .to("#carousel3", 1.5,  {opacity:0, ease: Power2.easeOut}   , '+=8')
        .to("#lady01", 1.5,     {opacity:1 , ease: Power2.easeOut}  , '-=1.5')
        .to("#lady03", 1.5,     {opacity:0 , ease: Power0.easeNone} , '-=1.5')
    ;

    //tl1.seek('cta');

    tl2.to("#slide1-textbox", 5,    {left: "40.6%"} , '+=1.5');

    tl_mobile
        .to("#carousel-mobile-2", 1,    {opacity: 1, ease: Power0.easeNone} , '+=3')
        .to("#carousel-mobile-3", 1,    {opacity: 1, ease: Power0.easeNone} , '+=3')
        .to("#carousel-mobile-1", 0,    {opacity: 1, ease: Power0.easeNone} , '-=0')
        .to("#carousel-mobile-2", 0,    {opacity: 0, ease: Power0.easeNone} , '-=0')
        .to("#carousel-mobile-3", 1,    {opacity: 0, ease: Power0.easeNone} , '+=3')
    ;



// ------------------------------------------------------------------------------------------------------------------------------------



    $(".patient").on("mouseenter",function() { $(this).find(".textbox").addClass("textboxhover");   });

    $(".patient").on("mouseleave",function() { $(this).find(".textbox").removeClass("textboxhover");  });

    $("#sec01").on("click",function(e) {e.preventDefault(); animate(1); });
    $("#sec02").on("click",function(e) {e.preventDefault(); animate(2); });
    $("#sec03").on("click",function(e) {e.preventDefault(); animate(3); });
    $("#sec04").on("click",function(e) {e.preventDefault(); animate(4); });
    $("#sec05").on("click",function(e) {e.preventDefault(); animate(5); });


});







$(window).bind("resize", function(){
    set_dotbox();
    set_footer_width();
    set_variables();
});




function set_variables(){

    if ( isTablet) {
       // console.log ("  isTablet  !!! ");
        pixel01= "139px";
        pixel02='2.8em';


    } else {
        pixel01= "81px";
        pixel02='.06em';

    }


}





function set_footer_width(){
    $('#background .footer').css("width",$(window).width());
    $('#background .footer').css("left", -(($(window).width() - $('#background').innerWidth())/2) + "px");
}


function set_dotbox(){
    var x, y;

    if ($(window).width() > assets_maximum_width){
        x= ($(window).width() - assets_maximum_width) / 2 + "px";
    }else {
        x="0px";
    }


    $("#dots-container .dotbox").css("right", x);


    if (actualSlide!=6) {  // if we are not in the footer...
        y = $(window).height() - $("#header").innerHeight();
        $("#dots-container").css("height", y);
    }

}



// ---------------------------------------------------------------------------------------

$(window).scroll(function() {
    //$.doTimeout( 'scroll', 50, function(){
    //    // do something computationally expensive
    //    desktopStickyHeader($(this).scrollTop());
    //});


    //if($(window).scrollTop() + $(window).height() == $(document).height()) {
    //    console.log("bottom!");
    //}



});

// ---------------------------------------------------------------------------------------

$("#dots-container .dotbox .dot").on("click",function(e){
    e.preventDefault();
    $("#dots-container .dotbox .dot").removeClass("dot-on");
    $(this).addClass("dot-on");
});

// ---------------------------------------------------------------------------------------

$('.footnote').on('click', function(e) {
    if($(this).attr("state") != "open"){
        var parentHeight = $(this).data("parent");
        var hh = $(parentHeight).outerHeight();
        var buttonHeight = $(this).height();
        var currentMarginTop = $(this).css("margin-top");
        $(this).attr("state", "open");
        var animation = $(this).find(".animation");
        if(isMobile)
        {
            $(parentHeight).css("height",hh);
            $(this).css("width","100%");
            animation.css("width","100%");
        }else
        {
            animation.css("width","492px");
            $(this).attr("currentMarginTop", currentMarginTop);
        }
        animation.show();
        //console.log(Math.abs(parseInt(currentMarginTop)) + " >> " + animation.outerHeight() + " >> " + buttonHeight + " >> " +  animation.innerHeight() + " >>> " + animation.height());
        expandTop = animation.outerHeight() - buttonHeight;
        animation.css("margin-top", -expandTop);

        e.preventDefault();
    }

});

$('.footnote .close-btn').on('click', function(e) {
    e.stopPropagation();
    var parentHeight = $(this).parent().parent().data("parent");
    $(this).parent().hide();
    $(this).parent().parent().attr("state", "closed");
    $(this).parent().parent().css("margin-top", $(this).parent().parent().attr("currentMarginTop"));
    if(isMobile)
    {
        $(this).parent().parent().css("width","13.75%");
        $(parentHeight).css("height","auto");
        $(this).parent().parent().css("margin-top", "");
    }else
    {
        $(this).parent().parent().css("width","width: 11.5%");
    }
    e.preventDefault();
});

// ---------------------------------------------------------------------------------------

function desktopStickyHeader(y){

    if ($(window).width() >= desktop_mininum_width ) {
        sticky_height =200;


        if ($(window).width() >= desktop_maximum_width){
            vtop="120px";
        }else {
            vtop="148px";
        }



    } else {
        sticky_height =10;
        vtop="127px";
    }

    if (y > sticky_height) {
        $('#header').animate({top: "-29px"}, 300);
        $('.first-container').animate({paddingTop: "0"}, 300);
        $('.clucker-container').animate({marginTop: "0"}, 300);
        headerCollapsed = 1;
    } else {
        $('#header').animate({top: "0px"}, 300);
        $('.first-container').animate({paddingTop: vtop}, 300);
        $('.clucker-container').animate({marginTop: vtop}, 300);
    }

}

// ---------------------------------------------------------------------------------------


$(document).mousewheel(function(evt){
    if (scrollflag===0) {
        scrollflag=1;
        setTimeout(select_a_slide(evt.deltaY) ,800);
    }
});

// ---------------------------------------------------------------------------------------



function select_a_slide(v) {



    var valor=0;


    if (v>=0) {
        if(actualSlide<6) {
            finalSlide= actualSlide+=1;

            $("#dots-container .dotbox .dot").eq(actualSlide-1).click();


            if(actualSlide==6) {

                 tl.seek('cta5');
                timer=  window.setTimeout( zeroflag ,1000);
                tl.play();
            }


        }

        if(actualSlide==6) {
            timer=  window.setTimeout( zeroflag ,1000);
        }


    } else {


        if(actualSlide>=6) {
            tl.reverse();
            actualSlide=5;
            finalSlide=5;

        } else {


            if (actualSlide > 1) {
                finalSlide = actualSlide -= 1;
                $("#dots-container .dotbox .dot").eq(actualSlide-=1).click();
            }

            if(actualSlide==1) {
                timer=  window.setTimeout( zeroflag ,1000);
            }


        }

        //$.doTimeout( 'scroll', 700, function(){
        //    // do something computationally expensive
        //    console.log("el falg a cero");
        //    scrollflag=0;
        //});



        //
        //var y=finalSlide-=2;
        //// currentSlide-=2;
        //console.log("hago click en  -> " + (y));
        //$("#dots-container .dotbox .dot").eq(y).click();
        //
        //$.doTimeout( 'scroll', 700, function(){
        //    // do something computationally expensive
        //    console.log("el falg a cero");
        //    scrollflag=0;
        //});









    }


   // console.log(" afuera " + currentSlide);


}



function callback_function (){




    //console.log ("haciendo callback");
    //console.log ("el final es " + finalSlide + "  voy ->" + actualSlide);
    // console.log ( playedSlides);

   // $("#numero").text(actualSlide + " - " + finalSlide);

    if (finalSlide==actualSlide) {
        tl.pause();
        $(".dotcover").hide();
        playedSlides[actualSlide]=1;
        scrollflag=0;
      //  scrollSlideClick=finalSlide;
    }else {
        //  console.log ("el final es " + finalSlide + "  voy ->" + currentSlide);

        if (finalSlide>actualSlide) actualSlide++;
        playedSlides[actualSlide]=1;
        // console.log("voy a animar hasta el slide " + finalSlide + " estoy en " + actualSlide);


        $("#dots-container .dotbox .dot").removeClass("dot-on");
        $("#dots-container .dotbox .dot").eq(actualSlide-1).addClass("dot-on");
    }






}





function animate(n) {
    finalSlide=n;

    if (finalSlide>actualSlide) actualSlide++;

    if (playedSlides[actualSlide]===0) {
        playedSlides[actualSlide]=1;
        $(".dotcover").show();
        $("#dots-container .dotbox .dot").removeClass("dot-on");
        $("#dots-container .dotbox .dot").eq(actualSlide-1).addClass("dot-on");
        tl.play();
    } else {
        tl.pause();
        if (n==1) tl.seek('cta1');
        if (n==2) tl.seek('cta2');
        if (n==3) tl.seek('cta3');
        if (n==4) tl.seek('cta4');
        if (n==5) tl.seek('cta5');
        actualSlide=finalSlide;
        window.clearTimeout(timer);
        timer=  window.setTimeout( zeroflag ,500);
    }

}


function zeroflag() {  scrollflag=0;  }