YUI().use('yql', function(Y){
    var query = 'select * from rss(0,30) where url = "http://lithub.com/feed/"'
    var q = Y.YQL(query, function(r){
        //r now contains the result of the YQL Query as a JSON
        var feedmarkup = '<p>'
        var feed = r.query.results.item // get feed as array of entries
        for (var i=0; i<feed.length; i++){
            feedmarkup += '<div class="row">'
            feedmarkup += '<a href="' + feed[i].link + '">'
            feedmarkup += '<h2 class="read">' + feed[i].title  + '<h2>' + '</a>' 
            feedmarkup += '<h4 class="author">' + '<span class="boldby">' + "by " + '</span>' + feed[i].creator + '<a href="http://www.amazon.com/s?url=search-alias%3Daps&field-keywords=' + feed[i].creator + '">' + '<img style="height: 23px; width: 23px; margin-left: 10px; " src="new-icons/amazon.png">' + '</a>' + '</h4>'
            feedmarkup += '<h3>' + feed[i].description + '</h3>' + '</p>' + '</div>'  
            feedmarkup += '<hr>'
        }
        document.getElementById('tapestrylaunch').innerHTML = feedmarkup
        
    })
        //Here is where you can alter what goes in the query
        /*
        q._params.q = 'select * from rss(0,30) where url = "http://rssmix.com/u/8236751/rss.xml"'
        q.send();
        */
})
//THE ANTHILL
YUI().use('yql', function(Y){
    var query = 'select * from rss(0,30) where url = "http://rssmix.com/u/8236762/rss.xml"'
    var q = Y.YQL(query, function(r){
        //r now contains the result of the YQL Query as a JSON
        var feedmarkup = '<p>'
        var feed = r.query.results.item // get feed as array of entries
        for (var i=0; i<feed.length; i++){
            feedmarkup += '<div class="row">'
            feedmarkup += '<a href="' + feed[i].link + '">'
            feedmarkup += '<h2 class="read">' + feed[i].title  + '<h2>' + '</a>' 
            feedmarkup += '<h4 class="author">' + '<span class="boldby">' + "by " + '</span>' + feed[i].creator + '<a href="http://www.amazon.com/s?url=search-alias%3Daps&field-keywords=' + feed[i].author + '">' + '<img style="height: 23px; width: 23px; margin-left: 10px; " src="new-icons/amazon.png">' + '</a>' + '</h4>'
            feedmarkup += '<h3">' + feed[i].description + '</h3>' + '</p>' + '</div>'  
            feedmarkup += '<hr>'
        }
        document.getElementById('anthill-feed').innerHTML = feedmarkup
        
    })
      
})

//American Short Fiction
YUI().use('yql', function(Y){
    var query = 'select * from rss(0,30) where url = "http://rssmix.com/u/8236762/rss.xml"'
    var q = Y.YQL(query, function(r){
        //r now contains the result of the YQL Query as a JSON
        var feedmarkup = '<p>'
        var feed = r.query.results.item // get feed as array of entries
        for (var i=0; i<feed.length; i++){
            feedmarkup += '<div class="row">'
            feedmarkup += '<a href="' + feed[i].link + '">'
            feedmarkup += '<h2 class="read">' + feed[i].title  + '<h2>' + '</a>' 
            feedmarkup += '<h4 class="author">' + '<span class="boldby">' + "by " + '</span>' + feed[i].creator + '<a href="http://www.amazon.com/s?url=search-alias%3Daps&field-keywords=' + feed[i].author + '">' + '<img style="height: 23px; width: 23px; margin-left: 10px; " src="new-icons/amazon.png">' + '</a>' + '</h4>'
            feedmarkup += '<h3">' + feed[i].description + '</h3>' + '</p>' + '</div>'  
            feedmarkup += '<hr>'
        }
        document.getElementById('american-short-fiction-feed').innerHTML = feedmarkup
        
    })
      
})

//Another Chicago Magazine
YUI().use('yql', function(Y){
    var query = 'select * from rss(0,30) where url = "http://rssmix.com/u/8237552/rss.xml"'
    var q = Y.YQL(query, function(r){
        //r now contains the result of the YQL Query as a JSON
        var feedmarkup = '<p>'
        var feed = r.query.results.item // get feed as array of entries
        for (var i=0; i<feed.length; i++){
            feedmarkup += '<div class="row">'
            feedmarkup += '<a href="' + feed[i].link + '">'
            feedmarkup += '<h2 class="read">' + feed[i].title  + '<h2>' + '</a>' 
            feedmarkup += '<h4 class="author">' + '<span class="boldby">' + "by " + '</span>' + feed[i].creator + '<a href="http://www.amazon.com/s?url=search-alias%3Daps&field-keywords=' + feed[i].author + '">' + '<img style="height: 23px; width: 23px; margin-left: 10px; " src="new-icons/amazon.png">' + '</a>' + '</h4>'
            feedmarkup += '<h3">' + feed[i].description + '</h3>' + '</p>' + '</div>'  
            feedmarkup += '<hr>'
        }
        document.getElementById('another-chicago-magazine-feed').innerHTML = feedmarkup
        
    })
      
})

//Appalachian Heritage
YUI().use('yql', function(Y){
    var query = 'select * from rss(0,30) where url = "http://rssmix.com/u/8236762/rss.xml"'
    var q = Y.YQL(query, function(r){
        //r now contains the result of the YQL Query as a JSON
        var feedmarkup = '<p>'
        var feed = r.query.results.item // get feed as array of entries
        for (var i=0; i<feed.length; i++){
            feedmarkup += '<div class="row">'
            feedmarkup += '<a href="' + feed[i].link + '">'
            feedmarkup += '<h2 class="read">' + feed[i].title  + '<h2>' + '</a>' 
            feedmarkup += '<h4 class="author">' + '<span class="boldby">' + "by " + '</span>' + feed[i].creator + '<a href="http://www.amazon.com/s?url=search-alias%3Daps&field-keywords=' + feed[i].author + '">' + '<img style="height: 23px; width: 23px; margin-left: 10px; " src="new-icons/amazon.png">' + '</a>' + '</h4>'
            feedmarkup += '<h3">' + feed[i].description + '</h3>' + '</p>' + '</div>'  
            feedmarkup += '<hr>'
        }
        document.getElementById('appalachian-heritage-feed').innerHTML = feedmarkup
        
    })
      
})

//Asian American Literary Review
YUI().use('yql', function(Y){
    var query = 'select * from rss(0,30) where url = "http://rssmix.com/u/8236762/rss.xml"'
    var q = Y.YQL(query, function(r){
        //r now contains the result of the YQL Query as a JSON
        var feedmarkup = '<p>'
        var feed = r.query.results.item // get feed as array of entries
        for (var i=0; i<feed.length; i++){
            feedmarkup += '<div class="row">'
            feedmarkup += '<a href="' + feed[i].link + '">'
            feedmarkup += '<h2 class="read">' + feed[i].title  + '<h2>' + '</a>' 
            feedmarkup += '<h4 class="author">' + '<span class="boldby">' + "by " + '</span>' + feed[i].creator + '<a href="http://www.amazon.com/s?url=search-alias%3Daps&field-keywords=' + feed[i].author + '">' + '<img style="height: 23px; width: 23px; margin-left: 10px; " src="new-icons/amazon.png">' + '</a>' + '</h4>'
            feedmarkup += '<h3">' + feed[i].description + '</h3>' + '</p>' + '</div>'  
            feedmarkup += '<hr>'
        }
        document.getElementById('asian-american-literary-feed').innerHTML = feedmarkup
        
    })
      
})

//At Length Magazine Feed
YUI().use('yql', function(Y){
    var query = 'select * from rss(0,30) where url = "http://rssmix.com/u/8236762/rss.xml"'
    var q = Y.YQL(query, function(r){
        //r now contains the result of the YQL Query as a JSON
        var feedmarkup = '<p>'
        var feed = r.query.results.item // get feed as array of entries
        for (var i=0; i<feed.length; i++){
            feedmarkup += '<div class="row">'
            feedmarkup += '<a href="' + feed[i].link + '">'
            feedmarkup += '<h2 class="read">' + feed[i].title  + '<h2>' + '</a>' 
            feedmarkup += '<h4 class="author">' + '<span class="boldby">' + "by " + '</span>' + feed[i].creator + '<a href="http://www.amazon.com/s?url=search-alias%3Daps&field-keywords=' + feed[i].author + '">' + '<img style="height: 23px; width: 23px; margin-left: 10px; " src="new-icons/amazon.png">' + '</a>' + '</h4>'
            feedmarkup += '<h3">' + feed[i].description + '</h3>' + '</p>' + '</div>'  
            feedmarkup += '<hr>'
        }
        document.getElementById('at-length-magazine-feed').innerHTML = feedmarkup
        
    })
      
})

//Augury Books
YUI().use('yql', function(Y){
    var query = 'select * from rss(0,30) where url = "http://rssmix.com/u/8236762/rss.xml"'
    var q = Y.YQL(query, function(r){
        //r now contains the result of the YQL Query as a JSON
        var feedmarkup = '<p>'
        var feed = r.query.results.item // get feed as array of entries
        for (var i=0; i<feed.length; i++){
            feedmarkup += '<div class="row">'
            feedmarkup += '<a href="' + feed[i].link + '">'
            feedmarkup += '<h2 class="read">' + feed[i].title  + '<h2>' + '</a>' 
            feedmarkup += '<h4 class="author">' + '<span class="boldby">' + "by " + '</span>' + feed[i].creator + '<a href="http://www.amazon.com/s?url=search-alias%3Daps&field-keywords=' + feed[i].author + '">' + '<img style="height: 23px; width: 23px; margin-left: 10px; " src="new-icons/amazon.png">' + '</a>' + '</h4>'
            feedmarkup += '<h3">' + feed[i].description + '</h3>' + '</p>' + '</div>'  
            feedmarkup += '<hr>'
        }
        document.getElementById('augury-books-feed').innerHTML = feedmarkup
        
    })
      
})

//Bamboo Ridge
YUI().use('yql', function(Y){
    var query = 'select * from rss(0,30) where url = "http://rssmix.com/u/8236762/rss.xml"'
    var q = Y.YQL(query, function(r){
        //r now contains the result of the YQL Query as a JSON
        var feedmarkup = '<p>'
        var feed = r.query.results.item // get feed as array of entries
        for (var i=0; i<feed.length; i++){
            feedmarkup += '<div class="row">'
            feedmarkup += '<a href="' + feed[i].link + '">'
            feedmarkup += '<h2 class="read">' + feed[i].title  + '<h2>' + '</a>' 
            feedmarkup += '<h4 class="author">' + '<span class="boldby">' + "by " + '</span>' + feed[i].creator + '<a href="http://www.amazon.com/s?url=search-alias%3Daps&field-keywords=' + feed[i].author + '">' + '<img style="height: 23px; width: 23px; margin-left: 10px; " src="new-icons/amazon.png">' + '</a>' + '</h4>'
            feedmarkup += '<h3">' + feed[i].description + '</h3>' + '</p>' + '</div>'  
            feedmarkup += '<hr>'
        }
        document.getElementById('Bamboo-Ridge-feed').innerHTML = feedmarkup
        
    })
      
})

