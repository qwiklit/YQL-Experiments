document.getElementById("sidebar-nav").innerHTML =

  '<li class="sidebar-brand">' +
  '<a style="font-size: 20px; padding-top: 15px; " class="sidebar-title" href="index.html"> Omniwire </a>' +
  '</li>' +
    
    
  '<li>' +
  '<a href="omniwire-map.html">Launch Map</a>' +
  '</li>' +
    
    
  '<li>' +
  '<a>United States of America</a>' +
    //edit fictionsub id
  '<ul id="myUL" class="submenu fictionsub">' + 
     '<input type="text" id="myInput" class="myInput" onkeyup="myFunction()" placeholder=" Filter"  title="Type in a name">' +
    
    
'<li><a href="usa-news.html" id="nonfiction">Top News</a></li>'+
'<li><a href="omniwire-alabama.html" id="alabama-news">Alabama</a><a href="#" class="dropdown-button dropdown-toggle"><img class="plus-button" src="new-icons/plus-button.png"></a><ul class="city-dropdown dropdown-menu" role="menu"><a class="cities" href="#"><li class="city">Huntsville</li></a><a class="cities" href="#"><li class="city">Mobile</li></a><a class="cities" href="#"><li class="city">Montgomery</li></a><a class="cities" href="#"><li class="city">Birmingham</li></a></ul></li>'+
'<li><a href="omniwire-alaska.html" id="alaska-news">Alaska</a><a href="#" class="dropdown-button dropdown-toggle"><img class="plus-button" src="new-icons/plus-button.png"></a><ul class="city-dropdown dropdown-menu" role="menu"><a class="cities" href="#"><li class="city">Anchorage</li></a><a class="cities" href="#"><li class="city">Juneau</li></a></ul></li>'+
'<li><a href="omniwire-arizona.html" id="arizona-news">Arizona</a><a href="#" class="dropdown-button dropdown-toggle"><img class="plus-button" src="new-icons/plus-button.png"></a><ul class="city-dropdown dropdown-menu" role="menu"><a class="cities" href="#"><li class="city">Phoenix</li></a><a class="cities" href="#"><li class="city">Tucson</li></a><a class="cities" href="#"></a><a class="cities" href="#"><li class="city">Flagstaff</li></a></ul></li>'+
'<li><a href="omniwire-arkansas.html" id="arkansas-news">Arkansas</a><a href="#" class="dropdown-button dropdown-toggle"><img class="plus-button" src="new-icons/plus-button.png"></a><ul class="city-dropdown dropdown-menu" role="menu"><a class="cities" href="#"><li class="city">Little Rock</li></a><a class="cities" href="#"><li class="city">Fayetteville</li></a><a class="cities" href="#"><li class="city">Bentonville</li></a><a class="cities" href="#"><li class="city">Hot Springs</li></a></ul></li>'+
'<li><a href="omniwire-california.html" id="california-news">California</a><a href="#" class="dropdown-button dropdown-toggle"><img class="plus-button" src="new-icons/plus-button.png"></a><ul class="city-dropdown dropdown-menu" role="menu"><a class="cities" href="#"><li class="city">Los Angeles</li></a><a class="cities" href="#"><li class="city">San Francisco Bay Area</li><a class="cities" href="#"><li class="city">San Diego</li></a><a class="cities" href="#"><li class="city">Inland Empire</li></a><a class="cities" href="#"><li class="city">Sacramento</li></a></ul></li>'+
'<li><a href="omniwire-colorado.html" id="colorado-news">Colorado</a><a href="#" class="dropdown-button dropdown-toggle"><img class="plus-button" src="new-icons/plus-button.png"></a><ul class="city-dropdown dropdown-menu" role="menu"><a class="cities" href="#"><li class="city">Denver</li></a><a class="cities" href="#"><li class="city">Colorado Springs</li></a><a class="cities" href="#"><li class="city">Boulder</li></a><a class="cities" href="#"><li class="city">Aspen</li></a></ul></li>'+
'<li><a href="omniwire-connecticut.html" id="connecticut-news">Connecticut</a><a href="#" class="dropdown-button dropdown-toggle"><img class="plus-button" src="new-icons/plus-button.png"></a><ul class="city-dropdown dropdown-menu" role="menu"><a class="cities" href="#"><li class="city">Hartford</li></a><a class="cities" href="#"></a></ul></li>'+
'<li><a href="omniwire-delaware.html" id="delaware-news">Delaware</a><a href="#" class="dropdown-button dropdown-toggle"><img class="plus-button" src="new-icons/plus-button.png"></a><ul class="city-dropdown dropdown-menu" role="menu"><a class="cities" href="#"><li class="city">Dover</li></a><a class="cities" href="#"><li class="city">Sussex County</li></a><a class="cities" href="#"></a></ul></li>' +
'<li><a href="omniwire-florida.html" id="florida-news">Florida</a><a href="#" class="dropdown-button dropdown-toggle"><img class="plus-button" src="new-icons/plus-button.png"></a><ul class="city-dropdown dropdown-menu" role="menu"><a class="cities" href="#"><li class="city">Miami</li></a><a class="cities" href="#"><li class="city">Orlando</li></a><a class="cities" href="#"><li class="city">Tampa</li></a><a class="cities" href="#"><li class="city">Jacksonville</li></a><a class="cities" href="#"><li class="city">Fort Lauderdale</li></a><a class="cities" href="#"><li class="city">Tallahassee</li></a></ul></li>'+
'<li><a href="omniwire-georgia.html" id="georgia-news">Georgia</a><a href="#" class="dropdown-button dropdown-toggle"><img class="plus-button" src="new-icons/plus-button.png"></a><ul class="city-dropdown dropdown-menu" role="menu"><a class="cities" href="#"><li class="city">Atlanta</li></a><a class="cities" href="#"><li class="city">Marietta</li></a><a class="cities" href="#"><li class="city">Savannah</li></a><a class="cities" href="#"><li class="city">Macon</li></a></ul></li>'+
'<li><a href="omniwire-hawaii.html" id="hawaii-news">Hawaii</a><a href="#" class="dropdown-button dropdown-toggle"><img class="plus-button" src="new-icons/plus-button.png"></a><ul class="city-dropdown dropdown-menu" role="menu"><a class="cities" href="#"><li class="city">Honolulu</li></a></ul></li>'+
'<li><a href="omniwire-idaho.html" id="idaho-news">Idaho</a><a href="#" class="dropdown-button dropdown-toggle"><img class="plus-button" src="new-icons/plus-button.png"></a><ul class="city-dropdown dropdown-menu" role="menu"><a class="cities" href="#"><li class="city">Boise</li></a><a class="cities" href="#"><li class="city">Nampa</li></a><a class="cities" href="#"><li class="city">Idaho Falls</li></a></ul></li>'+
'<li><a href="omniwire-illinois.html" id="illinois-news">Illinois</a><a href="#" class="dropdown-button dropdown-toggle"><img class="plus-button" src="new-icons/plus-button.png"></a><ul class="city-dropdown dropdown-menu" role="menu"><a class="cities" href="#"><li class="city">Chicago</li></a><a class="cities" href="#"><li class="city">Peoria</li></a><a class="cities" href="#"><li class="city">Rockford</li></a><a class="cities" href="#"><li class="city">Champaign</li></a></ul></li>'+
'<li><a href="omniwire-indiana.html" id="indiana-news">Indiana</a><a href="#" class="dropdown-button dropdown-toggle"><img class="plus-button" src="new-icons/plus-button.png"></a><ul class="city-dropdown dropdown-menu" role="menu"><a class="cities" href="#"><li class="city">Indianapolis</li></a><a class="cities" href="#"><li class="city">Fort Wayne</li></a><a class="cities" href="#"><li class="city">Bloomington</li></a><a class="cities" href="#"><li class="city">Evansville</li></a></ul></li>'+
'<li><a href="omniwire-iowa.html" id="iowa-news">Iowa</a><a href="#" class="dropdown-button dropdown-toggle"><img class="plus-button" src="new-icons/plus-button.png"></a><ul class="city-dropdown dropdown-menu" role="menu"><a class="cities" href="#"><li class="city">Des Moines</li></a><a class="cities" href="#"><li class="city">Cedar Rapids</li></a><a class="cities" href="#"><li class="city">Davenport</li></a><a class="cities" href="#"><li class="city">Iowa City</li></a></ul></li>'+
'<li><a href="omniwire-kansas.html" id="kansas-news">Kansas</a><a href="#" class="dropdown-button dropdown-toggle"><img class="plus-button" src="new-icons/plus-button.png"></a><ul class="city-dropdown dropdown-menu" role="menu"><a class="cities" href="#"><li class="city">Kansas City</li></a><a class="cities" href="#"><li class="city">Wichita</li></a><a class="cities" href="#"><li class="city">Topeka</li></a><a class="cities" href="#"><li class="city">Lawrence</li></a></ul></li>'+
'<li><a href="omniwire-kentucky.html" id="kentucky-news">Kentucky</a><a href="#" class="dropdown-button dropdown-toggle"><img class="plus-button" src="new-icons/plus-button.png"></a><ul class="city-dropdown dropdown-menu" role="menu"><a class="cities" href="#"><li class="city">Louisville</li></a><a class="cities" href="#"><li class="city">Lexington</li></a><a class="cities" href="#"><li class="city">Bowling Green</li></a></ul></li>'+
'<li><a href="omniwire-louisiana.html" id="louisiana-news">Louisiana</a><a href="#" class="dropdown-button dropdown-toggle"><img class="plus-button" src="new-icons/plus-button.png"></a><ul class="city-dropdown dropdown-menu" role="menu"><a class="cities" href="#"><li class="city">New Orleans</li></a><a class="cities" href="#"><li class="city">Baton Rouge</li></a><a class="cities" href="#"></a><a class="cities" href="#"><li class="city">Lafayette</li></a><a class="cities" href="#"><li class="city">Shreveport</li></a></ul></li>'+
'<li><a href="omniwire-maine.html" id="maine-news">Maine</a><a href="#" class="dropdown-button dropdown-toggle"><img class="plus-button" src="new-icons/plus-button.png"></a><ul class="city-dropdown dropdown-menu" role="menu"><a class="cities" href="#"><li class="city">Portland</li></a><a class="cities" href="#"><li class="city">Lewiston</li></a></ul></li>'+
'<li><a href="omniwire-maryland.html" id="maryland-news">Maryland</a><a href="#" class="dropdown-button dropdown-toggle"><img class="plus-button" src="new-icons/plus-button.png"></a><ul class="city-dropdown dropdown-menu" role="menu"><a class="cities" href="#"><li class="city">Baltimore</li></a><a class="cities" href="#"><li class="city">Annapolis</li></a><a class="cities" href="#"><li class="city">Montgomery County</li></a></ul></li>'+
'<li><a href="omniwire-massachusetts.html" id="massachusetts-news">Massachusetts</a><a href="#" class="dropdown-button dropdown-toggle"><img class="plus-button" src="new-icons/plus-button.png"></a><ul class="city-dropdown dropdown-menu" role="menu"><a class="cities" href="#"><li class="city">Boston</li></a><a class="cities" href="#"><li class="city">Cape Cod</li></a><a class="cities" href="#"></a><a class="cities" href="#"><li class="city">Western Mass</li></a></ul></li>'+
'<li><a href="omniwire-michigan.html" id="michigan-news">Michigan</a><a href="#" class="dropdown-button dropdown-toggle"><img class="plus-button" src="new-icons/plus-button.png"></a><ul class="city-dropdown dropdown-menu" role="menu"><a class="cities" href="#"><li class="city">Detroit</li></a><a class="cities" href="#"><li class="city">Grand Rapids</li></a><a class="cities" href="#"><li class="city">Flint</li></a><a class="cities" href="#"><li class="city">Kalamazoo</li></a><a class="cities" href="#"><li class="city">Northern Peninsula</li></a></ul></li>'+
'<li><a href="omniwire-minnesota.html" id="minnesota-news">Minnesota</a><a href="#" class="dropdown-button dropdown-toggle"><img class="plus-button" src="new-icons/plus-button.png"></a><ul class="city-dropdown dropdown-menu" role="menu"><a class="cities" href="#"><li class="city">Minneapolis</li></a><a class="cities" href="#"><li class="city">Rochester</li></a><a class="cities" href="#"><li class="city">St.Cloud</li></a><a class="cities" href="#"><li class="city">Duluth</li></a></ul></li>'+
'<li><a href="omniwire-mississippi.html" id="mississippi-news">Mississippi</a><a href="#" class="dropdown-button dropdown-toggle"><img class="plus-button" src="new-icons/plus-button.png"></a><ul class="city-dropdown dropdown-menu" role="menu"><a class="cities" href="#"><li class="city">Jackson</li></a><a class="cities" href="#"><li class="city">Biloxi</li></a><a class="cities" href="#"><li class="city">Hattiesburg</li></a><a class="cities" href="#"><li class="city">Tupelo</li></a></ul></li>'+
'<li><a href="omniwire-missouri.html" id="missouri-news">Missouri</a><a href="#" class="dropdown-button dropdown-toggle"><img class="plus-button" src="new-icons/plus-button.png"></a><ul class="city-dropdown dropdown-menu" role="menu"><a class="cities" href="#"><li class="city">St.Louis</li></a><a class="cities" href="#"><li class="city">Kansas City</li></a><a class="cities" href="#"></a><a class="cities" href="#"><li class="city">Springfield</li></a><a class="cities" href="#"><li class="city">Columbia</li></a></ul></li>'+
'<li><a href="omniwire-montana.html" id="montana-news">Montana</a><a href="#" class="dropdown-button dropdown-toggle"><img class="plus-button" src="new-icons/plus-button.png"></a><ul class="city-dropdown dropdown-menu" role="menu"><a class="cities" href="#"><li class="city">Billings</li></a><a class="cities" href="#"><li class="city">Helena</li></a><a class="cities" href="#"></a><a class="cities" href="#"><li class="city">Butte</li></a><a class="cities" href="#"><li class="city">Missoula</li></a></ul></li>'+
'<li><a href="omniwire-nebraska.html" id="nebraska-news">Nebraska</a><a href="#" class="dropdown-button dropdown-toggle"><img class="plus-button" src="new-icons/plus-button.png"></a><ul class="city-dropdown dropdown-menu" role="menu"><a class="cities" href="#"><li class="city">Omaha</li></a><a class="cities" href="#"><li class="city">Lincoln</li></a><a class="cities" href="#"></a><a class="cities" href="#"><li class="city">Grand Island</li></a></ul></li>'+
'<li><a href="omniwire-nevada.html" id="nevada-news">Nevada</a><a href="#" class="dropdown-button dropdown-toggle"><img class="plus-button" src="new-icons/plus-button.png"></a><ul class="city-dropdown dropdown-menu" role="menu"><a class="cities" href="#"><li class="city">Las Vegas</li></a><a class="cities" href="#"><li class="city">Reno</li></a><a class="cities" href="#"><li class="city">Carson City</li></a></ul></li>'+
'<li><a href="omniwire-new-hampshire.html" id="new-hampshire-news">New Hampshire</a><a href="#" class="dropdown-button dropdown-toggle"><img class="plus-button" src="new-icons/plus-button.png"></a><ul class="city-dropdown dropdown-menu" role="menu"><a class="cities" href="#"><li class="city">Manchester</li></a><a class="cities" href="#"><li class="city">Portsmouth</li></a><a class="cities" href="#"></a><a class="cities" href="#"><li class="city">Keene</li></a></ul></li>'+
'<li><a href="omniwire-new-jersey.html" id="new-jersey-news">New Jersey</a><a href="#" class="dropdown-button dropdown-toggle"><img class="plus-button" src="new-icons/plus-button.png"></a><ul class="city-dropdown dropdown-menu" role="menu"><a class="cities" href="#"><li class="city">Newark</li></a><a class="cities" href="#"><li class="city">Trenton</li></a><a class="cities" href="#"></a><a class="cities" href="#"><li class="city">Monmouth</li></a><a class="cities" href="#"><li class="city">Jersey Shore</li></a></ul></li>'+
'<li><a href="omniwire-new-mexico.html" id="new-mexico-news">New Mexico</a><a href="#" class="dropdown-button dropdown-toggle"><img class="plus-button" src="new-icons/plus-button.png"></a><ul class="city-dropdown dropdown-menu" role="menu"><a class="cities" href="#"><li class="city">Albuquerque</li></a><a class="cities" href="#"><li class="city">Santa Fe</li></a></ul></li>'+
'<li><a href="omniwire-new-york.html" id="new-york-news">New York</a><a href="#" class="dropdown-button dropdown-toggle"><img class="plus-button" src="new-icons/plus-button.png"></a><ul class="city-dropdown dropdown-menu" role="menu"><a class="cities" href="#"><li class="city">New York City</li></a><<a class="cities" href="#"><li class="city">Albany</li></a><a class="cities" href="#"><li class="city">Rochester</li></a><a class="cities" href="#"><li class="city">Long Island</li></a></ul></li>'+
'<li><a href="omniwire-north-carolina.html" id="north-carolina-news">North Carolina</a><a href="#" class="dropdown-button dropdown-toggle"><img class="plus-button" src="new-icons/plus-button.png"></a><ul class="city-dropdown dropdown-menu" role="menu"><a class="cities" href="#"><li class="city">Raleigh-Durham</li></a><a class="cities" href="#"><li class="city">Charlotte</li></a><a class="cities" href="#"><li class="city">Greensboro</li></a><a class="cities" href="#"><li class="city">Asheville</li></a><a class="cities" href="#"></a></ul></li>'+
'<li><a href="omniwire-north-dakota.html" id="north-dakota-news">North Dakota</a><a href="#" class="dropdown-button dropdown-toggle"><img class="plus-button" src="new-icons/plus-button.png"></a><ul class="city-dropdown dropdown-menu" role="menu"><a class="cities" href="#"><li class="city">Fargo</li></a><a class="cities" href="#"><li class="city">Bismarck</li></a><a class="cities" href="#"></a><a class="cities" href="#"><li class="city">Bakken</li></a></ul></li>'+
'<li><a href="omniwire-ohio.html" id="ohio-news">Ohio</a><a href="#" class="dropdown-button dropdown-toggle"><img class="plus-button" src="new-icons/plus-button.png"></a><ul class="city-dropdown dropdown-menu" role="menu"><a class="cities" href="#"><li class="city">Cleveland</li></a><a class="cities" href="#"><li class="city">Columbus</li></a><a class="cities" href="#"><li class="city">Cincinnati</li></a><a class="cities" href="#"><li class="city">Dayton</li></a></ul></li>'+
'<li><a href="omniwire-oklahoma.html" id="oklahoma-news">Oklahoma</a><a href="#" class="dropdown-button dropdown-toggle"><img class="plus-button" src="new-icons/plus-button.png"></a><ul class="city-dropdown dropdown-menu" role="menu"><a class="cities" href="#"><li class="city">Oklahoma City</li></a><a class="cities" href="#"><li class="city">Tulsa</li></a><a class="cities" href="#"><li class="city">Broken Arrow</li></a></ul></li>'+
'<li><a href="omniwire-oregon.html" id="oregon-news">Oregon</a><a href="#" class="dropdown-button dropdown-toggle"><img class="plus-button" src="new-icons/plus-button.png"></a><ul class="city-dropdown dropdown-menu" role="menu"><a class="cities" href="#"><li class="city">Portland</li></a><a class="cities" href="#"><li class="city">Salem</li></a><a class="cities" href="#"><li class="city">Eugene</li></a></ul></li>'+
'<li><a href="omniwire-pennsylvania.html" id="pennsylvania-news">Pennsylvania</a><a href="#" class="dropdown-button dropdown-toggle"><img class="plus-button" src="new-icons/plus-button.png"></a><ul class="city-dropdown dropdown-menu" role="menu"><a class="cities" href="#"><li class="city">Philadelphia</li></a><a class="cities" href="#"><li class="city">Pittsburgh</li></a><a class="cities" href="#"><li class="city">Harrisburg</li></a><a class="cities" href="#"><li class="city">Lancaster</li></a><a class="cities" href="#"><li class="city">Erie</li></a></ul></li>'+
'<li><a href="omniwire-rhode-island.html" id="rhode-island-news">Rhode Island</a><a href="#" class="dropdown-button dropdown-toggle"><img class="plus-button" src="new-icons/plus-button.png"></a><ul class="city-dropdown dropdown-menu" role="menu"><a class="cities" href="#"><li class="city">Providence</li></a></ul></li>'+
'<li><a href="omniwire-south-carolina.html" id="south-carolina-news">South Carolina</a><a href="#" class="dropdown-button dropdown-toggle"><img class="plus-button" src="new-icons/plus-button.png"></a><ul class="city-dropdown dropdown-menu" role="menu"><a class="cities" href="#"><li class="city">Charleston</li></a><a class="cities" href="#"><li class="city">Myrtle Beach</li></a><a class="cities" href="#"><li class="city">Columbia</li></a><a class="cities" href="#"><li class="city">Greenville</li></a></ul></li>'+
'<li><a href="omniwire-south-dakota.html" id="south-dakota-news">South Dakota</a><a href="#" class="dropdown-button dropdown-toggle"><img class="plus-button" src="new-icons/plus-button.png"></a><ul class="city-dropdown dropdown-menu" role="menu"><a class="cities" href="#"><li class="city">Sioux Falls</li></a><a class="cities" href="#"><li class="city">Pierre</li></a><a class="cities" href="#"><li class="city">Rapid City</li></a></ul></li>'+
'<li><a href="omniwire-tennessee.html" id="tennessee-news">Tennessee</a><a href="#" class="dropdown-button dropdown-toggle"><img class="plus-button" src="new-icons/plus-button.png"></a><ul class="city-dropdown dropdown-menu" role="menu"><a class="cities" href="#"><li class="city">Nashville</li></a><a class="cities" href="#"><li class="city">Memphis</li></a><a class="cities" href="#"><li class="city">Murfreesboro</li></a><a class="cities" href="#"><li class="city">Knoxville</li></a></ul></li>'+
'<li><a href="omniwire-texas.html" id="texas-news">Texas</a><a href="#" class="dropdown-button dropdown-toggle"><img class="plus-button" src="new-icons/plus-button.png"></a><ul class="city-dropdown dropdown-menu" role="menu"><a class="cities" href="#"><li class="city">Houston</li></a><a class="cities" href="#"><li class="city">Dallas/Fort Worth</li></a><a class="cities" href="#"><li class="city">San Antonio</li></a><a class="cities" href="#"><li class="city">Austin</li></a><a class="cities" href="#"><li class="city">El Paso</li></a><a class="cities" href="#"><li class="city">West Texas</li></a></ul></li>'+
'<li><a href="omniwire-utah.html" id="utah-news">Utah</a><a href="#" class="dropdown-button dropdown-toggle"><img class="plus-button" src="new-icons/plus-button.png"></a><ul class="city-dropdown dropdown-menu" role="menu"><a class="cities" href="#"><li class="city">Salt Lake City</li></a><a class="cities" href="#"><li class="city">St.George</li></a><a class="cities" href="#"><li class="city">Provo</li></a></ul></li>'+
'<li><a href="omniwire-vermont.html" id="vermont-news">Vermont</a><a href="#" class="dropdown-button dropdown-toggle"><img class="plus-button" src="new-icons/plus-button.png"></a><ul class="city-dropdown dropdown-menu" role="menu"><a class="cities" href="#"><li class="city">Burlington</li></a><a class="cities" href="#"><li class="city">Montpelier</li></a></ul></li>'+
'<li><a href="omniwire-virginia.html" id="virginia-news">Virginia</a><a href="#" class="dropdown-button dropdown-toggle"><img class="plus-button" src="new-icons/plus-button.png"></a><ul class="city-dropdown dropdown-menu" role="menu"><a class="cities" href="#"><li class="city">Richmond</li></a><a class="cities" href="#"><li class="city">Newport News</li></a><a class="cities" href="#"><li class="city">NOVA</li></a><a class="cities" href="#"><li class="city">Virginia Beach</li></a></ul></li>' +
'<li><a href="omniwire-washington.html" id="washington-news">Washington</a><a href="#" class="dropdown-button dropdown-toggle"><img class="plus-button" src="new-icons/plus-button.png"></a><ul class="city-dropdown dropdown-menu" role="menu"><a class="cities" href="#"><li class="city">Seattle</li></a><a class="cities" href="#"><li class="city">Tacoma</li></a><a class="cities" href="#"><li class="city">Spokane</li></a><a class="cities" href="#"><li class="city">Olympia</li></a></ul></li>'+
'<li><a href="omniwire-dc.html" id="DC-news">Washington DC</a><a href="#" class="dropdown-button dropdown-toggle"><img class="plus-button" src="new-icons/plus-button.png"></a><ul class="city-dropdown dropdown-menu" role="menu"><a class="cities" href="#"><li class="city">US Politics</li></a></ul></li>'+
'<li><a href="omniwire-west-virginia.html" id="west-virginia-news">West Virginia</a><a href="#" class="dropdown-button dropdown-toggle"><img class="plus-button" src="new-icons/plus-button.png"></a><ul class="city-dropdown dropdown-menu" role="menu"><a class="cities" href="#"><li class="city">Morgantown</li></a><a class="cities" href="#"><li class="city">Clarksburg</li></a><a class="cities" href="#"></a><a class="cities" href="#"><li class="city">Charleston</li></a></ul></li>'+
    
