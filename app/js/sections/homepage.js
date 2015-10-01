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
var playedSlides = [1,0,0,0,0];
var lastScrollTop=0;
var scrollflag=0;
var timer = null;
var scrollSlideClick=1;

var pixel01=0;

var tl = new TimelineMax({paused:true});


function callback_function (){


    currentSlide++;


    playedSlides[currentSlide-1]=1;


    console.log ("el final es " + finalSlide + "  voy ->" + currentSlide);
    console.log ( playedSlides);



    if (finalSlide==currentSlide) {
        tl.pause();
        $(".dotcover").hide();
        scrollflag=0;
        scrollSlideClick=finalSlide;
    }else {
        console.log ("el final es " + finalSlide + "  voy ->" + currentSlide);
        $("#dots-container .dotbox .dot").removeClass("dot-on");
        $("#dots-container .dotbox .dot").eq(currentSlide).addClass("dot-on");
    }





}



tl  // ----------------------------------------------------------------------------

    .addLabel('cta1')
    .add(callback_function)

    // --- slide 02 ---------------------------------------------------------------

    .to('#header', 1,                    {marginTop: '-29px',  ease: Sine. easeIn} , '+=0')
    .to('#slide1-textbox', 3,            {top: '-900px',  ease: Sine. easeIn} , '-=1')
    .to('#slide01', 3,                   {top: '-900px',  ease: Sine. easeIn} , '-=3')
    .to('#background', 3,                {top: '-10.7em',  ease: Sine. easeIn} , '-=3')
    .fromTo($('#herolink'), 3,           {top: '0px'}, {top: '-900px'} , '-=3')
    .to('#slide02', 4,                   {marginTop: '-15em',  ease: Sine. easeInOut} , '-=6')
    .to($('#bottle'), 6,                 {marginTop: '16.2em',scale: '2.5',left: '28.1%',ease: Power1.easeOut } , '-=6')
    .to($('#cap'), 6,                    {marginTop: '14.4em', scale: '2.5', left: '30.7%', height: '4em', ease: Power1.easeOut} , '-=6')
    .to($('#cap'), 0.7,                  {marginTop: '7.5em', ease: Power1.easeOut} , '+=0')
    .to($('#cap'), 1,                    {marginTop: '16.7em', left: '92%', rotation: 35, ease: Cubic.easeInOut} , '+=0')
    .to($('#no-scent'), 0.8,             {height: '8em'} , '+=0')
    .fromTo($('#nasacort-compare'), 1.5, {right: '-35%'}, {right: '20.4%', ease: Power1.easeOut} , '+=0')
    .addLabel('cta2')
    .add(callback_function)

    // --- slide 03 ---------------------------------------------------------------

    .to('#background', 3,    {top: '-33em', ease: Power2.easeOut}, '+=0')
    .to('#slide02', 3,       {marginTop: '-34em', ease: Power1.easeOut}, '-=3')
    .to('#slide03', 3,       {top: '1.6em'}, '-=3')
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



    $(".patient").on("mouseenter",function() {

        $(this).find(".textbox").addClass("textboxhover");
    });

    $(".patient").on("mouseleave",function() {

        $(this).find(".textbox").removeClass("textboxhover");
    });



    // ----- to go to slide 1 -------------------------------------------------------------------------------------------------------------------------------

    $("#sec01").on("click",function(e) {
        e.preventDefault();
        finalSlide = 1;
        //
        //console.log("slide" + finalSlide + " ->" + playedSlides[finalSlide - 1]);
        //
        //if (playedSlides[0] === 0) {
        //    playedSlides[0] = 1;
        //    // nothing happen...
        //} else {
        //
        //
        //    var tl000 = new TimelineMax();
        //
        //
        //    tl000.to('#background', 3,        {top: '0',  ease: Sine. easeIn} , '-=3')
        //
        //}


        tl.pause();
        tl.seek('cta1');




    });

    // ----- to go to slide 2 -------------------------------------------------------------------------------------------------------------------------------

    $("#sec02").on("click",function(e) {
        e.preventDefault();
        finalSlide=2;

        console.log ("slide" + finalSlide + " ->" + playedSlides[finalSlide-1]);

        if (playedSlides[1]===0) {
            playedSlides[1]=1;
            $(".dotcover").show();
          //  tl.seek('cta1');
            tl.play();
        } else {
            tl.pause();
            tl.seek('cta2');
        }

    });

    // ----- to go to slide 3 -------------------------------------------------------------------------------------------------------------------------------

    $("#sec03").on("click",function(e) {
        e.preventDefault();
        finalSlide=3;

        console.log ("slide" + finalSlide + " ->" +  playedSlides[finalSlide-1]);

        if (playedSlides[2]===0) {
            playedSlides[2] = 1;
            $(".dotcover").show();
           // tl.seek('cta2');
            tl.play();
        } else {
            tl.pause();
            tl.seek('cta3');
        }

    });

    // ------ to go to slide 4 ------------------------------------------------------------------------------------------------------------------------

    $("#sec04").on("click",function(e) {
        e.preventDefault();
        finalSlide = 4;

        console.log ("slide" + finalSlide + " ->" + playedSlides[finalSlide-1]);

        if (playedSlides[3]===0) {
            playedSlides[3]=1;
            $(".dotcover").show();
           // tl.seek('cta3');
            tl.play();
        }else {
            tl.pause();
            tl.seek('cta4');
        }

    });

    // ------ to go to slide 5 ------------------------------------------------------------------------------------------------------------------------

    $("#sec05").on("click",function(e) {
        e.preventDefault();
        finalSlide=5;

        console.log ("slide" + finalSlide + " ->" + playedSlides[finalSlide-1]);

        if (playedSlides[4]===0) {
            playedSlides[4] = 1;
            $(".dotcover").show();
           // tl.seek('cta4');
            tl.play();
        } else {
            tl.pause();
            tl.seek('cta5');
        }

    });


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

    y = $(window).height() - $("#header").innerHeight();

    $("#dots-container .dotbox").css("right", x);
    $("#dots-container").css("height", y);

}