//Bellingham Review
YUI().use('yql', function(Y){
    var query = 'select * from rss(0,30) where url = "http://rssmix.com/u/8236762/rss.xml"'
    var q = Y.YQL(query, function(r){
        //r now contains the result of the YQL Query as a JSON
        var feedmarkup = '<p>'
        var feed = r.query.results.item // get feed as array of entries
        for (var i=0; i<feed.length; i++){
            feedmarkup += '<div class="row">'
            feedmarkup += '<a href="' + feed[i].link + '">'
            feedmarkup += '<h2 class="read">' + feed[i].title  + '<h2>' + '</a>' 
            feedmarkup += '<h4 class="author">' + '<span class="boldby">' + "by " + '</span>' + feed[i].creator + '<a href="http://www.amazon.com/s?url=search-alias%3Daps&field-keywords=' + feed[i].author + '">' + '<img style="height: 23px; width: 23px; margin-left: 10px; " src="new-icons/amazon.png">' + '</a>' + '</h4>'
            feedmarkup += '<h3">' + feed[i].description + '</h3>' + '</p>' + '</div>'  
            feedmarkup += '<hr>'
        }
        document.getElementById('Bellingham-Review-feed').innerHTML = feedmarkup
        
    })
      
})

//Blue Mesa Review Feed
YUI().use('yql', function(Y){
    var query = 'select * from rss(0,30) where url = "http://rssmix.com/u/8236762/rss.xml"'
    var q = Y.YQL(query, function(r){
        //r now contains the result of the YQL Query as a JSON
        var feedmarkup = '<p>'
        var feed = r.query.results.item // get feed as array of entries
        for (var i=0; i<feed.length; i++){
            feedmarkup += '<div class="row">'
            feedmarkup += '<a href="' + feed[i].link + '">'
            feedmarkup += '<h2 class="read">' + feed[i].title  + '<h2>' + '</a>' 
            feedmarkup += '<h4 class="author">' + '<span class="boldby">' + "by " + '</span>' + feed[i].creator + '<a href="http://www.amazon.com/s?url=search-alias%3Daps&field-keywords=' + feed[i].author + '">' + '<img style="height: 23px; width: 23px; margin-left: 10px; " src="new-icons/amazon.png">' + '</a>' + '</h4>'
            feedmarkup += '<h3">' + feed[i].description + '</h3>' + '</p>' + '</div>'  
            feedmarkup += '<hr>'
        }
        document.getElementById('Blue-Mesa-Review-feed').innerHTML = feedmarkup
        
    })
      
})

//Buenos Aires Review 
YUI().use('yql', function(Y){
    var query = 'select * from rss(0,30) where url = "http://rssmix.com/u/8236762/rss.xml"'
    var q = Y.YQL(query, function(r){
        //r now contains the result of the YQL Query as a JSON
        var feedmarkup = '<p>'
        var feed = r.query.results.item // get feed as array of entries
        for (var i=0; i<feed.length; i++){
            feedmarkup += '<div class="row">'
            feedmarkup += '<a href="' + feed[i].link + '">'
            feedmarkup += '<h2 class="read">' + feed[i].title  + '<h2>' + '</a>' 
            feedmarkup += '<h4 class="author">' + '<span class="boldby">' + "by " + '</span>' + feed[i].creator + '<a href="http://www.amazon.com/s?url=search-alias%3Daps&field-keywords=' + feed[i].author + '">' + '<img style="height: 23px; width: 23px; margin-left: 10px; " src="new-icons/amazon.png">' + '</a>' + '</h4>'
            feedmarkup += '<h3">' + feed[i].description + '</h3>' + '</p>' + '</div>'  
            feedmarkup += '<hr>'
        }
        document.getElementById('Buenos-Aires-Review-feed').innerHTML = feedmarkup
        
    })
      
})

//Canadian Poetry Review 
YUI().use('yql', function(Y){
    var query = 'select * from rss(0,30) where url = "http://rssmix.com/u/8236762/rss.xml"'
    var q = Y.YQL(query, function(r){
        //r now contains the result of the YQL Query as a JSON
        var feedmarkup = '<p>'
        var feed = r.query.results.item // get feed as array of entries
        for (var i=0; i<feed.length; i++){
            feedmarkup += '<div class="row">'
            feedmarkup += '<a href="' + feed[i].link + '">'
            feedmarkup += '<h2 class="read">' + feed[i].title  + '<h2>' + '</a>' 
            feedmarkup += '<h4 class="author">' + '<span class="boldby">' + "by " + '</span>' + feed[i].creator + '<a href="http://www.amazon.com/s?url=search-alias%3Daps&field-keywords=' + feed[i].author + '">' + '<img style="height: 23px; width: 23px; margin-left: 10px; " src="new-icons/amazon.png">' + '</a>' + '</h4>'
            feedmarkup += '<h3">' + feed[i].description + '</h3>' + '</p>' + '</div>'  
            feedmarkup += '<hr>'
        }
        document.getElementById('canadian-poetry-review-feed').innerHTML = feedmarkup
        
    })
      
})

//Carve Magazine
YUI().use('yql', function(Y){
    var query = 'select * from rss(0,30) where url = "http://rssmix.com/u/8236762/rss.xml"'
    var q = Y.YQL(query, function(r){
        //r now contains the result of the YQL Query as a JSON
        var feedmarkup = '<p>'
        var feed = r.query.results.item // get feed as array of entries
        for (var i=0; i<feed.length; i++){
            feedmarkup += '<div class="row">'
            feedmarkup += '<a href="' + feed[i].link + '">'
            feedmarkup += '<h2 class="read">' + feed[i].title  + '<h2>' + '</a>' 
            feedmarkup += '<h4 class="author">' + '<span class="boldby">' + "by " + '</span>' + feed[i].creator + '<a href="http://www.amazon.com/s?url=search-alias%3Daps&field-keywords=' + feed[i].author + '">' + '<img style="height: 23px; width: 23px; margin-left: 10px; " src="new-icons/amazon.png">' + '</a>' + '</h4>'
            feedmarkup += '<h3">' + feed[i].description + '</h3>' + '</p>' + '</div>'  
            feedmarkup += '<hr>'
        }
        document.getElementById('carve-magazine-feed').innerHTML = feedmarkup
        
    })
      
})

//Chelsea Station
YUI().use('yql', function(Y){
    var query = 'select * from rss(0,30) where url = "http://rssmix.com/u/8236762/rss.xml"'
    var q = Y.YQL(query, function(r){
        //r now contains the result of the YQL Query as a JSON
        var feedmarkup = '<p>'
        var feed = r.query.results.item // get feed as array of entries
        for (var i=0; i<feed.length; i++){
            feedmarkup += '<div class="row">'
            feedmarkup += '<a href="' + feed[i].link + '">'
            feedmarkup += '<h2 class="read">' + feed[i].title  + '<h2>' + '</a>' 
            feedmarkup += '<h4 class="author">' + '<span class="boldby">' + "by " + '</span>' + feed[i].creator + '<a href="http://www.amazon.com/s?url=search-alias%3Daps&field-keywords=' + feed[i].author + '">' + '<img style="height: 23px; width: 23px; margin-left: 10px; " src="new-icons/amazon.png">' + '</a>' + '</h4>'
            feedmarkup += '<h3">' + feed[i].description + '</h3>' + '</p>' + '</div>'  
            feedmarkup += '<hr>'
        }
        document.getElementById('chelsea-station-feed').innerHTML = feedmarkup
        
    })
      
})

//Chicago Literary Mag
YUI().use('yql', function(Y){
    var query = 'select * from rss(0,30) where url = "http://rssmix.com/u/8236762/rss.xml"'
    var q = Y.YQL(query, function(r){
        //r now contains the result of the YQL Query as a JSON
        var feedmarkup = '<p>'
        var feed = r.query.results.item // get feed as array of entries
        for (var i=0; i<feed.length; i++){
            feedmarkup += '<div class="row">'
            feedmarkup += '<a href="' + feed[i].link + '">'
            feedmarkup += '<h2 class="read">' + feed[i].title  + '<h2>' + '</a>' 
            feedmarkup += '<h4 class="author">' + '<span class="boldby">' + "by " + '</span>' + feed[i].creator + '<a href="http://www.amazon.com/s?url=search-alias%3Daps&field-keywords=' + feed[i].author + '">' + '<img style="height: 23px; width: 23px; margin-left: 10px; " src="new-icons/amazon.png">' + '</a>' + '</h4>'
            feedmarkup += '<h3">' + feed[i].description + '</h3>' + '</p>' + '</div>'  
            feedmarkup += '<hr>'
        }
        document.getElementById('chicago-literary-magazine-feed').innerHTML = feedmarkup
        
    })
      
})

//Colorado Review
YUI().use('yql', function(Y){
    var query = 'select * from rss(0,30) where url = "http://rssmix.com/u/8236762/rss.xml"'
    var q = Y.YQL(query, function(r){
        //r now contains the result of the YQL Query as a JSON
        var feedmarkup = '<p>'
        var feed = r.query.results.item // get feed as array of entries
        for (var i=0; i<feed.length; i++){
            feedmarkup += '<div class="row">'
            feedmarkup += '<a href="' + feed[i].link + '">'
            feedmarkup += '<h2 class="read">' + feed[i].title  + '<h2>' + '</a>' 
            feedmarkup += '<h4 class="author">' + '<span class="boldby">' + "by " + '</span>' + feed[i].creator + '<a href="http://www.amazon.com/s?url=search-alias%3Daps&field-keywords=' + feed[i].author + '">' + '<img style="height: 23px; width: 23px; margin-left: 10px; " src="new-icons/amazon.png">' + '</a>' + '</h4>'
            feedmarkup += '<h3">' + feed[i].description + '</h3>' + '</p>' + '</div>'  
            feedmarkup += '<hr>'
        }
        document.getElementById('colorado-review-feed').innerHTML = feedmarkup
        
    })
      
    
})
//Copper Nickel
YUI().use('yql', function(Y){
    var query = 'select * from rss(0,30) where url = "http://rssmix.com/u/8236762/rss.xml"'
    var q = Y.YQL(query, function(r){
        //r now contains the result of the YQL Query as a JSON
        var feedmarkup = '<p>'
        var feed = r.query.results.item // get feed as array of entries
        for (var i=0; i<feed.length; i++){
            feedmarkup += '<div class="row">'
            feedmarkup += '<a href="' + feed[i].link + '">'
            feedmarkup += '<h2 class="read">' + feed[i].title  + '<h2>' + '</a>' 
            feedmarkup += '<h4 class="author">' + '<span class="boldby">' + "by " + '</span>' + feed[i].creator + '<a href="http://www.amazon.com/s?url=search-alias%3Daps&field-keywords=' + feed[i].author + '">' + '<img style="height: 23px; width: 23px; margin-left: 10px; " src="new-icons/amazon.png">' + '</a>' + '</h4>'
            feedmarkup += '<h3">' + feed[i].description + '</h3>' + '</p>' + '</div>'  
            feedmarkup += '<hr>'
        }
        document.getElementById('copper-nickel-feed').innerHTML = feedmarkup
        
    })
      
})

