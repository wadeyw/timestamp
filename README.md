<b>FreeCodeCampe Timestamp Microservice</b><br>

User Story: I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016).<br>
User Story: If it does, it returns both the Unix timestamp and the natural language form of that date.<br>
User Story: If it does not contain a date or Unix timestamp, it returns null for those properties.<br>

Example:<br>
https://timesmicroservice.herokuapp.com/1454345343977<br>
https://timesmicroservice.herokuapp.com/February%201,%202016<br>
https://timesmicroservice.herokuapp.com/error_string<br>

Result:<br>
{"unix":"1454345343977","natural":"February 1, 2016"}<br>
{"unix":1454284800000,"natural":"February 1, 2016"}<br>
{"unix":null,"natural":null}<br>

Reference:<br>
https://www.gorkahernandez.com/blog/create-timestamp-microservice-node/
