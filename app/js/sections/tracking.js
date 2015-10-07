
/**** S&A *****/

$(document).ready(function() {
    initGoogleAnalytics();
    addDownloadCTATracking();
});

function initGoogleAnalytics()
{
    /*<!-- Google Analytics -->*/
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-44761297-2', 'auto');
    ga('send', 'pageview');
    /*<!-- End Google Analytics -->*/
}

/************** Fotnotes and References - S&A **************/

function trackFootnoteOpen(index, bodyClass)
{
    //console.log("Opens " + index + " Page " + bodyClass);
    var sectionName = "section ";
    
    if(index === 1 && bodyClass === "science-of-allergic-rhinitis-section")
    {
        index ++;
    }
    
    var footNoteInstance = index + 1;
    
    if(bodyClass === "faq-section")
    {
      sectionName = "";
      if(index === 0)
      {
          footNoteInstance = "first";
      }
      if(index === 1)
      {
          footNoteInstance = "second";
      }
    }
    
    var sectionTag = sectionName  + footNoteInstance + ": footnotes & ref pop up open";
    
    ga('send', 'event', 'popover/modal', 'click_content', "" + sectionTag +"");
}

function trackFootnoteClose(index, bodyClass)
{
    //console.log("Closed " + index + " Page " + bodyClass);
    var sectionName = "section ";
    
    if(index === 1 && bodyClass === "science-of-allergic-rhinitis-section")
    {
        index ++;
    }
    
    var footNoteInstance = index + 1;
    
    if(bodyClass === "faq-section")
    {
      sectionName = "";
      if(index === 0)
      {
          footNoteInstance = "first";
      }
      if(index === 1)
      {
          footNoteInstance = "second";
      }
    }
    
    var sectionTag = sectionName + footNoteInstance + ": footnotes & ref pop up exit";
    
    ga('send', 'event', 'popover/modal', 'click_content', "" + sectionTag + "");
}

/************** Share Modal - S&A **************/

var wasYourName;
var wasYourEmail;
var wasRecipientName;
var wasRecipientEmail;

var independentDataTracking;
var resource;

function trackShare(bodyClass, target)
{
    var sectionName = bodyClass.split(' ')[0];

    wasYourName = false;
    wasYourEmail = false;
    wasRecipientName = false;
    wasRecipientEmail = false;
    independentDataTracking = "";
    resource = "";
    
    if($(target).attr("data-tracking"))//it's maybe on what's clucker page
    {
        independentDataTracking = $(target).attr("data-tracking");
    }
    if($(target).parent().parent().attr("data-tracking"))// should be resources
    {
       resource = $(target).parent().parent().attr("data-tracking"); 
    }
    
    
    switch(sectionName)
    {
        case "home-section":
        break;
        case "nasacort-difference-section":
            ga('send', 'event', 'share', 'click_content', 'drug facts label share button'); 
        break;
        case "dosing-and-efficacy-section":
            ga('send', 'event', 'share', 'click_content', 'drug facts label share button'); 
        break;
        case "whats-a-clucker-section":
            if(independentDataTracking != "")
            {
                ga('send', 'event', 'button link', 'click_content', independentDataTracking + ': share profile button'); 
            }else
            {
                ga('send', 'event', 'share', 'click_content', 'drug facts label share button'); 
            }
        break;
        case "science-of-allergic-rhinitis-section":
            ga('send', 'event', 'share', 'click_content', 'section 4: share button');   
        break;
        case "resources-section":
             if(resource === "nasacort difference")
             {
                 ga('send', 'event', 'share', 'click_content', 'how nasacort is different: share'); 
             }
             if(resource === "ar symptom q")
             {
                 ga('send', 'event', 'share', 'click_content', 'ar symptom questionnaire: share'); 
             }
             if(resource != "nasacort difference" && resource != "ar symptom q")
             {
                 ga('send', 'event', 'share', 'click_content', resource + ': share'); 
             }

        break;
        case "faq-section":
             //Not Applies
        break;
        case "drug-fact-label-section":
            ga('send', 'event', 'share', 'click_content', 'drug facts label share button'); 
        break;
    }
    $("input[name='yourName']").keypress(function() {
        if(!wasYourName)
        {
            trackEnterText(sectionName, "your name");
            wasYourName = true;
        }
    });
    $("input[name='yourEmail']").keypress(function() {
        if(!wasYourEmail)
        {
            trackEnterText(sectionName, "your email address");
            wasYourEmail = true;
        }
    });
    $("input[name='recipientName']").keypress(function() {
        if(!wasRecipientName)
        {
            trackEnterText(sectionName, "recipient's name");
            wasRecipientName = true;
        }
    });
    $("input[name='recipientEmail']").keypress(function() {
        if(!wasRecipientEmail)
        {
            trackEnterText(sectionName, "recipient's email address");
            wasRecipientName = true;
        }
    });
}

