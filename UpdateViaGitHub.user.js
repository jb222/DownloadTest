// ==UserScript==
// @name         UpdateViaGitHub
// @namespace    http://tampermonkey.net/
// @version      0.7
// @description  try to take over the world!
// @author       You
// @include      *://www.iex.tld/*
// @updateURL    https://github.com/jb222/DownloadTest/blob/main/UpdateViaGitHub.user.js
// @downloadURL  https://github.com/jb222/DownloadTest/blob/main/UpdateViaGitHub.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // testing auto update to 0.7
    console.log("Script:", GM_info.script.name);
    console.log("Versie:", GM_info.script.version);
})();
