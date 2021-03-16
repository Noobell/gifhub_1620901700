let requestURL = 'topicpost.json';
let request = new XMLHttpRequest();

let CurrentVideo = ""
function onClickVideo(payload) {
    CurrentVideo = payload
    let vdo_modal = "";
    vdo_modal += '<iframe class="embed-responsive-item" src="' + payload + '" allowfullscreen></iframe>';
    document.querySelector("#invideo-modal").innerHTML += vdo_modal;
    console.log(JSON.stringify(payload));
}
request.onreadystatechange = function () {
    if (request.readyState == 4 && request.status == 200) {
        dataReportStatus(JSON.parse(request.responseText));
    }
};
request.open("GET", requestURL, true);
request.send();

function dataReportStatus(data) {

    /*Watch Modal*/
    let watchmodal1 = "";
    watchmodal1 += '<iframe class="embed-responsive-item" src="' + data[0].trailer_url + '" allowfullscreen></iframe>';
    document.querySelector("#inwatch-modal1").innerHTML += watchmodal1;

    let watchmodal2 = "";
    watchmodal2 += '<iframe class="embed-responsive-item" src="' + data[2].trailer_url + '" allowfullscreen></iframe>';
    document.querySelector("#inwatch-modal2").innerHTML += watchmodal2;

    let watchmodal3 = "";
    watchmodal3 += '<iframe class="embed-responsive-item" src="' + data[3].trailer_url + '" allowfullscreen></iframe>';
    document.querySelector("#inwatch-modal3").innerHTML += watchmodal3;

    let watchmodal4 = "";
    watchmodal4 += '<iframe class="embed-responsive-item" src="' + data[4].trailer_url + '" allowfullscreen></iframe>';
    document.querySelector("#inwatch-modal4").innerHTML += watchmodal4;
    /*Watch Modal*/

    let recom = "";
    for (var i = 0; i < 3; i++) {
        recom += '<div id="poster" class="col-2 float-left"><img src="' + data[i].title_logo + '" height="400px;" width="90%;" style="margin-left:6%;">';
        recom += '<h6><b>' + data[i].title_food + '</b></h6>';
        recom += '<h6>' + data[i].status + '</h6>';
        recom += '</div>';
    }
    document.querySelector("#col-recom1").innerHTML += recom;
    
}