var desktop_mininum_width = 769;
var desktop_maximum_width = 1400;
var assets_maximum_width = 1800;

var ISTOUCHDEVICE = false;
var TABLET_MAX_SIZE = 1024;
var TABLET_MIN_SIZE = 768;
var MOBILE_MAX_SIZE = 767;

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
var isMobile;
var isTablet;

var lastScrollTop = 0;
var currentAnimation = 'slide0';
var prevAnimation = '';
var page = $("html, body");


/* ANIMATIONS STARTS HERE */
// ---loop animation for carousel------------------------------------------------------------------------------------------------------

    var tlSlider = new TimelineMax({repeat:-1});
    var tl2 = new TimelineLite();
    var tl_mobile = new TimelineMax({repeat:-1});

    var tlSlide1 = new TimelineMax({paused:true});
    var tlSlide1b = new TimelineMax({paused:true});
    var tlSlide2 = new TimelineMax({paused:true});
    var tlSlide3 = new TimelineMax({paused:true});
    var tlSlide4 = new TimelineMax({paused:true});

    var tween2 = new TimelineMax({paused:true});

    var tlPollen = new TimelineMax({paused:true});
    var controller = new ScrollMagic.Controller();

    tlSlider
    .to("#carousel1", 8,    {scale:1, ease: Power0.easeNone} , '+=1')
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
    .to("#lady03", 1.5,     {opacity:0 , ease: Power0.easeNone} , '-=1.5');

    tl2.to("#slide1-textbox", 2,    {left: "40.6%"} , '+=1.5');

    tl_mobile
    .to("#carousel-mobile-2", 1,    {opacity: 1, ease: Power0.easeNone} , '+=3')
    .to("#carousel-mobile-3", 1,    {opacity: 1, ease: Power0.easeNone} , '+=3')
    .to("#carousel-mobile-1", 0,    {opacity: 1, ease: Power0.easeNone} , '-=0')
    .to("#carousel-mobile-2", 0,    {opacity: 0, ease: Power0.easeNone} , '-=0')
    .to("#carousel-mobile-3", 1,    {opacity: 0, ease: Power0.easeNone} , '+=3');

/* SLIDES STARTS */
/* SLIDE 1 */
    // build tween
    //var tween = TweenMax.staggerFromTo("#bottle", 2, {left: 700}, {left: 0, ease: Back.easeOut}, 0.15);
    var tween2 = new TimelineLite({});

    var tween1 = TweenMax.to('#bottle', 1, {marginTop: '16.4em',scale: '1',left: '20.9%', width: '8em', height: '11em', ease: Sine.easeOut});
    tween2.to('#cap', 1, {marginTop: '17.9em', scale: '2.5', left: '30.7%', height: '4em', ease: Sine.easeOut})
    .to('#cap', 1, {marginTop: '19em', left: '92%', rotation: 35, ease: Cubic.easeInOut} , '+=0');
    //.to('#no-scent', 0.8, {height: '8.8em'} , '+=0.5');

    // build scene
    var scene = new ScrollMagic.Scene({triggerElement: "#slide02", duration: 300, offset:'-100'})
                    .setTween([tween1, tween2])
                    .addTo(controller);


    scene.on("end", function (event) {
        tlSlide1b.timeScale(1).play();
    });

    scene.on("progress", function (event) {
        tlSlide1b.timeScale(3).reverse();
        //tlSlide1.timeScale(1).reverse();
    });

    tlSlide1b
    .to('#no-scent', 0.8, {height: '8.8em'} , '0');

    tlSlide1
    .fromTo($('#nasacort-compare'), 1, {right: '-39%'}, {right: '20.4%', ease: Power1.easeOut} , '0');


/* SLIDE 2 */

    tlSlide2
    .to('#compare-copy', 1,  {left: '23%'}, '0')
    .to('#compare-bg', 1,    {bottom: '-0.52em'}, '0')
    .to('#stats', 1,         {height: '30.5%'}, '0');


/* SLIDE 3 */

    tlSlide3
    //.to(window, 3.5, {scrollTo:{y:   $('#divhelper4').offset().top, x:0}, ease:Sine.easeInOut}, '+=0')
    .to('#patient-box', 1,   {left: '0px', ease: Power0.easeIn}, '0');


