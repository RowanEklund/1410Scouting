let EWR = 0, EWDZ = false, EWSL = false, AWCZ = false, AHGS = 0, AHGM = 0, ALGS = 0, ALGM = 0, AMGS = 0, AMGM = 0, TLGM = 0, TLGS = 0, TMGM = 0, TMGS = 0, THGM = 0, THGS = 0, ELGM = 0, ELGS = 0, EMGM = 0, EMGS = 0, EHGM = 0, EHGS = 0, APS = 0, EPS = 0, PMA = 0, PMI = 0;
const close = document.getElementById("close");
const closeQR = document.getElementById("closeQR");
const modal = document.getElementById("modal");
const modalQR = document.getElementById("modalQR");
const SendBtn = document.getElementById("send");
const QRBtn = document.getElementById("qr");


let rqst = new XMLHttpRequest();
//let url = "http://localhost:80";
let url = 'https://9491d7f600f4.ngrok.io';
let type = "POST"
let qr;

(function() {
    qr = new QRious({
        element: document.getElementById('qr-code'),
        size: 200,
    });
})();

function generateQRCode() {
    qr.set({
        foreground: 'black',
        size: 200,
        value: JSON.stringify({
            Scout_Number: document.getElementById("SN").value.toString(),
            Team_Number: document.getElementById("TN").value.toString(),
            Auto_Low_Goal_Scored: ALGS.toString(),
            Auto_Low_Goal_Missed: ALGM.toString(),
            Auto_Mid_Goal_Scored: AMGS.toString(),
            Auto_Mid_Goal_Missed: AMGM.toString(),
            Auto_High_Goal_Scored: AHGS.toString(),
            Auto_High_Goal_Missed: AHGM.toString(),
            Auto_Power_Shot_Target: APS.toString(),
            Auto_Wobble_Correct_Zone: AWCZ.toString(),
            // Auto_Wobble_Correct_Zone: document.getElementById("AWCZ").value.toString(),

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
            Endgame_Wobble_Start_Line: EWSL.toString(),
            Endgame_Wobble_Drop_Zone: EWDZ.toString(),
            Endgame_Wobble_Rings: EWR.toString(),
            // Endgame_Wobble_Start_Line: document.getElementById("EWSL").value.toString(),
            // Endgame_Wobble_Drop_Zone: document.getElementById("EWDZ").value.toString(),
            // Endgame_Wobble_Rings : document.getElementById("EWR").value.toString(),

            // Penalty_Major: PMA.toString(),
            // Penalty_Minor: PMI.toString(),
        })
    });
}


// function detectMobile() {
//     return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) //True if on mobile, false if not
// }
//
// function touchDetect(event, variable) {
//     if (event.targetTouches > 1) { //2 Finger Detection
//         variable--;
//     }
// }

