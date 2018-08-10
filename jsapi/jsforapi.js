
/* $.getJSON("https://cors.io/?https://api.myglamapp.pl/api/categories?language=EN", function (infoJson) {


    $('#result').append(infoJson.data[0].label );
    $('#result1').append( infoJson.data[0].description );
    $('#result2').append("<img src='http://" + infoJson.data[0].imagePath + "'/>");
    $('#result3').append(infoJson.data[0].Services[0].label_service );
    $('#result4').append( infoJson.data[0].Services[0].description_service);
     
    $('#result5').append( infoJson.data[0].Services[1].label_service);
    $('#result6').append( infoJson.data[0].Services[1].description_service);

    $('#result7').append(infoJson.data[0].Services[2].label_service);
    $('#result8').append(infoJson.data[0].Services[2].description_service);

    $('#result9').append( infoJson.data[0].Services[3].label_service );
    $('#result10').append( infoJson.data[0].Services[3].description_service);

    $('#result11').append( infoJson.data[0].Services[4].label_service );
    $('#result12').append( infoJson.data[0].Services[4].description_service);

        });*/

    

data2="";
     

        $.getJSON("https://cors.io/?https://api.myglamapp.pl/api/categories?language=EN", function (infoJson) {

            for (i = 0; i <= infoJson.data.length; i++) 
            {
                 
                data2+=
                "<div class='row my-4'>"+ 
                  "<div class='col-lg-8'>" + 
                        "<img src='http://" + infoJson.data[i].imagePath + "'/>"+ 
                 "</div>"+
                   "<div class='col-lg-4'>"+
                          "<h1>"+ infoJson.data[i].label + "</h1>"+
                         "<p>"+ infoJson.data[i].description + "</p>"  + 
                    "</div>"+
                "</div>";

                for (j = 0; j < infoJson.data[i].Services.length; j++) {
                 
                    data2+= 
                    "<div class='col-md-4 mb-4 dispcard'>"+
                    "<div class='card h-100'>"+
                    "<div class='card-body'>"+
                    "<h2 class='card-title'>"+  infoJson.data[i].Services[j].label_service + "</h2>" 
                    +  "<p class='card-text'>"  + infoJson.data[i].Services[j].description_service + "</p>"+"</div>"+
                    "<div class='card-footer'>" + "</div>"
                  
                    + "</div>" + "</div>" + "</div>";
    
                }
               
                document.getElementById("result").innerHTML = data2;
            }
           

            
        }

    

        );


    