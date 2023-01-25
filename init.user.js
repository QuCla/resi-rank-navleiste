// ==UserScript==
// @name         Resi-Rank-Anzeige
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Current rank for rettungssimulator.online
// @author       QuCla
// @match        https://rettungssimulator.online/*
// @icon         
// @updateURL    https://github.com/TheKeineAhnung/resi-script-manager/raw/dev/init.user.js
// @downloadURL  https://github.com/TheKeineAhnung/resi-script-manager/raw/dev/init.user.js
// @grant        none
// @run-at       document-end
// ==/UserScript==

const script = document.createElement('script');

//script.src = 'https://keineahnung.eu/resi-script-manager/js/bundle.js';
script.src = 'https://github.com/QuCla/resi-rank-navleiste/blob/3c5167e4976bef6adf1554ff45aad33687542299/main.js';
document.head.appendChild(script);

https://github.com/QuCla/resi-rank-navleiste/blob/3c5167e4976bef6adf1554ff45aad33687542299/main.js