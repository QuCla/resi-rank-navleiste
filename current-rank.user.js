// ==UserScript==
// @name         Resi-Rang-Anzeige
// @namespace    http://tampermonkey.net/
<<<<<<< HEAD:main
// @version      1.0
<<<<<<< HEAD:main
<<<<<<< HEAD:main
// @description  Zwingt den aktuellen Rank in die Navigationsleiste
=======
=======
// @version      0.9
>>>>>>> 5e413b4 (update user script comment):current-rank.js
// @description  shows current rank for rettungssimulator.online
>>>>>>> b01fc38 (master release 1.0):current-rank.user.js
=======
// @description  shows current rank for rettungssimulator.online
>>>>>>> 23816b6 (change init to user script):current-rank.js
// @author       QuCla
// @match        https://rettungssimulator.online/*
// @updateURL    https://github.com/QuCla/resi-rank-navleiste/raw/master/current-rank.user.js
// @downloadURL  https://github.com/QuCla/resi-rank-navleiste/raw/master/current-rank.user.js
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
            var rank = "TEST"
            ausgabe.innerHTML= "Dein Rank: " + rank;
            }
        });
    };
    zyklisch()
    setInterval(zyklisch, 60000) //Aktualisiert alle 10min
})
();