//Echolocation Mag
YUI().use('yql', function(Y){
    var query = 'select * from rss(0,30) where url = "http://rssmix.com/u/8236762/rss.xml"'
    var q = Y.YQL(query, function(r){
        //r now contains the result of the YQL Query as a JSON
        var feedmarkup = '<p>'
        var feed = r.query.results.item // get feed as array of entries
        for (var i=0; i<feed.length; i++){
            feedmarkup += '<div class="row">'
            feedmarkup += '<a href="' + feed[i].link + '">'
            feedmarkup += '<h2 class="read">' + feed[i].title  + '<h2>' + '</a>' 
            feedmarkup += '<h4 class="author">' + '<span class="boldby">' + "by " + '</span>' + feed[i].creator + '<a href="http://www.amazon.com/s?url=search-alias%3Daps&field-keywords=' + feed[i].author + '">' + '<img style="height: 23px; width: 23px; margin-left: 10px; " src="new-icons/amazon.png">' + '</a>' + '</h4>'
            feedmarkup += '<h3">' + feed[i].description + '</h3>' + '</p>' + '</div>'  
            feedmarkup += '<hr>'
        }
        document.getElementById('echolocation-magazine-feed').innerHTML = feedmarkup
        
    })
      
})


//Eighteen Bridges
YUI().use('yql', function(Y){
    var query = 'select * from rss(0,30) where url = "http://rssmix.com/u/8236762/rss.xml"'
    var q = Y.YQL(query, function(r){
        //r now contains the result of the YQL Query as a JSON
        var feedmarkup = '<p>'
        var feed = r.query.results.item // get feed as array of entries
        for (var i=0; i<feed.length; i++){
            feedmarkup += '<div class="row">'
            feedmarkup += '<a href="' + feed[i].link + '">'
            feedmarkup += '<h2 class="read">' + feed[i].title  + '<h2>' + '</a>' 
            feedmarkup += '<h4 class="author">' + '<span class="boldby">' + "by " + '</span>' + feed[i].creator + '<a href="http://www.amazon.com/s?url=search-alias%3Daps&field-keywords=' + feed[i].author + '">' + '<img style="height: 23px; width: 23px; margin-left: 10px; " src="new-icons/amazon.png">' + '</a>' + '</h4>'
            feedmarkup += '<h3">' + feed[i].description + '</h3>' + '</p>' + '</div>'  
            feedmarkup += '<hr>'
        }
        document.getElementById('eighteen-bridges-feed').innerHTML = feedmarkup
        
    })
      
})


//Electric Literature
YUI().use('yql', function(Y){
    var query = 'select * from rss(0,30) where url = "http://rssmix.com/u/8236762/rss.xml"'
    var q = Y.YQL(query, function(r){
        //r now contains the result of the YQL Query as a JSON
        var feedmarkup = '<p>'
        var feed = r.query.results.item // get feed as array of entries
        for (var i=0; i<feed.length; i++){
            feedmarkup += '<div class="row">'
            feedmarkup += '<a href="' + feed[i].link + '">'
            feedmarkup += '<h2 class="read">' + feed[i].title  + '<h2>' + '</a>' 
            feedmarkup += '<h4 class="author">' + '<span class="boldby">' + "by " + '</span>' + feed[i].creator + '<a href="http://www.amazon.com/s?url=search-alias%3Daps&field-keywords=' + feed[i].author + '">' + '<img style="height: 23px; width: 23px; margin-left: 10px; " src="new-icons/amazon.png">' + '</a>' + '</h4>'
            feedmarkup += '<h3">' + feed[i].description + '</h3>' + '</p>' + '</div>'  
            feedmarkup += '<hr>'
        }
        document.getElementById('electric-literature-feed').innerHTML = feedmarkup
        
    })
      
})

//Escape Pod
YUI().use('yql', function(Y){
    var query = 'select * from rss(0,30) where url = "http://rssmix.com/u/8236762/rss.xml"'
    var q = Y.YQL(query, function(r){
        //r now contains the result of the YQL Query as a JSON
        var feedmarkup = '<p>'
        var feed = r.query.results.item // get feed as array of entries
        for (var i=0; i<feed.length; i++){
            feedmarkup += '<div class="row">'
            feedmarkup += '<a href="' + feed[i].link + '">'
            feedmarkup += '<h2 class="read">' + feed[i].title  + '<h2>' + '</a>' 
            feedmarkup += '<h4 class="author">' + '<span class="boldby">' + "by " + '</span>' + feed[i].creator + '<a href="http://www.amazon.com/s?url=search-alias%3Daps&field-keywords=' + feed[i].author + '">' + '<img style="height: 23px; width: 23px; margin-left: 10px; " src="new-icons/amazon.png">' + '</a>' + '</h4>'
            feedmarkup += '<h3">' + feed[i].description + '</h3>' + '</p>' + '</div>'  
            feedmarkup += '<hr>'
        }
        document.getElementById('escape-pod-feed').innerHTML = feedmarkup
        
    })
      
})

//Every Writers Resource
YUI().use('yql', function(Y){
    var query = 'select * from rss(0,30) where url = "http://rssmix.com/u/8236762/rss.xml"'
    var q = Y.YQL(query, function(r){
        //r now contains the result of the YQL Query as a JSON
        var feedmarkup = '<p>'
        var feed = r.query.results.item // get feed as array of entries
        for (var i=0; i<feed.length; i++){
            feedmarkup += '<div class="row">'
            feedmarkup += '<a href="' + feed[i].link + '">'
            feedmarkup += '<h2 class="read">' + feed[i].title  + '<h2>' + '</a>' 
            feedmarkup += '<h4 class="author">' + '<span class="boldby">' + "by " + '</span>' + feed[i].creator + '<a href="http://www.amazon.com/s?url=search-alias%3Daps&field-keywords=' + feed[i].author + '">' + '<img style="height: 23px; width: 23px; margin-left: 10px; " src="new-icons/amazon.png">' + '</a>' + '</h4>'
            feedmarkup += '<h3">' + feed[i].description + '</h3>' + '</p>' + '</div>'  
            feedmarkup += '<hr>'
        }
        document.getElementById('every-writers-resource').innerHTML = feedmarkup
        
    })
      
})


//feathertale
YUI().use('yql', function(Y){
    var query = 'select * from rss(0,30) where url = "http://rssmix.com/u/8236762/rss.xml"'
    var q = Y.YQL(query, function(r){
        //r now contains the result of the YQL Query as a JSON
        var feedmarkup = '<p>'
        var feed = r.query.results.item // get feed as array of entries
        for (var i=0; i<feed.length; i++){
            feedmarkup += '<div class="row">'
            feedmarkup += '<a href="' + feed[i].link + '">'
            feedmarkup += '<h2 class="read">' + feed[i].title  + '<h2>' + '</a>' 
            feedmarkup += '<h4 class="author">' + '<span class="boldby">' + "by " + '</span>' + feed[i].creator + '<a href="http://www.amazon.com/s?url=search-alias%3Daps&field-keywords=' + feed[i].author + '">' + '<img style="height: 23px; width: 23px; margin-left: 10px; " src="new-icons/amazon.png">' + '</a>' + '</h4>'
            feedmarkup += '<h3">' + feed[i].description + '</h3>' + '</p>' + '</div>'  
            feedmarkup += '<hr>'
        }
        document.getElementById('feathertale-feed').innerHTML = feedmarkup
        
    })
      
})

//Geist
YUI().use('yql', function(Y){
    var query = 'select * from rss(0,30) where url = "http://rssmix.com/u/8236762/rss.xml"'
    var q = Y.YQL(query, function(r){
        //r now contains the result of the YQL Query as a JSON
        var feedmarkup = '<p>'
        var feed = r.query.results.item // get feed as array of entries
        for (var i=0; i<feed.length; i++){
            feedmarkup += '<div class="row">'
            feedmarkup += '<a href="' + feed[i].link + '">'
            feedmarkup += '<h2 class="read">' + feed[i].title  + '<h2>' + '</a>' 
            feedmarkup += '<h4 class="author">' + '<span class="boldby">' + "by " + '</span>' + feed[i].creator + '<a href="http://www.amazon.com/s?url=search-alias%3Daps&field-keywords=' + feed[i].author + '">' + '<img style="height: 23px; width: 23px; margin-left: 10px; " src="new-icons/amazon.png">' + '</a>' + '</h4>'
            feedmarkup += '<h3">' + feed[i].description + '</h3>' + '</p>' + '</div>'  
            feedmarkup += '<hr>'
        }
        document.getElementById('geist-feed').innerHTML = feedmarkup
        
    })
      
})

//Haydens Ferry Review
YUI().use('yql', function(Y){
    var query = 'select * from rss(0,30) where url = "http://rssmix.com/u/8236762/rss.xml"'
    var q = Y.YQL(query, function(r){
        //r now contains the result of the YQL Query as a JSON
        var feedmarkup = '<p>'
        var feed = r.query.results.item // get feed as array of entries
        for (var i=0; i<feed.length; i++){
            feedmarkup += '<div class="row">'
            feedmarkup += '<a href="' + feed[i].link + '">'
            feedmarkup += '<h2 class="read">' + feed[i].title  + '<h2>' + '</a>' 
            feedmarkup += '<h4 class="author">' + '<span class="boldby">' + "by " + '</span>' + feed[i].creator + '<a href="http://www.amazon.com/s?url=search-alias%3Daps&field-keywords=' + feed[i].author + '">' + '<img style="height: 23px; width: 23px; margin-left: 10px; " src="new-icons/amazon.png">' + '</a>' + '</h4>'
            feedmarkup += '<h3">' + feed[i].description + '</h3>' + '</p>' + '</div>'  
            feedmarkup += '<hr>'
        }
        document.getElementById('haydens-ferry-review-feed').innerHTML = feedmarkup
        
    })
      
})

//The Idaho Review
YUI().use('yql', function(Y){
    var query = 'select * from rss(0,30) where url = "http://rssmix.com/u/8236762/rss.xml"'
    var q = Y.YQL(query, function(r){
        //r now contains the result of the YQL Query as a JSON
        var feedmarkup = '<p>'
        var feed = r.query.results.item // get feed as array of entries
        for (var i=0; i<feed.length; i++){
            feedmarkup += '<div class="row">'
            feedmarkup += '<a href="' + feed[i].link + '">'
            feedmarkup += '<h2 class="read">' + feed[i].title  + '<h2>' + '</a>' 
            feedmarkup += '<h4 class="author">' + '<span class="boldby">' + "by " + '</span>' + feed[i].creator + '<a href="http://www.amazon.com/s?url=search-alias%3Daps&field-keywords=' + feed[i].author + '">' + '<img style="height: 23px; width: 23px; margin-left: 10px; " src="new-icons/amazon.png">' + '</a>' + '</h4>'
            feedmarkup += '<h3">' + feed[i].description + '</h3>' + '</p>' + '</div>'  
            feedmarkup += '<hr>'
        }
        document.getElementById('the-idaho-review-feed').innerHTML = feedmarkup
        
    })
      
})

