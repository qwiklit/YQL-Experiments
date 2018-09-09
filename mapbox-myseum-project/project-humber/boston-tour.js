 function modalFunction() {
    document.getElementById("myModal").style.zIndex = "3";
}
 
        
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
    style: 'mapbox://styles/philnicolasjames/cjjimufz61beo2ro2awjvmkp0',
    // initial position in [long, lat] format
    center: [ -71.10451341,42.36976896 ],
    // initial zoom
    zoom: 15,
    pitch: 40, // pitch in degrees
    bearing: -20, // bearing in degrees
    scrollZoom: true
    
  });
 
 

  var items = {
    "type":"FeatureCollection","features":
     [
 
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -71.11898661,42.37358153 ]
    },
    "properties": {
    "FIELD1":"Harvard Square"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -71.10451341,42.36976896 ]
    },
    "properties": {
    "FIELD1":"Bonnie and Andrew's House"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -71.06223106,42.36626531 ]
    },
    "properties": {
    "FIELD1":"Train Station"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -71.06916726,42.35791562 ]
    },
    "properties": {
    "FIELD1":"Henry James House"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -71.09750748,42.36788241 ]
    },
    "properties": {
    "FIELD1":"Lamplighter Brewing Company"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -71.09568357,42.35832193 ]
    },
    "properties": {
    "FIELD1":"MIT"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -71.09724998,42.34655564 ]
    },
    "properties": {
    "FIELD1":"Fenway Park"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -71.08994097,42.3614891 ]
    },
    "properties": {
    "FIELD1":"Cool Building at MIT"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -71.087194,42.360589 ]
    },
    "properties": {
    "FIELD1":"MIT Media Lab"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -71.07096434,42.35385037 ]
    },
    "properties": {
    "FIELD1":"Boston Garden"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -71.0937202,42.33872873 ]
    },
    "properties": {
    "FIELD1":"Museum of Fine Arts"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -71.06248856,42.35790769 ]
    },
    "properties": {
    "FIELD1":"Boston Athaeneum"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -71.06718779,42.35957455 ]
    },
    "properties": {
    "FIELD1":"Scarlet O'Hara House"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -71.09560847,42.36069633 ]
    },
    "properties": {
    "FIELD1":"Mary Eddy Baker Library"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -71.06209695,42.35453619 ]
    },
    "properties": {
    "FIELD1":"Brattle Book Shop"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -71.05384111,42.36784674 ]
    },
    "properties": {
    "FIELD1":"Great Molasses Flood Plaque"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ 71.116694,42.374492 ]
    },
    "properties": {
    "FIELD1":"Harvard Yard"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -71.115774,42.378598 ]
    },
    "properties": {
    "FIELD1":"Harvard Law & Archaeology"
    }
  }
]
};
            
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
  // Now you have interactions with DOM s instead
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
                   '<div class="full-card"><span id="close" onclick="this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode); return false;">x</span><div id="card"><h3>' + currentFeature.properties.FIELD1 + '</h3>' +
                   '<h4>' + currentFeature.properties.FIELD2 + '</h4>' + 
  
'<button href="#" onclick="modalFunction()" id="to-expand" class="myButton" type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">' + '<p>Read More</p>' + '</button>' + '</a></div></div>' +
                  
    '<div class="modal fade" id="myModal" role="dialog">' +
    '<div class="vertical-alignment-helper">' +
    '<div class="modal-dialog modal-lg vertical-align-center">' +
      '<div class="modal-content">' +
       
        '<div class="modal-header">' +
      
        '<h1 style="font-size: 18px; color: white; width: 100%"><button style="padding: 10px 20px 10px 20px; margin-top: -10px; float: right; color: black; font-family: helvetica;" type="button" class="btn btn-info" data-dismiss="modal">Close</button>' + currentFeature.properties.FIELD3 + '</h1>' +
           
      
        '</div>' +
        '<div class="modal-body">' +
        
     
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
      link.innerHTML = prop.FIELD1;
        
      var description = listing.appendChild(document.createElement('div'));
      description.innerHTML = prop.FIELD2;

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