function openTab(evt, tabName) {
    let i, tabContent, tabLink;
    tabContent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    tabLink = document.getElementsByClassName("tabLinks");
    for (i = 0; i < tabLink.length; i++) {
        tabLink[i].className = tabLink[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
   // evt.currentTarget.className += "active";
}

function resetVar() {
    EWR = 0; EWDZ = false; EWSL = false; AWCZ = false; AHGS = 0; AHGM = 0; ALGS = 0; ALGM = 0; AMGS = 0; AMGM = 0; TLGM = 0; TLGS = 0; TMGM = 0; TMGS = 0; THGM = 0; THGS = 0; ELGM = 0; ELGS = 0; EMGM = 0; EMGS = 0; EHGM = 0; EHGS = 0; APS = 0; EPS = 0; PMA = 0; PMI = 0;
    ELGMBtn.innerText = 'Low Goal Miss: ' + ELGM.toString();
    ELGSBtn.innerText = 'Low Goal Score: ' + ELGS.toString();
    EMGSBtn.innerText = 'Mid Goal Score: ' + EMGS.toString();
    EMGMBtn.innerText = 'Mid Goal Miss: ' + EMGM.toString();
    EHGSBtn.innerText = 'High Goal Score: ' + EHGS.toString();
    EHGMBtn.innerText = 'High Goal Miss: ' + EHGM.toString();
    TLGSBtn.innerText = 'Low Goal Score: ' + TLGS.toString();
    TLGMBtn.innerText = 'Low Goal Miss: ' + TLGM.toString();
    TMGSBtn.innerText = 'Mid Goal Score: ' + TMGS.toString();
    TMGMBtn.innerText = 'Mid Goal Miss: ' + TMGM.toString();
    THGSBtn.innerText = 'High Goal Score: ' + THGS.toString();
    THGMBtn.innerText = 'High Goal Miss: ' + THGM.toString();
    ALGSBtn.innerText = 'Low Goal Score: ' + ALGS.toString();
    ALGMBtn.innerText = 'Low Goal Miss: ' + ALGM.toString();
    AMGSBtn.innerText = 'Mid Goal Score: ' + AMGS.toString();
    AMGMBtn.innerText = 'Mid Goal Miss: ' + AMGM.toString();
    AHGSBtn.innerText = 'High Goal Score: ' + AHGS.toString();
    AHGMBtn.innerText = 'High Goal Miss: ' + AHGM.toString();
    APSBtn.innerText = 'Power Shot: ' + APS.toString();
    EPSBtn.innerText = 'Power Shot: ' + EPS.toString();
    EWRBtn.innerText = 'Endgame Wobble Rings: ' + EWR.toString();
    // PMABtn.innerText = 'Major Penalty: ' + PMA.toString();
    // PMIBtn.innerText = 'Minor Penalty: ' + PMI.toString();
    // PMA2Btn.innerText = 'Major Penalty: ' + PMA.toString();
    // PMI2Btn.innerText = 'Minor Penalty: ' + PMI.toString();
    // PMA3Btn.innerText = 'Major Penalty: ' + PMA.toString();
    // PMI3Btn.innerText = 'Minor Penalty: ' + PMI.toString();
    // PMA4Btn.innerText = 'Major Penalty: ' + PMA.toString();
    // PMI4Btn.innerText = 'Minor Penalty: ' + PMI.toString();
}

EWRBtn = document.getElementById("EWR");
EWRBtn.onmousedown = function () {if (event.buttons === 2 || event.buttons === 4) {EWR--;} else {EWR++;}EWRBtn.innerText = 'Endgame Wobble Rings: ' + EWR.toString();}
ELGMBtn = document.getElementById("ELGM");
ELGMBtn.onmousedown = function () {if (event.buttons === 2 || event.buttons === 4) {ELGM--;} else {ELGM++;}ELGMBtn.innerText = 'Low Goal Miss: ' + ELGM.toString();}
ELGSBtn = document.getElementById("ELGS");
ELGSBtn.onmousedown = function () {if (event.buttons === 2 || event.buttons === 4) {ELGS--;} else {ELGS++;}ELGSBtn.innerText = 'Low Goal Score: ' + ELGS.toString();}
EMGSBtn = document.getElementById("EMGS");
EMGSBtn.onmousedown = function () {if (event.buttons === 2 || event.buttons === 4) {EMGS--;} else {EMGS++;}EMGSBtn.innerText = 'Mid Goal Score: ' + EMGS.toString();}
EMGMBtn = document.getElementById("EMGM");
EMGMBtn.onmousedown = function () {if (event.buttons === 2 || event.buttons === 4) {EMGM--;} else {EMGM++;}EMGMBtn.innerText = 'Mid Goal Miss: ' + EMGM.toString();}
EHGSBtn = document.getElementById("EHGS");
EHGSBtn.onmousedown = function () {if (event.buttons === 2 || event.buttons === 4) {EHGS--;} else {EHGS++;}EHGSBtn.innerText = 'High Goal Score: ' + EHGS.toString();}
EHGMBtn = document.getElementById("EHGM");
EHGMBtn.onmousedown = function () {if (event.buttons === 2 || event.buttons === 4) {EHGM--;} else {EHGM++;}EHGMBtn.innerText = 'High Goal Miss: ' + EHGM.toString();}
TLGSBtn = document.getElementById("TLGS");
TLGSBtn.onmousedown = function () {if (event.buttons === 2 || event.buttons === 4) {TLGS--;} else {TLGS++;}TLGSBtn.innerText = 'Low Goal Score: ' + TLGS.toString();}
TLGMBtn = document.getElementById("TLGM");
TLGMBtn.onmousedown = function () {if (event.buttons === 2 || event.buttons === 4) {TLGM--;} else {TLGM++;}TLGMBtn.innerText = 'Low Goal Miss: ' + TLGM.toString();}
TMGSBtn = document.getElementById("TMGS");
TMGSBtn.onmousedown = function () {if (event.buttons === 2 || event.buttons === 4) {TMGS--;} else {TMGS++;}TMGSBtn.innerText = 'Mid Goal Score: ' + TMGS.toString();}
TMGMBtn = document.getElementById("TMGM");
TMGMBtn.onmousedown = function () {if (event.buttons === 2 || event.buttons === 4) {TMGM--;} else {TMGM++;}TMGMBtn.innerText = 'Mid Goal Miss: ' + TMGM.toString();}
THGSBtn = document.getElementById("THGS");
THGSBtn.onmousedown = function () {if (event.buttons === 2 || event.buttons === 4) {THGS--;} else {THGS++;}THGSBtn.innerText = 'High Goal Score: ' + THGS.toString();}
THGMBtn = document.getElementById("THGM");
THGMBtn.onmousedown = function () {if (event.buttons === 2 || event.buttons === 4) {THGM--;} else {THGM++;}THGMBtn.innerText = 'High Goal Miss: ' + THGM.toString();}
ALGSBtn = document.getElementById("ALGS");
ALGSBtn.onmousedown = function () {if (event.buttons === 2 || event.buttons === 4) {ALGS--;} else {ALGS++;}ALGSBtn.innerText = 'Low Goal Score: ' + ALGS.toString();}
ALGMBtn = document.getElementById("ALGM");
ALGMBtn.onmousedown = function () {if (event.buttons === 2 || event.buttons === 4) {ALGM--;} else {ALGM++;}ALGMBtn.innerText = 'Low Goal Miss: ' + ALGM.toString();}
AMGSBtn = document.getElementById("AMGS");
AMGSBtn.onmousedown = function () {if (event.buttons === 2 || event.buttons === 4) {AMGS--;} else {AMGS++;}AMGSBtn.innerText = 'Mid Goal Score: ' + AMGS.toString();}
AMGMBtn = document.getElementById("AMGM");
AMGMBtn.onmousedown = function () {if (event.buttons === 2 || event.buttons === 4) {AMGM--;} else {AMGM++;}AMGMBtn.innerText = 'Mid Goal Miss: ' + AMGM.toString();}
AHGSBtn = document.getElementById("AHGS");
AHGSBtn.onmousedown = function () {if (event.buttons === 2 || event.buttons === 4) {AHGS--;} else {AHGS++;}AHGSBtn.innerText = 'High Goal Score: ' + AHGS.toString();}
AHGMBtn = document.getElementById("AHGM");
AHGMBtn.onmousedown = function () {if (event.buttons === 2 || event.buttons === 4) {AHGM--;} else {AHGM++;}AHGMBtn.innerText = 'High Goal Miss: ' + AHGM.toString();}

APSBtn = document.getElementById("APS");
APSBtn.onmousedown = function () {if (event.buttons === 2 || event.buttons === 4) {APS--;} else {APS++;}APSBtn.innerText = 'Power Shot: ' + APS.toString();}
EPSBtn = document.getElementById("EPS");
EPSBtn.onmousedown = function () {if (event.buttons === 2 || event.buttons === 4) {EPS--;} else {EPS++;}EPSBtn.innerText = 'Power Shot: ' + EPS.toString();}

AWCZBtn = document.getElementById("AWCZ");
AWCZBtn.onmousedown = function () {AWCZ = !AWCZ; if (AWCZ) {AWCZBtn.innerText = 'Auto Wobble Correct Zone: In';} else {AWCZBtn.innerText = 'Auto Wobble Correct Zone: Out';}}
EWSLBtn = document.getElementById("EWSL");
EWSLBtn.onmousedown = function () {EWSL = !EWSL; if (EWSL) {EWSLBtn.innerText = 'Endgame Wobble Start Line: On';} else {EWSLBtn.innerText = 'Endgame Wobble Start Line: Off';}}
EWDZBtn = document.getElementById("EWDZ");
EWDZBtn.onmousedown = function () {EWDZ = !EWDZ; if (EWDZ) {EWDZBtn.innerText = 'Endgame Wobble Drop Zone: In';} else {EWDZBtn.innerText = 'Endgame Wobble Drop Zone: Out';}}

// PMABtn = document.getElementById("PMA");
// PMABtn.onmousedown = function () {if (event.buttons === 2 || event.buttons === 4) {PMA--;} else {PMA++;}PMABtn.innerText = 'Major Penalty: ' + PMA.toString();}
// PMIBtn = document.getElementById("PMI");
// PMIBtn.onmousedown = function () {if (event.buttons === 2 || event.buttons === 4) {PMI--;} else {PMI++;}PMIBtn.innerText = 'Minor Penalty: ' + PMI.toString();}
// PMA2Btn = document.getElementById("PMA2");
// PMA2Btn.onmousedown = function () {if (event.buttons === 2 || event.buttons === 4) {PMA--;} else {PMA++;}PMA2Btn.innerText = 'Major Penalty: ' + PMA.toString();}
// PMI2Btn = document.getElementById("PMI2");
// PMI2Btn.onmousedown = function () {if (event.buttons === 2 || event.buttons === 4) {PMI--;} else {PMI++;}PMI2Btn.innerText = 'Minor Penalty: ' + PMI.toString();}
// PMA3Btn = document.getElementById("PMA3");
// PMA3Btn.onmousedown = function () {if (event.buttons === 2 || event.buttons === 4) {PMA--;} else {PMA++;}PMA3Btn.innerText = 'Major Penalty: ' + PMA.toString();}
// PMI3Btn = document.getElementById("PMI3");
// PMI3Btn.onmousedown = function () {if (event.buttons === 2 || event.buttons === 4) {PMI--;} else {PMI++;}PMI3Btn.innerText = 'Minor Penalty: ' + PMI.toString();}
// PMA4Btn = document.getElementById("PMA4");
// PMA4Btn.onmousedown = function () {if (event.buttons === 2 || event.buttons === 4) {PMA--;} else {PMA++;}PMA4Btn.innerText = 'Major Penalty: ' + PMA.toString();}
// PMI4Btn = document.getElementById("PMI4");
// PMI4Btn.onmousedown = function () {if (event.buttons === 2 || event.buttons === 4) {PMI--;} else {PMI++;}PMI4Btn.innerText = 'Minor Penalty: ' + PMI.toString();}

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
        Auto_Wobble_Correct_Zone: AWCZ.toString(),
        // Auto_Wobble_Correct_Zone: document.getElementById("AWCZ").value.toString(),

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
        Endgame_Wobble_Start_Line: EWSL.toString(),
        Endgame_Wobble_Drop_Zone: EWDZ.toString(),
        Endgame_Wobble_Rings: EWR.toString(),
        // Endgame_Wobble_Start_Line: document.getElementById("EWSL").value.toString(),
        // Endgame_Wobble_Drop_Zone: document.getElementById("EWDZ").value.toString(),
        // Endgame_Wobble_Rings : document.getElementById("EWR").value.toString(),

        // Penalty_Major: PMA.toString(),
        // Penalty_Minor: PMI.toString(),
    }));
    resetVar();
    modal.style.display = "block";
}

QRBtn.onclick = function () {
    generateQRCode();
    resetVar();
    modalQR.style.display = "block";
}

close.onclick = function () {modal.style.display = "none";}

closeQR.onclick = function () {modalQR.style.display = "none";}

window.onclick = function(event) {
    if (event.target === modal || event.target === modalQR) {
        modal.style.display = "none";
        modalQR.style.display = "none";
    }
}