//Image Journal
YUI().use('yql', function(Y){
    var query = 'select * from rss(0,30) where url = "http://rssmix.com/u/8236762/rss.xml"'
    var q = Y.YQL(query, function(r){
        //r now contains the result of the YQL Query as a JSON
        var feedmarkup = '<p>'
        var feed = r.query.results.item // get feed as array of entries
        for (var i=0; i<feed.length; i++){
            feedmarkup += '<div class="row">'
            feedmarkup += '<a href="' + feed[i].link + '">'
            feedmarkup += '<h2 class="read">' + feed[i].title  + '<h2>' + '</a>' 
            feedmarkup += '<h4 class="author">' + '<span class="boldby">' + "by " + '</span>' + feed[i].creator + '<a href="http://www.amazon.com/s?url=search-alias%3Daps&field-keywords=' + feed[i].author + '">' + '<img style="height: 23px; width: 23px; margin-left: 10px; " src="new-icons/amazon.png">' + '</a>' + '</h4>'
            feedmarkup += '<h3">' + feed[i].description + '</h3>' + '</p>' + '</div>'  
            feedmarkup += '<hr>'
        }
        document.getElementById('image-journal-feed').innerHTML = feedmarkup
        
    })
      
})

//Indiana
YUI().use('yql', function(Y){
    var query = 'select * from rss(0,30) where url = "http://rssmix.com/u/8236762/rss.xml"'
    var q = Y.YQL(query, function(r){
        //r now contains the result of the YQL Query as a JSON
        var feedmarkup = '<p>'
        var feed = r.query.results.item // get feed as array of entries
        for (var i=0; i<feed.length; i++){
            feedmarkup += '<div class="row">'
            feedmarkup += '<a href="' + feed[i].link + '">'
            feedmarkup += '<h2 class="read">' + feed[i].title  + '<h2>' + '</a>' 
            feedmarkup += '<h4 class="author">' + '<span class="boldby">' + "by " + '</span>' + feed[i].creator + '<a href="http://www.amazon.com/s?url=search-alias%3Daps&field-keywords=' + feed[i].author + '">' + '<img style="height: 23px; width: 23px; margin-left: 10px; " src="new-icons/amazon.png">' + '</a>' + '</h4>'
            feedmarkup += '<h3">' + feed[i].description + '</h3>' + '</p>' + '</div>'  
            feedmarkup += '<hr>'
        }
        document.getElementById('indiana-review-feed').innerHTML = feedmarkup
        
    })
      
})

//The Journal of Bison Jack
YUI().use('yql', function(Y){
    var query = 'select * from rss(0,30) where url = "http://rssmix.com/u/8236762/rss.xml"'
    var q = Y.YQL(query, function(r){
        //r now contains the result of the YQL Query as a JSON
        var feedmarkup = '<p>'
        var feed = r.query.results.item // get feed as array of entries
        for (var i=0; i<feed.length; i++){
            feedmarkup += '<div class="row">'
            feedmarkup += '<a href="' + feed[i].link + '">'
            feedmarkup += '<h2 class="read">' + feed[i].title  + '<h2>' + '</a>' 
            feedmarkup += '<h4 class="author">' + '<span class="boldby">' + "by " + '</span>' + feed[i].creator + '<a href="http://www.amazon.com/s?url=search-alias%3Daps&field-keywords=' + feed[i].author + '">' + '<img style="height: 23px; width: 23px; margin-left: 10px; " src="new-icons/amazon.png">' + '</a>' + '</h4>'
            feedmarkup += '<h3">' + feed[i].description + '</h3>' + '</p>' + '</div>'  
            feedmarkup += '<hr>'
        }
        document.getElementById('journal-of-bison-jack-feed').innerHTML = feedmarkup
        
    })
      
})


//The Journal of Bison Jack
YUI().use('yql', function(Y){
    var query = 'select * from rss(0,30) where url = "http://rssmix.com/u/8236762/rss.xml"'
    var q = Y.YQL(query, function(r){
        //r now contains the result of the YQL Query as a JSON
        var feedmarkup = '<p>'
        var feed = r.query.results.item // get feed as array of entries
        for (var i=0; i<feed.length; i++){
            feedmarkup += '<div class="row">'
            feedmarkup += '<a href="' + feed[i].link + '">'
            feedmarkup += '<h2 class="read">' + feed[i].title  + '<h2>' + '</a>' 
            feedmarkup += '<h4 class="author">' + '<span class="boldby">' + "by " + '</span>' + feed[i].creator + '<a href="http://www.amazon.com/s?url=search-alias%3Daps&field-keywords=' + feed[i].author + '">' + '<img style="height: 23px; width: 23px; margin-left: 10px; " src="new-icons/amazon.png">' + '</a>' + '</h4>'
            feedmarkup += '<h3">' + feed[i].description + '</h3>' + '</p>' + '</div>'  
            feedmarkup += '<hr>'
        }
        document.getElementById('literary-orphans-feed').innerHTML = feedmarkup
        
    })
      
})

//Lithub
YUI().use('yql', function(Y){
    var query = 'select * from rss(0,30) where url = "http://rssmix.com/u/8236762/rss.xml"'
    var q = Y.YQL(query, function(r){
        //r now contains the result of the YQL Query as a JSON
        var feedmarkup = '<p>'
        var feed = r.query.results.item // get feed as array of entries
        for (var i=0; i<feed.length; i++){
            feedmarkup += '<div class="row">'
            feedmarkup += '<a href="' + feed[i].link + '">'
            feedmarkup += '<h2 class="read">' + feed[i].title  + '<h2>' + '</a>' 
            feedmarkup += '<h4 class="author">' + '<span class="boldby">' + "by " + '</span>' + feed[i].creator + '<a href="http://www.amazon.com/s?url=search-alias%3Daps&field-keywords=' + feed[i].author + '">' + '<img style="height: 23px; width: 23px; margin-left: 10px; " src="new-icons/amazon.png">' + '</a>' + '</h4>'
            feedmarkup += '<h3">' + feed[i].description + '</h3>' + '</p>' + '</div>'  
            feedmarkup += '<hr>'
        }
        document.getElementById('lithub-feed').innerHTML = feedmarkup
        
    })
      
})

//Little Star Journal
YUI().use('yql', function(Y){
    var query = 'select * from rss(0,30) where url = "http://rssmix.com/u/8236762/rss.xml"'
    var q = Y.YQL(query, function(r){
        //r now contains the result of the YQL Query as a JSON
        var feedmarkup = '<p>'
        var feed = r.query.results.item // get feed as array of entries
        for (var i=0; i<feed.length; i++){
            feedmarkup += '<div class="row">'
            feedmarkup += '<a href="' + feed[i].link + '">'
            feedmarkup += '<h2 class="read">' + feed[i].title  + '<h2>' + '</a>' 
            feedmarkup += '<h4 class="author">' + '<span class="boldby">' + "by " + '</span>' + feed[i].creator + '<a href="http://www.amazon.com/s?url=search-alias%3Daps&field-keywords=' + feed[i].author + '">' + '<img style="height: 23px; width: 23px; margin-left: 10px; " src="new-icons/amazon.png">' + '</a>' + '</h4>'
            feedmarkup += '<h3">' + feed[i].description + '</h3>' + '</p>' + '</div>'  
            feedmarkup += '<hr>'
        }
        document.getElementById('little-star-journal').innerHTML = feedmarkup
        
    })
      
})

//Made-up Words
YUI().use('yql', function(Y){
    var query = 'select * from rss(0,30) where url = "http://rssmix.com/u/8236762/rss.xml"'
    var q = Y.YQL(query, function(r){
        //r now contains the result of the YQL Query as a JSON
        var feedmarkup = '<p>'
        var feed = r.query.results.item // get feed as array of entries
        for (var i=0; i<feed.length; i++){
            feedmarkup += '<div class="row">'
            feedmarkup += '<a href="' + feed[i].link + '">'
            feedmarkup += '<h2 class="read">' + feed[i].title  + '<h2>' + '</a>' 
            feedmarkup += '<h4 class="author">' + '<span class="boldby">' + "by " + '</span>' + feed[i].creator + '<a href="http://www.amazon.com/s?url=search-alias%3Daps&field-keywords=' + feed[i].author + '">' + '<img style="height: 23px; width: 23px; margin-left: 10px; " src="new-icons/amazon.png">' + '</a>' + '</h4>'
            feedmarkup += '<h3">' + feed[i].description + '</h3>' + '</p>' + '</div>'  
            feedmarkup += '<hr>'
        }
        document.getElementById('made-up-words').innerHTML = feedmarkup
        
    })
      
})

//Mcsweeneys
YUI().use('yql', function(Y){
    var query = 'select * from rss(0,30) where url = "http://rssmix.com/u/8236762/rss.xml"'
    var q = Y.YQL(query, function(r){
        //r now contains the result of the YQL Query as a JSON
        var feedmarkup = '<p>'
        var feed = r.query.results.item // get feed as array of entries
        for (var i=0; i<feed.length; i++){
            feedmarkup += '<div class="row">'
            feedmarkup += '<a href="' + feed[i].link + '">'
            feedmarkup += '<h2 class="read">' + feed[i].title  + '<h2>' + '</a>' 
            feedmarkup += '<h4 class="author">' + '<span class="boldby">' + "by " + '</span>' + feed[i].creator + '<a href="http://www.amazon.com/s?url=search-alias%3Daps&field-keywords=' + feed[i].author + '">' + '<img style="height: 23px; width: 23px; margin-left: 10px; " src="new-icons/amazon.png">' + '</a>' + '</h4>'
            feedmarkup += '<h3">' + feed[i].description + '</h3>' + '</p>' + '</div>'  
            feedmarkup += '<hr>'
        }
        document.getElementById('mcsweeneys').innerHTML = feedmarkup
        
    })
      
})

//Michigan quarterly review
YUI().use('yql', function(Y){
    var query = 'select * from rss(0,30) where url = "http://rssmix.com/u/8236762/rss.xml"'
    var q = Y.YQL(query, function(r){
        //r now contains the result of the YQL Query as a JSON
        var feedmarkup = '<p>'
        var feed = r.query.results.item // get feed as array of entries
        for (var i=0; i<feed.length; i++){
            feedmarkup += '<div class="row">'
            feedmarkup += '<a href="' + feed[i].link + '">'
            feedmarkup += '<h2 class="read">' + feed[i].title  + '<h2>' + '</a>' 
            feedmarkup += '<h4 class="author">' + '<span class="boldby">' + "by " + '</span>' + feed[i].creator + '<a href="http://www.amazon.com/s?url=search-alias%3Daps&field-keywords=' + feed[i].author + '">' + '<img style="height: 23px; width: 23px; margin-left: 10px; " src="new-icons/amazon.png">' + '</a>' + '</h4>'
            feedmarkup += '<h3">' + feed[i].description + '</h3>' + '</p>' + '</div>'  
            feedmarkup += '<hr>'
        }
        document.getElementById('michigan-quarterly-review-feed').innerHTML = feedmarkup
        
    })
      
})

//Narrative Northeast
YUI().use('yql', function(Y){
    var query = 'select * from rss(0,30) where url = "http://rssmix.com/u/8236762/rss.xml"'
    var q = Y.YQL(query, function(r){
        //r now contains the result of the YQL Query as a JSON
        var feedmarkup = '<p>'
        var feed = r.query.results.item // get feed as array of entries
        for (var i=0; i<feed.length; i++){
            feedmarkup += '<div class="row">'
            feedmarkup += '<a href="' + feed[i].link + '">'
            feedmarkup += '<h2 class="read">' + feed[i].title  + '<h2>' + '</a>' 
            feedmarkup += '<h4 class="author">' + '<span class="boldby">' + "by " + '</span>' + feed[i].creator + '<a href="http://www.amazon.com/s?url=search-alias%3Daps&field-keywords=' + feed[i].author + '">' + '<img style="height: 23px; width: 23px; margin-left: 10px; " src="new-icons/amazon.png">' + '</a>' + '</h4>'
            feedmarkup += '<h3">' + feed[i].description + '</h3>' + '</p>' + '</div>'  
            feedmarkup += '<hr>'
        }
        document.getElementById('narrative-northeast-feed').innerHTML = feedmarkup
        
    })
      
})

