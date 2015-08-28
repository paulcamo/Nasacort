

// --------------------------------------------------------------------

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






    // ---loop animation for carousel------------------------------------------------------------------------------------------------------

    var tl0 = new TimelineMax({repeat:0});
    var tl1 = new TimelineMax({repeat:-1});
    var tl2 = new TimelineMax({repeat:-1});
    var tl3 = new TimelineMax({repeat:-1});



    tl0.staggerTo("#slide1-textbox", 4, {left: "40.5%", delay: 3, yoyo:false}, 3);
    tl1.staggerTo(".js-box", 1.5, {opacity:0, delay: 6.5, yoyo:true}, 3);
    tl2.staggerTo(".js-lady", 1.5, {opacity:0, delay: 6.5, yoyo:true}, 3 );
    tl3.staggerTo(".js-zoom", 6, {top: "-3%", left: "-3%", width: "107%" , delay:0, yoyo:false}, 3 );







    function resetOpacity () {
      //  $("lady01").css("opacity",1);
    }



    // ------------------------------------------------------------------------------------------------------------------------------------




    $( 'html, body' ).scrollTop(0); //reset scroll to top ....
    $('body').flowtype( { minimum : 500,  maximum : 1800  }); // set flowtype ...
    $("#dots-container .dotbox .dot:eq(0)").addClass("dot-on");  // set first dot in blue ....


    var tempo_cap=99000;


    var controller = $.superscrollorama();










    // -----to hide the white header bar ---------------------------------------------------------------------------------------------------------------------

    controller.addTween('#brandlogo-tr', TweenMax.to( $('#header'), 0.5, {css:{top: "-29px"}}), 100);
    controller.addTween('#brandlogo-tr', TweenMax.from( $('#slide01'), 0.5, {css:{top: 111}}), 100);
    //controller.addTween('#brandlogo-tr', TweenMax.from( $('#productbox-container'), 0.5, {css:{top: 111}}), 100);





    // -------------------------------------------------------------------------------------------------------------------------------------------------------






    // ----- to go to slide 2 -------------------------------------------------------------------------------------------------------------------------------

    controller.addTween('#brandlogo-tr', TweenMax.fromTo( $('#slide01'), 0.5, {top:'81px'},        {top:'-900px'}),     30000);
    controller.addTween('#brandlogo-tr', TweenMax.fromTo( $('#slide02'), 0.5, {marginTop:'0em'},    {marginTop:'-15em'}),     30000);

    controller.addTween('#brandlogo-tr', TweenMax.fromTo( $('#bottle'), 0.5, {marginTop:'1em', scale:'1', left:'72%'  },   {marginTop:'17em', scale:'2.5', left:'28.2%' , ease:  Power1.easeOut}  ),     35000, 5000);  //bottle movement
    controller.addTween('#brandlogo-tr', TweenMax.fromTo( $('#cap'), 0.5, {marginTop:'0.2em', scale:'1', left:'74.6%', height: '3em'  },   {marginTop:'14.4em', scale:'2.5', left:'30.5%' , height: '4em', ease:  Power1.easeOut}  ),     35000, 5000);  //bottle movement


    controller.addTween('#brandlogo-tr', TweenMax.to( $('#cap'), 0.5,   {marginTop:'7.5em' , ease:  Power1.easeOut}  ),     35000, 45000); // opening cap...
    controller.addTween('#brandlogo-tr', TweenMax.to( $('#cap'), 0.5,   {marginTop:'16.7em', left:'92%' , rotation: 35, ease:Cubic.easeInOut }  ),     35000, 65000);

    controller.addTween('#brandlogo-tr', TweenMax.to( $('#background'),  0.5, {top:'-10.7em'}),     20000, 110000);
    controller.addTween('#brandlogo-tr', TweenMax.to( $('#no-scent'),  0.5, {height:'6em'}),     35000, 80000);
    controller.addTween('#brandlogo-tr', TweenMax.fromTo( $('#nasacort-compare'), 0.5, {right:'-35%' },   {right:'20.4%' , ease:  Power1.easeOut}  ),     35000, 120000);







