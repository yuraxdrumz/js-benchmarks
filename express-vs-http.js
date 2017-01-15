const Promise = require('bluebird');
const http = require('http');
const express = require('express');
const app = express();

app.get('/',(req,res)=>{
  check(req,res).then(data=>{
    res.send(data);
  });
});
app.listen(3000);
http.createServer((req,res)=>{
  check(req,res).then(data=>{
    res.write(data);
    res.end();
  })
}).listen(3000);



let check = (req,res) =>{
  return Promise.try(()=>{
    return 'done with Async'
  })
};
// ----------------------------------------------------
// express
// ----------------------------------------------------
// Concurrency Level:      500
// Time taken for tests:   103.021 seconds
// Complete requests:      100000
// Failed requests:        0
// Total transferred:      20900000 bytes
// HTML transferred:       1500000 bytes
// Requests per second:    970.68 [#/sec] (mean)
// Time per request:       515.105 [ms] (mean)
// Time per request:       1.030 [ms] (mean, across all concurrent requests)
// Transfer rate:          198.12 [Kbytes/sec] received

// ----------------------------------------------------
// http
// ----------------------------------------------------
// Concurrency Level:      500
// Time taken for tests:   55.338 seconds
// Complete requests:      100000
// Failed requests:        0
// Total transferred:      9000000 bytes
// HTML transferred:       1500000 bytes
// Requests per second:    1807.09 [#/sec] (mean)
// Time per request:       276.688 [ms] (mean)
// Time per request:       0.553 [ms] (mean, across all concurrent requests)
// Transfer rate:          158.83 [Kbytes/sec] received
