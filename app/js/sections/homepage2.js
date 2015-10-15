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

var sepuede=false;
var slide3buttonpad=0;
var finalSlide=1;
var currentSlide=0;
var playedSlides = [9,1,0,0,0,0];
var lastScrollTop=0;
var scrollflag=0;
var timer = null;
var actualSlide=1;
var actualDot=1;

var slide4bg, slide5bg, slide5tab, footerbg;

var tl = new TimelineMax({paused:true});
var tlpollen = new TimelineMax({paused:true});









// --------------------------------------------------------------------


$(document).ready(function() {

    $( 'html, body' ).scrollTop(0); //reset scroll to top ....
    $('body').flowtype( { minimum : 500,  maximum : 1800  }); // set flowtype ...
    $("#dots-container .dotbox .dot:eq(0)").addClass("dot-on");  // set first dot in blue ....
    set_dotbox(); // set the dotbox to the right side of the screen ....
    $(".nassacort-logo .little-house").addClass("active-house"); // set the homepage at the main menu
    $(".footer").addClass("footer-for-homepage"); // set the homepage at the main menu
    isMobile = window.matchMedia && window.matchMedia(media_query).matches;
    isTablet =  window.matchMedia(media_query_tablet).matches;
    set_variables();
    scrollflag=0;



// ---loop animation for pollen ------------------------------------------------------------------------------------------------------
    //import com.greensock.easing.CustomEase;

    //CustomEase.create("particles", [{s:0,cp:0.306,e:0.4},{s:0.4,cp:0.494,e:0.376},{s:0.376,cp:0.258,e:0.48},{s:0.48,cp:0.702,e:1}]);

    tlpollen
    .fromTo("#pollen-1", 8, {scale:1.2, left:'45.5%', bottom:'8.5%'}, {scale:1, left:'64.5%', bottom:'12.5%', ease: Back.easeInOut.config(1.7)}, 0)
    .fromTo("#pollen-2", 6, {scale:1.2, left:'56%', bottom:'20%'}, {scale:1, left:'76%', bottom:'31%', ease: Back.easeInOut.config(1.7)}, 2)
    .fromTo("#pollen-3", 8, {scale:1.2, left:'47.5%', bottom:'18.5%'}, {scale:1, left:'67.5%', bottom:'27.5%', ease: Back.easeInOut.config(1.7)}, 0)
    .fromTo("#pollen-4", 5, {scale:1.2, left:'42%', bottom:'14.8%'}, {scale:1, left:'62%', bottom:'22.8%', ease: Back.easeInOut.config(1.7)}, 3)
    .fromTo("#pollen-5", 8, {scale:1.2, left:'25.5%', bottom:'16.5%'}, {scale:1, left:'45.5%', bottom:'19.5%', ease: Back.easeInOut.config(1.7)}, 1)
    .fromTo("#pollen-6", 8, {scale:1.2, left:'29.5%', bottom:'2.7%'}, {scale:1, left:'49.5%', bottom:'5.7%', ease: Back.easeInOut.config(1.7)}, 0)
    .fromTo("#pollen-7", 7, {scale:1.2, left:'-2%', bottom:'33%'}, {scale:1, left:'5%', bottom:'28%', ease: Back.easeInOut.config(1.7)}, 2)
    .fromTo("#pollen-8", 8, {scale:1.2, left:'-7%', bottom:'3%'}, {scale:1, left:'13%', bottom:'9%', ease: Back.easeInOut.config(1.7)}, 1)
    .fromTo("#pollen-9", 6.5, {scale:1.2, left:'72.5%', bottom:'32.5%'}, {scale:1, left:'93.5%', bottom:'36.5%', ease: Back.easeIn.config(1.7)}, 2)
    .fromTo("#pollen-10", 6.5, {scale:1.2, left:'72%', bottom:'30.5%'}, {scale:1, left:'88%', bottom:'36.5%', ease: Back.easeIn.config(1.7)}, 1)
    .fromTo("#pollen-11", 6.5, {scale:1.2, left:'69.5%', bottom:'25.7%'}, {scale:1, left:'80.5%', bottom:'38.7%', ease: Back.easeIn.config(1.7)}, 2)
    .fromTo("#pollen-12", 6.5, {scale:1.2, left:'67.2%', bottom:'22.6%'}, {scale:1, left:'87.2%', bottom:'41.6%', ease: Back.easeIn.config(1.7)}, 1)
    .fromTo("#pollen-13", 6.5, {scale:1.2, left:'69.2%', bottom:'24.9%'}, {scale:1, left:'89.2%', bottom:'44.9%', ease: Back.easeIn.config(1.7)}, 2)
    .fromTo("#pollen-14", 6.5, {scale:0.5, left:'64%', bottom:'22.3%'}, {scale:1, left:'92%', bottom:'42.3%', ease: Back.easeIn.config(1.7)}, 2)
    .fromTo("#pollen-15", 6.5, {scale:0.5, left:'-5%', bottom:'-10%'}, {scale:1, left:'0%', bottom:'-7%', ease: Back.easeInOut.config(1.7)}, 2);

    //tlpollen.play();


// ---loop animation for carousel------------------------------------------------------------------------------------------------------

    var tl1 = new TimelineMax({repeat:-1});
    var tl2 = new TimelineLite();
    var tl_mobile = new TimelineMax({repeat:-1});

 //   tl3.fromTo('#slide03', 1, {top: '25px'},  {top: slide3buttonpad, ease: Power1.easeOut}, '+=0');

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

    tl2.to("#slide1-textbox", 5,    {left: "40.6%"} , '+=1.5');

    tl_mobile
        .to("#carousel-mobile-2", 1,    {opacity: 1, ease: Power0.easeNone} , '+=3')
        .to("#carousel-mobile-3", 1,    {opacity: 1, ease: Power0.easeNone} , '+=3')
        .to("#carousel-mobile-1", 0,    {opacity: 1, ease: Power0.easeNone} , '-=0')
        .to("#carousel-mobile-2", 0,    {opacity: 0, ease: Power0.easeNone} , '-=0')
        .to("#carousel-mobile-3", 1,    {opacity: 0, ease: Power0.easeNone} , '+=3')
    ;



// ------------------------------------------------------------------------------------------------------------------------------------



    tl  // ----------------------------------------------------------------------------

        .addLabel('cta1')

        // --- slide 02 ---------------------------------------------------------------

        .to(window, 8, {scrollTo:{y:   $('#tope2').offset().top, x:0}, ease:Sine.easeInOut}, '+=0')
        .to('#bottle', 5,                 {marginTop: '29.7em',scale: '2.5',left: '28.1%',ease: Sine.easeOut } , '-=5')
        .to('#cap', 5,                    {marginTop: '27.9em', scale: '2.5', left: '30.7%', height: '4em', ease: Sine.easeOut} , '-=5')
        .to('#slide02', 0,           {overflow: 'hidden'}, '+=0')
        .to('#cap', 0.7,                  {marginTop: '20em', ease: Power1.easeOut} , '+=0')
        .to('#cap', 1,                    {marginTop: '29em', left: '92%', rotation: 35, ease: Cubic.easeInOut} , '+=0')
        .to('#no-scent', 0.8,             {height: '8.8em'} , '+=0')
        .fromTo($('#nasacort-compare'), 1.5, {right: '-39%'}, {right: '20.4%', ease: Power1.easeOut} , '+=0')
        .addLabel('cta2')
        .add(callback_function)

        // --- slide 03 ---------------------------------------------------------------

        .to(window, 3.5, {scrollTo:{y:   $('#tope3').offset().top, x:0}, ease:Sine.easeInOut}, '+=0')
        .to('#compare-copy', 1,  {left: '23%'}, '+=0')
        .to('#compare-bg', 1,    {bottom: '-0.52em'}, '+=0')
        .to('#stats', 1,         {height: '30.5%'}, '+=0')
        .addLabel('cta3')
        .add(callback_function)

        // --- slide 04 ---------------------------------------------------------------

        .to(window, 3.5, {scrollTo:{y:   $('#tope4').offset().top, x:0}, ease:Sine.easeInOut}, '+=0')
        .to('#patient-box', 2.5,   {left: '0px', ease: Power0.easeIn}, '+=0.5')
        .addLabel('cta4')
        .add(callback_function)

        // --- slide 05 ---------------------------------------------------------------

        .to(window, 4, {scrollTo:{y:   $('#tope5').offset().top, x:0}, ease:Sine.easeInOut}, '+=0')
        .to('#yellow-spike', 3,      {bottom: '16em', ease: Power1.easeOut}, '-=3')
        .add(call_pollen)
        .to('#understand-box', 2,    {left: '30%', ease: Power1.easeOut}, '+=0')
        .addLabel('cta5')
        .add(callback_function)

    ;  // --- end ---------------------------------------------------------------






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
    set_variables();
});