'<li><a href="omniwire-wisconsin.html" id="wisconsin-news">Wisconsin</a><a href="#" class="dropdown-button dropdown-toggle"><img class="plus-button" src="new-icons/plus-button.png"></a><ul class="city-dropdown dropdown-menu" role="menu"><a class="cities" href="#"><li class="city">Milwaukee</li></a><a class="cities" href="#"><li class="city">Green Bay</li></a><a class="cities" href="#"><li class="city">Madison</li></a><a class="cities" href="#"><li class="city">Eau Claire</li></a></ul></li>'+
    
'<li><a href="omniwire-wyoming.html" id="wyoming-news">Wyoming</a><a href="#" class="dropdown-button dropdown-toggle"><img class="plus-button" src="new-icons/plus-button.png"></a><ul class="city-dropdown dropdown-menu" role="menu"><a class="cities" href="#"><li class="city">Cheyenne</li></a><a class="cities" href="#"><li class="city">Laramie</li></a><a class="cities" href="#"><li class="city">Jackson Hole</li></a></ul></li>'+
'</ul>'+
'</li>'+
    
    
'<li>'+
'<a>Canada</a>'+
'<ul id="myUL2" class="submenu nonfictionsub">'+
     '<input type="text" id="myInput2" onkeyup="myFunction2()" placeholder=" Filter" title="Type in a name">' +
