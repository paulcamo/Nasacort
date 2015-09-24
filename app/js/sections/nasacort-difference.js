

var brand_checks =          [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var brand_checks_default =  [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var brand_checks_afrin =    [1,0,0,0,0,1,1,0,0,0,1,0,0,0];
var brand_checks_benadryl = [1,1,1,1,1,0,0,1,0,1,0,0,1,1];
var brand_checks_claritin = [1,1,1,1,1,0,0,1,0,1,1,1,1,1];
var brand_checks_flonase =  [0,0,1,1,1,1,1,1,1,1,1,1,1,1];
var brand_checks_sudafed =  [1,1,0,0,0,1,1,0,0,1,1,1,1,0];
var brand_checks_zyrtec =   [1,1,1,1,1,0,0,1,0,1,0,1,1,1];

var mobileBreakPoint = 768;


function set_checks(nn){

    remove_brand_bg(nn);




    $(".brand-check").attr("src","../img/desktop/nasacort-difference/charts-check-" + nn + ".png");
    for (n=0;n<=brand_checks.length; n++) {
        if (brand_checks[n]==1) {
            $(".brand-check:eq("+ n + ")").removeClass("invisible");
        } else  {
            $(".brand-check:eq("+ n + ")").addClass("invisible");
        }
    }
}


function remove_brand_bg(nn) {

    $("#brand-compare .open").removeClass("sprite-bg-afrin");
    $("#brand-compare .open").removeClass("sprite-bg-claritin");
    $("#brand-compare .open").removeClass("sprite-bg-flonase");
    $("#brand-compare .open").removeClass("sprite-bg-zyrtec");
    $("#brand-compare .open").removeClass("sprite-bg-benadryl");
    $("#brand-compare .open").removeClass("sprite-bg-sudafed");

    $("#brand-compare .open").addClass("sprite-bg-" + nn);
}


$(document).ready(function(){

    set_checks("clear");
    
    changeImageSrc();
    keepTDsameWidthArrow();

    $('.instruccion').click(function(event) {
        event.preventDefault();
    });

    $(".open").on("click", function(e){
        e.preventDefault();
        $('.arrow').show();
        $("#brand-compare").addClass("brand-compare-open");
        $(".chart-table-container .arrow").css("display","none");

        $("#brand-compare .inner-logos").show();
        $("#brand-compare .instruccion").show();

    });

    $(".brand").on("click", function(e){
        e.preventDefault();
        $("#brand-compare .open").removeClass("start");
        $("#brand-compare").removeClass("brand-compare-open");
        $(".chart-table-container .arrow").css("display","initial");

        $("#brand-compare .inner-logos").hide();
        $("#brand-compare .instruccion").hide();


        switch($(this).data("brand")) {

            case "afrin":
                brand_checks = brand_checks_afrin;
                set_checks("afrin");
                break;
            case "benadryl":
                brand_checks = brand_checks_benadryl;
                set_checks("benadryl");
                break;
            case "claritin":
                brand_checks = brand_checks_claritin;
                set_checks("claritin");
                break;
            case "flonase":
                brand_checks = brand_checks_flonase;
                set_checks("flonase");
                break;
            case "sudafed":
                brand_checks = brand_checks_sudafed;
                set_checks("sudafed");
                break;
            case "zyrtec":
                brand_checks = brand_checks_zyrtec;
                set_checks("zyrtec");
                break;
            default:
                brand_checks = brand_checks_default;
                set_checks();
                break;

        }
    });

});

$(window).bind("resize", function(){
    //Adjusts image when browser resized
    changeImageSrc();
    keepTDsameWidthArrow();
});

function changeImageSrc()
{
     var contentwidth = $(window).width();
     
     if ((contentwidth) < mobileBreakPoint)
     {
         $(".inner-logos .brand img").each(function(){
             var newPath = $(this).attr("src").replace("desktop", "mobile");
             $(this).attr("src", newPath);
         });
     }else
     {
        $(".inner-logos .brand img").each(function(){
             var newPath = $(this).attr("src").replace("mobile", "desktop");
             $(this).attr("src", newPath);
         });
     }
}

function keepTDsameWidthArrow()
{
    console.log( $(".arrow").width());  
    if(isMobile)
    {
        $(".nasacort-difference-section .chart-table-container .arrow").width($(".nasacort-difference-section .charts td:nth-child(4)").width() + 1);
        $("#brand-compare").width($(".nasacort-difference-section .charts td:nth-child(4)").width() + 3);
    }else
    {
        $(".nasacort-difference-section .charts td:nth-child(4)").width($("#brand-compare").width() - 2);
        $(".nasacort-difference-section .chart-table-container .arrow").width($("#brand-compare").width() - 2);
    } 
    //$(".nasacort-difference-section .chart-table-container .vrs").css("right", $("#brand-compare").width() + 4);
}