//New Orleans Review
YUI().use('yql', function(Y){
    var query = 'select * from rss(0,30) where url = "http://rssmix.com/u/8236762/rss.xml"'
    var q = Y.YQL(query, function(r){
        //r now contains the result of the YQL Query as a JSON
        var feedmarkup = '<p>'
        var feed = r.query.results.item // get feed as array of entries
        for (var i=0; i<feed.length; i++){
            feedmarkup += '<div class="row">'
            feedmarkup += '<a href="' + feed[i].link + '">'
            feedmarkup += '<h2 class="read">' + feed[i].title  + '<h2>' + '</a>' 
            feedmarkup += '<h4 class="author">' + '<span class="boldby">' + "by " + '</span>' + feed[i].creator + '<a href="http://www.amazon.com/s?url=search-alias%3Daps&field-keywords=' + feed[i].author + '">' + '<img style="height: 23px; width: 23px; margin-left: 10px; " src="new-icons/amazon.png">' + '</a>' + '</h4>'
            feedmarkup += '<h3">' + feed[i].description + '</h3>' + '</p>' + '</div>'  
            feedmarkup += '<hr>'
        }
        document.getElementById('new-orleans-review-feed').innerHTML = feedmarkup
        
    })
      
})

//The New Yorker
YUI().use('yql', function(Y){
    var query = 'select * from rss(0,30) where url = "http://rssmix.com/u/8236762/rss.xml"'
    var q = Y.YQL(query, function(r){
        //r now contains the result of the YQL Query as a JSON
        var feedmarkup = '<p>'
        var feed = r.query.results.item // get feed as array of entries
        for (var i=0; i<feed.length; i++){
            feedmarkup += '<div class="row">'
            feedmarkup += '<a href="' + feed[i].link + '">'
            feedmarkup += '<h2 class="read">' + feed[i].title  + '<h2>' + '</a>' 
            feedmarkup += '<h4 class="author">' + '<span class="boldby">' + "by " + '</span>' + feed[i].creator + '<a href="http://www.amazon.com/s?url=search-alias%3Daps&field-keywords=' + feed[i].author + '">' + '<img style="height: 23px; width: 23px; margin-left: 10px; " src="new-icons/amazon.png">' + '</a>' + '</h4>'
            feedmarkup += '<h3">' + feed[i].description + '</h3>' + '</p>' + '</div>'  
            feedmarkup += '<hr>'
        }
        document.getElementById('the-new-yorker-feed').innerHTML = feedmarkup
        
    })
      
})

//Nightmare Magazine
YUI().use('yql', function(Y){
    var query = 'select * from rss(0,30) where url = "http://rssmix.com/u/8236762/rss.xml"'
    var q = Y.YQL(query, function(r){
        //r now contains the result of the YQL Query as a JSON
        var feedmarkup = '<p>'
        var feed = r.query.results.item // get feed as array of entries
        for (var i=0; i<feed.length; i++){
            feedmarkup += '<div class="row">'
            feedmarkup += '<a href="' + feed[i].link + '">'
            feedmarkup += '<h2 class="read">' + feed[i].title  + '<h2>' + '</a>' 
            feedmarkup += '<h4 class="author">' + '<span class="boldby">' + "by " + '</span>' + feed[i].creator + '<a href="http://www.amazon.com/s?url=search-alias%3Daps&field-keywords=' + feed[i].author + '">' + '<img style="height: 23px; width: 23px; margin-left: 10px; " src="new-icons/amazon.png">' + '</a>' + '</h4>'
            feedmarkup += '<h3">' + feed[i].description + '</h3>' + '</p>' + '</div>'  
            feedmarkup += '<hr>'
        }
        document.getElementById('nightmare-magazine-feed').innerHTML = feedmarkup
        
    })
      
})

//Offing Magazine
YUI().use('yql', function(Y){
    var query = 'select * from rss(0,30) where url = "http://rssmix.com/u/8236762/rss.xml"'
    var q = Y.YQL(query, function(r){
        //r now contains the result of the YQL Query as a JSON
        var feedmarkup = '<p>'
        var feed = r.query.results.item // get feed as array of entries
        for (var i=0; i<feed.length; i++){
            feedmarkup += '<div class="row">'
            feedmarkup += '<a href="' + feed[i].link + '">'
            feedmarkup += '<h2 class="read">' + feed[i].title  + '<h2>' + '</a>' 
            feedmarkup += '<h4 class="author">' + '<span class="boldby">' + "by " + '</span>' + feed[i].creator + '<a href="http://www.amazon.com/s?url=search-alias%3Daps&field-keywords=' + feed[i].author + '">' + '<img style="height: 23px; width: 23px; margin-left: 10px; " src="new-icons/amazon.png">' + '</a>' + '</h4>'
            feedmarkup += '<h3">' + feed[i].description + '</h3>' + '</p>' + '</div>'  
            feedmarkup += '<hr>'
        }
        document.getElementById('offing-magazine-feed').innerHTML = feedmarkup
        
    })
      
})

//Oxford American
YUI().use('yql', function(Y){
    var query = 'select * from rss(0,30) where url = "http://rssmix.com/u/8236762/rss.xml"'
    var q = Y.YQL(query, function(r){
        //r now contains the result of the YQL Query as a JSON
        var feedmarkup = '<p>'
        var feed = r.query.results.item // get feed as array of entries
        for (var i=0; i<feed.length; i++){
            feedmarkup += '<div class="row">'
            feedmarkup += '<a href="' + feed[i].link + '">'
            feedmarkup += '<h2 class="read">' + feed[i].title  + '<h2>' + '</a>' 
            feedmarkup += '<h4 class="author">' + '<span class="boldby">' + "by " + '</span>' + feed[i].creator + '<a href="http://www.amazon.com/s?url=search-alias%3Daps&field-keywords=' + feed[i].author + '">' + '<img style="height: 23px; width: 23px; margin-left: 10px; " src="new-icons/amazon.png">' + '</a>' + '</h4>'
            feedmarkup += '<h3">' + feed[i].description + '</h3>' + '</p>' + '</div>'  
            feedmarkup += '<hr>'
        }
        document.getElementById('oxford-american-feed').innerHTML = feedmarkup
        
    })
      
})

//The Paris Review
YUI().use('yql', function(Y){
    var query = 'select * from rss(0,30) where url = "http://rssmix.com/u/8236762/rss.xml"'
    var q = Y.YQL(query, function(r){
        //r now contains the result of the YQL Query as a JSON
        var feedmarkup = '<p>'
        var feed = r.query.results.item // get feed as array of entries
        for (var i=0; i<feed.length; i++){
            feedmarkup += '<div class="row">'
            feedmarkup += '<a href="' + feed[i].link + '">'
            feedmarkup += '<h2 class="read">' + feed[i].title  + '<h2>' + '</a>' 
            feedmarkup += '<h4 class="author">' + '<span class="boldby">' + "by " + '</span>' + feed[i].creator + '<a href="http://www.amazon.com/s?url=search-alias%3Daps&field-keywords=' + feed[i].author + '">' + '<img style="height: 23px; width: 23px; margin-left: 10px; " src="new-icons/amazon.png">' + '</a>' + '</h4>'
            feedmarkup += '<h3">' + feed[i].description + '</h3>' + '</p>' + '</div>'  
            feedmarkup += '<hr>'
        }
        document.getElementById('the-paris-review-feed').innerHTML = feedmarkup
        
    })
      
})


//Every Writers Resource
YUI().use('yql', function(Y){
    var query = 'select * from rss(0,30) where url = "http://rssmix.com/u/8236762/rss.xml"'
    var q = Y.YQL(query, function(r){
        //r now contains the result of the YQL Query as a JSON
        var feedmarkup = '<p>'
        var feed = r.query.results.item // get feed as array of entries
        for (var i=0; i<feed.length; i++){
            feedmarkup += '<div class="row">'
            feedmarkup += '<a href="' + feed[i].link + '">'
            feedmarkup += '<h2 class="read">' + feed[i].title  + '<h2>' + '</a>' 
            feedmarkup += '<h4 class="author">' + '<span class="boldby">' + "by " + '</span>' + feed[i].creator + '<a href="http://www.amazon.com/s?url=search-alias%3Daps&field-keywords=' + feed[i].author + '">' + '<img style="height: 23px; width: 23px; margin-left: 10px; " src="new-icons/amazon.png">' + '</a>' + '</h4>'
            feedmarkup += '<h3">' + feed[i].description + '</h3>' + '</p>' + '</div>'  
            feedmarkup += '<hr>'
        }
        document.getElementById('every-writers-resource-feed').innerHTML = feedmarkup
        
    })
      
})

//Poetic Entanglement
YUI().use('yql', function(Y){
    var query = 'select * from rss(0,30) where url = "http://rssmix.com/u/8236762/rss.xml"'
    var q = Y.YQL(query, function(r){
        //r now contains the result of the YQL Query as a JSON
        var feedmarkup = '<p>'
        var feed = r.query.results.item // get feed as array of entries
        for (var i=0; i<feed.length; i++){
            feedmarkup += '<div class="row">'
            feedmarkup += '<a href="' + feed[i].link + '">'
            feedmarkup += '<h2 class="read">' + feed[i].title  + '<h2>' + '</a>' 
            feedmarkup += '<h4 class="author">' + '<span class="boldby">' + "by " + '</span>' + feed[i].creator + '<a href="http://www.amazon.com/s?url=search-alias%3Daps&field-keywords=' + feed[i].author + '">' + '<img style="height: 23px; width: 23px; margin-left: 10px; " src="new-icons/amazon.png">' + '</a>' + '</h4>'
            feedmarkup += '<h3">' + feed[i].description + '</h3>' + '</p>' + '</div>'  
            feedmarkup += '<hr>'
        }
        document.getElementById('poetic-entanglement-feed').innerHTML = feedmarkup
        
    })
      
})

//Poetry is Dead
YUI().use('yql', function(Y){
    var query = 'select * from rss(0,30) where url = "http://rssmix.com/u/8236762/rss.xml"'
    var q = Y.YQL(query, function(r){
        //r now contains the result of the YQL Query as a JSON
        var feedmarkup = '<p>'
        var feed = r.query.results.item // get feed as array of entries
        for (var i=0; i<feed.length; i++){
            feedmarkup += '<div class="row">'
            feedmarkup += '<a href="' + feed[i].link + '">'
            feedmarkup += '<h2 class="read">' + feed[i].title  + '<h2>' + '</a>' 
            feedmarkup += '<h4 class="author">' + '<span class="boldby">' + "by " + '</span>' + feed[i].creator + '<a href="http://www.amazon.com/s?url=search-alias%3Daps&field-keywords=' + feed[i].author + '">' + '<img style="height: 23px; width: 23px; margin-left: 10px; " src="new-icons/amazon.png">' + '</a>' + '</h4>'
            feedmarkup += '<h3">' + feed[i].description + '</h3>' + '</p>' + '</div>'  
            feedmarkup += '<hr>'
        }
        document.getElementById('poetry-is-dead-feed').innerHTML = feedmarkup
        
    })
      
})


