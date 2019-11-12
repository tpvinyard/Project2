
console.log(encodeURIComponent("LA to new york"));
var axios = require("axios");
var queryURL = "http://api.wolframalpha.com/v1/result?appid=DEMO&i=How+far+is+Los+Angeles+from+New+York%3f";
axios.get(queryURL)
.then(function(res){
    console.log(res)
})
.catch(function(err){
    console.log(err)
})