function set_variables(){

    if ( isTablet) {
        // console.log ("  isTablet  !!! ");

        slide5bg= '-68em';
        slide5tab= '-12.85em';

    } else {


        slide5bg= '-70em';
        slide5tab= '-12.4em';


    }




   // console.log ($(window).height());
    slide3buttonpad = 81 + 5 -   ($("#slide03").height() - ($(window).height()-81));
   // console.log ("padd " + slide3buttonpad);






}




// ---------------------------------------------------------------------------------------

function set_dotbox(){
    var x, y;

    if ($(window).width() > assets_maximum_width){
        x= ($(window).width() - assets_maximum_width) / 2 + "px";
    }else {
        x="0px";
    }


    $("#dots-container .dotbox").css("right", x);


    //if (actualSlide!=6) {  // if we are not in the footer...
    //    y = $(window).height() - $("#header").innerHeight();
    //    $("#dots-container").css("height", y);
    //}

}

// ---------------------------------------------------------------------------------------

$(window).scroll(function() {
    $.doTimeout( 'scroll', 50, function(){
        // do something computationally expensive
        desktopStickyHeader($(this).scrollTop());
    });
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
    trackFootnoteOpen($('.footnote').index($(this)), $("body").attr("class"));
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
    trackFootnoteClose($('.footnote .close-btn').index($(this)), $("body").attr("class"));
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
        height2hide = "-29px";


    } else {
        sticky_height =10;
        vtop="127px";
        height2hide = "-20px";
    }

    if (y > sticky_height) {
        $('#header').animate({top: height2hide}, 300);
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


    if (isScrolledIntoView(".slide01-tag")) boton(1);
    if (isScrolledIntoView(".slide02-tag")) boton(2) ;
    if (isScrolledIntoView(".slide03-tag")) boton(3) ;
    if (isScrolledIntoView(".slide04-tag")) boton(4) ;
    if (isScrolledIntoView(".slide05-tag")) boton(5) ;



        if (scrollflag===0) {
            scrollflag=1;
            setTimeout(select_a_slide(evt.deltaY) ,800);
        }



});


