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
    center: [ -79.38334465026855,
          43.64154136955292],
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
       "coordinates":  [ -79.38221,43.6467 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/107_Wellington_Street_West_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"107 Wellington Street West 1889",
    "FIELD4":"http://torontoplaques.com/Pages/107_Wellington_Street_West.html",
    "FIELD5":"43.64670 -79.38221"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.390663,43.680089 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/1095_1099_Yonge_Street_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"1095-1099 Yonge Street 1892",
    "FIELD4":"http://torontoplaques.com/Pages/1095_1099_Yonge_Street.html",
    "FIELD5":"43.680089 -79.390663"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.399282,43.666461 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/119_St_George_Street_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"119 St. George Street",
    "FIELD4":"http://torontoplaques.com/Pages/119_St_George_Street.html",
    "FIELD5":"43.666461 -79.399282"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.385989,43.665766 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/11_St_Joseph_Street_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"11 St. Joseph Street",
    "FIELD4":"http://torontoplaques.com/Pages/11_St_Joseph_Street.html",
    "FIELD5":"43.665766 -79.385989"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.33828,43.662815 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/126_Pape_Avenue_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"126 Pape Avenue 1907",
    "FIELD4":"http://torontoplaques.com/Pages/126_Pape_Avenue.html",
    "FIELD5":"43.662815 -79.338280"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.369242,43.650177 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/132_Front_Street_East_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"132 Front Street East",
    "FIELD4":"http://torontoplaques.com/Pages/132_Front_Street_East.html",
    "FIELD5":"43.650177 -79.369242"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.369376,43.649887 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/139-145_Front_Street_East_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"139-145 Front Street East",
    "FIELD4":"http://torontoplaques.com/Pages/139-145_Front_Street_East.html",
    "FIELD5":"43.649887 -79.369376"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.36884,43.650068 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/165_Front_Street_East_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"165 Front Street East 1889",
    "FIELD4":"http://torontoplaques.com/Pages/165_Front_Street_East.html",
    "FIELD5":"43.650068 -79.368840"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.370524,43.684973 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/184_Roxborough_Drive_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"184 Roxborough Drive",
    "FIELD4":"http://torontoplaques.com/Pages/184_Roxborough_Drive.html",
    "FIELD5":"43.684973 -79.370524"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.382679,43.660662 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/1918_Anti_Greek_Riots_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"1918 Anti-Greek Riots",
    "FIELD4":"http://torontoplaques.com/Pages/1918_Anti_Greek_Riots.html",
    "FIELD5":"43.660662 -79.382679"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.38828,43.643148 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/25_Years_of_Blue_Jays_Baseball_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"25 Years of Blue Jays Baseball",
    "FIELD4":"http://torontoplaques.com/Pages/25_Years_of_Blue_Jays_Baseball.html",
    "FIELD5":"43.643148 -79.388280"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.364542,43.652175 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/300_King_Street_East_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"300 King Street East 1845",
    "FIELD4":"http://torontoplaques.com/Pages/300_King_Street_East.html",
    "FIELD5":"43.652175 -79.364542"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.421376,43.76583 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/32_Pounder_Cannon_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"32 Pounder Cannon",
    "FIELD4":"http://torontoplaques.com/Pages/32_Pounder_Cannon.html",
    "FIELD5":"43.765830 -79.421376"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.36833,43.652109 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/363-365_Adelaide_St_East_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"363-365 Adelaide St. East 1842",
    "FIELD4":"http://torontoplaques.com/Pages/363-365_Adelaide_St_East.html",
    "FIELD5":"43.652109 -79.368330"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.413188,43.666237 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/674_Markham_Street_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"674 Markham Street 1912",
    "FIELD4":"http://torontoplaques.com/Pages/674_Markham_Street.html",
    "FIELD5":"43.666237 -79.413188"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.47396,43.658801 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Abraham_B_Pipher_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Abraham B. Pipher House 1889",
    "FIELD4":"http://torontoplaques.com/Pages/Abraham_B_Pipher.html",
    "FIELD5":"43.658801 -79.473960"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.357487,43.661451 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Adam_Beck_Cigar_Box_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Adam Beck Cigar Box Manufacturing Company Building 1913",
    "FIELD4":"http://torontoplaques.com/Pages/Adam_Beck_Cigar_Box.html",
    "FIELD5":"43.661451 -79.357487"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.396026,43.631958 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Administration_Building_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Administration Building",
    "FIELD4":"http://torontoplaques.com/Pages/Administration_Building.html",
    "FIELD5":"43.631958 -79.396026"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.393646,43.650165 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/African_Methodist_Episcopal_Church_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"African Methodist Episcopal Church",
    "FIELD4":"http://torontoplaques.com/Pages/African_Methodist_Episcopal_Church.html",
    "FIELD5":"43.650165 -79.393646"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.281206,43.788319 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Agincourt_School_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Agincourt School",
    "FIELD4":"http://torontoplaques.com/Pages/Agincourt_School.html",
    "FIELD5":"43.788319 -79.281206"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.373515,43.70459 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Agnes_Macphail_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Agnes Macphail (1890-1954)",
    "FIELD4":"http://torontoplaques.com/Pages/Agnes_Macphail.html",
    "FIELD5":"43.704590 -79.373515"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.374869,43.64972 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Albany_Club_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Albany Club of Toronto",
    "FIELD4":"http://torontoplaques.com/Pages/Albany_Club.html",
    "FIELD5":"43.649720 -79.374869"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.376492,43.651399 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Albert_Jackson_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Albert Jackson",
    "FIELD4":"http://torontoplaques.com/Pages/Albert_Jackson.html",
    "FIELD5":"43.651399 -79.376492"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.327211,43.663153 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Alexander_Muir_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Alexander Muir 1830-1906",
    "FIELD4":"http://torontoplaques.com/Pages/Alexander_Muir.html",
    "FIELD5":"43.663153 -79.327211"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.42197,43.66508 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Alexander_Robert_Duff_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Alexander Robert Duff",
    "FIELD4":"http://torontoplaques.com/Pages/Alexander_Robert_Duff.html",
    "FIELD5":"43.66508 -79.42197"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.38019,43.663681 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Alexander_Wood_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Alexander Wood 1772-1844",
    "FIELD4":"http://torontoplaques.com/Pages/Alexander_Wood.html",
    "FIELD5":"43.663681 -79.380190"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.306462,43.812944 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Alexandra_Site_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Alexandra Site",
    "FIELD4":"http://torontoplaques.com/Pages/Alexandra_Site.html",
    "FIELD5":"43.812944 -79.306462"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.37973,43.66205 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Ali_vs_Chuvalo_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Ali vs Chuvalo",
    "FIELD4":"http://torontoplaques.com/Pages/Ali_vs_Chuvalo.html",
    "FIELD5":"43.66205 -79.37973"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.402909,43.653046 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Alice_and_Dan_Heap_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Alice and Dan Heap",
    "FIELD4":"http://torontoplaques.com/Pages/Alice_and_Dan_Heap.html",
    "FIELD5":"43.653046 -79.402909"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.37973,43.66205 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/All_Star_Game_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"All Star Game",
    "FIELD4":"http://torontoplaques.com/Pages/All_Star_Game.html",
    "FIELD5":"43.66205 -79.37973"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.374547,43.618516 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Allan_A_Lamport_Regatta_Course_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Allan A. Lamport Regatta Course",
    "FIELD4":"http://torontoplaques.com/Pages/Allan_A_Lamport_Regatta_Course.html",
    "FIELD5":"43.618516 -79.374547"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.371275,43.663704 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Allan_Maclean_Howard_House_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Allan Maclean Howard House",
    "FIELD4":"http://torontoplaques.com/Pages/Allan_Maclean_Howard_House.html",
    "FIELD5":"43.663704 -79.371275"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.35737,43.67633 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Allens_Danforth_Theatre_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Allen's Danforth Theatre 1919",
    "FIELD4":"http://torontoplaques.com/Pages/Allens_Danforth_Theatre.html",
    "FIELD5":"43.676330 -79.35737"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.331695,43.681491 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Allenby_Theatre_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Allenby Theatre 1936",
    "FIELD4":"http://torontoplaques.com/Pages/Allenby_Theatre.html",
    "FIELD5":"43.681491 -79.331695"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.393129,43.66746 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Annesley_Hall_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Annesley Hall",
    "FIELD4":"http://torontoplaques.com/Pages/Annesley_Hall.html",
    "FIELD5":"43.667460 -79.393129"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.393129,43.66746 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Annesley_Hall_Victoria_University_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Annesley Hall Victoria University",
    "FIELD4":"http://torontoplaques.com/Pages/Annesley_Hall_Victoria_University.html",
    "FIELD5":"43.667460 -79.393129"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.209106,43.746877 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Annis_Home_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Annis Home",
    "FIELD4":"http://torontoplaques.com/Pages/Annis_Home.html",
    "FIELD5":"43.746877 -79.209106"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.500375,43.774983 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Archives_of_Ontario_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Archives of Ontario",
    "FIELD4":"http://torontoplaques.com/Pages/Archives_of_Ontario.html",
    "FIELD5":"43.774983 -79.500375"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.375641,43.656253 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Arena_Gardens_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Arena Gardens",
    "FIELD4":"http://torontoplaques.com/Pages/Arena_Gardens.html",
    "FIELD5":"43.656253 -79.375641"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.449175,43.643251 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Argentina_Public_School_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Argentina Public School",
    "FIELD4":"http://torontoplaques.com/Pages/Argentina_Public_School.html",
    "FIELD5":"43.643251 -79.449175"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.258107,43.829078 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Armadale_Free_Methodist_Church_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Armadale Free Methodist Church 1880",
    "FIELD4":"http://torontoplaques.com/Pages/Armadale_Free_Methodist_Church.html",
    "FIELD5":"43.829078 -79.258107"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.3811,43.650737 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Art_Deco_Bronze_Doors_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Art Deco Bronze Doors",
    "FIELD4":"http://torontoplaques.com/Pages/Art_Deco_Bronze_Doors.html",
    "FIELD5":"43.650737 -79.381100"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.322673,43.665116 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Ashbridge_Estate_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Ashbridge Estate",
    "FIELD4":"http://torontoplaques.com/Pages/Ashbridge_Estate.html",
    "FIELD5":"43.665116 -79.322673"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.376548,43.652336 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Association_of_Provincial_Land_Surveyors_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Association of Ontario Land Surveyors",
    "FIELD4":"http://torontoplaques.com/Pages/Association_of_Provincial_Land_Surveyors.html",
    "FIELD5":"43.652336 -79.376548"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.376156,43.654424 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Athenaeum_Club_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Athenaeum Club 1891",
    "FIELD4":"http://torontoplaques.com/Pages/Athenaeum_Club.html",
    "FIELD5":"43.654424 -79.376156"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.438373,43.657471 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Awde_St_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Awde Street",
    "FIELD4":"http://torontoplaques.com/Pages/Awde_St.html",
    "FIELD5":"43.657471 -79.438373"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.45016,43.65319 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/B_F_Harvey_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"B.F. Harvey Co. Bedding Factory 1911",
    "FIELD4":"http://torontoplaques.com/Pages/B_F_Harvey.html",
    "FIELD5":"43.65319 -79.45016"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.390522,43.627129 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Babe_Ruth_at_Hanlans_Point_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Babe Ruth at Hanlan's Point",
    "FIELD4":"http://torontoplaques.com/Pages/Babe_Ruth_at_Hanlans_Point.html",
    "FIELD5":"43.627129 -79.390522"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.493937,43.657262 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Baby_Point_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Baby Point",
    "FIELD4":"http://torontoplaques.com/Pages/Baby_Point.html",
    "FIELD5":"43.657262 -79.493937"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.48834,43.65842 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Baby_Point_Gates_Parkette_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Baby Point Gates Parkette 1911-2011",
    "FIELD4":"http://torontoplaques.com/Pages/Baby_Point_Gates_Parkette.html",
    "FIELD5":"43.65842 -79.48834"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.196491,43.825262 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Bailey_Bridge_Construction_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Bailey Bridge Construction",
    "FIELD4":"http://torontoplaques.com/Pages/Bailey_Bridge_Construction.html",
    "FIELD5":"43.825262 -79.196491"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.408319,43.677709 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Baldwin_Family_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Baldwin Family",
    "FIELD4":"http://torontoplaques.com/Pages/Baldwin_Family.html",
    "FIELD5":"43.677709 -79.408319"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.408211,43.677552 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Baldwin_Steps_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Baldwin Steps",
    "FIELD4":"http://torontoplaques.com/Pages/Baldwin_Steps.html",
    "FIELD5":"43.677552 -79.408211"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.395431,43.64697 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Balfour_Building_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Balfour Building 1930",
    "FIELD4":"http://torontoplaques.com/Pages/Balfour_Building.html",
    "FIELD5":"43.646970 -79.395431"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.393967,43.685783 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Balmoral_Fire_Hall_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Balmoral Fire Hall",
    "FIELD4":"http://torontoplaques.com/Pages/Balmoral_Fire_Hall.html",
    "FIELD5":"43.685783 -79.393967"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.379123,43.652557 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Bank_of_Montreal_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Bank of Montreal",
    "FIELD4":"http://torontoplaques.com/Pages/Bank_of_Montreal.html",
    "FIELD5":"43.652557 -79.379123"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.370642,43.651758 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Bank_of_Upper_Canada_Building_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Bank of Upper Canada Building",
    "FIELD4":"http://torontoplaques.com/Pages/Bank_of_Upper_Canada_Building.html",
    "FIELD5":"43.651758 -79.370642"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.384375,43.659769 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Barbara_Ann_Scott_Ice_Rink_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Barbara Ann Scott Ice Rink",
    "FIELD4":"http://torontoplaques.com/Pages/Barbara_Ann_Scott_Ice_Rink.html",
    "FIELD5":"43.659769 -79.384375"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.39685,43.67082 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Barbara_Gordon_House_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Barbara Gordon House 1878",
    "FIELD4":"http://torontoplaques.com/Pages/Barbara_Gordon_House.html",
    "FIELD5":"43.67082 -79.39685"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.420917,43.640126 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Barrymore_Building_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Barrymore Building - 1912",
    "FIELD4":"http://torontoplaques.com/Pages/Barrymore_Building.html",
    "FIELD5":"43.640126 -79.420917"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.405092,43.638342 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Battle_of_York_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Battle of York 1813",
    "FIELD4":"http://torontoplaques.com/Pages/Battle_of_York.html",
    "FIELD5":"43.638342 -79.405092"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.37946,43.652239 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Bay_Queen_Street_Store_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Bay Queen Street Store",
    "FIELD4":"http://torontoplaques.com/Pages/Bay_Queen_Street_Store.html",
    "FIELD5":"43.652239 -79.37946"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.301537,43.669315 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Beach_Hebrew_Institute_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Beach Hebrew Institute",
    "FIELD4":"http://torontoplaques.com/Pages/Beach_Hebrew_Institute.html",
    "FIELD5":"43.669315 -79.301537"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.298329,43.670277 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Beaches_Branch_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Beaches Branch, Toronto Public Library 1916",
    "FIELD4":"http://torontoplaques.com/Pages/Beaches_Branch.html",
    "FIELD5":"43.670277 -79.298329"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.37973,43.66205 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Beatles_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Beatles",
    "FIELD4":"http://torontoplaques.com/Pages/Beatles.html",
    "FIELD5":"43.66205 -79.37973"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [-79.423296,43.643193 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Beatrice_Lillie_Building_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Beatrice Lillie Building",
    "FIELD4":"http://torontoplaques.com/Pages/Beatrice_Lillie_Building.html",
    "FIELD5":"43.643193, -79.423296"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.474819,43.635906 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Beginnings_of_French_Toronto_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Beginnings of French Toronto",
    "FIELD4":"http://torontoplaques.com/Pages/Beginnings_of_French_Toronto.html",
    "FIELD5":"43.635906 -79.474819"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.505133,43.603663 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Bell_Telephone_Company_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Bell Telephone Company Building 1926",
    "FIELD4":"http://torontoplaques.com/Pages/Bell_Telephone_Company.html",
    "FIELD5":"43.603663 -79.505133"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.39078,43.675034 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Belmont_House_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Belmont House",
    "FIELD4":"http://torontoplaques.com/Pages/Belmont_House.html",
    "FIELD5":"43.675034 -79.390780"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.38222,43.6467 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Ben_Dunkelman_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Ben Dunkelman 1913-1997",
    "FIELD4":"http://torontoplaques.com/Pages/Ben_Dunkelman.html",
    "FIELD5":"43.64670 -79.38222"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.395312,43.646665 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Benjamin_Brown_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Benjamin Brown (1890-1974)",
    "FIELD4":"http://torontoplaques.com/Pages/Benjamin_Brown.html",
    "FIELD5":"43.646665 -79.395312"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.364758,43.652787 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Berkeley_Street_Firehall_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Berkeley Street Firehall No.4 1905",
    "FIELD4":"http://torontoplaques.com/Pages/Berkeley_Street_Firehall.html",
    "FIELD5":"43.652787 -79.364758"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.382486,43.650811 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Bernard_Keble_Sandwell_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Bernard Keble Sandwell (1876-1954)",
    "FIELD4":"http://torontoplaques.com/Pages/Bernard_Keble_Sandwell.html",
    "FIELD5":"43.650811 -79.382486"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.35018,43.76183 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Betty_Sutherland_Trail_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Betty Sutherland Trail",
    "FIELD4":"http://torontoplaques.com/Pages/Betty_Sutherland_Trail.html",
    "FIELD5":"43.76183 -79.35018"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.37973,43.66205 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Bill_Barilko_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Bill Barilko",
    "FIELD4":"http://torontoplaques.com/Pages/Bill_Barilko.html",
    "FIELD5":"43.66205 -79.37973"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.37973,43.66205 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Billy_Graham_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Billy Graham",
    "FIELD4":"http://torontoplaques.com/Pages/Billy_Graham.html",
    "FIELD5":"43.66205 -79.37973"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.378281,43.650563 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Birkbeck_Building_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Birkbeck Building",
    "FIELD4":"http://torontoplaques.com/Pages/Birkbeck_Building.html",
    "FIELD5":"43.650563 -79.378281"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.41626,43.7812 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Birthplace_of_Lester_Pearson_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Birthplace of Lester Pearson",
    "FIELD4":"http://torontoplaques.com/Pages/Birthplace_of_Lester_Pearson.html",
    "FIELD5":"43.78120 -79.41626"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.369354,43.650136 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Birthplace_of_Robert_Baldwin_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Birthplace of Robert Baldwin",
    "FIELD4":"http://torontoplaques.com/Pages/Birthplace_of_Robert_Baldwin.html",
    "FIELD5":"43.650136 -79.369354"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.376349,43.652402 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Birthplace_of_Standard_Time_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Birthplace of Standard Time",
    "FIELD4":"http://torontoplaques.com/Pages/Birthplace_of_Standard_Time.html",
    "FIELD5":"43.652402 -79.376349"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.386515,43.648711 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Bishops_Block_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Bishop's Block",
    "FIELD4":"http://torontoplaques.com/Pages/Bishops_Block.html",
    "FIELD5":"43.648711 -79.386515"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.383602,43.64519 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Bishops_Palace_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Bishop's Palace 1818",
    "FIELD4":"http://torontoplaques.com/Pages/Bishops_Palace.html",
    "FIELD5":"43.645190 -79.383602"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.516583,43.658889 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Bit_of_England_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"A Bit of England Far From England",
    "FIELD4":"http://torontoplaques.com/Pages/Bit_of_England.html",
    "FIELD5":"43.658889 -79.516583"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.466456,43.637542 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Black_Oak_Savannah_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Black Oak Savannah",
    "FIELD4":"http://torontoplaques.com/Pages/Black_Oak_Savannah.html",
    "FIELD5":"43.637542 -79.466456"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.476553,43.651525 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Bloor_West_Village_BIA_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Bloor West Village BIA",
    "FIELD4":"http://torontoplaques.com/Pages/Bloor_West_Village_BIA.html",
    "FIELD5":"43.651525 -79.476553"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.475157,43.634918 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Boating_on_the_Humber_River_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Boating on the Humber River",
    "FIELD4":"http://torontoplaques.com/Pages/Boating_on_the_Humber_River.html",
    "FIELD5":"43.634918 -79.475157"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.38708,43.67115 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Boris_Volkoff_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Boris Volkoff",
    "FIELD4":"http://torontoplaques.com/Pages/Boris_Volkoff.html",
    "FIELD5":"43.67115 -79.38708"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.424962,43.676191 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Bracondale_Hill_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Bracondale Hill",
    "FIELD4":"http://torontoplaques.com/Pages/Bracondale_Hill.html",
    "FIELD5":"43.676191 -79.424962"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.425399,43.68173 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Bracondale_Village_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Bracondale Village",
    "FIELD4":"http://torontoplaques.com/Pages/Bracondale_Village.html",
    "FIELD5":"43.681730 -79.425399"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.403537,43.659159 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Brief_History_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"A Brief History",
    "FIELD4":"http://torontoplaques.com/Pages/Brief_History.html",
    "FIELD5":"43.659159 -79.403537"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.432287,43.641584 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Brock_Gardens_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Brock Gardens",
    "FIELD4":"http://torontoplaques.com/Pages/Brock_Gardens.html",
    "FIELD5":"43.641584 -79.432287"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.386326,43.641758 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Brotherhood_of_Sleeping_Car_Porters_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Brotherhood of Sleeping Car Porters",
    "FIELD4":"http://torontoplaques.com/Pages/Brotherhood_of_Sleeping_Car_Porters.html",
    "FIELD5":"43.641758 -79.386326"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.545511,43.601745 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Browns_Line_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Brown's Line",
    "FIELD4":"http://torontoplaques.com/Pages/Browns_Line.html",
    "FIELD5":"43.601745 -79.545511"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.34595,43.6612 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Bruce_Mackey_Degrassi_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Bruce Mackey",
    "FIELD4":"http://torontoplaques.com/Pages/Bruce_Mackey_Degrassi.html",
    "FIELD5":"43.66120 -79.34595"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.40733,43.665865 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Brunswick_House_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Brunswick House 1908",
    "FIELD4":"http://torontoplaques.com/Pages/Brunswick_House.html",
    "FIELD5":"43.665865 -79.407330"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.388957,43.675916 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Budd_Sugarman_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Budd Sugarman 1921-2004",
    "FIELD4":"http://torontoplaques.com/Pages/Budd_Sugarman.html",
    "FIELD5":"43.675916 -79.388957"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.391686,43.667546 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Burwash_Hall_Victoria_University_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Burwash Hall Victoria University",
    "FIELD4":"http://torontoplaques.com/Pages/Burwash_Hall_Victoria_University.html",
    "FIELD5":"43.667546 -79.391686"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.464549,43.665202 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Business_and_Industry_in_the_Junction_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Business and Industry in the Junction",
    "FIELD4":"http://torontoplaques.com/Pages/Business_and_Industry_in_the_Junction.html",
    "FIELD5":"43.665202 -79.464549"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.406888,43.745875 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/C_W_Jefferys_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"C.W. Jefferys 1869-1951",
    "FIELD4":"http://torontoplaques.com/Pages/C_W_Jefferys.html",
    "FIELD5":"43.745875 -79.406888"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.201137,43.777833 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Camp_of_the_Crooked_Creek_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Camp of the Crooked Creek",
    "FIELD4":"http://torontoplaques.com/Pages/Camp_of_the_Crooked_Creek.html",
    "FIELD5":"43.777833 -79.201137"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.463462,43.673434 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Canada_Cycle_and_Motor_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Canada Cycle & Motor",
    "FIELD4":"http://torontoplaques.com/Pages/Canada_Cycle_and_Motor.html",
    "FIELD5":"43.673434 -79.463462"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.38048,43.649499 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Canada_First_Movement_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The \"Canada First\" Movement",
    "FIELD4":"http://torontoplaques.com/Pages/Canada_First_Movement.html",
    "FIELD5":"43.649499 -79.380480"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.37973,43.66205 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Canada_vs_Russia_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Canada vs Russia",
    "FIELD4":"http://torontoplaques.com/Pages/Canada_vs_Russia.html",
    "FIELD5":"43.66205 -79.37973"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.36136,43.717078 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Canadas_First_Air_Mail_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Canada's First Air Mail",
    "FIELD4":"http://torontoplaques.com/Pages/Canadas_First_Air_Mail.html",
    "FIELD5":"43.717078 -79.36136"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.371854,43.649111 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Canadas_First_Electric_Telegraph_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Canada's First Electric Telegraph",
    "FIELD4":"http://torontoplaques.com/Pages/Canadas_First_Electric_Telegraph.html",
    "FIELD5":"43.649111 -79.371854"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.39431,43.644336 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Canadas_First_Victoria_Cross_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Canada's First Victoria Cross",
    "FIELD4":"http://torontoplaques.com/Pages/Canadas_First_Victoria_Cross.html",
    "FIELD5":"43.644336 -79.394310"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.380044,43.648631 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Canadian_Bank_of_Commerce_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Canadian Bank of Commerce",
    "FIELD4":"http://torontoplaques.com/Pages/Canadian_Bank_of_Commerce.html",
    "FIELD5":"43.648631 -79.380044"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.379064,43.648824 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Canadian_Bank_of_Commerce_Building_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Canadian Bank of Commerce Building 1929-1931",
    "FIELD4":"http://torontoplaques.com/Pages/Canadian_Bank_of_Commerce_Building.html",
    "FIELD5":"43.648824 -79.379064"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.38641,43.64743 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Canadian_General_Electric_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Canadian General Electric Company Building 1908",
    "FIELD4":"http://torontoplaques.com/Pages/Canadian_General_Electric.html",
    "FIELD5":"43.64743 -79.38641"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.423444,43.630348 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Canadian_International_Air_Show_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Canadian International Air Show",
    "FIELD4":"http://torontoplaques.com/Pages/Canadian_International_Air_Show.html",
    "FIELD5":"43.630348 -79.423444"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.388323,43.653652 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Canadian_Military_Institute_Building_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Canadian Military Institute Building 1908",
    "FIELD4":"http://torontoplaques.com/Pages/Canadian_Military_Institute_Building.html",
    "FIELD5":"43.653652 -79.388323"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.42485,43.633272 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Canadian_National_Exhibition_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Canadian National Exhibition",
    "FIELD4":"http://torontoplaques.com/Pages/Canadian_National_Exhibition.html",
    "FIELD5":"43.633272 -79.42485"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.35985,43.70647 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Canadian_Northern_Railway_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Canadian Northern Railway Eastern Lines",
    "FIELD4":"http://torontoplaques.com/Pages/Canadian_Northern_Railway.html",
    "FIELD5":"43.70647 -79.35985"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.386861,43.641224 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Canadian_Pacifics_Hudson_2815_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Canadian Pacific's Hudson 2815",
    "FIELD4":"http://torontoplaques.com/Pages/Canadian_Pacifics_Hudson_2815.html",
    "FIELD5":"43.641224 -79.386861"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.469543,43.637024 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Canoe_and_Calipers_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Canoe & Calipers",
    "FIELD4":"http://torontoplaques.com/Pages/Canoe_and_Calipers.html",
    "FIELD5":"43.637024 -79.469543"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.417671,43.675647 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Car_2766_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Car #2766",
    "FIELD4":"http://torontoplaques.com/Pages/Car_2766.html",
    "FIELD5":"43.675647 -79.417671"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.38936,43.692489 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Carfrae_Chapel_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Carfrae Chapel",
    "FIELD4":"http://torontoplaques.com/Pages/Carfrae_Chapel.html",
    "FIELD5":"43.692489 -79.389360"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.466612,43.642293 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Carved_by_Ice_and_Water_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Carved by Ice and Water",
    "FIELD4":"http://torontoplaques.com/Pages/Carved_by_Ice_and_Water.html",
    "FIELD5":"43.642293 -79.466612"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.410776,43.684672 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Casa_Loma_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Casa Loma",
    "FIELD4":"http://torontoplaques.com/Pages/Casa_Loma.html",
    "FIELD5":"43.684672 -79.410776"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.408211,43.677552 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Casa_Loma_and_the_Pellatts_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Casa Loma and the Pellatts",
    "FIELD4":"http://torontoplaques.com/Pages/Casa_Loma_and_the_Pellatts.html",
    "FIELD5":"43.677552 -79.408211"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.410703,43.679225 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Casa_Loma_Stables_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Casa Loma Stables",
    "FIELD4":"http://torontoplaques.com/Pages/Casa_Loma_Stables.html",
    "FIELD5":"43.679225 -79.410703"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.366779,43.674476 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Castle_Frank_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Castle Frank",
    "FIELD4":"http://torontoplaques.com/Pages/Castle_Frank.html",
    "FIELD5":"43.674476 -79.366779"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.413514,43.684145 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Castle_Frank_Brook_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Castle Frank Brook",
    "FIELD4":"http://torontoplaques.com/Pages/Castle_Frank_Brook.html",
    "FIELD5":"43.684145 -79.413514"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.37425,43.65043 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Cathedral_Church_of_St_James_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Cathedral Church of St. James",
    "FIELD4":"http://torontoplaques.com/Pages/Cathedral_Church_of_St_James.html",
    "FIELD5":"43.65043 -79.37425"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.41014,43.669257 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Cathedral_of%20St_Alban_the_Martyr_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Cathedral of St. Alban-the-Martyr",
    "FIELD4":"http://torontoplaques.com/Pages/Cathedral_of%20St_Alban_the_Martyr.html",
    "FIELD5":"43.669257 -79.41014"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.378737,43.657006 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Centennial_Anniversary_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Centennial Anniversary 1898-1998",
    "FIELD4":"http://torontoplaques.com/Pages/Centennial_Anniversary.html",
    "FIELD5":"43.657006 -79.378737"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.428775,43.660055 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Centennial_Methodist_Church_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Centennial Methodist Church 1906",
    "FIELD4":"http://torontoplaques.com/Pages/Centennial_Methodist_Church.html",
    "FIELD5":"43.660055 -79.428775"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.372401,43.662222 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Central_Hospital_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Central Hospital",
    "FIELD4":"http://torontoplaques.com/Pages/Central_Hospital.html",
    "FIELD5":"43.662222 -79.372401"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.389836,43.664324 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Centre_for_Culture_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Centre for Culture and Technology 1968-1980",
    "FIELD4":"http://torontoplaques.com/Pages/Centre_for_Culture.html",
    "FIELD5":"43.664324 -79.389836"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.369263,43.669513 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Chapel_of_St_James-The-Less_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Chapel Of St. James_the_Less",
    "FIELD4":"http://torontoplaques.com/Pages/Chapel_of_St_James-The-Less.html",
    "FIELD5":"43.669513 -79.369263"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.333606,43.704111 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Charles_Sauriol_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Charles Sauriol Conservation Reserve",
    "FIELD4":"http://torontoplaques.com/Pages/Charles_Sauriol.html",
    "FIELD5":"43.704111 -79.333606"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.39409,43.668244 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Charles_Trick_Currelly_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Charles Trick Currelly 1876-1957",
    "FIELD4":"http://torontoplaques.com/Pages/Charles_Trick_Currelly.html",
    "FIELD5":"43.668244 -79.39409"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.406888,43.745875 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Charles_William_Jefferys_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Charles William Jefferys 1869-1951",
    "FIELD4":"http://torontoplaques.com/Pages/C_W_Jefferys.html",
    "FIELD5":"43.745875 -79.406888"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.381517,43.727517 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Chedington_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Chedington",
    "FIELD4":"http://torontoplaques.com/Pages/Chedington.html",
    "FIELD5":"43.727517 -79.381517"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.370631,43.685893 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Chorley_Park_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Chorley Park",
    "FIELD4":"http://torontoplaques.com/Pages/Chorley_Park.html",
    "FIELD5":"43.685893 -79.370631"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.318628,43.799217 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Christies_Methodist_Cemetery_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Christie's Methodist Cemetery",
    "FIELD4":"http://torontoplaques.com/Pages/Christies_Methodist_Cemetery.html",
    "FIELD5":"43.799217 -79.318628"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.394149,43.654149 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Chudleigh_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Chudleigh",
    "FIELD4":"http://torontoplaques.com/Pages/Chudleigh.html",
    "FIELD5":"43.654149 -79.394149"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.413825,43.773976 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Church_Avenue_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Church Avenue",
    "FIELD4":"http://torontoplaques.com/Pages/Church_Avenue.html",
    "FIELD5":"43.773976 -79.413825"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.348784,43.689722 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Church_Built_in_a_Day_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Church Built in a Day",
    "FIELD4":"http://torontoplaques.com/Pages/Church_Built_in_a_Day.html",
    "FIELD5":"43.689722 -79.348784"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.395251,43.64887 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Church_of_All_Nations_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Church of All Nations",
    "FIELD4":"http://torontoplaques.com/Pages/Church_of_All_Nations.html",
    "FIELD5":"43.648870 -79.395251"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.398542,43.656346 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Church_of_Christ_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Church of Christ 1891",
    "FIELD4":"http://torontoplaques.com/Pages/Church_of_Christ.html",
    "FIELD5":"43.656346 -79.398542"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.375464,43.668492 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Church_of_Our_Lady_of_Lourdes_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Church of Our Lady of Lourdes 1886-1986",
    "FIELD4":"http://torontoplaques.com/Pages/Church_of_Our_Lady_of_Lourdes.html",
    "FIELD5":"43.668492 -79.375464"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.400189,43.642954 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Church_of_St_John_the_Evangelist_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Church of St. John the Evangelist",
    "FIELD4":"http://torontoplaques.com/Pages/Church_of_St_John_the_Evangelist.html",
    "FIELD5":"43.642954 -79.400189"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.26911,43.689322 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Church_of_St_Nicholas_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Church of St. Nicholas",
    "FIELD4":"http://torontoplaques.com/Pages/Church_of_St_Nicholas.html",
    "FIELD5":"43.689322 -79.269110"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.374021,43.671969 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Church_of_St_Simon_the_Apostle_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Church of St. Simon-the-Apostle",
    "FIELD4":"http://torontoplaques.com/Pages/Church_of_St_Simon_the_Apostle.html",
    "FIELD5":"43.671969 -79.374021"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.38157,43.654599 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Church_of_the_Holy_Trinity_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Church of the Holy Trinity 1847",
    "FIELD4":"http://torontoplaques.com/Pages/Church_of_the_Holy_Trinity.html",
    "FIELD5":"43.654599 -79.38157"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.37973,43.66205 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Churchill_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Churchill",
    "FIELD4":"http://torontoplaques.com/Pages/Churchill.html",
    "FIELD5":"43.66205 -79.37973"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.442679,43.677985 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Cinemas_of_St_Clair_West_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Cinemas of St. Clair West",
    "FIELD4":"http://torontoplaques.com/Pages/Cinemas_of_St_Clair_West.html",
    "FIELD5":"43.677985 -79.442679"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.407286,43.676563 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/City_of_Toronto_Archives_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"City of Toronto Archives",
    "FIELD4":"http://torontoplaques.com/Pages/City_of_Toronto_Archives.html",
    "FIELD5":"43.676563 -79.407286"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.500718,43.59563 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Cliff_Lumsdon_Park_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Cliff Lumsdon Park",
    "FIELD4":"http://torontoplaques.com/Pages/Cliff_Lumsdon_Park.html",
    "FIELD5":"43.595630 -79.500718"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.248617,43.708465 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Cliffside_Golf_Course_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Cliffside Golf Course 1931-1950",
    "FIELD4":"http://torontoplaques.com/Pages/Cliffside_Golf_Course.html",
    "FIELD5":"43.708465 -79.248617"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.379852,43.65123 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Cloud_Gardens_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Cloud Gardens Early History",
    "FIELD4":"http://torontoplaques.com/Pages/Cloud_Gardens.html",
    "FIELD5":"43.651230 -79.379852"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.38665,43.64192 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/CN_Tower_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"CN Tower 25 Years 1976-2001",
    "FIELD4":"http://torontoplaques.com/Pages/CN_Tower.html",
    "FIELD5":"43.64192 -79.38665"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.35721,43.68749 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Coach_House_of_Chester_Park_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Coach-House of Chester Park",
    "FIELD4":"http://torontoplaques.com/Pages/Coach_House_of_Chester_Park.html",
    "FIELD5":"43.68749 -79.35721"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.46001,43.640369 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Colborne_Lodge_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Colborne Lodge 1836",
    "FIELD4":"http://torontoplaques.com/Pages/Colborne_Lodge.html",
    "FIELD5":"43.640369 -79.46001"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.373474,43.648994 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Colborne_Street_Theatre_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Colborne Street Theatre",
    "FIELD4":"http://torontoplaques.com/Pages/Colborne_Street_Theatre.html",
    "FIELD5":"43.648994 -79.373474"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.414726,43.635578 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Coliseum_Complex_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Coliseum Complex, Exhibition Place",
    "FIELD4":"http://torontoplaques.com/Pages/Coliseum_Complex.html",
    "FIELD5":"43.635578 -79.414726"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.387057,43.660646 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/College_Gates_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The College Gates",
    "FIELD4":"http://torontoplaques.com/Pages/College_Gates.html",
    "FIELD5":"43.660646 -79.387057"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.4181,43.646254 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Colonel_James_Givins_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Colonel James Givins",
    "FIELD4":"http://torontoplaques.com/Pages/Colonel_James_Givins.html",
    "FIELD5":"43.646254 -79.41810"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.513432,43.590649 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Colonel_Samuel_Smith_Park_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Colonel Samuel Smith Park",
    "FIELD4":"http://torontoplaques.com/Pages/Colonel_Samuel_Smith_Park.html",
    "FIELD5":"43.590649 -79.513432"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.403175,43.638558 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Colonel_W_J_Stewart_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Colonel W.J. Stewart, CBE, CD 1889-1969",
    "FIELD4":"http://torontoplaques.com/Pages/Colonel_W_J_Stewart.html",
    "FIELD5":"43.638558 -79.403175"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.393001,43.668608 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Colonnade_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Colonnade",
    "FIELD4":"http://torontoplaques.com/Pages/Colonnade.html",
    "FIELD5":"43.668608 -79.393001"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.299279,43.68213 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Community_Centre_55_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Community Centre 55",
    "FIELD4":"http://torontoplaques.com/Pages/Community_Centre_55.html",
    "FIELD5":"43.682130 -79.299279"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.169637,43.784147 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Community_Spirit_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Community Spirit in Early Highland Creek",
    "FIELD4":"http://torontoplaques.com/Pages/Community_Spirit.html",
    "FIELD5":"43.784147 -79.169637"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.427111,43.661571 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Concord_Tavern_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Concord Tavern",
    "FIELD4":"http://torontoplaques.com/Pages/Concord_Tavern.html",
    "FIELD5":"43.661571 -79.427111"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.378273,43.651915 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Confederation_Life_Building_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Confederation Life Building 1892",
    "FIELD4":"http://torontoplaques.com/Pages/Confederation_Life_Building.html",
    "FIELD5":"43.651915 -79.378273"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.376112, 43.65037 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Consumers_Gas_Company_Building_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Consumers' Gas Company Building 1852",
    "FIELD4":"http://torontoplaques.com/Pages/Consumers_Gas_Company_Building.html",
    "FIELD5":"43.650370 -79.376112"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.36455,43.65101 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Consumers_Gas_Company_Purifying_House_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Consumers' Gas Company Purifying House",
    "FIELD4":"http://torontoplaques.com/Pages/Consumers_Gas_Company_Purifying_House.html",
    "FIELD5":"43.65101 -79.36455"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.375465,43.655133 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Cooper_and_Gillespie_Houses_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Cooper and Gillespie Houses",
    "FIELD4":"http://torontoplaques.com/Pages/Cooper_and_Gillespie_Houses.html",
    "FIELD5":"Coordinates: 43.655133 "
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.214998,43.74105 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Cornell_Home_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Cornell Home",
    "FIELD4":"http://torontoplaques.com/Pages/Cornell_Home.html",
    "FIELD5":"Coordinates: 43.741050 "
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.254829,43.757647 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Cornell_House_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Cornell House",
    "FIELD4":"http://torontoplaques.com/Pages/Cornell_House.html",
    "FIELD5":"Coordinates: 43.757647 -79.254829"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.30713,43.71075 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Corporal_Frederick_George_Topham2_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Corporal Frederick George Topham V.C.",
    "FIELD4":"http://torontoplaques.com/Pages/Corporal_Frederick_George_Topham2.html",
    "FIELD5":"Coordinates: 43.71075 "
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.49026,43.66384 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Corporal_Frederick_George_Topham1_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Corporal Frederick George Topham, V.C.",
    "FIELD4":"http://torontoplaques.com/Pages/Corporal_Frederick_George_Topham1.html",
    "FIELD5":"43.66384 -79.49026"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.53371,43.69768 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Cpl_Frederick_G_Topham_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Cpl Frederick G. Topham, Victoria Cross",
    "FIELD4":"http://torontoplaques.com/Pages/Cpl_Frederick_G_Topham.html",
    "FIELD5":"43.69768 -79.53371"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.373565,43.677316 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Craigleigh_Gardens_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Craigleigh Gardens",
    "FIELD4":"http://torontoplaques.com/Pages/Craigleigh_Gardens.html",
    "FIELD5":"43.677316 -79.373565"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.34198,43.67159 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Cranfield_House_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Cranfield House 1902",
    "FIELD4":"http://torontoplaques.com/Pages/Cranfield_House.html",
    "FIELD5":"43.67159 -79.34198"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [-79.416733,43.649048 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Crawford_Street_Bridge_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Crawford Street Bridge",
    "FIELD4":"http://torontoplaques.com/Pages/Crawford_Street_Bridge.html",
    "FIELD5":"Coordinates: 43.649048 -79.416733"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.40008,43.67433 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Creeds_Storage_Vaults_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Creed's Storage Vaults Ltd. 1937",
    "FIELD4":"http://torontoplaques.com/Pages/Creeds_Storage_Vaults.html",
    "FIELD5":"43.67433 -79.40008"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.405875,43.656905 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Croft_Street_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Croft Street",
    "FIELD4":"http://torontoplaques.com/Pages/Croft_Street.html",
    "FIELD5":"43.656905 -79.405875"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.399159,43.636417 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Crosse_and_Blackwell_Building_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Crosse & Blackwell Building",
    "FIELD4":"http://torontoplaques.com/Pages/Crosse_and_Blackwell_Building.html",
    "FIELD5":"43.636417 -79.399159"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.448643,43.636453 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Crossing_of_Lake_Ontario_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Crossing of Lake Ontario by Marilyn Bell",
    "FIELD4":"http://torontoplaques.com/Pages/Crossing_of_Lake_Ontario.html",
    "FIELD5":"43.636453 -79.448643"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.412527,43.77334 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Cummer_Family_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Cummer Family",
    "FIELD4":"http://torontoplaques.com/Pages/Cummer_Family.html",
    "FIELD5":"43.773340 -79.412527"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.371698,43.65059 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Daniel_Brooke_Building_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Daniel Brooke Building",
    "FIELD4":"http://torontoplaques.com/Pages/Daniel_Brooke_Building.html",
    "FIELD5":"Coordinates: 43.650590 "
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ 43.676823,-79.416046 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Davenport_Road_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Davenport Road",
    "FIELD4":"http://torontoplaques.com/Pages/Davenport_Road.html",
    "FIELD5":"Coordinates: 43.676823 "
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.388001,43.672722 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Davenport_Road_Ancient_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Davenport Road - Ancient, Rural and Urban",
    "FIELD4":"http://torontoplaques.com/Pages/Davenport_Road_Ancient.html",
    "FIELD5":"43.672722"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.414598,43.769622 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/David_Gibson_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"David Gibson 1804-1864",
    "FIELD4":"http://torontoplaques.com/Pages/David_Gibson.html",
    "FIELD5":"Coordinates: 43.769622 -79.414598"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.387642,43.646912 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/David_Pecaut_Square_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"David Pecaut Square",
    "FIELD4":"http://torontoplaques.com/Pages/David_Pecaut_Square.html",
    "FIELD5":"43.646912 -79.387642"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.393655,43.66103 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Davidson_Black_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Davidson Black 1884-1934",
    "FIELD4":"http://torontoplaques.com/Pages/Davidson_Black.html",
    "FIELD5":"43.661030 -79.393655"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.370542,43.651791 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/De_La_Salle_Institute_Building_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"De La Salle Institute Building 1871",
    "FIELD4":"http://torontoplaques.com/Pages/De_La_Salle_Institute_Building.html",
    "FIELD5":"43.651791 -79.370542"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.376349,43.652402 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Deeds_Speak_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Deeds Speak' Sculptural Reliefs",
    "FIELD4":"http://torontoplaques.com/Pages/Deeds_Speak.html",
    "FIELD5":"43.652402 -79.376349"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ 43.630581,-79.42641 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Defence_of_York_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Defence of York",
    "FIELD4":"http://torontoplaques.com/Pages/Defence_of_York.html",
    "FIELD5":"Coordinates: 43.630581 "
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.471407,43.735569 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/DeHavilland_Beaver_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"DeHavilland \"Beaver\"",
    "FIELD4":"http://torontoplaques.com/Pages/DeHavilland_Beaver.html",
    "FIELD5":"43.735569 -79.471407"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.294488,43.693663 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Dentonia_Park_Farm_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Dentonia Park Farm",
    "FIELD4":"http://torontoplaques.com/Pages/Dentonia_Park_Farm.html",
    "FIELD5":"43.693663 -79.294488"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.37973,43.66205 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Diefenbaker_and_Trudeau_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Diefenbaker & Trudeau",
    "FIELD4":"http://torontoplaques.com/Pages/Diefenbaker_and_Trudeau.html",
    "FIELD5":"43.66205 -79.37973"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.335596,43.692373 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Dieppe_Park_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Dieppe Park",
    "FIELD4":"http://torontoplaques.com/Pages/Dieppe_Park.html",
    "FIELD5":"43.692373 -79.335596"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.34995,43.658926 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Dingmans_Hall_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Dingman's Hall (later Broadview Hotel) 1891",
    "FIELD4":"http://torontoplaques.com/Pages/Dingmans_Hall.html",
    "FIELD5":"43.658926 -79.349950"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.47126,43.632556 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Discover_the_Humber_Rivers_Ancient_Past_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Discover the Humber River's Ancient Past",
    "FIELD4":"http://torontoplaques.com/Pages/Discover_the_Humber_Rivers_Ancient_Past.html",
    "FIELD5":"43.632556 -79.471260"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.39368,43.661298 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Discovery_of_Insulin_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Discovery of Insulin",
    "FIELD4":"http://torontoplaques.com/Pages/Discovery_of_Insulin.html",
    "FIELD5":"43.661298 -79.39368"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.480028,43.635928 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Discovery_Point_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Discovery Point",
    "FIELD4":"http://torontoplaques.com/Pages/Discovery_Point.html",
    "FIELD5":"43.635928 -79.480028"
    }
  },
 
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.354883,43.666591 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Doctors_and_Nurses_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Doctors & Nurses",
    "FIELD4":"http://torontoplaques.com/Pages/Doctors_and_Nurses.html",
    "FIELD5":"43.666591 -79.354883"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.412742,43.767216 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Dolostone_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Dolostone",
    "FIELD4":"http://torontoplaques.com/Pages/Dolostone.html",
    "FIELD5":"43.767216 -79.412742"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.37798,43.64907 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Dominion_Bank_Building_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Dominion Bank Building 1914",
    "FIELD4":"http://torontoplaques.com/Pages/Dominion_Bank_Building.html",
    "FIELD5":"43.64907 -79.37798"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.3865,43.69775 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Dominion_Coal_and_Wood_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Dominion Coal and Wood",
    "FIELD4":"http://torontoplaques.com/Pages/Dominion_Coal_and_Wood.html",
    "FIELD5":"43.69775 -79.38650"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.360398,43.6567 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Dominion_Square_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Dominion Square",
    "FIELD4":"http://torontoplaques.com/Pages/Dominion_Square.html",
    "FIELD5":"43.656700 -79.360398"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.355444,43.656812 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Don_Bridge_Battery_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Don Bridge Battery",
    "FIELD4":"http://torontoplaques.com/Pages/Don_Bridge_Battery.html",
    "FIELD5":"43.656812 -79.355444"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.353004,43.666172 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Don_Jail_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Don Jail 1859-1864",
    "FIELD4":"http://torontoplaques.com/Pages/Don_Jail.html",
    "FIELD5":"43.666172 -79.353004"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.34322,43.73743 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Don_Mills_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Don Mills",
    "FIELD4":"http://torontoplaques.com/Pages/Don_Mills.html",
    "FIELD5":"43.73743 -79.34322"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.348187,43.651365 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Don_River_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Don River",
    "FIELD4":"http://torontoplaques.com/Pages/Don_River.html",
    "FIELD5":"43.651365 -79.348187"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.353441,43.657968 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Don_River_Bridge_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Don River Bridge, 1803",
    "FIELD4":"http://torontoplaques.com/Pages/Don_River_Bridge.html",
    "FIELD5":"43.657968 -79.353441"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.395833,43.656966 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Donald_Willard_Moore_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Donald Willard Moore 1891-1994",
    "FIELD4":"http://torontoplaques.com/Pages/Donald_Willard_Moore.html",
    "FIELD5":"43.656966 -79.395833"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.34324,43.753058 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Donalda_Farm_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Donalda Farm",
    "FIELD4":"http://torontoplaques.com/Pages/Donalda_Farm.html",
    "FIELD5":"43.753058 -79.343240"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.434028,43.65992 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Dovercourt_Branch_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Dovercourt Branch, Toronto Public Library",
    "FIELD4":"http://torontoplaques.com/Pages/Dovercourt_Branch.html",
    "FIELD5":"43.659920 -79.434028"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.227964,43.767499 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Dowswells_Inn_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Dowswell's Inn",
    "FIELD4":"http://torontoplaques.com/Pages/Dowswells_Inn.html",
    "FIELD5":"43.767499 -79.227964"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.3884,43.661733 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Dr_Emily_Stowe_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Dr. Emily Stowe (1831-1903)",
    "FIELD4":"http://torontoplaques.com/Pages/Dr_Emily_Stowe.html",
    "FIELD5":"43.661733 -79.3884"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.35194,43.6641 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Dr_Garon_Cleland_House_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Dr. Garon Cleland House 1906",
    "FIELD4":"http://torontoplaques.com/Pages/Dr_Garon_Cleland_House.html",
    "FIELD5":"43.66410 -79.35194"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.384432,43.657146 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Dr_John_G_C_Adams_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Dr. John G.C. Adams (1839-1922)",
    "FIELD4":"http://torontoplaques.com/Pages/Dr_John_G_C_Adams.html",
    "FIELD5":"43.657146 -79.384432"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.29767,43.66943 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Dr_William_D_Young_Memorial_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Dr. William D. Young Memorial",
    "FIELD4":"http://torontoplaques.com/Pages/Dr_William_D_Young_Memorial.html",
    "FIELD5":"43.66943 -79.29767"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.388875,43.657308 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Dr_William_T_Mustard_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Dr. William T. Mustard 1914-1987",
    "FIELD4":"http://torontoplaques.com/Pages/Dr_William_T_Mustard.html",
    "FIELD5":"43.657308 -79.388875"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.39781,43.64245 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Draper_Street_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Draper Street",
    "FIELD4":"http://torontoplaques.com/Pages/Draper_Street.html",
    "FIELD5":"43.642450 -79.39781"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.504165,43.662119 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Dundas_Street_Crossing_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Dundas Street Crossing and Lambton Mills",
    "FIELD4":"http://torontoplaques.com/Pages/Dundas_Street_Crossing.html",
    "FIELD5":"43.662119 -79.504165"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.347634,43.685552 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Earl_Kitchener_Public_School_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Earl Kitchener Public School",
    "FIELD4":"http://torontoplaques.com/Pages/Earl_Kitchener_Public_School.html",
    "FIELD5":"43.685552 -79.347634"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.45151,43.67595 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Earlscourt_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Earlscourt",
    "FIELD4":"http://torontoplaques.com/Pages/Earlscourt.html",
    "FIELD5":"43.675950 -79.451510"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.442439,43.676989 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Earlscourt_Branch_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Earlscourt Branch, Toronto Public Library",
    "FIELD4":"http://torontoplaques.com/Pages/Earlscourt_Branch.html",
    "FIELD5":"43.676989 -79.442439"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.344935,43.734848 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Early_Don_Mills_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Early Don Mills",
    "FIELD4":"http://torontoplaques.com/Pages/Early_Don_Mills.html",
    "FIELD5":"43.734848 -79.344935"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.422462,43.63286 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Early_Exhibition_Buildings_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Early Exhibition Buildings",
    "FIELD4":"http://torontoplaques.com/Pages/Early_Exhibition_Buildings.html",
    "FIELD5":"43.632860 -79.422462"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.398617,43.667631 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Early_Meteorology_in_Canada_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Early Meteorology in Canada",
    "FIELD4":"http://torontoplaques.com/Pages/Early_Meteorology_in_Canada.html",
    "FIELD5":"43.667631 -79.398617"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.532652,43.706624 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Early_Mill_Site_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Early Mill Site",
    "FIELD4":"http://torontoplaques.com/Pages/Early_Mill_Site.html",
    "FIELD5":"43.706624 -79.532652"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.336248,43.679286 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Eastern_High_School_of_Commerce_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Eastern High School of Commerce",
    "FIELD4":"http://torontoplaques.com/Pages/Eastern_High_School_of_Commerce.html",
    "FIELD5":"43.679286 -79.336248"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.389134,43.671723 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Eastern_Sound_Studio_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Eastern Sound Studio",
    "FIELD4":"http://torontoplaques.com/Pages/Eastern_Sound_Studio.html",
    "FIELD5":"43.671723, -79.389134"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.383069,43.660836 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Eaton_Auditorium_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Eaton Auditorium and Round Room",
    "FIELD4":"http://torontoplaques.com/Pages/Eaton_Auditorium.html",
    "FIELD5":"43.660836 -79.383069"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.411553,43.666435 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Ed_and_Anne_Mirvish_Parkette_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Ed and Anne Mirvish Parkette",
    "FIELD4":"http://torontoplaques.com/Pages/Ed_and_Anne_Mirvish_Parkette.html",
    "FIELD5":"43.666435 -79.411553"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.501454,43.624027 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Eden_Court_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Eden Court",
    "FIELD4":"http://torontoplaques.com/Pages/Eden_Court.html",
    "FIELD5":"43.624027 -79.501454"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.455185,43.65151 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Eden_Smith_House_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Eden Smith House",
    "FIELD4":"http://torontoplaques.com/Pages/Eden_Smith_House.html",
    "FIELD5":"43.651510 -79.455185"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.380319,43.674468 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Edgar_John_Jarvis_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Edgar John Jarvis 1835-1907",
    "FIELD4":"http://torontoplaques.com/Pages/Edgar_John_Jarvis.html",
    "FIELD5":"43.674468 -79.380319"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.392867,43.659273 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Edith_Kathleen_Russell_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Edith Kathleen Russell 1886-1964",
    "FIELD4":"http://torontoplaques.com/Pages/Edith_Kathleen_Russell.html",
    "FIELD5":"43.659273 -79.392867"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.413611,43.632651 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Edward_Hanlan_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Edward Hanlan 1855-1908",
    "FIELD4":"http://torontoplaques.com/Pages/Edward_Hanlan.html",
    "FIELD5":"43.632651 -79.413611"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.371586,43.67574 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Edward_S_Rogers_Sr_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Edward S. Rogers, Sr. 1900-1939",
    "FIELD4":"http://torontoplaques.com/Pages/Edward_S_Rogers_Sr.html",
    "FIELD5":"43.675740 -79.371586"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.3592,43.7336 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Edwards_Gardens_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Edwards Gardens",
    "FIELD4":"http://torontoplaques.com/Pages/Edwards_Gardens.html",
    "FIELD5":"43.7336 -79.3592"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.409995,43.708036 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Eglinton_Hunt_Club_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Eglinton Hunt Club - RCAF Institute",
    "FIELD4":"http://torontoplaques.com/Pages/Eglinton_Hunt_Club.html",
    "FIELD5":"43.708036 -79.409995"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.410571,43.7043 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Eglinton_Theatre_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Eglinton Theatre",
    "FIELD4":"http://torontoplaques.com/Pages/Eglinton_Theatre.html",
    "FIELD5":"43.704300 -79.410571"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.379289,43.652853 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Elgin_and_Winter_Garden_Theatres_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Elgin and Winter Garden Theatres",
    "FIELD4":"http://torontoplaques.com/Pages/Elgin_and_Winter_Garden_Theatres.html",
    "FIELD5":"43.652853 -79.379289"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.39483,43.66052 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Elizabeth_Elsie_Gregory_Macgill_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Elizabeth (Elsie) Gregory Macgill, O.C.",
    "FIELD4":"http://torontoplaques.com/Pages/Elizabeth_Elsie_Gregory_Macgill.html",
    "FIELD5":"43.66052 -79.39483"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.367723,43.673711 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Elizabeth_Posthuma_Simcoe_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Elizabeth Posthuma Simcoe 1766-1850",
    "FIELD4":"http://torontoplaques.com/Pages/Elizabeth_Posthuma_Simcoe.html",
    "FIELD5":"43.673711 -79.367723"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.401973,43.66962 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Elizabeth_White_House_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Elizabeth White House 1896",
    "FIELD4":"http://torontoplaques.com/Pages/Elizabeth_White_House.html",
    "FIELD5":"43.669620 -79.401973"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.431753,43.641347 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Elm_Grove_Garden_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Elm Grove Garden",
    "FIELD4":"http://torontoplaques.com/Pages/Elm_Grove_Garden.html",
    "FIELD5":"43.641347 -79.431753"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.382701,43.657731 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Elm_Street_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Elm Street",
    "FIELD4":"http://torontoplaques.com/Pages/Elm_Street.html",
    "FIELD5":"43.657731 -79.382701"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.37973,43.66205 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Elvis_Presley_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Elvis Presley",
    "FIELD4":"http://torontoplaques.com/Pages/Elvis_Presley.html",
    "FIELD5":"43.66205 -79.37973"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.373765,43.618945 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Englishs_Boathouse_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"English's Boathouse",
    "FIELD4":"http://torontoplaques.com/Pages/Englishs_Boathouse.html",
    "FIELD5":"43.618945 -79.373765"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.395209,43.664057 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Enid_Gordon_Graham_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Enid Gordon Graham (1894-1974)",
    "FIELD4":"http://torontoplaques.com/Pages/Enid_Gordon_Graham.html",
    "FIELD5":"43.664057 -79.395209"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.36176,43.653249 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Enoch_Turner_School_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Enoch Turner Schoolhouse",
    "FIELD4":"http://torontoplaques.com/Pages/Enoch_Turner_School.html",
    "FIELD5":"43.653249 -79.36176"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.374425,43.666898 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Ernescliffe_Apartments_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Ernescliffe Apartments",
    "FIELD4":"http://torontoplaques.com/Pages/Ernescliffe_Apartments.html",
    "FIELD5":"43.666898 -79.374425"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.420466,43.688977 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Ernest_Hemingway_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Ernest Hemingway",
    "FIELD4":"http://torontoplaques.com/Pages/Ernest_Hemingway.html",
    "FIELD5":"43.688977 -79.420466"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.439121,43.678836 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Escarpment_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Escarpment",
    "FIELD4":"http://torontoplaques.com/Pages/Escarpment.html",
    "FIELD5":"43.678836 -79.439121"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.493476,43.651091 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Etienne_Brule_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Étienne Brûlé",
    "FIELD4":"http://torontoplaques.com/Pages/Etienne_Brule.html",
    "FIELD5":"43.651091 -79.493476"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.54411,43.59186 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Etobicoke_Transportation_Mural_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Etobicoke Transportation Mural",
    "FIELD4":"http://torontoplaques.com/Pages/Etobicoke_Transportation_Mural.html",
    "FIELD5":"43.591860 -79.544110"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.384112,43.673145 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Eulogy_to_Beauty_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Eulogy to Beauty",
    "FIELD4":"http://torontoplaques.com/Pages/Eulogy_to_Beauty.html",
    "FIELD5":"43.673145 -79.384112"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.462591,43.673602 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Evolution_of_Carleton_Village_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Evolution of Carleton Village",
    "FIELD4":"http://torontoplaques.com/Pages/Evolution_of_Carleton_Village.html",
    "FIELD5":"43.673602 -79.462591"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.354742,43.666237 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Evolution_of_Healthcare_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Evolution of Healthcare Services",
    "FIELD4":"http://torontoplaques.com/Pages/Evolution_of_Healthcare.html",
    "FIELD5":"43.666237 -79.354742"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.38936,43.692489 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Ewart_Chapel_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Ewart Chapel",
    "FIELD4":"http://torontoplaques.com/Pages/Ewart_Chapel.html",
    "FIELD5":"43.692489 -79.389360"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.354218,43.66648 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Exercise_Yards_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Exercise Yards at the Don Jail",
    "FIELD4":"http://torontoplaques.com/Pages/Exercise_Yards.html",
    "FIELD5":"43.666480 -79.354218"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.37195,43.65678 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/F_H_Torrington_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"F.H. Torrington",
    "FIELD4":"http://torontoplaques.com/Pages/F_H_Torrington.html",
    "FIELD5":"43.65678 -79.37195"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.451798,43.702535 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Fairbank_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Fairbank",
    "FIELD4":"http://torontoplaques.com/Pages/Fairbank.html",
    "FIELD5":"43.702535 -79.451798"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.451798,43.702535 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Fairbank_School_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Fairbank School Section No. 15",
    "FIELD4":"http://torontoplaques.com/Pages/Fairbank_School.html",
    "FIELD5":"43.702535 -79.451798"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.38695,43.6421 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Fanny_Bobbie_Rosenfeld_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Fanny \"Bobbie\" Rosenfeld",
    "FIELD4":"http://torontoplaques.com/Pages/Fanny_Bobbie_Rosenfeld.html",
    "FIELD5":"Coordinates: 43.642100 -79.386950"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.388666,43.652743 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Federation_of_Jewish_Philanthropies_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Federation of the Jewish Philanthropies",
    "FIELD4":"http://torontoplaques.com/Pages/Federation_of_Jewish_Philanthropies.html",
    "FIELD5":"43.652743 -79.388666"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.37973,43.647137 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Financial_District_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Financial District",
    "FIELD4":"http://torontoplaques.com/Pages/Financial_District.html",
    "FIELD5":"43.647137 -79.379730"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.415231,43.780134 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Finch_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Finch",
    "FIELD4":"http://torontoplaques.com/Pages/Finch.html",
    "FIELD5":"43.780134 -79.415231"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.458189,43.643149 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/First_Banding_of_a_Bird_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"First Banding of a Bird",
    "FIELD4":"http://torontoplaques.com/Pages/First_Banding_of_a_Bird.html",
    "FIELD5":"43.643149 -79.458189"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.389508,43.660335 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/First_External_Cardiac_Pacemaker_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"First External Cardiac Pacemaker, 1950",
    "FIELD4":"http://torontoplaques.com/Pages/First_External_Cardiac_Pacemaker.html",
    "FIELD5":"43.660335 -79.389508"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.410671,43.768839 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/First_Fire_Hall_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"First Fire Hall",
    "FIELD4":"http://torontoplaques.com/Pages/First_Fire_Hall.html",
    "FIELD5":"43.768839 -79.410671"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.377776,43.683104 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/First_Grey_Cup_Game_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"First Grey Cup Game",
    "FIELD4":"http://torontoplaques.com/Pages/First_Grey_Cup_Game.html",
    "FIELD5":"43.683104 -79.377776"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.42502,43.69824 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/First_Jewish_Congregation_in_Canada_West_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"First Jewish Congregation in Canada West",
    "FIELD4":"http://torontoplaques.com/Pages/First_Jewish_Congregation_in_Canada_West.html",
    "FIELD5":"43.69824 -79.42502"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.411174,43.768868 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/First_Municipal_Building_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"First Municipal Building",
    "FIELD4":"http://torontoplaques.com/Pages/First_Municipal_Building.html",
    "FIELD5":"43.768868 -79.411174"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.370417,43.649959 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/First_Ten_Blocks_of_York_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The First Ten Blocks of York",
    "FIELD4":"http://torontoplaques.com/Pages/First_Ten_Blocks_of_York.html",
    "FIELD5":"43.649959 -79.370417"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.372635,43.649314 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/First_Theatrical_Performance_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"First Theatrical Performance",
    "FIELD4":"http://torontoplaques.com/Pages/First_Theatrical_Performance.html",
    "FIELD5":"43.649314 -79.372635"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.374794,43.657409 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/First_Unitarian_Congregation_in_Canada_West_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The First Unitarian Congregation",
    "FIELD4":"http://torontoplaques.com/Pages/First_Unitarian_Congregation_in_Canada_West.html",
    "FIELD5":"43.657409 -79.374794"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.367391,43.656121 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/First_Womens_College_Hospital_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"First Women's College Hospital",
    "FIELD4":"http://torontoplaques.com/Pages/First_Womens_College_Hospital.html",
    "FIELD5":"43.656121 -79.367391"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.48862,43.619223 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Flight_Lieutenant_David_Ernest_Hornell_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Flight Lieutenant David Ernest Hornell, V.C.",
    "FIELD4":"http://torontoplaques.com/Pages/Flight_Lieutenant_David_Ernest_Hornell.html",
    "FIELD5":"43.619223 -79.48862"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.21696,43.72655 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Fools_Paradise_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Fool's Paradise",
    "FIELD4":"http://torontoplaques.com/Pages/Fools_Paradise.html",
    "FIELD5":"43.72655 -79.21696"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.423532,43.630659 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Fort_Rouille1_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Fort Rouillé",
    "FIELD4":"http://torontoplaques.com/Pages/Fort_Rouille1.html",
    "FIELD5":"43.630659 -79.423532"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.423532,43.630659 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Fort_Rouille2_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Fort Rouillé",
    "FIELD4":"http://torontoplaques.com/Pages/Fort_Rouille2.html",
    "FIELD5":"43.630659 -79.423532"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.400148,43.637331 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Fort_York2_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Fort York",
    "FIELD4":"http://torontoplaques.com/Pages/Fort_York2.html",
    "FIELD5":"43.637331 -79.400148"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.4033,43.63915 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Fort_York1_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Fort York",
    "FIELD4":"http://torontoplaques.com/Pages/Fort_York1.html",
    "FIELD5":"43.639150 -79.403300"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.377379,43.64679 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Foster_Hewitt_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Foster Hewitt (1902-1985)",
    "FIELD4":"http://torontoplaques.com/Pages/Foster_Hewitt.html",
    "FIELD5":"43.646790 -79.377379"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.52029,43.700322 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Founding_of_Weston_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Founding of Weston",
    "FIELD4":"http://torontoplaques.com/Pages/Founding_of_Weston.html",
    "FIELD5":"43.700322 -79.520290"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.383089,43.690562 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Frances_Loring_Florence_Wyle_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Frances Loring (1887-1968) and Florence Wyle (1881-1968)",
    "FIELD4":"http://torontoplaques.com/Pages/Frances_Loring_Florence_Wyle.html",
    "FIELD5":"43.690562 -79.383089"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.383173,43.690505 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Frances_Loring_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Frances Loring and Florence Wyle",
    "FIELD4":"http://torontoplaques.com/Pages/Frances_Loring.html",
    "FIELD5":"43.690505 -79.383173"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.372283,43.650943 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Francis_Collins_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Francis Collins",
    "FIELD4":"http://torontoplaques.com/Pages/Francis_Collins.html",
    "FIELD5":"43.650943 -79.372283"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.379434,43.732492 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Frank_P_Wood_Estate_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Frank P. Wood Estate 1931",
    "FIELD4":"http://torontoplaques.com/Pages/Frank_P_Wood_Estate.html",
    "FIELD5":"43.732492 -79.379434"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.396166,43.65935 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Frederic_W_Cumberland_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Frederic W. Cumberland 1820-1881",
    "FIELD4":"http://torontoplaques.com/Pages/Frederic_W_Cumberland.html",
    "FIELD5":"43.659350 -79.396166"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.35697,43.674003 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Frederick_Hubbard_House_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Frederick Hubbard House 1909",
    "FIELD4":"http://torontoplaques.com/Pages/Frederick_Hubbard_House.html",
    "FIELD5":"43.674003 -79.356970"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.379997,43.664666 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Friends_Meeting_House_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Friends' Meeting House",
    "FIELD4":"http://torontoplaques.com/Pages/Friends_Meeting_House.html",
    "FIELD5":"43.664666 -79.379997"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.391005,43.68528 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Frontier_College_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Frontier College",
    "FIELD4":"http://torontoplaques.com/Pages/Frontier_College.html",
    "FIELD5":"43.685280 -79.391005"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.378957,43.667243 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/G_H_Gooderham_House_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"G.H. Gooderham House",
    "FIELD4":"http://torontoplaques.com/Pages/G_H_Gooderham_House.html",
    "FIELD5":"43.667243 -79.378957"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.406914,43.63809 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Garrison_Common_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Garrison Common and the Battle of York",
    "FIELD4":"http://torontoplaques.com/Pages/Garrison_Common.html",
    "FIELD5":"43.638090 -79.406914"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.353883,43.665277 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Gate_House_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Gate House at the Don Jail",
    "FIELD4":"http://torontoplaques.com/Pages/Gate_House.html",
    "FIELD5":"43.665277 -79.353883"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.291866,43.726691 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/General_Motors_and_the_Golden_Mile_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"General Motors and the Golden Mile",
    "FIELD4":"http://torontoplaques.com/Pages/General_Motors_and_the_Golden_Mile.html",
    "FIELD5":"43.726691 -79.291866"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.39498,43.65574 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/George_Brown2_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"George Brown",
    "FIELD4":"http://torontoplaques.com/Pages/George_Brown2.html",
    "FIELD5":"43.655740 -79.394980"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.362059,43.667646 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/George_Brown4_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"George Brown",
    "FIELD4":"http://torontoplaques.com/Pages/George_Brown4.html",
    "FIELD5":"43.667646 -79.362059"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.39498,43.65574 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/George_Brown1_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"George Brown (1818-1880)",
    "FIELD4":"http://torontoplaques.com/Pages/George_Brown1.html",
    "FIELD5":"43.655740 -79.394980"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.370121,43.650952 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/George_Brown3_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"George Brown 1818-1880",
    "FIELD4":"http://torontoplaques.com/Pages/George_Brown3.html",
    "FIELD5":"43.650952 -79.370121"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.370738,43.651564 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/George_Brown_College_St_James_Campus_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"George Brown College St. James Campus",
    "FIELD4":"http://torontoplaques.com/Pages/George_Brown_College_St_James_Campus.html",
    "FIELD5":"43.651564 -79.370738"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.394832,43.655818 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/George_Brown_House_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"George Brown House",
    "FIELD4":"http://torontoplaques.com/Pages/George_Brown_House.html",
    "FIELD5":"43.655818 -79.394832"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.387175,43.667794 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/George_Faludy_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"George Faludy 1910-2006",
    "FIELD4":"http://torontoplaques.com/Pages/George_Faludy.html",
    "FIELD5":"43.667794 -79.387175"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.209055,43.745921 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/George_H_Dix_Memorial_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"George H. Dix Memorial",
    "FIELD4":"http://torontoplaques.com/Pages/George_H_Dix_Memorial.html",
    "FIELD5":"43.745921 -79.209055"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.401956,43.724872 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/George_H_Locke_Memorial_Branch_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"George H. Locke Memorial Branch",
    "FIELD4":"http://torontoplaques.com/Pages/George_H_Locke_Memorial_Branch.html",
    "FIELD5":"43.724872 -79.401956"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.333029,43.662796 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/George_Leslie_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"George Leslie 1804-1893",
    "FIELD4":"http://torontoplaques.com/Pages/George_Leslie.html",
    "FIELD5":"43.662796 -79.333029"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.382997,43.663103 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/George_Luscombe_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"George Luscombe and Toronto Workshop Productions",
    "FIELD4":"http://torontoplaques.com/Pages/George_Luscombe.html",
    "FIELD5":"43.663103 -79.382997"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.401938,43.725285 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/George_Milbrandt_Parkette_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"George Milbrandt Parkette",
    "FIELD4":"http://torontoplaques.com/Pages/George_Milbrandt_Parkette.html",
    "FIELD5":"43.725285 -79.401938"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.468929,43.752257 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/George_Taylor_Denison_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"George Taylor Denison 1839-1925",
    "FIELD4":"http://torontoplaques.com/Pages/George_Taylor_Denison.html",
    "FIELD5":"43.752257 -79.468929"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.39387,43.650764 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/George_Weston_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"George Weston 1864-1924",
    "FIELD4":"http://torontoplaques.com/Pages/George_Weston.html",
    "FIELD5":"43.650764 -79.39387"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.389535,43.627774 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Gibraltar_Point_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Gibraltar Point",
    "FIELD4":"http://torontoplaques.com/Pages/Gibraltar_Point.html",
    "FIELD5":"43.627774 -79.389535"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.384786,43.613258 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Gibraltar_Point_Lighthouse_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Gibraltar Point Lighthouse",
    "FIELD4":"http://torontoplaques.com/Pages/Gibraltar_Point_Lighthouse.html",
    "FIELD5":"43.613258 -79.384786"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.394317,43.69655 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Girl_Guide_Movement_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Girl Guide Movement in Canada",
    "FIELD4":"http://torontoplaques.com/Pages/Girl_Guide_Movement.html",
    "FIELD5":"43.69655 -79.394317"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.42679,43.642673 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Gladstone_Hotel_1889_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Gladstone Hotel 1889",
    "FIELD4":"http://torontoplaques.com/Pages/Gladstone_Hotel_1889.html",
    "FIELD5":"43.642673 -79.426790"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.426947,43.642574 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Gladstone_Hotel_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Gladstone Hotel",
    "FIELD4":"http://torontoplaques.com/Pages/Gladstone_Hotel.html",
    "FIELD5":"43.642574 -79.426947"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.4145,43.76799 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Gladys_Allison_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Gladys Allison 1901-1979",
    "FIELD4":"http://torontoplaques.com/Pages/Gladys_Allison.html",
    "FIELD5":"43.76799 -79.41450"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.38779,43.644327 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Glenn_Gould4_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Glenn Gould (1932-1982)",
    "FIELD4":"http://torontoplaques.com/Pages/Glenn_Gould4.html",
    "FIELD5":"43.644327 -79.387790"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.398474,43.687223 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Glenn_Gould3_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Glenn Gould",
    "FIELD4":"http://torontoplaques.com/Pages/Glenn_Gould3.html",
    "FIELD5":"43.687223 -79.398474"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.296505,43.675321 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Glenn_Gould1_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Glenn Gould",
    "FIELD4":"http://torontoplaques.com/Pages/Glenn_Gould1.html",
    "FIELD5":"43.675321 -79.296505"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.399009,43.687232 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Glenn_Gould2_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Glenn Gould",
    "FIELD4":"http://torontoplaques.com/Pages/Glenn_Gould2.html",
    "FIELD5":"43.687232 -79.399009"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.39259,43.652973 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Goldwin_Smith_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Goldwin Smith 1823-1910",
    "FIELD4":"http://torontoplaques.com/Pages/Goldwin_Smith.html",
    "FIELD5":"43.652973 -79.392590"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.359784,43.650563 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Gooderham_and_Warts_Distillery_Complex_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Gooderham and Worts Distillery Complex",
    "FIELD4":"http://torontoplaques.com/Pages/Gooderham_and_Warts_Distillery_Complex.html",
    "FIELD5":"43.650563 -79.359784"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.353391,43.665467 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Governors_House_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Governor's House at the Don Jail",
    "FIELD4":"http://torontoplaques.com/Pages/Governors_House.html",
    "FIELD5":"43.665467 -79.353391"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.414544,43.653031 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Grace_Bagnato_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Grace Bagnato 1891-1950",
    "FIELD4":"http://torontoplaques.com/Pages/Grace_Bagnato.html",
    "FIELD5":"43.653031 -79.414544"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [-79.402723,43.63813]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Grand_Magazine_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Grand Magazine and Explosion Crater",
    "FIELD4":"http://torontoplaques.com/Pages/Grand_Magazine.html",
    "FIELD5":"Coordinates: 43.638130 -79.402723"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.314719,43.757657 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Grand_Union_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Grand Union 1958",
    "FIELD4":"http://torontoplaques.com/Pages/Grand_Union.html",
    "FIELD5":"43.757657 -79.314719"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.392258,43.653044 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Grange_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Grange",
    "FIELD4":"http://torontoplaques.com/Pages/Grange.html",
    "FIELD5":"43.653044 -79.392258"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.34335,43.75006 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Gray_Mill.jpg",
    "FIELD2":"",
    "FIELD3":"Gray Mill and Donalda Cattle Barn",
    "FIELD4":"http://torontoplaques.com/Pages/Gray_Mill.html",
    "FIELD5":"43.75006 -79.34335"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.371371,43.650664 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Great_Fire_of_1849_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Great Fire of 1849",
    "FIELD4":"http://torontoplaques.com/Pages/Great_Fire_of_1849.html",
    "FIELD5":"43.650664 -79.371371"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.381049,43.647562 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Great_Toronto_Fire_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Great Toronto Fire",
    "FIELD4":"http://torontoplaques.com/Pages/Great_Toronto_Fire.html",
    "FIELD5":"43.647562 -79.381049"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.365706,43.787229 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Green_Meadows_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Green Meadows",
    "FIELD4":"http://torontoplaques.com/Pages/Green_Meadows.html",
    "FIELD5":"43.787229 -79.365706"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.397817,43.667815 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Grey_Cup_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Grey Cup",
    "FIELD4":"http://torontoplaques.com/Pages/Grey_Cup.html",
    "FIELD5":"43.667815 -79.397817"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.202843,43.745925 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Guildwood_Village_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Guildwood Village",
    "FIELD4":"http://torontoplaques.com/Pages/Guildwood_Village.html",
    "FIELD5":"43.745925 -79.202843"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.45686,43.63775 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/H_Stephen_Went_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"H. Stephen Went 1952-1989",
    "FIELD4":"http://torontoplaques.com/Pages/H_Stephen_Went.html",
    "FIELD5":"43.63775 -79.45686"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.251326,43.706798 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/H_M_Schooner_Onondaga_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"H.M. Schooner Onondaga",
    "FIELD4":"http://torontoplaques.com/Pages/H_M_Schooner_Onondaga.html",
    "FIELD5":"43.706798 -79.251326"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.374381,43.667466 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Hambourg_Conservatory_of_Music_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Hambourg Conservatory of Music 1913-1951",
    "FIELD4":"http://torontoplaques.com/Pages/Hambourg_Conservatory_of_Music.html",
    "FIELD5":"43.667466 -79.374381"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.399309,43.665586 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Harold_Adams_Innis_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Harold Adams Innis 1894-1952",
    "FIELD4":"http://torontoplaques.com/Pages/Harold_Adams_Innis.html",
    "FIELD5":"43.665586 -79.399309"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.38622,43.672605 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Harold_Town_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Harold Town",
    "FIELD4":"http://torontoplaques.com/Pages/Harold_Town.html",
    "FIELD5":"43.672605 -79.386220"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.38402,43.67333 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Hazeldean_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Hazeldean",
    "FIELD4":"http://torontoplaques.com/Pages/Hazeldean.html",
    "FIELD5":"43.67333 -79.38402"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.413916,43.658942 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Healey_Willan1_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Healey Willan (1880-1968)",
    "FIELD4":"http://torontoplaques.com/Pages/Healey_Willan1.html",
    "FIELD5":"43.658942 -79.413916"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.413916,43.658942 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Healey_Willan2_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Healey Willan (1880-1968)",
    "FIELD4":"http://torontoplaques.com/Pages/Healey_Willan2.html",
    "FIELD5":"43.658942 -79.413916"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.39344,43.672093 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Heliconian_Hall_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Heliconian Hall",
    "FIELD4":"http://torontoplaques.com/Pages/Heliconian_Hall.html",
    "FIELD5":"43.672093 -79.393440"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.39035,43.665083 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Henry_Carr_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Henry Carr, C.S.B. (1880-1963)",
    "FIELD4":"http://torontoplaques.com/Pages/Henry_Carr.html",
    "FIELD5":"43.665083 -79.39035"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.359269,43.768553 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Henry_Mulholland_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Henry Mulholland",
    "FIELD4":"http://torontoplaques.com/Pages/Henry_Mulholland.html",
    "FIELD5":"43.768553 -79.359269"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.377508,43.646976 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Heritage_Building_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Heritage Building",
    "FIELD4":"http://torontoplaques.com/Pages/Heritage_Building.html",
    "FIELD5":"43.646976 -79.377508"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.392375,43.666581 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Herman_Northrop_Frye_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Herman Northrop Frye, CC FRSC",
    "FIELD4":"http://torontoplaques.com/Pages/Herman_Northrop_Frye.html",
    "FIELD5":"43.666581 -79.392375"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [-79.379812,43.65581]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Hermant_Building_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Hermant Building 1929",
    "FIELD4":"http://torontoplaques.com/Pages/Hermant_Building.html",
    "FIELD5":"43.655810, -79.379812"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.448805,43.645098 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/High_Park_Branch_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"High Park Branch, Toronto Public Library 1916",
    "FIELD4":"http://torontoplaques.com/Pages/High_Park_Branch.html",
    "FIELD5":"43.645098 -79.448805"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.387893,43.637876 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/High_Steel_Ironworkers_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"High Steel Ironworkers",
    "FIELD4":"http://torontoplaques.com/Pages/High_Steel_Ironworkers.html",
    "FIELD5":"43.637876 -79.387893"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.176278,43.780196 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Highland_Creek_Mills_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Highland Creek Mills",
    "FIELD4":"http://torontoplaques.com/Pages/Highland_Creek_Mills.html",
    "FIELD5":"43.780196 -79.176278"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.178499,43.783252 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Highland_Creek_School_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Highland Creek School",
    "FIELD4":"http://torontoplaques.com/Pages/Highland_Creek_School.html",
    "FIELD5":"43.783252 -79.178499"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.168307,43.784441 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Highland_Creek_Village_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Highland Creek Village",
    "FIELD4":"http://torontoplaques.com/Pages/Highland_Creek_Village.html",
    "FIELD5":"43.784441 -79.168307"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.190016,43.824798 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Hillside_Church_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Hillside Church",
    "FIELD4":"http://torontoplaques.com/Pages/Hillside_Church.html",
    "FIELD5":"43.824798 -79.190016"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.182141,43.833412 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Hillside_Public_School_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Hillside Public School S.S. No. 4.",
    "FIELD4":"http://torontoplaques.com/Pages/Hillside_Public_School.html",
    "FIELD5":"43.833412 -79.182141"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.347573,43.659231 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Historic_Postal_Station_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Historic Postal Station 'G' 1913-1975",
    "FIELD4":"http://torontoplaques.com/Pages/Historic_Postal_Station.html",
    "FIELD5":"43.659231 -79.347573"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.365202,43.651067 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/History_As_Theatre_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"History As Theatre: 200 Toronto Years",
    "FIELD4":"http://torontoplaques.com/Pages/History_As_Theatre.html",
    "FIELD5":"43.651067 -79.365202"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.432146,43.680313 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/History_of_840_St_Clair_West_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"History of 840 St. Clair West",
    "FIELD4":"http://torontoplaques.com/Pages/History_of_840_St_Clair_West.html",
    "FIELD5":"43.680313 -79.432146"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.35346,43.66685 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/History_of_the_Bridgepoint_Hospital_Site_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"History of the Bridgepoint Hospital Site",
    "FIELD4":"http://torontoplaques.com/Pages/History_of_the_Bridgepoint_Hospital_Site.html",
    "FIELD5":"43.66685 -79.35346"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.38013,43.639767 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/History_of_the_Pier_6_Building_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"History of the Pier 6 Building",
    "FIELD4":"http://torontoplaques.com/Pages/History_of_the_Pier_6_Building.html",
    "FIELD5":"43.639767 -79.380130"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.41074,43.63422 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/HMCS_York_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"HMCS York",
    "FIELD4":"http://torontoplaques.com/Pages/HMCS_York.html",
    "FIELD5":"43.63422 -79.41074"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.377299,43.646795 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Hockey_Hall_of_Fame_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Hockey Hall of Fame",
    "FIELD4":"http://torontoplaques.com/Pages/Hockey_Hall_of_Fame.html",
    "FIELD5":"43.646795 -79.377299"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.40674,43.74335 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Hoggs_Hollow_Tragedy_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Hoggs Hollow Tragedy",
    "FIELD4":"http://torontoplaques.com/Pages/Hoggs_Hollow_Tragedy.html",
    "FIELD5":"43.74335 -79.40674"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.370492,43.650633 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Home_District_School_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Home District School",
    "FIELD4":"http://torontoplaques.com/Pages/Home_District_School.html",
    "FIELD5":"43.650633 -79.370492"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.39152,43.661688 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Honourable_George_Brown_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Honourable George Brown 1818-1880",
    "FIELD4":"http://torontoplaques.com/Pages/Honourable_George_Brown.html",
    "FIELD5":"43.661688 -79.391520"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.35068,43.773364 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Honourable_George_Stewart_Henry_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Honourable George Stewart Henry",
    "FIELD4":"http://torontoplaques.com/Pages/Honourable_George_Stewart_Henry.html",
    "FIELD5":"43.773364 -79.35068"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.376077,43.667571 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Honourable_Herbert_Alexander_Bruce_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Honourable Herbert Alexander Bruce, M.D. 1868-1963",
    "FIELD4":"http://torontoplaques.com/Pages/Honourable_Herbert_Alexander_Bruce.html",
    "FIELD5":"43.667571 -79.376077"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.40086,43.725227 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Honourable_William_McDougall_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Honourable William McDougall 1822-1905",
    "FIELD4":"http://torontoplaques.com/Pages/Honourable_William_McDougall.html",
    "FIELD5":"43.725227 -79.40086"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.545511,43.601745 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Horner_Avenue_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Horner Avenue",
    "FIELD4":"http://torontoplaques.com/Pages/Horner_Avenue.html",
    "FIELD5":"43.601745 -79.545511"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.38615,43.656804 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/House_of_Industry_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"House of Industry",
    "FIELD4":"http://torontoplaques.com/Pages/House_of_Industry.html",
    "FIELD5":"43.656804 -79.386150"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.36296,43.655391 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/House_of_Providence_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"House of Providence",
    "FIELD4":"http://torontoplaques.com/Pages/House_of_Providence.html",
    "FIELD5":"43.655391 -79.362960"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.394305,43.688086 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/How_St_Clair_Got_Its_Name_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"How St. Clair Got Its Name",
    "FIELD4":"http://torontoplaques.com/Pages/How_St_Clair_Got_Its_Name.html",
    "FIELD5":"43.688086 -79.394305"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.5181,43.76012 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/How_The_Earth_Was_Formed_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"How The Earth Was Formed",
    "FIELD4":"http://torontoplaques.com/Pages/How_The_Earth_Was_Formed.html",
    "FIELD5":"43.76012 -79.5181"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.494005,43.649268 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Humber_River1_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Humber River",
    "FIELD4":"http://torontoplaques.com/Pages/Humber_River1.html",
    "FIELD5":"43.649268 -79.494005"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.491642,43.65241 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Humber_River2_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Humber River",
    "FIELD4":"http://torontoplaques.com/Pages/Humber_River2.html",
    "FIELD5":"43.652410 -79.491642"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.47885,43.63659 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Humber_River_Marshes_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Humber River Marshes and Oak Savannah",
    "FIELD4":"http://torontoplaques.com/Pages/Humber_River_Marshes.html",
    "FIELD5":"43.63659 -79.47885"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.470345,43.66011 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Humberside_Collegiate_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Humberside Collegiate",
    "FIELD4":"http://torontoplaques.com/Pages/Humberside_Collegiate.html",
    "FIELD5":"43.660110 -79.470345"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.426119,43.681661 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Humewood_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Humewood",
    "FIELD4":"http://torontoplaques.com/Pages/Humewood.html",
    "FIELD5":"43.681661 -79.426119"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.492693,43.643756 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Huron_Wendat_Villages_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Huron-Wendat Villages on the Humber River",
    "FIELD4":"http://torontoplaques.com/Pages/Huron_Wendat_Villages.html",
    "FIELD5":"43.643756 -79.492693"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.493157,43.649088 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Hurricane_Hazel_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Hurricane Hazel",
    "FIELD4":"http://torontoplaques.com/Pages/Hurricane_Hazel.html",
    "FIELD5":"43.649088 -79.493157"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.423256,43.646409 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Ideal_Bread_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Ideal Bread Company Factory 1919",
    "FIELD4":"http://torontoplaques.com/Pages/Ideal_Bread.html",
    "FIELD5":"43.646409 -79.423256"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.40157,43.659303 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Igneous_Boulder_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Igneous Boulder",
    "FIELD4":"http://torontoplaques.com/Pages/Igneous_Boulder.html",
    "FIELD5":"43.659303 -79.40157"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.3786,43.66649 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Immanuel_Baptist_Church_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Immanuel Baptist Church",
    "FIELD4":"http://torontoplaques.com/Pages/Immanuel_Baptist_Church.html",
    "FIELD5":"43.666490 -79.37860"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.447055,43.677019 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Immigrants_to_Earlscourt_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Immigrants to Earlscourt",
    "FIELD4":"http://torontoplaques.com/Pages/Immigrants_to_Earlscourt.html",
    "FIELD5":"43.677019 -79.447055"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.368002,43.651393 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Imperial_Bank_of_Canada_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Imperial Bank of Canada 1908",
    "FIELD4":"http://torontoplaques.com/Pages/Imperial_Bank_of_Canada.html",
    "FIELD5":"43.651393 -79.368002"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.399464,43.686932 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Imperial_Oil_Building_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Imperial Oil Building",
    "FIELD4":"http://torontoplaques.com/Pages/Imperial_Oil_Building.html",
    "FIELD5":"43.686932 -79.399464"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [-79.37986,43.655814]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Imperial_Optical_Company_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Imperial Optical Company 1913",
    "FIELD4":"http://torontoplaques.com/Pages/Imperial_Optical_Company.html",
    "FIELD5":"43.655814, -79.379860"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.36255,43.76883 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Imperial_Order_Daughters_of_the_Empire_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Imperial Order Daughters of the Empire (IODE)",
    "FIELD4":"http://torontoplaques.com/Pages/Imperial_Order_Daughters_of_the_Empire.html",
    "FIELD5":"43.76883 -79.36255"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.252281,43.759968 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/In_Memory_of_David_Thomson_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"In Memory of David Thomson",
    "FIELD4":"http://torontoplaques.com/Pages/In_Memory_of_David_Thomson.html",
    "FIELD5":"43.759968 -79.252281"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.360621,43.675927 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/In_Memory_of_Al_Birney_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"In Memory of J.A. (Al) Birney",
    "FIELD4":"http://torontoplaques.com/Pages/In_Memory_of_Al_Birney.html",
    "FIELD5":"43.675927 -79.360621"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.252415,43.760359 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Indian_Trail_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Indian Trail",
    "FIELD4":"http://torontoplaques.com/Pages/Indian_Trail.html",
    "FIELD5":"43.760359 -79.252415"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.258257,43.761176 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Indian_Village_Site_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Indian Village Site",
    "FIELD4":"http://torontoplaques.com/Pages/Indian_Village_Site.html",
    "FIELD5":"43.761176 -79.258257"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.342028,43.662083 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Industrial_Dundas_Carlaw_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Industrial Dundas-Carlaw",
    "FIELD4":"http://torontoplaques.com/Pages/Industrial_Dundas_Carlaw.html",
    "FIELD5":"43.662083 -79.342028"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.388022,43.646755 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Irish_Immigrants_and_the_Fever_Sheds_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Irish Immigrants and the Fever Sheds 1847",
    "FIELD4":"http://torontoplaques.com/Pages/Irish_Immigrants_and_the_Fever_Sheds.html",
    "FIELD5":"43.646755 -79.388022"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.388816,43.643785 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Isabella_Valancy_Crawford_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Isabella Valancy Crawford (1850-1887)",
    "FIELD4":"http://torontoplaques.com/Pages/Isabella_Valancy_Crawford.html",
    "FIELD5":"43.643785 -79.388816"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.38253,43.61307 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Island_Filtration_Plant_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Island Filtration Plant",
    "FIELD4":"http://torontoplaques.com/Pages/Island_Filtration_Plant.html",
    "FIELD5":"43.61307 -79.38253"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.382941,43.613275 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Island_Water_Treatment_Plant_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Island Water Treatment Plant",
    "FIELD4":"http://torontoplaques.com/Pages/Island_Water_Treatment_Plant.html",
    "FIELD5":"43.613275 -79.382941"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.375259,43.652303 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/J_Frank_Raw_Building_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"J. Frank Raw Building 1930",
    "FIELD4":"http://torontoplaques.com/Pages/J_Frank_Raw_Building.html",
    "FIELD5":"43.652303 -79.375259"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.407018,43.666692 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/J_B_Tyrrell_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"J.B. Tyrrell (1858-1957)",
    "FIELD4":"http://torontoplaques.com/Pages/J_B_Tyrrell.html",
    "FIELD5":"43.666692 -79.407018"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.382154,43.657797 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/J_E_H_MacDonald_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"J.E.H. MacDonald (1873-1932)",
    "FIELD4":"http://torontoplaques.com/Pages/J_E_H_MacDonald.html",
    "FIELD5":"43.657797 -79.382154"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.38107,43.661685 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/J_J_Wright_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"J.J. Wright (1848-1922)",
    "FIELD4":"http://torontoplaques.com/Pages/J_J_Wright.html",
    "FIELD5":"43.661685 -79.381070"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.4125,43.709874 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Jackes_Site_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Jackes Site",
    "FIELD4":"http://torontoplaques.com/Pages/Jackes_Site.html",
    "FIELD5":"43.709874 -79.412500"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.410038,43.773968 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Jacob_Cummer_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Jacob Cummer 1797-1841",
    "FIELD4":"http://torontoplaques.com/Pages/Jacob_Cummer.html",
    "FIELD5":"43.773968 -79.410038"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.470358,43.665278 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/James_Augustus_Ellis_of_the_Junction_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"James Augustus Ellis of the Junction",
    "FIELD4":"http://torontoplaques.com/Pages/James_Augustus_Ellis_of_the_Junction.html",
    "FIELD5":"43.665278 -79.470358"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.383629,43.672217 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/James_Bryce_Milner_Park_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"James Bryce Milner Park",
    "FIELD4":"http://torontoplaques.com/Pages/James_Bryce_Milner_Park.html",
    "FIELD5":"43.672217 -79.383629"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.376427,43.670938 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/James_Cooper_House_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"James Cooper House 1881",
    "FIELD4":"http://torontoplaques.com/Pages/James_Cooper_House.html",
    "FIELD5":"43.670938 -79.376427"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.520089,43.700458 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/James_Gilbert_Gove_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"James Gilbert Gove 1884-1974",
    "FIELD4":"http://torontoplaques.com/Pages/James_Gilbert_Gove.html",
    "FIELD5":"43.700458 -79.520089"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.375349,43.647515 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/James_Mavor_Moore_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"James Mavor Moore CC D.Litt LL.D FRSC",
    "FIELD4":"http://torontoplaques.com/Pages/James_Mavor_Moore.html",
    "FIELD5":"43.647515 -79.375349"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.568567,43.64815 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/James_Shaver_Woodsworth_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"James Shaver Woodsworth 1874-1942",
    "FIELD4":"http://torontoplaques.com/Pages/James_Shaver_Woodsworth.html",
    "FIELD5":"43.64815 -79.568567"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.345182,43.660359 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/James_Simpson_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"James Simpson (1873-1938)",
    "FIELD4":"http://torontoplaques.com/Pages/James_Simpson.html",
    "FIELD5":"43.660359 -79.345182"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.241949,43.824186 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/James_Weir_Farm_House_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"James Weir Farm House",
    "FIELD4":"http://torontoplaques.com/Pages/James_Weir_Farm_House.html",
    "FIELD5":"43.824186 -79.241949"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.393859,43.696261 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Janet_M_Magee_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Janet M. Magee 1898-1979",
    "FIELD4":"http://torontoplaques.com/Pages/Janet_M_Magee.html",
    "FIELD5":"43.696261 -79.393859"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.37797,43.665955 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Jarvis_Collegiate_Institute_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Jarvis Collegiate Institute",
    "FIELD4":"http://torontoplaques.com/Pages/Jarvis_Collegiate_Institute.html",
    "FIELD5":"43.665955 -79.377970"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.375749,43.660638 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Jarvis_Street_Baptist_Church_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Jarvis Street Baptist Church",
    "FIELD4":"http://torontoplaques.com/Pages/Jarvis_Street_Baptist_Church.html",
    "FIELD5":"43.660638 -79.375749"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.330401,43.69216 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Jean_Gertrude_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Jean Gertrude \"True\" Davidson (1901-1978)",
    "FIELD4":"http://torontoplaques.com/Pages/Jean_Gertrude.html",
    "FIELD5":"43.692160 -79.330401"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.38465,43.654502 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Jean_Lumb_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Jean Lumb, C.M., 1919-2002",
    "FIELD4":"http://torontoplaques.com/Pages/Jean_Lumb.html",
    "FIELD5":"43.654502 -79.384650"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.474819,43.635906 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Jean_Baptiste_Rousseaux_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Jean-Baptiste Rousseaux 1758-1812",
    "FIELD4":"http://torontoplaques.com/Pages/Jean_Baptiste_Rousseaux.html",
    "FIELD5":"43.635906 -79.474819"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.4191,43.63104 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Jeff_Krosnoff_and_Gary_Avrin_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Jeff Krosnoff and Gary Avrin",
    "FIELD4":"http://torontoplaques.com/Pages/Jeff_Krosnoff_and_Gary_Avrin.html",
    "FIELD5":"43.63104 -79.4191"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.391053,43.672807 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Jesse_Ketchum_School_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Jesse Ketchum School",
    "FIELD4":"http://torontoplaques.com/Pages/Jesse_Ketchum_School.html",
    "FIELD5":"43.672807 -79.391053"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.432342,43.729848 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Jewish_Old_Folks_Home_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Jewish Old Folks Home (Baycrest)",
    "FIELD4":"http://torontoplaques.com/Pages/Jewish_Old_Folks_Home.html",
    "FIELD5":"43.729848 -79.432342"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.412326,43.67839 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/John_B_Maclean_House_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"John B. Maclean House 1910",
    "FIELD4":"http://torontoplaques.com/Pages/John_B_Maclean_House.html",
    "FIELD5":"43.678390 -79.412326"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.435868,43.754583 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/John_Bales_House_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"John Bales House circa 1824",
    "FIELD4":"http://torontoplaques.com/Pages/John_Bales_House.html",
    "FIELD5":"43.754583 -79.435868"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.3559,43.6923 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/John_F_Taylor_House_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"John F. Taylor House 1885",
    "FIELD4":"http://torontoplaques.com/Pages/John_F_Taylor_House.html",
    "FIELD5":"43.69230 -79.3559"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.433287,43.641145 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/John_J_Ward_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"John J. Ward",
    "FIELD4":"http://torontoplaques.com/Pages/John_J_Ward.html",
    "FIELD5":"43.641145 -79.433287"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.371521,43.675678 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/John_James_Rickard_Macleod_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"John James Rickard Macleod 1876-1935",
    "FIELD4":"http://torontoplaques.com/Pages/John_James_Rickard_Macleod.html",
    "FIELD5":"43.675678 -79.371521"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.39742,43.66852 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/John_M_Lyle_Studio_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"John M. Lyle Studio 1921",
    "FIELD4":"http://torontoplaques.com/Pages/John_M_Lyle_Studio.html",
    "FIELD5":"43.66852 -79.39742"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.3718,43.660517 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/John_Ross_Robertson_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"John Ross Robertson 1841-1918",
    "FIELD4":"http://torontoplaques.com/Pages/John_Ross_Robertson.html",
    "FIELD5":"43.660517 -79.3718"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.38647,43.64144 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/John_Street_Roundhouse_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The John Street Roundhouse",
    "FIELD4":"http://torontoplaques.com/Pages/John_Street_Roundhouse.html",
    "FIELD5":"43.64144 -79.38647"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.341912,43.662048 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/John_Suk_Soo_Chang_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"John Suk-Soo Chang",
    "FIELD4":"http://torontoplaques.com/Pages/John_Suk_Soo_Chang.html",
    "FIELD5":"43.662048 -79.341912"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.383323,43.669331 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/John_Wilson_Bengough_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"John Wilson Bengough 1851-1923",
    "FIELD4":"http://torontoplaques.com/Pages/John_Wilson_Bengough.html",
    "FIELD5":"43.669331 -79.383323"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.415789,43.654607 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Johnny_Lombardi_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Johnny Lombardi 1915-2002",
    "FIELD4":"http://torontoplaques.com/Pages/Johnny_Lombardi.html",
    "FIELD5":"43.654607 -79.415789"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.38431,43.670623 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Joseph_Bloor_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Joseph Bloor",
    "FIELD4":"http://torontoplaques.com/Pages/Joseph_Bloor.html",
    "FIELD5":"43.670623 -79.384310"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.374783,43.642232 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Joseph_E_Atkinson_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Joseph E. Atkinson (1865-1948)",
    "FIELD4":"http://torontoplaques.com/Pages/Joseph_E_Atkinson.html",
    "FIELD5":"43.642232 -79.374783"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.381928,43.660351 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Joseph_Sheard_Parkette_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Joseph Sheard Parkette",
    "FIELD4":"http://torontoplaques.com/Pages/Joseph_Sheard_Parkette.html",
    "FIELD5":"43.660351 -79.381928"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.412833,43.76328 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Joseph_Shepard_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Joseph Shepard",
    "FIELD4":"http://torontoplaques.com/Pages/Joseph_Shepard.html",
    "FIELD5":"43.763280 -79.412833"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.363636,43.650151 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Joseph_Simpson_Knitting_Mills_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Joseph Simpson Knitting Mills",
    "FIELD4":"http://torontoplaques.com/Pages/Joseph_Simpson_Knitting_Mills.html",
    "FIELD5":"43.650151 -79.363636"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.468617,43.665321 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Early_History_and_Evolution_of_the_Junction_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Early History and Evolution of the Junction",
    "FIELD4":"http://torontoplaques.com/Pages/Early_History_and_Evolution_of_the_Junction.html",
    "FIELD5":"43.665321 -79.468617"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.38729,43.700675 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/June_Rowlands_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"June Rowlands",
    "FIELD4":"http://torontoplaques.com/Pages/June_Rowlands.html",
    "FIELD5":"43.700675 -79.38729"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.410571,43.7043 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Kaplan_and_Sprachman_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Kaplan & Sprachman, Architects",
    "FIELD4":"http://torontoplaques.com/Pages/Kaplan_and_Sprachman.html",
    "FIELD5":"43.704300 -79.410571"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.364786,43.651203 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Kathleen_Blake_Coleman_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Kathleen Blake Coleman (1856-1915)",
    "FIELD4":"http://torontoplaques.com/Pages/Kathleen_Blake_Coleman.html",
    "FIELD5":"43.651203 -79.364786"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.420749,43.723579 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Kathleen_Kay_Livingstone_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Kathleen (Kay) Livingstone (1918-1975)",
    "FIELD4":"http://torontoplaques.com/Pages/Kathleen_Kay_Livingstone.html",
    "FIELD5":"43.723579 -79.420749"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.436646,43.70259 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Kay_Gardner_Beltline_Park1_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Kay Gardner Beltline Park",
    "FIELD4":"http://torontoplaques.com/Pages/Kay_Gardner_Beltline_Park1.html",
    "FIELD5":"43.702590 -79.436646"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.423208,43.704542 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Kay_Gardner_Beltline_Park2_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Kay Gardner Beltline Park",
    "FIELD4":"http://torontoplaques.com/Pages/Kay_Gardner_Beltline_Park2.html",
    "FIELD5":"43.704542 -79.423208"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.373474,43.648994 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Keating_Coffee_House_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Keating Coffee House",
    "FIELD4":"http://torontoplaques.com/Pages/Keating_Coffee_House.html",
    "FIELD5":"43.648994 -79.373474"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.339635,43.675353 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Kempton_Howard_Park_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Kempton Howard Park",
    "FIELD4":"http://torontoplaques.com/Pages/Kempton_Howard_Park.html",
    "FIELD5":"43.675353 -79.339635"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.162762,43.76051 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Ken_Morrish_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Ken Morrish",
    "FIELD4":"http://torontoplaques.com/Pages/Ken_Morrish.html",
    "FIELD5":"43.760510 -79.162762"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.402034,43.653679 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Kensington_Market_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Kensington Market",
    "FIELD4":"http://torontoplaques.com/Pages/Kensington_Market.html",
    "FIELD5":"43.653679 -79.402034"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.340208,43.661602 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Kent_McClain_Ltd_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Kent-McClain, Ltd. Factory 1911",
    "FIELD4":"http://torontoplaques.com/Pages/Kent_McClain_Ltd.html",
    "FIELD5":"43.661602 -79.340208"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.29711,43.668171 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Kew_Williams_House_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Kew Williams House 1902",
    "FIELD4":"http://torontoplaques.com/Pages/Kew_Williams_House.html",
    "FIELD5":"43.668171 -79.297110"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.402957,43.653861 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Kiever_Synagogue_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Kiever Synagogue 1927",
    "FIELD4":"http://torontoplaques.com/Pages/Kiever_Synagogue.html",
    "FIELD5":"43.653861 -79.402957"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.376117,43.649433 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/King_Edward_Hotel_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The King Edward Hotel",
    "FIELD4":"http://torontoplaques.com/Pages/King_Edward_Hotel.html",
    "FIELD5":"43.649433 -79.376117"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.35616,43.656226 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/King_Street_Carhouse_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"King Street Carhouse",
    "FIELD4":"http://torontoplaques.com/Pages/King_Street_Carhouse.html",
    "FIELD5":"43.656226 -79.356160"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.420756,43.640132 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/King_Street_West_Railway_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"King Street West Railway Subway",
    "FIELD4":"http://torontoplaques.com/Pages/King_Street_West_Railway.html",
    "FIELD5":"43.640132 -79.420756"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.3906,43.662517 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Kings_College_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"King's College",
    "FIELD4":"http://torontoplaques.com/Pages/Kings_College.html",
    "FIELD5":"43.662517 -79.3906"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.492473,43.65006 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Kings_Mill_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The King's Mill",
    "FIELD4":"http://torontoplaques.com/Pages/Kings_Mill.html",
    "FIELD5":"43.650060 -79.492473"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.283706,43.680644 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Kingston_Road_Radial_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Kingston Road Radial",
    "FIELD4":"http://torontoplaques.com/Pages/Kingston_Road_Radial.html",
    "FIELD5":"Coordinates: 43.680644 -79.283706"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.47545,43.666383 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Knesseth_Israel_Synagogue_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Knesseth Israel Synagogue",
    "FIELD4":"http://torontoplaques.com/Pages/Knesseth_Israel_Synagogue.html",
    "FIELD5":"43.666383 -79.47545"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.278529,43.786052 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Knox_Church_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Knox Church",
    "FIELD4":"http://torontoplaques.com/Pages/Knox_Church.html",
    "FIELD5":"43.786052 -79.278529"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.400586,43.659381 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Knox_College_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Knox College",
    "FIELD4":"http://torontoplaques.com/Pages/Knox_College.html",
    "FIELD5":"43.659381 -79.400586"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.489131,43.624201 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/LJ_McGuinness_Distillers_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"L.J. McGuinness Distillers",
    "FIELD4":"http://torontoplaques.com/Pages/LJ_McGuinness_Distillers.html",
    "FIELD5":"43.624201 -79.489131"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.3988,43.6543 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Labor_Lyceum_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Labor Lyceum",
    "FIELD4":"http://torontoplaques.com/Pages/Labor_Lyceum.html",
    "FIELD5":"43.65430 -79.39880"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.385316,43.613672 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Lake_Light_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Lake Light",
    "FIELD4":"http://torontoplaques.com/Pages/Lake_Light.html",
    "FIELD5":"43.613672 -79.385316"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.296153,43.684973 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Lake_Simcoe_Ice_Company_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Lake Simcoe Ice Company",
    "FIELD4":"http://torontoplaques.com/Pages/Lake_Simcoe_Ice_Company.html",
    "FIELD5":"43.684973 -79.296153"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.503658,43.663075 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Lambton_House_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Lambton House",
    "FIELD4":"http://torontoplaques.com/Pages/Lambton_House.html",
    "FIELD5":"43.663075 -79.503658"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.441897,43.635532 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Landing_of_American_Troops_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Landing of American Troops at York",
    "FIELD4":"http://torontoplaques.com/Pages/Landing_of_American_Troops.html",
    "FIELD5":"43.635532 -79.441897"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.355263,43.667047 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Landscape_Scaddings_Property_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Landscape: Scadding's Property",
    "FIELD4":"http://torontoplaques.com/Pages/Landscape_Scaddings_Property.html",
    "FIELD5":"43.667047 -79.355263"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.411304,43.761932 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Lansing1_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Lansing",
    "FIELD4":"http://torontoplaques.com/Pages/Lansing1.html",
    "FIELD5":"43.761932 -79.411304"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.411787,43.763884 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Lansing2_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Lansing",
    "FIELD4":"http://torontoplaques.com/Pages/Lansing2.html",
    "FIELD5":"43.763884 -79.411787"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.411365,43.761571 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Lansing3_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Lansing",
    "FIELD4":"http://torontoplaques.com/Pages/Lansing3.html",
    "FIELD5":"43.761571 -79.411365"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.4285,43.681086 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Latin_Americans_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Latin Americans",
    "FIELD4":"http://torontoplaques.com/Pages/Latin_Americans.html",
    "FIELD5":"43.681086 -79.428500"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.38431,43.673451 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Lawren_Harris_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Lawren Harris 1885-1970",
    "FIELD4":"http://torontoplaques.com/Pages/Lawren_Harris.html",
    "FIELD5":"43.673451 -79.384310"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.37973,43.66205 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Leafs_Kings_1993_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Leafs Kings 1993",
    "FIELD4":"http://torontoplaques.com/Pages/Leafs_Kings_1993.html",
    "FIELD5":"43.66205 -79.37973"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.36101,43.70202 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Leaside_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Leaside",
    "FIELD4":"http://torontoplaques.com/Pages/Leaside.html",
    "FIELD5":"43.70202 -79.36101"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.36165,43.70608 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Leaside_A_Railway_Town_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Leaside: A Railway Town",
    "FIELD4":"http://torontoplaques.com/Pages/Leaside_A_Railway_Town.html",
    "FIELD5":"43.70608 -79.36165"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.39191,43.66231 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Legislature_of_the_Province_of_Canada_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Legislature of the Province of Canada",
    "FIELD4":"http://torontoplaques.com/Pages/Legislature_of_the_Province_of_Canada.html",
    "FIELD5":"43.66231 -79.39191"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.39172,43.66228 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Lieutenant-General_John_Graves_Simcoe1_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Lieutenant-General John Graves Simcoe",
    "FIELD4":"http://torontoplaques.com/Pages/Lieutenant-General_John_Graves_Simcoe1.html",
    "FIELD5":"43.66228 -79.39172"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.390324,43.662006 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Lieutenant-General_John_Graves_Simcoe2_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Lieutenant-General John Graves Simcoe",
    "FIELD4":"http://torontoplaques.com/Pages/Lieutenant-General_John_Graves_Simcoe2.html",
    "FIELD5":"43.662006 -79.390324"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.355708,43.666434 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Life_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Life: A Mosaic Tile Mural",
    "FIELD4":"http://torontoplaques.com/Pages/Life.html",
    "FIELD5":"43.666434 -79.355708"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.470393,43.633194 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Lion_Monument_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Lion Monument",
    "FIELD4":"http://torontoplaques.com/Pages/Lion_Monument.html",
    "FIELD5":"43.633194 -79.470393"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.388001,43.672722 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Lionel_Conacher_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Lionel Conacher 1900-1954",
    "FIELD4":"http://torontoplaques.com/Pages/Lionel_Conacher.html",
    "FIELD5":"43.672722 -79.388001"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.39387,43.680788 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Lionel_Conacher_Park_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Lionel Conacher Park",
    "FIELD4":"http://torontoplaques.com/Pages/Lionel_Conacher_Park.html",
    "FIELD5":"43.680788 -79.393870"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.39387,43.680788 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Lionel_Pretoria_Conacher_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Lionel Pretoria Conacher (1900-1954)",
    "FIELD4":"http://torontoplaques.com/Pages/Lionel_Pretoria_Conacher.html",
    "FIELD5":"43.680788 -79.393870"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.398515,43.635299 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Little_Norway_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Little Norway",
    "FIELD4":"http://torontoplaques.com/Pages/Little_Norway.html",
    "FIELD5":"43.635299 -79.398515"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.36205,43.653283 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Little_Trinity_Church_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Little Trinity Church",
    "FIELD4":"http://torontoplaques.com/Pages/Little_Trinity_Church.html",
    "FIELD5":"43.653283 -79.36205"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.455023,43.675339 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Local_Rail_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Local Rail and Infrastructure Heritage",
    "FIELD4":"http://torontoplaques.com/Pages/Local_Rail.html",
    "FIELD5":"43.675339 -79.455023"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.379289,43.652853 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Loews_Yonge_Street_and_Winter_Garden_Theatres_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Loew's Yonge Street and Winter Garden",
    "FIELD4":"http://torontoplaques.com/Pages/Loews_Yonge_Street_and_Winter_Garden_Theatres.html",
    "FIELD5":"43.652853 -79.379289"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.525427,43.606274 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Long_Branch_Race_Track_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Long Branch Race Track",
    "FIELD4":"http://torontoplaques.com/Pages/Long_Branch_Race_Track.html",
    "FIELD5":"43.606274 -79.525427"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.42203,43.63283 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Lord_Robert_Baden-Powell_of_Gilwell_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Lord Robert Baden-Powell of Gilwell",
    "FIELD4":"http://torontoplaques.com/Pages/Lord_Robert_Baden-Powell_of_Gilwell.html",
    "FIELD5":"43.63283, -79.42203"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.380684,43.666995 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Lord_Thomson_of_Fleet_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Lord Thomson of Fleet 1894-1976",
    "FIELD4":"http://torontoplaques.com/Pages/Lord_Thomson_of_Fleet.html",
    "FIELD5":"43.666995 -79.380684"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.41114,43.740694 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Loretto_Abbey_Toronto_1928_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Loretto Abbey, Toronto, 1928",
    "FIELD4":"http://torontoplaques.com/Pages/Loretto_Abbey_Toronto_1928.html",
    "FIELD5":"43.740694 -79.411140"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.382617,43.689583 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Loring_Wyle_Studio_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Loring-Wyle Studio",
    "FIELD4":"http://torontoplaques.com/Pages/Loring_Wyle_Studio.html",
    "FIELD5":"43.689583 -79.382617"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.492565,43.651236 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Lost_Village_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Lost Village of Milton Mills",
    "FIELD4":"http://torontoplaques.com/Pages/Lost_Village.html",
    "FIELD5":"43.651236 -79.492565"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.350587,43.653771 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Lower_Don_River_Railway_Crossing_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Lower Don River Railway Crossing",
    "FIELD4":"http://torontoplaques.com/Pages/Lower_Don_River_Railway_Crossing.html",
    "FIELD5":"43.653771, -79.350587"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.39142,43.66242 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Loyalists_In_Upper_Canada_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Loyalists in Upper Canada",
    "FIELD4":"http://torontoplaques.com/Pages/Loyalists_In_Upper_Canada.html",
    "FIELD5":"43.66242 -79.39142"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.384396,43.661166 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Lucius_OBrien_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Lucius O'Brien (1832-1899)",
    "FIELD4":"http://torontoplaques.com/Pages/Lucius_OBrien.html",
    "FIELD5":"43.661166 -79.384396"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.483627,43.642551 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Lucy_Maud_Montgomery_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Lucy Maud Montgomery",
    "FIELD4":"http://torontoplaques.com/Pages/Lucy_Maud_Montgomery.html",
    "FIELD5":"43.642551 -79.483627"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.414265,43.639096 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Lynn_Williams_Street_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Lynn Williams Street",
    "FIELD4":"http://torontoplaques.com/Pages/Lynn_Williams_Street.html",
    "FIELD5":"43.639096 -79.414265"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.360385,43.64526 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/MV_Hiawatha_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"M.V. Hiawatha",
    "FIELD4":"http://torontoplaques.com/Pages/MV_Hiawatha.html",
    "FIELD5":"43.645260 -79.360385"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.39712,43.66143 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Macdonald-Mowat_House_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Macdonald-Mowat House 1872",
    "FIELD4":"http://torontoplaques.com/Pages/Macdonald-Mowat_House.html",
    "FIELD5":"43.661430 -79.397120"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.378227,43.655705 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Mackenzie_House_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Mackenzie House",
    "FIELD4":"http://torontoplaques.com/Pages/Mackenzie_House.html",
    "FIELD5":"43.655705 -79.378227"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.39266,43.66229 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Mackenzie_Papineau_Battalion_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Mackenzie-Papineau Battalion",
    "FIELD4":"http://torontoplaques.com/Pages/Mackenzie_Papineau_Battalion.html",
    "FIELD5":"43.66229 -79.39266"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.401666,43.639537 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Main_East_Gate_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Main (East) Gate",
    "FIELD4":"http://torontoplaques.com/Pages/Main_East_Gate.html",
    "FIELD5":"43.639537 -79.401666"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.412967,43.64547 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Major-General_The_Honourable_Aeneas_Shaw_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Major-General The Honourable Aeneas Shaw",
    "FIELD4":"http://torontoplaques.com/Pages/Major-General_The_Honourable_Aeneas_Shaw.html",
    "FIELD5":"43.645470 -79.412967"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.475484,43.665448 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Maltese_Community_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Maltese Community of Toronto",
    "FIELD4":"http://torontoplaques.com/Pages/Maltese_Community.html",
    "FIELD5":"43.665448 -79.475484"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.372386,43.617098 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Manitou_Road_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Manitou Road",
    "FIELD4":"http://torontoplaques.com/Pages/Manitou_Road.html",
    "FIELD5":"43.617098 -79.372386"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.380048,43.661852 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Maple_Leaf_Gardens3_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Maple Leaf Gardens",
    "FIELD4":"http://torontoplaques.com/Pages/Maple_Leaf_Gardens3.html",
    "FIELD5":"43.661852 -79.380048"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.3802,43.66182 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Maple_Leaf_Gardens_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Maple Leaf Gardens",
    "FIELD4":"http://torontoplaques.com/Pages/Maple_Leaf_Gardens.html",
    "FIELD5":"43.66182, -79.38020"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.37973,43.66205 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Maple_Leaf_Gardens2_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Maple Leaf Gardens 1931-2011",
    "FIELD4":"http://torontoplaques.com/Pages/Maple_Leaf_Gardens2.html",
    "FIELD5":"43.66205 -79.37973"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.543633,43.586631 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Marie_Curtis_Park_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Marie Curtis Park",
    "FIELD4":"http://torontoplaques.com/Pages/Marie_Curtis_Park.html",
    "FIELD5":"43.586631 -79.543633"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.397088,43.63314 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Marilyn_Bell2_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Marilyn Bell",
    "FIELD4":"http://torontoplaques.com/Pages/Marilyn_Bell2.html",
    "FIELD5":"43.633140 -79.397088"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.42663,43.630667 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Marilyn_Bell_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Marilyn Bell",
    "FIELD4":"http://torontoplaques.com/Pages/Marilyn_Bell.html",
    "FIELD5":"43.630667 -79.426630"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.389675,43.665279 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Marshall_McLuhan1_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Marshall McLuhan (1911-1980)",
    "FIELD4":"http://torontoplaques.com/Pages/Marshall_McLuhan1.html",
    "FIELD5":"43.665279 -79.389675"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.389675,43.665279 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Marshall_McLuhan2_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Marshall McLuhan 1911-1980",
    "FIELD4":"http://torontoplaques.com/Pages/Marshall_McLuhan2.html",
    "FIELD5":"43.665279 -79.389675"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.388138,43.659013 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Mary_Agnes_Snively_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Mary Agnes Snively (1847-1933)",
    "FIELD4":"http://torontoplaques.com/Pages/Mary_Agnes_Snively.html",
    "FIELD5":"43.659013 -79.388138"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.373138,43.650058 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Mary_Ann_Shadd_Cary_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Mary Ann Shadd Cary 1823-1893",
    "FIELD4":"http://torontoplaques.com/Pages/Mary_Ann_Shadd_Cary.html",
    "FIELD5":"43.650058 -79.373138"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.376961,43.667241 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Mary_Perram_House_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Mary Perram House 1877",
    "FIELD4":"http://torontoplaques.com/Pages/Mary_Perram_House.html",
    "FIELD5":"43.667241 -79.376961"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.388818,43.656566 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Mary_Pickford_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Mary Pickford",
    "FIELD4":"http://torontoplaques.com/Pages/Mary_Pickford.html",
    "FIELD5":"43.656566 -79.388818"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.379155,43.65418 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Massey_Hall_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Massey Hall",
    "FIELD4":"http://torontoplaques.com/Pages/Massey_Hall.html",
    "FIELD5":"43.654180 -79.379155"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.41273,43.641788 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Massey-Harris_Company_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Massey-Harris Company",
    "FIELD4":"http://torontoplaques.com/Pages/Massey-Harris_Company.html",
    "FIELD5":"43.641788 -79.412730"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.379155,43.65418 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Massey_Music_Hall_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Massey Music Hall",
    "FIELD4":"http://torontoplaques.com/Pages/Massey_Music_Hall.html",
    "FIELD5":"43.654180 -79.379155"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.392267,43.6611 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Maud_Leonora_Menten_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Maud Leonora Menten 1879-1960",
    "FIELD4":"http://torontoplaques.com/Pages/Maud_Leonora_Menten.html",
    "FIELD5":"43.6611 -79.392267"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.377229,43.646976 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/McCausland_Stained_Glass_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"McCausland Stained Glass",
    "FIELD4":"http://torontoplaques.com/Pages/McCausland_Stained_Glass.html",
    "FIELD5":"43.646976 -79.377229"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.254642,43.757527 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/McCowan_Log_House_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The McCowan Log House",
    "FIELD4":"http://torontoplaques.com/Pages/McCowan_Log_House.html",
    "FIELD5":"43.757527 -79.254642"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.382417,43.65991 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/McGill_Street_Arch_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"McGill Street Arch",
    "FIELD4":"http://torontoplaques.com/Pages/McGill_Street_Arch.html",
    "FIELD5":"43.659910 -79.382417"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.38631,43.66165 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/McLaughlin_Motor_Car_Showroom_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"McLaughlin Motor Car Showroom 1925",
    "FIELD4":"http://torontoplaques.com/Pages/McLaughlin_Motor_Car_Showroom.html",
    "FIELD5":"43.66165 -79.38631"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.396251,43.668058 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/McMaster_Hall_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"McMaster Hall",
    "FIELD4":"http://torontoplaques.com/Pages/McMaster_Hall.html",
    "FIELD5":"43.668058 -79.396251"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.40004,43.66785 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Medical_Arts_Building_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Medical Arts Building 1929",
    "FIELD4":"http://torontoplaques.com/Pages/Medical_Arts_Building.html",
    "FIELD5":"43.66785 -79.40004"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.392041,43.662373 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Meetings_of_Parliament_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Meetings of Parliament 1841-1866",
    "FIELD4":"http://torontoplaques.com/Pages/Meetings_of_Parliament.html",
    "FIELD5":"43.662373 -79.392041"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.181246,43.776494 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Melville_Church_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Melville Church",
    "FIELD4":"http://torontoplaques.com/Pages/Melville_Church.html",
    "FIELD5":"43.776494 -79.181246"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.416407,43.644525 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Memorial_Wall_Plaques_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Memorial Wall Plaques",
    "FIELD4":"http://torontoplaques.com/Pages/Memorial_Wall_Plaques.html",
    "FIELD5":"43.644525 -79.416407"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.384444,43.698472 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Merton_Street_Gospel_Mission_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Merton Street Gospel Mission",
    "FIELD4":"http://torontoplaques.com/Pages/Merton_Street_Gospel_Mission.html",
    "FIELD5":"43.698472 -79.384444"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.376361,43.653107 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Metropolitan_United_Church1_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Metropolitan United Church",
    "FIELD4":"http://torontoplaques.com/Pages/Metropolitan_United_Church1.html",
    "FIELD5":"43.653107 -79.376361"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.376361,43.653107 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Metropolitan_United_Church2_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Metropolitan United Church",
    "FIELD4":"http://torontoplaques.com/Pages/Metropolitan_United_Church2.html",
    "FIELD5":"43.653107 -79.376361"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.41876,43.76517 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Michael_Shepard_Residence_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Michael Shepard Residence",
    "FIELD4":"http://torontoplaques.com/Pages/Michael_Shepard_Residence.html",
    "FIELD5":"43.76517 -79.41876"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.378235,43.648996 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Michie_and_Company_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Michie & Company",
    "FIELD4":"http://torontoplaques.com/Pages/Michie_and_Company.html",
    "FIELD5":"43.648996 -79.378235"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.378235,43.648996 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Michies_Grocers_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Michie's Grocers",
    "FIELD4":"http://torontoplaques.com/Pages/Michies_Grocers.html",
    "FIELD5":"43.648996 -79.378235"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.356959,43.694833 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Middle_Mill_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Middle Mill",
    "FIELD4":"http://torontoplaques.com/Pages/Middle_Mill.html",
    "FIELD5":"43.694833 -79.356959"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.409437,43.638125 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Military_Burial_Ground_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Military Burial Ground",
    "FIELD4":"http://torontoplaques.com/Pages/Military_Burial_Ground.html",
    "FIELD5":"43.638125 -79.409437"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.353385,43.632347 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Milton_Acorn_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Milton Acorn and Gwendolyn MacEwen",
    "FIELD4":"http://torontoplaques.com/Pages/Milton_Acorn.html",
    "FIELD5":"43.632347 -79.353385"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.499571,43.651584 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Mississauga_Settlements_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Mississauga Settlements on the Humber River",
    "FIELD4":"http://torontoplaques.com/Pages/Mississauga_Settlements.html",
    "FIELD5":"43.651584 -79.499571"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.411883,43.657153 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Monsignor_Athol_Murray_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Monsignor (Père) Athol Murray 1892-1975",
    "FIELD4":"http://torontoplaques.com/Pages/Monsignor_Athol_Murray.html",
    "FIELD5":"43.657153 -79.411883"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.525716,43.651696 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Montgomerys_Inn_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Montgomery's Inn",
    "FIELD4":"http://torontoplaques.com/Pages/Montgomerys_Inn.html",
    "FIELD5":"43.651696 -79.525716"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.399137,43.709432 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Montgomerys_Tavern_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Montgomery's Tavern",
    "FIELD4":"http://torontoplaques.com/Pages/Montgomerys_Tavern.html",
    "FIELD5":"43.709432 -79.399137"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.37503,43.67349 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Morley_Callaghan_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Morley Callaghan",
    "FIELD4":"http://torontoplaques.com/Pages/Morley_Callaghan.html",
    "FIELD5":"43.673490 -79.375030"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.340014,43.660257 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Morse_Street_Public_School_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Morse Street Public School Junior",
    "FIELD4":"http://torontoplaques.com/Pages/Morse_Street_Public_School.html",
    "FIELD5":"43.660257 -79.340014"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.386145,43.670654 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Moulton_College_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Moulton College",
    "FIELD4":"http://torontoplaques.com/Pages/Moulton_College.html",
    "FIELD5":"43.670654 -79.386145"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.38639,43.713635 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Mount_Hope_Cemetery_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Mount Hope Cemetery 1898",
    "FIELD4":"http://torontoplaques.com/Pages/Mount_Hope_Cemetery.html",
    "FIELD5":"43.713635 -79.38639"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.383683,43.696133 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Mount_Pleasant_Cemetery1_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Mount Pleasant Cemetery",
    "FIELD4":"http://torontoplaques.com/Pages/Mount_Pleasant_Cemetery1.html",
    "FIELD5":"43.696133 -79.383683"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.395055,43.692057 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Mount_Pleasant_Cemetery2_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Mount Pleasant Cemetery",
    "FIELD4":"http://torontoplaques.com/Pages/Mount_Pleasant_Cemetery2.html",
    "FIELD5":"43.692057 -79.395055"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.395055,43.692057 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Mount_Pleasant_Cemetery3_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Mount Pleasant Cemetery",
    "FIELD4":"http://torontoplaques.com/Pages/Mount_Pleasant_Cemetery3.html",
    "FIELD5":"43.692057 -79.395055"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.39226,43.671022 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Mount_Sinai_Hospital_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Mount Sinai Hospital",
    "FIELD4":"http://torontoplaques.com/Pages/Mount_Sinai_Hospital.html",
    "FIELD5":"43.671022 -79.39226"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.419591,43.646502 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Muhammad_Ali_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Muhammad Ali vs. George Chuvalo",
    "FIELD4":"http://torontoplaques.com/Pages/Muhammad_Ali.html",
    "FIELD5":"43.646502 -79.419591"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.381499,43.654623 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Nathan_Taylor_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Nathan A. (Nat) Taylor (1906-2004)",
    "FIELD4":"http://torontoplaques.com/Pages/Nathan_Taylor.html",
    "FIELD5":"43.654623 -79.381499"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.38048,43.649499 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/National_Club_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The National Club",
    "FIELD4":"http://torontoplaques.com/Pages/National_Club.html",
    "FIELD5":"43.649499 -79.380480"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.373125,43.662939 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/National_Council_of_Women_of_Canada_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"National Council of Women of Canada",
    "FIELD4":"http://torontoplaques.com/Pages/National_Council_of_Women_of_Canada.html",
    "FIELD5":"43.662939 -79.373125"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.399931,43.632426 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/National_Yacht_Club_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The National Yacht Club",
    "FIELD4":"http://torontoplaques.com/Pages/National_Yacht_Club.html",
    "FIELD5":"43.632426 -79.399931"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.389449,43.627595 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Ned_Hanlan_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"\"Ned\" Hanlan 1855-1908",
    "FIELD4":"http://torontoplaques.com/Pages/Ned_Hanlan.html",
    "FIELD5":"43.627595 -79.389449"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.382555,43.651877 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/New_City_Hall_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"New City Hall",
    "FIELD4":"http://torontoplaques.com/Pages/New_City_Hall.html",
    "FIELD5":"43.651877 -79.382555"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.502124,43.595032 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/New_Toronto_Filtration_Plant_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"New Toronto Filtration Plant",
    "FIELD4":"http://torontoplaques.com/Pages/New_Toronto_Filtration_Plant.html",
    "FIELD5":"43.595032 -79.502124"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.417237,43.785239 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Newtonbrook_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Newtonbrook",
    "FIELD4":"http://torontoplaques.com/Pages/Newtonbrook.html",
    "FIELD5":"43.785239 -79.417237"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.37973,43.66205 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Nirvana_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Nirvana",
    "FIELD4":"http://torontoplaques.com/Pages/Nirvana.html",
    "FIELD5":"43.66205 -79.37973"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.413408,43.684088 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Nordheimer_Ravine_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Nordheimer Ravine",
    "FIELD4":"http://torontoplaques.com/Pages/Nordheimer_Ravine.html",
    "FIELD5":"43.684088 -79.413408"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.40516,43.67035 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Norman_B_Gash_House_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Norman B. Gash House",
    "FIELD4":"http://torontoplaques.com/Pages/Norman_B_Gash_House.html",
    "FIELD5":"43.67035 -79.40516"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.3761,43.639983 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Noronic_Disaster_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The \"Noronic\" Disaster",
    "FIELD4":"http://torontoplaques.com/Pages/Noronic_Disaster.html",
    "FIELD5":"43.639983 -79.3761"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.37754,43.663848 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Northfield_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Northfield",
    "FIELD4":"http://torontoplaques.com/Pages/Northfield.html",
    "FIELD5":"43.663848 -79.377540"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.41381,43.632791 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/North_West_Mounted_Police_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"North-West Mounted Police",
    "FIELD4":"http://torontoplaques.com/Pages/North_West_Mounted_Police.html",
    "FIELD5":"43.632791 -79.413810"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.307417,43.674526 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Norway_Post_Office_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Norway Post Office",
    "FIELD4":"http://torontoplaques.com/Pages/Norway_Post_Office.html",
    "FIELD5":"43.674526 -79.307417"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.529394,43.606237 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/OConnor-Lafferty_House_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The O'Connor-Lafferty House",
    "FIELD4":"http://torontoplaques.com/Pages/OConnor-Lafferty_House.html",
    "FIELD5":"43.606237 -79.529394"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.372874,43.655681 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/ODonohoe_Row_Walnut_Hall_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"O'Donohoe Row (Walnut Hall)",
    "FIELD4":"http://torontoplaques.com/Pages/ODonohoe_Row_Walnut_Hall.html",
    "FIELD5":"43.655681 -79.372874"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.434264,43.641099 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/OHara_Garden_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"O'Hara Garden",
    "FIELD4":"http://torontoplaques.com/Pages/OHara_Garden.html",
    "FIELD5":"43.641099 -79.434264"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.378849,43.657871 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/OKeefe_House_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"O'Keefe House",
    "FIELD4":"http://torontoplaques.com/Pages/OKeefe_House.html",
    "FIELD5":"43.657871 -79.378849"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.378141,43.657991 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Oakham_House_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Oakham House",
    "FIELD4":"http://torontoplaques.com/Pages/Oakham_House.html",
    "FIELD5":"43.657991 -79.378141"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.279323,43.693095 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Oakridge_Public_School_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Oakridge Public School",
    "FIELD4":"http://torontoplaques.com/Pages/Oakridge_Public_School.html",
    "FIELD5":"43.693095 -79.279323"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.435268,43.679718 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Oakwood_Collegiate_Institute_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Oakwood Collegiate Institute",
    "FIELD4":"http://torontoplaques.com/Pages/Oakwood_Collegiate_Institute.html",
    "FIELD5":"43.679718 -79.435268"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [-79.3811,43.65229]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Old_City_Hall_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"\"Old\" City Hall",
    "FIELD4":"http://torontoplaques.com/Pages/Old_City_Hall.html",
    "FIELD5":"43.65229, -79.38110"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.381716,43.65174 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Old_City_Hall2_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Old City Hall",
    "FIELD4":"http://torontoplaques.com/Pages/Old_City_Hall2.html",
    "FIELD5":"43.651740 -79.381716"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.381049,43.652278 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Old_City_Hall_York_County_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Old City Hall York County Courthouse",
    "FIELD4":"http://torontoplaques.com/Pages/Old_City_Hall_York_County.html",
    "FIELD5":"43.652278 -79.381049"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.188348,43.786362 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Old_Danforth_Road_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Old Danforth Road",
    "FIELD4":"http://torontoplaques.com/Pages/Old_Danforth_Road.html",
    "FIELD5":"43.786362 -79.188348"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.400119,43.642714 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Old_Garrison_Burying_Ground_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Old Garrison Burying Ground",
    "FIELD4":"http://torontoplaques.com/Pages/Old_Garrison_Burying_Ground.html",
    "FIELD5":"43.642714 -79.400119"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.493331,43.650827 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Old_Mill_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"\"The Old Mill\"",
    "FIELD4":"http://torontoplaques.com/Pages/Old_Mill.html",
    "FIELD5":"43.650827 -79.493331"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.257216,43.779213 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Old_Scott_House_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Old Scott House",
    "FIELD4":"http://torontoplaques.com/Pages/Old_Scott_House.html",
    "FIELD5":"43.779213 -79.257216"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.498218,43.665489 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Old_Toll_Gate_House_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Old Toll Gate House",
    "FIELD4":"http://torontoplaques.com/Pages/Old_Toll_Gate_House.html",
    "FIELD5":"43.665489 -79.498218"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.37952,43.659788 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Ontario_College_of_Pharmacy_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Ontario College of Pharmacy",
    "FIELD4":"http://torontoplaques.com/Pages/Ontario_College_of_Pharmacy.html",
    "FIELD5":"43.659788 -79.379520"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.411358,43.771566 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Ontario_Historical_Society_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Ontario Historical Society",
    "FIELD4":"http://torontoplaques.com/Pages/Ontario_Historical_Society.html",
    "FIELD5":"43.771566 -79.411358"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.39013,43.662685 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Ontario_Human_Rights_Code_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Ontario Human Rights Code",
    "FIELD4":"http://torontoplaques.com/Pages/Ontario_Human_Rights_Code.html",
    "FIELD5":"43.662685 -79.39013"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.51835,43.617204 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Ontario_Lakeshore_Asylum_Cemetery_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Ontario Lakeshore Asylum Cemetery c.1890-1979",
    "FIELD4":"http://torontoplaques.com/Pages/Ontario_Lakeshore_Asylum_Cemetery.html",
    "FIELD5":"43.617204 -79.518350"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.386746,43.67167 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Ontario_Library_Association_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Ontario Library Association",
    "FIELD4":"http://torontoplaques.com/Pages/Ontario_Library_Association.html",
    "FIELD5":"43.671670 -79.386746"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.361581,43.663599 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Ontario_Medical_College_for_Women_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Ontario Medical College for Women",
    "FIELD4":"http://torontoplaques.com/Pages/Ontario_Medical_College_for_Women.html",
    "FIELD5":"43.663599 -79.361581"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.467923,43.672502 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Ontario_Stock_Yards_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Ontario Stock Yards",
    "FIELD4":"http://torontoplaques.com/Pages/Ontario_Stock_Yards.html",
    "FIELD5":"43.672502 -79.467923"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.379933,43.65092 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Ontario_Veterinary_College_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Ontario Veterinary College",
    "FIELD4":"http://torontoplaques.com/Pages/Ontario_Veterinary_College.html",
    "FIELD5":"43.650920 -79.379933"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.36325,43.650017 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Ontarios_First_Parliament_Buildings_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Ontario's First Parliament Buildings 1798",
    "FIELD4":"http://torontoplaques.com/Pages/Ontarios_First_Parliament_Buildings.html",
    "FIELD5":"43.650017 -79.36325"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.378785,43.65151 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Original_Site_of_Toronto_Hebrew_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Original Site of Toronto Hebrew Congregation",
    "FIELD4":"http://torontoplaques.com/Pages/Original_Site_of_Toronto_Hebrew.html",
    "FIELD5":"43.651510 -79.378785"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.373249,43.662982 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Oronhyatekha_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Oronhyatekha (Burning Cloud)",
    "FIELD4":"http://torontoplaques.com/Pages/Oronhyatekha.html",
    "FIELD5":"43.662982 -79.373249"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.385383,43.651704 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Osgoode_Hall1_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Osgoode Hall",
    "FIELD4":"http://torontoplaques.com/Pages/Osgoode_Hall1.html",
    "FIELD5":"43.651704 -79.385383"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.385383,43.651704 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Osgoode_Hall2_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Osgoode Hall",
    "FIELD4":"http://torontoplaques.com/Pages/Osgoode_Hall2.html",
    "FIELD5":"43.651704 -79.385383"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.193184,43.745173 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Osterhout_Log_Cabin_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Osterhout Log Cabin",
    "FIELD4":"http://torontoplaques.com/Pages/Osterhout_Log_Cabin.html",
    "FIELD5":"43.745173 -79.193184"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.471651,43.672029 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Our_Industrial_Heritage_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Our Industrial Heritage",
    "FIELD4":"http://torontoplaques.com/Pages/Our_Industrial_Heritage.html",
    "FIELD5":"43.672029 -79.471651"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.352403,43.673823 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Owen_Staples_House_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Owen Staples House and Studio 1904",
    "FIELD4":"http://torontoplaques.com/Pages/Owen_Staples_House.html",
    "FIELD5":"43.673823 -79.352403"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.406282,43.64976 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Oxford_Picture_Frame_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Oxford Picture Frame Co. 1927",
    "FIELD4":"http://torontoplaques.com/Pages/Oxford_Picture_Frame.html",
    "FIELD5":"43.649760 -79.406282"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.472845,43.629871 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Palace_Pier_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Palace Pier",
    "FIELD4":"http://torontoplaques.com/Pages/Palace_Pier.html",
    "FIELD5":"43.629871 -79.472845"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.447192,43.6367 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Palais_Royale_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Palais Royale",
    "FIELD4":"http://torontoplaques.com/Pages/Palais_Royale.html",
    "FIELD5":"43.636700 -79.447192"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.50104,43.7647 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Parsons_Site_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Parsons Site",
    "FIELD4":"http://torontoplaques.com/Pages/Parsons_Site.html",
    "FIELD5":"43.76470 -79.50104"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.3629,43.66759 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Patriots_of_1837_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"\"Patriots of 1837\"",
    "FIELD4":"http://torontoplaques.com/Pages/Patriots_of_1837.html",
    "FIELD5":"43.66759 -79.36290"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.421186,43.643599 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Paul_E_Garfinkel_Park_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Paul E. Garfinkel Park",
    "FIELD4":"http://torontoplaques.com/Pages/Paul_E_Garfinkel_Park.html",
    "FIELD5":"43.643599 -79.421186"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.382154,43.665683 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Paul_Kane_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Paul Kane 1810-1871",
    "FIELD4":"http://torontoplaques.com/Pages/Paul_Kane.html",
    "FIELD5":"43.665683 -79.382154"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.382154,43.665683 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Paul_Kane_Park_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Paul Kane Park",
    "FIELD4":"http://torontoplaques.com/Pages/Paul_Kane_Park.html",
    "FIELD5":"43.665683 -79.382154"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.37207,43.6486 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Paul_Oberman_Walk_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Paul Oberman Walk 1957-2011",
    "FIELD4":"http://torontoplaques.com/Pages/Paul_Oberman_Walk.html",
    "FIELD5":"43.64860 -79.37207"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.396166,43.65935 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Pendarves_Cumberland_House_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Pendarves - Cumberland House",
    "FIELD4":"http://torontoplaques.com/Pages/Pendarves_Cumberland_House.html",
    "FIELD5":"43.659350 -79.396166"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.392927,43.670871 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Penny_Farthing_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Penny Farthing",
    "FIELD4":"http://torontoplaques.com/Pages/Penny_Farthing.html",
    "FIELD5":"43.670871 -79.392927"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.395208,43.666352 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Philosophers_Walk_Amphitheatre_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Philosopher's Walk Amphitheatre",
    "FIELD4":"http://torontoplaques.com/Pages/Philosophers_Walk_Amphitheatre.html",
    "FIELD5":"43.666352 -79.395208"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.38013,43.639767 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Pier_6_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Pier 6",
    "FIELD4":"http://torontoplaques.com/Pages/Pier_6.html",
    "FIELD5":"43.639767 -79.380130"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.39206,43.63713 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Plan_of_Toronto_Bay_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Plan of Toronto Bay",
    "FIELD4":"http://torontoplaques.com/Pages/Plan_of_Toronto_Bay.html",
    "FIELD5":"43.63713 -79.39206"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.3556,43.678293 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Playter_Farmhouse_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Playter Farmhouse",
    "FIELD4":"http://torontoplaques.com/Pages/Playter_Farmhouse.html",
    "FIELD5":"43.678293 -79.355600"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.39135,43.6656 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Pontifical_Institute_of_Mediaeval_Studies_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Pontifical Institute of Mediaeval Studies",
    "FIELD4":"http://torontoplaques.com/Pages/Pontifical_Institute_of_Mediaeval_Studies.html",
    "FIELD5":"43.6656 -79.39135"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.387035,43.670351 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Potters_Field_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Potter's Field of Muddy York",
    "FIELD4":"http://torontoplaques.com/Pages/Potters_Field.html",
    "FIELD5":"43.670351 -79.387035"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.346974,43.659606 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Poulton_Block_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Poulton Block 1885",
    "FIELD4":"http://torontoplaques.com/Pages/Poulton_Block.html",
    "FIELD5":"43.659606 -79.346974"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.367847,43.706298 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Precambrian_Erratic_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Precambrian Erratic",
    "FIELD4":"http://torontoplaques.com/Pages/Precambrian_Erratic.html",
    "FIELD5":"43.706298 -79.367847"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.407519,43.685377 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Primrose_Club_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Primrose Club",
    "FIELD4":"http://torontoplaques.com/Pages/Primrose_Club.html",
    "FIELD5":"43.685377 -79.407519"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.40057,43.661313 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Primrose_Club_Building_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Primrose Club Building (Faculty Club) 1920",
    "FIELD4":"http://torontoplaques.com/Pages/Primrose_Club_Building.html",
    "FIELD5":"43.661313 -79.400570"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.368507,43.673839 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Prince_Edward_Viaduct_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Prince Edward Viaduct",
    "FIELD4":"http://torontoplaques.com/Pages/Prince_Edward_Viaduct.html",
    "FIELD5":"43.673839 -79.368507"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.409448,43.635198 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Princes_Gates_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Princes' Gates",
    "FIELD4":"http://torontoplaques.com/Pages/Princes_Gates3.html",
    "FIELD5":"43.635198 -79.409448"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.409529,43.634822 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Princes_Gates1_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Princes' Gates",
    "FIELD4":"http://torontoplaques.com/Pages/Princes_Gates1.html",
    "FIELD5":"43.634822 -79.409529"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.409689,43.634456 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Princes_Gates2_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Princes' Gates",
    "FIELD4":"http://torontoplaques.com/Pages/Princes_Gates2.html",
    "FIELD5":"43.634456 -79.409689"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.403326,43.691633 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Principal_Patrick_Trench_Johnson_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Principal Patrick Trench Johnson",
    "FIELD4":"http://torontoplaques.com/Pages/Principal_Patrick_Trench_Johnson.html",
    "FIELD5":"43.691633 -79.403326"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.3898,43.66195 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Printers_Strike_of_1872_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Printers' Strike of 1872",
    "FIELD4":"http://torontoplaques.com/Pages/Printers_Strike_of_1872.html",
    "FIELD5":"43.66195 -79.3898"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.45973,43.674231 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Prohibition_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Prohibition",
    "FIELD4":"http://torontoplaques.com/Pages/Prohibition.html",
    "FIELD5":"43.674231 -79.459730"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.450947,43.676229 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Prospect_Cemetery_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Prospect Cemetery",
    "FIELD4":"http://torontoplaques.com/Pages/Prospect_Cemetery.html",
    "FIELD5":"43.676229 -79.450947"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.392692,43.669889 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Public_Transit_in_Yorkville_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Public Transit in Yorkville",
    "FIELD4":"http://torontoplaques.com/Pages/Public_Transit_in_Yorkville.html",
    "FIELD5":"43.669889 -79.392692"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.394766,43.670639 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Purple_Onion_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Purple Onion",
    "FIELD4":"http://torontoplaques.com/Pages/Purple_Onion.html",
    "FIELD5":"43.670639 -79.394766"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.395779,43.668216 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Queen_Alexandra_Gateway1_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Queen Alexandra Gateway",
    "FIELD4":"http://torontoplaques.com/Pages/Queen_Alexandra_Gateway1.html",
    "FIELD5":"43.668216 -79.395779"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.395779,43.668216 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Queen_Alexandra_Gateway2_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Queen Alexandra Gateway",
    "FIELD4":"http://torontoplaques.com/Pages/Queen_Alexandra_Gateway2.html",
    "FIELD5":"43.668216 -79.395779"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.35715,43.63111 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Queen_City_Yacht_Club_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Queen City Yacht Club",
    "FIELD4":"http://torontoplaques.com/Pages/Queen_City_Yacht_Club.html",
    "FIELD5":"43.63111 -79.35715"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.43358,43.641122 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Queen_Gardens_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Queen Gardens",
    "FIELD4":"http://torontoplaques.com/Pages/Queen_Gardens.html",
    "FIELD5":"43.641122 -79.433580"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.507967,43.6881 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Queen_Mary_Hospital_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Queen Mary Hospital",
    "FIELD4":"http://torontoplaques.com/Pages/Queen_Mary_Hospital.html",
    "FIELD5":"43.6881 -79.507967"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.418924,43.643059 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Queen_Street_Mental_Health_Centre_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Queen Street Mental Health Centre",
    "FIELD4":"http://torontoplaques.com/Pages/Queen_Street_Mental_Health_Centre.html",
    "FIELD5":"43.643059 -79.418924"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.391174,43.661509 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Queens_Park1_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Queen's Park",
    "FIELD4":"http://torontoplaques.com/Pages/Queens_Park1.html",
    "FIELD5":"43.661509 -79.391174"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.39247,43.6645 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Queens_Park2_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Queen's Park",
    "FIELD4":"http://torontoplaques.com/Pages/Queens_Park2.html",
    "FIELD5":"43.66450 -79.39247"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.391,43.660809 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Queens_Park_Toronto_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Queen's Park, Toronto",
    "FIELD4":"http://torontoplaques.com/Pages/Queens_Park_Toronto.html",
    "FIELD5":"43.660809 -79.391000"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.38079,43.6394 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Queens_Quay_Terminal_7_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Queen's Quay Terminal",
    "FIELD4":"http://torontoplaques.com/Pages/Queens_Quay_Terminal.html",
    "FIELD5":"43.63940 -79.38079"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.418589,43.631028 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Queens_Rangers_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Queen's Rangers",
    "FIELD4":"http://torontoplaques.com/Pages/Queens_Rangers.html",
    "FIELD5":"43.631028 -79.418589"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.405385,43.636098 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Queens_Wharf_Lighthouse_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Queen's Wharf Lighthouse",
    "FIELD4":"http://torontoplaques.com/Pages/Queens_Wharf_Lighthouse.html",
    "FIELD5":"43.636098 -79.405385"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.472762,43.634703 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Railways_Over_the_Humber_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Railways over the Humber",
    "FIELD4":"http://torontoplaques.com/Pages/Railways_Over_the_Humber.html",
    "FIELD5":"43.634703 -79.472762"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.51459,43.69705 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Raymore_Bridge_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Raymore Bridge",
    "FIELD4":"http://torontoplaques.com/Pages/Raymore_Bridge.html",
    "FIELD5":"43.69705 -79.51459"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.378254,43.64878 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Rebellion_of_1837_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Rebellion of 1837",
    "FIELD4":"http://torontoplaques.com/Pages/Rebellion_of_1837.html",
    "FIELD5":"43.648780 -79.378254"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.4402,43.6738 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Regal_Road_Public_School_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Regal Road Public School",
    "FIELD4":"http://torontoplaques.com/Pages/Regal_Road_Public_School.html",
    "FIELD5":"43.6738 -79.4402"
    }
  },
  
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.374038,43.618647 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Residents_or_Parks_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Residents or Parks",
    "FIELD4":"http://torontoplaques.com/Pages/Residents_or_Parks.html",
    "FIELD5":"43.618647 -79.374038"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.362917,43.667747 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Resting_Place_of_Pioneers1_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Resting Place of Pioneers",
    "FIELD4":"http://torontoplaques.com/Pages/Resting_Place_of_Pioneers1.html",
    "FIELD5":"43.667747 -79.362917"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.39073,43.69598 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Resting_Place_of_Pioneers2_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Resting Place of Pioneers",
    "FIELD4":"http://torontoplaques.com/Pages/Resting_Place_of_Pioneers2.html",
    "FIELD5":"43.69598 -79.39073"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.372487,43.64974 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Return_of_the_Magri_Stecchi_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Return of the Magri Stecchi",
    "FIELD4":"http://torontoplaques.com/Pages/Return_of_the_Magri_Stecchi.html",
    "FIELD5":"43.649740 -79.372487"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.381533,43.654633 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Reverend_Henry_Scadding_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Reverend Henry Scadding",
    "FIELD4":"http://torontoplaques.com/Pages/Reverend_Henry_Scadding.html",
    "FIELD5":"43.654633 -79.381533"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.254754,43.7576 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Rhoda_Skinner_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Rhoda Skinner",
    "FIELD4":"http://torontoplaques.com/Pages/Rhoda_Skinner.html",
    "FIELD5":"43.757600 -79.254754"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.195046,43.762472 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Richard_Eade_House_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Richard Eade House",
    "FIELD4":"http://torontoplaques.com/Pages/Richard_Eade_House.html",
    "FIELD5":"43.762472 -79.195046"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.182597,43.774967 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Richardson_Family_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Richardson Family",
    "FIELD4":"http://torontoplaques.com/Pages/Richardson_Family.html",
    "FIELD5":"43.774967 -79.182597"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.57509,43.670337 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Richview_Cemetery_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Richview Cemetery",
    "FIELD4":"http://torontoplaques.com/Pages/Richview_Cemetery.html",
    "FIELD5":"43.670337 -79.575090"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.415064,43.787311 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Right_Honourable_Lester_Pearson_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Lester B. Pearson",
    "FIELD4":"http://torontoplaques.com/Pages/Right_Honourable_Lester_Pearson.html",
    "FIELD5":"43.787311 -79.415064"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.3907,43.6957 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Right_Honourable_William_Lyon_Mackenzie_King_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"William Lyon Mackenzie King",
    "FIELD4":"http://torontoplaques.com/Pages/Right_Honourable_William_Lyon_Mackenzie_King.html",
    "FIELD5":"43.69570 -79.39070"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.419179,43.66361 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Riot_at_Christie_Pits_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Christie Pits Riots",
    "FIELD4":"http://torontoplaques.com/Pages/Riot_at_Christie_Pits.html",
    "FIELD5":"43.663610 -79.419179"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.393784,43.670688 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Riverboat_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Riverboat",
    "FIELD4":"http://torontoplaques.com/Pages/Riverboat.html",
    "FIELD5":"43.670688 -79.393784"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.352896,43.665605 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Riverdale_Branch_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Riverdale Branch",
    "FIELD4":"http://torontoplaques.com/Pages/Riverdale_Branch.html",
    "FIELD5":"43.665605 -79.352896"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.335113,43.669914 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Riverdale_Collegiate_Institute_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Riverdale Collegiate Institute",
    "FIELD4":"http://torontoplaques.com/Pages/Riverdale_Collegiate_Institute.html",
    "FIELD5":"43.669914 -79.335113"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.347304,43.672023 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Riverdale_Courts_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Riverdale Courts",
    "FIELD4":"http://torontoplaques.com/Pages/Riverdale_Courts.html",
    "FIELD5":"43.672023 -79.347304"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.34496,43.66614 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Riverdale_Heritage_Conservation_District_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Riverdale Heritage Conservation District",
    "FIELD4":"http://torontoplaques.com/Pages/Riverdale_Heritage_Conservation_District.html",
    "FIELD5":"43.66614 -79.34496"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.355022,43.666861 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Riverdale_Hospital2_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Riverdale Hospital",
    "FIELD4":"http://torontoplaques.com/Pages/Riverdale_Hospital2.html",
    "FIELD5":"43.666861 -79.355022"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.353604,43.667274 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Riverdale_Hospital_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Riverdale Hospital",
    "FIELD4":"http://torontoplaques.com/Pages/Riverdale_Hospital.html",
    "FIELD5":"43.667274 -79.353604"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.353164,43.669057 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Riverdale_Park_East_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Riverdale East Park",
    "FIELD4":"http://torontoplaques.com/Pages/Riverdale_Park_East.html",
    "FIELD5":"43.669057 -79.353164"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.345971,43.659831 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Riverdale_Railway_Station_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Riverdale Railway Station",
    "FIELD4":"http://torontoplaques.com/Pages/Riverdale_Railway_Station.html",
    "FIELD5":"43.659831 -79.345971"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.474095,43.634487 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Roads_over_the_Humber_River_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Roads Over the Humber",
    "FIELD4":"http://torontoplaques.com/Pages/Roads_over_the_Humber_River.html",
    "FIELD5":"43.634487 -79.474095"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.39138,43.66228 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Robert_Baldwin_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Robert Baldwin",
    "FIELD4":"http://torontoplaques.com/Pages/Robert_Baldwin.html",
    "FIELD5":"43.66228 -79.39138"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.372852,43.650726 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Robert_Franklin_Hicks_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Robert Franklin Hicks",
    "FIELD4":"http://torontoplaques.com/Pages/Robert_Gourlay.html",
    "FIELD5":"43.650726 -79.372852"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.372852,43.650726 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Robert_Gourlay_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Robert Gourlay",
    "FIELD4":"http://torontoplaques.com/Pages/Robert_Gourlay.html",
    "FIELD5":"43.650726 -79.372852"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.381542,43.652325 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Robert_McCausland_Limited_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Robert McCausland",
    "FIELD4":"http://torontoplaques.com/Pages/Robert_McCausland_Limited.html",
    "FIELD5":"43.652325 -79.381542"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.375963,43.657696 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Robert_Simpson_Co_Mail-Order_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Robert Simpson",
    "FIELD4":"http://torontoplaques.com/Pages/Robert_Simpson_Co_Mail-Order.html",
    "FIELD5":"43.657696 -79.375963"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.376843,43.657479 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Robert_Simpson_Co_Warehouse_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Robert Simpson Co. Warehouse",
    "FIELD4":"http://torontoplaques.com/Pages/Robert_Simpson_Co_Warehouse.html",
    "FIELD5":"43.657479 -79.376843"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.37946,43.652239 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Robert_Simpson_Company_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Robert Simpson Company",
    "FIELD4":"http://torontoplaques.com/Pages/Robert_Simpson_Company.html",
    "FIELD5":"43.652239 -79.37946"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.396842,43.650712 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Robertson_Building_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Robertson Building",
    "FIELD4":"http://torontoplaques.com/Pages/Robertson_Building.html",
    "FIELD5":"43.650712 -79.396842"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.397893,43.678402 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Robertson_Davies_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Robertson Davies",
    "FIELD4":"http://torontoplaques.com/Pages/Robertson_Davies.html",
    "FIELD5":"43.678402 -79.397893"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.323389,43.67373 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Roden_Public_School_Junior_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Roden Public School",
    "FIELD4":"http://torontoplaques.com/Pages/Roden_Public_School_Junior.html",
    "FIELD5":"43.673730 -79.323389"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.323389,43.67373 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Roden_Public_School_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Roden Public School 2",
    "FIELD4":"http://torontoplaques.com/Pages/Roden_Public_School.html",
    "FIELD5":"43.673730 -79.323389"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.38551,43.65406 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Rogers_Batteryless_Radio_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Rogers Battery-less Radio",
    "FIELD4":"http://torontoplaques.com/Pages/Rogers_Batteryless_Radio.html",
    "FIELD5":"43.65406 -79.38551"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [-79.386054,43.671504]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Rolph_Clark_Stone_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Rolph Clark Stone",
    "FIELD4":"http://torontoplaques.com/Pages/Rolph_Clark_Stone.html",
    "FIELD5":"43.662416, -79.340544"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.386054,43.671504 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Rolph_School_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Rolph School",
    "FIELD4":"http://torontoplaques.com/Pages/Rolph_School.html",
    "FIELD5":"43.671504 -79.386054"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.191905,43.747542 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Rosa_and_Spencer_Clark_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Rosa And Spencer Clark",
    "FIELD4":"http://torontoplaques.com/Pages/Rosa_and_Spencer_Clark.html",
    "FIELD5":"43.747542 -79.191905"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.389084,43.686996 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Rose_Hill_Reservoir_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Rose Hill Reservoir",
    "FIELD4":"http://torontoplaques.com/Pages/Rose_Hill_Reservoir.html",
    "FIELD5":"43.686996 -79.389084"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.385367,43.675822 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Rosedale_Villa_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Rosedale Villa",
    "FIELD4":"http://torontoplaques.com/Pages/Rosedale_Villa.html",
    "FIELD5":"43.675822 -79.385367"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.255457,43.698061 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Rosetta_McClain_Gardens_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Rosetta McClain Gardens",
    "FIELD4":"http://torontoplaques.com/Pages/Rosetta_McClain_Gardens.html",
    "FIELD5":"43.698061 -79.255457"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.474819,43.635906 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Rousseaux_Family_and_Early_Toronto_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Rousseaux Family and Early Toronto",
    "FIELD4":"http://torontoplaques.com/Pages/Rousseaux_Family_and_Early_Toronto.html",
    "FIELD5":"43.635906 -79.474819"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.387475,43.647155 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Royal_Alexandra_Theatre2_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Royal Alexandra Theatre 2",
    "FIELD4":"http://torontoplaques.com/Pages/Royal_Alexandra_Theatre2.html",
    "FIELD5":"43.647155 -79.387475"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.387475,43.647155 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Royal_Alexandra_Theatre1_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Royal Alexandra Theatre",
    "FIELD4":"http://torontoplaques.com/Pages/Royal_Alexandra_Theatre1.html",
    "FIELD5":"43.647155 -79.387475"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.413428,43.632849 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Royal_Canadian_Mounted_Police_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"RCMP",
    "FIELD4":"http://torontoplaques.com/Pages/Royal_Canadian_Mounted_Police.html",
    "FIELD5":"43.632849 -79.413428"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.37961,43.64882 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Royal_Canadian_Naval_Volunteer_Reserve_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Royal Canadian Naval Volunteer Reserve",
    "FIELD4":"http://torontoplaques.com/Pages/Royal_Canadian_Naval_Volunteer_Reserve.html",
    "FIELD5":"43.64882 -79.37961"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.365664,43.621351 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Royal_Canadian_Yacht_Club_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Royal Canadian Yacht Club",
    "FIELD4":"http://torontoplaques.com/Pages/Royal_Canadian_Yacht_Club.html",
    "FIELD5":"43.621351 -79.365664"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.376596,43.648078 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Royal_Insurance_Company_of_Canada_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Royal Insurance Company of Canada",
    "FIELD4":"http://torontoplaques.com/Pages/Royal_Insurance_Company_of_Canada.html",
    "FIELD5":"43.648078 -79.376596"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.395747,43.631955 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Royal_Norwegian_Airforce_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Royal Norwegian Air Force",
    "FIELD4":"http://torontoplaques.com/Pages/Royal_Norwegian_Airforce.html",
    "FIELD5":"43.631955 -79.395747"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.392667,43.6624 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Royal_Tour_of_1939_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Royal Tour of 1939",
    "FIELD4":"http://torontoplaques.com/Pages/Royal_Tour_of_1939.html",
    "FIELD5":"43.662400 -79.392667"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.381489,43.645602 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Royal_York_Hotel1_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Royal York Hotel",
    "FIELD4":"http://torontoplaques.com/Pages/Royal_York_Hotel1.html",
    "FIELD5":"43.645602 -79.381489"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.381157,43.645706 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Royal_York_Hotel2_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Royal York Hotel 2",
    "FIELD4":"http://torontoplaques.com/Pages/Royal_York_Hotel2.html",
    "FIELD5":"43.645706 -79.381157"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.382179,43.645273 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Royal_York_Hotel3_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Royal York Hotel 3",
    "FIELD4":"http://torontoplaques.com/Pages/Royal_York_Hotel3.html",
    "FIELD5":"43.645273 -79.382179"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.37973,43.66205 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Royals_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Royals",
    "FIELD4":"http://torontoplaques.com/Pages/Royals.html",
    "FIELD5":"43.66205 -79.37973"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.45023,43.676321 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Royce_Family_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Royce Family Plaque",
    "FIELD4":"http://torontoplaques.com/Pages/Royce_Family.html",
    "FIELD5":"43.676321 -79.450230"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.473853,43.651812 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Runnymede_Branch_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Runnymede Branch",
    "FIELD4":"http://torontoplaques.com/Pages/Runnymede_Branch.html",
    "FIELD5":"43.651812 -79.473853"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.476573,43.650964 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Runnymede_Theatre_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Runnymede Theatre",
    "FIELD4":"http://torontoplaques.com/Pages/Runnymede_Theatre.html",
    "FIELD5":"43.650964 -79.476573"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.364569,43.65567 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Rupert_Hotel_Fire_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Rupert Hotel Fire",
    "FIELD4":"http://torontoplaques.com/Pages/Rupert_Hotel_Fire.html",
    "FIELD5":"43.655670 -79.364569"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.376961,43.667241 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Rupert_Simpson_House_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Rupert Simpson House",
    "FIELD4":"http://torontoplaques.com/Pages/Rupert_Simpson_House.html",
    "FIELD5":"43.667241 -79.376961"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.379167,43.657967 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Ryerson_Polytechnical_Institute_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Ryerson Polytechnical Inn",
    "FIELD4":"http://torontoplaques.com/Pages/Ryerson_Polytechnical_Institute.html",
    "FIELD5":"43.657967 -79.379167"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.359425,43.653769 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Sackville_Street_Public_School_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Sackville Street Public School",
    "FIELD4":"http://torontoplaques.com/Pages/Sackville_Street_Public_School.html",
    "FIELD5":"43.653769 -79.359425"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.372876,43.663368 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Sacre_Coeur_Parish_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Sacré-Cur Parish",
    "FIELD4":"http://torontoplaques.com/Pages/Sacre_Coeur_Parish.html",
    "FIELD5":"43.663368 -79.372876"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.453608,43.663448 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Saint_Josaphats_Ukrainian_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Saint Josaphat's Ukrainian Catholic Cathedral",
    "FIELD4":"http://torontoplaques.com/Pages/Saint_Josaphats_Ukrainian.html",
    "FIELD5":"43.663448 -79.453608"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.171203,43.783148 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Saint_Josephs_Church_Scarborough_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Saint Joseph's Church, Scarborough",
    "FIELD4":"http://torontoplaques.com/Pages/Saint_Josephs_Church_Scarborough.html",
    "FIELD5":"43.783148 -79.171203"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.372804,43.662986 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Saint_Lukes_United_Church_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Saint Luke's United Church Centennial",
    "FIELD4":"http://torontoplaques.com/Pages/Saint_Lukes_United_Church.html",
    "FIELD5":"43.662986 -79.372804"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.396262,43.68606 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Saint_Michaels_Cemetery_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Saint Michael's Cemetery, 1855",
    "FIELD4":"http://torontoplaques.com/Pages/Saint_Michaels_Cemetery.html",
    "FIELD5":"43.686060 -79.396262"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.400843,43.665862 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Saint_Thomass_Anglican_Church_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Saint Thomas's Anglican Church",
    "FIELD4":"http://torontoplaques.com/Pages/Saint_Thomass_Anglican_Church.html",
    "FIELD5":"43.665862 -79.400843"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.382787,43.664259 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Saint_Vincent_de_Paul_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Saint Vincent de Paul Children's Aid Society",
    "FIELD4":"http://torontoplaques.com/Pages/Saint_Vincent_de_Paul.html",
    "FIELD5":"43.664259 -79.382787"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.381086,43.653431 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Salvation_Army_Territorial_Headquarters_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Salvation Army Territorial Headquarters",
    "FIELD4":"http://torontoplaques.com/Pages/Salvation_Army_Territorial_Headquarters.html",
    "FIELD5":"43.653431 -79.381086"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.49548,43.65258 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Samuel_de_Champlain_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Samuel de Champlain's Journeys",
    "FIELD4":"http://torontoplaques.com/Pages/Samuel_de_Champlain.html",
    "FIELD5":"43.65258 -79.49548"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.37589,43.64982 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Samuel_Lount_and_Peter_Matthews_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Samuel Lount and Peter Matthews",
    "FIELD4":"http://torontoplaques.com/Pages/Samuel_Lount_and_Peter_Matthews.html",
    "FIELD5":"43.64982 -79.37589"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.38091,43.65217 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Santa_Claus_Parade_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Santa Claus Parade",
    "FIELD4":"http://torontoplaques.com/Pages/Santa_Claus_Parade.html",
    "FIELD5":"43.65217, -79.38091"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.423996,43.630709 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Scadding_Cabin1_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Scadding Cabin",
    "FIELD4":"http://torontoplaques.com/Pages/Scadding_Cabin1.html",
    "FIELD5":"43.630709 -79.423996"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.423996,43.630709 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Scadding_Cabin2_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Scadding Cabin",
    "FIELD4":"http://torontoplaques.com/Pages/Scadding_Cabin2.html",
    "FIELD5":"43.630709 -79.423996"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.353411,43.657968 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Scadding_Cabin_1794_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Scadding Cabin, 1794",
    "FIELD4":"http://torontoplaques.com/Pages/Scadding_Cabin_1794.html",
    "FIELD5":"43.657968 -79.353411"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.292182,43.668151 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Scarboro_Beach_Amusement_Park_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Scarboro' Beach Amusement Park",
    "FIELD4":"http://torontoplaques.com/Pages/Scarboro_Beach_Amusement_Park.html",
    "FIELD5":"43.668151 -79.292182"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.251554,43.760347 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Scarboro_Centennial_Memorial_Library_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Scarboro' Centennial Memorial Library",
    "FIELD4":"http://torontoplaques.com/Pages/Scarboro_Centennial_Memorial_Library.html",
    "FIELD5":"43.760347 -79.251554"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.23885,43.702283 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Scarborough_Bluffs_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Scarborough Bluffs",
    "FIELD4":"http://torontoplaques.com/Pages/Scarborough_Bluffs.html",
    "FIELD5":"43.702283 -79.23885"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.23718,43.722149 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Scarborough_High_School_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Scarborough High School",
    "FIELD4":"http://torontoplaques.com/Pages/Scarborough_High_School.html",
    "FIELD5":"43.722149 -79.237180"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.267044,43.690018 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Scarborough_Rifle_Company_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Scarborough Rifle Company Marching",
    "FIELD4":"http://torontoplaques.com/Pages/Scarborough_Rifle_Company.html",
    "FIELD5":"43.690018 -79.267044"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.292579,43.727064 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Scarboroughs_Golden_Mile_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Scarborough's \"Golden Mile\"",
    "FIELD4":"http://torontoplaques.com/Pages/Scarboroughs_Golden_Mile.html",
    "FIELD5":"43.727064 -79.292579"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.23079,43.80369 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Scott_Westney_House_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Scott-Westney House circa 1861",
    "FIELD4":"http://torontoplaques.com/Pages/Scott_Westney_House.html",
    "FIELD5":"43.80369 -79.23079"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.406933,43.63415 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Second_Invasion_of_York_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Second Invasion of York 1813",
    "FIELD4":"http://torontoplaques.com/Pages/Second_Invasion_of_York.html",
    "FIELD5":"43.63415 -79.406933"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.41037,43.669439 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/See_House_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"See House 1885-86",
    "FIELD4":"http://torontoplaques.com/Pages/See_House.html",
    "FIELD5":"43.669439 -79.41037"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.386585,43.672692 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Severns_Brewery_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Severn's Brewery",
    "FIELD4":"http://torontoplaques.com/Pages/Severns_Brewery.html",
    "FIELD5":"43.672692 -79.386585"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.199517,43.827402 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Sewells_Road_Bridge_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Sewell's Road Bridge 1912-1981",
    "FIELD4":"http://torontoplaques.com/Pages/Sewells_Road_Bridge.html",
    "FIELD5":"43.827402 -79.199517"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.39513,43.663107 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Sexual_Diversity_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Sexual Diversity Activism at the University",
    "FIELD4":"http://torontoplaques.com/Pages/Sexual_Diversity.html",
    "FIELD5":"43.663107 -79.395130"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.575072,43.631828 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Silverthorn_Family_and_Mill_Farm_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Silverthorn Family and Mill Farm",
    "FIELD4":"http://torontoplaques.com/Pages/Silverthorn_Family_and_Mill_Farm.html",
    "FIELD5":"43.631828 -79.575072"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.460285,43.674176 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Silverthorns_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Silverthorns",
    "FIELD4":"http://torontoplaques.com/Pages/Silverthorns.html",
    "FIELD5":"43.674176 -79.460285"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.361662,43.66722 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Simpson_House_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Simpson House",
    "FIELD4":"http://torontoplaques.com/Pages/Simpson_House.html",
    "FIELD5":"43.667220 -79.361662"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.376875,43.657557 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Simpsons_Mail-Order_Warehouse_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Simpsons Mail-order Warehouse",
    "FIELD4":"http://torontoplaques.com/Pages/Simpsons_Mail-Order_Warehouse.html",
    "FIELD5":"43.657557 -79.376875"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.548472,43.601232 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Sir_Adam_Beck_School_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Sir Adam Beck School and the Summer of '36",
    "FIELD4":"http://torontoplaques.com/Pages/Sir_Adam_Beck_School.html",
    "FIELD5":"43.601232 -79.548472"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.392703,43.652928 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Sir_Byron_Edmund_Walker_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Sir Byron Edmund Walker (1848-1924)",
    "FIELD4":"http://torontoplaques.com/Pages/Sir_Byron_Edmund_Walker.html",
    "FIELD5":"43.652928 -79.392703"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.39672,43.662563 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Sir_Daniel_Wilson_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Sir Daniel Wilson 1816-1892",
    "FIELD4":"http://torontoplaques.com/Pages/Sir_Daniel_Wilson.html",
    "FIELD5":"43.662563 -79.39672"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.379155,43.65418 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Sir_Ernest_MacMillan_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Sir Ernest MacMillan (1893-1973)",
    "FIELD4":"http://torontoplaques.com/Pages/Sir_Ernest_MacMillan.html",
    "FIELD5":"43.654180 -79.379155"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.38946,43.660281 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Sir_Frederick_Banting_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Sir Frederick Banting 1891-1941",
    "FIELD4":"http://torontoplaques.com/Pages/Sir_Frederick_Banting.html",
    "FIELD5":"43.660281 -79.389460"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.391681,43.662385 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Sir_Gordon_Drummond_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Sir Gordon Drummond 1771-1854",
    "FIELD4":"http://torontoplaques.com/Pages/Sir_Gordon_Drummond.html",
    "FIELD5":"43.662385 -79.391681"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.40963,43.67835 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Sir_Henry_Mill_Pellatt_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Sir Henry Mill Pellatt 1859-1939",
    "FIELD4":"http://torontoplaques.com/Pages/Sir_Henry_Mill_Pellatt.html",
    "FIELD5":"43.67835 -79.40963"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.391166,43.661767 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Sir_James_Pliny_Whitney_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Sir James Pliny Whitney 1843-1914",
    "FIELD4":"http://torontoplaques.com/Pages/Sir_James_Pliny_Whitney.html",
    "FIELD5":"43.661767 -79.391166"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.390908,43.660727 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Sir_John_A_Macdonald_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Sir John A. Macdonald 1815-1891",
    "FIELD4":"http://torontoplaques.com/Pages/Sir_John_A_Macdonald.html",
    "FIELD5":"43.660727 -79.390908"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.380312,43.64558 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Sir_John_A_Macdonald_Plaza_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Sir John A. Macdonald Plaza",
    "FIELD4":"http://torontoplaques.com/Pages/Sir_John_A_Macdonald_Plaza.html",
    "FIELD5":"43.645580 -79.380312"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.385741,43.651791 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Sir_John_Beverley_Robinson_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Sir John Beverley Robinson, Bart.",
    "FIELD4":"http://torontoplaques.com/Pages/Sir_John_Beverley_Robinson.html",
    "FIELD5":"43.651791 -79.385741"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.394967,43.660417 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Sir_John_Henry_Lefroy_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Sir John Henry Lefroy 1817-1890",
    "FIELD4":"http://torontoplaques.com/Pages/Sir_John_Henry_Lefroy.html",
    "FIELD5":"43.660417 -79.394967"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.387502,43.663452 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Sir_Oliver_Mowat1_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Sir Oliver Mowat 1820-1903",
    "FIELD4":"http://torontoplaques.com/Pages/Sir_Oliver_Mowat1.html",
    "FIELD5":"43.663452 -79.387502"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.39204,43.661775 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Sir_Oliver_Mowat2_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Sir Oliver Mowat 1820-1903",
    "FIELD4":"http://torontoplaques.com/Pages/Sir_Oliver_Mowat2.html",
    "FIELD5":"43.661775 -79.392040"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.387067,43.65105 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Sir_William_Campbell_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Sir William Campbell 1758-1834",
    "FIELD4":"http://torontoplaques.com/Pages/Sir_William_Campbell.html",
    "FIELD5":"43.65105 -79.387067"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.503658,43.663075 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Sir_William_Pearce_Howland_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Sir William Pearce Howland (1811-1907)",
    "FIELD4":"http://torontoplaques.com/Pages/Sir_William_Pearce_Howland.html",
    "FIELD5":"43.663075 -79.503658"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.422467,43.673742 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Site_of_the_Christie_Street_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Site of the Christie Street Veterans' Hospital",
    "FIELD4":"http://torontoplaques.com/Pages/Site_of_the_Christie_Street.html",
    "FIELD5":"43.673742 -79.422467"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.378281,43.650322 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Site_of_Torontos_First_Moving_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Site of Toronto's First Moving Picture Show",
    "FIELD4":"http://torontoplaques.com/Pages/Site_of_Torontos_First_Moving.html",
    "FIELD5":"43.650322 -79.378281"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.395022,43.663502 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Soldiers_Tower_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Soldiers' Tower",
    "FIELD4":"http://torontoplaques.com/Pages/Soldiers_Tower.html",
    "FIELD5":"43.663502 -79.395022"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.480917,43.647696 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Souster_Steps_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Souster Steps",
    "FIELD4":"http://torontoplaques.com/Pages/Souster_Steps.html",
    "FIELD5":"43.647696 -79.480917"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.408319,43.677709 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Spadina_and_the_Austins_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Spadina and the Austins",
    "FIELD4":"http://torontoplaques.com/Pages/Spadina_and_the_Austins.html",
    "FIELD5":"43.677709 -79.408319"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.403697,43.666634 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Spadina_Expressway1_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Spadina Expressway",
    "FIELD4":"http://torontoplaques.com/Pages/Spadina_Expressway1.html",
    "FIELD5":"43.666634 -79.403697"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.411513,43.684581 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Spadina_Expressway2_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Spadina Expressway",
    "FIELD4":"http://torontoplaques.com/Pages/Spadina_Expressway2.html",
    "FIELD5":"43.684581 -79.411513"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.249486,43.759948 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Springfield_Farm_House_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Springfield Farm House",
    "FIELD4":"http://torontoplaques.com/Pages/Springfield_Farm_House.html",
    "FIELD5":"43.759948 -79.249486"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.362834,43.664259 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Spruce_Court_Apartments_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Spruce Court Apartments 1913",
    "FIELD4":"http://torontoplaques.com/Pages/Spruce_Court_Apartments.html",
    "FIELD5":"43.664259 -79.362834"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.369885,43.620229 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/St_Andrew_by-the-Lake_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"St. Andrew-by-the-Lake",
    "FIELD4":"http://torontoplaques.com/Pages/St_Andrew_by-the-Lake.html",
    "FIELD5":"43.620229 -79.369885"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.385716,43.647353 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/St_Andrews_Church1_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"St. Andrew's Church",
    "FIELD4":"http://torontoplaques.com/Pages/St_Andrews_Church1.html",
    "FIELD5":"43.647353 -79.385716"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.376435,43.662198 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/St_Andrews_Church2_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"St. Andrew's Church",
    "FIELD4":"http://torontoplaques.com/Pages/St_Andrews_Church2.html",
    "FIELD5":"43.662198 -79.376435"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.251659,43.76026 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/St_Andrews_Church3_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"St. Andrew's Church",
    "FIELD4":"http://torontoplaques.com/Pages/St_Andrews_Church3.html",
    "FIELD5":"43.760260 -79.251659"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.251659,43.76026 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/St_Andrews_Church4_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"St. Andrew's Church",
    "FIELD4":"http://torontoplaques.com/Pages/St_Andrews_Church4.html",
    "FIELD5":"43.760260 -79.251659"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.398537,43.646526 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/St_Andrews_Market_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"St. Andrew's Market and Playground",
    "FIELD4":"http://torontoplaques.com/Pages/St_Andrews_Market.html",
    "FIELD5":"43.646526 -79.398537"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.4303,43.650683 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/St_Annes_Anglican_Church_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"St. Anne's Anglican Church",
    "FIELD4":"http://torontoplaques.com/Pages/St_Annes_Anglican_Church.html",
    "FIELD5":"43.650683 -79.4303"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.4303,43.650683 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/St_Annes_Church_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"St. Anne's Church",
    "FIELD4":"http://torontoplaques.com/Pages/St_Annes_Church.html",
    "FIELD5":"43.650683 -79.4303"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.404094,43.65269 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/St_Christopher_House_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"St. Christopher House",
    "FIELD4":"http://torontoplaques.com/Pages/St_Christopher_House.html",
    "FIELD5":"43.652690 -79.404094"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.382154,43.657797 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/St_Georges_Hall_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"St. George's Hall",
    "FIELD4":"http://torontoplaques.com/Pages/St_Georges_Hall.html",
    "FIELD5":"43.657797 -79.382154"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.382154,43.657797 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/St_Georges_Hall_Arts_and_Letters_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"St. George's Hall (Arts and Letters Club)",
    "FIELD4":"http://torontoplaques.com/Pages/St_Georges_Hall_Arts_and_Letters.html",
    "FIELD5":"43.657797 -79.382154"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.521875,43.656466 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/St_Georges_On-The-Hill_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"St. George's On-The-Hill",
    "FIELD4":"http://torontoplaques.com/Pages/St_Georges_On-The-Hill.html",
    "FIELD5":"43.656466 -79.521875"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.369311,43.670005 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/St_Georges_Society_of_Toronto_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The St. George's Society of Toronto",
    "FIELD4":"http://torontoplaques.com/Pages/St_Georges_Society_of_Toronto.html",
    "FIELD5":"43.670005 -79.369311"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.415585,43.648401 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/St_Hildas_College_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"St. Hilda's College",
    "FIELD4":"http://torontoplaques.com/Pages/St_Hildas_College.html",
    "FIELD5":"43.648401 -79.415585"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.37375,43.65025 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/St_James_Cathedral_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"St. James' Cathedral",
    "FIELD4":"http://torontoplaques.com/Pages/St_James_Cathedral.html",
    "FIELD5":"43.65025 -79.37375"
    }
  },
  
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.308608,43.674701 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/St_John_the_Baptist_Norway_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"St. John the Baptist, Norway",
    "FIELD4":"http://torontoplaques.com/Pages/St_John_the_Baptist_Norway.html",
    "FIELD5":"43.674701 -79.308608"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.388771,43.664131 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/St_Josephs_College_School_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"St. Joseph's College School",
    "FIELD4":"http://torontoplaques.com/Pages/St_Josephs_College_School.html",
    "FIELD5":"43.664131 -79.388771"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.33114,43.66509 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/St_Josephs_Leslieville_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"St. Joseph's, Leslieville, 1878",
    "FIELD4":"http://torontoplaques.com/Pages/St_Josephs_Leslieville.html",
    "FIELD5":"43.66509 -79.33114"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.305915,43.738577 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/St_Judes_Church_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"St. Jude's Church",
    "FIELD4":"http://torontoplaques.com/Pages/St_Judes_Church.html",
    "FIELD5":"43.738577 -79.305915"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.372283,43.650252 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/St_Lawrence_Hall1_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"St. Lawrence Hall",
    "FIELD4":"http://torontoplaques.com/Pages/St_Lawrence_Hall1.html",
    "FIELD5":"43.650252 -79.372283"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.372283,43.650252 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/St_Lawrence_Hall2_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"St. Lawrence Hall",
    "FIELD4":"http://torontoplaques.com/Pages/St_Lawrence_Hall2.html",
    "FIELD5":"43.650252 -79.372283"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.372283,43.650252 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/St_Lawrence_Hall_1850_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"St. Lawrence Hall 1850",
    "FIELD4":"http://torontoplaques.com/Pages/St_Lawrence_Hall_1850.html",
    "FIELD5":"43.650252 -79.372283"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.372138,43.650352 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/St_Lawrence_Hall3_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"St. Lawrence Hall 1850",
    "FIELD4":"http://torontoplaques.com/Pages/St_Lawrence_Hall3.html",
    "FIELD5":"43.650352 -79.372138"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.372488,43.648771 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/St_Lawrence_Lofts_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"St. Lawrence Lofts",
    "FIELD4":"http://torontoplaques.com/Pages/St_Lawrence_Lofts.html",
    "FIELD5":"43.648771 -79.372488"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.371917,43.649383 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/St_Lawrence_Market_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"St. Lawrence Market",
    "FIELD4":"http://torontoplaques.com/Pages/St_Lawrence_Market.html",
    "FIELD5":"43.649383 -79.371917"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.193305,43.768309 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/St_Margarets_Church_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"St. Margaret's Church",
    "FIELD4":"http://torontoplaques.com/Pages/St_Margarets_Church.html",
    "FIELD5":"43.768309 -79.193305"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.347253,43.665411 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/St_Matthews_Anglican_Church_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"St. Matthew's Anglican Church 1890",
    "FIELD4":"http://torontoplaques.com/Pages/St_Matthews_Anglican_Church.html",
    "FIELD5":"43.665411 -79.347253"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.353677,43.667607 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/St_Matthews_Lawn_Bowling_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"St. Matthew's Lawn Bowling Clubhouse",
    "FIELD4":"http://torontoplaques.com/Pages/St_Matthews_Lawn_Bowling.html",
    "FIELD5":"43.667607 -79.353677"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.37745,43.6547 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/St_Michaels_Cathedral_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"St. Michael's Cathedral",
    "FIELD4":"http://torontoplaques.com/Pages/St_Michaels_Cathedral.html",
    "FIELD5":"43.6547 -79.37745"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.377122,43.655453 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/St_Michaels_Cathedral_Rectory_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"St. Michael's Cathedral Rectory",
    "FIELD4":"http://torontoplaques.com/Pages/St_Michaels_Cathedral_Rectory.html",
    "FIELD5":"43.655453 -79.377122"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.388,43.665733 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/St_Michaels_College_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"St. Michael's College",
    "FIELD4":"http://torontoplaques.com/Pages/St_Michaels_College.html",
    "FIELD5":"43.665733 -79.388"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.377472,43.653943 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/St_Michaels_Hospital1_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"St. Michael's Hospital",
    "FIELD4":"http://torontoplaques.com/Pages/St_Michaels_Hospital1.html",
    "FIELD5":"43.653943 -79.377472"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.377472,43.653943 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/St_Michaels_Hospital2_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"St. Michael's Hospital",
    "FIELD4":"http://torontoplaques.com/Pages/St_Michaels_Hospital2.html",
    "FIELD5":"43.653943 -79.377472"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.36296,43.655515 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/St_Pauls_Basilica_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"St. Paul's Basilica",
    "FIELD4":"http://torontoplaques.com/Pages/St_Pauls_Basilica.html",
    "FIELD5":"43.655515 -79.362960"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.31601,43.796384 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/St_Pauls_Church_LAmoreaux_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"St. Paul's Church, L'Amoreaux",
    "FIELD4":"http://torontoplaques.com/Pages/St_Pauls_Church_LAmoreaux.html",
    "FIELD5":"43.796384 -79.316010"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.371983,43.663549 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/St_Peters_Anglican_Church_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"St. Peter's Anglican Church",
    "FIELD4":"http://torontoplaques.com/Pages/St_Peters_Anglican_Church.html",
    "FIELD5":"43.663549 -79.371983"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.403987,43.656873 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/St_Stephen-in-the-Fields_Anglican_Church_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"St. Stephen-in-the-Fields Anglican Church",
    "FIELD4":"http://torontoplaques.com/Pages/St_Stephen-in-the-Fields_Anglican_Church.html",
    "FIELD5":"43.656873 -79.403987"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.410703,43.679225 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Stables_of_Sir_Henry_Mill_Pellatt_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Stables of Sir Henry Mill Pellatt's Casa Loma",
    "FIELD4":"http://torontoplaques.com/Pages/Stables_of_Sir_Henry_Mill_Pellatt.html",
    "FIELD5":"43.679225 -79.410703"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.364966,43.650959 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Standard_Woollen_Mills_Building_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Standard Woollen Mills Building",
    "FIELD4":"http://torontoplaques.com/Pages/Standard_Woollen_Mills_Building.html",
    "FIELD5":"43.650959 -79.364966"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.41301,43.63293 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Stanley_Barracks_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Stanley Barracks",
    "FIELD4":"http://torontoplaques.com/Pages/Stanley_Barracks.html",
    "FIELD5":"43.632930 -79.413010"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.47302,43.63646 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Stelco_Swansea_Works_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Stelco Swansea Works",
    "FIELD4":"http://torontoplaques.com/Pages/Stelco_Swansea_Works.html",
    "FIELD5":"43.63646 -79.47302"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.394653,43.66318 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Stewart_Observatory_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Stewart Observatory",
    "FIELD4":"http://torontoplaques.com/Pages/Stewart_Observatory.html",
    "FIELD5":"43.663180 -79.394653"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.389396,43.672737 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Stone_Church_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Stone Church",
    "FIELD4":"http://torontoplaques.com/Pages/Stone_Church.html",
    "FIELD5":"43.672737 -79.389396"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.422096,43.671854 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Story_Behind_672_Dupont_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Story Behind 672 Dupont",
    "FIELD4":"http://torontoplaques.com/Pages/Story_Behind_672_Dupont.html",
    "FIELD5":"43.671854 -79.422096"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.408895,43.638053 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Strachan_Avenue_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Strachan Avenue Military Burying Ground",
    "FIELD4":"http://torontoplaques.com/Pages/Strachan_Avenue.html",
    "FIELD5":"43.638053 -79.408895"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.350592,43.653782 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Straightening_of_the_Don_River_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Straightening of the Don River",
    "FIELD4":"http://torontoplaques.com/Pages/Straightening_of_the_Don_River.html",
    "FIELD5":"43.653782 -79.350592"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.353476,43.658077 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Straightening_The_Don_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Straightening the Don, 1890",
    "FIELD4":"http://torontoplaques.com/Pages/Straightening_The_Don.html",
    "FIELD5":"43.658077 -79.353476"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.428182,43.681173 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Streetcar_Suburb_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Streetcar Suburb",
    "FIELD4":"http://torontoplaques.com/Pages/Streetcar_Suburb.html",
    "FIELD5":"43.681173 -79.428182"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.38611,43.67329 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Studio_Building1_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Studio Building",
    "FIELD4":"http://torontoplaques.com/Pages/Studio_Building1.html",
    "FIELD5":"43.67329 -79.38611"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.38611,43.67329 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Studio_Building2_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Studio Building",
    "FIELD4":"http://torontoplaques.com/Pages/Studio_Building2.html",
    "FIELD5":"43.67329 -79.38611"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.378255,43.721854 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Sunnybrook_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Sunnybrook",
    "FIELD4":"http://torontoplaques.com/Pages/Sunnybrook.html",
    "FIELD5":"43.721854 -79.378255"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.50722,43.64238 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Sunnylea_School_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Sunnylea School",
    "FIELD4":"http://torontoplaques.com/Pages/Sunnylea_School.html",
    "FIELD5":"43.642380 -79.507220"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.456532,43.637879 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Sunnyside_Amusement_Area_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Sunnyside Amusement Area",
    "FIELD4":"http://torontoplaques.com/Pages/Sunnyside_Amusement_Area.html",
    "FIELD5":"43.637879 -79.456532"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.455754,43.637861 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Sunnyside_Amusement_Park_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Sunnyside Amusement Park",
    "FIELD4":"http://torontoplaques.com/Pages/Sunnyside_Amusement_Park.html",
    "FIELD5":"43.637861 -79.455754"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.400441,43.685831 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Sunrise_Park_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"\"Sunrise\" Park",
    "FIELD4":"http://torontoplaques.com/Pages/Sunrise_Park.html",
    "FIELD5":"43.685831 -79.400441"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.234471,43.759797 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Taber_Hill_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Taber Hill",
    "FIELD4":"http://torontoplaques.com/Pages/Taber_Hill.html",
    "FIELD5":"43.759797 -79.234471"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.392845,43.659656 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Taddle_Creek_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Taddle Creek",
    "FIELD4":"http://torontoplaques.com/Pages/Taddle_Creek.html",
    "FIELD5":"43.659656 -79.392845"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.394841,43.66533 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Taddle_Creek_Lost_River_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Taddle Creek 'lost river'",
    "FIELD4":"http://torontoplaques.com/Pages/Taddle_Creek_Lost_River.html",
    "FIELD5":"43.66533 -79.394841"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.583429,43.757354 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Tarmola_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Tarmola, 1927-1968",
    "FIELD4":"http://torontoplaques.com/Pages/Tarmola.html",
    "FIELD5":"43.757354 -79.583429"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.351007,43.693216 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Taylor_Cemetery_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Taylor Cemetery",
    "FIELD4":"http://torontoplaques.com/Pages/Taylor_Cemetery.html",
    "FIELD5":"43.693216 -79.351007"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.382232,43.644514 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Teamway_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Teamway",
    "FIELD4":"http://torontoplaques.com/Pages/Teamway.html",
    "FIELD5":"43.644514 -79.382232"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.501421,43.652897 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Teiaiagon_and_the_Aboriginal_Occupation_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Teiaiagon and the Aboriginal Occupation",
    "FIELD4":"http://torontoplaques.com/Pages/Teiaiagon_and_the_Aboriginal_Occupation.html",
    "FIELD5":"43.652897 -79.501421"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.378737,43.657006 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Theodore_August_Heintzman_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Theodore August Heintzman 1817-1899",
    "FIELD4":"http://torontoplaques.com/Pages/Theodore_August_Heintzman.html",
    "FIELD5":"43.657006 -79.378737"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.35972,43.650415 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/This_Millstone_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"This Millstone",
    "FIELD4":"http://torontoplaques.com/Pages/This_Millstone.html",
    "FIELD5":"43.650415 -79.359720"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.353046,43.674111 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Thomas_Hogarth_House_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Thomas Hogarth House circa 1875",
    "FIELD4":"http://torontoplaques.com/Pages/Thomas_Hogarth_House.html",
    "FIELD5":"43.674111 -79.353046"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.25495,43.757733 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Thomson_Settlement1_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Thomson Settlement",
    "FIELD4":"http://torontoplaques.com/Pages/Thomson_Settlement1.html",
    "FIELD5":"43.757733 -79.25495"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.252281,43.759968 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Thomson_Settlement2_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Thomson Settlement",
    "FIELD4":"http://torontoplaques.com/Pages/Thomson_Settlement2.html",
    "FIELD5":"43.759968 -79.252281"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.359307,43.653664 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Thornton_And_Lucie_Blackburn1_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Thornton and Lucie Blackburn",
    "FIELD4":"http://torontoplaques.com/Pages/Thornton_And_Lucie_Blackburn1.html",
    "FIELD5":"43.653664 -79.359307"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.359307,43.653664 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Thornton_And_Lucie_Blackburn2_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Thornton and Lucie Blackburn",
    "FIELD4":"http://torontoplaques.com/Pages/Thornton_And_Lucie_Blackburn2.html",
    "FIELD5":"43.653664 -79.359307"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.38163,43.657723 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Thornton_Smith_Building_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Thornton-Smith Building 1921",
    "FIELD4":"http://torontoplaques.com/Pages/Thornton_Smith_Building.html",
    "FIELD5":"43.657723 -79.381630"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.380577,43.655216 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Timothy_Eaton_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Timothy Eaton (1834-1907)",
    "FIELD4":"http://torontoplaques.com/Pages/Timothy_Eaton.html",
    "FIELD5":"43.655216 -79.380577"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.521039,43.775056 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/To_the_Memory_of_the_Stong_Pioneer_Family_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"To the Memory of the Stong Pioneer Family",
    "FIELD4":"http://torontoplaques.com/Pages/To_the_Memory_of_the_Stong_Pioneer_Family.html",
    "FIELD5":"43.775056 -79.521039"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.359867,43.686 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Todmorden_Mills_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Todmorden Mills",
    "FIELD4":"http://torontoplaques.com/Pages/Todmorden_Mills.html",
    "FIELD5":"43.686 -79.359867"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.41274,43.76843 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Top_of_the_North_Hill_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Top of the North Hill - 1850's",
    "FIELD4":"http://torontoplaques.com/Pages/Top_of_the_North_Hill.html",
    "FIELD5":"43.76843 -79.41274"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.351931,43.658154 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Toronto_Baseball_Grounds_Sunlight_Park_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Toronto Baseball Grounds (Sunlight Park)",
    "FIELD4":"http://torontoplaques.com/Pages/Toronto_Baseball_Grounds_Sunlight_Park.html",
    "FIELD5":"43.658154 -79.351931"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.472271,43.633091 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Toronto_Carrying_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Toronto Carrying Place",
    "FIELD4":"http://torontoplaques.com/Pages/Toronto_Carrying.html",
    "FIELD5":"43.633091 -79.472271"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.492806,43.655931 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Toronto_Carrying_Place_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Toronto Carrying Place",
    "FIELD4":"http://torontoplaques.com/Pages/Toronto_Carrying_Place.html",
    "FIELD5":"43.655931 -79.492806"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.389383,43.660033 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Toronto_General_Hospital1_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Toronto General Hospital",
    "FIELD4":"http://torontoplaques.com/Pages/Toronto_General_Hospital1.html",
    "FIELD5":"43.660033 -79.389383"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.363491,43.66422 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Toronto_General_Hospital2_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Toronto General Hospital 1856-1913",
    "FIELD4":"http://torontoplaques.com/Pages/Toronto_General_Hospital2.html",
    "FIELD5":"43.664220 -79.363491"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.39344,43.672093 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Toronto_Heliconian_Club_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Toronto Heliconian Club",
    "FIELD4":"http://torontoplaques.com/Pages/Toronto_Heliconian_Club.html",
    "FIELD5":"43.672093 -79.393440"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.3745,43.661833 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Toronto_Horticultural_Society_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Toronto Horticultural Society",
    "FIELD4":"http://torontoplaques.com/Pages/Toronto_Horticultural_Society.html",
    "FIELD5":"43.661833 -79.3745"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.37973,43.66205 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Toronto_Huskies_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Toronto Huskies",
    "FIELD4":"http://torontoplaques.com/Pages/Toronto_Huskies.html",
    "FIELD5":"43.66205 -79.37973"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.367528,43.669721 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Toronto_Irish_Famine_Memorial_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Toronto Irish Famine Memorial",
    "FIELD4":"http://torontoplaques.com/Pages/Toronto_Irish_Famine_Memorial.html",
    "FIELD5":"43.669721 -79.367528"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.356839,43.631241 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Toronto_Island_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Toronto Island",
    "FIELD4":"http://torontoplaques.com/Pages/Toronto_Island.html",
    "FIELD5":"43.631241 -79.356839"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.367145,43.643253 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Toronto_Islands_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Toronto Islands",
    "FIELD4":"http://torontoplaques.com/Pages/Toronto_Islands.html",
    "FIELD5":"43.643253 -79.367145"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.361436,43.6676 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Toronto_Necropolis_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Toronto Necropolis",
    "FIELD4":"http://torontoplaques.com/Pages/Toronto_Necropolis.html",
    "FIELD5":"43.667600 -79.361436"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.361436,43.6676 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Toronto_Necropolis_Chapel_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Toronto Necropolis Chapel",
    "FIELD4":"http://torontoplaques.com/Pages/Toronto_Necropolis_Chapel.html",
    "FIELD5":"43.667600 -79.361436"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.379144,43.658387 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Toronto_Normal_and_Model_School_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Toronto Normal and Model School",
    "FIELD4":"http://torontoplaques.com/Pages/Toronto_Normal_and_Model_School.html",
    "FIELD5":"43.658387 -79.379144"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.378867,43.658117 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Toronto_Normal_School_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Toronto Normal School",
    "FIELD4":"http://torontoplaques.com/Pages/Toronto_Normal_School.html",
    "FIELD5":"43.658117 -79.378867"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.376231,43.649934 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Toronto_Post_Office_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Toronto Post Office 1853-1873",
    "FIELD4":"http://torontoplaques.com/Pages/Toronto_Post_Office.html",
    "FIELD5":"43.649934 -79.376231"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.3785,43.64368 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Toronto_Postal_Delivery_Building_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Toronto Postal Delivery Building",
    "FIELD4":"http://torontoplaques.com/Pages/Toronto_Postal_Delivery_Building.html",
    "FIELD5":"43.64368 -79.37850"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.543633,43.586631 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Toronto_Purchase_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Toronto Purchase",
    "FIELD4":"http://torontoplaques.com/Pages/Toronto_Purchase.html",
    "FIELD5":"43.586631 -79.543633"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.38647,43.64144 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Toronto_Railway_Heritage_Centre_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Toronto Railway Heritage Centre",
    "FIELD4":"http://torontoplaques.com/Pages/Toronto_Railway_Heritage_Centre.html",
    "FIELD5":"43.64144 -79.38647"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.438963,43.63387 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Toronto_Sailing_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Toronto Sailing & Canoe Club",
    "FIELD4":"http://torontoplaques.com/Pages/Toronto_Sailing.html",
    "FIELD5":"43.633870 -79.438963"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.373737,43.649977 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Toronto_Sculpture_Garden_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Toronto Sculpture Garden",
    "FIELD4":"http://torontoplaques.com/Pages/Toronto_Sculpture_Garden.html",
    "FIELD5":"43.649977 -79.373737"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.418345,43.672429 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Toronto_Skating_Club_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Toronto Skating Club",
    "FIELD4":"http://torontoplaques.com/Pages/Toronto_Skating_Club.html",
    "FIELD5":"43.672429 -79.418345"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.38133,43.64811 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Toronto_Dominion_Centre_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Toronto-Dominion Centre",
    "FIELD4":"http://torontoplaques.com/Pages/Toronto_Dominion_Centre.html",
    "FIELD5":"43.64811 -79.38133"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.380311,43.648445 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Toronto_Dominion_Centre2_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Toronto-Dominion Centre",
    "FIELD4":"http://torontoplaques.com/Pages/Toronto_Dominion_Centre2.html",
    "FIELD5":"43.648445 -79.380311"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.38496,43.653749 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Torontos_First_Chinatown_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Toronto's First Chinatown",
    "FIELD4":"http://torontoplaques.com/Pages/Torontos_First_Chinatown.html",
    "FIELD5":"43.653749 -79.38496"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.384283,43.638293 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Torontos_Historic_Waterfront_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Toronto's Historic Waterfront",
    "FIELD4":"http://torontoplaques.com/Pages/Torontos_Historic_Waterfront.html",
    "FIELD5":"43.638293 -79.384283"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.5181,43.76012 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Torontos_Huron_Wendat_Heritage_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Toronto's Huron-Wendat Heritage",
    "FIELD4":"http://torontoplaques.com/Pages/Torontos_Huron_Wendat_Heritage.html",
    "FIELD5":"43.76012 -79.5181"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.38403,43.65336 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Torontos_New_City_Hall_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Toronto's New City Hall",
    "FIELD4":"http://torontoplaques.com/Pages/Torontos_New_City_Hall.html",
    "FIELD5":"43.65336 -79.38403"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.40478,43.734187 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Torontos_Northern_Gateway_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Toronto's Northern Gateway",
    "FIELD4":"http://torontoplaques.com/Pages/Torontos_Northern_Gateway.html",
    "FIELD5":"43.734187 -79.404780"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.440873,43.697708 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Torontos_Reggae_Roots_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Toronto's Reggae Roots",
    "FIELD4":"http://torontoplaques.com/Pages/Torontos_Reggae_Roots.html",
    "FIELD5":"Coordinates: 43.697708 -79.440873"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.39917,43.709738 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Town_of_North_Toronto_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Town of North Toronto - Centenary",
    "FIELD4":"http://torontoplaques.com/Pages/Town_of_North_Toronto.html",
    "FIELD5":"43.709738 -79.399170"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.41274,43.76843 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Traffic_at_Yonge_and_Sheppard_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Traffic at Yonge and Sheppard - 1860's",
    "FIELD4":"http://torontoplaques.com/Pages/Traffic_at_Yonge_and_Sheppard.html",
    "FIELD5":"43.76843 -79.41274"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.51271,43.76228 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Transforming_Village_Life_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Transforming Village Life",
    "FIELD4":"http://torontoplaques.com/Pages/Transforming_Village_Life.html",
    "FIELD5":"43.76228 -79.51271"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.497585,43.699355 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Trethewey_Airfield_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Trethewey Airfield",
    "FIELD4":"http://torontoplaques.com/Pages/Trethewey_Airfield.html",
    "FIELD5":"43.699355 -79.497585"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.375004,43.640439 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Trillium_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Trillium",
    "FIELD4":"http://torontoplaques.com/Pages/Trillium.html",
    "FIELD5":"Coordinates: 43.640439 -79.375004"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.375004,43.640439 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Trillium_Ferry_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Trillium Ferry",
    "FIELD4":"http://torontoplaques.com/Pages/Trillium_Ferry.html",
    "FIELD5":"43.640439 -79.375004"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.413257,43.645423 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Trinity_College_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Trinity College",
    "FIELD4":"http://torontoplaques.com/Pages/Trinity_College.html",
    "FIELD5":"43.645423 -79.413257"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.366447,43.663343 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Trinity_College_Medical_School_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Trinity College Medical School",
    "FIELD4":"http://torontoplaques.com/Pages/Trinity_College_Medical_School.html",
    "FIELD5":"Coordinates: 43.663343 -79.366447"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.369252,43.650291 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Types_Riot_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Types Riot",
    "FIELD4":"http://torontoplaques.com/Pages/Types_Riot.html",
    "FIELD5":"Coordinates: 43.650291 -79.369252"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.518163,43.703956 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Tyrrell_House_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Tyrrell House",
    "FIELD4":"http://torontoplaques.com/Pages/Tyrrell_House.html",
    "FIELD5":"Coordinates: 43.703956 -79.518163"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.413489,43.632904 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Ukrainian_Internments_at_Stanley_Barracks_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Ukrainian Internments at Stanley Barracks",
    "FIELD4":"http://torontoplaques.com/Pages/Ukrainian_Internments_at_Stanley_Barracks.html",
    "FIELD5":"43.632904 -79.413489"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.381392,43.644989 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Union_Station_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Union Station",
    "FIELD4":"http://torontoplaques.com/Pages/Union_Station.html",
    "FIELD5":"43.644989 -79.381392"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.349514,43.657716 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/United_Drug_Company_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"United Drug Company 1914",
    "FIELD4":"http://torontoplaques.com/Pages/United_Drug_Company.html",
    "FIELD5":"43.657716 -79.349514"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.38678,43.65236 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/University_Avenue_Armouries_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"University Avenue Armouries",
    "FIELD4":"http://torontoplaques.com/Pages/University_Avenue_Armouries.html",
    "FIELD5":"Coordinates: 43.65236 -79.38678"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.388065,43.652938 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/University_Club_of_Toronto_Building_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"University Club of Toronto Building 1929",
    "FIELD4":"http://torontoplaques.com/Pages/University_Club_of_Toronto_Building.html",
    "FIELD5":"Coordinates: 43.652938 -79.388065"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.395474,43.66254 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/University_College_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"University College",
    "FIELD4":"http://torontoplaques.com/Pages/University_College.html",
    "FIELD5":"Coordinates: 43.662540 -79.395474"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.4033,43.690867 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Upper_Canada_College_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Upper Canada College",
    "FIELD4":"http://torontoplaques.com/Pages/Upper_Canada_College.html",
    "FIELD5":"Coordinates: 43.690867 -79.4033"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.388798,43.648071 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Upper_Canada_College_Boarding_House_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Upper Canada College Boarding House",
    "FIELD4":"http://torontoplaques.com/Pages/Upper_Canada_College_Boarding_House.html",
    "FIELD5":"Coordinates: 43.648071 -79.388798"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.343,43.61324 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Vicki_Keith_Point_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"#REF!",
    "FIELD4":"http://torontoplaques.com/Pages/Vicki_Keith_Point.html",
    "FIELD5":"43.61324 -79.3430"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.386917,43.660491 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Victoria_Hospital_for_Sick_Children_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"#REF!",
    "FIELD4":"http://torontoplaques.com/Pages/Victoria_Hospital_for_Sick_Children.html",
    "FIELD5":"43.660491 -79.386917"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.400139,43.642633 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Victoria_Memorial_Square_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"#REF!",
    "FIELD4":"http://torontoplaques.com/Pages/Victoria_Memorial_Square.html",
    "FIELD5":"43.642633 -79.400139"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.388913,43.671729 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Village_of_Yorkville_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"#REF!",
    "FIELD4":"http://torontoplaques.com/Pages/Village_of_Yorkville.html",
    "FIELD5":"43.671729 -79.388913"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.388263,43.671843 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Village_of_Yorkville_Plaque_2.jpg",
    "FIELD2":"",
    "FIELD3":"#REF!",
    "FIELD4":"http://torontoplaques.com/Pages/Village_of_Yorkville_Yorkville_Town_Hall.html",
    "FIELD5":"Coordinates: 43.671843 -79.388263"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.393864,43.663688 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Vincent_Massey_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"#REF!",
    "FIELD4":"http://torontoplaques.com/Pages/Vincent_Massey.html",
    "FIELD5":"43.663688 -79.393864"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.522069,43.708036 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Wallace_C_Swanek_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Wallace C. Swanek",
    "FIELD4":"http://torontoplaques.com/Pages/Wallace_C_Swanek.html",
    "FIELD5":"43.708036 -79.522069"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.402997,43.657567 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Walter_Huston_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Walter Huston",
    "FIELD4":"http://torontoplaques.com/Pages/Walter_Huston.html",
    "FIELD5":"43.657567 -79.402997"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.3869,43.651317 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Walter_Seymour_Allward_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Walter Seymour Allward, R.C.A., 1876-1955",
    "FIELD4":"http://torontoplaques.com/Pages/Walter_Seymour_Allward.html",
    "FIELD5":"43.651317 -79.3869"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.378254,43.64878 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/War_of_1812_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The War of 1812 & the Siege of York",
    "FIELD4":"http://torontoplaques.com/Pages/War_of_1812.html",
    "FIELD5":"43.648780 -79.378254"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.40975,43.634467 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Warriors_Day_Parade_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Warriors' Day Parade",
    "FIELD4":"http://torontoplaques.com/Pages/Warriors_Day_Parade.html",
    "FIELD5":"43.634467 -79.40975"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.208272,43.743673 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Washington_Methodist_Church_Cemetery_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Washington Methodist Church Cemetery",
    "FIELD4":"http://torontoplaques.com/Pages/Washington_Methodist_Church_Cemetery.html",
    "FIELD5":"43.743673 -79.208272"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.52689,43.6509 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Welcome_to_Islington_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Welcome to Islington: Village of Murals",
    "FIELD4":"http://torontoplaques.com/Pages/Welcome_to_Islington.html",
    "FIELD5":"43.65090, -79.52689"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.217317,43.782891 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Welcome_to_Morningside_Park_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Welcome to Morningside Park",
    "FIELD4":"http://torontoplaques.com/Pages/Welcome_to_Morningside_Park.html",
    "FIELD5":"43.782891 -79.217317"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.391847,43.664184 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Welcome_to_Queens_Park_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Welcome to Queen's Park",
    "FIELD4":"http://torontoplaques.com/Pages/Welcome_to_Queens_Park.html",
    "FIELD5":"43.664184 -79.391847"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.359931,43.686512 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Welcome_to_Todmorden_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Welcome to Todmorden Mills Heritage Site",
    "FIELD4":"http://torontoplaques.com/Pages/Welcome_to_Todmorden.html",
    "FIELD5":"43.686512 -79.359931"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.376077,43.667571 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Wellesley_Institute_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Wellesley Institute",
    "FIELD4":"http://torontoplaques.com/Pages/Wellesley_Institute.html",
    "FIELD5":"43.667571 -79.376077"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.41119,43.684417 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Wembley_Apartments_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Wembley Apartments 1921",
    "FIELD4":"http://torontoplaques.com/Pages/Wembley_Apartments.html",
    "FIELD5":"43.684417 -79.411190"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.390683,43.649794 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Wesley_Building_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Wesley Building",
    "FIELD4":"http://torontoplaques.com/Pages/Wesley_Building.html",
    "FIELD5":"43.649794 -79.390683"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.169637,43.784147 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Wesleyan_Cemetery_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Wesleyan Cemetery",
    "FIELD4":"http://torontoplaques.com/Pages/Wesleyan_Cemetery.html",
    "FIELD5":"43.784147 -79.169637"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.405956,43.637927 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/West_Curtain_Wall_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"West Curtain Wall and Dry Moat",
    "FIELD4":"http://torontoplaques.com/Pages/West_Curtain_Wall.html",
    "FIELD5":"43.637927 -79.405956"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.422001,43.643452 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/West_End_Y_M_C_A_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"West End Y.M.C.A. 1890",
    "FIELD4":"http://torontoplaques.com/Pages/West_End_Y_M_C_A.html",
    "FIELD5":"43.643452 -79.422001"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.372509,43.649518 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/West_Market_Street_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"West Market Street",
    "FIELD4":"http://torontoplaques.com/Pages/West_Market_Street.html",
    "FIELD5":"43.649518 -79.372509"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.462346,43.662412 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/West_Toronto_Junction1_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"West Toronto Junction",
    "FIELD4":"http://torontoplaques.com/Pages/West_Toronto_Junction1.html",
    "FIELD5":"43.662412 -79.462346"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.467845,43.672444 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/West_Toronto_Junction2_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"West Toronto Junction",
    "FIELD4":"http://torontoplaques.com/Pages/West_Toronto_Junction2.html",
    "FIELD5":"43.672444 -79.467845"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.409396,43.636385 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Western_Battery_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"The Western Battery and The Battle of York",
    "FIELD4":"http://torontoplaques.com/Pages/Western_Battery.html",
    "FIELD5":"43.636385 -79.409396"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.466407,43.663319 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Western_Branch_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Western Branch, Toronto Public Library",
    "FIELD4":"http://torontoplaques.com/Pages/Western_Branch.html",
    "FIELD5":"43.663319 -79.466407"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.520502,43.701734 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Weston_Public_Library_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Weston Public Library",
    "FIELD4":"http://torontoplaques.com/Pages/Weston_Public_Library.html",
    "FIELD5":"43.701734 -79.520502"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.506018,43.694644 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Weston_Road_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Weston Road",
    "FIELD4":"http://torontoplaques.com/Pages/Weston_Road.html",
    "FIELD5":"43.694644 -79.506018"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.31039,43.74143 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Wexford_Cemetery_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Wexford Cemetery",
    "FIELD4":"http://torontoplaques.com/Pages/Wexford_Cemetery.html",
    "FIELD5":"43.74143 -79.31039"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.393883,43.667483 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/William_Arthur_Parks_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"William Arthur Parks 1868-1936",
    "FIELD4":"http://torontoplaques.com/Pages/William_Arthur_Parks.html",
    "FIELD5":"43.667483 -79.393883"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [-79.374498,43.648176]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/William_Berczy_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"William Berczy",
    "FIELD4":"http://torontoplaques.com/Pages/William_Berczy.html",
    "FIELD5":"43.648176, -79.374498"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.397293,43.633865 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/William_Billy_Bishop_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"William \"Billy\" Bishop and William Barker",
    "FIELD4":"http://torontoplaques.com/Pages/William_Billy_Bishop.html",
    "FIELD5":"43.633865 -79.397293"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.326911,43.690955 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/William_Billy_McKay_Jr_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"William (Billy) McKay Jr. (1862-1943)",
    "FIELD4":"http://torontoplaques.com/Pages/William_Billy_McKay_Jr.html",
    "FIELD5":"43.690955 -79.326911"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.35193,43.65359 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/William_Davies_Company_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"William Davies Company",
    "FIELD4":"http://torontoplaques.com/Pages/William_Davies_Company.html",
    "FIELD5":"43.65359 -79.35193"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.298791,43.716116 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/William_Devenish_Home_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"William Devenish Home",
    "FIELD4":"http://torontoplaques.com/Pages/William_Devenish_Home.html",
    "FIELD5":"43.716116 -79.298791"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.38936,43.692489 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/William_George_Barker_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"William George Barker VC 1894-1930",
    "FIELD4":"http://torontoplaques.com/Pages/William_George_Barker.html",
    "FIELD5":"43.692489 -79.389360"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.426133,43.683783 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/William_Hume_Blake_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"William Hume Blake 1809-1870",
    "FIELD4":"http://torontoplaques.com/Pages/William_Hume_Blake.html",
    "FIELD5":"43.683783 -79.426133"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.378227,43.655705 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/William_Lyon_Mackenzie1_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"William Lyon Mackenzie 1795-1861",
    "FIELD4":"http://torontoplaques.com/Pages/William_Lyon_Mackenzie1.html",
    "FIELD5":"43.655705 -79.378227"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.392667,43.6624 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/William_Lyon_Mackenzie2_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"William Lyon Mackenzie 1795-1861",
    "FIELD4":"http://torontoplaques.com/Pages/William_Lyon_Mackenzie2.html",
    "FIELD5":"43.662400 -79.392667"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.394277,43.655212 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/William_Lyon_Mackenzie_King_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"William Lyon Mackenzie King 1874-1950",
    "FIELD4":"http://torontoplaques.com/Pages/William_Lyon_Mackenzie_King.html",
    "FIELD5":"43.655212 -79.394277"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.385383,43.651704 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/William_Osgoode_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"William Osgoode, M.A. (Oxon)",
    "FIELD4":"http://torontoplaques.com/Pages/William_Osgoode.html",
    "FIELD5":"43.651704 -79.385383"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.356922,43.673954 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/William_Peyton_Hubbard_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"William Peyton Hubbard 1842-1935",
    "FIELD4":"http://torontoplaques.com/Pages/William_Peyton_Hubbard.html",
    "FIELD5":"43.673954 -79.356922"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.299284,43.680683 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/William_Stewart_Darling_House_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"William Stewart Darling House 1873-1876",
    "FIELD4":"http://torontoplaques.com/Pages/William_Stewart_Darling_House.html",
    "FIELD5":"43.680683 -79.299284"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.369311,43.670005 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/William_Thomas_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"William Thomas 1799-1860",
    "FIELD4":"http://torontoplaques.com/Pages/William_Thomas.html",
    "FIELD5":"43.670005 -79.369311"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.25812,43.76195 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/William_Thomson_House_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"William Thomson House",
    "FIELD4":"http://torontoplaques.com/Pages/William_Thomson_House.html",
    "FIELD5":"43.76195 -79.25812"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.57509,43.670337 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Willow_Grove_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Willow Grove Burying Ground",
    "FIELD4":"http://torontoplaques.com/Pages/Willow_Grove.html",
    "FIELD5":"43.670337 -79.575090"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.413825,43.773976 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Willowdale1_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Willowdale",
    "FIELD4":"http://torontoplaques.com/Pages/Willowdale1.html",
    "FIELD5":"43.773976 -79.413825"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.413825,43.773976 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Willowdale2_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Willowdale",
    "FIELD4":"http://torontoplaques.com/Pages/Willowdale2.html",
    "FIELD5":"43.773976 -79.413825"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.370459,43.665489 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Winchester_Street_School_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Winchester Street School",
    "FIELD4":"http://torontoplaques.com/Pages/Winchester_Street_School.html",
    "FIELD5":"43.665489 -79.370459"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.38179,43.7417 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Windfields_Estate_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Windfields Estate",
    "FIELD4":"http://torontoplaques.com/Pages/Windfields_Estate.html",
    "FIELD5":"43.74170 -79.38179"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.352177,43.670642 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Withrow_Archaeological_Site_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Withrow Archaeological Site",
    "FIELD4":"http://torontoplaques.com/Pages/Withrow_Archaeological_Site.html",
    "FIELD5":"43.670642 -79.352177"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.352177,43.670642 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Withrow_Avenue_Public_School_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Withrow Avenue Public School Junior",
    "FIELD4":"http://torontoplaques.com/Pages/Withrow_Avenue_Public_School.html",
    "FIELD5":"43.670642 -79.352177"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.39517,43.66307 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Women_at_the_University_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Women at the University of Toronto",
    "FIELD4":"http://torontoplaques.com/Pages/Women_at_the_University.html",
    "FIELD5":"43.663070 -79.395170"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.3884,43.661733 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Womens_College_Hospital_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Women's College Hospital",
    "FIELD4":"http://torontoplaques.com/Pages/Womens_College_Hospital.html",
    "FIELD5":"43.661733 -79.3884"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.398108,43.653662 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Wong_Association_of_Ontario_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Wong Association of Ontario",
    "FIELD4":"http://torontoplaques.com/Pages/Wong_Association_of_Ontario.html",
    "FIELD5":"43.653662 -79.398108"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.37973,43.66205 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Wrestling_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Wrestling",
    "FIELD4":"http://torontoplaques.com/Pages/Wrestling.html",
    "FIELD5":"43.66205 -79.37973"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.42323,43.682147 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Wychwood_Barns_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Wychwood Barns",
    "FIELD4":"http://torontoplaques.com/Pages/Wychwood_Barns.html",
    "FIELD5":"43.682147 -79.423230"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.421894,43.67868 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Wychwood_Park1_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Wychwood Park",
    "FIELD4":"http://torontoplaques.com/Pages/Wychwood_Park1.html",
    "FIELD5":"43.678680 -79.421894"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.423783,43.682132 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Wychwood_Park2_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Wychwood Park",
    "FIELD4":"http://torontoplaques.com/Pages/Wychwood_Park2.html",
    "FIELD5":"43.682132 -79.423783"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.3949,43.664733 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Wycliffe_College_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Wycliffe College",
    "FIELD4":"http://torontoplaques.com/Pages/Wycliffe_College.html",
    "FIELD5":"43.664733 -79.3949"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.374633,43.642023 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Yonge_Street_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Yonge Street 1796",
    "FIELD4":"http://torontoplaques.com/Pages/Yonge_Street.html",
    "FIELD5":"43.642023 -79.374633"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.415714,43.775177 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/York_Cottage_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"York Cottage",
    "FIELD4":"http://torontoplaques.com/Pages/York_Cottage.html",
    "FIELD5":"43.775177 -79.415714"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.372133,43.650501 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/York_Council_Chambers_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"York Council Chambers 1907-1950",
    "FIELD4":"http://torontoplaques.com/Pages/York_Council_Chambers.html",
    "FIELD5":"43.650501 -79.372133"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.38961,43.64665 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/York_Hospital_Site_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"York Hospital Site 1829-1856",
    "FIELD4":"http://torontoplaques.com/Pages/York_Hospital_Site.html",
    "FIELD5":"43.646650 -79.389610"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.374917,43.6514 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/York_Mechanics_Institute_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"York Mechanics' Institute 1830-1882",
    "FIELD4":"http://torontoplaques.com/Pages/York_Mechanics_Institute.html",
    "FIELD5":"43.6514 -79.374917"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.476192,43.69012 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/York_Memorial_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"York Memorial Collegiate Institute",
    "FIELD4":"http://torontoplaques.com/Pages/York_Memorial.html",
    "FIELD5":"43.690120 -79.476192"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.406712,43.744049 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/York_Mills1_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"York Mills",
    "FIELD4":"http://torontoplaques.com/Pages/York_Mills1.html",
    "FIELD5":"43.744049 -79.406712"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.403687,43.743809 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/York_Mills2_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"York Mills",
    "FIELD4":"http://torontoplaques.com/Pages/York_Mills2.html",
    "FIELD5":"43.743809 -79.403687"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.407248,43.744429 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/York_Mills3_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"York Mills",
    "FIELD4":"http://torontoplaques.com/Pages/York_Mills3.html",
    "FIELD5":"43.744429 -79.407248"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.406151,43.740497 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/York_Mills_Presbyterian_Church_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"York Mills Presbyterian Church circa 1836",
    "FIELD4":"http://torontoplaques.com/Pages/York_Mills_Presbyterian_Church.html",
    "FIELD5":"43.740497 -79.406151"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.403858,43.740925 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/York_Mills_Public_School_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"York Mills Public School 50th Anniversary Park",
    "FIELD4":"http://torontoplaques.com/Pages/York_Mills_Public_School.html",
    "FIELD5":"43.740925 -79.403858"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.370792,43.651758 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/York_Post_Office_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"York Post Office",
    "FIELD4":"http://torontoplaques.com/Pages/York_Post_Office.html",
    "FIELD5":"43.651758 -79.370792"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.417645,43.679872 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/York_Wilson_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"York Wilson",
    "FIELD4":"http://torontoplaques.com/Pages/York_Wilson.html",
    "FIELD5":"43.679872 -79.417645"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.375652,43.649588 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Yorks_First_Jail_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"York's First Jail",
    "FIELD4":"http://torontoplaques.com/Pages/Yorks_First_Jail.html",
    "FIELD5":"43.649588 -79.375652"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.388521,43.67176 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Yorkville_Branch_Library_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Yorkville Branch, Toronto Public Library 1907",
    "FIELD4":"http://torontoplaques.com/Pages/Yorkville_Branch_Library.html",
    "FIELD5":"43.671760 -79.388521"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.393545,43.669835 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Yorkvilles_Music_Scene_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Yorkville's Music Scene",
    "FIELD4":"http://torontoplaques.com/Pages/Yorkvilles_Music_Scene.html",
    "FIELD5":"43.669835 -79.393545"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.403837,43.666504 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Young_Mens_Young_Womens_Hebrew_Association_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Young Men's-Young Women's Hebrew Association",
    "FIELD4":"http://torontoplaques.com/Pages/Young_Mens_Young_Womens_Hebrew_Association.html",
    "FIELD5":"43.666504 -79.403837"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -79.290572,43.746514 ]
    },
    "properties": {
    "FIELD1":"http://torontoplaques.com/Graphics/Zion-Wexford_Church_Plaque.jpg",
    "FIELD2":"",
    "FIELD3":"Zion-Wexford Church",
    "FIELD4":"http://torontoplaques.com/Pages/Zion-Wexford_Church.html",
    "FIELD5":"Coordinates: 43.746514 -79.290572"
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
                   '<div class="full-card"><span id="close" onclick="this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode); return false;">x</span><div id="card"><h3>' + currentFeature.properties.FIELD3 + '</h3>' +
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
        
        '<div class="image-frame"><img src="' + currentFeature.properties.FIELD1  +  '"></div>'  +
     
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
      link.innerHTML = prop.FIELD3;
        
      var description = listing.appendChild(document.createElement('div'));
      description.innerHTML = prop.FIELD2;

      var details = listing.appendChild(document.createElement('div'));
      details.innerHTML = prop.FIELD5;
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


