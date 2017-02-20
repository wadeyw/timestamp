var express = require('express'); // We import ExpressJS
 
var app = express(); // This is how we initialize an express app
var PORT = process.env.PORT || $PORT;     // We set the port that the application will use //3000
 
// When a GET request is made to the root path: '/' reply with Hello World
app.get('/:timestamp', function(request, response) {
  var timestamp=request.params.timestamp;
  response.json(getDates(timestamp));


});
 
// We set the app to listen on the given PORT
// It will log a message to the console once it is ready
app.listen(PORT, function() {
  console.log('Server is listening on port ' + PORT);
});

function getDates(timestring){
  var timer={unix: null, natural: null};
  
  if(isNaN(parseInt(timestring))){
    if(isNaN(Date.parse(timestring))) return timer;
    else {
      timer.unix=new Date(timestring).getTime();
      timer.natural=getDateFormat(new Date(timestring));
    }
  }
  else {
    timer.unix=timestring;
    timer.natural=getDateFormat(new Date(parseInt(timestring)));
  }
  return timer;
}

function getDateFormat(dateString){
 var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Obtober', 'November', 'December'];
 return months[dateString.getMonth()]+' '+dateString.getDate()+', '+dateString.getFullYear();

}
