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
var isMobile;
var isTablet;

var lastScrollTop = 0;
var currentAnimation = 'slide0';
var prevAnimation = '';
var page = $("html, body");
var firstSlide = $('#slide02').offset().top - $('#slide02').outerHeight() / 2.7;


/* ANIMATIONS STARTS HERE */
// ---loop animation for carousel------------------------------------------------------------------------------------------------------

    var tlSlider = new TimelineMax({repeat:-1});
    var tl2 = new TimelineLite();
    var tl_mobile = new TimelineMax({repeat:-1});

    var tlSlide1 = new TimelineMax({paused:true});
    var tlSlide2 = new TimelineMax({paused:true});
    var tlSlide3 = new TimelineMax({paused:true});
    var tlSlide4 = new TimelineMax({paused:true});

    var tlPollen = new TimelineMax({paused:true});

    tlSlider
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
    .to("#lady03", 1.5,     {opacity:0 , ease: Power0.easeNone} , '-=1.5');

    tl2.to("#slide1-textbox", 5,    {left: "40.6%"} , '+=1.5');

    tl_mobile
    .to("#carousel-mobile-2", 1,    {opacity: 1, ease: Power0.easeNone} , '+=3')
    .to("#carousel-mobile-3", 1,    {opacity: 1, ease: Power0.easeNone} , '+=3')
    .to("#carousel-mobile-1", 0,    {opacity: 1, ease: Power0.easeNone} , '-=0')
    .to("#carousel-mobile-2", 0,    {opacity: 0, ease: Power0.easeNone} , '-=0')
    .to("#carousel-mobile-3", 1,    {opacity: 0, ease: Power0.easeNone} , '+=3');

/* SLIDES STARTS */
/* SLIDE 1 */

    tlSlide1
    .to('#bottle', 2,                 {marginTop: '29.7em',scale: '2.5',left: '28.1%', ease: Sine.easeOut} , '-=2')
    .to('#cap', 2,                    {marginTop: '27.9em', scale: '2.5', left: '30.7%', height: '4em', ease: Sine.easeOut} , '-=2')
    //.to('#slide02', 0,           {overflow: 'visible'}, '+=0')
    //.to('#slide02', 0,           {overflow: 'hidden'}, '+=0')
    .to('#cap', 0.5,                  {marginTop: '20em', ease: Power1.easeOut} , '+=0')
    .to('#cap', 0.5,                    {marginTop: '29em', left: '92%', rotation: 35, ease: Cubic.easeInOut} , '+=0')
    .to('#no-scent', 0.8,             {height: '8.8em'} , '+=0')
    .fromTo($('#nasacort-compare'), 1.5, {right: '-39%'}, {right: '20.4%', ease: Power1.easeOut} , '+=0');


/* SLIDE 2 */

    tlSlide2
    .to('#compare-copy', 1,  {left: '23%'}, '+=0')
    .to('#compare-bg', 1,    {bottom: '-0.52em'}, '+=0')
    .to('#stats', 1,         {height: '30.5%'}, '+=0');


/* SLIDE 3 */

    tlSlide3
    //.to(window, 3.5, {scrollTo:{y:   $('#divhelper4').offset().top, x:0}, ease:Sine.easeInOut}, '+=0')
    .to('#patient-box', 1.5,   {left: '0px', ease: Power0.easeIn}, '+=0.5');


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
    pos : {
        slide0 : { 'in' : $('#slide01').offset().top, 'out' : $('#slide01').outerHeight() / 2, 'half' : $('#slide01').outerHeight() / 2},
        slide1 : { 'in' : $('#slide02').offset().top - $('#slide02').outerHeight() / 2.7, 'out' : $('#slide02').offset().top + $('#slide02').outerHeight() / 8 , 'half' : $('#slide02').outerHeight() / 2},
        slide2 : { 'in' : $('#slide03').offset().top - $('#slide03').outerHeight() / 2.5, 'out' : $('#slide03').offset().top - $('#slide03').outerHeight() / 3, 'half' : $('#slide03').outerHeight() / 2},
        slide3 : { 'in' : $('#slide04').offset().top - $('#slide04').outerHeight() / 2.5, 'out' : $('#slide04').offset().top - $('#slide04').outerHeight() / 3, 'half' : $('#slide04').outerHeight() / 2},
        slide4 : { 'in' : $('#slide05').offset().top - $('#slide05').outerHeight() / 2.5, 'out' : $('#slide05').offset().top - $('#slide05').outerHeight() / 3, 'half' : $('#slide05').outerHeight() / 2}
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
    play : function(slide){
        //currentAnimation = slide;
        this.timeline[slide].timeScale(1);
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



// INIT THE NEEDED FUNCTIONS
$(function(){
    $('body').flowtype( { minimum : 500,  maximum : 1800  });
    set_dotbox();
    isMobile = window.matchMedia && window.matchMedia(media_query).matches;
    isTablet =  window.matchMedia(media_query_tablet).matches;

    $(window).bind("resize", function(){
        set_dotbox();
        set_variables();
    });

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

//$( "div.demo" ).scrollTop( 300 );
function playAnim(){
    if($(this).scrollTop() >= animations.pos.slide0.in && $(this).scrollTop() < animations.pos.slide0.out){
        animations.getDot('slide0');
        animations.getDot('slide0');
    }

    if($(this).scrollTop() >= animations.pos.slide1.in){
        //console.log('slide 1');
        animations.play('slide1');
        animations.getDot('slide1');

        if ($(this).scrollTop() >= animations.pos.slide1.in && $(this).scrollTop() < animations.pos.slide1.in + 30){
            currentAnimation = 'slide1';
            
            scrollToSlide();
        }
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
        animations.play('slide4');
        animations.getDot('slide4');
    }
}

function revAnim(){
    if($(this).scrollTop() < animations.pos.slide1.out && $(this).scrollTop() > animations.pos.slide0.in){
        animations.reverse('slide1');
        animations.getDot('slide0');
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

    if(slide === 'slide1'){ 
        page.stop(true, true).animate({
            scrollTop: animations.pos[slide].in + (animations.pos[slide].half + animations.pos[slide].half / 3)
        }, 500);
    } else if(slide === 'slide0') {
        page.stop(true, true).animate({
            scrollTop: 0
        }, 500);
    } else {
        page.stop(true, true).animate({
            scrollTop: animations.pos[slide].in + (animations.pos[slide].half - animations.pos[slide].half / 3)
        }, 500);
    }
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
                //console.log('stop this madness');
                page.off("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove");
                page.stop().unbind('scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove'); // This identifies the scroll as a user action, stops the animation, then unbinds the event straight after (optional)
            }
        }); 
    }, 2000);
}


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
    slide3buttonpad = 81 + 5 - ($("#slide03").height() - ($(window).height()-81));
   // console.log ("padd " + slide3buttonpad);

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











