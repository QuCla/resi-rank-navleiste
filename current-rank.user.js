// ==UserScript==
// @name         Resi-Rang-Anzeige
// @namespace    http://tampermonkey.net/
// @version      0.9
// @description  shows current rank for rettungssimulator.online
// @author       QuCla
// @match        https://rettungssimulator.online/*
// @updateURL    https://github.com/QuCla/resi-rank-navleiste/raw/master/current-rank.js
// @downloadURL  https://github.com/QuCla/resi-rank-navleiste/raw/master/current-rank.js
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';
    var ausgabe = document.createElement("div");
    document.getElementsByClassName("muenzen_marken")[0].after(ausgabe);


    var zyklisch= function(){
        $.ajax({
        url: "/api/user",
        dataType: "json",
        type : "GET",
        success : function(r) {
            var rank = r.toplistRank.toLocaleString();
            ausgabe.innerHTML= "Dein Rank: " + rank;
            }
        });
    };
    zyklisch()
    setInterval(zyklisch, 60000) //Aktualisiert alle 10min
})
();