function trackEnterText(sectionName, field)
{
    switch(sectionName)
    {
        case "home-section":
        break;
        case "nasacort-difference-section":
            ga('send', 'event', 'registration', 'enter_text_content', 'drug facts share: ' + field);   
        break;
        case "dosing-and-efficacy-section":
            ga('send', 'event', 'registration', 'enter_text_content', 'drug facts share: ' + field);  
        break;
        case "whats-a-clucker-section":
            if(independentDataTracking != "")
            {
                ga('send', 'event', 'registration', 'enter_text_content', independentDataTracking + ' share: ' + field);   
            }else
            {
                ga('send', 'event', 'registration', 'enter_text_content', 'drug facts share: ' + field);
            }
        break;
        case "science-of-allergic-rhinitis-section":
            ga('send', 'event', 'registration', 'enter_text_content', 'science of ar share: ' + field);    
        break;
        case "resources-section":
             if(resource != "")
             {
                ga('send', 'event', 'registration', 'enter_text_content', resource + ' pdf share: ' + field);  
             }
        break;
        case "faq-section":
             //Not Applies
        break;
        case "drug-fact-label-section":
            ga('send', 'event', 'registration', 'enter_text_content', 'drug facts share: ' + field);  
        break;
    }
}

function trackCloseShare(bodyClass)
{
    var sectionName = bodyClass.split(' ')[0];
    
    switch(sectionName)
    {
        case "home-section":
        break;
        case "nasacort-difference-section":
            ga('send', 'event', 'popover/modal', 'click_content', 'drug facts share: exit');    
        break;
        case "dosing-and-efficacy-section":
            ga('send', 'event', 'popover/modal', 'click_content', 'drug facts share: exit');    
        break;
        case "whats-a-clucker-section":
            if(independentDataTracking != "")
            {
                ga('send', 'event', 'popover/modal', 'click_content', independentDataTracking + ' share: exit');   
            } else
            {
                ga('send', 'event', 'popover/modal', 'click_content', 'drug facts share: exit');  
            }
        break;
        case "science-of-allergic-rhinitis-section":
            ga('send', 'event', 'popover/modal', 'click_content', 'science of ar share: exit'); 
        break;
        case "resources-section":
             if(resource != "")
             {
                ga('send', 'event', 'popover/modal', 'click_content', resource + ' pdf share: exit');   
             }
        break;
        case "faq-section":
             //Not Applies
        break;
        case "drug-fact-label-section":
            ga('send', 'event', 'popover/modal', 'click_content', 'drug facts share: exit');    
        break;
    }
}

function trackSubmitShare(bodyClass)
{
    var sectionName = bodyClass.split(' ')[0];
    
    switch(sectionName)
    {
        case "home-section":
        break;
        case "nasacort-difference-section":
            ga('send', 'event', 'button link', 'click_content', 'drug facts share: submit');    
        break;
        case "dosing-and-efficacy-section":
            ga('send', 'event', 'button link', 'click_content', 'drug facts share: submit');    
        break;
        case "whats-a-clucker-section":
            if(independentDataTracking != "")
            {
                ga('send', 'event', 'button link', 'click_content', independentDataTracking + ' share: submit');   
            }else
            {
                 ga('send', 'event', 'button link', 'click_content', 'drug facts share: submit');   
            }
        break;
        case "science-of-allergic-rhinitis-section":
            ga('send', 'event', 'button link', 'click_content', 'science of ar share: submit');   
        break;
        case "resources-section":
             if(resource != "")
             {
                ga('send', 'event', 'button link', 'click_content', resource + ' pdf share: submit');  
             }  
        break;
        case "faq-section":
             //Not Applies  
        break;
        case "drug-fact-label-section":
            ga('send', 'event', 'button link', 'click_content', 'drug facts share: submit');    
        break;
    }
}

function trackCancelShare(bodyClass)
{
    var sectionName = bodyClass.split(' ')[0];
    
    switch(sectionName)
    {
        case "home-section":
        break;
        case "nasacort-difference-section":
            ga('send', 'event', 'button link', 'click_content', 'drug facts share: cancel');    
        break;
        case "dosing-and-efficacy-section":
            ga('send', 'event', 'button link', 'click_content', 'drug facts share: cancel');    
        break;
        case "whats-a-clucker-section":
            if(independentDataTracking != "")
            {
                ga('send', 'event', 'button link', 'click_content', independentDataTracking + ' share: cancel');   
            }else
            {
                ga('send', 'event', 'button link', 'click_content', 'drug facts share: cancel');    
            }  
        break;
        case "science-of-allergic-rhinitis-section":
            ga('send', 'event', 'button link', 'click_content', 'science of ar share: cancel');  
        break;
        case "resources-section":
            if(resource != "")
             {
                ga('send', 'event', 'button link', 'click_content', resource + ' pdf share: cancel');   
             }   
        break;
        case "faq-section":
             //Not Applies
        break;
        case "drug-fact-label-section":
            ga('send', 'event', 'button link', 'click_content', 'drug facts share: cancel');    
        break;
    }
}

