// let output = document.getElementById("qrcode");
// let qrcode = new QRCode(output, "bruh");
let AHGS = 0, AHGM = 0, ALGS = 0, ALGM = 0, AMGS = 0, AMGM = 0, TLGM = 0, TLGS = 0, TMGM = 0, TMGS = 0, THGM = 0, THGS = 0, ELGM = 0, ELGS = 0, EMGM = 0, EMGS = 0, EHGM = 0, EHGS = 0, APS = 0, EPS = 0, PMA = 0, PMI = 0;

function openTab(evt, tabName) {
    let i, tabContent, tabLinks;
    tabContent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    tabLinks = document.getElementsByClassName("tabLinks");
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

ELGSBtn = document.getElementById("ELGS");
ELGSBtn.onclick = function () {ELGM++;ELGSBtn.innerText = "Low goal Score: " + ELGM.toString();}
ELGMBtn = document.getElementById("ELGM");
ELGMBtn.onclick = function () {ELGS++;ELGMBtn.innerText = "Low goal Miss: " + ELGS.toString();}
EMGSBtn = document.getElementById("EMGS");
EMGSBtn.onclick = function () {EMGS++;EMGSBtn.innerText = "Mid goal Score: " + EMGS.toString();}
EMGMBtn = document.getElementById("EMGM");
EMGMBtn.onclick = function () {EMGM++;EMGMBtn.innerText = "Mid goal Miss: " + EMGM.toString();}
EHGSBtn = document.getElementById("EHGS");
EHGSBtn.onclick = function () {EHGS++;EHGSBtn.innerText = "High goal Score: " + EHGS.toString();}
EHGMBtn = document.getElementById("EHGM");
EHGMBtn.onclick = function () {EHGM++;EHGMBtn.innerText = "High goal Miss: " + EHGM.toString();}
TLGSBtn = document.getElementById("TLGS");
TLGSBtn.onclick = function () {TLGM++;TLGSBtn.innerText = "Low goal Score: " + TLGM.toString();}
TLGMBtn = document.getElementById("TLGM");
TLGMBtn.onclick = function () {TLGS++;TLGMBtn.innerText = "Low goal Miss: " + TLGS.toString();}
TMGSBtn = document.getElementById("TMGS");
TMGSBtn.onclick = function () {TMGS++;TMGSBtn.innerText = "Mid goal Score: " + TMGS.toString();}
TMGMBtn = document.getElementById("TMGM");
TMGMBtn.onclick = function () {TMGM++;TMGMBtn.innerText = "Mid goal Miss: " + TMGM.toString();}
THGSBtn = document.getElementById("THGS");
THGSBtn.onclick = function () {THGS++;THGSBtn.innerText = "High goal Score: " + THGS.toString();}
THGMBtn = document.getElementById("THGM");
THGMBtn.onclick = function () {THGM++;THGMBtn.innerText = "High goal Miss: " + THGM.toString();}
ALGSBtn = document.getElementById("ALGS");
ALGSBtn.onclick = function () {ALGM++;ALGSBtn.innerText = "Low goal Score: " + ALGM.toString();}
ALGMBtn = document.getElementById("ALGM");
ALGMBtn.onclick = function () {ALGS++;ALGMBtn.innerText = "Low goal Miss: " + ALGS.toString();}
AMGSBtn = document.getElementById("AMGS");
AMGSBtn.onclick = function () {AMGS++;AMGSBtn.innerText = "Mid goal Score: " + AMGS.toString();}
AMGMBtn = document.getElementById("AMGM");
AMGMBtn.onclick = function () {AMGM++;AMGMBtn.innerText = "Mid goal Miss: " + AMGM.toString();}
AHGSBtn = document.getElementById("AHGS");
AHGSBtn.onclick = function () {AHGS++;AHGSBtn.innerText = "High goal Score: " + AHGS.toString();}
AHGMBtn = document.getElementById("AHGM");
AHGMBtn.onclick = function () {AHGM++;AHGMBtn.innerText = "High goal Miss: " + AHGM.toString();}

APSBtn = document.getElementById("APS");
APSBtn.onclick = function () {APS++;APSBtn.innerText = "Power Shot: " + APS.toString();}
EPSBtn = document.getElementById("EPS");
EPSBtn.onclick = function () {EPS++;EPSBtn.innerText = "Power Shot: " + EPS.toString();}

PMABtn = document.getElementById("PMA");
PMABtn.onclick = function () {PMA++;PMABtn.innerText = "Major Penalty: " + PMA.toString();}
PMIBtn = document.getElementById("PMI");
PMIBtn.onclick = function () {PMI++;PMIBtn.innerText = "Minor Penalty: " + PMI.toString();}

let rqst = new XMLHttpRequest();
let url = "http://localhost:3000";
let type = "POST"
let SendBtn = document.getElementById("send");

SendBtn.onclick = function () {
    rqst.open(type, url, true);
    rqst.setRequestHeader("Content-Type", "application/json");
    rqst.send(JSON.stringify({
        Scout_Number: document.getElementById("SN").value.toString(),
        Team_Number: document.getElementById("TN").value.toString(),
        Auto_Low_Goal_Scored: ALGS.toString(),
        Auto_Low_Goal_Missed: ALGM.toString(),
        Auto_Mid_Goal_Scored: AMGS.toString(),
        Auto_Mid_Goal_Missed: AMGM.toString(),
        Auto_High_Goal_Scored: AHGS.toString(),
        Auto_High_Goal_Missed: AHGM.toString(),
        Auto_Power_Shot_Target: APS.toString(),
        Auto_Wobble_Correct_Zone: document.getElementById("AWCZ").value.toString(),

        Teleop_Low_Goal_Scored: TLGS.toString(),
        Teleop_Low_Goal_Missed: TLGM.toString(),
        Teleop_Mid_Goal_Scored: TMGS.toString(),
        Teleop_Mid_Goal_Missed: TMGM.toString(),
        Teleop_High_Goal_Scored: THGS.toString(),
        Teleop_High_Goal_Missed: THGM.toString(),

        Endgame_Low_Goal_Scored: ELGS.toString(),
        Endgame_Low_Goal_Missed: ELGM.toString(),
        Endgame_Mid_Goal_Scored: EMGS.toString(),
        Endgame_Mid_Goal_Missed: EMGM.toString(),
        Endgame_High_Goal_Scored: EHGS.toString(),
        Endgame_High_Goal_Missed: EHGM.toString(),
        Endgame_Power_Shot_Target: EPS.toString(),
        Endgame_Wobble_Start_Line: document.getElementById("EWSL").value.toString(),
        Endgame_Wobble_Drop_Zone: document.getElementById("EWDZ").value.toString(),
        Endgame_Wobble_Rings : document.getElementById("EWR").value.toString(),

        Penalty_Major: PMA.toString(),
        Penalty_Minor: PMI.toString(),
    }));
}