// ==UserScript==
// @name         Resi-Rang-Anzeige
// @namespace    http://tampermonkey.net/
// @version      1.3
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
    let output = document.createElement('a');
    document.getElementsByClassName('muenzen_marken')[0].after(output);

    function periodic(){
        $.ajax({
        url: "/api/user",
        dataType: "json",
        type : "GET",
        success : function(r) {
            let rank = r.toplistRank.toLocaleString();
            let name = document.createTextNode('Dein Rang: ' + rank);
            document.getElementsByClassName('muenzen_marken')[0].after(output);
            output.href = 'toplist';
            output.appendChild(name);
            output.setAttribute('data-tooltip', 'Dein aktueller Rang in der Topliste.');
            output.setAttribute('class', 'frame-opener');
            output.setAttribute('frame', '1/1/4/4');
            output.setAttribute('frame-url', 'toplist');
            }
        });
    };
    periodic()
    setInterval(periodic, 60000) //Aktualisiert alle 10min
}
PlaceRank();