//
//$("#section2").on("click", function(){
//
//
//    TweenMax.fromTo( $('#slide01'),               1, {top:'81px'},        {top:'-900px'});
//    TweenMax.fromTo( $('#slide02'),               1, {marginTop:'0em'},    {marginTop:'-15em'});
//
//
//    TweenMax.fromTo( $('#bottle'),               1, {marginTop:'0.3em', scale:'1', left:'72%'  },   {marginTop:'16.4em', scale:'2.5', left:'28.2%' , ease:  Power1.easeOut}  );
//    TweenMax.fromTo( $('#cap'),               1, {marginTop:'0em', scale:'1', left:'74.6%'  },   {marginTop:'15em', scale:'2.5', left:'30.7%' , ease:  Power1.easeOut}  );
//    TweenMax.to( $('#cap'),               1,   {marginTop:'7.5em' , delay: 3, ease:  Power1.easeOut}  );
//
//    TweenMax.to( $('#cap'),               1,   {marginTop:'16.7em', left:'95%' , delay: 6, rotation: 35, ease:Cubic.easeInOut }  );
//    TweenMax.to( $('#background'),            1, {top:'-10.7em'});
//
//
//
//});
//





















    // ----- to go to slide 3 -------------------------------------------------------------------------------------------------------------------------------

  //  controller.addTween('#brandlogo8-tr', TweenMax.to( $('#slide03'),            1,   {top:'1.6em'}),     0);
    controller.addTween('#brandlogo8-tr', TweenMax.to( $('#background'),            1,   {top:'-33em'}),     30000);
    controller.addTween('#brandlogo8-tr', TweenMax.to( $('#slide02'),            1,   {marginTop:'-34em'}),     30000);
    controller.addTween('#brandlogo8-tr', TweenMax.fromTo( $('#compare-bg'),            1, {top:'15em'},    {top:'1.45em'}),    35000, 65000);
    controller.addTween('#brandlogo8-tr', TweenMax.fromTo( $('#compare-copy'),          1, {left:'-42%'},   {left:'23%'}),      35000, 31000);
    controller.addTween('#brandlogo8-tr', TweenMax.fromTo( $('#stats'),                 1, {height:'0%'},   {height:'33%'}),    15000, 90000);

    // ------ to go to slide 4 ------------------------------------------------------------------------------------------------------------------------

    controller.addTween('#brandlogo9-tr', TweenMax.to( $('#background'),            1,   {top:'-53em'}),     30000);
    controller.addTween('#brandlogo9-tr', TweenMax.fromTo( $('#slide03'),               1, {top:'1.5em'},       {top:'-16em'}),     30000);
    controller.addTween('#brandlogo9-tr', TweenMax.fromTo( $('#slide04'),               1, {marginTop:'17em'},  {marginTop:'0em'}), 25000);
    controller.addTween('#brandlogo9-tr', TweenMax.fromTo( $('#patient-box'),           1, {right:'-180%'},     {right:'0%'}),      30000, 25000);

    // ------ to go to slide 5 ------------------------------------------------------------------------------------------------------------------------

    controller.addTween('#brandlogo10', TweenMax.to( $('#background'),              1,   {top:'-70.5em'}),   40000);
    controller.addTween('#brandlogo10', TweenMax.fromTo( $('#slide04'),                 1, {top:'0em'},         {top:'-16em'}),     25000);
    controller.addTween('#brandlogo10', TweenMax.fromTo( $('#slide05'),                 1, {marginTop:'15em'},  {marginTop:'0em'}), 30000);
    controller.addTween('#brandlogo10', TweenMax.fromTo( $('#understand-box'),          1, {left:'-140%'},      {left:'0%'}),       50000, 20000);
    controller.addTween('#brandlogo10', TweenMax.to( $('#yellow-spike'),            1,   {bottom:'72%'}),     40000);

    // -----------------------------------------------------------------------------------------------------------------------------------------------





});












// ---------------------------------------------------------------------------------------

$( window ).resize(function() {
    $(".dotbox").css("top",  ($(window).height() -  $(".dotbox").height())/2 + "px");
});




// ---------------------------------------------------------------------------------------

$("#equis").on("click",function(e) {
    $('html, body').scrollTop(0); //reset scroll to top ....
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

