const apiKey = require('./config');

function initWolfram(location) {
    $("#spinnerTemp").hide(); //hides the spinner once results load

    $.ajax({
        url: `http://api.wolframalpha.com/v2/query?${apiKey.config.wolfram}=DEMO&input=${query}`,
        method: "GET"
    }).then(function(response) {
        const tempK = response.list[0].main.temp;
        console.log(tempK);
        const tempF = Math.round((tempK - 273.15) * 9/5 + 32);
        console.log(tempF);
        $("#temp-card").append("<h3 id='temp-val'>" + tempF + "° F</h3>");
        $("#temp-val").css("margin-left", "30%");
        $("#temp-val").css("margin-right", "30%");
        tempColor(tempF);

    }).catch(function(error) {
        console.log("AJAX GET failed");
    });
}

function tempColor(temp) {
    if (temp > 110) {
        $("#temp-val").css("background-color", "rgba(150,0,0,0.66)");
    } else if (temp > 100) {
        $("#temp-val").css("background-color", "rgba(200,0,0,0.66)");
    } else if (temp > 90) {
        $("#temp-val").css("background-color", "rgba(255,0,0,0.66)");
    } else if (temp > 80) {
        $("#temp-val").css("background-color", "rgba(255,130,0,0.66)");
    } else if (temp > 70) {
        $("#temp-val").css("background-color", "rgba(255,192,0,0.66)");
    } else if (temp > 60) {
        $("#temp-val").css("background-color", "rgba(255,255,0,0.66)");
    } else if (temp > 50) {
        $("#temp-val").css("background-color", "rgba(204,230,40,0.66)");
    } else if (temp > 40) {
        $("#temp-val").css("background-color", "rgba(146,208,80,0.66)");
    } else {
        $("#temp-val").css("background-color", "rgba(115,190,211,0.66)");
    };
}