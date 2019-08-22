var handles = require('handlebars');
var mongo = require('mongodb').MongoClient;
var mvdom = require("mvdom");
const url = 'mongodb://localhost:27017';
var sidebar = require("./structure/Sidebar");
var header = require("./structure/Header");
var toolbar = require("./structure/Toolbar");


class MainView {
    constructor(data){
        this.data = data
    }
    init(){
        var view = this; // best practice
        view.el;
    }
    create(){
        return `<div id="main"><div id="header"></div><div id="sidebar"></div><div id="content"></div><div id="toolbar"></div></div>`;
    }
    postDisplay(){
        mvdom.display(new sidebar(), this.el.find("sidebar"));
    }
}

mvdom.display(new MainView('moj text'),'body','first'); // by default will append last ('last') to body