//Prairie Schooner
YUI().use('yql', function(Y){
    var query = 'select * from rss(0,30) where url = "http://rssmix.com/u/8236762/rss.xml"'
    var q = Y.YQL(query, function(r){
        //r now contains the result of the YQL Query as a JSON
        var feedmarkup = '<p>'
        var feed = r.query.results.item // get feed as array of entries
        for (var i=0; i<feed.length; i++){
            feedmarkup += '<div class="row">'
            feedmarkup += '<a href="' + feed[i].link + '">'
            feedmarkup += '<h2 class="read">' + feed[i].title  + '<h2>' + '</a>' 
            feedmarkup += '<h4 class="author">' + '<span class="boldby">' + "by " + '</span>' + feed[i].creator + '<a href="http://www.amazon.com/s?url=search-alias%3Daps&field-keywords=' + feed[i].author + '">' + '<img style="height: 23px; width: 23px; margin-left: 10px; " src="new-icons/amazon.png">' + '</a>' + '</h4>'
            feedmarkup += '<h3">' + feed[i].description + '</h3>' + '</p>' + '</div>'  
            feedmarkup += '<hr>'
        }
        document.getElementById('prairie-schooner-feed').innerHTML = feedmarkup
        
    })
      
})


//Public Books
YUI().use('yql', function(Y){
    var query = 'select * from rss(0,30) where url = "http://rssmix.com/u/8236762/rss.xml"'
    var q = Y.YQL(query, function(r){
        //r now contains the result of the YQL Query as a JSON
        var feedmarkup = '<p>'
        var feed = r.query.results.item // get feed as array of entries
        for (var i=0; i<feed.length; i++){
            feedmarkup += '<div class="row">'
            feedmarkup += '<a href="' + feed[i].link + '">'
            feedmarkup += '<h2 class="read">' + feed[i].title  + '<h2>' + '</a>' 
            feedmarkup += '<h4 class="author">' + '<span class="boldby">' + "by " + '</span>' + feed[i].creator + '<a href="http://www.amazon.com/s?url=search-alias%3Daps&field-keywords=' + feed[i].author + '">' + '<img style="height: 23px; width: 23px; margin-left: 10px; " src="new-icons/amazon.png">' + '</a>' + '</h4>'
            feedmarkup += '<h3">' + feed[i].description + '</h3>' + '</p>' + '</div>'  
            feedmarkup += '<hr>'
        }
        document.getElementById('public-books-feed').innerHTML = feedmarkup
        
    })
      
})

//Quaint Magazine
YUI().use('yql', function(Y){
    var query = 'select * from rss(0,30) where url = "http://rssmix.com/u/8236762/rss.xml"'
    var q = Y.YQL(query, function(r){
        //r now contains the result of the YQL Query as a JSON
        var feedmarkup = '<p>'
        var feed = r.query.results.item // get feed as array of entries
        for (var i=0; i<feed.length; i++){
            feedmarkup += '<div class="row">'
            feedmarkup += '<a href="' + feed[i].link + '">'
            feedmarkup += '<h2 class="read">' + feed[i].title  + '<h2>' + '</a>' 
            feedmarkup += '<h4 class="author">' + '<span class="boldby">' + "by " + '</span>' + feed[i].creator + '<a href="http://www.amazon.com/s?url=search-alias%3Daps&field-keywords=' + feed[i].author + '">' + '<img style="height: 23px; width: 23px; margin-left: 10px; " src="new-icons/amazon.png">' + '</a>' + '</h4>'
            feedmarkup += '<h3">' + feed[i].description + '</h3>' + '</p>' + '</div>'  
            feedmarkup += '<hr>'
        }
        document.getElementById('quaint-magazine-feed').innerHTML = feedmarkup
        
    })
      
})

//Queen Mobs Journal
YUI().use('yql', function(Y){
    var query = 'select * from rss(0,30) where url = "http://rssmix.com/u/8236762/rss.xml"'
    var q = Y.YQL(query, function(r){
        //r now contains the result of the YQL Query as a JSON
        var feedmarkup = '<p>'
        var feed = r.query.results.item // get feed as array of entries
        for (var i=0; i<feed.length; i++){
            feedmarkup += '<div class="row">'
            feedmarkup += '<a href="' + feed[i].link + '">'
            feedmarkup += '<h2 class="read">' + feed[i].title  + '<h2>' + '</a>' 
            feedmarkup += '<h4 class="author">' + '<span class="boldby">' + "by " + '</span>' + feed[i].creator + '<a href="http://www.amazon.com/s?url=search-alias%3Daps&field-keywords=' + feed[i].author + '">' + '<img style="height: 23px; width: 23px; margin-left: 10px; " src="new-icons/amazon.png">' + '</a>' + '</h4>'
            feedmarkup += '<h3">' + feed[i].description + '</h3>' + '</p>' + '</div>'  
            feedmarkup += '<hr>'
        }
        document.getElementById('queen-mobs-journal-feed').innerHTML = feedmarkup
        
    })
      
})

//Revolution John
YUI().use('yql', function(Y){
    var query = 'select * from rss(0,30) where url = "http://rssmix.com/u/8236762/rss.xml"'
    var q = Y.YQL(query, function(r){
        //r now contains the result of the YQL Query as a JSON
        var feedmarkup = '<p>'
        var feed = r.query.results.item // get feed as array of entries
        for (var i=0; i<feed.length; i++){
            feedmarkup += '<div class="row">'
            feedmarkup += '<a href="' + feed[i].link + '">'
            feedmarkup += '<h2 class="read">' + feed[i].title  + '<h2>' + '</a>' 
            feedmarkup += '<h4 class="author">' + '<span class="boldby">' + "by " + '</span>' + feed[i].creator + '<a href="http://www.amazon.com/s?url=search-alias%3Daps&field-keywords=' + feed[i].author + '">' + '<img style="height: 23px; width: 23px; margin-left: 10px; " src="new-icons/amazon.png">' + '</a>' + '</h4>'
            feedmarkup += '<h3">' + feed[i].description + '</h3>' + '</p>' + '</div>'  
            feedmarkup += '<hr>'
        }
        document.getElementById('revolution-john-feed').innerHTML = feedmarkup
        
    })
      
})

//The Rusty Toque
YUI().use('yql', function(Y){
    var query = 'select * from rss(0,30) where url = "http://rssmix.com/u/8236762/rss.xml"'
    var q = Y.YQL(query, function(r){
        //r now contains the result of the YQL Query as a JSON
        var feedmarkup = '<p>'
        var feed = r.query.results.item // get feed as array of entries
        for (var i=0; i<feed.length; i++){
            feedmarkup += '<div class="row">'
            feedmarkup += '<a href="' + feed[i].link + '">'
            feedmarkup += '<h2 class="read">' + feed[i].title  + '<h2>' + '</a>' 
            feedmarkup += '<h4 class="author">' + '<span class="boldby">' + "by " + '</span>' + feed[i].creator + '<a href="http://www.amazon.com/s?url=search-alias%3Daps&field-keywords=' + feed[i].author + '">' + '<img style="height: 23px; width: 23px; margin-left: 10px; " src="new-icons/amazon.png">' + '</a>' + '</h4>'
            feedmarkup += '<h3">' + feed[i].description + '</h3>' + '</p>' + '</div>'  
            feedmarkup += '<hr>'
        }
        document.getElementById('the-rusty-toque-feed').innerHTML = feedmarkup
        
    })
      
})


//Shenandoah
YUI().use('yql', function(Y){
    var query = 'select * from rss(0,30) where url = "http://rssmix.com/u/8236762/rss.xml"'
    var q = Y.YQL(query, function(r){
        //r now contains the result of the YQL Query as a JSON
        var feedmarkup = '<p>'
        var feed = r.query.results.item // get feed as array of entries
        for (var i=0; i<feed.length; i++){
            feedmarkup += '<div class="row">'
            feedmarkup += '<a href="' + feed[i].link + '">'
            feedmarkup += '<h2 class="read">' + feed[i].title  + '<h2>' + '</a>' 
            feedmarkup += '<h4 class="author">' + '<span class="boldby">' + "by " + '</span>' + feed[i].creator + '<a href="http://www.amazon.com/s?url=search-alias%3Daps&field-keywords=' + feed[i].author + '">' + '<img style="height: 23px; width: 23px; margin-left: 10px; " src="new-icons/amazon.png">' + '</a>' + '</h4>'
            feedmarkup += '<h3">' + feed[i].description + '</h3>' + '</p>' + '</div>'  
            feedmarkup += '<hr>'
        }
        document.getElementById('shenandoah-feed').innerHTML = feedmarkup
        
    })  
})

//Short Fiction Break
YUI().use('yql', function(Y){
    var query = 'select * from rss(0,30) where url = "http://rssmix.com/u/8236762/rss.xml"'
    var q = Y.YQL(query, function(r){
        //r now contains the result of the YQL Query as a JSON
        var feedmarkup = '<p>'
        var feed = r.query.results.item // get feed as array of entries
        for (var i=0; i<feed.length; i++){
            feedmarkup += '<div class="row">'
            feedmarkup += '<a href="' + feed[i].link + '">'
            feedmarkup += '<h2 class="read">' + feed[i].title  + '<h2>' + '</a>' 
            feedmarkup += '<h4 class="author">' + '<span class="boldby">' + "by " + '</span>' + feed[i].creator + '<a href="http://www.amazon.com/s?url=search-alias%3Daps&field-keywords=' + feed[i].author + '">' + '<img style="height: 23px; width: 23px; margin-left: 10px; " src="new-icons/amazon.png">' + '</a>' + '</h4>'
            feedmarkup += '<h3">' + feed[i].description + '</h3>' + '</p>' + '</div>'  
            feedmarkup += '<hr>'
        }
        document.getElementById('short-fiction-break-feed').innerHTML = feedmarkup
        
    })  
})

//Sonora Review
YUI().use('yql', function(Y){
    var query = 'select * from rss(0,30) where url = "http://rssmix.com/u/8236762/rss.xml"'
    var q = Y.YQL(query, function(r){
        //r now contains the result of the YQL Query as a JSON
        var feedmarkup = '<p>'
        var feed = r.query.results.item // get feed as array of entries
        for (var i=0; i<feed.length; i++){
            feedmarkup += '<div class="row">'
            feedmarkup += '<a href="' + feed[i].link + '">'
            feedmarkup += '<h2 class="read">' + feed[i].title  + '<h2>' + '</a>' 
            feedmarkup += '<h4 class="author">' + '<span class="boldby">' + "by " + '</span>' + feed[i].creator + '<a href="http://www.amazon.com/s?url=search-alias%3Daps&field-keywords=' + feed[i].author + '">' + '<img style="height: 23px; width: 23px; margin-left: 10px; " src="new-icons/amazon.png">' + '</a>' + '</h4>'
            feedmarkup += '<h3">' + feed[i].description + '</h3>' + '</p>' + '</div>'  
            feedmarkup += '<hr>'
        }
        document.getElementById('sonora-review-feed').innerHTML = feedmarkup
        
    })  
})

