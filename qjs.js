'use stict';

/*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    QJS это простая библиотека сокращающая написание кода
    V0.01 - 24.11.21
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/

const D = document;
const W = window;

/*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    get == querySelector
    getA == querySelectorAll
    deb == console.log
    debW == console.warn
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/

function get(selectorElement, parentElement) {
    if(!parentElement) {
        parentElement = document;
    }
    return parentElement.querySelector(selectorElement);
}

function getA(selectorElements, parentElement) {
    if(!parentElement) {
        parentElement = document;
    }
    return parentElement.querySelectorAll(selectorElements);
}

function deb(data) {
    console.log(data);
}

function debW(data) {
    console.warn(data);
}

/*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    setA == setAttribute
    remA == removeAttribute
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/

function setA(selectorElement, atribute, value) {
    document.querySelector(selectorElement).setAttribute(atribute, value);
}

function remA(selectorElement, atribute) {
    document.querySelector(selectorElement).removeAttribute(atribute);
}

/*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    href == location.href
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/

function href(url) {
    window.location.href = url;
}
