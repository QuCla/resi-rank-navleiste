// ==UserScript==
// @name         Resi-Rank-Anzeige
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Current rank for rettungssimulator.online
// @author       QuCla
// @match        https://rettungssimulator.online/*
// @updateURL    https://github.com/QuCla/resi-rank-navleiste/raw/master/init.user.js
// @downloadURL  https://github.com/QuCla/resi-rank-navleiste/raw/master/init.user.js
// @grant        none
// @run-at       document-end
// ==/UserScript==

const script = document.createElement('script');

//script.src = 'https://keineahnung.eu/resi-script-manager/js/bundle.js';
script.src = 'https://github.com/QuCla/resi-rank-navleiste/raw/master/current-rank.js';
document.head.appendChild(script);
