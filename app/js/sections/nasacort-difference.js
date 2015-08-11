

var brand_checks =          [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var brand_checks_default =  [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var brand_checks_afrin =    [1,0,0,0,0,1,1,0,0,0,1,0,0,0];
var brand_checks_benadryl = [1,1,1,1,1,0,0,1,0,1,0,0,1,1];
var brand_checks_claritin = [1,1,1,1,1,0,0,1,0,1,1,1,1,1];
var brand_checks_flonase =  [0,0,1,1,1,1,1,1,1,1,1,1,1,1];
var brand_checks_sudafed =  [1,1,0,0,0,1,1,0,0,1,1,1,1,0];
var brand_checks_zyrtec =   [1,1,1,1,1,0,0,1,0,1,0,1,1,1];




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

    $(".open").on("click", function(e){
        e.preventDefault();
        $("#brand-compare").addClass("brand-compare-open");
        $(".chart-table-container .arrow").css("display","none");


    });

    $(".brand").on("click", function(e){
        e.preventDefault();
        $("#brand-compare").removeClass("brand-compare-open");
        $(".chart-table-container .arrow").css("display","initial");


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