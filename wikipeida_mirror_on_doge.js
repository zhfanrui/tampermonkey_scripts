// ==UserScript==
// @name         wikipeida mirror on dogedoge
// @namespace    https://github.com/zhfanrui/tampermonkey_scripts
// @version      0.1
// @description  Make dogedoge search's wikipedia results available in the wall
// @author       Stephen
// @include      http*://*.dogedoge.com/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';
    // window.location.replace(document.location.href.replace(/https?:\/\/([\w-]+)\.wikipedia\.org\/[\w-]+/, 'https://www.wikipedia-mirror.com/zh'));
    // window.location.replace(document.location.href.replace(/wikipedia/, 'wikipedia-mirror'));

    function open_new_window(full_link){
        window.open('javascript:window.name;', '<script>location.replace("'+full_link+'")<\/script>');
        return false;
    }

    var wiki = document.getElementsByClassName("result__title");
    var url = document.getElementsByClassName("result__extras");
    console.log(wiki[0]);
    console.log(url[0]);
    for(var i in wiki){
        console.log(i);
        if (wiki[i].innerText.includes("Wikipedia") ){
            var href = url[i].children[0].innerText;
            href = href.replace("wikipedia", "wikipedia-mirror");
            wiki[i].children[0].href = href;
            wiki[i].children[0].rel += " noreferrer";
            // wiki[i].children[0].onclick = open_new_window(href);
            // break;
        }
    }
})();