//Sun Magazine
YUI().use('yql', function(Y){
    var query = 'select * from rss(0,30) where url = "http://rssmix.com/u/8236762/rss.xml"'
    var q = Y.YQL(query, function(r){
        //r now contains the result of the YQL Query as a JSON
        var feedmarkup = '<p>'
        var feed = r.query.results.item // get feed as array of entries
        for (var i=0; i<feed.length; i++){
            feedmarkup += '<div class="row">'
            feedmarkup += '<a href="' + feed[i].link + '">'
            feedmarkup += '<h2 class="read">' + feed[i].title  + '<h2>' + '</a>' 
            feedmarkup += '<h4 class="author">' + '<span class="boldby">' + "by " + '</span>' + feed[i].creator + '<a href="http://www.amazon.com/s?url=search-alias%3Daps&field-keywords=' + feed[i].author + '">' + '<img style="height: 23px; width: 23px; margin-left: 10px; " src="new-icons/amazon.png">' + '</a>' + '</h4>'
            feedmarkup += '<h3">' + feed[i].description + '</h3>' + '</p>' + '</div>'  
            feedmarkup += '<hr>'
        }
        document.getElementById('sun-magazine-feed').innerHTML = feedmarkup
        
    })  
})


//The Rumpus
YUI().use('yql', function(Y){
    var query = 'select * from rss(0,30) where url = "http://rssmix.com/u/8236762/rss.xml"'
    var q = Y.YQL(query, function(r){
        //r now contains the result of the YQL Query as a JSON
        var feedmarkup = '<p>'
        var feed = r.query.results.item // get feed as array of entries
        for (var i=0; i<feed.length; i++){
            feedmarkup += '<div class="row">'
            feedmarkup += '<a href="' + feed[i].link + '">'
            feedmarkup += '<h2 class="read">' + feed[i].title  + '<h2>' + '</a>' 
            feedmarkup += '<h4 class="author">' + '<span class="boldby">' + "by " + '</span>' + feed[i].creator + '<a href="http://www.amazon.com/s?url=search-alias%3Daps&field-keywords=' + feed[i].author + '">' + '<img style="height: 23px; width: 23px; margin-left: 10px; " src="new-icons/amazon.png">' + '</a>' + '</h4>'
            feedmarkup += '<h3">' + feed[i].description + '</h3>' + '</p>' + '</div>'  
            feedmarkup += '<hr>'
        }
        document.getElementById('the-rumpus-feed').innerHTML = feedmarkup
        
    })  
})


//ThreeAM Magazine
YUI().use('yql', function(Y){
    var query = 'select * from rss(0,30) where url = "http://rssmix.com/u/8236762/rss.xml"'
    var q = Y.YQL(query, function(r){
        //r now contains the result of the YQL Query as a JSON
        var feedmarkup = '<p>'
        var feed = r.query.results.item // get feed as array of entries
        for (var i=0; i<feed.length; i++){
            feedmarkup += '<div class="row">'
            feedmarkup += '<a href="' + feed[i].link + '">'
            feedmarkup += '<h2 class="read">' + feed[i].title  + '<h2>' + '</a>' 
            feedmarkup += '<h4 class="author">' + '<span class="boldby">' + "by " + '</span>' + feed[i].creator + '<a href="http://www.amazon.com/s?url=search-alias%3Daps&field-keywords=' + feed[i].author + '">' + '<img style="height: 23px; width: 23px; margin-left: 10px; " src="new-icons/amazon.png">' + '</a>' + '</h4>'
            feedmarkup += '<h3">' + feed[i].description + '</h3>' + '</p>' + '</div>'  
            feedmarkup += '<hr>'
        }
        document.getElementById('three-am-magazine-feed').innerHTML = feedmarkup
        
    })  
})

//Third Coast Magazine
YUI().use('yql', function(Y){
    var query = 'select * from rss(0,30) where url = "http://rssmix.com/u/8236762/rss.xml"'
    var q = Y.YQL(query, function(r){
        //r now contains the result of the YQL Query as a JSON
        var feedmarkup = '<p>'
        var feed = r.query.results.item // get feed as array of entries
        for (var i=0; i<feed.length; i++){
            feedmarkup += '<div class="row">'
            feedmarkup += '<a href="' + feed[i].link + '">'
            feedmarkup += '<h2 class="read">' + feed[i].title  + '<h2>' + '</a>' 
            feedmarkup += '<h4 class="author">' + '<span class="boldby">' + "by " + '</span>' + feed[i].creator + '<a href="http://www.amazon.com/s?url=search-alias%3Daps&field-keywords=' + feed[i].author + '">' + '<img style="height: 23px; width: 23px; margin-left: 10px; " src="new-icons/amazon.png">' + '</a>' + '</h4>'
            feedmarkup += '<h3">' + feed[i].description + '</h3>' + '</p>' + '</div>'  
            feedmarkup += '<hr>'
        }
        document.getElementById('third-coast-magazine-feed').innerHTML = feedmarkup
        
    })  
})

//Tor
YUI().use('yql', function(Y){
    var query = 'select * from rss(0,30) where url = "http://rssmix.com/u/8236762/rss.xml"'
    var q = Y.YQL(query, function(r){
        //r now contains the result of the YQL Query as a JSON
        var feedmarkup = '<p>'
        var feed = r.query.results.item // get feed as array of entries
        for (var i=0; i<feed.length; i++){
            feedmarkup += '<div class="row">'
            feedmarkup += '<a href="' + feed[i].link + '">'
            feedmarkup += '<h2 class="read">' + feed[i].title  + '<h2>' + '</a>' 
            feedmarkup += '<h4 class="author">' + '<span class="boldby">' + "by " + '</span>' + feed[i].creator + '<a href="http://www.amazon.com/s?url=search-alias%3Daps&field-keywords=' + feed[i].author + '">' + '<img style="height: 23px; width: 23px; margin-left: 10px; " src="new-icons/amazon.png">' + '</a>' + '</h4>'
            feedmarkup += '<h3">' + feed[i].description + '</h3>' + '</p>' + '</div>'  
            feedmarkup += '<hr>'
        }
        document.getElementById('tor-feed').innerHTML = feedmarkup
        
    })  
})

//Triquarterly
YUI().use('yql', function(Y){
    var query = 'select * from rss(0,30) where url = "http://rssmix.com/u/8236762/rss.xml"'
    var q = Y.YQL(query, function(r){
        //r now contains the result of the YQL Query as a JSON
        var feedmarkup = '<p>'
        var feed = r.query.results.item // get feed as array of entries
        for (var i=0; i<feed.length; i++){
            feedmarkup += '<div class="row">'
            feedmarkup += '<a href="' + feed[i].link + '">'
            feedmarkup += '<h2 class="read">' + feed[i].title  + '<h2>' + '</a>' 
            feedmarkup += '<h4 class="author">' + '<span class="boldby">' + "by " + '</span>' + feed[i].creator + '<a href="http://www.amazon.com/s?url=search-alias%3Daps&field-keywords=' + feed[i].author + '">' + '<img style="height: 23px; width: 23px; margin-left: 10px; " src="new-icons/amazon.png">' + '</a>' + '</h4>'
            feedmarkup += '<h3">' + feed[i].description + '</h3>' + '</p>' + '</div>'  
            feedmarkup += '<hr>'
        }
        document.getElementById('triquarterly-feed').innerHTML = feedmarkup
        
    })  
})

//The Walrus
YUI().use('yql', function(Y){
    var query = 'select * from rss(0,30) where url = "http://rssmix.com/u/8236762/rss.xml"'
    var q = Y.YQL(query, function(r){
        //r now contains the result of the YQL Query as a JSON
        var feedmarkup = '<p>'
        var feed = r.query.results.item // get feed as array of entries
        for (var i=0; i<feed.length; i++){
            feedmarkup += '<div class="row">'
            feedmarkup += '<a href="' + feed[i].link + '">'
            feedmarkup += '<h2 class="read">' + feed[i].title  + '<h2>' + '</a>' 
            feedmarkup += '<h4 class="author">' + '<span class="boldby">' + "by " + '</span>' + feed[i].creator + '<a href="http://www.amazon.com/s?url=search-alias%3Daps&field-keywords=' + feed[i].author + '">' + '<img style="height: 23px; width: 23px; margin-left: 10px; " src="new-icons/amazon.png">' + '</a>' + '</h4>'
            feedmarkup += '<h3">' + feed[i].description + '</h3>' + '</p>' + '</div>'  
            feedmarkup += '<hr>'
        }
        document.getElementById('the-walrus-feed').innerHTML = feedmarkup
        
    })  
})

//Waterstone Review
YUI().use('yql', function(Y){
    var query = 'select * from rss(0,30) where url = "http://rssmix.com/u/8236762/rss.xml"'
    var q = Y.YQL(query, function(r){
        //r now contains the result of the YQL Query as a JSON
        var feedmarkup = '<p>'
        var feed = r.query.results.item // get feed as array of entries
        for (var i=0; i<feed.length; i++){
            feedmarkup += '<div class="row">'
            feedmarkup += '<a href="' + feed[i].link + '">'
            feedmarkup += '<h2 class="read">' + feed[i].title  + '<h2>' + '</a>' 
            feedmarkup += '<h4 class="author">' + '<span class="boldby">' + "by " + '</span>' + feed[i].creator + '<a href="http://www.amazon.com/s?url=search-alias%3Daps&field-keywords=' + feed[i].author + '">' + '<img style="height: 23px; width: 23px; margin-left: 10px; " src="new-icons/amazon.png">' + '</a>' + '</h4>'
            feedmarkup += '<h3">' + feed[i].description + '</h3>' + '</p>' + '</div>'  
            feedmarkup += '<hr>'
        }
        document.getElementById('waterstone-review-feed').innerHTML = feedmarkup
        
    })  
})

//Wordhaus
YUI().use('yql', function(Y){
    var query = 'select * from rss(0,30) where url = "http://rssmix.com/u/8236762/rss.xml"'
    var q = Y.YQL(query, function(r){
        //r now contains the result of the YQL Query as a JSON
        var feedmarkup = '<p>'
        var feed = r.query.results.item // get feed as array of entries
        for (var i=0; i<feed.length; i++){
            feedmarkup += '<div class="row">'
            feedmarkup += '<a href="' + feed[i].link + '">'
            feedmarkup += '<h2 class="read">' + feed[i].title  + '<h2>' + '</a>' 
            feedmarkup += '<h4 class="author">' + '<span class="boldby">' + "by " + '</span>' + feed[i].creator + '<a href="http://www.amazon.com/s?url=search-alias%3Daps&field-keywords=' + feed[i].author + '">' + '<img style="height: 23px; width: 23px; margin-left: 10px; " src="new-icons/amazon.png">' + '</a>' + '</h4>'
            feedmarkup += '<h3">' + feed[i].description + '</h3>' + '</p>' + '</div>'  
            feedmarkup += '<hr>'
        }
        document.getElementById('wordhaus-feed').innerHTML = feedmarkup
        
    })  
})

