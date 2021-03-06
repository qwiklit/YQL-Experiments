 
        
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
    center: [ -79.50356125831604,
          43.66298989910344],
    // initial zoom
    zoom: 15,
    pitch: 60, // pitch in degrees
    bearing: -205, // bearing in degrees
    scrollZoom: false
    
  });
 
 

  var items = {
    "type": "FeatureCollection",
    "features": [
        
        
       {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
 -79.491333,43.651443
         ]
        },
        "properties": {
          "name": "Swept Away:<br> The Story of Hurricane Hazel",
          "year": "1954",
          "image": '<img src="https://i.imgur.com/ApKrC6l.jpg">',
          "address": "Lambton House Tours",
          "neighbourhood": "Humber River Tour",
          "city": "Toronto",
          "presentedby": "myseum-of-toronto",
          "description": "The story of how a telephone lineman survived Hurricane Hazel",
          "tags": "disasters humber",
          "state": '<p>Hurricane Hazel caught Torontonians off guard when the storm waters breached the banks of the Humber and flooded several roads and neighbourhoods, killing 81 people and leaving thousands homeless. The day after the catastrophe, Toronto journalists wrote countless stories of tragedy and survival as locals tried to pick up the pieces the storm carried down the overflowing river.</p><p>The story of Gerald Elliott is particularly harrowing. As a "lineman" (someone who fixed telephone lines), Elliott survived the flooding by clinging onto the branch of a "unbelievably sturdy little willow tree" as the floodwaters pounded the Long Branch neighbourhood. </p><p>Trouble began for Elliott when the floodwaters trapped him on a bridge on Old Mill Road, located today at Bloor St. on the Humber River. As the river rose with feverish intensity, he left his car and hung onto a tree while standing on its roof. Then, the water swept his car away and he held on for dear life.</p> <p>Luckily, police officers and firefighters from surrounding communities finally spotted Elliott after four hours on the branch. Working with local rescuers, Max Hurley took a small rowboat and carefully negotiated the raging waters as they rushed beneath Elliott.  He threw a rubber hose to cling onto, but after Elliott wrapped it around his waist, the hose broke and he flew off the bridge into the raging floodwaters. </p><p>Elliott thought he was done for. But in another stroke of luck, he grabbed another branch. Hundreds looked on until dawn and rescuers even tried using a helicopter to save him. Finally, however, Hurley persisted on his lifeboat and rowed the lineman to safety. That night, they rushed Elliot to St.Joseph’s hospital where he remained for hours covered in warm water bottles.</p>'
        }
      },
        

          {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
 -79.388885,43.655325,
           ]
        },
      "properties": {
          "name": "Anatomy of an Epidemic",
          "year": "1918-1919",
          "image": '<img src="https://images.thestar.com/content/dam/thestar/life/health_wellness/2009/05/01/new_virus_lacks_killer_genes_of_1918_flu/influenza.jpeg.size-custom-crop.0x650.jpg">',
          "address": "44 Victoria St",
          "neighbourhood": "Discovery District",
          "city": "Toronto",
          "presentedby": "myseum-of-toronto",
          "description": "At the end of World War I, an unexpected flu outbreak ravaged Toronto",
          "tags": "medicine disasters",
          "state": "<p>The end of the First World War brought joy and happiness to Canadians, but just as people thought the end of war would bring an end to death and suffering, a curveball few expected would suddenly devastate the entire planet: The Spanish Flu.</p><p>The name itself is misleading. While epidemiologists have debated the origins of the virus, most studies point to an army base in Kansas as being ‘Ground Zero’ for the epidemic. While largely unnoticed at first, a second wave of the virus incurred its wrath upon unsuspecting cities. As the war died down and soldiers travelled from Europe to all regions of the world, the virus went from an issue of little concern to a matter of national security in a matter of days.</p><p>Consider the account from the Toronto Daily Star on October 1st, 1918. “Nothing in Present Situation to Warrant Closing of Public Places”, stated the Toronto Daily Star. encouraging people to simply get fresh air and to remain calm. Two days later, over 500 people would be admitted to the Military Base Hospital on Gerrard Street, though no deaths would yet be reported. In a sudden turnaround, newspapers ordered the virtual shutdown of the city. At the time, few--if anybody--expected the Spanish Flu to become the deadliest epidemic in recorded history. An alderman, not knowing just how deadly the latest strain would be, lamented that he was the only one in his family who had not been stricken with the flu.</p><p>“392 Deaths in City Since Flu Outbreak,” proclaimed the Star, noting that 27 people had died the day before. Worse yet, The Department of Public Health suffered a shortage of nurses because so many of them contracted the disease while treating other patients. Still, Toronto tried to keep a business-as-usual approach to daily life, with local regiments pushing war bonds, pharmacies pushing questionable flu remedies and newspapers filling the pages of the newspaper with war dispatches. After all, the war would end only a month after the first flu deaths. </p><p>The flu epidemic proved to be a turning point in Canada’s treatment of health epidemics. Clearly unprepared for a major plague, The Canadian government passed the Department of Health Act and the treatment of contagious disease, especially in big cities, would become the subject of intense focus and research for decades to come.</p><p>While the outbreak continued for several years and forced the cancellation of the Stanley Cup, it slowed down in the early 1920s and disappeared by the middle of the decade. Still, the flu marked a bittersweet end to the wartime destruction around the world. </p>"
        }
      },
        



        
    //Christie Pits
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
 -79.419737,43.666459,
          ]
        },
        "properties": {
          "name": "The Christie Pits Riots",
          "year": "1933",
          "image": '<img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Christie_Pits_riot.jpg">',
          "address": "750 Bloor St W, Toronto, ON",
          "neighbourhood": "The Annex",
          "city": "Toronto",
          "presentedby": "myseum-of-toronto",
          "description": "Inspired by the rise of Nazism in Germany, thousands of Toronto youth fought for hours i nthe neighbourhood park ",
          "tags": "riots judaism",
          "state": "<p>It's easy to imagine Toronto as removed from the violence of antisemitism and the rise of Adolf Hitler, but on an August evening in 1933, the animosity that troubled the streets of Berlin emerged in Toronto during a baseball game at Christie Pits. Earlier in 1933, Adolf Hitler emerged as the winner of the German election with a populist platform that promised the return of good fortune and pride to Germany after a decade and a half of economic misery.</p><p>During a neighbourhood baseball game between the Harbord Playground team and another represented by St.Peter's church a couple of days before the brawl, someone pulled out a white flag containing a swastika, the Nazi symbol synonymous with white supremacy and hatred of Jewish people. Up to 10,000 people converged upon the park as the game suddenly became a platform for racial politics, and soon enough, young men brawled for over five hours in what the Toronto Daily Star called “one of the worst free-for-alls ever seen in the city.”</p><p>Stabbings and beatings forced several young men on both sides to go to Toronto Western Hospital, many of whom were simply bystanders drawn by the crowd. The Daily Star claims that the violence was due in part to many in the crowd chanting “Heil, Hitler”, the common Nazi German salute, towards those the Germans had already begun victimizing.</p><p>That very year, Adolf Hitler kickstarted twelve years of persecution, violence and genocide against Jews, Roma, Jehovah's Witnesses and homosexuals, though even his supporters could not have predicted the horrific extent of the Third Reich.</p><p>Even after using horses, billie clubs and even exhaust smoke from motorcycles, the crowds at Christie Pits failed to disperse in an orderly manner. Only at 2am did the fighting begin to dissipate.</p>"
        }
      },
        
        
        
          //Leaside Airmail
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
 -79.36136,43.717078
           ]
        },
        "properties": {
          "name": "The Loaded Story of Canada’s First Airmail Flight",
          "year": "1918",
          "image": '<img src="https://i.imgur.com/4uXV3go.jpg">',
          "address": "370 Queen St W, Toronto, ON",
          "neighbourhood": "Leaside",
          "city": "Toronto",
          "presentedby": "myseum-of-toronto",
          "description": "During Prohibition, Canada’s first airmail letters arrived in Toronto in a plane so loaded down with cases of liquor it could barely fly.",
          "tags": "transportation flying",
          "state": "<p>By the end of the First World War in 1918, airplanes were only beginning to make their way into civilian life. The Leaside airport, located in the Don Valley just south of the present day neighbourhood of the same name, became one of the first hubs for aircraft and aerial transportation in Canada.</p><p>The Summer of 1918 was significant because of a particular milestone: the first airmail flight in Canada made its way from Montreal to Toronto. But along with a bag full of letters, the pilot, Captain Brian Peck, also commandeered a cargo hold full of liquor so heavy that the plane barely got off the ground and even needed refueling in Kingston.</p><p>Peck flew to Montreal to perform aerial stunts to spur recruitment and military support, but a rainstorm delayed plans. Never one to waste a good opportunity, he agreed to perform the first airmail flight in Canadian history. But Peck required something else. His friend at the Leaside airport was getting married and wanted suitable “refreshments” for the wedding celebration. So beneath the seat of his Curtis JN4 aircraft, Peck became the first person in Canada to also smuggle alcohol by plane.</p><p>In 1916, the Ontario Legislature passed the Ontario Temperance Act, a ruling that barred the sale and distribution of liquor in the province. Always in demand, however, smugglers thought of novel ways to acquire their libations, and the aerial option offered a new, experimental alternative that nobody—including the mayor—saw coming.</p><p>When the plane landed in Kingston to refuel, the suppliers did not have the proper gasoline and the flight stopped short, again, in the town of Deseronto. After six and a half hours, the plane descended towards Leaside airport beneath the city’s relatively new powerlines. Once he landed, though, Beck removed the cargo and mail so quickly that authorities had no time to react.</p><p>Still, the flight would go down in history for changing the way we send mail in Canada. Only a half century later would the the truth about the smuggled contraband be revealed.</p>"
        }
      },
        
         //Anne Powell
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
-79.391821, 43.65198
          ]
        },
        "properties": {
          "name": "Anne Powell’s Fatal Love Affair",
          "year": "1787-1822",
          "image": '<img src="https://tce-live2.s3.amazonaws.com/media/media/394470fa-a088-446c-9a8d-ff5c542f33b0.jpg"><p><i>John Beverley Robinson. Image courtesy of The Canadian Encyclopedia</i>',
          "address": "Stephanie and John St., Toronto, ON",
          "neighbourhood": "Queen West",
          "city": "Toronto",
          "presentedby": "myseum-of-toronto",
          "description": "A terrifying infatuation, involving two of the town’s most prominent families, led to a notorious scandal in the early history of Toronto.",
          "tags": "love tragedy powell",
          "state": "<p>For the most part, the majority of the “history” you encounter on the streets of Toronto is public. Plaques commemorate famous public figures, protests, wars. Rarely, however, are tributes paid to the private lives of public figures, all of whom endure the triumph and tragedy of personal relationships.</p><p>During the early 1800s, one relationship in particular captivated the 2,000 or so residents of York. Anne Powell, the daughter of Chief Justice William Dummer Powell, fell madly in love with war veteran John Beverley Robinson, who fought the Americans in the War of 1812. In the young community isolated from the gossip of Buckingham Palace, Anne became the subject of infamy when she declared she was still in love with Robinson even after he married another woman from England.</p><p>Despite the obvious barriers, Anne persisted by showing up at his house on John and Beverley, and when the soldier left for England, Anne tried to pursue them across the Atlantic Ocean, but not before her parents locked her in her bedroom to prevent her from going. Still, locks didn’t prevent her from escaping and trailing Robinson and his wife, Emma, as they rode a sleigh to New York City. The captain of the ship assured Robinson that Anne would not be allowed on the England-boat ship.</p><p>So Anne took the following vessel, a trip that would prove to be her fate. Upon approaching the Irish coast, a gale threw broke the mast of the ship and killed 45 of the 56 passengers. Her body was so disfigured that it could only be identified by a piece of jewelry worn around her neck. Robinson traveled to Ireland and was the one that identified her.</p>For the Powell family, this story--bearing all the hallmarks of a Victorian tragedy--marked the beginning of the end of their sterling reputation in Upper Canada. But Robinson only grew the social standing of his family, and in 1829, became Chief Justice of Upper Canada and was even knighted for his troubles. He would die in 1863, three years before confederation.</p>"
        }
      },
        
          //Elizabeth Arden
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
-79.521539, 43.775354
          ]
        },
        "properties": {
          "name": "The Toronto Nurse Who Changed Her Name and Became Elizabeth Arden",
          "year": "1878-1966",
          "image": '<img src="https://fthmb.tqn.com/FcJ0tABgEgbbdR8SGvv5fjVQ70E=/3558x2374/filters:fill(auto,1)/Elizabeth-Arden-2-53062183x1-56aa27315f9b58b7d00104d4.jpg">',
          "address": "1000 Murray Ross Pkwy, North York, ON",
          "neighbourhood": "Woodbridge",
          "city": "North York",
          "presentedby": "myseum-of-toronto",
          "description": "How a struggling young nursing student decided to spend her life making people feel and look beautiful, and ended up making herself rich as well.",
          "tags": "business leadership woodbridge",
          "state": "<p><p>Florence Nightingale Graham was just a nursing student living in Toronto when she decided to drop her current life and move to New York City to seek a fortune in beauty salons and cosmetics. </p><p>While she was named after Florence Nightingale, the pioneer of nursing, the young entrepreneur would change her name to Elizabeth Arden and make a name--and brand--for herself as one of the undisputed queens of the beauty industry.</p><p>Arden succeeded in part because of a fearless and industrious personality. But her humble roots as the daughter of a fruitseller forced her to be, from a young age, independent and self-subsisting. Born in Woodbridge in 1878, her family depended upon a meagre allowance the fell well short opulence.</p><p>When she turned 18, Arden pursued nursing and odd jobs in Toronto to save money, but she felt that she would much rather make people look beautiful than feel well. Out of compulsion, she joined her brother in New York City and got a job working for Eleanor Adair, who opened the first beauty salon in the United States and introduced facial cleansers to consumers.</p><p>Americans did not immediately warm up to the idea of painting one’s face and dabbing strange ingredients upon their skin, but magazines like vogue began spreading the culture of beauty salons far beyond Paris and Manhattan. Seeing the trend pick up steam, Arden (still called Florence) changed her name and opened up the first of over 100 beauty salons she would open up in her lifetime. By the 1940s, over 300 beauty products bore her name, and Arden’s creations soon filled department store shelves across the world.</p><p>Arden, who died in 1966, never forgot where she came from and pledged support and conservation efforts to Woodbridge’s Dalziel Pioneer Park, today known as Black Creek Pioneer village.</p>"
        }
      },
        
        
         //Great Stork Derby
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
-79.380169, 43.657742
          ]
        },
        "properties": {
          "name": "The Great Stork Derby",
          "year": "1926",
          "image": '<img src="https://cdn.torontoist.com/wp-content/uploads/2016/10/20161028-Stork-Carter.jpg"><img src="https://cdn.torontoist.com/wp-content/uploads/2016/10/20161028-Stork-Timleck.jpg">',
          "address": "Gould St & Victoria St,Toronto, ON",
          "neighbourhood": "Downtown Toronto",
          "city": "Toronto",
          "presentedby": "myseum-of-toronto",
          "description": "A wild and controversial contest over a businessman's will brought new life to Toronto's citizens",
          "tags": "family reproductive-rights SickKids",
          "state": "<p>Charles Vance Millar, the president of the O’Keefe Brewing Company, was like many successful entrepreneurs in Toronto at the beginning of the 20th century -- wealthy, devout and committed to the betterment of his city. But when the businessman died in 1926, the contents of his will kickstarted a decade-long race that would eventually be known as “The Great Stork Derby”. </p><p>The clause in his will stipulated that the family who bore the most amount of children in the ten years after his death would be given the remainder of Millar’s will, some of which was also donated to the Hospital for Sick Children and to Protestant churches around Toronto.</p><p>While some thought Millar was simply playing a practical joke, the Toronto Daily Star soon began following the competing families, writing profiles on the mothers attempting to bear the most children possible. Unsurprisingly, the contest drew the ire of local and international figures alike, including Margaret Sanger, pioneer of reproductive rights. She called the Stork Derby “deplorable” and argued that it reduced women to animals.</p><p>The extended Millar family also bemoaned the morality of the Derby, arguing that it went against social good and therefore should be considered null. The Ottawa Citizen stated that, by the end, the courtroom fight for the money had reached “bedlamistic proportions”.</p><p>By 1933, though, court interpreter Grace Bagnato had already bore seven children since 1926 and was expecting another. Even with the Great Depression and continued urbanization adding further questions about the morality of the program, newspapers continued their coverage all the way to 1938, when four different families with nine children each were officially given a share of the will.</p>"
        }
      },
        
        {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
 -79.378009,43.651062
          ]
        },
        "properties": {
          "name": "Hidden Ties: Secrets of the Underground Railroad in Canada",
          "year": "1833-1865",
          "image": '<img src="https://torontoist.com/attachments/toronto_kevinp/2008_02_04fonds1244item71.jpg">',
          "address": "10 Adelaide St E, Toronto, ON",
          "neighbourhood": "St.Lawrence",
          "city": "Toronto",
          "presentedby": "myseum-of-toronto",
          "description": "Introducing the many stories linking Toronto to the Underground Railroad",
          "tags": "afro-canadian-history underground-railroad",
          "state": "<p>The end of slavery in the British empire in 1833 immediately sparked a black American diaspora from the United States, but for both escaped slaves and free African-Americans, the travel to Canada was not without its challenges.</p><p>The sheer profitability of slave labour in the American South encouraged the signing of the 1850 Fugitive Slave Act, which essentially allowed for the “re-kidnapping” of African-Americans regardless of the status of their freedom if they had escaped from slavery. With that in mind, church groups and abolitionists had to act secretly to avoid slave catchers who wanted to make a quick profit by selling a black man to the slave plantations dotting the Mississippi Delta. During the 19th century, these plantations produced the majority of the world’s cotton, and large harvesting machines had yet to be invented, meaning that slavery presented the “best” option for the feudalist landowners.</p><p>Fortunately, by the mid-1830s, black settlements emerged in Western Ontario near London, Elgin and Amherstburg. While black families still encountered virulent racism in Canada, many were able to operate their own farms and businesses before the end of the civil war. Some, like Dr.Anderson Ruffin Abbott, even returned to the United States to serve in the Civil War on the Union side. </p><p>By 1865, over 2,000 black people lived in Toronto and joined the patchwork of diverse immigrant communities who settled here.</p>"
        }
      },
        
       {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
-79.412272,43.664893     ]
        },
        "properties": {
          "name": "Deborah Brown: Life as an ex-slave in the Annex",
          "year": "1798-1908",
          "image": '',
          "address": "10 Adelaide St E, Toronto, ON",
          "neighbourhood": "St.Lawrence",
          "city": "Toronto",
          "presentedby": "myseum-of-toronto",
          "description": "As a 'fugitive' who sought a better life in Toronto, Deborah Brown represented the struggles of immigrant poverty in 19th century Toronto",
          "tags": "afro-canadian-history underground-railroad",
          "state": "<p>During the 19th century and long before the expansion of Toronto, small cottage once stood on Markham street near the corner of Bathurst and Bloor. Then called Seaton Village, the area known as the Annex contained a melting pot of immigrant families and impoverished families who sought their fortune in Toronto.</p><p>For Deborah Brown, the owner of the small cottage, a chance at a new life was no trifling matter. As a fugitive slave from Maryland, she escaped slavery with her husband in the mid 1800s after they learned that he was going to be sold to slave owners. With little to her name, Deborah Brown could not purchase large acreages like wealthy British landowners did in Rosedale and along King Street. Rather, in the cottage where she lived most of her life, she worked as a washerwoman, her husband as a day labourer.</p><p>When she died at the age of 111 in 1908, Deborah had lived almost as long as the town of York has been settled and had witnessed the city’s growth from a waterfront fort to a metropolis. Her cottage, once on the outer ridge of the city, now stood within the sprawl.  Her American-born daughter and granddaughter also settled in Toronto, due in part to the Emancipation Proclamation signed by Abraham Lincoln in 1863. Previously, slaveowners could still recapture fugitive slaves, and regardless of their status, black families were still subject to kidnapping and human trafficking by the profiteers of the trade. </p><p>Newspaper accounts of her life reveal that, by the time she reached the twilight of her life, she had also worked as a nurse focusing on herbal remedies, and had also been a regular at the Methodist church in Seaton Village.</p>"
        }
      },    
        
        
          {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
 -79.308523, 43.682869    ]
        },
        "properties": {
          "name": "Emancipation Day In Toronto",
          "year": "1839",
          "image": '<img src="https://dynamicmedia.zuza.com/zz/m/original_/4/7/47c63bdd-95b8-4bbf-8a3e-e3c494ef1f04/Emancipation_Day___Super_Portrait.jpg">',
          "address": "2029 Gerrard St E, Toronto, ON",
          "neighbourhood": "The Beaches",
          "city": "Toronto",
          "presentedby": "myseum-of-toronto",
          "description": "As a 'fugitive' who sought a better life in Toronto, Deborah Brown represented the struggles of immigrant poverty in 19th century Toronto",
          "tags": "afro-canadian-history underground-railroad emancipation",
          "state": "<p>As early as 1839, black Torontonians celebrated what is known as Emancipation Day, an event celebrating the end of slavery in Upper Canada and the many colonies still occupied by the British Empire around the world. Lead primarily by black Christians, including members of the African Methodist Episcopal (AME) Chapel, historical accounts from prominent religious leaders and abolitionists shows just how important the events were for Toronto’s growing black community, many of whom had escaped the tyranny of Confederate slavery by way of the Underground Railroad. </p><p>The Toronto Abolition Society invited Americans and Canadians alike to march to City Hall from the AME chapel, where ministers and even the mayor gave speeches to a celebrating crowd. Along with Amherstburg and Windsor and Hamilton, Toronto became one of the primary harbourers of black families since slave-owning became illegal.</p><p>Historically, Toronto has served as host for large influxes of refugee populations, but few hit as close to home as The Underground Railroad. Fortunately, church groups within the black community helped maintain a sense of identity for the displaced families. As Emancipation Day continued as a tradition into the 20th century, upwards of 8000 people from around Ontario and Upstate New York converged upon Port Dalhousie for an annual picnic.</p><p>Today, Emancipation Day celebrations continue around Toronto with an event called the Underground Freedom Trail Ride, where participants literally take the train from Union to Downsview Station.</p>"
        }
      },    
        
        
          {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
  -79.377526,43.650670  ]
        },
        "properties": {
          "name": "Escaping slavery on the Underground Railroad",
          "year": "1855",
          "image": '<img src="http://www.archives.gov.on.ca/en/explore/online/black_history/pics/24785_520.jpg"><i>Unidentified Black family portrait, Tintype, Alvin D. McCurdy fonds, Archives of Ontario</i>',
          "address": "10 Adelaide St E, Toronto, ON",
          "neighbourhood": "St.Lawrence",
          "city": "Toronto",
          "presentedby": "myseum-of-toronto",
          "description": "The story of two couples who traveled from the American South to Toronto",
          "tags": "afro-canadian-history underground-railroad emancipation",
          "state": "<p>Historical accounts by Black abolitionist William Still tell the story of two couples, the Wanzer’s rand Grigsby’s, who risked their lives to escape capture for slaveowners in Virginia. Like so many others at the time. Escaping slavery meant more than just escaping slave owners. During the 1850s in the mostly abolitionist North, kidnappers working for slave owners captured free black citizens to force them to work on plantations in the American South. And with the Fugitive Slave Act in effect in the year 1850, any slave deemed “escaped” would be deemed a fugitive of the law. </p><p>During the Christmas Holidays of 1855, the Masters of The Wanzer’s and Grigsby’s took advantage of the absence of their owners to escape via horse-drawn carriage. After about 100 miles of travel, the escapees encountered a group of white men, who promptly ordered they disembark from their carriage and surrender. Suddenly, the slaves pulled out knives and guns themselves and engaged in a tense standoff. Fortunately, the white men retreated, and they made it all the way to Philadelphia.</p> <p>From there, they met the Philadelphia Vigilance Committee, a group associated with the Underground Railroad and the many abolition societies that existed in North America. The Railroad, though not a literal train track, contained organizations and people that acted as “conductors” -- people who transport slaves to safe harbour -- and stationmasters, who house slaves in churches. Once in Syracuse, the couples travelled to Toronto, where they were finally free from recapture. There, they met Mrs. Agnes Willis, who ran the Ladies’ Association for the Relief of Destitute Colored Fugitives. Like other abolitionist groups, she provided employment for the escapees upon arrival and made sure they found a place to live.</p>"
        }
      },    
            
         
          //Oscar Wilde
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
           "marker-color": "blue",
            "coordinates": [
              -79.379504, 43.650089
          ]
        },
        "properties": {
          "name": "Oscar Wilde in Toronto",
          "year": "1882",
          "image": '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Oscar_Wilde_Sarony.jpg/1200px-Oscar_Wilde_Sarony.jpg">',
          "address": "21 Adelaide St W, Toronto, ON",
          "neighbourhood": "Financial District",
          "city": "Toronto",
          "presentedby": "myseum-of-toronto",
          "description": "In 1882, Torontonians packed the Grand Opera House and the pavilion at Allan Gardens to see and hear the notorious Mr. Wilde",
          "tags": "literature celebrities theater LGBT",
          "state": "<p>During the Summer 1882, 25-year old Oscar Wilde arrived in Toronto to such fanfare that the lieutenant-governor, John Beverley Robinson, hosted a banquet for the young playwright and even took him out for a game of lacrosse.<p>Wilde, the writer and public figure who would eventually pen The Importance of Being Earnest and The Picture of Dorian Gray, became a popular fixture in London social circles when he appeared at parties in extravagant dress. A giant in both size and presence, his ability to combine storytelling and wit inspired both admiration and furor from socialites. He would soon put his talents to good use.</p><p>The 1880s proved to be an interesting era in the United States and Canada, as rising populations in urban centres led to a booming lecture and performance circuit. Mark Twain roused audiences with his Mississippi Sketches; France’s Sarah Bernhardt captured theatregoers hearts with her signature tragedies; and Wilde, still only 25 and in need of quick money, hopped on a ship to North America to spread his dry wit and wisdom to the raucous crowds.</p><p>Two of the 125 lectures performed by Wilde in North America took place in Toronto, the first at the Grand Opera House on Adelaide, the second at the Allan Gardens Conservatory. In classic Wilde style, his performances riffed on the differences between American and European sensibilities, and he spent a good amount of time criticizing North American furniture.<p>"
        }
      },
        
        //Oscar Wilde
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
           "marker-color": "blue",
            "coordinates": [
 -79.377668,43.717930
            ]
        },
        "properties": {
          "name": "The Young, Blind Veteran Who Founded The CNIB",
          "year": "1882",
          "image": '<img src="http://thatallmayread.ca/wp-content/uploads/2017/02/Photo-2017-05-17-13-23-45-768x607.jpg">',
          "address": "1929 Bayview Ave, East York, ON",
          "neighbourhood": "Leaside",
          "city": "Toronto",
          "presentedby": "myseum-of-toronto",
          "description": "When a young lieutenant was told he would never see again, he vowed that a sniper’s bullet would never cost him independence. What he did thereafter won him the admiration of millions around the world.",
          "tags": "medicine icons disability",
          "state": "<p>Edwin A. Baker was one of the thousands of Canadian soldiers who were either killed or wounded in the brutal trench warfare of the First World War. Born in Collins Bay near Kingston, he enlisted in the army at the very beginning of the war and fought in Ypres, one of the most brutal theatres of war. It was there that a sniper’s bullet struck him directly in face, causing him to lose sight in both his eyes. Listless, Baker felt powerless. His girlfriend left him because she said she could never marry a blind man. Baker fell into a deep depression until a newspaper publisher, Sir Arthur Pearson, gifted the soldier a watch with braille markings. Able to tell the time, the wounded soldier figured he could do anything.</p><p>Baker promised to never let his lack of vision impede his autonomy for the rest of his life—an understatement considering his accomplishments. Once he returned to Canada, friends were so wowed by his can-do attitude that they set him up with a position an Ontario Hydro.</p><p>But even that wasn’t enough. When he learned that the Canadian Free Library for the Blind was closing, he urged the Toronto Women’s Musical Club to keep them afloat, and from then on he provided occupational training for the visually impaired. This would later turn into the Canadian National Institute for the Blind, a nationally-renowned organization that quickly provided work opportunities for the visually impaired in factories and offices. As the CNIB grew in size and stature, Baker continued as a spokesman for the Canadian Military and the welfare of veterans, and in 1951, the World Council for the Welfare of the Blind tapped him to be their first president.</p><p>As a final feather in his cap, the Canadian government named him one of 150 outstanding living Canadians for the 1967 centennial celebrations.</p>"
        }
      },
        
        //Shrapnels Corner
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
          -79.384401, 43.661031 
          ]
        },
        "properties": {
          "name": "'Shrapnels Corners' and the Anti-Greek Riots of 1918",
          "year": "1918",
          "image": '<img src="https://gencat4.eloquent-systems.com/webcat/systems/toronto.arch/resource/fo1244/f1244_it0903.jpg">',
          "address": "College St & Yonge St",
          "neighbourhood": "Downtown Toronto",
          "city": "Toronto",
          "presentedby": "myseum-of-toronto",
          "description": "Disillusioned by the lack of employment at the end of the First World War, frustrated young men blamed immigrants for their malaise.",
          "tags": "war riots racism",
          "state": "<p>By August 1918, news reports communicated from Europe indicated that German forces had begun losing ground and retreating back into the Rhineland. Even with impending victory around the corner, veterans returning from battle struggled to adapt to civilian life. The physically and psychologically wounded, many of them unable to work, gathered on the aptly-named Shrapnel's Corner at the intersection of College and Yonge.</p> <p>Bothered by the loitering, small business owners demanded the removal of benches at the corner. Soon, however, ire towards veterans soon became a racial issue, with locals scapegoating many Greek immigrants because some had not enlisted in the Canadian forces. Soon, barroom brawls turned into full-scale riots, with primarily white, English veterans fighting Greek immigrants and demanding the release of their arrested comrades.</p><p>The crowds primarily gathered at two places: Shrapnel's Corners and Victoria & Adelaide. Both men and women openly smashed and targeted Greek restaurants, and despite threats from the mayor's office, the riots continued for four days.</p><p>Paired with war time frustration, the anti-Greek rhetoric could not have been further from the truth. Far from objecting to the war effort, the Greek community reminded Torontonians that they supported the allies and that over 2,000 Greeks fought for the Canadian Expeditionary Forces. Still, the insurmountable death toll of the war cannot be ignored as a factor in the riots. Given that some majority-English neighbourhoods like Earlscourt suffered an immense amount of casualties, and given that in August of 1918, the war that was supposed to last a few months offered no end in sight, rioters felt that they weren't getting a fair shake.</p>"
        }
      },
        
         //Shrapnels Corner
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
         -79.380284,43.662108
          ]
        },
            "properties": {
          "name": "Chuvalo vs Ali",
          "year": "1966",
          "image": '<img src="https://i.imgur.com/6zAGXk1.jpg">',
          "address": "50 Carlton St",
          "neighbourhood": "Church and Wellesley",
          "city": "Toronto",
          "presentedby": "myseum-of-toronto",
          "description": "On a frosty night in 1966, a local boxer faced the legendary Muhammad Ali at the Maple Leaf Gardens",
          "tags": "sports maple-leaf-gardens junction",
          "state": "<p>A cold March night set the scene for one of the most epic heavyweight battles in boxing history. George Louis Chuvalo, the son of Croatian immigrants who grew up in the Junction, would take on perhaps the most famous boxer in history at Maple Leaf Gardens. While Chuvalo ascended to as high as second place in the world heavyweight boxing rankings, few expected him to put up a fight against somebody who called himself “The Greatest” and had the skills to back it up.</p><p>During the 1960s, the sport of boxing took a wildly political turn when Muhammad Ali decried the Vietnam War and declared his refusal to serve overseas for the American military. As thousands of Americans fled to Canada as conscientious objectors, locals supported Ali and soon the city became abuzz with anticipation. A Canadian would be taking on a living legend in their own backyard for the most prestigious title in the sport.</p><p>But Chuvalo's famous battle was not even meant to happen. Only a few weeks earlier, Ali's comments forced the postponement of a title fight in Chicago. The governor of Illinois himself ordered the fight to be cancelled. The original contender, Ernie Terrell, also pulled out because the Chicago Mob could not match the influence of Ali's funders in the radical group the Nation of Islam.</p><p>As hatred against Ali grew, Canadian fans maintained their admiration for the fighter, and given that Chuvalo likewise sold arenas out, they decided to pack 18,000 people into Maple Leaf Gardens. Conn Smythe, owner of the Maple Leafs, objected to the fight but was overruled; it soon became clear that Torontonians wanted desperately to see Ali fight regardless of the circumstances. </p><p>Many predicted that Ali would simply walk over Chuvalo, but few expected an equal fight that would go all 15 rounds. Both nimble and defensive, both fighters turned the fight into a trial of endurance. Chuvalo, who had actually beaten many boxing greats from the United States, took a heavy beating but replied forcefully with devastating kidney shots that would send Ali to the hospital. Regardless, Ali ended up scoring a victory, but not before Chuvalo gained the respect of Canada, the world, and Muhammad Ali himself. They would remain friends after the fight.</p>"
        }
      },
        

        
        
        //Cannons
         {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
               -79.391326,43.661775
          ]
        },
        "properties": {
          "name": "Two Bronze Cannon in Queen’s Park recall Canada’s Greatest Military Heroes",
          "year": "1859",
          "image": '<img src="https://www.blogto.com/upload/20070731_cannonblackwhite.jpg">',
          "address": "23 Queen's Park Cres E, Toronto",
          "neighbourhood": "Queen's Park",
          "city": "Toronto",
          "presentedby": "myseum-of-toronto",
          "description": "Two cannons have become lasting memorials to Canadians who received the British Empire’s highest award for bravery.",
          "tags": "history war queens-park",
          "state": "<p>When you aren’t familiar with the backstory of a historical artifact, it can sometimes be difficult to draw an emotional connection with the object in question. But two cannons located on stone pedestals in Queen’s Park carry the weight of over 160 years of battlefield sacrifice, and with that, the echoes of a world-famous poem and an unexpected war.</p><p>Inscribed in English, Latin and Russian below the rugged bronze cannons, the engravings pay tribute to Canada’s small but important contribution to the British war effort in Crimea between 1853-1856. Once located in the south of Ukraine, the drums of war returned to the region in 2014 when Russian forces annexed the territory.</p><p>The Crimean War was of little concern to pre-Confederation Torontonians, but one soldier, Lieutenant Alexander Dunn, became the first Canadian recipient of the Victoria Cross when he partook in the charge of the light bridge at the town of Balaclava, part of a larger fight called the siege of Sebastopol. The Victoria Cross is today still the highest honour bestowed by the British Commonwealth.The failed charge eventually inspired Alfred Lord Tennyson’s famous poem, “The Charge of the Light Brigade”, a masterwork of poetic rhythm and an unforgettable tribute to those lost in war:</p><p>Cannon to right of them,</p><p>Cannon to left of them,</p><p>Cannon in front of them</p><p>Volley'd and thunder'd;</p><p>Storm'd at with shot and shell,</p><p>Boldly they rode and well,</p><p>Into the jaws of Death,</p><p>Into the mouth of Hell</p><p>Rode the six hundred.</p><p>While the British side won the war, Queen Victoria paid tribute to the battles by sending two captured Russian cannons to Queen’s Park.</p>"
        }
      },
        
          
        //Cannons
         {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
              -79.379704, 43.650089
          ]
        },
        "properties": {
          "name": "Sarah Bernhardt’s ‘scandalous’ performance in Toronto",
          "year": "1881",
          "image": '<img src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Sarah_Bernhardt%2C_par_Nadar%2C_1864.jpg">',
          "address": "21 Adelaide St W, Toronto, ON",
          "neighbourhood": "Financial District",
          "city": "Toronto",
          "presentedby": "myseum-of-toronto",
          "description": "In 1881, she was the reigning star of the world’s stage and loved by millions, but her performance was considered too daring for puritanical Toronto and she played to a half-empty house.",
          "tags": "theatre feminism celebrities",
          "state": "<p>Sarah Bernhardt enraptured European audiences with theatre performed entirely in French. After spending the early part of her life in a convent, she fell madly in love with theatre when she attended a play at the age of 15. Only a decade after the original moment of inspiration, Bernhardt’s hypnotizing presence led admirers and critics to dub her “The Divine Sarah”. So big was the cult of Bernhardt that playwrights wrote tragedies in her honor, an in some cases, women implored their suitors to court her instead of them.<p>But she was not so appealing to Torontonians when she stopped over in Hogtown as part of her North American tour. Performing one of the century’s most notorious plays, Alexandre Dumas’ La Dame Aux Camelias, theatre managers vexed about ticket sales urged her to change the name of the play to Camille to ward off detractors. Nevertheless, the Catholic Church in Toronto and Montreal spoke out against the abominable actress, and even the newspapers painted the thespian as a sinful, fallen woman tainting the souls of the community.</p><p>The warnings of the clergy and press warded off crowds for the opening matinee of Camille, but audiences were so impressed by the performance that they gasped and applauded at her every move. Word soon got out, and crowds packed Adelaide Street's Grand Opera House for her evening performance. The buzz also carried over to New York City, and 50,000 resellers packed Broadway to watch the French actress perform.<p>Bernhardt once said “I will die on the stage. It is my battlefield.” Surely, on that cold March morning, she turned a losing battle into a triumphant victory that Toronto’s theatergoing classes would not soon forget.</p><img src='https://en.wikipedia.org/wiki/Grand_Opera_House_(Toronto)#/media/File:The_new_grand_opera_house_Toronto.jpg'></p>"
        }
      },
             
        
        
        //Kit Coleman
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
 -79.380871, 43.648885     ]
        },
        "properties": {
          "name": "Kit Coleman: The World's First Woman War Correspondent",
          "year": "1898",
          "image": '<img src="https://cdn.torontoist.com/wp-content/uploads/2013/11/20131123coleman.jpg">',
          "address": "Bay St & King St W",
          "neighbourhood": "Financial District",
          "city": "Toronto",
          "presentedby": "myseum-of-toronto",
          "description": "Following the outbreak of the Spanish-American War, a Toronto reporter talked her way onto a freighter bound for Cuba and scooped every male war correspondent with her first story.",
          "tags": "journalism womens-rights war",
          "state": "<p>Hell hath no fury like a reporter scooped, and for the press gang reporting on the Spanish-American War in 1898, hell came in the form of a quick-witted, female reporter called Kit Coleman.Though from Toronto, Coleman beat the American press to the punch. After taking an overnight train to Washington D.C., she attempted to sail with American troops to follow military maneuvers in light a the sinking of the Maine, an American Battleship. When refused, she instead boarded a freighter and sailed to Havana. Once Toronto’s Mail and Empire published the story, she officially became the first ever female war correspondent. This accomplishment was a feather in Coleman’s cap, a prolific newspaper columnist who earned the admiration of Sir Wilfrid Laurier, Prime Minister at the time. </p><p>At the Mail and Empire, not only did she become one of the leading journalists in Toronto, she also became an important figure for the few female journalists in Canada and North America.When she and all other female journalists were refused a press passes for the St.Louis World’s Fair in 1904, she produced a list of 13 others, and in doing so, composed the blueprint for what would later be known as the Canadian Women’s Press Club.After immigrating to Canada from Ireland, Coleman began getting published when the editor of the Toronto Mail discovered and praised her writing chops. Coleman was among the first generation of Canadian women to attend Toronto Universities and to enter the private sector in a professional role. After several years as a life columnist with her weekly “Woman’s Kingdom” segment, she fought endless detractors on her way to becoming an international reporter. Still, as a reporter, she lived constantly on the verge of poverty, and when the paper refused to pay her extra for writing another column, she resigned.</p>"
        }
      },
        
             //Heat Wave
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
 -79.455800,43.637452
          ]
        },
        "properties": {
          "name": "Toronto Heat Wave",
          "year": "1936",
          "image": '<img src="http://heritagetoronto.org/wp-content/uploads/2013/01/EveTelly07101936-23.gif">',
          "address": "Sunnyside Beach, Toronto, ON",
          "neighbourhood": "Sunnyside",
          "city": "Toronto",
          "presentedby": "myseum-of-toronto",
          "description": "Before modern air conditioning, heat waves often called for desperate measures—including sleeping on the beach",
          "tags": "sunnyside natural-disasters beach",
          "state": "<p>For beachgoing Torontonians soaking up the summer sun on Toronto’s waterfront, wearing wool is probably the last thing they want to do as the mercury rises far above 30 on the thermometer. But in 1936, that’s exactly what beachgoers were required to do at the time. That is, until extreme circumstances brought the customary dress code to a halt.</p><p>During the heat wave of 1936, when temperatures reached up to 40.6 celsius, Torontonians could not simply seek refuge in the comfort of an air conditioned home. In fact, the event was virtually a natural disaster, with over a 1000 people in Ontario and Manitoba dying because of the extreme heat. At night, residents escaped their homes and slept on the beach at Sunnyside and on the Exhibition grounds.</p><p>Over 12 days of sweltering temperatures, newspapers could not even account for all the dead, and some even fried eggs on the steps of city hall. The heat wave, though, would spur a reform that surprised many at the time.</p><p>During one of the hottest days, around 30 men congregated at Sunnyside beach and rebelled by removing their wool tops and swimming without a shirt on. Toronto Police, as they were required to do, arrested the men for indecent exposure. But instead of getting convicted, the City of Toronto allowed, from then on, to allow men to go topless on the beach and never endure another heat wave in wool.</p>"
        }
      },
        
    
     //R.C. Harris Filtration Plant
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
              -79.279047,43.673997, 
          ]
        },
        "properties": {
          "name": "R.C. Harris Filtration Plant",
          "year": "1913",
          "image": '<img src="https://gencat4.eloquent-systems.com/webcat/systems/toronto.arch/resource/ser1465/s1465_fl0415_it0021.jpg">',
          "address": "2701 Queen St E, Scarborough, ON",
          "neighbourhood": "Fallingbrook",
          "city": "Toronto",
          "presentedby": "myseum-of-toronto",
          "description": "As an essential element of Toronto's water management, the R.C. Harris Water Treatment Plant happens also to be an architectural wonder.",
          "tags": "water city-of-toronto filtration",
          "state": "<p>Toronto’s population grew from 86,000 in 1883 to 521,000 in 1921; and in 1920, Toronto’s water consumption rose to more than 24 bullion imperial gallons. Water and sewage systems were forced to keep pace with the expanding city. As the lake became more polluted, the Department of Work had to use longer intake pipes to reach further into the lake to access cleaner water. The pipes were half a mile long in 1898, a mile in 1905, and a mile and a half in the early 1930s. By 1913, after years of political wrangling, Toronto finally had a trunk sewer and a sewage treatment and filtration plant. In 1910 chlorinated water was introduced to fight typhoid, and the success of the program made Toronto a leader in the field. Since the opening of the R.C. Harris filtration plant in the Beaches, the city has carried out thousands of annual chemical, bacteriological and raw-water tests.In 1912 there were 18,000 outdoor privies in Toronto. Thirteen years later, in 1925, there were only 335.</p>"
        }
      },    
        
    
    //BeaLillie
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
          -79.383439,43.696393
          ]
        },
        "properties": {
          "name": "Why Mackenzie King Built a Replica of Louis Pasteur’s Tomb in Toronto",
          "year": "1878-1922",
          "image": '<img src="https://s3.amazonaws.com/photos.geni.com/p13/cb/01/84/a3/5344483cc76c0542/jer85fav_large.jpg">',
          "address": "375 Mt Pleasant Rd, Toronto, ON",
          "neighbourhood": "Mt.Pleasant",
          "city": "Toronto",
          "presentedby": "myseum-of-toronto",
          "description": "Mackenzie King’s youngest brother, Max, was his closest and most trusted friend. King’s final tribute was the tomb he chose for him in Mount Pleasant Cemetery.",
          "tags": "canadian-history science headstone",
          "state": "<p>The last thing you’d expect to find at a Toronto cemetery is a tomb commemorating a French biologist. But that’s exactly what former prime minister William Lyon Mackenzie King commissioned for his younger brother Max when he died in 1922. Located the the Mt. Pleasant Cemetery, the tomb is modeled perfectly after the burial arrangements of Louis Pasteur, the father of microbiology and a pioneer of germ theory.</p><p>There is good reason for Max’s burial arrangements. Descendants of William Lyon Mackenzie, leader of the 1837 Upper Canada rebellion, The King’s shed their reputation as a treasonous family and successfully established themselves as a reputable family within legal circles in Kitchener in Toronto. After moving to downtown Toronto, William soon participated in public activism while Max pursued medicine. After joining the medical corps in South Africa during the Boer War of 1899, Max lived a long way from home in remote parts of the continent. While the experience would eventually lend him well in opening his own medical practice in Ottawa, the ordeal had a damaging impact on his health. In 1913, he was diagnosed with tuberculosis and needed to spend over two years in Colorado to heal from his ailments. Industrious as the rest of the family, however, he nevertheless penned the self-explanatory book, The Battle of Tuberculosis and How to Win It.</p><p>While Max endured the vicissitudes of disease, William rose to the highest echelons of political power in Canada. In 1921, 13 years after becoming Minister of Labour and two years after becoming leader of the Liberal Party, William Lyon Mackenzie King became Prime Minister. The first telegram he sent was to his brother.</p><p>Even in sickness, the William trusted his own brother, more so than some of his advisors. On March 18th, 1922, however, Max died of his decade-long illness. As a tribute to his brother’s battle, William invoked the tuberculosis-fighting French biologist Louis Pasteur, who was buried in a tomb beneath the institute that bears his name. The tombs are similar except for one small addition on William’s part: a Celtic cross, the kind used by their scottish ancestors.</p>"
        }
      },    
        
        
         //Margaret Saunders
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
              -79.370715,43.650565
          ]
        },
        "properties": {
          "name": "A Dog Named Beautiful Joe: The story of Margaret Saunders",
          "year": "1861-1947",
          "image": '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Margaret_Marshall_Saunders_001.jpg/1200px-Margaret_Marshall_Saunders_001.jpg">',
          "address": "66 George St, Toronto, ON",
          "neighbourhood": "Mt.Pleasant",
          "city": "Toronto",
          "presentedby": "myseum-of-toronto",
          "description": "One of the greatest publishing successes in Canada’s history is a book about a dog that has sold 7 million copies and is still loved by children around the world.",
          "tags": "canadian-history science headstone",
          "state": "<p>Today, you may know Margaret Saunders at the author of the novel Black Beauty. But what you might not know is that Saunders was not only a Toronto resident for a good part of her life, but that many of the stories she wrote—most of them about animal-human companionship—are actually inspired by real events.</p><p>Saunders was born in Nova Scotia in 1861, the daughter of a baptist minister who lived in a rural village. As a child, she would develop a lifelong love for both books and pets as she spent her time in relative solitude. While still young, she tried submitting manuscripts to publishers, but after one acceptance and many failures, she turned briefly to Ottawa to become a public servant.</p> <p>In 1892, however, she heard a story that would change her life forever. While visiting Meaford, Ontario, a man found a dog who had both his ears and his tail cut off. Horrified, he immediately adopted the dog and they remained together. Touched deeply by the companionship, she submitted an autobiographical account of the story to a writing contest and won. While the prize alone was relatively meager, Beautiful Joe, as it ended up being called, was published and became a smash hit in several countries.</p><p>Unfortunately for Saunders, she negotiated low on the royalties and remained in modest circumstances for most of her life. Still, in her boarding house of George Street and her small cottage on Glengowan Avenue, she became a defender of animals and their rights to the point that she was known across the country for her activism. She kept pets that she named after street locations, such as a pigeon called 38 Front Street.</p><p>In 1934, she received the Order of the British Empire for her contribution to Canadian literature and animal rights.</p>"
        }
      },  
        
        //AndersonAbbott
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            -79.438272,43.636804
          ]
        },
        "properties": {
          "name": "Anderson Ruffin Abbott House",
          "year": "1837-1913",
          "image": '<img src="https://s3.amazonaws.com/tce-live2/media/cache/media/804a8500-54ba-4821-b05f-74bccb5f74bb_thumbnail_600_600.jpg">',
          "address": "119 Dowling Ave, Toronto, ON",
          "neighbourhood": "Parkdale",
          "city": "Toronto",
          "presentedby": "myseum-of-toronto",
          "description": "In a quiet area of Parkdale, a key piece of American Civil War history.",
          "tags": "USA black-history medicine",
          "state": "<p>Anderson Abbott is not simply an important figure for Toronto’s black community. As a Civil War captain and medical officer for the Union Army in the United States, his contribution to American history is astonishing as well.</p><p>For many of the black families living in Southern Ontario during the 19th century, life in Toronto, Leamington, Hamilton and Windsor meant a life away from slavery in America’s Confederate South. The Underground Railroad, a secretive collective of abolitionists located in both the United States and Canada, sought to free slaves by transporting them across border lines from as far as Mississippi to the Canadian line.</p><p>In Upper Canada, John Graves Simcoe had attempted to end slavery in Canada with the Anti-Slavery act in the year 1793, but wealthy landowners protested and refused to give away what they deemed to be property. Instead, slaves would not go free, but black immigrants would be deemed free in Canada.</p> <p>Abbott’s parents arrived in Toronto in 1835, as part of the approximately 30,000 black people who sought refuge in Canada before the Emancipation Proclamation. During the time, black men actually formed regiments to fight on the government side in William Lyon Mackenzie’s Rebellion in 1837.</p><p>From an early age, Abbott knew that he wanted to be a doctor. After graduating from the University of Toronto, he became the first black doctor born in Canada. Shortly after graduating, he joined the American army as the medical officer who would help in army hospitals on the front. He was one of only eight black physicians who participated in the American Civil War. </p><p>At the height of the Civil War in 1863, Abraham Lincoln invited Abbott to the White House, a meeting that drew infamy for the shocked reception of the crowd. Few during that period of time could have imagined a black man as army captain, but militarily he excelled in the position for the army that would achieve decisive victory. Lincoln and the First Lady remembered the meeting fondly, and were so moved by Abbott that when he died, Mary Todd Lincoln sent him the shawl he wore during his inauguration.</p><p>Abbott would eventually settle in Parkdale, at that point the extreme west of the city. He moved to Toronto after running a successful practice in Southern Ontario.</p>"
        }
      },  
         
         //Sunnyside Beach
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [-79.449526 ,43.637328]
        },
        "properties": {
          "name": "Sunnyside Beach",
          "year": "192-",
          "image": '<img src="https://static.torontopubliclibrary.ca/da/images/MC/pictures-r-617.jpg"><img src="https://static.torontopubliclibrary.ca/da/images/LC/pictures-r-607.jpg">',
          "address": "Toronto, ON",
          "neighbourhood": "Sunnyside",
          "city": "Toronto",
          "presentedby": "myseum-of-toronto",
          "description": "Sunnyside Beach was once one of the most popular beach destinations among Torontonians.",
          "tags": "shoreline greenspace sunnyside",
          "state": "<p>Sunnyside Beach was once one of the most popular beach destinations among Torontonians. Located on the shores of Lake Ontario, the chilly water provided much-needed respite from the scorching temperatures of the city heat. Without air conditioning, those living in the downtown core—especially in rowhouses and apartment buildings—suffered greatly during heat waves to the point of death. In 1935, a heat wave killed over a thousand people in Ontario and Manitoba when temperatures shot up to 40 degrees Celsius. During the warmest evenings, Torontonians actually slept on the beach.Archival images show just how important the beach was in the dog days of summer. Thousands gathered on the shore to not only swim, but to also visit the boardwalk, play carnival games and ride the Sunnyside Flyer roller coaster, all of which are now gone. The Sunnyside Bathing Pavilion is a striking example of Mediterranean architecture that stands in contrast to the Victorian-era British architecture of downtown Toronto. With thousands of lockers, a terrace and a garden, the pavilion invokes the famous bathing facilities popular during the Roman Empire. While the beach is still used today for various purposes, its popularity declined after the city built the Gardiner Expressway to better connect Downtown Toront</p>"
        }
      },
        
        
     //TSX
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            -79.383066, 43.648450 
          ]
        },
        "properties": {
          "name": "TSX",
          "year": "1937",
          "image": '<img src="https://gencat4.eloquent-systems.com/webcat/systems/toronto.arch/resource/fo1526/f1526_fl0054_it0002.jpg"><img src="https://gencat4.eloquent-systems.com/webcat/systems/toronto.arch/resource/fo1257/ser1057/f1257_s1057_it0460.jpg">',
          "address": "130 King St W, Toronto, ON",
          "neighbourhood": "Financial District",
          "city": "Toronto",
          "description": "The wondrous and intricate architecture of one of Toronto's long-standing financial institutions.",
          "tags": "business art-deco",
          "state": "<p>In 1937 the exquisite, evocative Art Deco Toronto Stock Exchange rose much like a phoenix from the ashes of the Depression.</p><p>In a gesture of hope, the exchange decided to build a new facility incorporation the rapidly changing technology of its trade and the bold design features of Art Deco and Art Moderne. The result was this gem, built with smoky pink granite and pale Indiana limestone and marked by five stunning tall windows and a 74-foot-wide decorative stone frieze by Charles Comfort, which historians Dendy and Kilbourn have described as the most striking piece of sculpture from the period in Toronto.</p><p>The walls [on the inside] are decorated in Art Deco style with pale marble, opal glass, silver and wood. Charles Comfort painted eight Cubist-style murals, each 16 feet high, depicting the major industries in Canada.</p>"
        }
      },
        
    //Eaton's on College
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
          -79.383401, 43.661031 
          ]
        },
        "properties": {
          "name": "Eaton's College Street",
          "year": "1930",
          "image": '<img src="https://gencat4.eloquent-systems.com/webcat/systems/toronto.arch/resource/ser381/s0381_fl0301_id11877-1.jpg">',
          "address": "444 Yonge St, Toronto, ON",
          "neighbourhood": "Downtown",
          "city": "Toronto",
          "description": "Today the College Park Mall, Eaton's College Street is a timeless architectural classic built for the golden age of department store shopping.",
          "tags": "art-deco eatons",
          "state": "<p>The Streamlined Art Deco style is apparent in the design details and in the use of rich materials such as marbles, travertine and nickel alloys.The building was planned as one of the most ambitious construction projects ever attempted in Toronto. The architects were Ross & Mcdonald.The plan was to build a 36-storey skyscraper to house an elegant new Eaton’s store and bring the company’s offices and factories under one roof. Sir John Craig Eaton believed that College and Yonge would become the heart of a fashionable uptown district, picking up crosstown business from its position at the intersection of Yonge, Carlton and College Streets. </p><p>Eaton’s, along with the rest of the country, suffered its share of Depression casualties. The store’s sales dropped drastically, especially during 1931 and 1932, when annual losses exceeded $2 million, Married women were expected to give up their jobs to men who were supporting families.</p> <p>The luxurious seventh floor opened in march 1931, geared unabashedly toward the rich. Jacques Carlu’s designs for the Round Room touched on every details, including wall coverings, furniture, linen, china, silverware—and even the uniforms of the serving staff. The colours were cool and sophisticated: beige, taupe and pale yellow with silver and black accents. The fountain in the centre of the room was a masterpiece of black granite and black vitrolite glass. Rumour has it that, thanks to the acoustics of the ciruclar room, diners could hear the intimate conversations of customers on the other side of the restaurant.</p>"
        }
      },
 
    
    //Hemingway
       {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
       -79.42051470279694,43.689120664774435
          ]
        },
        "properties": {
          "name": "Ernest Hemingway's House",
          "year": "1975",
          "image": '<img src="https://cdn-images-1.medium.com/max/1643/1*g2rfWnb4cOZzIEAkpEDttA.png">',
          "address": "1597 Bathurst St., Toronto, ON",
          "neighbourhood": "Forest Hill",
          "city": "Toronto",
          "description": "A closer look at the former residence of one of the world's most stories novelists",
          "presentedby": "myseum-of-toronto",
          "tags": "music punk bars nightclub",
          "state": "<p>Courtesy of MyTownCrier.ca</p><p>A great mystery has been uncovered at 1597-1599 Bathurst St.Many know the building called The Hemingway, and also its Toronto Historical Board plaque, dated 1985. The brass marker informs visitors to the building that literary giant Ernest Hemingway lived there in 1923-24 while working for the Toronto Star.</p><p>I’ve always been intrigued by Hemingway, ever since his Old Man and the Sea was imposed on me in high school, and his lamentations on growing old (in Idaho) left an imprint. Back when Hemingway inhabited 1597-1599 Bathurst, the building was called Cedarvale Mansions, and the mystery that eluded Greg Heal, one of its current residents, was which unit the novelist called home.</p><p>“It was sort of nice when we had the mystery of what unit Hemingway lived in — we couldn’t figure it out,” Heal admits. “It was one of my hobbies to reach out to various resources: the John F. Kennedy Library.” Heal has resided in the building since the early ’90s and experienced its transition from a co-operative to a condominium. So, when one particular unit went up for sale two years ago the owners were looking to reinvigorate the sale of their apartment. “They reached out to me and said, ‘Oh Greg, is there anything current on the search for Hemingway?’ I said no. ‘Well, keep at it’,” Heal recalls. “He was able to connect with some writers who were putting together a book on Hemingway’s papers and, lo and behold, they just had a copy of his lease.”</p><p>That lease revealed the unit in question to be Number 19, where accountant Pat Cavanagh, 33, now lives, and took possession Nov. 1, 2013. He admits that when he purchased the unit it wasn’t known his abode was For Whom The Bell Tolls, and when he did learn of the unit’s former lodger he was far from awestruck.</p><p>“I’ll be totally honest, there was a bit of ignorance.” Cavanagh shares. “I know of him [but] I’ve actually never read any of his books. It was a cool thing to hear.”</p><p>That’s not to say Cavanagh doesn’t read. At least one of Hemingway’s celebrated works is on his to-read bookshelf.</p><p>“I am somewhat of an avid reader, and I do have one that I’m trying to get to of his,” he admits.</p>Much like the rumours of one of Hemingway’s contemporaries, Sinclair Lewis, it is alleged that Lewis hid his works in the basement of the Palmer House Hotel in Sauk Centre, Minn.No such luck here in Toronto.</p><p>“It’s always been a running joke that, ‘Hey, if you find some Hemingway papers you might be able to pay for your renovation, but nothing like that has turned up,” Heal says, with a laugh. “It’s an old building. You’ll never know what you’ll find.”</p><p>The unit in question was renovated before Cavanagh took possession.</p><p>Now, as much as the literary community loves Hemingway, the writer was not particularly keen on Hogtown.</p><p>Heal tells a story about how the bullfighting fan broke his lease at the building.</p><p>With Toronto being a fairly stayed place for a person who came from Chicago — itself a very vibrant city — Hemingway wanted to break his lease so he could go off to what was a more exciting Paris. He threw a party, and to each of his revelers that he invited he requested they take something with them when they left.</p><p>“It was a way for him to surreptitiously get his stuff out of the suite so the landlord wasn’t catching on to the fact that he was busting his lease, and he would be able to get his personal belongings out” Heal says. “That was a very creative way to take flight.”</p>"
        }
      },
        
        

        {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
 -79.49280023574829,
            43.65279833913181      ]
        },
        "properties": {
          "name": "Hurricane on the Humber",
          "year": "1954",
          "image": '<img src="https://static.torontopubliclibrary.ca/da/images/LC/tspa_0015934f.jpg">',
          "address": "Lambton House Tours",
          "neighbourhood": "Humber River Tour",
          "city": "Etobicoke",
          "presentedby": "myseum-of-toronto",
          "description": "Scenes from one of Toronto’s most harrowing disasters",
          "tags": "disasters humber",
          "state": "<p>On October 15th, 1954, Torontonians expected heavy rains from the remnants of Hurricane Hazel. The storm that had already left a path of destruction over Haiti and the Carolinas had shrunk, but few could predict how it would affect Toronto's sensitive waterways and the neighbourhoods located beside them. </p><p>Floods of biblical proportions swept cars, fire trucks, homes, bridges and whole families into a raging flood that toppled the riverbanks of the Humber and even the Don. Newspaper accounts from the day after the storm reveal a night of tragedy and miracle. One thing is clear, though: Few, if any, expected a storm of this magnitude in Toronto. </p><p>On the Humber just south of Bloor St., five firefighters attempted to approach the riverbank to assist in the rescue operation. As they approached the waters, the firetruck remained above ground, but soon enough, the waters picked up and they could not return to higher ground. </p><p>Instead of panicking, the firefighters remained in place on River Road until they were rescued, but as they awaited assistance, the truck rolled over. In a moment of desperation, three of the men held onto the side of the truck and threw a rope to a car at the very edge of the floodwaters.</p><p>Witnesses recall that “the road washed out from under” and that even lifelong residents could not understand how the water became so elevated. One minute, the rescue workers were trying to calmly approach the water. The next, they were gone, and five firefighters, including deputy chief Clarence Collins, drowned in the flood. </p>"
        }
                
      }]
    };
      

      
      
  // This adds the data to the map
  map.on('load', function (e) {
  
    
        map.addLayer({
        "id": "route",
        "type": "line",
        "source": {
            "type": "geojson",
            "data": {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "type": "LineString",
                    "coordinates": [
          [
            -79.50353980064392,
            43.662951092179036
          ],
          [
            -79.50298190116882,
            43.66271825010594
          ],
          [
            -79.50307846069336,
            43.662268086203866
          ],
          [
            -79.50299263000488,
            43.66174030353729
          ],
          [
            -79.50220942497253,
            43.66117370815769
          ],
          [
            -79.50131893157959,
            43.660513967073655
          ],
          [
            -79.49980616569519,
            43.65984645695175
          ],
          [
            -79.49896931648254,
            43.65918670128322
          ],
          [
            -79.49880838394165,
            43.65890727316757
          ],
          [
            -79.49900150299072,
            43.658107791098324
          ],
          [
            -79.49932336807251,
            43.6575178751735
          ],
          [
            -79.50047135353088,
            43.65630697695974
          ],
          [
            -79.50120091438293,
            43.65612844502938
          ],
          [
            -79.50228452682495,
            43.65525130218316
          ],
          [
            -79.50249910354614,
            43.654249946457725
          ],
          [
            -79.50235962867737,
            43.65386958215518
          ],
          [
            -79.50235962867737,
            43.65358236669768
          ],
          [
            -79.50175881385802,
            43.65295359292789
          ],
          [
            -79.50090050697327,
            43.65286044069841
          ],
          [
            -79.49776768684387,
            43.652487830335545
          ],
          [
            -79.49625492095947,
            43.65260427132228
          ],
          [
            -79.49524641036987,
            43.65257322041458
          ],
          [
            -79.49280023574829,
            43.65279833913181
          ],
          [
            -79.49089050292969,
            43.65199101292225
          ],
          [
         -79.49031114578247,
            43.6517
          ],
          [
            -79.4923710823059,
            43.6512380161952
          ],
          [
            -79.49607253074646,
            43.65132340805125
          ],
          [
            -79.4964051246643,
            43.65172707699977
          ],
          [
            -79.49954867362976,
            43.65160287145843
          ],
          [
            -79.50247764587402,
            43.65249559307503
          ],
          [
            -79.50344324111938,
            43.653815244201034
          ],
          [
            -79.50321793556213,
            43.65478555741116
          ],
          [
            -79.50203776359558,
            43.65624876008425
          ],
          [
            -79.5005303621292,
            43.65823198318608
          ],
          [
            -79.50083613395691,
            43.65908191589223
          ],
          [
            -79.50247764587402,
            43.66043246914256
          ],
          [
            -79.50494527816772,
            43.661883891928085
          ],
          [
            -79.50721979141235,
            43.66189553421499
          ],
          [
            -79.50470924377441,
            43.66324602417526
          ],
          [
            -79.50389385223387,
            43.6624233155169
          ],
          [
            -79.50365781784058,
            43.662826909852434
          ]
        ]
                }
            }
        },
        "layout": {
            "line-join": "round",
            "line-cap": "round"
        },
        "paint": {
            "line-color": "#003366",
            "line-width": 4
        }
    });
      

      
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
                   '<span id="close" onclick="this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode); return false;">x</span><div id="card"><h3>' + currentFeature.properties.name + '</h3>' +
                   '<h4>' + currentFeature.properties.neighbourhood + '</h4>' + 
  
'<button id="to-expand" class="myButton" type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">' + '<p>Read More</p>' + '</button>' + '</a></div>' +
                  
    '<div class="modal fade" id="myModal" role="dialog">' +
    '<div class="vertical-alignment-helper">' +
    '<div class="modal-dialog modal-lg vertical-align-center">' +
      '<div class="modal-content">' +
       
        '<div class="modal-header">' +
      
        '<h1 style="font-size: 18px; color: white; text-align: left; width: 100%"><button style="padding: 10px 20px 10px 20px; margin-top: 5px; float: right; color: black; font-family: helvetica;" type="button" class="btn btn-info" data-dismiss="modal">Close</button>' + currentFeature.properties.name + '</h1>' +
           
      
        '</div>' +
        '<div class="modal-body">' +
        '<p class="image-box">' + currentFeature.properties.image + '</p>' +
        '<h5>' + currentFeature.properties.description +  '</h5>' +
        '<p class="year-tags">' + currentFeature.properties.year + '  |  ' + currentFeature.properties.tags +'</p>' +
        '<p>' + currentFeature.properties.state + '</p>' +
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
      link.innerHTML = prop.name;
        
      var description = listing.appendChild(document.createElement('div'));
      description.innerHTML = prop.description;

      var details = listing.appendChild(document.createElement('div'));
      details.innerHTML = prop.neighbourhood;
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
      