$(document).ready(function() {
  var user = "jamesbarnett"; //treehouse username
  
  /* get treehouse profile info via JSON */
  $.getJSON("https://www.reddit.com/r/worldnews.json", function(data) { 
    console.log(data);// intialize list
    $("#badges").html('<ol>');
    var output = "";
    /* loop through the JSON, parse out badge name & icon
    wrap it in some HTML. */    
    for (var i in data.data.children) {
        output += "<li>";
        output +="<div>";
        output +="<p>" + data.children[i].title + "</p>";
        output += "<p>" + data.children[i].ups + "</p>";
        output+="</div>";
        output += "</li>";      
    }
    $("#badges ol").append(output); // append li
    $("#badges ol").append('</ol>'); // close list
    
    /* hide spinner and then output HTML we built in the for loop */
    $(".spinner").hide();
  });
});

/***** But how does JSON work exactly *****

The magic here happens in the for loop over "data.badges". The "data" part, comes from the variable name we passed the function when we called the getJSON function and the "badges" part comes from the structure of the JSON data that the Treehouse API returned to us. 
    
How do you know what the structure of that JSON is? 

You look at it using a JSON viewer like the one at jsonviewer.stack.hu. To see what the JSON looks like that we are getting in this example go here: http://jsonviewer.stack.hu/#http://teamtreehouse.com/jamesbarnett.json and click on the 'viewer tab' 

**********/