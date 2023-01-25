// ==UserScript==
// @name         Resi-Rank-Anzeige
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Current rank for rettungssimulator.online
// @author       QuCla
// @match        https://rettungssimulator.online/*
// @icon         
// @updateURL    https://github.com/QuCla/resi-rank-navleiste/blob/95f5674b80387165b01dd45eae1c26a768a96913/init.user.js
// @downloadURL  https://github.com/QuCla/resi-rank-navleiste/blob/95f5674b80387165b01dd45eae1c26a768a96913/init.user.js
// @grant        none
// @run-at       document-end
// ==/UserScript==

const script = document.createElement('script');

//script.src = 'https://keineahnung.eu/resi-script-manager/js/bundle.js';
script.src = 'https://github.com/QuCla/resi-rank-navleiste/blob/95f5674b80387165b01dd45eae1c26a768a96913/current-rank.js';
document.head.appendChild(script);