'<li><a href="canada-news.html" id="canada-news">Top News</a><a href="#" class="dropdown-button dropdown-toggle"><img class="plus-button" src="new-icons/plus-button.png"></a><ul class="city-dropdown dropdown-menu" role="menu"><a class="cities" href="#"><li class="city">New Brunswick Flooding</li></a><a class="cities" href="#"><li class="city">Ontario Election</li></a></ul></li>'+
'<li><a href="omniwire-alberta.html" id="alberta-news">Alberta</a><a href="#" class="dropdown-button dropdown-toggle"><img class="plus-button" src="new-icons/plus-button.png"></a><ul class="city-dropdown dropdown-menu" role="menu"><a class="cities" href="#"><li class="city">Calgary</li></a><a class="cities" href="#"><li class="city">Edmonton</li></a><a class="cities" href="#"><li class="city">Rocky Mountains</li></a><a class="cities" href="#"><li class="city">Oil Sands</li></a></ul></li>'+
'<li><a href="omniwire-british-columbia.html" id="british-columbia-news">British Columbia</a><a href="#" class="dropdown-button dropdown-toggle"><img class="plus-button" src="new-icons/plus-button.png"></a><ul class="city-dropdown dropdown-menu" role="menu"><a class="cities" href="#"><li class="city">Vancouver</li></a><a class="cities" href="#"><li class="city">Victoria</li></a><a class="cities" href="#"><li class="city">Kootenay Region</li></a><a class="cities" href="#"><li class="city">Northern BC</li></a></ul></li>'+
'<li><a href="omniwire-manitoba.html" id="manitoba-news">Manitoba</a><a href="#" class="dropdown-button dropdown-toggle"><img class="plus-button" src="new-icons/plus-button.png"></a><ul class="city-dropdown dropdown-menu" role="menu"><a class="cities" href="#"><li class="city">Winnipeg</li></a><a class="cities" href="#"><li class="city">Brandon</li></a><a class="cities" href="#"></a></ul></li>'+
'<li><a href="omniwire-new-brunswick.html" id="new-brunswick-news">New Brunswick</a><a href="#" class="dropdown-button dropdown-toggle"><img class="plus-button" src="new-icons/plus-button.png"></a><ul class="city-dropdown dropdown-menu" role="menu"><a class="cities" href="#"><li class="city">Fredericton</li></a><a class="cities" href="#"><li class="city">Saint John</li></a><a class="cities" href="#"></a></ul></li>'+
'<li><a href="omniwire-newfoundland.html" id="newfoundland-news">Newfoundland</a><a href="#" class="dropdown-button dropdown-toggle"><img class="plus-button" src="new-icons/plus-button.png"></a><ul class="city-dropdown dropdown-menu" role="menu"><a class="cities" href="#"><li class="city">St.Johns</li></a><a class="cities" href="#"><li class="city">Labrador</li></a><a class="cities" href="#"></a></ul></li>'+
'<li><a href="omniwire-nova-scotia.html" id="nova-scotia-news">Nova Scotia</a><a href="#" class="dropdown-button dropdown-toggle"><img class="plus-button" src="new-icons/plus-button.png"></a><ul class="city-dropdown dropdown-menu" role="menu"><a class="cities" href="#"><li class="city">Halifax</li></a><a class="cities" href="#"><li class="city">Cape Breton</li></a><a class="cities" href="#"></a></ul></li>'+
'<li><a href="omniwire-nwt.html" id="northwest-territories-news">Northwest Territories</a><a href="#" class="dropdown-button dropdown-toggle"><img class="plus-button" src="new-icons/plus-button.png"></a><ul class="city-dropdown dropdown-menu" role="menu"><a class="cities" href="#"><li class="city">Yellowknife</li></a><a class="cities" href="#"><li class="city">Hay River</li></a><a class="cities" href="#"></a></ul></li>'+
'<li><a href="omniwire-nunavut.html" id="nunavut-news">Nunavut</a><a href="#" class="dropdown-button dropdown-toggle"><img class="plus-button" src="new-icons/plus-button.png"></a><ul class="city-dropdown dropdown-menu" role="menu"><a class="cities" href="#"><li class="city">Iqaluit</li></a><a class="cities" href="#"></a></ul></li>'+
'<li><a href="omniwire-ontario.html" id="ontario-news">Ontario</a><a href="#" class="dropdown-button dropdown-toggle"><img class="plus-button" src="new-icons/plus-button.png"></a><ul class="city-dropdown dropdown-menu" role="menu"><a class="cities" href="#"><li class="city">Toronto</li></a><a class="cities" href="#"><li class="city">Ottawa</li></a><a class="cities" href="#"></a><a class="cities" href="#"><li class="city">Hamilton</li></a><a class="cities" href="#"><li class="city">Windsor</li></a><a class="cities" href="#"><li class="city">London</li></a><a class="cities" href="#"><li class="city">Northern Ontario</li></a></ul></li>' +
'<li><a href="omniwire-pei.html" id="pei-news">Prince Edward Island</a><a href="#" class="dropdown-button dropdown-toggle"><img class="plus-button" src="new-icons/plus-button.png"></a><ul class="city-dropdown dropdown-menu" role="menu"><a class="cities" href="#"><li class="city">Charlottetown</li></a></ul></li>'+
'<li><a href="omniwire-quebec.html" id="quebec-news">Quebec</a><a href="#" class="dropdown-button dropdown-toggle"><img class="plus-button" src="new-icons/plus-button.png"></a><ul class="city-dropdown dropdown-menu" role="menu"><a class="cities" href="#"><li class="city">Montreal</li></a><a class="cities" href="#"><li class="city">Quebec City</li></a><a class="cities" href="#"></a><a class="cities" href="#"><li class="city">Sherbrooke</li></a></ul></li>' +
    
'<li><a href="omniwire-saskatchewan.html" id="saskatchewan-news">Saskatchewan</a><a href="#" class="dropdown-button dropdown-toggle"><img class="plus-button" src="new-icons/plus-button.png"></a><ul class="city-dropdown dropdown-menu" role="menu"><a class="cities" href="#"><li class="city">Regina</li></a><a class="cities" href="#"><li class="city">Saskatoon</li></a><a class="cities" href="#"></a></ul></li>'+
    
'<li><a href="omniwire-yukon.html" id="yukon-news">Yukon</a><a href="#" class="dropdown-button dropdown-toggle"><img class="plus-button" src="new-icons/plus-button.png"></a><ul class="city-dropdown dropdown-menu" role="menu"><a class="cities" href="#"><li class="city">Whitehorse</li></a></ul></li>' +


'</ul>'+
'</li>'
    

;


function myFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";

        }
    }
}


function myFunction2() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput2");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL2");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";

        }
    }
}

function myFunction3() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput3");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL3");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";

        }
    }
}

function myFunction4() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput4");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL4");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";

        }
    }
}

function myFunction5() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput5");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL5");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";

        }
    }
}