/* SLIDE 4*/

    tlSlide4
    .to('#yellow-spike', 3,      {bottom: '16em', ease: Power1.easeOut}, '-=3')
    .to('#understand-box', 2,    {left: '30%', ease: Power1.easeOut}, '+=0')
    .fromTo("#pollen-1", 6, {scale:1.2, left:'45.5%', bottom:'8.5%'}, {scale:1, left:'64.5%', bottom:'12.5%', ease: Back.easeInOut.config(1.7)}, 0)
    .fromTo("#pollen-2", 4, {scale:1.2, left:'56%', bottom:'20%'}, {scale:1, left:'76%', bottom:'31%', ease: Back.easeInOut.config(1.7)}, 2)
    .fromTo("#pollen-3", 6, {scale:1.2, left:'47.5%', bottom:'18.5%'}, {scale:1, left:'67.5%', bottom:'27.5%', ease: Back.easeInOut.config(1.7)}, 0)
    .fromTo("#pollen-4", 3, {scale:1.2, left:'42%', bottom:'14.8%'}, {scale:1, left:'62%', bottom:'22.8%', ease: Back.easeInOut.config(1.7)}, 3)
    .fromTo("#pollen-5", 6, {scale:1.2, left:'25.5%', bottom:'16.5%'}, {scale:1, left:'45.5%', bottom:'19.5%', ease: Back.easeInOut.config(1.7)}, 1)
    .fromTo("#pollen-6", 6, {scale:1.2, left:'29.5%', bottom:'2.7%'}, {scale:1, left:'49.5%', bottom:'5.7%', ease: Back.easeInOut.config(1.7)}, 0)
    .fromTo("#pollen-7", 5, {scale:1.2, left:'-2%', bottom:'33%'}, {scale:1, left:'5%', bottom:'28%', ease: Back.easeInOut.config(1.7)}, 2)
    .fromTo("#pollen-8", 6, {scale:1.2, left:'-7%', bottom:'3%'}, {scale:1, left:'13%', bottom:'9%', ease: Back.easeInOut.config(1.7)}, 1)
    .fromTo("#pollen-9", 4.5, {scale:1.2, left:'72.5%', bottom:'32.5%'}, {scale:1, left:'93.5%', bottom:'36.5%', ease: Back.easeIn.config(1.7)}, 2)
    .fromTo("#pollen-10", 4.5, {scale:1.2, left:'72%', bottom:'30.5%'}, {scale:1, left:'88%', bottom:'36.5%', ease: Back.easeIn.config(1.7)}, 1)
    .fromTo("#pollen-11", 4.5, {scale:1.2, left:'69.5%', bottom:'25.7%'}, {scale:1, left:'80.5%', bottom:'38.7%', ease: Back.easeIn.config(1.7)}, 2)
    .fromTo("#pollen-12", 4.5, {scale:1.2, left:'67.2%', bottom:'22.6%'}, {scale:1, left:'87.2%', bottom:'41.6%', ease: Back.easeIn.config(1.7)}, 1)
    .fromTo("#pollen-13", 4.5, {scale:1.2, left:'69.2%', bottom:'24.9%'}, {scale:1, left:'89.2%', bottom:'44.9%', ease: Back.easeIn.config(1.7)}, 2)
    .fromTo("#pollen-14", 4.5, {scale:0.5, left:'64%', bottom:'22.3%'}, {scale:1, left:'92%', bottom:'42.3%', ease: Back.easeIn.config(1.7)}, 2)
    .fromTo("#pollen-15", 4.5, {scale:0.5, left:'-5%', bottom:'-10%'}, {scale:1, left:'0%', bottom:'-7%', ease: Back.easeInOut.config(1.7)}, 2);


