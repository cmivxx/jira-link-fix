//////////////////////////////////////////////////////////////////////////////
// JIRA Link Fixer                                      Created on 9/3/2020 //
// (c) Chris Miller 2020                           https://chrisrmiller.com //
//////////////////////////////////////////////////////////////////////////////
// JIRA has a nasty habbit of not opening links in a new window...          //
// This fixes that.                                                         //
//////////////////////////////////////////////////////////////////////////////
// This is a simple extension that I derived from a couple of other plugins //
// and some stackoverflow searching.                                        //
//////////////////////////////////////////////////////////////////////////////

(function() {

    var jiraUrl = "atlassian.net";
    var currentUrl = window.location.host;

    document.querySelector("body").addEventListener("click", function(e){
        if (e.target.href != undefined && currentUrl.indexOf(jiraUrl) > -1 && e.target.href.indexOf(currentUrl) == -1)
        {
            e.target.target = "_blank";
        }
    });
})();