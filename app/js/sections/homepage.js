var desktop_mininum_width = 769;
var desktop_maximum_width = 1400;
var assets_maximum_width = 1800;

var breakpoint_mobile = '320px';
var breakpoint_mobile_max = '768px';
var media_query = "screen and (min-width: " + breakpoint_mobile + ") and (max-width: " + breakpoint_mobile_max + ")";


var xx = (window.innerWidth / 35);
var css = document.createElement("style");
css.type = "text/css";
css.innerHTML = "body { font-size: " + xx + "px }";
document.body.appendChild(css);

// --------------------------------------------------------------------



//$(window).on('scroll', function() {
//    window.requestAnimationFrame(scrollHandler);
//});


$(document).ready(function() {

    $( 'html, body' ).scrollTop(0); //reset scroll to top ....
    $('body').flowtype( { minimum : 500,  maximum : 1800  }); // set flowtype ...
    $("#dots-container .dotbox .dot:eq(0)").addClass("dot-on");  // set first dot in blue ....
    set_dotbox(); set_footer_width(); // set the dotbox to the right side of the screen ....
    $(".nassacort-logo .little-house").addClass("active-house"); // set the homepage at the main menu
    $(".footer").addClass("footer-for-homepage"); // set the homepage at the main menu
    isMobile = window.matchMedia && window.matchMedia(media_query).matches;

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







    var tempo_cap=99000;


    var controller = $.superscrollorama();










    // -----to hide the white header bar ---------------------------------------------------------------------------------------------------------------------

   // controller.addTween('#brandlogo-tr', TweenMax.to( $('#header'), 0.5, {css:{top: "-29px"}}), 100);
   // controller.addTween('#brandlogo-tr', TweenMax.from( $('#slide01'), 0.5, {css:{top: 111}}), 100);
    //controller.addTween('#brandlogo-tr', TweenMax.from( $('#productbox-container'), 0.5, {css:{top: 111}}), 100);





    // -------------------------------------------------------------------------------------------------------------------------------------------------------






    // ----- to go to slide 2 -------------------------------------------------------------------------------------------------------------------------------


    controller.addTween('#brandlogo-tr', TweenMax.fromTo( $('#slide1-textbox'), 0.5, {top:'81px'},        {top:'-900px'}),     30000);
    controller.addTween('#brandlogo-tr', TweenMax.fromTo( $('#slide01'), 0.5, {top:'81px'},        {top:'-900px'}),     30000);
    controller.addTween('#brandlogo-tr', TweenMax.fromTo( $('#herolink'), 0.5, {top:'0px'},        {top:'-900px'}),     30000);
    controller.addTween('#brandlogo-tr', TweenMax.fromTo( $('#slide02'), 0.5, {marginTop:'0em'},    {marginTop:'-15em'}),     30000);

    controller.addTween('#brandlogo-tr', TweenMax.fromTo( $('#bottle'), 0.5, {marginTop:'0.6em', scale:'1', left:'72%'  },   {marginTop:'17em', scale:'2.5', left:'28.1%' , ease:  Power1.easeOut}  ),     35000, 5000);  //bottle movement
    controller.addTween('#brandlogo-tr', TweenMax.fromTo( $('#cap'), 0.5, {marginTop:'-0.2em', scale:'1', left:'74.6%', height: '3em'  },   {marginTop:'14.4em', scale:'2.5', left:'30.5%' , height: '4em', ease:  Power1.easeOut}  ),     35000, 5000);  //bottle movement


    controller.addTween('#brandlogo-tr', TweenMax.to( $('#cap'), 0.5,   {marginTop:'7.5em' , ease:  Power1.easeOut}  ),     35000, 45000); // opening cap...
    controller.addTween('#brandlogo-tr', TweenMax.to( $('#cap'), 0.5,   {marginTop:'16.7em', left:'92%' , rotation: 35, ease:Cubic.easeInOut }  ),     35000, 65000);

    controller.addTween('#brandlogo-tr', TweenMax.to( $('#background'),  0.5, {top:'-10.7em'}),     20000, 110000);
    controller.addTween('#brandlogo-tr', TweenMax.to( $('#no-scent'),  0.5, {height:'8em'}),     35000, 80000);
    controller.addTween('#brandlogo-tr', TweenMax.fromTo( $('#nasacort-compare'), 0.5, {right:'-35%' },   {right:'20.4%' , ease:  Power1.easeOut}  ),     35000, 120000);



    // ----- to go to slide 3 -------------------------------------------------------------------------------------------------------------------------------

  //  controller.addTween('#brandlogo8-tr', TweenMax.to( $('#slide03'),            1,   {top:'1.6em'}),     0);
    controller.addTween('#brandlogo8-tr', TweenMax.to( $('#background'),            1,   {top:'-33em'}),     30000);
    controller.addTween('#brandlogo8-tr', TweenMax.to( $('#slide02'),            1,   {marginTop:'-34em'}),     30000);
    controller.addTween('#brandlogo8-tr', TweenMax.fromTo( $('#compare-bg'),            1, {top:'17em'},    {top:'1.4em'}),    35000, 65000);
    controller.addTween('#brandlogo8-tr', TweenMax.fromTo( $('#compare-copy'),          1, {left:'-42%'},   {left:'23%'}),      35000, 31000);
    controller.addTween('#brandlogo8-tr', TweenMax.fromTo( $('#stats'),                 1, {height:'0%'},   {height:'30.5%'}),    15000, 90000);

    // ------ to go to slide 4 ------------------------------------------------------------------------------------------------------------------------

    controller.addTween('#brandlogo9-tr', TweenMax.to( $('#background'),            1,   {top:'-53em'}),     30000);
    controller.addTween('#brandlogo9-tr', TweenMax.fromTo( $('#slide03'),               1, {top:'1.5em'},       {top:'-16em'}),     30000);
    controller.addTween('#brandlogo9-tr', TweenMax.fromTo( $('#slide04'),               1, {marginTop:'17em'},  {marginTop:'0em'}), 25000);
    controller.addTween('#brandlogo9-tr', TweenMax.fromTo( $('#patient-box'),           1, {right:'-180%'},     {right:'0%'}),      30000, 25000);

    // ------ to go to slide 5 ------------------------------------------------------------------------------------------------------------------------

    controller.addTween('#brandlogo10', TweenMax.to( $('#background'),              1,   {top:'-70.5em'}),   35000);
    controller.addTween('#brandlogo10', TweenMax.fromTo( $('#slide04'),                 1, {top:'0em'},         {top:'-16em'}),     25000);
    controller.addTween('#brandlogo10', TweenMax.fromTo( $('#slide05'),                 1, {marginTop:'15em'},  {marginTop:'0em'}), 30000);
    controller.addTween('#brandlogo10', TweenMax.fromTo( $('#understand-box'),          1, {left:'-140%'},      {left:'0%'}),       50000, 20000);
    controller.addTween('#brandlogo10', TweenMax.to( $('#yellow-spike'),            1,   {top:'-2em'}),     35000);

    // -----------------------------------------------------------------------------------------------------------------------------------------------

    controller.addTween('#brandlogo11', TweenMax.to( $('#background'),              1,   {top:'-78.6em'}),   70);
    controller.addTween('#brandlogo11', TweenMax.to( $('#slide05'),                 1, {top:'-350px'}), 70);




});


$(window).bind("resize", function(){
set_dotbox();
set_footer_width();
});



function set_footer_width(){


    $('#background .footer').css("width",$(window).width());

    console.log( $(window).width());
    console.log( $('#background').innerWidth());


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
    $.doTimeout( 'scroll', 50, function(){
        // do something computationally expensive
        desktopStickyHeader($(this).scrollTop());
    });


    if($(window).scrollTop() + $(window).height() == $(document).height()) {
        console.log("bottom!");


      // $("body").css("padding-bottom","1000px");

      //  $("#background").css("top","-100px");


        }



});

// ---------------------------------------------------------------------------------------

$("#dots-container .dotbox .dot").on("click",function(e){
    e.preventDefault();
    $("#dots-container .dotbox .dot").removeClass("dot-on");
    $(this).addClass("dot-on");


    var lugar =  "#" + $(this).data("section");
    var time = $(this).data("time") || 5000;

    //  alert (time);

    $('html, body').animate({
        scrollTop: $(lugar).offset().top
    }, time);
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

