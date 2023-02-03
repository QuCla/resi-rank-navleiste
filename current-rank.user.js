// ==UserScript==
// @name         Resi-Rang-Anzeige
// @namespace    http://tampermonkey.net/
// @version      1.3.2
// @description  shows current rank for rettungssimulator.online
// @author       QuCla
// @match        https://rettungssimulator.online/*
// @updateURL    https://github.com/QuCla/resi-rank-navleiste/raw/master/current-rank.user.js
// @downloadURL  https://github.com/QuCla/resi-rank-navleiste/raw/master/current-rank.user.js
// @grant        none
// @run-at       document-end
// ==/UserScript==

'use strict';

function PlaceRank() {
    let toplevel = document.createElement('div');
    let lowlevel = document.createElement('div');

    function periodic(){
        $.ajax({
        url: "/api/user",
        dataType: "json",
        type : "GET",
        success : function(r) {
            let rank = r.toplistRank.toLocaleString();
            let name = ('Dein Rang: ' + rank);
            document.getElementsByClassName('muenzen_marken')[0].after(toplevel);
            toplevel.setAttribute('class', 'showRank');
            toplevel.appendChild(lowlevel);
            lowlevel.innerHTML = name;
            lowlevel.setAttribute('data-tooltip', 'Dein aktueller Rang in der Topliste.');
            lowlevel.setAttribute('class', 'frame-opener');
            lowlevel.setAttribute('frame', '1/1/4/4');
            lowlevel.setAttribute('frame-url', 'toplist');
            }
        });
    };
    periodic()
    setInterval(periodic, 60000) //Aktualisiert alle 10min
}
PlaceRank();