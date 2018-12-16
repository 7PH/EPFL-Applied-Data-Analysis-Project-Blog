(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
var STATIC_HEADER_THRESHOLD = 400;
var pageControlsDiv = document.getElementById('page-tab-controls');
var staticHeaderDiv = document.getElementById('static-header');
var pageBody = document.getElementById('page-body');
var pageTabs = document.getElementById('page-tabs');
var bind = function () {
    var radios = document.getElementsByClassName('tab-select-radio');
    for (var i = 0; i < radios.length; ++i)
        radios[i].addEventListener('click', function (evt) {
            return updateTab(evt.target.value);
        });
};
var showStaticHeader = function () {
    staticHeaderVisible = true;
    staticHeaderDiv
        .classList
        .remove('static-header-hidden');
    staticHeaderDiv.appendChild(pageControlsDiv);
};
var hideStaticHeader = function () {
    staticHeaderVisible = false;
    staticHeaderDiv
        .classList
        .add('static-header-hidden');
    pageBody.insertBefore(pageControlsDiv, pageTabs);
};
var updateTab = function (value) {
    var tabs = document.getElementsByClassName('page-tab');
    for (var i = 0; i < tabs.length; ++i)
        tabs[i].classList.add('tab-hidden');
    document.getElementById('tab-' + value)
        .classList
        .remove('tab-hidden');
};
var staticHeaderVisible = false;
var onScroll = function () {
    if (window.scrollY > STATIC_HEADER_THRESHOLD && !staticHeaderVisible) {
        showStaticHeader();
    }
    else if (window.scrollY < STATIC_HEADER_THRESHOLD && staticHeaderVisible) {
        hideStaticHeader();
    }
};
var init = function () {
    bind();
    updateTab('0');
};
window.onload = init;
window.onscroll = onScroll;

},{}]},{},[1])