$('body').on({
    'mousewheel': function(e) {
        if (scrollflag===0) return;
        e.preventDefault();
        e.stopPropagation();
    }
});


$(document).bind("touchmove",function(event){

    if (scrollflag===1) event.preventDefault();
});




// ---------------------------------------------------------------------------------------


function boton(lugar) {
    $("#dots-container .dotbox .dot").removeClass("dot-on");
    $("#dots-container .dotbox .dot").eq(lugar-1).addClass("dot-on");

}






function select_a_slide(v) {





    if (v>=0) {


        finalSlide = actualSlide += 1;
        $("#dots-container .dotbox .dot").eq(actualSlide - 1).click();

    } else {

        if (actualSlide > 1) {
            finalSlide = actualSlide -= 1;
            $("#dots-container .dotbox .dot").eq(actualSlide-=1).click();
        }


    }



}




function select_a_slide2(v) {



    var valor=0;


    if (v>=0) {
        if(actualSlide<6) {



            //if (sepuede && actualSlide==3) {
            //    console.log("lo animo");
            //    scrollflag=1;
            //    tl3.play();
            //    sepuede=false;
            //    timer=  window.setTimeout( zerotl3 ,1500);
            //} else {

                //if (actualSlide==3) { check_sepuede();}

                finalSlide = actualSlide += 1;
                $("#dots-container .dotbox .dot").eq(actualSlide - 1).click();


                if (actualSlide == 6) {

                    tl.seek('cta5');
                    timer = window.setTimeout(zeroflag, 1000);
                    tl.play();
                }
            //}

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


function call_pollen(){
    tlpollen.play();
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
        $(".dotcover").show(); // dotcover unables blue button triggering
        $("#dots-container .dotbox .dot").removeClass("dot-on");
        $("#dots-container .dotbox .dot").eq(actualSlide-1).addClass("dot-on");
        tl.play();
    }

    //else {
    //    tl.pause();
    //    if (n==1) tl.seek('cta1');
    //    if (n==2) tl.seek('cta2');
    //    if (n==3) tl.seek('cta3');
    //    if (n==4) tl.seek('cta4');
    //    if (n==5) tl.seek('cta5');
    //    actualSlide=finalSlide;
    //    window.clearTimeout(timer);
    //    timer=  window.setTimeout( zeroflag ,500);
    //}

}


function zeroflag() {  scrollflag=0;  }

//function zerotl3() {  scrollflag=0; tl3.pause();  }


function ver() {
    console.log(playedSlides);
    console.log(sepuede);
    console.log(actualSlide);

}


//function check_sepuede() {
//
//    if ($(window).height() <=750) {
//        sepuede=true;
//        console.log('si se pudo');
//        tl3.time(0);
//    }
//
//
//}







//$("#sec02").bind('click', { id: '#slide43' }, scroller);


//function scroller(div){
//    var scrollYPos = $(div).offset().top;
//    //event.preventDefault();
//    TweenLite.to(window, 10, {scrollTo:{y:  scrollYPos, x:0}, ease:Sine.easeInOut});
//}







function isScrolledIntoView(elem)
{
    var $elem = $(elem);

    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}