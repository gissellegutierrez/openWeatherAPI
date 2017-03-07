 var searchTerm;
  $("#go").click(function() {
   console.log("hello");
      searchTerm = $("#input").val();
   $.getJSON(
      "http://api.openweathermap.org/data/2.5/weather?q="+searchTerm+"&APPID=fc9190e8d0bea0a15473e89cfaf2ccb3",
      function(response) {
          console.log(response);
       $("#Temperature").html ("") 
      })
      } )      
          