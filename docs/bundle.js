(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
var bind = function () {
    var radios = document.getElementsByClassName('tab-select-radio');
    for (var i = 0; i < radios.length; ++i)
        radios[i].addEventListener('click', function (evt) {
            return updateTab(evt.target.value);
        });
};
var showStaticHeader = function () {
    staticHeaderVisible = true;
    document.getElementById('static-header')
        .classList
        .remove('static-header-hidden');
};
var hideStaticHeader = function () {
    staticHeaderVisible = false;
    document.getElementById('static-header')
        .classList
        .add('static-header-hidden');
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
    if (window.scrollY > 160 && !staticHeaderVisible) {
        showStaticHeader();
    }
    else if (window.scrollY < 160 && staticHeaderVisible) {
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