//Wordswithoutborders
YUI().use('yql', function(Y){
    var query = 'select * from rss(0,30) where url = "http://rssmix.com/u/8236762/rss.xml"'
    var q = Y.YQL(query, function(r){
        //r now contains the result of the YQL Query as a JSON
        var feedmarkup = '<p>'
        var feed = r.query.results.item // get feed as array of entries
        for (var i=0; i<feed.length; i++){
            feedmarkup += '<div class="row">'
            feedmarkup += '<a href="' + feed[i].link + '">'
            feedmarkup += '<h2 class="read">' + feed[i].title  + '<h2>' + '</a>' 
            feedmarkup += '<h4 class="author">' + '<span class="boldby">' + "by " + '</span>' + feed[i].creator + '<a href="http://www.amazon.com/s?url=search-alias%3Daps&field-keywords=' + feed[i].author + '">' + '<img style="height: 23px; width: 23px; margin-left: 10px; " src="new-icons/amazon.png">' + '</a>' + '</h4>'
            feedmarkup += '<h3">' + feed[i].description + '</h3>' + '</p>' + '</div>'  
            feedmarkup += '<hr>'
        }
        document.getElementById('words-without-borders-feed').innerHTML = feedmarkup
        
    })  
})

//Writers almanac
YUI().use('yql', function(Y){
    var query = 'select * from rss(0,30) where url = "http://rssmix.com/u/8236762/rss.xml"'
    var q = Y.YQL(query, function(r){
        //r now contains the result of the YQL Query as a JSON
        var feedmarkup = '<p>'
        var feed = r.query.results.item // get feed as array of entries
        for (var i=0; i<feed.length; i++){
            feedmarkup += '<div class="row">'
            feedmarkup += '<a href="' + feed[i].link + '">'
            feedmarkup += '<h2 class="read">' + feed[i].title  + '<h2>' + '</a>' 
            feedmarkup += '<h4 class="author">' + '<span class="boldby">' + "by " + '</span>' + feed[i].creator + '<a href="http://www.amazon.com/s?url=search-alias%3Daps&field-keywords=' + feed[i].author + '">' + '<img style="height: 23px; width: 23px; margin-left: 10px; " src="new-icons/amazon.png">' + '</a>' + '</h4>'
            feedmarkup += '<h3">' + feed[i].description + '</h3>' + '</p>' + '</div>'  
            feedmarkup += '<hr>'
        }
        document.getElementById('writers-almanac-feed').innerHTML = feedmarkup
        
    })  
})



    
'<li>'+
'<a href="#">Nonfiction</a>'+
'<ul id="myUL2" class="submenu nonfictionsub">'+
     '<input type="text" id="myInput2" onkeyup="myFunction2()" placeholder="     Search" title="Type in a name">' +
'<li><a href="" id="the-american-scholar">The American Scholar</a></li>'+
'<li><a href="" id="arcadian-magazine">Arcadia Magazine</a></li>'+
'<li><a href="" id="the-awl">The Awl</a></li>'+
'<li><a href="" id="barking-magazine">Barking Magazine</a></li>'+
'<li><a href="" id="brain-pickings">Brain Pickings</a></li>'+
'<li><a href="" id="conversational-reading">Conversational Reading</a></li>'+
'<li><a href="" id="full-stop">Full Stop</a></li>'+
'<li><a href="" id="guts-magazine">GUTS Magazine</a></li>'+
'<li><a href="" id="harpers">Harper\'s</a></li>'+
'<li><a href="" id="hazlitt">Hazlitt</a></li>' +
'<li><a href="" id="the-kenyon-review">The Kenyon Review</a></li>'+
'<li><a href="" id="the-moth">The Moth</a></li>'+
'<li><a href="" id="narrative-magazine">Narrative Magazine</a></li>'+
'<li><a href="" id="times-literary-supplement">Times Literary Supplement</a></li>'+
'</ul>'+
'</li>'+
    
    
'<li>'+
'<a href="#">Literary News</a>'+
'<ul id="myUL3" class="submenu litnewssub">'+
     '<input type="text" id="myInput3" onkeyup="myFunction3()" placeholder="     Search"" title="Type in a name">' +
'<li><a href="" id="bookforum">Bookforum</a></li>'+
'<li><a href="" id="book-riot">Book Riot</a></li>'+
'<li><a href="" id="ecotone">Ecotone</a></li>'+
'<li><a href="" id="electric-literature">Electric Literature</a></li>'+
'<li><a href="" id="flavorwire">Flavorwire</a></li>'+
'<li><a href="" id="galleycat">Galleycat</a></li>'+
'<li><a href="" id="globe-and-mail-books">Globe and Mail Books</a></li>'+
'<li><a href="" id="the-guardian-books">The Guardian Books</a></li>'+
'<li><a href="" id="kirkus-review">Kirkus Review</a></li>'+
'<li><a href="" id="la-times">LA Times</a></li>'+
'<li><a href="" id="lithub-nonfiction">Lithub</a></li>'+
'<li><a href="" id="litreactor">Litreactor</a></li>'+
'<li><a href="" id="london-review-of-books">London Review of Books</a></li>'+
'<li><a href="" id="the-malahat-review">The Malahat Review</a></li>'+
'<li><a href="" id="the-millions">The Millions</a></li>'+
'<li><a href="" id="ny-review-of-books">New York Review of Books</a></li>'+
'<li><a href="" id="npr-books">NPR Books</a></li>'+
'<li><a href="" id="omnivoracious">Omnivoracious</a></li>'+
'<li><a href="" id="quill-and-quire">Quill and Quire</a></li>'+
'<li><a href="" id="toronto-star-books">Toronto Star Books</a></li>'+
'<li><a href="" id="zyzzyva">Zyzzyva</a></li>'+
'</ul>'+
'</li>'+
    
'<li>'+
'<a href="#">Science Fiction</a>'+
'<ul id="myUL4" class="submenu  scifisub">'+
     '<input type="text" id="myInput4" onkeyup="myFunction4()" placeholder="     Search" title="Type in a name">' +
'<li><a href="">Escape Pod</a></li>'+
'<li><a href="">Lightspeed Magazine</a></li>'+
'<li><a href="">Nightmare Magazine</a></li>'+
'<li><a href="">Shimmer Magazine</a></li>'+
'<li><a href="">Sci Phi Journal</a></li>'+
'<li><a href="">Tor</a></li>'+
'</ul>'+
'</li>'+
'<li>'+
'<a id="authors" href="#">Authors</a>'+

'<ul id="myUL5" class="submenu authorssub">'+
        '<input type="text" id="myInput5" onkeyup="myFunction5()" placeholder="     Search" title="Type in a name">' +

'<li><a href="" id="svetlana-alexievich">Svetlana Alexievich</a></li>'+ 
'<li><a href="" id="woody-allen">Woody Allen</a></li>'+
'<li><a href="" id="maya-angelou">Maya Angelou</a></li>'+
'<li><a href="" id="margaret-atwood">Margaret Atwood</a></li>'+
'<li><a href="" id="julian-barnes">Julian Barnes</a></li>'+
'<li><a href="" id="ann-beattie">Ann Beattie</a></li>'+
'<li><a href="" id="saul-bellow">Saul Bellow</a></li>'+
'<li><a href="" id="jorge-luis-borges">Jorge Luis Borges</a></li>'+
'<li><a href="" id="tc-boyle">T.C. Boyle</a></li>'+
'<li><a href="" id="ray-bradbury">Ray Bradbury</a></li>'+
'<li><a href="" id="octavia-butler">Octavia Butler</a></li>'+
'<li><a href="" id="as-byatt">A.S Byatt</a></li>'+
'<li><a href="" id="orson-scott-card">Orson Scott Card</a></li>'+
'<li><a href="" id="anne-carson">Anne Carson</a></li>'+
'<li><a href="" id="raymond-carver">Raymond Carver</a></li>'+
'<li><a href="" id="michael-chabon">Michael Chabon</a></li>'+
'<li><a href="" id="jonh-cheever">John Cheever</a></li>'+
'<li><a href="" id="rebecca-curtis">Rebecca Curtis</a></li>'+
'<li><a href="" id="lydia-davis">Lydia Davis</a></li>'+
'<li><a href="" id="don-delillo">Don Delillo </a></li>'+
'<li><a href="" id="junot-diaz">Junot Diaz</a></li>'+
'<li><a href="" id="philip-k-dick">Philip K Dick</a></li>'+
'<li><a href="" id="anthony-doerr">Anthony Doerr</a></li>'+
'<li><a href="" id="roddy-doyle">Roddy Doyle</a></li>'+
'<li><a href="" id="jennifer-egan">Jennifer Egan</a></li>'+
'<li><a href="" id="dave-eggers">Dave Eggers</a></li>'+
'<li><a href="" id="louise-erdrich">Louise Erdrich</a></li>'+
'<li><a href="" id="mavis-gallant">Mavis Gallant</a></li>'+
'<li><a href="" id="james-fenton">James Fenton</a></li>'+
'<li><a href="" id="jonathan-safran-foer">Jonathan Safran Foer</a></li>'+
'<li><a href="" id="richard-ford">Richard Ford</a></li>'+
'<li><a href="" id="jonathan-franzen">Jonathan Franzen</a></li>'+
'<li><a href="" id="neil-gaiman">Neil Gaiman</a></li>'+
'<li><a href="" id="mary-gaitskill">Mary Gaitskill</a></li>'+
'<li><a href="" id="roxane-gay">Roxane Gay</a></li>'+
'<li><a href="" id="amy-hempel">Amy Hempel</a></li>'+
'<li><a href="" id="joe-hill">Joe Hill</a></li>'+
'<li><a href="" id="adam-johnson">Adam Johnson</a></li>'+
'<li><a href="" id="miranda-july">Miranda July</a></li>'+
'<li><a href="" id="garrison-keilor">Garrison Keillor</a></li>'+
'<li><a href="" id="jhumpa-lahiri">Jhumpa Lahiri</a></li>'+
'<li><a href="" id="ursula-k-le-guin">Ursula K. Le Guin</a></li>'+
'<li><a href="" id="jonathan-lethem">Jonathan Lethem</a></li>'+
'<li><a href="" id="hilary-mantel">Hilary Mantel</a></li>'+
'<li><a href="" id="george-rr-martin">George R.R. Martin</a></li>'+
'<li><a href="" id="ian-mcewan">Ian McEwan</a></li>'+
'<li><a href="" id="jay-mcinerney">Jay McInerney</a></li>'+
'<li><a href="" id="john-mcphee">John McPhee</a></li>'+
'<li><a href="" id="lorrie-moore">Lorrie Moore</a></li>'+
'<li><a href="" id="haruki-murakami">Haruki Murakami</a></li>'+
'<li><a href="" id="vs-naipaul">VS Naipaul</a></li>'+
'<li><a href="" id="flannery-oconnor">Flannery O\'Connor</a></li>'+
'<li><a href="" id="heather-oneill">Heather O\'Neill</a></li>'+
'<li><a href="" id="michael-oondatje">Michael Oondatje</a></li>'+
'<li><a href="" id="zz-packer">Z.Z. Packer</a></li>'+
'<li><a href="" id="annie-proulx">Annie Proulx</a></li>'+
'<li><a href="" id="salman-rushdie">Salman Rushdie</a></li>'+
'<li><a href="" id="james-salter">James Salter</a></li>'+
'<li><a href="" id="george-saunders">George Saunders</a></li>'+
'<li><a href="" id="rebecca-solnit">Rebecca Solnit</a></li>'+
'<li><a href="" id="willian-t-vollman">William T. Vollman</a></li>'+
'<li><a href="" id="david-foster-wallace">David Foster Wallace</a></li>'