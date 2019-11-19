var key = "59c83721a4d74e96957e24f2ad4d366a";
var url = "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=";
// var type = document.getElementById("type").value;
var urlx = "";
var textCity = "Use: City,Country(2 letters) or City. Eg: London,uk or Los Angeles";
var textZip = "Use: Zip,Country(2 letters) or Zip. Eg: 560017,in or 73344";

var btnS = document.getElementById("submit-btn");
// btnS.preventDefault();

window.onload = function() {
    if(!window.location.hash) {
        window.location = window.location + '#loaded';
        window.location.reload();
    }
}


$(".error-text").fadeOut(0);
$(".display-content").fadeOut(0);
// City: url + "city,country&appid=" + key
// Country: url + "zipcode,country&appid=" + key

$(".cx").change(function () {
    var type = $(".cx option:selected").val();
    var str = "";
    if (type == "city") {
        $("#hint-span").attr('title', textCity);
    } else {
        $("#hint-span").attr('title', textZip);
    }
}).change();

$("#inp-city-zip").change(function () {
    // console.log($("#inp-city-zip").val());
})

$("#submit-btn").click(function () {
    $(".error-text").fadeOut(200);
    $(".display-content").fadeOut(200);
    // console.log("-----------------------");
    // console.log($("#inp-city-zip").val());
    // console.log($(".tx option:selected").val());
    // console.log($(".cx option:selected").val());
    // console.log("-----------------------");
    // Construct URL
    var turl = $("#inp-city-zip").val();
    turl = turl.trim();
    var ind = turl.indexOf(',');
    var loc = turl.substring(0, ind);
    var con = turl.substring(ind + 1);
    con = con.replace(/\s/g, '');
    // console.log(loc + "," + con);
    if (loc == '')
        urlx = url + turl;
    else
        urlx = url + loc + "," + con;

    if ($(".tx option:selected").val() == "cel")
        urlx += "&units=metric";
    else
        urlx += "&units=imperial";


    urlx += "&appid=" + key;
    console.log(urlx);

    makeRequest();
})

//°

function makeRequest() {
    var request = new XMLHttpRequest();
    request.open('GET', urlx, true);
    request.onreadystatechange = function () {
        console.log(this.readyState + " " + this.status);
        if (this.readyState == 4 && this.status == 200) {
            var ttype = "";
            var data = JSON.parse(this.response);
            var lat = data.coord.lat;
            var lon = data.coord.lon;
            var hum = data.main.humidity;
            var temp = data.main.temp;
            var max = data.main.temp_max;
            var min = data.main.temp_min;
            var name = data.name;
            var cn = data.sys.country;
            var desc = "";
            var dtemp = "";
            for (i = 0; i < data.weather.length; i++) {
                dtemp = data.weather[i].description;
                if (i == data.weather.length - 1) {
                    desc += dtemp.charAt(0).toUpperCase() + dtemp.slice(1);
                } else {
                    desc += dtemp.charAt(0).toUpperCase() + dtemp.slice(1) + ", ";
                }
            }

            // $("#coord").text("Coordinates: <span>Latitude: " + lat + "Longitude: " + lon + "</span>");
            if (document.getElementById("temp").selectedIndex == "0")
                ttype = " °C";
            else
                ttype = " °F";
            document.getElementById("coord").innerHTML = "<b>Coordinates:</b><br/>Latitude: " + lat +
                "<br/>Longitude: " + lon;
            document.getElementById("hum").innerHTML = "<b>Humidity:</b> " + hum + "%";
            document.getElementById("res-temp").innerHTML = "<b>Temperature Details:</b><br/>Temperature: " +
                temp + ttype + "<br/>Max. Temperature: " + max + ttype + "<br/>Min. Temperature: " + min + ttype;
            document.getElementById("area").innerHTML = "<b>Location:</b><br/>City: " + name + "<br/>Country: " + cn;
            document.getElementById("desc").innerHTML = "<b>Description:</b><br/>" + desc;

            $(".display-content").show(200);
            console.log(data);
        } else if (this.status == 404) {
            console.log("try");
            $(".error-text").show(200);
            $(".display-content").fadeOut(200);
        }
    }
    request.send();
}