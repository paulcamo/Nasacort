$(".head-faq").click(function(){


    var state =  $(this).data("state");
    var item  =  $(this).data("myitem");


    if (state=="close") {
        $(this).data("state", "open");
        //console.log (item + " is open!!!");
        click_expand(item);


    } else {
        $(this).data("state", "close");
        //console.log (item  + " is close");
        click_close(item);
    }


    // --------------------------------------------
function click_expand(item) {

    //console.log (item + " expand fired");

    switch(item) {


        case "faq01":
            ga('send', 'event', 'expand', 'click_expand', 'what is nasacort exp');
            break;
        case "faq02":
            ga('send', 'event', 'expand', 'click_expand', 'otc nasacort v rx nasacort exp');
            break;
        case "faq03":
            ga('send', 'event', 'expand', 'click_expand', 'indication exp');
            break;
        case "faq04":
            ga('send', 'event', 'expand', 'click_expand', 'relieve symptoms exp');
            break;
        case "faq05":
            ga('send', 'event', 'expand', 'click_expand', 'first day exp');
            break;
        case "faq06":
            ga('send', 'event', 'expand', 'click_expand', 'drowsy exp');
            break;
        case "faq07":
            ga('send', 'event', 'expand', 'click_expand', 'unpleasant smell exp');
            break;
        case "faq08":
            ga('send', 'event', 'expand', 'click_expand', 'alcohol exp');
            break;
        case "faq09":
            ga('send', 'event', 'expand', 'click_expand', 'harsh taste exp');
            break;
        case "faq010":
            ga('send', 'event', 'expand', 'click_expand', 'addiction exp');
            break;
        case "faq011":
            ga('send', 'event', 'expand', 'click_expand', 'otc ins diff exp');
            break;
        case "faq012":
            ga('send', 'event', 'expand', 'click_expand', 'drip exp');
            break;
        case "faq013":
            ga('send', 'event', 'expand', 'click_expand', 'patient administration instructions exp');
            break;
        case "faq014":
            ga('send', 'event', 'expand', 'click_expand', 'dosing info exp');
            break;
        case "faq015":
            ga('send', 'event', 'expand', 'click_expand', 'children use exp');
            break;
        case "faq016":
            ga('send', 'event', 'expand', 'click_expand', 'pediatric dosing exp');
            break;
        case "faq017":
            ga('send', 'event', 'expand', 'click_expand', 'children use exp');
            break;
        case "faq018":
            ga('send', 'event', 'expand', 'click_expand', 'pediatric dosing exp');
            break;
        case "faq019":
            ga('send', 'event', 'expand', 'click_expand', 'blood pressure meds exp');
            break;
        case "faq020":
            ga('send', 'event', 'expand', 'click_expand', 'every day use exp');
            break;
        case "faq021":
            ga('send', 'event', 'expand', 'click_expand', 'with other allergy meds exp');
            break;
        case "faq022":
           ga('send', 'event', 'expand', 'click_expand', 'when to stop using exp');
            break;
        case "faq023":
            ga('send', 'event', 'expand', 'click_expand', 'does patient have ar exp');
            break;
        case "faq024":
            ga('send', 'event', 'expand', 'click_expand', 'when to use ins exp');
            break;
        case "faq025":
            ga('send', 'event', 'expand', 'click_expand', 'how to use oahs exp');
            break;
        case "faq026":
            ga('send', 'event', 'expand', 'click_expand', 'nasal decongestants exp');
            break;


    }
}
    // --------------------------------------------

    function click_close(item) {

        //console.log (item + " close fired");


        switch(item) {


            case "faq01":
                ga('send', 'event', 'minimize', 'click_minimize', 'what is nasacort min');
                break;
            case "faq02":
                ga('send', 'event', 'minimize', 'click_minimize', 'otc nasacort v rx nasacort min');
                break;
            case "faq03":
                ga('send', 'event', 'minimize', 'click_minimize', 'indication min');
                break;
            case "faq04":
                ga('send', 'event', 'minimize', 'click_minimize', 'relieve symptoms min');
                break;
            case "faq05":
                ga('send', 'event', 'minimize', 'click_minimize', 'first day min');
                break;
            case "faq06":
                ga('send', 'event', 'minimize', 'click_minimize', 'drowsy min');
                break;
            case "faq07":
                ga('send', 'event', 'minimize', 'click_minimize', 'unpleasant smell min');
                break;
            case "faq08":
                ga('send', 'event', 'minimize', 'click_minimize', 'alcohol min');
                break;
            case "faq09":
                ga('send', 'event', 'minimize', 'click_minimize', 'harsh taste min');
                break;
            case "faq010":
                ga('send', 'event', 'minimize', 'click_minimize', 'addiction min');
                break;
            case "faq011":
                ga('send', 'event', 'minimize', 'click_minimize', 'otc ins diff min');
                break;
            case "faq012":
                ga('send', 'event', 'minimize', 'click_minimize', 'drip min');
                break;
            case "faq013":
                ga('send', 'event', 'minimize', 'click_minimize', 'patient administration instructions min');
                break;
            case "faq014":
                ga('send', 'event', 'minimize', 'click_minimize', 'dosing info min');
                break;
            case "faq015":
                ga('send', 'event', 'minimize', 'click_minimize', 'children use min');
                break;
            case "faq016":
                ga('send', 'event', 'minimize', 'click_minimize', 'pediatric dosing min');
                break;
            case "faq017":
                ga('send', 'event', 'minimize', 'click_minimize', 'children use min');
                break;
            case "faq018":
                ga('send', 'event', 'minimize', 'click_minimize', 'pediatric dosing min');
                break;
            case "faq019":
                ga('send', 'event', 'minimized', 'click_minimize', 'blood pressure meds min');
                break;
            case "faq020":
                ga('send', 'event', 'minimize', 'click_minimize', 'every day use min');
                break;
            case "faq021":
                ga('send', 'event', 'minimize', 'click_minimize', 'with other allergy meds min');
                break;
            case "faq022":
                ga('send', 'event', 'minimize', 'click_minimize', 'when to stop using min');
                break;
            case "faq023":
                ga('send', 'event', 'minimize', 'click_minimize', 'does patient have ar min');
                break;
            case "faq024":
                ga('send', 'event', 'minimize', 'click_minimize', 'when to use ins min');
                break;
            case "faq025":
                ga('send', 'event', 'minimize', 'click_minimize', 'how to use oahs min');
            break;
            case "faq026":
                ga('send', 'event', 'minimize', 'click_minimize', 'nasal decongest min');
            break;





        }
    }
    // --------------------------------------------



    $(this).toggleClass("collp-icon expanded-icon").next("div.text-faq").slideToggle(300, function(){
        $(this).parent().toggleClass("border-sect-faq");

    });
});