// ---------------------------------------------------------------------------------------

$(window).scroll(function() {
    //$.doTimeout( 'scroll', 50, function(){
    //    // do something computationally expensive
    //    desktopStickyHeader($(this).scrollTop());
    //});


    if($(window).scrollTop() + $(window).height() == $(document).height()) {
        console.log("bottom!");
    }



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

//
//
//
//$(window).scroll(function(event){
//    var st = $(this).scrollTop();
//    if (st > lastScrollTop){
//        // downscroll code
//        console.log ("arriba");
//
//
//        alfa();
//
//    } else {
//        // upscroll code
//        console.log ("abajo");
//
//        alfa();
//
//    }
//    lastScrollTop = st;
//
//    $( this ).off( event );
//
//
//
//});


//var fired=0;
//
//$(window).bind("scroll", function(){
//    if(fired === 0){
//        var self = this, $this = $(self);
//        if ($this.data('scrollTimeout')) {
//            clearTimeout($this.data('scrollTimeout'));
//        }
//        $this.data('scrollTimeout', setTimeout(alfa,500,self));
//        fired = 1;
//    }
//});




//
//function alfa() {
//
//
//
//    tl.play();
//
//
//
//    console.log ("entro a alfa -> " + scrollflag);
//
//if (scrollflag===0) {
//    scrollflag=1;
//    tl.play();
//}
//
//
//}
//
//

var xx=0;

$(document).mousewheel(function(evt){

//console.log(evt.deltaY); // print the distance you scrolled

if (scrollflag===0) {
    scrollflag=1;
    setTimeout(alfa(evt.deltaY) ,500);
}



});



function alfa(v) {


    var valor=0;


    if (v>=0) {
        console.log("baja -> " + v + " currentslide " + currentSlide + " scrollslideClick " + scrollSlideClick);

        //
        //if (currentSlide===0) valor=1;
        //if (currentSlide===2) valor=3;

    //    if (scrollSlideClick<5) scrollSlideClick++;



if (scrollSlideClick<5) {
    $("#dots-container .dotbox .dot").eq(scrollSlideClick).click();

} else {
// lets move the footer

    tl.play();

}





    } else {
        console.log("sube -> " + v + " currsldie" + currentSlide);
    }
}