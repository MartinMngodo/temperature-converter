// active tabs
function openTemp(evt, tempConversion) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        tabcontent[i].style.transition = ".3s";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for(i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tempConversion).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get default open
document.getElementById("defaultOpen").click();

// Calculate Temp
let centigraderesult = document.querySelector("#centigraderesult");
let fahrenheitresult = document.querySelector("#fahrenheitresult");
let kelvinresult = document.querySelector("#kelvinresult");


function convertTemp() {
    let input = document.querySelector("#degrees").value;
    let type = document.querySelector("#temp-type").value;

    if(type == "fahrenheit") {
        let centigrade = parseFloat(input - 32) / 1.8;
        let centigradeans = Math.round(centigrade * 100) / 100;
        let fahrenheitans = (input);
        let kelvin = parseFloat(( input - 32) / 1.8 ) + 273.15;
        let kelvinans = Math.round(kelvin * 100) / 100;

        centigraderesult.innerHTML = centigradeans;
        fahrenheitresult.innerHTML = fahrenheitans;
        kelvinresult.innerHTML = kelvinans;
    } else if (type == "centigrade") {
        let centigradeans = (input);
        let fahrenheit = parseFloat(input * 1.8) + 32;
        let fahrenheitans = Math.round(fahrenheit * 100) / 100;
        let kelvin = parseFloat(input) + 273.15
        let kelvinans = Math.round(kelvin * 100) / 100;

        centigraderesult.innerHTML = centigradeans;
        fahrenheitresult.innerHTML = fahrenheitans;
        kelvinresult.innerHTML = kelvinans;
    } else if (type == "kelvin") {
        let centigrade = parseFloat(input) - 273.15;
        let centigradeans = Math.round(centigrade * 100) / 100;
        let fahrenheit = parseFloat((input- 273.15) * 1.8 ) + 32
        let fahrenheitans = Math.round(fahrenheit * 100) / 100;
        let kelvinans = (input);

        centigraderesult.innerHTML = centigradeans;
        fahrenheitresult.innerHTML = fahrenheitans;
        kelvinresult.innerHTML = kelvinans;
    }
}