$(document).ready(function(){
    $("button").click(function(e){
    	e.preventDefault();
        var movieName=$("#searchInput").val();
            
        $.ajax({
                  url: "http://www.omdbapi.com/?s=" + movieName,
                  dataType: 'json',
                  success: function(data) {
                for(var i=0;i<data.Search.length;i++){
                   var temp = " <tr> <td> " + data.Search[i].Title + "</td> <td>" + data.Search[i].Year + "</td><td><img src=" + data.Search[i].Poster + " height='64px' width='64px' alt=" + data.Search[i].Title + "></td> </tr>";
                          $('table').append(temp);            
                  }
              }	
          });
      });
    });