$(".head-faq").click(function(){


    var state =  $(this).data("state");
    var item  =  $(this).data("myitem");


    if (state=="close") {
        $(this).data("state", "open");
        console.log (item + " is open!!!");
        click_expand(item);


    } else {
        $(this).data("state", "close");
        console.log (item  + " is close");
        click_close(item);
    }


    // --------------------------------------------
function click_expand(item) {

    console.log (item + " expand fired");

    switch(item) {


        case "xx1":
            // ga for xx1
            break;
        case "xx2":
            // ga for xx2
            break;





    }
}
    // --------------------------------------------

    function click_close(item) {

        console.log (item + " close fired");


        switch(item) {


            case "xx1":
                // ga for xx1
                break;
            case "xx2":
                // ga for xx2
                break;





        }
    }
    // --------------------------------------------



    $(this).toggleClass("collp-icon expanded-icon").next("div.text-faq").slideToggle(300, function(){
        $(this).parent().toggleClass("border-sect-faq");

    });
});

