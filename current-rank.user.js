// ==UserScript==
// @name         Resi-Rang-Anzeige
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  shows current rank for rettungssimulator.online
// @author       QuCla
// @match        https://rettungssimulator.online/*
// @updateURL    https://github.com/QuCla/resi-rank-navleiste/raw/master/current-rank.user.js
// @downloadURL  https://github.com/QuCla/resi-rank-navleiste/raw/master/current-rank.user.js
// @grant        none
// @run-at       document-end
// ==/UserScript==

function placeRank() {
    'use strict';
    let output = document.createElement("div");
    document.getElementsByClassName("muenzen_marken")[0].after(output);


    function periodic(){
        $.ajax({
        url: "/api/user",
        dataType: "json",
        type : "GET",
        success : function(r) {
            let rank = r.toplistRank.toLocaleString();
            output.innerHTML= "Dein Rank: " + rank;
            output.setAttribute('data-tooltip', 'Dein aktueller Rang in der Topliste.')
            }
        });
    };
    periodic()
    setInterval(periodic, 60000) //Aktualisiert alle 10min
}
placeRank();