// ANIMATION SECTIONS
var animations = {
    timeline : {
        slide0 : tlSlider,
        slide1 : tlSlide1,
        slide2 : tlSlide2,
        slide3 : tlSlide3,
        slide4 : tlSlide4
    },
    button : {
        slide0 : $('#sec01'),
        slide1 : $('#sec02'),
        slide2 : $('#sec03'),
        slide3 : $('#sec04'),
        slide4 : $('#sec05'),
        all : $('.dot')
    },
    getbutton :{
        sec01 : 'slide0',
        sec02 : 'slide1',
        sec03 : 'slide2',
        sec04 : 'slide3',
        sec05 : 'slide4'
    },
    play : function(slide, speed){
        //currentAnimation = slide;
        this.timeline[slide].timeScale(speed || 1);
        this.timeline[slide].play();
    },
    reverse : function(slide){
        currAnimation = slide;
        this.timeline[slide].timeScale(3);
        this.timeline[slide].reverse();
    },
    getDot : function(slide){
        this.button.all.removeClass('dot-on');
        this.button[slide].addClass('dot-on');
    }
};

function updateAnimPos(){
    animations.pos = {
        slide0 : { 'in' : $('#slide01').offset().top, 'out' : $('#slide01').outerHeight() / 7, 'half' : $('#slide01').outerHeight() / 3, 'spot' : 0},
        slide1 : { 'in' : $('#slide02').offset().top - $('#slide02').outerHeight() / 2, 'out' : $('#slide02').offset().top - ($('#slide02').outerHeight() / 6), 'half' : $('#slide02').outerHeight() / 2, 'spot' : $('#slide02').offset().top - ($('.header-top').outerHeight() - 40)},
        slide2 : { 'in' : $('#slide03').offset().top - ($('#slide03').outerHeight()), 'out' : $('#slide03').offset().top - ($('#slide03').outerHeight() + ($('#slide03').outerHeight() / 5) ), 'half' : $('#slide03').outerHeight() / 2, 'spot' : $('#slide03').offset().top - ($('#slide03').outerHeight() * (0.2 + getSize()))},
        slide3 : { 'in' : $('#slide04').offset().top - ($('#slide04').outerHeight() * 0.7), 'out' : $('#slide04').offset().top - ($('#slide04').outerHeight() * 0.5), 'half' : $('#slide04').outerHeight() / 2, 'spot' : $('#slide04').offset().top - ($('#slide04').outerHeight() * (0.1 + getSize()))},
        slide4 : { 'in' : $('#slide05').offset().top - ($('#slide05').outerHeight() * 0.6), 'out' : $('#slide05').offset().top - ($('#slide05').outerHeight() * 0.5), 'half' : $('#slide05').outerHeight() / 2, 'spot' : $('#slide05').offset().top - ($('#slide05').outerHeight() * (0.1 + getSize()))}
    };
}

function tabletChange(){
    if(getDevice() === "tablet" && window.outerWidth <= '768'){
        $(".tablet-block").addClass('block');
    } else {
        $(".tablet-block").removeClass('block');
    }
}


// INIT THE NEEDED FUNCTIONS
$(function(){
    $('.home-section').addClass('show');
    $('body').flowtype( { minimum : 500,  maximum : 1800  });
    set_dotbox();
    isMobile = window.matchMedia && window.matchMedia(media_query).matches;
    isTablet =  window.matchMedia(media_query_tablet).matches;

    validateTouchScreens();

    updateAnimPos();

    $(window).bind("resize", function(){
        set_dotbox();
        set_variables();
        updateAnimPos();

        /*clearTimeout($.data(this, 'resizeTimer'));
        $.data(this, 'resizeTimer', setTimeout(function() {
            //do something
            //alert("Haven't resized in 200ms!");
            validateFootnote();
        }, 500));*/
        tabletChange();
    });

    tabletChange();

    // PLAYS FIRST ANIMATION
    tlSlider.play();
    animations.button.all.removeClass('dot-on');
    animations.button.slide0.addClass('dot-on');

    // ANIMATES THE CURRENT ANIMATION INTO VIEW
    playAnim();

    /*if (!is_touch_device()) {
        console.log('this is NOT a touch device DUDE');
    } else {
        console.log('this is a touch device');
    }*/

    setInterstitialPopup();

    $(window).scroll(function(event){

        var st = $(this).scrollTop();

        if (st > lastScrollTop){
            playAnim();
        } else {
            revAnim();
        }

        lastScrollTop = st;
    });

    $('.dot').on('click tap', function(){
        var section = animations.getbutton[$(this).attr('id')];
        getAnimationPlace(section);
    });

});

