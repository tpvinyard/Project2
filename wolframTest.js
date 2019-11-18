
// // https://products.wolframalpha.com/api/libraries/javascript/
// // 1 npm i -g npm 
// // 2 Next, import the class, and instantiate it with your 'AppID':

// var WolframAlphaAPI = require('./ssswolframAPI.js');
// var waApi = WolframAlphaAPI('DEMO');

// //
// // 3
// waApi.getFull({
//     input: 'eclipse',
//     output: 'json',
//   }).then(console.log).catch(console.error)


  

// waApi.getSpoken("when is labor day in 2020")
//   .then(console.log).catch(console.error);

const WolframAlphaAPI = require('@dguttman/wolfram-alpha-api');
const waApi = WolframAlphaAPI('G28HUV-QJ487E38KH');





var axios = require("axios");
var query= encodeURIComponent("is there an eclipse today");
var queryURL = "http://api.wolframalpha.com/v2/query?appid=DEMO&i=" + query+ "&output=json";
console.log("query url: "+queryURL);
axios.get(queryURL)
.then(function(res){
    console.log("JSON: ",res);
    console.log("data: ",res.data.queryresult);
    console.log(" status :" + res.status, " statusText: " + res.status.statusText);
    
})
.catch(function(err){
    console.log(err)
})




console.log('about to call wolframAPI');
waApi.getSpoken('is there an eclipse today')
    .then(function(result){
        console.log(result)})

        .catch(function(err){
            console.log(err);
                             });
                           
    




