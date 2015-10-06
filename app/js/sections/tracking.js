
/**** S&A *****/

$(document).ready(function() {
    
});


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