/************** Download CTA - S&A **************/

function addDownloadCTATracking()
{
    $(".sympt").on("click",function(){
        
        var sectionName = $("body").attr("class");
        
        if($(this).parent().parent().attr("data-tracking"))// should be resources
        {
           resource = $(this).parent().parent().attr("data-tracking"); 
        }
        
        switch(sectionName)
        {
            case "home-section":
            break;
            case "nasacort-difference-section":
                ga('send', 'event', 'download', 'click_content', 'section 3: download comparision chart button');    
            break;
            case "dosing-and-efficacy-section":
                ga('send', 'event', 'download', 'click_footer', 'drug facts label download button');    
            break;
            case "whats-a-clucker-section":
                ga('send', 'event', 'download', 'click_content', 'download symptom questionnaire button');   
            break;
            case "science-of-allergic-rhinitis-section":
                ga('send', 'event', 'download', 'click_content', 'section 4: download chart button'); 
            break;
            case "resources-section":
                 if(resource === "nasacort difference")
                 {
                     ga('send', 'event', 'download', 'click_content', 'how nasacort is different: download');   
                 }
                 if(resource === "ar symptom q")
                 {
                     ga('send', 'event', 'download', 'click_content', 'ar symptom questionnaire: download');    
                 }
                 if(resource != "nasacort difference" && resource != "ar symptom q")
                 {
                     ga('send', 'event', 'download', 'click_content', resource + ': download'); 
                 }
            break;
            case "faq-section":
                //Not Applies
            break;
            case "drug-fact-label-section":
                ga('send', 'event', 'download', 'click_footer', 'drug facts label download button');    
            break;
        }
    });
}

function trackGlassHeadClose(character)
{
    var symptom = "";
    
    switch(character)
    {
        case "maria":
            symptom = "clucker";
        break;
        case "mark":
            symptom = "dripper";
        break;
        case "kara":
            symptom = "mouthbreather";
        break;
        case "liam":
            symptom = "sniffler";
        break;
    }
    
    ga('send', 'event', 'interactive', 'click_interactive', symptom + ' interactive: exit');   
}

/************** Interactive Form Compare - Nasacort Difference - S&A **************/

function trackInteractiveForm(brand)
{
    ga('send', 'event', 'interactive', 'click_interactive', 'section 3: compare ' + brand + ' select'); 
}

function trackCloseInteractiveForm(brand)
{
    ga('send', 'event', 'interactive', 'click_interactive', 'section 3: compare ' + brand + ' exit');   
}

/************** Carousel - Science of Allerghic Rhinitis - S&A **************/

function trackCurrentSlide(id)
{
    var slideTag = "";
    
    switch(id)
    {
        case "slide-1":
            slideTag = "exposure";
        break;
        case "slide-2":
            slideTag = "early phase";
        break;
        case "slide-3":
            slideTag = "inflammation";
        break;
        case "slide-4":
            slideTag = "late phase";
        break;
        case "slide-5":
            slideTag = "escalation";
        break;
    }
    ga('send', 'event', 'interactive', 'load_slide', 'slideshow: ' + slideTag + ' slide');  
}

function trackForwardSlide(id)
{
    var slideTag = "";
    var prev = "";
    
    switch(id)
    {
        case "slide-1":
            slideTag = "exposure";
        break;
        case "slide-2":
            prev = "exposure";
            slideTag = "early phase response";
        break;
        case "slide-3":
            prev = "early phase response";
            slideTag = "inflammation";
        break;
        case "slide-4":
            prev = "inflammation";
            slideTag = "late phase response";
        break;
        case "slide-5":
            prev = "late phase response";
            slideTag = "escalation";
        break;
    }
    
    ga('send', 'event', 'interactive', 'click_interactive', 'slideshow: '+ prev + ' forward button');  
    ga('send', 'event', 'interactive', 'load_slide', 'slideshow: ' + slideTag + ' slide');      
}

function trackBackSlide(id)
{
    var slideTag = "";
    var next = "";
    
    switch(id)
    {
        case "slide-1":
            next = "early phase response"; 
            slideTag = "exposure";
        break;
        case "slide-2":
            next = "inflammation"; 
            slideTag = "early phase response";
        break;
        case "slide-3":
            next = "late phase response"; 
            slideTag = "inflammation";
        break;
        case "slide-4":
            next = "escalation"; 
            slideTag = "late phase response";
        break;
        case "slide-5":
            slideTag = "escalation";
        break;
    }
    
    ga('send', 'event', 'interactive', 'click_interactive', 'slideshow: ' + next + ' back button'); 
    ga('send', 'event', 'interactive', 'load_slide', 'slideshow: ' + slideTag + ' slide');
}
