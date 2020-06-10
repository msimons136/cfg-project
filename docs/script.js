google.charts.load('current', { 'packages': ['geochart', 'corechart'] });
google.charts.setOnLoadCallback(drawRegionsMap);
google.charts.setOnLoadCallback(drawChart);

function drawRegionsMap() {
    var data = google.visualization.arrayToDataTable([
        ["Country", "value"],
        ["Bhutan", 1],                           
        ["Democratic Republic of the Congo",1], 
        ["Liechtenstein",1],                    
        ["Maldives",1],                         
        ["Sudan",1],                            
        ["Zimbabwe",1],                         
        ["Mauritania",1],                       
        ["Mozambique",1],                       
        ["Nigeria",1],                          
        ["Swaziland",1],                        
        ["Tanzania",1],                         
        ["Iraq",1],                             
        ["Guyana",1],                           
        ["Namibia",1],                          
        ["Senegal",1],                          
        ["Turkmenistan",1],                     
        ["Afghanistan",1],                      
        ["Andorra",1],                          
        ["Fiji",1],                             
        ["Gabon",1],                            
        ["Uzbekistan",1],                       
        ["Cameroon",1],                         
        ["Cuba",1],                             
        ["Faroe Islands",1],                    
        ["El Salvador",1],                      
        ["Caribbean",1],                        
        ["Ethiopia",1],                         
        ["Mongolia",1],                         
        ["Puerto Rico",1],                      
        ["Samoa",1],                            
        ["Myanmar",1],                          
        ["Nicaragua",1],                        
        ["Seychelles",1],                       
        ["Tajikistan",1],                       
        ["Dominican Republic",1],               
        ["Guinea",1],                           
        ["Barbados",1],                         
        ["CI",1],                               
        ["Laos",1],                             
        ["Libya",1],                            
        ["Panama",1],                           
        ["Bahrain",1],                          
        ["Benin",1],                            
        ["Ghana",1],                            
        ["Haiti",1],                            
        ["Montenegro",1],                       
        ["Somalia",1],                          
        ["Syria",1],                            
        ["Ecuador",1],                          
        ["Honduras",1],                         
        ["Madagascar",1],                       
        ["Papua New Guinea",1],                 
        ["Tunisia",1],                          
        ["Angola",1],                           
        ["Botswana",1],                         
        ["Cyprus",1],                           
        ["Algeria",1],                          
        ["Bahamas",1],                          
        ["New Caledonia",1],                    
        ["Uganda",1],                           
        ["Yemen",1],                            
        ["Zambia",1],                           
        ["Antarctica",1],                       
        ["Paraguay",1],                         
        ["Jamaica",1],                          
        ["Palestine",1],                        
        ["Bolivia",1],                          
        ["Bosnia and Herzegovina",1],           
        ["Vietnam",1],                          
        ["Kenya",1],                            
        ["Luxembourg",1],                       
        ["Niger",1],                            
        ["Kuwait",1],                           
        ["Hawaii",1],                           
        ["Scotland",1],                         
        ["Cambodia",1],                         
        ["Uruguay",1],                          
        ["Kyrgyzstan",1],                       
        ["Saudi Arabia",1],                     
        ["Indonesia",1],                        
        ["Azerbaijan",1],                       
        ["United Arab Emirates",1],             
        ["Mauritius",1],                        
        ["Morocco",1],                          
        ["Albania",1],                          
        ["South Korea",1],                      
        ["Kazakhstan",1],                       
        ["Macedonia",1],                        
        ["Venezuela",1],                        
        ["Taiwan",1],                           
        ["Qatar",1],                            
        ["Jordan",1],                           
        ["Iceland",1],                          
        ["Guatemala",1],                        
        ["Costa Rica",1],                       
        ["Hong Kong",1],                        
        ["San Marino",1],                       
        ["Colombia",1],                         
        ["Moldova",1],                          
        ["Armenia",1],                          
        ["Malta",1],                            
        ["Nepal",1],                            
        ["Lebanon",1],                          
        ["Malaysia",1],                         
        ["Serbia",1],                           
        ["Peru",1],                             
        ["Trinidad and Tobago",1],              
        ["Lithuania",1],                        
        ["Estonia",1],                          
        ["Georgia",1],                          
        ["Iran",1],                             
        ["Chile",1],                            
        ["Latvia",1],                           
        ["Thailand",1],                         
        ["Egypt",1],                            
        ["Slovenia",1],                         
        ["Mexico",1],                           
        ["Belarus",1],                          
        ["Slovakia",1],                         
        ["Sri Lanka",1],                        
        ["Croatia",1],                          
        ["Philippines",1],                      
        ["Bangladesh",1],                      
        ["Turkey",1],                          
        ["Romania",1],                         
        ["Italy",1],                           
        ["South Africa",1],                    
        ["Hungary",1],                         
        ["Pakistan",1],                        
        ["Portugal",1],                        
        ["Ukraine",1],                         
        ["Greece",1],                          
        ["Oman",1],                            
        ["Argentina",1],                       
        ["Singapore",1],                       
        ["Bulgaria",1],                        
        ["Japan",1],                           
        ["Czech Republic ",1],                 
        ["Ireland",1],                         
        ["China",1],                           
        ["Finland",1],                         
        ["Brazil",1],                          
        ["Norway",1],                          
        ["Austria",1],                         
        ["Denmark",1],                         
        ["Belgium",1],                         
        ["New Zealand",1],                     
        ["Spain",1],                           
        ["Switzerland",1],                     
        ["Russia",1],                          
        ["Poland",1],                          
        ["Israel",1],                          
        ["Sweden",1],                          
        ["Netherlands",1],                    
        ["France",1],                         
        ["Australia",1],                      
        ["Canada",1],                         
        ["India",1],                          
        ["Germany",1],                        
        ["United Kingdom",1],                 
        ["United States",1],                  
        ["Unknown",1],
        ["Isle of Man", 1],
    ]);

    var options = {
        dataMode: 'regions',
        region: '150',
        legend: 'none',
        tooltip: {trigger: 'none'},
        backgroundColor: '#81d4fa',
        colorAxis: {colors: ['green', 'lightgreen']},
    };

    var chart = new google.visualization.GeoChart(document.getElementById('europeMap'));

    function myClickHandler(){
        var selection = chart.getSelection();
        // getColumnProperty(columnIndex, name)
      
        // for (var i = 0; i < selection.length; i++) {
        //   var item = selection[i];
        //   if (item.row != null && item.column != null) {
        //     message += '{row:' + item.row + ',column:' + item.column + '}';
        //   } else if (item.row != null) {
        //     message += '{row:' + item.row + '}';
        //   } else if (item.column != null) {
        //     message += '{column:' + item.column + '}';
        //   }
        // }
        // if (message == '') {
        //   message = 'nothing';
        // }
        countryGuess = prompt('What country is this?');

        if (countryGuess === selection) {
            alert("You've guessed correctly!")
        }
        else {
            alert("That is incorrect. Guess again")
        }
      }

    google.visualization.events.addListener(chart, 'select', myClickHandler);

    chart.draw(data, options);
}
google.load('visualization', '1', { packages: ['geochart'], callback: drawMap });
