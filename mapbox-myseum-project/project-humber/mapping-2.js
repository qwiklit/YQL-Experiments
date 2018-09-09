 
        
  // This will let you use the .remove() function later on
  if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function() {
      if (this.parentNode) {
          this.parentNode.removeChild(this);
      }
    };
  }

  mapboxgl.accessToken = 'pk.eyJ1IjoibXlzZXVtLW9mLXRvcm9udG8iLCJhIjoiY2plNXdqN3p3NzQzdzJxcXB5cjd3eWk2aCJ9.SDhXNXzsOLuvcUVLjNI_7w';

  // This adds the map
  var map = new mapboxgl.Map({
    // container id specified in the HTML
    container: 'map',
    // style URL
    style: 'mapbox://styles/philnicolasjames/cjkz19p6506dt2sse7n4bwlhe',
    // initial position in [long, lat] format
    center: [ -122.2551727294922,
          37.81792077237497],
    // initial zoom
    zoom: 11,
    pitch: 60, // pitch in degrees
    bearing: -205, // bearing in degrees
    scrollZoom: false
    
  });
 
 

  var items = {
    "type":"FeatureCollection","features":
      [
        {"type":"Feature","properties":{"Index_":1,"event_unique_id":"2304687","year_":2007,"Division":"D52","homicide_type":"Shooting","occurrence_date":"2007-09-19T04:00:00.000Z","Hood_ID":75,"Neighbourhood":"Church-Yonge Corridor (75)","Lat":43.6590996,"Long":-79.3821182,"FID":1},"geometry":{"type":"Point","coordinates":[-79.3821182,43.6590996]}},
{"type":"Feature","properties":{"Index_":2,"event_unique_id":"2430194","year_":2007,"Division":"D33","homicide_type":"Other","occurrence_date":"2007-09-25T04:00:00.000Z","Hood_ID":45,"Neighbourhood":"Parkwoods-Donalda (45)","Lat":43.7646408,"Long":-79.3446503,"FID":2},"geometry":{"type":"Point","coordinates":[-79.34465030000001,43.764640799999995]}},{"type":"Feature","properties":{"Index_":3,"event_unique_id":"2373602","year_":2007,"Division":"D31","homicide_type":"Shooting","occurrence_date":"2007-09-28T04:00:00.000Z","Hood_ID":25,"Neighbourhood":"Glenfield-Jane Heights (25)","Lat":43.7548561,"Long":-79.5170746,"FID":3},"geometry":{"type":"Point","coordinates":[-79.5170746,43.7548561]}},{"type":"Feature","properties":{"Index_":4,"event_unique_id":"2539175","year_":2007,"Division":"D31","homicide_type":"Stabbing","occurrence_date":"2007-10-02T04:00:00.000Z","Hood_ID":26,"Neighbourhood":"Downsview-Roding-CFB (26)","Lat":43.7373734,"Long":-79.4907761,"FID":4},"geometry":{"type":"Point","coordinates":[-79.4907761,43.7373734]}},{"type":"Feature","properties":{"Index_":5,"event_unique_id":"2432106","year_":2007,"Division":"D12","homicide_type":"Shooting","occurrence_date":"2007-10-06T04:00:00.000Z","Hood_ID":111,"Neighbourhood":"Rockcliffe-Smythe (111)","Lat":43.6716728,"Long":-79.4937515,"FID":5},"geometry":{"type":"Point","coordinates":[-79.4937515,43.671672799999996]}},{"type":"Feature","properties":{"Index_":6,"event_unique_id":"2424127","year_":2007,"Division":"D13","homicide_type":"Shooting","occurrence_date":"2007-10-08T04:00:00.000Z","Hood_ID":94,"Neighbourhood":"Wychwood (94)","Lat":43.6805267,"Long":-79.4312897,"FID":6},"geometry":{"type":"Point","coordinates":[-79.4312897,43.6805267]}},{"type":"Feature","properties":{"Index_":7,"event_unique_id":"1902459","year_":2007,"Division":"D31","homicide_type":"Shooting","occurrence_date":"2007-10-09T04:00:00.000Z","Hood_ID":25,"Neighbourhood":"Glenfield-Jane Heights (25)","Lat":43.7501373,"Long":-79.5113907,"FID":7},"geometry":{"type":"Point","coordinates":[-79.5113907,43.75013729999999]}},{"type":"Feature","properties":{"Index_":8,"event_unique_id":"2421605","year_":2007,"Division":"D41","homicide_type":"Shooting","occurrence_date":"2007-10-14T04:00:00.000Z","Hood_ID":119,"Neighbourhood":"Wexford/Maryvale (119)","Lat":43.7570267,"Long":-79.3101501,"FID":8},"geometry":{"type":"Point","coordinates":[-79.3101501,43.75702669999999]}},{"type":"Feature","properties":{"Index_":9,"event_unique_id":"2538165","year_":2007,"Division":"D33","homicide_type":"Other","occurrence_date":"2007-10-18T04:00:00.000Z","Hood_ID":48,"Neighbourhood":"Hillcrest Village (48)","Lat":43.8090858,"Long":-79.3618851,"FID":9},"geometry":{"type":"Point","coordinates":[-79.3618851,43.80908579999999]}}
        ]};
      

      
      
  // This adds the data to the map
  map.on('load', function (e) {
  
    
     
      

      
      map.addControl(new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: true
}));
    // This is where your '.addLayer()' used to be, instead add only the source without styling a layer
    map.addSource("places", {
      "type": "geojson",
      "data": items
    });
    // Initialize the list
    buildLocationList(items);

  });

      
      
  // This is where your interactions with the symbol layer used to be
  // Now you have interactions with DOM markers instead
  items.features.forEach(function(marker, i) {
    // Create an img element for the marker
    var el = document.createElement('div');
    el.id = "marker-" + i;
    el.className = 'marker';
    // Add markers to the map at all points
    new mapboxgl.Marker(el, {offset: [0, -23]})
        .setLngLat(marker.geometry.coordinates)
        .addTo(map);

    el.addEventListener('click', function(e){
        // 1. Fly to the point
        flyToStore(marker);

        // 2. Close all other popups and display popup for clicked store
        createPopUp(marker);

        // 3. Highlight listing in sidebar (and remove highlight for all other listings)
        var activeItem = document.getElementsByClassName('active');

        e.stopPropagation();
        if (activeItem[0]) {
            activeItem[0].classList.remove('active');
        }

        var listing = document.getElementById('listing-' + i);
        listing.classList.add('active');

    });      
  });
      
      


  function flyToStore(currentFeature) {
    map.flyTo({
        center: currentFeature.geometry.coordinates,
        zoom: 15
      });
  }

  function createPopUp(currentFeature) {
    var popUps = document.getElementsByClassName('mapboxgl-popup');
    if (popUps[0]) popUps[0].remove();


    var popup = new mapboxgl.Popup({closeOnClick: false})
          .setLngLat(currentFeature.geometry.coordinates)
          .setHTML(
                   '<span id="close" onclick="this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode); return false;">x</span><div id="card"><h3>' + currentFeature.properties.event_unique_id + '</h3>' +
                   '<h4>' + currentFeature.properties.Neighbourhood + '</h4>' + 
  
'<button id="to-expand" class="myButton" type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">' + '<p>Read More</p>' + '</button>' + '</a></div>' +
                  
    '<div class="modal fade" id="myModal" role="dialog">' +
    '<div class="vertical-alignment-helper">' +
    '<div class="modal-dialog modal-lg vertical-align-center">' +
      '<div class="modal-content">' +
       
        '<div class="modal-header">' +
      
        '<h1 style="font-size: 18px; color: white; text-align: left; width: 100%"><button style="padding: 10px 20px 10px 20px; margin-top: 5px; float: right; color: black; font-family: helvetica;" type="button" class="btn btn-info" data-dismiss="modal">Close</button>' + currentFeature.properties.event_unique_id + '</h1>' +
           
      
        '</div>' +
        '<div class="modal-body">' +
        
        '<p class="year-tags">' + currentFeature.properties.year_ + '  |  ' + currentFeature.properties.Neighbourhood +'</p>' +
     
        '</div>' +
       
          '</div>' +     
        '</div>' +
      '</div>' +
    '</div>' +
  '</div>'
                  )
          .addTo(map);
  }
      
  function buildLocationList(data) {
    for (i = 0; i < data.features.length; i++) {
      var currentFeature = data.features[i];
      var prop = currentFeature.properties;

      var listings = document.getElementById('listings');
      var listing = listings.appendChild(document.createElement('div'));
      listing.className = 'item';
      listing.id = "listing-" + i;

      var link = listing.appendChild(document.createElement('a'));
      link.href = '#';
      link.className = 'title';
      link.dataPosition = i;
      link.innerHTML = prop.event_unique_id;
        
      var description = listing.appendChild(document.createElement('div'));
      description.innerHTML = prop.homicide_type;

      var details = listing.appendChild(document.createElement('div'));
      details.innerHTML = prop.Neighbourhood;
      if (prop.image) {
        details.innerHTML += ' &middot; ' + prop.year;
          
        
      }

        link.addEventListener('click', function(e){
        // Update the currentFeature to the store associated with the clicked link
        var clickedListing = data.features[this.dataPosition];

        // 1. Fly to the point
        flyToStore(clickedListing);

        // 2. Close all other popups and display popup for clicked store
        createPopUp(clickedListing);

        // 3. Highlight listing in sidebar (and remove highlight for all other listings)
        var activeItem = document.getElementsByClassName('active');

        if (activeItem[0]) {
           activeItem[0].classList.remove('active');
        }
        this.parentNode.classList.add('active');

      });
    }
  }
$(document).ready(function(){
    $("p").click(function(){
        $(this).hide();
    });
    
      $("a.x-button").click(function(){
        $("h3").css("opacity", "0.6");
    });
  /*  $("#show").click(function(){
        $("p").show();
    });*/
});
      
map.addControl(new mapboxgl.NavigationControl());
      