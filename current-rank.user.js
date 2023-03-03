// ==UserScript==
// @name         ReSi - Rang-Anzeige
// @namespace    http://tampermonkey.net/
// @version      1.5.4.3
// @description  shows current rank for rettungssimulator.online
// @author       QuCla
// @match        https://rettungssimulator.online/*
// @updateURL    https://github.com/QuCla/resi-rank-navleiste/raw/master/current-rank.user.js
// @grant        none
// @run-at       document-end
// ==/UserScript==
'use strict';
var userLang = navigator.language;
var langObj;

const deText = {
    header : 'Dein Rang: ',
    tooltip: 'Dein aktueller Rang in der Topliste.'
}

const enText = {
    header : 'your rank: ',
    tooltip: 'Your actual rank within the toplist.'
}


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
            let ranksite = Math.ceil(rank / 20);
            let name = (langObj.header + ' ' + rank);
            document.getElementsByClassName('muenzen_marken')[0].after(toplevel);
            toplevel.setAttribute('class', 'showRank');
            toplevel.appendChild(lowlevel);
            lowlevel.innerHTML = name;
            lowlevel.setAttribute('data-tooltip', langObj.tooltip);
            lowlevel.setAttribute('class', 'frame-opener');
            lowlevel.setAttribute('frame', '1/1/4/4');
            let link = 'toplist/' + ranksite;
            lowlevel.setAttribute('frame-url', link);
            }
        });
    };
    periodic()
    setInterval(periodic, 600000) //Aktualisiert alle 10min
}


if(userLang.match('de')){
    langObj = deText;
    }
else{
    langObj = enText;
    }

PlaceRank();