function validateTouchScreens()
{
  ISTOUCHDEVICE = "ontouchstart" in window || navigator.msMaxTouchPoints ? true : false;
  //alert("Is Touch Device ? : " + ISTOUCHDEVICE + "\nOS: " + getOS() + "\nDevice: " + getDevice());

  if(ISTOUCHDEVICE)
  {
    if(getOS() === "Mac")
    {
      if(getDevice() === "tablet")
      {
        //console.log("Validation Done");
        //isMobile = true;
        page.addClass("touchscreen");
        $(".parallax").hide();

        $(".home-section .home-mobile").show();
        addTapBehavior();
        //window.resizeTo(700,700);
        //document.querySelector('style').textContent += "@media screen and (min-width:1000px) { body { color: red; }}";
        //$('head').remove("<meta name='viewport' content='width=device-width, initial-scale=1.0'>");
        //$('head').append('<meta name="viewport" content="width=700, initial-scale=1"/>');
        //$('meta[name=viewport]').attr('content','width=700, initial-scale=1.0');
        //var cssLink = $("<link rel='stylesheet' type='text/css' href='css/main.css'>");
        //$("head").append(cssLink);
      }
    }
  }
}




// ***********************************************************************************************************



function getDevice()
{
  var size = $(window).outerWidth(true);

   // DESKTOP
   if(size > this.TABLET_MAX_SIZE){
       return 'desktop';
   // TABLET
   } else if(size <= this.TABLET_MAX_SIZE && size > this.MOBILE_MAX_SIZE){
       return 'tablet';
   // MOBILE
   } else if(size <= this.MOBILE_MAX_SIZE){
       return 'mobile';
   }
}

function getOS()
{
  var os =  navigator.appVersion;

  if(os.indexOf('Mac') > 0){
      return 'Mac';
  } else if(os.indexOf('Win') > 0){
      return 'Win';
  } else {
      return os;
  }
}

function addTapBehavior()
{
  $('#header a').on('click touchend', function(e) {
    var el = $(this);
    var link = el.attr('href');
    window.location = link;
 });
}
// ***********************************************************************************************************

function getSize(){

    if ($(window).innerWidth() <= 900){
        return 0.2;
    }

    if ($(window).innerWidth() > 900 && $(window).innerWidth() <= 1024){
        return 0.15;
    }

    if ($(window).innerWidth() > 1024 && $(window).innerWidth() <= 1280){
        return 0.05;
    }

    if ($(window).innerWidth() > 1280 && $(window).innerWidth() <= 1400){
        return 0;
    }

    if ($(window).innerWidth() > 1400){
        return 0.0;
    } else {
        return 0.1;
    }


}



//$( "div.demo" ).scrollTop( 300 );
function playAnim(){

    if($(this).scrollTop() >= 0 && $(this).scrollTop() < animations.pos.slide0.out){
        animations.getDot('slide0');
        animations.getDot('slide0');
    }

    if($(this).scrollTop() >= animations.pos.slide1.in){
        //console.log('slide 1');
        animations.play('slide1');
        animations.getDot('slide1');



        /*if ($(this).scrollTop() >= animations.pos.slide1.in && $(this).scrollTop() < animations.pos.slide1.in + 30){
            currentAnimation = 'slide1';

            scrollToSlide();
        }*/
    }

    if($(this).scrollTop() >= animations.pos.slide2.in){
        //console.log('slide 2');
        animations.play('slide2');
        animations.getDot('slide2');
    }

    if($(this).scrollTop() >= animations.pos.slide3.in){
        //console.log('slide 3');
        animations.play('slide3');
        animations.getDot('slide3');
    }

    if($(this).scrollTop() >= animations.pos.slide4.in){
        //console.log('slide 4');
        animations.play('slide4', 2.5);
        animations.getDot('slide4');
    }
}

