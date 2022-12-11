// ==UserScript==
// @name         Open Kattis Dark Mode
// @version      0.1
// @description  Dark mode for Open Kattis
// @author       SolarRabbit
// @match        https://open.kattis.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @resource     darktheme https://raw.githubusercontent.com/solarrabbit99/kattis-dark/master/darktheme.css
// @grant        GM_addStyle
// @grant        GM_getResourceText
// ==/UserScript==

(function () {
  "use strict";

  var style = GM_getResourceText("darktheme");

  GM_addStyle(style);
})();
