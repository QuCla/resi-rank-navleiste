// ==UserScript==
// @name         AktuellerRank
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Zwingt den aktuellen Rank in die Navigationsleiste
// @author       QuCla
// @match        https://rettungssimulator.online/*
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