function revAnim(){

    if($(this).scrollTop() < animations.pos.slide1.in){
        //animations.reverse('slide1');
        animations.getDot('slide0');
    }

    if($(this).scrollTop() <= animations.pos.slide1.out){
        animations.reverse('slide1');
        //animations.getDot('slide0');
    }

    if($(this).scrollTop() < animations.pos.slide2.out && $(this).scrollTop() > animations.pos.slide1.in){
        animations.reverse('slide2');
        animations.getDot('slide1');
    }

    if($(this).scrollTop() < animations.pos.slide3.out && $(this).scrollTop() > animations.pos.slide2.in){
        animations.reverse('slide3');
        animations.getDot('slide2');
    }

    if($(this).scrollTop() < animations.pos.slide4.out && $(this).scrollTop() > animations.pos.slide3.in){
        animations.reverse('slide4');
        animations.getDot('slide3');
    }
}

function scrollToSlide(){
    page.animate({
        scrollTop: animations.pos.slide1.in + (animations.pos.slide1.half + animations.pos.slide1.half / 3)
        }, 2000);

    freeScroll();
}

function getAnimationPlace(slide){
    currentAnimation = slide;

    page.stop(true, true).animate({
        scrollTop: animations.pos[slide].spot
    }, 500);
    animations.play(slide);
}

function makeSlideAnimation(){

    if (currentAnimation != 'button' && currentAnimation != 'slide0'){
        currentAnimation = 'slide1';
    }
}

function freeScroll(){
    setTimeout(function(){
        page.bind('scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove', function(e){
            if ( e.which > 0 || e.type === "mousedown" || e.type === "mousewheel" || e.type === "scroll"){
                page.off("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove");
                page.stop().unbind('scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove'); // This identifies the scroll as a user action, stops the animation, then unbinds the event straight after (optional)
            }
        });
    }, 2000);
}


function set_variables(){

    if ( isTablet) {
        slide5bg= '-68em';
        slide5tab= '-12.85em';
    } else {
        slide5bg= '-70em';
        slide5tab= '-12.4em';
    }

    slide3buttonpad = 81 + 5 - ($("#slide03").height() - ($(window).height()-81));

}

function set_dotbox(){
    var x, y;

    if ($(window).width() > assets_maximum_width){
        x= ($(window).width() - assets_maximum_width) / 2 + "px";
    }else {
        x="0px";
    }

    $("#dots-container .dotbox").css("right", x);

}


function is_touch_device() {
 return (('ontouchstart' in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
}

function setInterstitialPopup() {
    $("body a").on("click",function(e) {

       // e.preventDefault();
       $('.modal-dialog').stop(true, true).delay(100).animate({
            scrollTop: 0
        }, 100);

        if($(this).attr("data-target") === "#interstitial"){
            $("#interstitial").find("#go").attr("href", $(this).attr("href"));
        }

        if($(this).attr("data-type") === "terms-use"){
                $(".js-terms").show();
                $(".js-policy").hide();

            } else {
                $(".js-terms").hide();
                $(".js-policy").show();
            }
    });

    $("#interstitial #go").on("click",function(){
        $('#interstitial').modal('hide');
    });

}

/******************* Footnote and References Settings and Events *******************/

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

function validateFootnote()
{
    $(".animation").hide();
    $('.footnote').attr("state", "closed");
    var parentHeight = $('.footnote').data("parent");
    $(parentHeight).css("height","auto");
    $('.footnote').css("margin-top", $('.footnote').attr("currentMarginTop"));
    if(isMobile)
    {
        $('.footnote').css("margin-top", "");
        $(".footnote").each(function(index){
            var parentHeight = $(this).data("parent");
            var negativeMargin = $("" + parentHeight).offset().left;
            $(this).css("margin-left", "-" + negativeMargin + "px");
            if(parseInt(negativeMargin) === 0)
            {
               negativeMargin = $(this).offset().left;
            }

            //console.log("Footnote " + index + " position " + negativeMargin);
            $(this).css("margin-left", "-" + negativeMargin + "px");
        });
    }else{
        $(".animation").css("position", "relative");
        $(".footnote").each(function(index){
            $(this).css("margin-left", "0");
        });
    }

}
