
/**** S&A *****/

$(document).ready(function() {
    addDownloadCTATracking();
});

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

function trackShare(bodyClass, target)
{
    var sectionName = bodyClass.split(' ')[0];

    wasYourName = false;
    wasYourEmail = false;
    wasRecipientName = false;
    wasRecipientEmail = false;
    
    if($(target).attr("data-tracking"))
    {
        independentDataTracking = $(target).attr("data-tracking");
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
            ga('send', 'event', 'button link', 'click_content', independentDataTracking + ': share profile button'); 
        break;
        case "science-of-allergic-rhinitis-section":
            ga('send', 'event', 'share', 'click_content', 'section 4: share button');   
        break;
        case "resources-section":
            //ga('send', 'event', 'share', 'click_content', 'drug facts label share button'); 
        break;
        case "faq-section":
            //ga('send', 'event', 'share', 'click_content', 'drug facts label share button'); 
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
            }
        break;
        case "science-of-allergic-rhinitis-section":
            ga('send', 'event', 'registration', 'enter_text_content', 'science of ar share: ' + field);    
        break;
        case "resources-section":
            //ga('send', 'event', 'registration', 'enter_text_content', 'drug facts share: ' + field);  
        break;
        case "faq-section":
            //ga('send', 'event', 'registration', 'enter_text_content', 'drug facts share: ' + field);  
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
            } 
        break;
        case "science-of-allergic-rhinitis-section":
            ga('send', 'event', 'popover/modal', 'click_content', 'science of ar share: exit'); 
        break;
        case "resources-section":
            //ga('send', 'event', 'popover/modal', 'click_content', 'drug facts share: exit');    
        break;
        case "faq-section":
            //ga('send', 'event', 'popover/modal', 'click_content', 'drug facts share: exit');    
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
            }  
        break;
        case "science-of-allergic-rhinitis-section":
            ga('send', 'event', 'button link', 'click_content', 'science of ar share: submit');   
        break;
        case "resources-section":
            //ga('send', 'event', 'button link', 'click_content', 'drug facts share: submit');    
        break;
        case "faq-section":
            //ga('send', 'event', 'button link', 'click_content', 'drug facts share: submit');    
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
            }   
        break;
        case "science-of-allergic-rhinitis-section":
            ga('send', 'event', 'button link', 'click_content', 'science of ar share: cancel');  
        break;
        case "resources-section":
            //ga('send', 'event', 'button link', 'click_content', 'drug facts share: cancel');    
        break;
        case "faq-section":
            //ga('send', 'event', 'button link', 'click_content', 'drug facts share: cancel');    
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
        
        switch(sectionName)
        {
            case "home-section":
            break;
            case "nasacort-difference-section":
                ga('send', 'event', 'download', 'click_footer', 'drug facts label download button');    
            break;
            case "dosing-and-efficacy-section":
                ga('send', 'event', 'download', 'click_footer', 'drug facts label download button');    
            break;
            case "whats-a-clucker-section":
                ga('send', 'event', 'download', 'click_footer', 'drug facts label download button');    
            break;
            case "science-of-allergic-rhinitis-section":
                ga('send', 'event', 'download', 'click_content', 'section 4: download chart button'); 
            break;
            case "resources-section":
                ga('send', 'event', 'download', 'click_footer', 'drug facts label download button');    
            break;
            case "faq-section":
                ga('send', 'event', 'download', 'click_footer', 'drug facts label download button');    
            break;
            case "drug-fact-label-section":
                ga('send', 'event', 'download', 'click_footer', 'drug facts label download button');    
            break;
        }
    });
}
